import { MOCK_MEMBERS } from "../data/members";
import { Member } from "@models/member.js";

/**
 * Resolvers for the GraphQL schema.
*/
export const resolvers = {
    Query: {
        /**
         * Fetches a member by their email.
         * @param _ - Unused parameter.
         * @param email - The email of the member to fetch.
         * @returns The member matching the specified email, or null.
         */
        member: (_: unknown, { email }: { email: string }): Member | null => {
            return MOCK_MEMBERS.find((member: Member) => member.email === email) || null;
        },
    },
    //Member: {
        /**
         * Fetches the membership details of a member.
         * @param member - The member whose membership details we wish to fetch.
         * @returns The membership details for that member.
         */
        // membershipDetails: (member: any) => member.membershipDetails,

        /**
         * Fetches the visits of a member.
         * @param member - The member whose visits we wish to fetch.
         * @returns The visits of the member.
         */
        // visits: (member: any) => member.visits,
    //},
};
