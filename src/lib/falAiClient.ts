import * as fal from '@fal-ai/serverless-client';

const falAiKey = process.env.FAL_AI_API_KEY;

if (!falAiKey) {
  throw new Error('Missing FAL.AI API key');
}

fal.config({
  credentials: falAiKey,
});

export const generateImage = async (prompt: string) => {
  const result = await fal.run('fal-ai/fast-sdxl', {
    input: {
      prompt: prompt,
      num_inference_steps: 50,
    },
  });
  return result.images[0].url;
};

export const generateVideo = async (prompt: string) => {
  const result = await fal.run('fal-ai/fast-text-to-video', {
    input: {
      prompt: prompt,
      num_frames: 24,
      fps: 8,
    },
  });
  return result.video_url;
};