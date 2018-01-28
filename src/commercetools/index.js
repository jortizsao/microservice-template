import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue';
import { createRequestBuilder } from '@commercetools/api-request-builder';

export default ({
  clientId, clientSecret, projectKey, host, oauthHost, concurrency = 10,
}) => {
  const commercetools = {};

  commercetools.client = createClient({
    middlewares: [
      createAuthMiddlewareForClientCredentialsFlow({
        host: oauthHost,
        projectKey,
        credentials: {
          clientId,
          clientSecret,
        },
      }),
      createQueueMiddleware({ concurrency }),
      createHttpMiddleware({ host }),
    ],
  });

  commercetools.requestBuilder = createRequestBuilder({ projectKey });

  return commercetools;
};
