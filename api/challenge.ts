import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  api: {
    bodyParser: true,
  },
};

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing API key' });
    return;
  }

  const {
    agentName,
    agentSpecialty,
    agentCredenceScore,
    agentSuccessRate,
    scenarioTitle,
    scenarioDescription,
    scenarioDifficulty
  } = req.body;

  const prompt = `You are evaluating an AI DeFi agent on the Mantle blockchain.

Agent: ${agentName}, Specialty: ${agentSpecialty}, Score: ${agentCredenceScore}/100, Success Rate: ${agentSuccessRate}%
Scenario: ${scenarioTitle} (${scenarioDifficulty}) - ${scenarioDescription}

Respond ONLY with this JSON, no extra text, no markdown:
{
  "passed": true,
  "score": 85,
  "analysis": "Brief 2 sentence analysis here.",
  "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3"]
}`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 500,
        messages: [
          {
            role: 'system',
            content: 'You are a DeFi agent evaluator. Always respond with valid JSON only, no markdown, no extra text.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      res.status(502).json({ error: 'AI error', detail: data });
      return;
    }

    const text = data.choices[0].message.content.trim();
    const clean = text.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);

    res.status(200).json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
