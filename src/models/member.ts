// Application domain model for the Member entity and related types.


// Represents the membership details of a member.
export interface MembershipDetails {
  type: "Gold" | "Silver" | "Bronze";
  startDate: string;
  endDate?: string | null;
}

// Represents a visit to a fitness facility.
export interface Visit {
  facilityName: string;
  visitDateTime: string;
}

/**
 * Represents a member of the fitness passport program.
 */
export interface Member {
    email: string;
    firstName: string;
    lastName: string;
    membershipDetails: MembershipDetails;
    visits: Visit[];
  }
