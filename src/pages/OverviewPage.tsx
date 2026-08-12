import React, { useState } from "react";

interface Booking {
  id: number;
  member: string;
  class: string;
  instructor: string;
  slot: string;
  status: "confirmed" | "pending" | "cancelled";
}

export const OverviewPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const bookings: Booking[] = [
    {
      id: 1,
      member: "Omar Faruk",
      class: "Private Session",
      instructor: "Farhan Ahmed",
      slot: "Today · 8:00 PM",
      status: "cancelled",
    },
    {
      id: 2,
      member: "Sara Khan",
      class: "Ladies Reformer ♀",
      instructor: "Maliha Chowdhury",
      slot: "Sat · 5:00 PM",
      status: "confirmed",
    },
    {
      id: 3,
      member: "Rafiq Hossain",
      class: "Mat Strength",
      instructor: "Imran Kabir",
      slot: "Today · 7:00 AM",
      status: "pending",
    },
    {
      id: 4,
      member: "Tanjila Islam",
      class: "Ladies Reformer ♀",
      instructor: "Maliha Chowdhury",
      slot: "Wed · 10:00 AM",
      status: "confirmed",
    },
    {
      id: 5,
      member: "Tanjila Islam",
      class: "Reformer Flow",
      instructor: "Nadia Rahman",
      slot: "Mon · 6:00 PM",
      status: "confirmed",
    },
  ];

  const filteredBookings = bookings.filter(
    (b) =>
      b.member.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Top Header Row */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-['Playfair_Display'] text-[28px] font-bold text-[#1a1816]">
          Studio Overview
        </h1>
        <button className="flex items-center gap-2 bg-[#b87d4b] hover:bg-[#a66e3e] text-white text-[13px] font-medium px-4 py-2 rounded-md transition-colors shadow-sm cursor-pointer">
          ← Exit
        </button>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl border border-[#e8e4dc] shadow-xs">
          <div className="text-[11px] font-bold tracking-wider text-[#8c857b] uppercase mb-2">
            Active Bookings
          </div>
          <div className="font-['Playfair_Display'] text-[36px] font-bold text-[#1a1816]">
            4
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl border border-[#e8e4dc] shadow-xs">
          <div className="text-[11px] font-bold tracking-wider text-[#8c857b] uppercase mb-2">
            Members
          </div>
          <div className="font-['Playfair_Display'] text-[36px] font-bold text-[#1a1816]">
            2
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl border border-[#e8e4dc] shadow-xs">
          <div className="text-[11px] font-bold tracking-wider text-[#8c857b] uppercase mb-2">
            Cancellations
          </div>
          <div className="font-['Playfair_Display'] text-[36px] font-bold text-[#1a1816]">
            1
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-xl border border-[#e8e4dc] shadow-xs">
          <div className="text-[11px] font-bold tracking-wider text-[#8c857b] uppercase mb-2">
            Instructors
          </div>
          <div className="font-['Playfair_Display'] text-[36px] font-bold text-[#1a1816]">
            4
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#8c857b]">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Quick search across bookings, members, classes..."
          className="w-full bg-white border border-[#e8e4dc] rounded-lg pl-10 pr-4 py-3 text-[13px] text-[#1a1816] placeholder-[#8c857b] focus:outline-none focus:border-[#b87d4b] shadow-xs transition-colors"
        />
      </div>

      {/* Recent Bookings Section */}
      <div className="bg-white rounded-xl border border-[#e8e4dc] overflow-hidden shadow-xs">
        <div className="px-6 py-4 border-b border-[#f0ece4] text-[11px] font-bold tracking-wider text-[#8c857b] uppercase">
          Recent Bookings
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#f0ece4] text-[11px] font-semibold text-[#8c857b] uppercase bg-[#fcfbf9]">
                <th className="py-3 px-6">Member</th>
                <th className="py-3 px-6">Class</th>
                <th className="py-3 px-6">Instructor</th>
                <th className="py-3 px-6">Slot</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f5f2eb] text-[13px] text-[#2c2824]">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-[#faf8f5] transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">{booking.member}</td>
                    <td className="py-4 px-6 text-[#5c554e]">
                      {booking.class}
                    </td>
                    <td className="py-4 px-6 text-[#5c554e]">
                      {booking.instructor}
                    </td>
                    <td className="py-4 px-6 text-[#5c554e]">{booking.slot}</td>
                    <td className="py-4 px-6">
                      {booking.status === "confirmed" && (
                        <span className="inline-block px-2.5 py-1 text-[11px] font-medium bg-[#e6f4ea] text-[#137333] rounded-full">
                          confirmed
                        </span>
                      )}
                      {booking.status === "pending" && (
                        <span className="inline-block px-2.5 py-1 text-[11px] font-medium bg-[#fef7e0] text-[#b06000] rounded-full">
                          pending
                        </span>
                      )}
                      {booking.status === "cancelled" && (
                        <span className="inline-block px-2.5 py-1 text-[11px] font-medium bg-[#fce8e6] text-[#c5221f] rounded-full">
                          cancelled
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-[#8c857b]">
                    No matching bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
