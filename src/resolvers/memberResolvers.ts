// Member domain resolvers

import { MOCK_MEMBERS } from "../data/members";

export const resolvers = {
  Query: {
    member: (_: any, { email }: { email: string }) => {
      return MOCK_MEMBERS.find((member) => member.email === email) || null;
    },
  },
  Member: {
    membershipDetails: (member: any) => member.membershipDetails,
    visits: (member: any) => member.visits,
  },
};
