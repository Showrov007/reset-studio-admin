import React, { useState } from "react";

interface BookingItem {
  id: string;
  memberName: string;
  memberEmail: string;
  class: string;
  instructor: string;
  slot: string;
  status: "cancelled" | "confirmed" | "pending";
  remarks: string;
}

const bookingsData: BookingItem[] = [
  {
    id: "1",
    memberName: "Omar Faruk",
    memberEmail: "omar@x.com",
    class: "Private Session",
    instructor: "Farhan Ahmed",
    slot: "Today · 8:00 PM",
    status: "cancelled",
    remarks: "Client rescheduled — moved to next week",
  },
  {
    id: "2",
    memberName: "Sara Khan",
    memberEmail: "sara@x.com",
    class: "Ladies Reformer ♀",
    instructor: "Maliha Chowdhury",
    slot: "Sat · 5:00 PM",
    status: "confirmed",
    remarks: "—",
  },
  {
    id: "3",
    memberName: "Rafiq Hossain",
    memberEmail: "rafiq@x.com",
    class: "Mat Strength",
    instructor: "Imran Kabir",
    slot: "Today · 7:00 AM",
    status: "pending",
    remarks: "—",
  },
  {
    id: "4",
    memberName: "Tanjila Islam",
    memberEmail: "demo@resetstudio.com",
    class: "Ladies Reformer ♀",
    instructor: "Maliha Chowdhury",
    slot: "Wed · 10:00 AM",
    status: "confirmed",
    remarks: "—",
  },
  {
    id: "5",
    memberName: "Tanjila Islam",
    memberEmail: "demo@resetstudio.com",
    class: "Reformer Flow",
    instructor: "Nadia Rahman",
    slot: "Mon · 6:00 PM",
    status: "confirmed",
    remarks: "—",
  },
];

export const BookingsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [timeFilter, setTimeFilter] = useState("All Times");
  const [instructorFilter, setInstructorFilter] = useState("All Instructors");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const handleClear = () => {
    setSearchQuery("");
    setCourseFilter("All Courses");
    setTimeFilter("All Times");
    setInstructorFilter("All Instructors");
    setStatusFilter("All Statuses");
  };

  const filteredBookings = bookingsData.filter((b) => {
    const matchesSearch =
      b.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.memberEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCourse =
      courseFilter === "All Courses" || b.class === courseFilter;
    const matchesTime =
      timeFilter === "All Times" || b.slot.includes(timeFilter);
    const matchesInstructor =
      instructorFilter === "All Instructors" ||
      b.instructor === instructorFilter;
    const matchesStatus =
      statusFilter === "All Statuses" ||
      b.status.toLowerCase() === statusFilter.toLowerCase();

    return (
      matchesSearch &&
      matchesCourse &&
      matchesTime &&
      matchesInstructor &&
      matchesStatus
    );
  });

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          All Bookings
        </h1>
        <div className="flex gap-2">
          <button className="bg-white border border-[#e5e2db] text-stone-900 rounded px-3 py-1.5 text-xs cursor-pointer font-medium hover:bg-stone-50 transition-colors">
            📧 Notify All Members
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
          >
            ← Exit
          </button>
        </div>
      </div>

      {/* Main Container Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        {/* Search Input */}
        <div className="relative mb-4">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8479] text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by member name, class or instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e5e2db] rounded-lg py-2.5 pr-3 pl-10 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
          />
        </div>

        {/* Filters Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-5 items-center">
          <div>
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              COURSE / CLASS
            </label>
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
            >
              <option>All Courses</option>
              <option>Private Session</option>
              <option>Ladies Reformer ♀</option>
              <option>Mat Strength</option>
              <option>Reformer Flow</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              CLASS TIME
            </label>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
            >
              <option>All Times</option>
              <option>Today</option>
              <option>Sat</option>
              <option>Wed</option>
              <option>Mon</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              INSTRUCTOR
            </label>
            <select
              value={instructorFilter}
              onChange={(e) => setInstructorFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
            >
              <option>All Instructors</option>
              <option>Farhan Ahmed</option>
              <option>Maliha Chowdhury</option>
              <option>Imran Kabir</option>
              <option>Nadia Rahman</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              STATUS
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
            >
              <option>All Statuses</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleClear}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-xs text-stone-900 cursor-pointer font-medium hover:bg-stone-50 transition-colors"
            >
              ✕ Clear
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-[#8a8479] mb-3">
          {filteredBookings.length} results
        </div>

        {/* Table Section */}
        <div className="border border-[#e5e2db] rounded-lg overflow-x-auto">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-[#f6f4ef] border-b border-[#e5e2db] text-[#736d63]">
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  MEMBER
                </th>
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  CLASS
                </th>
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  INSTRUCTOR
                </th>
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  SLOT
                </th>
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  STATUS
                </th>
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  ACTIONS
                </th>
                <th className="py-2.5 px-3.5 font-semibold text-[10px] tracking-[0.5px]">
                  REMARKS
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b text-stone-900 ${
                      index === filteredBookings.length - 1
                        ? "border-none"
                        : "border-[#f2efe9]"
                    }`}
                  >
                    <td className="py-3 px-3.5">
                      <div className="font-medium text-stone-900">
                        {item.memberName}
                      </div>
                      <div className="text-[11px] text-[#8a8479]">
                        {item.memberEmail}
                      </div>
                    </td>
                    <td className="py-3 px-3.5">{item.class}</td>
                    <td className="py-3 px-3.5">{item.instructor}</td>
                    <td className="py-3 px-3.5">{item.slot}</td>
                    <td className="py-3 px-3.5">
                      {item.status === "cancelled" && (
                        <span className="bg-[#e8e5de] text-[#686259] px-2.5 py-0.5 rounded-xl text-[10px] font-semibold inline-block">
                          cancelled
                        </span>
                      )}
                      {item.status === "confirmed" && (
                        <span className="bg-[#e3ebe2] text-[#2e592e] px-2.5 py-0.5 rounded-xl text-[10px] font-semibold inline-block">
                          confirmed
                        </span>
                      )}
                      {item.status === "pending" && (
                        <span className="bg-[#f5eae1] text-[#825029] px-2.5 py-0.5 rounded-xl text-[10px] font-semibold inline-block">
                          pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3.5">
                      <div className="flex gap-1">
                        <button className="bg-[#fff5eb] border border-[#f3d6be] text-[#a85d2b] px-2 py-0.5 rounded text-[11px] cursor-pointer font-medium hover:bg-[#ffeedb] transition-colors">
                          ✏️ Edit
                        </button>
                        {item.status === "cancelled" ? (
                          <button className="bg-[#e3ebe2] border border-[#c8dbc6] text-[#2e592e] px-2 py-0.5 rounded text-[11px] cursor-pointer font-medium hover:bg-[#d5e2d3] transition-colors">
                            ✓
                          </button>
                        ) : (
                          <button className="bg-[#f5e1e1] border border-[#eac2c2] text-[#9c3b3b] px-2 py-0.5 rounded text-[11px] cursor-pointer font-medium hover:bg-[#fad4d4] transition-colors">
                            ✕
                          </button>
                        )}
                      </div>
                    </td>
                    <td
                      className={`py-3 px-3.5 text-xs ${
                        item.remarks === "—"
                          ? "text-[#8a8479]"
                          : "text-stone-900"
                      }`}
                    >
                      {item.remarks}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-[#8a8479]">
                    No bookings found matching your search.
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
