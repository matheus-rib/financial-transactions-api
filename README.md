# Financial Transactions API

API made with Typescript and PostgreSQL
Updating the [old Financial Transactions project](https://github.com/matheus-rib/financialTransactions)

Developing with [Docker](https://www.docker.com) (and Docker-Compose)

## Docs
### Rest API
- Install the [Insomnia Rest](https://insomnia.rest/)
- Open the insomnia
  - Then click in `import/export`,
  - Import from file
  - Select `./docs/insomnia.yaml`

### Classes
- Install [UMLet](https://www.umlet.com)
- Open UMLet
  - Then click in `open`
  - Select `./docs/api-classes.uxf`

## Run the API
```bash
# Install dependencies
docker-compose run --rm api yarn

# Start the api
docker-compose up
# Then open http://localhost:4000
```

## Migrations
- Run migrations
```bash
yarn docker:migration:run
```

- Generate new migration
```bash
yarn docker:migration:generate MigrationName
```

## Run commands

```bash
docker-compose run --rm api ...
```

## Tests
To run all tests: `yarn docker:test` or `npm run docker:test`

To run certain test: `yarn docker:test yarn test __tests__/folder_you_wanna_test/...` or `npm run docker:test yarn test __tests__/folder_you_wanna_test/...`

## Authors

- Matheus Ribeiro
