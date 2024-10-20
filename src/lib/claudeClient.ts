import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

export const generateNarrative = async (prompt: string) => {
  const completion = await anthropic.completions.create({
    model: 'claude-3-sonnet-20240229',
    max_tokens_to_sample: 1000,
    prompt: `Human: Generate a narrative story for a training video based on the following prompt: ${prompt}\n\nAssistant:`,
  });
  return completion.completion;
};