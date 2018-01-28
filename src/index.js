import { router, get, post } from 'microrouter';
import Example from './services/example';
import Config from './config';
import Logger from './logger';
import Commons from './commons';
import Commercetools from './commercetools';

const config = Config();

const logger = Logger({
  level: config.get('LOGGER:LEVEL'),
  isDisabled: Boolean(config.get('LOGGER:IS_DISABLED')),
});

const commons = Commons({ logger });
const commercetools = Commercetools({
  clientId: config.get('COMMERCE_TOOLS:CLIENT_ID'),
  clientSecret: config.get('COMMERCE_TOOLS:CLIENT_SECRET'),
  projectKey: config.get('COMMERCE_TOOLS:PROJECT_KEY'),
  host: config.get('COMMERCE_TOOLS:API_HOST'),
  oauthHost: config.get('COMMERCE_TOOLS:OAUTH_URL'),
  concurrency: config.get('COMMERCE_TOOLS:CONCURRENCY'),
});

const example = Example({ commercetools, commons });

export default router(
  get('/example/:id', example.get),
  post('/example', example.save),
  get('/', () => 'OK'),
);
