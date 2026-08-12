import React, { useState } from "react";

interface LoyaltyItem {
  id: string;
  member: string;
  email: string;
  monthsQualified: number;
  classesLastMonth: number;
  status: "eligible" | "ineligible";
  discountPercent: string;
  applied: string;
  remarks: string;
}

const initialLoyaltyMembers: LoyaltyItem[] = [
  {
    id: "1",
    member: "Tanjila Islam",
    email: "demo@resetstudio.com",
    monthsQualified: 3,
    classesLastMonth: 6,
    status: "eligible",
    discountPercent: "15%",
    applied: "—",
    remarks:
      "Attended 6 classes in May, 7 in Apr, 6 in Mar — loyalty discount eligible",
  },
  {
    id: "2",
    member: "Rafiq Hossain",
    email: "rafiq@x.com",
    monthsQualified: 1,
    classesLastMonth: 3,
    status: "ineligible",
    discountPercent: "—",
    applied: "—",
    remarks: "Only 1 qualified month — needs 2+ consecutive months",
  },
  {
    id: "3",
    member: "Omar Faruk",
    email: "omar@x.com",
    monthsQualified: 0,
    classesLastMonth: 1,
    status: "ineligible",
    discountPercent: "—",
    applied: "—",
    remarks: "Dropped in Apr, returned Jun — gap >30 days, eligibility reset",
  },
];

export const LoyaltyPage: React.FC = () => {
  const [members, setMembers] = useState<LoyaltyItem[]>(initialLoyaltyMembers);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editRemarks, setEditRemarks] = useState("");

  const handleApplyDiscount = (id: string) => {
    setMembers(
      members.map((m) => {
        if (m.id === id) {
          return { ...m, applied: "Yes" };
        }
        return m;
      }),
    );
  };

  const handleStartEdit = (item: LoyaltyItem) => {
    setEditingId(item.id);
    setEditRemarks(item.remarks);
  };

  const handleSaveEdit = (id: string) => {
    setMembers(
      members.map((m) => {
        if (m.id === id) {
          return { ...m, remarks: editRemarks };
        }
        return m;
      }),
    );
    setEditingId(null);
  };

  const eligibleCount = members.filter((m) => m.status === "eligible").length;
  const appliedCount = members.filter((m) => m.applied === "Yes").length;

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Loyalty Discount Monitor
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Loyalty Policy Banner */}
      <div className="bg-[#edf2ed] border border-[#d4e0d2] rounded-lg p-4 mb-5">
        <div className="flex items-center text-sm font-bold text-[#2d382b] mb-1.5">
          <span className="mr-2">📋</span> Loyalty Policy
        </div>
        <div className="text-[13px] text-[#3f4d3d] mb-2">
          Loyalty discount applies after 4+ classes/month for 2 consecutive
          months. Gaps &gt;30 days reset eligibility.
        </div>
        <div className="text-[13px] font-bold text-[#2d382b]">
          Loyalty Discount: <span className="font-normal">15%</span> · Min
          classes/month: <span className="font-normal">4</span> · Min months:{" "}
          <span className="font-normal">2</span>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            ELIGIBLE MEMBERS
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 leading-none">
            {eligibleCount}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            DISCOUNTS APPLIED
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 leading-none">
            {appliedCount}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            DISCOUNT RATE
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 leading-none">
            15%
          </div>
        </div>
      </div>

      {/* Main Container Box for Table */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="border border-[#e5e2db] rounded-lg overflow-x-auto">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-[#f6f4ef] border-b border-[#e5e2db] text-[#736d63]">
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  MEMBER
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  EMAIL
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px] text-center">
                  MONTHS QUALIFIED
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px] text-center">
                  CLASSES LAST MONTH
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  STATUS
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  DISCOUNT %
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  APPLIED
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  REMARKS
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#f2efe9] text-stone-900 last:border-b-0"
                >
                  <td className="py-3 px-4 font-medium text-stone-900">
                    {item.member}
                  </td>
                  <td className="py-3 px-4 text-[#686259]">{item.email}</td>
                  <td className="py-3 px-4 text-center">
                    {item.monthsQualified}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.classesLastMonth}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-[12px] text-[10px] font-semibold inline-block ${
                        item.status === "eligible"
                          ? "bg-[#e6f0e6] text-[#3b6e3b]"
                          : "bg-[#f2eee7] text-[#595349]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">
                    {item.discountPercent}
                  </td>
                  <td className="py-3 px-4">{item.applied}</td>
                  <td className="py-3 px-4 text-[#686259] text-xs max-w-[250px]">
                    {editingId === item.id ? (
                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={editRemarks}
                          onChange={(e) => setEditRemarks(e.target.value)}
                          className="w-full bg-white border border-[#e5e2db] rounded px-2 py-1 text-xs text-stone-900 outline-none"
                        />
                        <button
                          onClick={() => handleSaveEdit(item.id)}
                          className="bg-[#52634d] text-white border-none rounded px-2 py-1 text-[11px] cursor-pointer whitespace-nowrap"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      item.remarks
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="flex gap-1.5 items-center">
                      {item.status === "eligible" && item.applied === "—" && (
                        <button
                          onClick={() => handleApplyDiscount(item.id)}
                          className="bg-white border border-[#d4cebe] text-stone-900 px-2.5 py-1 rounded text-[11px] cursor-pointer font-medium hover:bg-[#f6f4ef] transition-colors"
                        >
                          Apply Discount
                        </button>
                      )}
                      <button
                        onClick={() => handleStartEdit(item)}
                        className="bg-[#fff5eb] border border-[#f3d6be] text-[#a85d2b] px-2 py-1 rounded text-[11px] cursor-pointer font-medium hover:bg-[#faebd9] transition-colors"
                      >
                        ✏️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
