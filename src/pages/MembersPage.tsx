import React, { useState } from "react";

interface MemberItem {
  id: string;
  avatar: string;
  name: string;
  email: string;
  plan: string;
  level: string;
  classes: number;
  credits: number;
}

const initialMembers: MemberItem[] = [
  {
    id: "1",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    name: "Tanjila Islam",
    email: "demo@resetstudio.com",
    plan: "Active",
    level: "Intermediate",
    classes: 27,
    credits: 1,
  },
  {
    id: "2",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "Karim Hossain",
    email: "recept@resetstudio.com",
    plan: "Starter",
    level: "Beginner",
    classes: 0,
    credits: 0,
  },
];

export const MembersPage: React.FC = () => {
  const [members] = useState<MemberItem[]>(initialMembers);
  const [searchQuery, setSearchQuery] = useState("");
  const [planFilter, setPlanFilter] = useState("All Plans");
  const [levelFilter, setLevelFilter] = useState("All Levels");

  const handleClear = () => {
    setSearchQuery("");
    setPlanFilter("All Plans");
    setLevelFilter("All Levels");
  };

  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPlan = planFilter === "All Plans" || m.plan === planFilter;
    const matchesLevel =
      levelFilter === "All Levels" || m.level === levelFilter;

    return matchesSearch && matchesPlan && matchesLevel;
  });

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Members
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
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e5e2db] rounded-lg py-2.5 pr-3 pl-10 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
          />
        </div>

        {/* Filters Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 mb-5 items-center">
          <div>
            <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              PLAN
            </div>
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#8d6d53] transition-colors"
            >
              <option>All Plans</option>
              <option>Active</option>
              <option>Starter</option>
            </select>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              LEVEL
            </div>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#8d6d53] transition-colors"
            >
              <option>All Levels</option>
              <option>Intermediate</option>
              <option>Beginner</option>
            </select>
          </div>

          <div className="pt-4.5">
            <button
              onClick={handleClear}
              className="bg-white border border-[#e5e2db] rounded-md py-2 px-3 text-xs text-stone-900 cursor-pointer font-medium hover:bg-[#f6f4ef] transition-colors"
            >
              ✕ Clear
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-[#8a8479] mb-3">
          {filteredMembers.length} members
        </div>

        {/* Members Table */}
        <div className="border border-[#e5e2db] rounded-lg overflow-x-auto">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-[#f6f4ef] border-b border-[#e5e2db] text-[#736d63]">
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  AVATAR
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  NAME
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  EMAIL
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  PLAN
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  LEVEL
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  CLASSES
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  CREDITS
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#f2efe9] text-stone-900 last:border-b-0 hover:bg-[#faf8f5] transition-colors"
                  >
                    <td className="py-3 px-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </td>
                    <td className="py-3 px-4 font-medium text-stone-900">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-[#686259]">{item.email}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          item.plan === "Active"
                            ? "bg-[#e6f0e6] text-[#3b6e3b]"
                            : "bg-[#f2eee7] text-[#595349]"
                        }`}
                      >
                        {item.plan}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#686259]">{item.level}</td>
                    <td className="py-3 px-4">{item.classes}</td>
                    <td className="py-3 px-4">{item.credits}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-[#8a8479]">
                    No members found matching your search.
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
