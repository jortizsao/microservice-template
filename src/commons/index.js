import { send } from 'micro';
import { ValidationError, NotAuthorizedError, NotAuthenticatedError } from '../errors';

export default ({ logger }) => {
  const commons = {};

  commons.handleErrors = fn => async (req, res) => {
    try {
      console.log('handleErrors', req.params);
      return await fn(req, res);
    } catch (err) {
      if (err instanceof ValidationError) {
        return send(res, 400, err.message);
      } else if (err instanceof NotAuthenticatedError) {
        return send(res, 401);
      } else if (err instanceof NotAuthorizedError) {
        return send(res, 403);
      } else {
        logger.error(err.stack);
        return send(res, err.statusCode || 500, err.message || 'Ooops, something went wrong!');
      }
    }
  };

  return commons;
};
