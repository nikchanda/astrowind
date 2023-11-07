import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';
import { createHash } from 'node:crypto';

const pb = new PocketBase('https://nikchanda-com.pockethost.io');
const pb_user = import.meta.env.SECRET_PB_EMAIL;
const pb_pass = import.meta.env.SECRET_PB_PASSWORD;

const createRecommendation = async (data) => {
  return await pb.collection('recommendations').create(data);
};

const sendResponse = (result) => {
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/*
export const GET: APIRoute = async ({ params, request }) => {
  return sendResponse({
    success: true,
    status: 'SUCCESS',
    message: 'No Action Taken',
    detail: { hash: createHash('md5').update(`hello, world`).digest('hex') },
  });
};
*/

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.text();

  console.log('body', body);

  const { name, title, text, link, attributes } = JSON.parse(body);
  let result = null;
  await pb.admins.authWithPassword(pb_user, pb_pass);
  const hash = createHash('md5').update(`${name}-${title}-${text}`).digest('hex');

  // Check if this already exists
  let exists = false;
  try {
    exists = await pb.collection('recommendations').getFirstListItem(`hash="${hash}"`);
    if (exists) {
      result = {
        success: true,
        status: 'SUCCESS',
        message: 'Recommendation Exists',
        detail: { id: exists.id, updated: exists.updated },
      };
    }
  } catch (e) {
    if (e.status != 404) {
      // 404 means not found, which is fine
      result = { success: false, status: 'ERROR', message: 'Recommendation Not Found', detail: e };
    }
  }
  if (result) {
    return sendResponse(result);
  }

  // Create it if it doesn't
  try {
    const record = await createRecommendation({
      name: name,
      title: title,
      text: text,
      url: link,
      hash: hash,
      attributes: attributes,
    });
    result = {
      success: true,
      status: 'SUCCESS',
      message: 'Recommendation Created',
      detail: { id: record.id, updated: record.updated },
    };
  } catch (e) {
    console.log('error', e);
    result = { success: false, status: 'ERROR', message: 'Recommendation Not Created', detail: e };
  }

  return sendResponse(result);
};
