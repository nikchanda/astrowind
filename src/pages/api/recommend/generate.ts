import type { APIRoute } from 'astro';
import { ChatGPTAPI } from 'chatgpt';

const key = import.meta.env.SECRET_OPENAI_API_KEY;
const chatapi = new ChatGPTAPI({
  apiKey: key,
  debug: false,
  completionParams: {
    model: 'gpt-3.5-turbo',
    temperature: 0.5,
    top_p: 0.8,
  },
});

export const sanitizeJSONString = (input: string) => input.replace(/[\n\r\t]/g, '');

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(JSON.stringify({ message: 'Hello world!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.text();
  const { characters, relationships, skills, tense } = JSON.parse(body);

  const prompt = `Write a short recommendation for a male person Nik Chanda, who ${tense} a great person to work with. Specifically, with respect to his positive character attributes of ${characters.join(
    ', '
  )}, his skills in ${skills.join(', ')}, and his relationship with me as a ${relationships.join(
    ', '
  )}. Please use the following descriptive words where appropriate: "pleased, delighted, aquainted, dependable, intelligent, valuable asset, driven, genuine, qualified, adaptable." Please provide 1 option. Limit each option to 2600 characters or fewer, and return it in JSON format with the key "text". If there are any linebreaks in the response, please change them to the \\n character.`;

  const res = await chatapi.sendMessage(prompt, {});
  const resp = sanitizeJSONString(res.text); // this is to manage any replaces that might be needed
  let results = { text: 'There was a problem generating the recommendation. Please try again.' };
  try {
    const parsed = JSON.parse(resp);
    if (parsed) {
      results = parsed;
    }
  } catch (e) {
    //console.log('error parsing response', e);
    results = { text: resp };
  }

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
