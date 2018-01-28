import nock from 'nock';
import Logger from '../../../logger';
import ExampleService from '../example.service';
import Commercetools from '../../../commercetools';

describe('Example service', () => {
  const clientId = 'client1';
  const clientSecret = 'secret1';
  const projectKey = 'projectKey1';
  const host = 'https://api.commercetools.co';
  const oauthHost = 'https://auth.commercetools.co';
  const logger = Logger({
    level: 'debug',
  });
  const commercetools = Commercetools({
    clientId,
    clientSecret,
    projectKey,
    host,
    oauthHost,
  });

  const exampleService = ExampleService({ logger, commercetools });

  beforeEach(() => {
    nock(oauthHost)
      .persist()
      .post('/oauth/token')
      .reply(200, {
        access_token: 'token1',
      });
  });

  describe('when getting a customer by id', () => {
    const id = 'id1';
    let customer;

    beforeEach(async () => {
      nock(host)
        .get(`/${projectKey}/customers/${id}`)
        .reply(200, { id, email: 'javi@devgurus.io' });

      customer = await exampleService.get(id);
    });

    it('should return the customer', () =>
      expect(customer).toEqual({ id, email: 'javi@devgurus.io' }));
  });
});
