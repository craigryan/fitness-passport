import { resolvers } from "../src/resolvers/memberResolvers";
import { MOCK_MEMBERS } from "../src/data/members";

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
});
