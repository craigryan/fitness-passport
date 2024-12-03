# Fitness Passport GraphQL API

This project provides a GraphQL endpoint, allowing our future platform (client) to query a member, their membership details and their visits to Fitness Passport accessible facilities.

The [Design](./DESIGN.md) document details the solution, design choices within the existing constraints and future goals and improvements.

The project is delivered as a Zip, you may also access from this [Git repository](https://github.com/craigryan/??)

## Key Features

- Single GraphQL endpoint to query members, membership details and visits
- Mocked DB layer with members and visits.
- Simple Apollo Server based stack and playground for querying the API

# Quick Start

Follow these steps to setup, build, test and run the service.

## Tooling

You will need a current stable version of **node/npm** installed to build and run this service. Refer to this [prebuilt installer](https://nodejs.org/en/download/prebuilt-installer), choose your platform (Windows or MacOS), click the install link (Windows .msi or MacOS .pkg) and follow the instructions. Alternativey, if you prefer [NVM](https://github.com/nvm-sh/nvm) or [NVM Windows](https://github.com/coreybutler/nvm-windows#readme) then run 'nvm install --lts'.

To confirm a clean install, ensure the current versions display correctly:

```
$ node -v
v22.6.0    (or the current LTS version)
$ npm -v
10.8.2
```

## Build & Test

To install dependencies and run the test suite, from the command line:

```bash
$ npm install
$ npm test
```

## Run the service

To start the service, from the command line:

```bash
$ npm start
```

Use the Apollo GraphQL Playground to interact with the API:

Open a browser at [localhost:4000](http://localhost:4000) and enter a GQL query, using the following example as a guide:

### Example Query

```graphql
query {
  member(email: "rob@example.com") {
    firstName
    lastName
  }
}
```

# How this project was created

This project was created using the following steps

```bash
$ npx tsc --init
$ npm i typescript ts-node tslib @types/node jest -D
$ npm i apollo-server graphql
$ npm i -D @graphql-eslint/eslint-plugin
$ npm i @types/eslint eslint -D
$ npm init jest@latest
```
