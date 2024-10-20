import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateInsights = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4-preview',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion.choices[0].message.content;
};