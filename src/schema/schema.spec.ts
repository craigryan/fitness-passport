import { readFileSync } from 'fs';
import { join } from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge';

jest.mock('fs');
jest.mock('path');
jest.mock('@graphql-tools/merge');

describe('Schema Tests', () => {
    const mockReadFileSync = readFileSync as jest.Mock;
    const mockJoin = join as jest.Mock;
    const mockMergeTypeDefs = mergeTypeDefs as jest.Mock;

    beforeEach(() => {
        mockReadFileSync.mockClear();
        mockJoin.mockClear();
        mockMergeTypeDefs.mockClear();
    });

    it('should read all schema files', () => {
        mockReadFileSync.mockReturnValue('type Query { dummy: String }');
        mockJoin.mockImplementation((...args) => args.join('/'));
        const expectedCalls = [
            'member.graphql',
            'membership.graphql',
            'visit.graphql',
          ];
          
        require('./schema');

        expectedCalls.forEach(partialPath => {
            expect(mockReadFileSync).toHaveBeenCalledWith(expect.stringContaining(partialPath), 'utf8');
        });
        expect(mockMergeTypeDefs).toHaveBeenCalled();
    });
});
