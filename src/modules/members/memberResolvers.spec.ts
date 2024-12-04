import { resolvers } from "./memberResolvers";
import { MOCK_MEMBERS } from "../../data/members";

describe("Member Resolvers", () => {
  it("should return a valid member by email", () => {
    const email = "rob@example.com";
    const result = resolvers.Query.member(null, { email });
    expect(result).toEqual(MOCK_MEMBERS[0]);
  });

  it("should return null if no member matches", () => {
    const email = "nonexistent@example.com";
    const result = resolvers.Query.member(null, { email });
    expect(result).toBeNull();
  });

  it("should return membership details", () => {
    const member = MOCK_MEMBERS[0];
    const result = resolvers.Member.membershipDetails(member);
    expect(result).toEqual(member.membershipDetails);
  });

  it("should return member visits", () => {
    const member = MOCK_MEMBERS[0];
    const result = resolvers.Member.visits(member);
    expect(result).toEqual(member.visits);
  });

  it("should return empty member visits", () => {
    const member = MOCK_MEMBERS[2];
    const result = resolvers.Member.visits(member);
    expect(result).toEqual(member.visits);
    expect(result).toHaveLength(0);
  });
});
