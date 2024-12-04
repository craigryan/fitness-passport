import { readFileSync } from 'fs';
import { join } from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge';

const memberSchema = readFileSync(join(__dirname, './member.graphql'), 'utf8');
const membershipSchema = readFileSync(join(__dirname, './membership.graphql'), 'utf8');
const visitSchema = readFileSync(join(__dirname, './visit.graphql'), 'utf8');

// Merge all schema definitions
const typeDefs = mergeTypeDefs([memberSchema, membershipSchema, visitSchema]);

export const memberTypeDefs = typeDefs;
