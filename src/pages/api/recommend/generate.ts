import type { APIRoute } from 'astro';
import OpenAI from 'openai';

import { pino } from 'pino';
const logger = pino({ level: 'debug' });

export const config = {
  runtime: 'edge',
};

const key = process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY : import.meta.env.OPENAI_API_KEY; // this should work for vercel
const openai = new OpenAI({
  apiKey: key,
});

export const sanitizeJSONString = (input: string) => input.replace(/[\n\r\t]/g, '');

export const get: APIRoute = async ({ params, request }) => {
  logger.debug('GET /api/recommend/generate');

  return new Response(JSON.stringify({ message: 'Hello world!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const post: APIRoute = async ({ params, request }) => {
  const body = await request.text();
  const { characters, relationships, skills, tense } = JSON.parse(body);

  const prompt = `Write a short recommendation for a male person Nik Chanda, who ${tense} a great person to work with. Specifically, with respect to his positive character attributes of ${characters.join(
    ', '
  )}, his skills in ${skills.join(', ')}, and his relationship with me as a ${relationships.join(
    ', '
  )}. Please use the following descriptive words where appropriate: "pleased, delighted, aquainted, dependable, intelligent, valuable asset, driven, genuine, qualified, adaptable." Please provide 1 option. Limit each option to 2600 characters or fewer, and return it in JSON format with the key "text". If there are any linebreaks in the response, please change them to the \\n character.`;

  logger.debug('POST /api/recommend/generate', { prompt });
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-16k-0613',
    messages: [{ role: 'user', content: prompt }],
  });
  logger.debug('POST /api/recommend/generate', { res });

  const resp = sanitizeJSONString(res.choices[0].message.content);
  //const resp = res.text); // this is to manage any replaces that might be needed

  let results = { text: 'There was a problem generating the recommendation. Please try again.' };
  try {
    const parsed = JSON.parse(resp);
    if (parsed) {
      results = parsed;
    }
  } catch (e) {
    logger.error(e);
    results = { text: resp };
  }

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
