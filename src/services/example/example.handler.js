import { json } from 'micro';
import validator from '../../validator';

export default ({ exampleService }) => {
  const example = {};

  example.get = async ({ params }) => {
    console.log('Handler', params.id);
    return exampleService.get(params.id);
  };

  example.save = async req =>
    validator(
      {
        firstName: 'string',
        lastName: 'string',
        email: 'email',
        password: 'string',
      },
      await json(req),
      exampleService.save,
    );

  return example;
};
