import { Member } from "@models/member";
import { memberService } from './memberService';

/**
 * Resolvers for the members GraphQL schema.
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
            return memberService.findByEmail(email);
        },
    },
    Member: {
        /**
         * Fetches the membership details of a member.
         * @param member - The member whose membership details to fetch.
         * @returns The membership details for this member.
         */
        membershipDetails: (member: Member) => member.membershipDetails,

        /**
         * Fetches the visits of a member.
         * @param member - The member whose visits we wish to fetch.
         * @returns The member visits (may be empty).
         */
         visits: (member: Member) => member.visits,
    },
};
