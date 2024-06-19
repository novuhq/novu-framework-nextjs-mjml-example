import { Novu } from '@novu/node';

const novu = new Novu('<Your Novu API Key>');

export async function POST(request: Request) {
  const res = await request.json();

  await novu.trigger('mjml-email-workflow', {
    to: {
      subscriberId: 'novu-sub-two',
      email: res.email
    },
    payload: {
      text: res.text,
    },
  });

  console.log('triggered')
  return Response.json({ success: true });
}
