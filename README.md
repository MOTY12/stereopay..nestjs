
## Description

Media endpoint using typescript and type orm.

## Installation

Import the stereopay.sql  in the database and create a .env file in the database and declare details below

```bash
$ NODE_ENV = "development"
$ NAME = "stereopay"
$ PORT = 3000
$ FRONTEND_URL = "http://localhost:3000"
$ DB_HOST = "localhost"
$ DB_PORT = "8889"
$ DB_USER = "root"
$ DB_PASSWORD = "root"
$ DB_NAME = "stereopay"
$ TOKEN = "UOT26843FI9589E"
$ TTL = 60
$ LIMIT = 1000
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoint

```bash
$ POST media
# Create a new media object

$ GET media?page=1&perPage=12
# Fetch a paginated list of existing media objects

$ GET media/:id
# Fetch a single media by id

$ GET media/search?query=xyz
# Search media by title and description

$ PATCH media/:id
# Update an existing media by id. This endpoint should only accept changes to the status field.

$ DELETE media/:id
# Soft delete a media item by id.
```

## Stay in touch

- Author - Mukhtar Yusuf

## License

Nest is [MIT licensed](LICENSE).
