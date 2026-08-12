import React, { useState } from "react";

interface TransactionItem {
  id: string;
  memberName: string;
  memberEmail: string;
  date: string;
  type: string;
  amount: string;
  method: string;
  txRef: string;
  status: "paid" | "pending";
  remarks: string;
}

const initialTransactions: TransactionItem[] = [
  {
    id: "1",
    memberName: "Tanjila Islam",
    memberEmail: "demo@resetstudio.com",
    date: "Jun 1, 2026",
    type: "Monthly Plan",
    amount: "৳4,500",
    method: "DGePay",
    txRef: "DGEP-2026-001",
    status: "paid",
    remarks: "—",
  },
  {
    id: "2",
    memberName: "Sara Khan",
    memberEmail: "sara@x.com",
    date: "Jun 3, 2026",
    type: "Drop-in",
    amount: "৳1,200",
    method: "Cash",
    txRef: "CASH-001",
    status: "paid",
    remarks: "Receptionist: Karim",
  },
  {
    id: "3",
    memberName: "Rafiq Hossain",
    memberEmail: "rafiq@x.com",
    date: "Jun 10, 2026",
    type: "Monthly Plan",
    amount: "৳4,050",
    method: "DGePay",
    txRef: "DGEP-2026-002",
    status: "paid",
    remarks: "10% referral discount applied (code: RST-TANJILA)",
  },
  {
    id: "4",
    memberName: "Omar Faruk",
    memberEmail: "omar@x.com",
    date: "Jun 15, 2026",
    type: "Private Session",
    amount: "৳2,500",
    method: "DGePay",
    txRef: "DGEP-2026-003",
    status: "pending",
    remarks: "—",
  },
];

