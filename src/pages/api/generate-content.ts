import { NextApiRequest, NextApiResponse } from 'next';
import { generateImage, generateVideo } from '@/lib/falAiClient';
import { generateNarrative } from '@/lib/claudeClient';
import { generateInsights } from '@/lib/openAiClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { prompt, type } = req.body;

      let result;
      switch (type) {
        case 'image':
          result = await generateImage(prompt);
          break;
        case 'video':
          result = await generateVideo(prompt);
          break;
        case 'narrative':
          result = await generateNarrative(prompt);
          break;
        case 'insights':
          result = await generateInsights(prompt);
          break;
        default:
          throw new Error('Invalid content type');
      }

      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Error generating content' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}