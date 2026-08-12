import React, { useEffect, useState } from "react";

interface DropInItem {
  id: string;
  memberName: string;
  memberEmail: string;
  date: string;
  class: string;
  type: "Recurring" | "First-time" | "Private";
  amount: string;
  remarks: string;
}

const initialDropIns: DropInItem[] = [
  {
    id: "1",
    memberName: "Tanjila Islam",
    memberEmail: "demo@resetstudio.com",
    date: "Jun 18, 2026",
    class: "Mat Strength",
    type: "Recurring",
    amount: "৳1,000",
    remarks: "Recurring — within 30-day window",
  },
  {
    id: "2",
    memberName: "Omar Faruk",
    memberEmail: "omar@x.com",
    date: "Apr 5, 2026",
    class: "Intermediate Mat",
    type: "First-time",
    amount: "৳1,500",
    remarks: "First-time drop-in",
  },
  {
    id: "3",
    memberName: "Rafiq Hossain",
    memberEmail: "rafiq@x.com",
    date: "May 20, 2026",
    class: "Mat Strength",
    type: "Recurring",
    amount: "৳1,000",
    remarks: "Recurring — within 30-day window",
  },
  {
    id: "4",
    memberName: "Rafiq Hossain",
    memberEmail: "rafiq@x.com",
    date: "May 10, 2026",
    class: "Mat Strength",
    type: "First-time",
    amount: "৳1,500",
    remarks: "First-time drop-in",
  },
  {
    id: "5",
    memberName: "Sara Khan",
    memberEmail: "sara@x.com",
    date: "Jun 3, 2026",
    class: "Ladies Reformer ♀",
    type: "First-time",
    amount: "৳1,500",
    remarks: "First-time drop-in",
  },
];

