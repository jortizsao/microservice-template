import Validator from 'fastest-validator';
import { ValidationError } from '../errors';

export default async (schema, params, fn) => {
  const validator = new Validator();
  const check = validator.compile(schema);
  const validationResult = check(params);

  if (validationResult === true) {
    return fn(params);
  }

  throw new ValidationError(validationResult.map(vr => vr.message));
};
