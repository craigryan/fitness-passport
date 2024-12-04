import { Member } from "@models/member";

// Mocked member data, placeholder for a downstream DB layer.
export const MOCK_MEMBERS: Member[] = [
    {
        email: "rob@example.com",
        firstName: "Rob",
        lastName: "Smith",
        membershipDetails: {
          type: "Gold",
          startDate: "2024-05-01",
        },
        visits: [
          { facilityName: "Gym A", visitDateTime: "2024-05-01T10:00:00Z" },
          { facilityName: "Gym B", visitDateTime: "2024-05-09T15:00:00Z" },
          { facilityName: "Large Gym", visitDateTime: "2024-07-02T10:00:00Z" },
        ],
      },
      {
        email: "craig@example.com",
        firstName: "Craig",
        lastName: "Ryan",
        membershipDetails: {
          type: "Gold",
          startDate: "2024-10-01",
        },
        visits: [
          { facilityName: "Gym B", visitDateTime: "2024-10-01T10:00:00Z" },
          { facilityName: "Gym B", visitDateTime: "2024-11-02T15:00:00Z" },
        ],
      },
      {
        email: "lazy@example.com",
        firstName: "Lazy",
        lastName: "Joe",
        membershipDetails: {
          type: "Bronze",
          startDate: "2024-01-01",
          endDate: "2024-01-08",   // Membership deactivated
        },
        visits: [],
      },
      
  ];
