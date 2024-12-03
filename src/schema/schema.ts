import { readFileSync } from 'fs';
import { join } from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { gql } from 'graphql-tag';

const memberSchema = readFileSync(join(__dirname, './member.graphql'), 'utf8');
const querySchema = readFileSync(join(__dirname, './query.graphql'), 'utf8');

// Merge all schema definitions
const typeDefs = mergeTypeDefs([memberSchema, querySchema]);

export const memberTypeDefs = typeDefs;
