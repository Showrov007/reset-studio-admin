export interface Member {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Pending" | "Cancelled";
  membershipType: "VIP" | "Standard" | "Basic";
}
