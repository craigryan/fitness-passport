import { MOCK_MEMBERS } from "../../data/members";
import { Member } from "@models/member";

// Member service backed by mocked data.
export const memberService = {
    findByEmail: (email: string): Member | null => {
      return MOCK_MEMBERS.find((member) => member.email === email) || null;
    },
};