export const DropInPage: React.FC = () => {
  const [dropIns, setDropIns] = useState<DropInItem[]>(initialDropIns);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");

  // Form states
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [className, setClassName] = useState("Mat Strength — 7:00 AM");
  const [priceType, setPriceType] = useState("First-time (৳1500)");
  const [amount, setAmount] = useState("1500");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [remarks, setRemarks] = useState("");

  // Automatically update amount when price type changes
  useEffect(() => {
    if (priceType.includes("First-time")) {
      setAmount("1500");
    } else if (priceType.includes("Recurring")) {
      setAmount("1000");
    } else if (priceType.includes("Private Session")) {
      setAmount("2500");
    }
  }, [priceType]);

  const handleLogDropIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName || !email) return;

    const entryType: "Recurring" | "First-time" | "Private" =
      priceType.includes("First-time")
        ? "First-time"
        : priceType.includes("Recurring")
          ? "Recurring"
          : "Private";

    const newEntry: DropInItem = {
      id: Date.now().toString(),
      memberName,
      memberEmail: email,
      date: "Aug 9, 2026",
      class: className.split(" — ")[0],
      type: entryType,
      amount: `৳${Number(amount).toLocaleString()}`,
      remarks:
        remarks ||
        (entryType === "First-time"
          ? "First-time drop-in"
          : entryType === "Recurring"
            ? "Recurring drop-in"
            : "Private session"),
    };

    setDropIns([newEntry, ...dropIns]);
    setMemberName("");
    setEmail("");
    setRemarks("");
  };

  // Dynamic Metrics Calculation
  const firstTimeCount = dropIns.filter((d) => d.type === "First-time").length;
  const recurringCount = dropIns.filter((d) => d.type === "Recurring").length;

  const firstTimeRevenue = dropIns
    .filter((d) => d.type === "First-time")
    .reduce((sum, d) => sum + Number(d.amount.replace(/[^\d]/g, "")), 0);

  const recurringRevenue = dropIns
    .filter((d) => d.type === "Recurring")
    .reduce((sum, d) => sum + Number(d.amount.replace(/[^\d]/g, "")), 0);

  const filteredDropIns = dropIns.filter((d) => {
    const matchesSearch =
      d.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.memberEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.class.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      typeFilter === "All Types" ||
      d.type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearch && matchesType;
  });

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Drop-in Management
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Top Metric Cards Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            FIRST-TIME DROP-INS
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            {firstTimeCount}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            RECURRING DROP-INS
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            {recurringCount}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            FIRST-TIME REVENUE
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            ৳{firstTimeRevenue.toLocaleString()}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            RECURRING REVENUE
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            ৳{recurringRevenue.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Pricing Configuration Cards Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            FIRST DROP-IN PRICE
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mb-1">
            ৳1,500
          </div>
          <div className="text-[11px] text-[#8a8479]">
            New / returning after 30+ days
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            RECURRING DROP-IN PRICE
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mb-1">
            ৳1,000
          </div>
          <div className="text-[11px] text-[#8a8479]">Within 30-day window</div>
        </div>

        <div className="bg-white rounded-lg p-4 md:p-5 border border-[#e5e2db] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            PRIVATE SESSION PRICE
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900 mb-1">
            ৳2,500
          </div>
          <div className="text-[11px] text-[#8a8479]">One-on-one 60 min</div>
        </div>
      </div>

      {/* Main Container Box for Log & Table */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-5 mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="text-xs font-bold text-[#8a8479] tracking-[0.5px] mb-2.5">
          Drop-in Log
        </div>

        {/* Search Input */}
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search member..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
          />
        </div>

        {/* Type Filter */}
        <div className="mb-5">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border cursor-pointer focus:border-[#52634d] transition-colors"
          >
            <option>All Types</option>
            <option>First-time</option>
            <option>Recurring</option>
          </select>
        </div>

        {/* Drop-in Table */}
        <div className="border border-[#e5e2db] rounded-lg overflow-x-auto">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-[#f6f4ef] border-b border-[#e5e2db] text-[#736d63]">
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  MEMBER
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  DATE
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  CLASS
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  TYPE
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  AMOUNT
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
              {filteredDropIns.length > 0 ? (
                filteredDropIns.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`text-[#2a2a2a] ${
                      index === filteredDropIns.length - 1
                        ? ""
                        : "border-b border-[#f2efe9]"
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-medium text-stone-900">
                        {item.memberName}
                      </div>
                      <div className="text-[11px] text-[#8a8479]">
                        {item.memberEmail}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[#686259]">{item.date}</td>
                    <td className="py-3 px-4">{item.class}</td>
                    <td className="py-3 px-4">
                      <span className="bg-[#f2eee7] text-[#595349] py-0.5 px-2.5 rounded-xl text-[10px] font-semibold inline-block">
                        {item.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium">{item.amount}</td>
                    <td className="py-3 px-4 text-[#686259] text-xs">
                      {item.remarks}
                    </td>
                    <td className="py-3 px-4">
                      <button className="bg-[#fff5eb] border border-[#f3d6be] text-[#a85d2b] py-1 px-2 rounded text-[11px] cursor-pointer font-medium hover:bg-[#faebd9] transition-colors">
                        ✏️
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-6 px-4 text-center text-[#8a8479]"
                  >
                    No drop-in records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Drop-in Session Form Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="text-sm font-bold text-stone-900 mb-5">
          Log Drop-in Session
        </div>

        <form onSubmit={handleLogDropIn}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                MEMBER NAME
              </label>
              <input
                type="text"
                placeholder="Full name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                CLASS
              </label>
              <select
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border cursor-pointer focus:border-[#52634d] transition-colors"
              >
                <option>Mat Strength — 7:00 AM</option>
                <option>Beginner Reformer — 8:00 AM</option>
                <option>Ladies Reformer — 10:00 AM</option>
                <option>Private Session — 12:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                PRICE TYPE
              </label>
              <select
                value={priceType}
                onChange={(e) => setPriceType(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border cursor-pointer focus:border-[#52634d] transition-colors"
              >
                <option>First-time (৳1500)</option>
                <option>Recurring (৳1000)</option>
                <option>Private Session (৳2500)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                AMOUNT (৳)
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                PAYMENT METHOD
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border cursor-pointer focus:border-[#52634d] transition-colors"
              >
                <option>Cash</option>
                <option>Card</option>
                <option>Mobile Banking</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              REMARKS
            </label>
            <input
              type="text"
              placeholder="e.g. First-time drop-in, no discount applicable"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-[#52634d] text-white border-none rounded-md px-5 py-2.5 text-[13px] cursor-pointer font-medium hover:bg-[#43523f] transition-colors"
          >
            Log Drop-in
          </button>
        </form>
      </div>
    </div>
  );
};
