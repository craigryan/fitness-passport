# Fitness Passport Members GraphQL Design

This starting design provides a single monolithic service, exposing a simple GQL endpoint and hard coded data. The focus is for simplicity, rapid development (time constraint of 2 hours) and ease of testing in readiness for production. At the same time, some consideration is given for a more extensibile architecture.

## GraphQL Schema

The GQL API defines a single Member type containing fields for membership and visits, with basic separation of type definitions and schema files to faciliate eventual migration from a **unified schema** to a **federated schema** with Member, Membership and Visits subgraphs.

## Member Service

A single Member service provides the access to Member data which modelled as simple JSON. See [TEST DATA](./src/data/members.ts). The code structure allows for future modules to be introduced such as 'membership' and 'visits' with their own services and resolvers.

## Domain model

The application model (TS entities) reflects a similar separation of the three key domains, simplifying the mapping and eventual de-coupling in line with the schema.

To avoid confusion over undefined vs null data, the **visits** field holds an empty list if no visits were made (rather than an absent value for the field). For members who are still active, the **endDate** will similarly be present but hold a null value to indicate no end date has been set.

For simplicity, **dates** are represented as strings. A future improvement in terms of validation and stronger typing could introduce Date types in the domain model, with similar changes to the schema to define custom (graphql) scalar types Date and DateTime to parse and serialise the values.

## Quality / Test

Unit tests (Jest) are provided for core functionality and offer full coverage. The member resolver test provides coverage for the trivial member service as a trade-off, an improvement would be to fully mock the service within the resolver tests and implement a service suite in isolation once we replace the mocked data with a real persistence layer.

Lint provides code quality measures, limited to default Typescript and Apollo/GQL rulesets.

TSConfig mostly uses the default settings with some path mappings for cleaner imports.

**Future improvements** would include: adding load, integration/e2e suites under a top 'test/' folder. Define more fine grained eslint rules, overrides and other settings to fine tune lint coverage, enable Prettier rules. Enable more extensive tsconfig configuration to ensure more strictly enforced code health.

## Target Design considerations

A future target design will address the federated graph design for scalability, modularity, and future integration of new subgraphs/domains.

Here I'm capturing some considerations for a future state.

### Federated Schema

- Introduce a federated gateway (eg Apollo Gateway) to unify multiple subgraphs.
- Split the schema and resolvers into separate services (e.g., members-service, visits-service) so that each subgraph is built as an independent GraphQL service.
- Implement backend services for each domain (e.g., Members, Membership, Visits) possibly through micro-services backed by one or more databases.

One example of a federated schema for Visits might extend Member, decoupling members from visits, using suitable directives such as:

```graphql
extend type Member @key(fields: "email") {
  email: String! @external
  visits: [Visit!]!
}
```

### Server Framework

NestJS would be the preferred framework for building a more scalable server-side application however, within the time constraints, scope and use of mocked data this would be over-kill at this point. We're implementing a simple Apollo server stack.

Consider migrating to NestJS with several benefits

- better suited to a scalable, federated graph / sub graphs
- cleaner separation of the domain modules
- built-in GQL support and schema-first or code-first schema design options, Query/Resolver decorators, dedicated (injetable) services
- auth, logging, testing etc extensions
- DI, middleware, lifecycle features

## Domain models

Consider auto generating the TS domain types from the schema, see tools such as **@nestjs/graphql**. This would remove the need to hand craft the TS types, and reduce the possibility of type inconsistencies between the schema and domain models.
