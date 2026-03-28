import type { VercelRequest, VercelResponse } from '@vercel/node';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

interface ChallengeRequestBody {
  agentName: string;
    agentSpecialty: string;
      agentCredenceScore: number;
        agentSuccessRate: number;
          scenarioTitle: string;
            scenarioDescription: string;
              scenarioDifficulty: string;
              }

              interface AnthropicResponse {
                content: { type: string; text: string }[];
                }

                interface ChallengeResult {
                  passed: boolean;
                    score: number;
                      analysis: string;
                        recommendations: string[];
                        }

                        const isValidBody = (body: unknown): body is ChallengeRequestBody => {
                          if (typeof body !== 'object' || body === null) return false;
                            const b = body as Record<string, unknown>;
                              return (
                                  typeof b.agentName === 'string' &&
                                      typeof b.agentSpecialty === 'string' &&
                                          typeof b.agentCredenceScore === 'number' &&
                                              typeof b.agentSuccessRate === 'number' &&
                                                  typeof b.scenarioTitle === 'string' &&
                                                      typeof b.scenarioDescription === 'string' &&
                                                          typeof b.scenarioDifficulty === 'string'
                                                            );
                                                            };

                                                            export default async function handler(
                                                              req: VercelRequest,
                                                                res: VercelResponse
                                                                ): Promise<void> {
                                                                  if (req.method !== 'POST') {
                                                                      res.status(405).json({ error: 'Method not allowed' });
                                                                          return;
                                                                            }

                                                                              const apiKey = process.env.ANTHROPIC_API_KEY;
                                                                                if (!apiKey) {
                                                                                    res.status(500).json({ error: 'Server misconfiguration' });
                                                                                        return;
                                                                                          }

                                                                                            if (!isValidBody(req.body)) {
                                                                                                res.status(400).json({ error: 'Invalid request body' });
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

                                                                                                                                        Agent Details:
                                                                                                                                        - Name: ${agentName}
                                                                                                                                        - Specialty: ${agentSpecialty}
                                                                                                                                        - Credence Score: ${agentCredenceScore}/100
                                                                                                                                        - Success Rate: ${agentSuccessRate}%

                                                                                                                                        Challenge Scenario:
                                                                                                                                        - Title: ${scenarioTitle}
                                                                                                                                        - Difficulty: ${scenarioDifficulty}
                                                                                                                                        - Description: ${scenarioDescription}

                                                                                                                                        Based on this agent's profile and the scenario, simulate how it would perform.
                                                                                                                                        Respond ONLY with a valid JSON object in this exact format, no extra text:
                                                                                                                                        {
                                                                                                                                          "passed": true or false,
                                                                                                                                            "score": number between 0 and 100,
                                                                                                                                              "analysis": "2-3 sentence analysis of how the agent handled the scenario",
                                                                                                                                                "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3"]
                                                                                                                                                }`;

                                                                                                                                                  try {
                                                                                                                                                      const response = await fetch(ANTHROPIC_API_URL, {
                                                                                                                                                            method: 'POST',
                                                                                                                                                                  headers: {
                                                                                                                                                                          'Content-Type': 'application/json',
                                                                                                                                                                                  'x-api-key': apiKey,
                                                                                                                                                                                          'anthropic-version': '2023-06-01'
                                                                                                                                                                                                },
                                                                                                                                                                                                      body: JSON.stringify({
                                                                                                                                                                                                              model: 'claude-opus-4-5',
                                                                                                                                                                                                                      max_tokens: 1000,
                                                                                                                                                                                                                              messages: [{ role: 'user', content: prompt }]
                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                            if (!response.ok) {
                                                                                                                                                                                                                                                  res.status(502).json({ error: 'AI service error' });
                                                                                                                                                                                                                                                        return;
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                const data = await response.json() as AnthropicResponse;
                                                                                                                                                                                                                                                                    const text = data.content
                                                                                                                                                                                                                                                                          .filter(block => block.type === 'text')
                                                                                                                                                                                                                                                                                .map(block => block.text)
                                                                                                                                                                                                                                                                                      .join('');

                                                                                                                                                                                                                                                                                          const clean = text.replace(/```json|```/g, '').trim();
                                                                                                                                                                                                                                                                                              const result = JSON.parse(clean) as ChallengeResult;

                                                                                                                                                                                                                                                                                                  res.status(200).json(result);
                                                                                                                                                                                                                                                                                                    } catch {
                                                                                                                                                                                                                                                                                                        res.status(500).json({ error: 'Failed to process challenge' });
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                          }