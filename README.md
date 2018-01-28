# Microservice Template

This template aims to be the base template for a microservice that uses [commercetools](https://commercetools.com/) as a backend. It is based on the **[Micro](https://github.com/zeit/micro)** framework  and includes other helpful libraries that speed up the development and increase the code quality.

## Included

 - **[Micro](https://github.com/zeit/micro)**: Framework for asynchronous HTTP microservices
 - **Router**: A tiny [router](https://github.com/pedronauck/micro-router) for Micro
 - **commercetools** client: Just set the credentials up in the config (explained in the config section) and run your queries using the official [ node.js sdk](https://commercetools.github.io/nodejs)
 - **Unit tests**: [Jest](https://facebook.github.io/jest) is already configured to run your tests and generate the coverage report
 - **Logger**: A [Winston](https://github.com/winstonjs/winston) logger is included and configured.
 - **Config**: The configuration is managed via [nconf](https://github.com/indexzero/nconf)
 - **Transpiler**: [Babel](https://babeljs.io/) is configured with target **node.js >= 8.x.x** and [stage 3 preset](https://babeljs.io/docs/plugins/preset-stage-3/)
 - **Linter**: [ESLint](https://eslint.org/) with [AirBnB rules](https://github.com/airbnb/javascript)
 - **Formatter**: [Prettier](https://github.com/prettier/prettier) has been added to format the code following the ESLint rules before any commit.
 - **Commit Validation**: Each commit message is validated by [validate-commit](https://github.com/willsoto/validate-commit) using the [JSHint preset](https://github.com/willsoto/validate-commit/blob/master/conventions/jshint.md)
 - **Dockerfile**: Dockerfiles are included in order to create the docker images
 - **Validation**: [Fastest-validator](https://github.com/icebob/fastest-validator) library to validate the input params


## Configuration
In the most basic mode, the microservice can run by only setting the commercetools credentials (You have to create a project in commercetools and set the api keys and project in the template).

These are the variables to configure the commercetools project in the template.

 - **COMMERCE_TOOLS__API_HOST**
 - **COMMERCE_TOOLS__OAUTH_URL**
 - **COMMERCE_TOOLS__PROJECT_KEY**
 - **COMMERCE_TOOLS__CLIENT_ID**
 - **COMMERCE_TOOLS__CLIENT_SECRET**

The configuration follows a hierarchy structure where some config mechanisms have precedence over the others.

The hierarchy is as follows:

 1. Environment variables
 2. Arguments passed to the node.js process
 3. Config files

So based on the previous hierarchy, the environment variables has precedence over the variables set in the config files (**NOTE**: you shouldn't set any sensitive information in the config files unless you encrypt them)

This template also includes config files according to the NODE_ENV value that is set when the microservice is running.

 - **development.json**: Config file that is used when  NODE_ENV=development. This is the default mode if NODE_ENV is not set
 - **production.json**: Config file that is used when  NODE_ENV=production
 - **default.json**: Config file that is used no matter the NODE_ENV value

## Example
The template includes a working example in order to guide the developers when they start coding. This example can be found in the **services/example** folder and also include a unit test example.

If you run the template as it is (with the commercetools project configured), you will have 3 endpoints exposed in the following routes:

 - GET "/": heartbeat that returns "OK"
 - GET "/example/:id": Returns a commercetools customer by id
 - POST "/example": Creates a customer in commercetools according to a [customer draft](http://dev.commercetools.com/http-api-projects-customers.html#customerdraft).

## Commands
The template is meant to be run on a **node.js >= 8.x.x** environment.  
You can use [nvm](https://github.com/creationix/nvm) to manage your node.js environments

The microservice runs in the port 3000 by default, but you can override it by setting the **PORT** config variable.

``` bash
# Install dependencies
npm install

# Start development mode
npm start

# Start production mode
npm run prod

# Build
npm run build

# Run unit tests
npm test

# Run linter
npm run lint

```

## Contact
If you have any questions or suggestions feel free to contact me:

Javier Ortiz Saorin javier.ortizsaorin@gmail.com
