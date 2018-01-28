import compose from 'lodash.compose';
import SecurityHeaders from '../../security-headers';
import ExampleService from './example.service';
import ExampleHandler from './example.handler';

export default ({ commercetools, commons }) => {
  const securityHeaders = SecurityHeaders();
  const exampleService = ExampleService({ commercetools });
  const exampleHandler = ExampleHandler({ exampleService });

  const addMiddlewares = compose(commons.handleErrors, securityHeaders);

  return {
    get: addMiddlewares(exampleHandler.get),
    save: addMiddlewares(exampleHandler.save),
  };
};
