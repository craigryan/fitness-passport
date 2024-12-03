# Fitness Passport GraphQL endpoint Design

This design takes into consideration the time to market constraints, quality vs delivery trade-offs.

I've outlined the key design decisions and '**TODO**' notes where required to capture the ideal target solution intended for future releases.

The Fitness Passport service will evolve into a federated graph facade pattern, however the current solution is limited to a single GraphQL service.

This simplified implementation is monolithic with extensibility front of mind.

## Server Framework

NestJS would be a more preferred framework for building scalable server-side applications however, within the time constraints, scope and use of mocked data this would be over-kill at this point. We're implementing a simple Apollo server stack.

**TODO** consider migrating to NestJS with several benefits

- better suited to a scalable, federated graph / sub graphs
- cleaner seperation of the domain in modules
- built-in GQL support and schema-first or code-first schema design options, Query/Resolver decorators
- auth, logging, testing etc extensions
- DI, middleware, lifecycle features

## Domain models

The **application model** defines the member, details and visits relationships

    - Member (email, firstName, lastName).
    - MembershipDetails (type, startDate, endDate).
    - Visits (facilityName, visitDateTime).

The **schema** model defines the API/endpoint contract intentionally seperate from the application model.

**TODO** consider generating the TS types from the schema, see tools such as **@nestjs/graphql**

## Database

The persistence layer is limited to mocked data, modelled as JSON payloads.

## Quality / Test

Unit tests (Jest) are provided for essential service endpoint coverage. **TODO** add load testing, integration and e2e testing.

Lint provides code quality measures, limited to default Typescript and Apollo/GQL rulesets. **TODO**: define more fine grained eslint rules, overrides and other settings to fine tune lint coverage

TSConfig mostly uses the default settings with some path mappings for cleaner imports. **TODO**: enable more configuration to ensure more strictly enforced code health.
