# Fitness Passport GraphQL API

This project provides a GraphQL endpoint, allowing a client to query a member, their membership details and their visits to Fitness Passport accessible facilities.

The [Design](./DESIGN.md) document details the solution, design choices within the existing constraints and some future improvements.

The project is delivered as a Zip, you may also access from this [Git repository](https://github.com/craigryan/fitness-passport)

## Key Features

- Single GraphQL endpoint to query members, membership details and visits
- Mocked DB layer with members and visits.
- Simple Apollo Server based stack including playground site for querying the API

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

To install dependencies and run the test suite and display code coverage results, from the command line:

```bash
$ npm install
$ npm test
```

For linting,

```bash
$ npm run lint
```

## Run the service

To start the service, from the command line:

```bash
$ npm start
```

Use the Apollo GraphQL Playground to interact with the API:

Open a browser at [localhost:4000](http://localhost:4000) and select 'Query your server'.

## Example Queries

From the Apollo SANDBOX web page, navigate to Root -> Query -> member

- select email under Arguments
- expand Fields and select the email, firstName and lastName fields

This should populate the ExampleQuery panel with a valid query and Variables. Finally, give the **email** variable a valid member email (hint: try 'rob@example.com')

Note refer to this [TEST DATA](./src/data/members.ts) for all available members.

A minimal (member name) query and parameter value will look similar to this:

Operation

```graphql
query ExampleQuery($email: String!) {
  member(email: $email) {
    email
    firstName
    lastName
    membershipDetails {
      type
      startDate
      endDate
    }
    visits {
      facilityName
      visitDateTime
    }
  }
}
```

Variables

```json
{
  "email": "rob@example.com"
}
```

Click **ExampleQuery** and the following response payload will be displayed

```json
{
  "data": {
    "member": {
      "email": "rob@example.com",
      "firstName": "Rob",
      "lastName": "Smith"
    },
    "membershipDetails": {
      ...
    },
    "visits": [ ... ]
  }
}
```

# How this project was created

This project was created using the following steps

```bash
$ npx tsc --init
$ npm i typescript ts-node tslib @types/node jest ts-jest @types/jest -D
$ npm i @apollo/server @graphql-tools/merge graphql graphql-tag fs
$ npm i @types/eslint eslint eslint-plugin-jest eslint-import-resolver-typescript -D
$ npm i @graphql-eslint/eslint-plugin  -D
$ npm init jest@latest
```
