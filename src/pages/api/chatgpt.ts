import type { APIRoute } from 'astro';
import { ChatGPTAPI } from 'chatgpt';

const chatapi = new ChatGPTAPI({
  apiKey: import.meta.env.OPENAI_API_KEY,
  debug: false,
  completionParams: {
    model: 'gpt-3.5-turbo',
    temperature: 0.5,
    top_p: 0.8,
  },
});

export const get: APIRoute = async ({ params }) => {
  return {
    body: JSON.stringify({ message: 'Hello world!' }),
  };
};

export const post: APIRoute = async ({ params, request }) => {
  const data = await request.formData();
  const res = await chatapi.sendMessage(prompt, {});
  console.log('res', res);
  return {
    body: JSON.stringify(res),
  };
};