export const PaymentsPage: React.FC = () => {
  const [transactions, setTransactions] =
    useState<TransactionItem[]>(initialTransactions);
  const [searchQuery, setSearchQuery] = useState("");
  const [methodFilter, setMethodFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  // Form states
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Drop-in");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleConfirm = (id: string) => {
    setTransactions(
      transactions.map((t) => {
        if (t.id === id) {
          return { ...t, status: "paid" };
        }
        return t;
      }),
    );
  };

  const handleLogCashPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName || !email || !amount) return;

    const newTx: TransactionItem = {
      id: Date.now().toString(),
      memberName,
      memberEmail: email,
      date: "Aug 9, 2026",
      type,
      amount: `৳${Number(amount).toLocaleString()}`,
      method: "Cash",
      txRef: `CASH-${Math.floor(100 + Math.random() * 900)}`,
      status: "paid",
      remarks: remarks || "—",
    };

    setTransactions([newTx, ...transactions]);
    setMemberName("");
    setEmail("");
    setAmount("");
    setRemarks("");
  };

  // Helper to parse currency strings for metrics
  const parseAmount = (amtStr: string) => {
    return Number(amtStr.replace(/[^\d]/g, "")) || 0;
  };

  // Dynamic Metrics Calculations
  const totalRevenue = transactions
    .filter((t) => t.status === "paid")
    .reduce((sum, t) => sum + parseAmount(t.amount), 0);

  const pendingAmount = transactions
    .filter((t) => t.status === "pending")
    .reduce((sum, t) => sum + parseAmount(t.amount), 0);

  const totalTransactionsCount = transactions.length;
  const dgePayCount = transactions.filter((t) => t.method === "DGePay").length;

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.memberEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.txRef.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMethod = methodFilter === "All" || t.method === methodFilter;
    const matchesStatus =
      statusFilter === "All" || t.status === statusFilter.toLowerCase();
    const matchesType = typeFilter === "All" || t.type === typeFilter;

    return matchesSearch && matchesMethod && matchesStatus && matchesType;
  });

  return (
    <div className="py-8 px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Payments & Transactions
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Top Metric Cards Row */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        <div className="bg-white rounded-lg py-4 px-5 border border-[#e5e2db] shadow-2xs">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            TOTAL REVENUE
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            ৳{totalRevenue.toLocaleString()}
          </div>
        </div>

        <div className="bg-white rounded-lg py-4 px-5 border border-[#e5e2db] shadow-2xs">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            PENDING
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            ৳{pendingAmount.toLocaleString()}
          </div>
        </div>

        <div className="bg-white rounded-lg py-4 px-5 border border-[#e5e2db] shadow-2xs">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            TRANSACTIONS
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            {totalTransactionsCount}
          </div>
        </div>

        <div className="bg-white rounded-lg py-4 px-5 border border-[#e5e2db] shadow-2xs">
          <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-2">
            DGEPAY TX
          </div>
          <div className="text-[28px] font-serif font-bold text-stone-900 leading-none">
            {dgePayCount}
          </div>
        </div>
      </div>

      {/* Payment Gateway Banner */}
      <div className="bg-[#52634d] rounded-lg p-4 mb-6 flex justify-between items-center text-white">
        <div>
          <div className="text-[10px] font-bold tracking-[0.5px] text-[#b6c7b2] mb-1">
            PAYMENT GATEWAY
          </div>
          <div className="text-base font-bold mb-0.5">DGePay Integration</div>
          <div className="text-xs text-[#d2e0d0]">
            Powered by DG Infotech Ltd. — Secure digital payments for Bangladesh
          </div>
        </div>
        <button className="bg-white text-[#2e3b2b] border-none rounded-md px-3.5 py-2 text-xs cursor-pointer font-semibold hover:bg-[#f6f4ef] transition-colors">
          Open DGePay Dashboard ↗
        </button>
      </div>

      {/* Main Container Box for Filters & Table */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-5 shadow-2xs mb-8">
        {/* Filters Row */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 mb-4">
          <div>
            <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              SEARCH
            </div>
            <input
              type="text"
              placeholder="Name, email, ref..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
            />
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              METHOD
            </div>
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#8d6d53] transition-colors"
            >
              <option>All</option>
              <option>DGePay</option>
              <option>Cash</option>
            </select>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              STATUS
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#8d6d53] transition-colors"
            >
              <option>All</option>
              <option>paid</option>
              <option>pending</option>
            </select>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              TYPE
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2 px-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#8d6d53] transition-colors"
            >
              <option>All</option>
              <option>Monthly Plan</option>
              <option>Drop-in</option>
              <option>Private Session</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-[#8a8479] mb-3">
          Showing {filteredTransactions.length} of {transactions.length}{" "}
          transactions
        </div>

        {/* Transactions Table */}
        <div className="border border-[#e5e2db] rounded-lg overflow-hidden">
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
                  TYPE
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  AMOUNT
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  METHOD
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  TX REF
                </th>
                <th className="py-2.5 px-4 font-semibold text-[10px] tracking-[0.5px]">
                  STATUS
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
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b text-[#2a2a2a] ${
                      index === filteredTransactions.length - 1
                        ? "border-none"
                        : "border-[#f2efe9]"
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
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4 font-medium">{item.amount}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`py-0.5 px-2 rounded-xl text-[10px] font-semibold inline-block ${
                          item.method === "Cash"
                            ? "bg-[#faede3] text-[#b36b3b]"
                            : "bg-[#f2eee7] text-[#595349]"
                        }`}
                      >
                        {item.method}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-[#686259]">
                      {item.txRef}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`py-0.5 px-2 rounded-xl text-[10px] font-semibold inline-block ${
                          item.status === "paid"
                            ? "bg-[#e6f0e6] text-[#3b6e3b]"
                            : "bg-[#fbf2eb] text-[#b36b3b]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#686259] text-xs max-w-[200px]">
                      {item.remarks}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex gap-1.5 items-center">
                        <button className="bg-[#fff5eb] border border-[#f3d6be] text-[#a85d2b] py-1 px-2 rounded text-[11px] cursor-pointer font-medium hover:bg-[#faede3] transition-colors">
                          ✏️
                        </button>
                        {item.status === "pending" && (
                          <button
                            onClick={() => handleConfirm(item.id)}
                            className="bg-white border border-[#d4cebe] text-stone-900 py-1 px-2 rounded text-[11px] cursor-pointer font-medium hover:bg-[#f6f4ef] transition-colors"
                          >
                            ✓ Confirm
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="py-6 px-4 text-center text-[#8a8479]"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Cash Payment Form Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-6 shadow-2xs">
        <div className="text-sm font-bold text-stone-900 mb-5">
          Log Cash Payment
        </div>

        <form onSubmit={handleLogCashPayment}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                MEMBER NAME
              </label>
              <input
                type="text"
                placeholder="Full name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
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
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                TYPE
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#8d6d53] transition-colors"
              >
                <option>Drop-in</option>
                <option>Monthly Plan</option>
                <option>Private Session</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                AMOUNT (৳)
              </label>
              <input
                type="text"
                placeholder="e.g. 1200"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              REMARKS
            </label>
            <input
              type="text"
              placeholder="e.g. Receptionist: Karim, discount applied"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-[#52634d] text-white border-none rounded-md py-2.5 px-5 text-[13px] cursor-pointer font-medium hover:bg-[#43523f] transition-colors"
          >
            Log Cash Payment
          </button>
        </form>
      </div>
    </div>
  );
};
