import React, { useState } from "react";

interface ClassSlot {
  id: string;
  time: string;
  className: string;
  type: string;
  instructor: string;
  spots: number;
}

const initialSlots: ClassSlot[] = [
  {
    id: "1",
    time: "7:00 AM",
    className: "Mat Strength",
    type: "group",
    instructor: "Imran Kabir",
    spots: 4,
  },
  {
    id: "2",
    time: "8:00 AM",
    className: "Beginner Reformer",
    type: "group",
    instructor: "Nadia Rahman",
    spots: 1,
  },
  {
    id: "3",
    time: "10:00 AM",
    className: "Ladies Reformer ♀",
    type: "ladies",
    instructor: "Maliha Chowdhury",
    spots: 3,
  },
  {
    id: "4",
    time: "12:00 PM",
    className: "Private Session",
    type: "private",
    instructor: "Farhan Ahmed",
    spots: 1,
  },
  {
    id: "5",
    time: "4:00 PM",
    className: "Intermediate Mat",
    type: "group",
    instructor: "Imran Kabir",
    spots: 0,
  },
  {
    id: "6",
    time: "5:00 PM",
    className: "Ladies Reformer ♀",
    type: "ladies",
    instructor: "Maliha Chowdhury",
    spots: 2,
  },
  {
    id: "7",
    time: "6:00 PM",
    className: "Reformer Flow",
    type: "group",
    instructor: "Nadia Rahman",
    spots: 3,
  },
  {
    id: "8",
    time: "8:00 PM",
    className: "Private Session",
    type: "private",
    instructor: "Farhan Ahmed",
    spots: 1,
  },
];

export const ClassesPage: React.FC = () => {
  const [slots, setSlots] = useState<ClassSlot[]>(initialSlots);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("All Times");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [instructorFilter, setInstructorFilter] = useState("All Instructors");

  // Form state for adding new slot
  const [newTime, setNewTime] = useState("");
  const [newClassName, setNewClassName] = useState("");
  const [newType, setNewType] = useState("Group");
  const [newInstructor, setNewInstructor] = useState("Nadia Rahman");
  const [newSpots, setNewSpots] = useState("6");

  const handleAdjustSpots = (id: string, amount: number) => {
    setSlots(
      slots.map((slot) => {
        if (slot.id === id) {
          const updated = slot.spots + amount;
          return { ...slot, spots: updated < 0 ? 0 : updated };
        }
        return slot;
      }),
    );
  };

  const handleClear = () => {
    setSearchQuery("");
    setTimeFilter("All Times");
    setTypeFilter("All Types");
    setInstructorFilter("All Instructors");
  };

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTime || !newClassName) return;

    const newEntry: ClassSlot = {
      id: Date.now().toString(),
      time: newTime,
      className: newClassName,
      type: newType.toLowerCase(),
      instructor: newInstructor,
      spots: parseInt(newSpots) || 0,
    };

    setSlots([...slots, newEntry]);
    setNewTime("");
    setNewClassName("");
    setNewSpots("6");
  };

  const filteredSlots = slots.filter((slot) => {
    const matchesSearch =
      slot.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTime = timeFilter === "All Times" || slot.time === timeFilter;
    const matchesType =
      typeFilter === "All Types" ||
      slot.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesInstructor =
      instructorFilter === "All Instructors" ||
      slot.instructor === instructorFilter;

    return matchesSearch && matchesTime && matchesType && matchesInstructor;
  });

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Classes & Slots
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Main Container Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        {/* Search Input */}
        <div className="relative mb-4">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8479] text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by class name or instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e5e2db] rounded-lg py-2.5 pr-3 pl-10 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
          />
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5 items-center">
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
              {Array.from(new Set(slots.map((s) => s.time))).map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              TYPE
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
            >
              <option>All Types</option>
              <option>Group</option>
              <option>Ladies</option>
              <option>Private</option>
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

          <div className="flex items-end">
            <button
              onClick={handleClear}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2 text-xs text-stone-900 cursor-pointer font-medium hover:bg-stone-50 transition-colors"
            >
              ✕ Clear
            </button>
          </div>
        </div>

        {/* Slots Counter */}
        <div className="text-xs text-[#8a8479] mb-3">
          {filteredSlots.length} slots
        </div>

        {/* Table Section */}
        <div className="border border-[#e5e2db] rounded-lg overflow-x-auto mb-8">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-[#f6f4ef] border-b border-[#e5e2db] text-[#736d63]">
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  TIME
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  CLASS
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  TYPE
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  INSTRUCTOR
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  SPOTS
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  ADJUST
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSlots.length > 0 ? (
                filteredSlots.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b text-stone-900 ${
                      index === filteredSlots.length - 1
                        ? "border-none"
                        : "border-[#f2efe9]"
                    }`}
                  >
                    <td className="py-3 px-4">{item.time}</td>
                    <td className="py-3 px-4 font-medium text-stone-900">
                      {item.className}
                    </td>
                    <td className="py-3 px-4 text-[#686259] capitalize">
                      {item.type}
                    </td>
                    <td className="py-3 px-4">{item.instructor}</td>
                    <td className="py-3 px-4">
                      {item.spots === 0 ? (
                        <span className="text-red-600 font-medium">Full</span>
                      ) : (
                        item.spots
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => handleAdjustSpots(item.id, 1)}
                          className="bg-white border border-[#e5e2db] rounded px-2 py-0.5 text-[11px] cursor-pointer font-medium hover:bg-stone-50 transition-colors"
                        >
                          +1
                        </button>
                        <button
                          onClick={() => handleAdjustSpots(item.id, -1)}
                          className="bg-white border border-[#e5e2db] rounded px-2 py-0.5 text-[11px] cursor-pointer font-medium hover:bg-stone-50 transition-colors"
                        >
                          -1
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-[#8a8479]">
                    No slots found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add New Class Slot Form Box */}
        <div className="bg-[#f9f8f6] border border-[#e5e2db] rounded-lg p-5 max-w-[450px]">
          <div className="text-sm font-bold text-stone-900 mb-4">
            Add New Class Slot
          </div>

          <form onSubmit={handleAddSlot}>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                  TIME
                </label>
                <input
                  type="text"
                  placeholder="e.g. 9:00 AM"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                  CLASS NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tower Pilates"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                  TYPE
                </label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
                >
                  <option>Group</option>
                  <option>Ladies</option>
                  <option>Private</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                  INSTRUCTOR
                </label>
                <select
                  value={newInstructor}
                  onChange={(e) => setNewInstructor(e.target.value)}
                  className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
                >
                  <option>Nadia Rahman</option>
                  <option>Farhan Ahmed</option>
                  <option>Maliha Chowdhury</option>
                  <option>Imran Kabir</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                SPOTS
              </label>
              <input
                type="number"
                value={newSpots}
                onChange={(e) => setNewSpots(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="bg-[#8d6d53] text-white border-none rounded-md px-4 py-2 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
            >
              Add Slot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
