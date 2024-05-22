import { Echo } from "@novu/echo";
import { mjmlTemplate } from "./mjml";

export const echo = new Echo({
  apiKey: '<Your Novu API Key>',
  devModeBypassAuthentication: process.env.NODE_ENV === "development",
});

echo.workflow('mjml-email-workflow', async ({ payload, step }) => {
  await step.email('send-email', async (inputs) => {


    return {
      subject: `Welcome to MJML with Echo, ${payload.text}!`,
      body: mjmlTemplate(inputs).html,
    };
  }, {
    inputSchema: {
      type: 'object',
      properties: {
        text: { type: 'string', default: 'Welcome to our service' },
        imageUrl: { type: 'string', default: 'https://picsum.photos/id/11/2000/300' },
        buttonText: { type: 'string', default: 'Sign up' },
        buttonUrl: { type: 'string', default: 'https://novu.co' },
      },
      additionalProperties: false,
    } as const
  });
}, {
  payloadSchema: {
    properties: {
      text: { type: 'string', default: 'Sumit' },
    },
    additionalProperties: false,
  }
});