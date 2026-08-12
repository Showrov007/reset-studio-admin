import React, { useState } from "react";

interface ReferralCode {
  id: string;
  code: string;
  ownerEmail: string;
  timesUsed: number;
  discountGiven: "Pending" | "Given";
  remarks: string;
}

const initialReferrals: ReferralCode[] = [
  {
    id: "1",
    code: "RST-TANJILA",
    ownerEmail: "demo@resetstudio.com",
    timesUsed: 1,
    discountGiven: "Pending",
    remarks: "Friend Rafiq Hossain joined using this code on Jun 15, 2026",
  },
];

export const ReferralsPage: React.FC = () => {
  const [referrals, setReferrals] = useState<ReferralCode[]>(initialReferrals);
  const [searchQuery, setSearchQuery] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [remarksInput, setRemarksInput] = useState("");

  const handleMarkGiven = (id: string) => {
    setReferrals((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, discountGiven: "Given" } : item,
      ),
    );
  };

  const handleUpdateRemarks = (id: string, currentRemarks: string) => {
    const newRemarks = prompt("Update remarks:", currentRemarks);
    if (newRemarks !== null) {
      setReferrals((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, remarks: newRemarks } : item,
        ),
      );
    }
  };

  const handleDeleteCode = (id: string) => {
    if (window.confirm("Are you sure you want to delete this referral code?")) {
      setReferrals((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleCreateCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberEmail) {
      alert("Please enter a member email.");
      return;
    }

    const generatedCode =
      customCode.trim() ||
      `RST-${memberEmail.split("@")[0].toUpperCase().slice(0, 7)}`;

    const newReferral: ReferralCode = {
      id: Date.now().toString(),
      code: generatedCode,
      ownerEmail: memberEmail,
      timesUsed: 0,
      discountGiven: "Pending",
      remarks:
        remarksInput ||
        `Referral code issued to ${memberEmail} on ${new Date().toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric", year: "numeric" },
        )}`,
    };

    setReferrals([...referrals, newReferral]);
    setMemberEmail("");
    setCustomCode("");
    setRemarksInput("");
  };

  const filteredReferrals = referrals.filter(
    (item) =>
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.remarks.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalCodes = referrals.length;
  const totalUses = referrals.reduce((sum, item) => sum + item.timesUsed, 0);
  const pendingDiscounts = referrals.filter(
    (item) => item.discountGiven === "Pending",
  ).length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="max-w-[1150px] mx-auto font-sans text-[#2a2a2a] bg-[#faf9f6] min-h-screen p-5 md:p-8 box-border">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-['Playfair_Display'] text-[32px] font-semibold m-0 text-[#1a1a1a] tracking-[-0.5px]">
            Referral Tracking
          </h1>
          <button
            onClick={() => window.history.back()}
            className="bg-[#8d6d53] text-white border-none rounded-md px-[18px] py-2 text-[13px] cursor-pointer font-medium transition-colors duration-200 hover:bg-[#7b5d45] active:scale-[0.98]"
          >
            ← Exit
          </button>
        </div>

        {/* Referral Policy Banner */}
        <div className="bg-[#eff3ea] border border-[#dbe4d4] rounded-[10px] p-4 md:p-5 mb-6 text-[13.5px] text-[#4a5746] leading-[1.5]">
          <strong className="text-[#2d3b29] font-bold">Referral Policy:</strong>{" "}
          When a referred member joins and pays, the referrer earns{" "}
          <strong className="text-[#2d3b29] font-bold">10% off</strong> their
          next payment. Discount reason must be recorded in Remarks.
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-[#e5e2db] rounded-[10px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="text-[11px] font-bold text-[#8a8479] tracking-[0.8px] mb-2 uppercase">
              TOTAL REFERRAL CODES
            </div>
            <div className="text-[30px] font-semibold text-[#1a1a1a] font-['Playfair_Display']">
              {totalCodes}
            </div>
          </div>

          <div className="bg-white border border-[#e5e2db] rounded-[10px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="text-[11px] font-bold text-[#8a8479] tracking-[0.8px] mb-2 uppercase">
              TOTAL USES
            </div>
            <div className="text-[30px] font-semibold text-[#1a1a1a] font-['Playfair_Display']">
              {totalUses}
            </div>
          </div>

          <div className="bg-white border border-[#e5e2db] rounded-[10px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="text-[11px] font-bold text-[#8a8479] tracking-[0.8px] mb-2 uppercase">
              PENDING DISCOUNTS
            </div>
            <div className="text-[30px] font-semibold text-[#1a1a1a] font-['Playfair_Display']">
              {pendingDiscounts}
            </div>
          </div>

          <div className="bg-white border border-[#e5e2db] rounded-[10px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <div className="text-[11px] font-bold text-[#8a8479] tracking-[0.8px] mb-2 uppercase">
              DISCOUNT RATE
            </div>
            <div className="text-[30px] font-semibold text-[#1a1a1a] font-['Playfair_Display']">
              10%
            </div>
          </div>
        </div>

        {/* Table Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
          <input
            type="text"
            placeholder="Search by code, email, remarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-[14px] py-2 rounded-md border border-[#e5e2db] text-[13px] outline-none w-full sm:w-[260px] bg-white font-sans focus:border-[#8d6d53] focus:ring-3 focus:ring-[#8d6d53]/10"
          />
          <div className="text-xs text-[#8a8479]">
            Showing {filteredReferrals.length} of {referrals.length} codes
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white border border-[#e5e2db] rounded-[10px] overflow-x-auto mb-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr>
                <th className="bg-[#f2eee7] border-b border-[#e5e2db] text-[#736d63] px-[18px] py-[14px] font-semibold text-[11px] tracking-[0.8px]">
                  CODE
                </th>
                <th className="bg-[#f2eee7] border-b border-[#e5e2db] text-[#736d63] px-[18px] py-[14px] font-semibold text-[11px] tracking-[0.8px]">
                  OWNER (REFERRER)
                </th>
                <th className="bg-[#f2eee7] border-b border-[#e5e2db] text-[#736d63] px-[18px] py-[14px] font-semibold text-[11px] tracking-[0.8px]">
                  TIMES USED
                </th>
                <th className="bg-[#f2eee7] border-b border-[#e5e2db] text-[#736d63] px-[18px] py-[14px] font-semibold text-[11px] tracking-[0.8px]">
                  DISCOUNT GIVEN
                </th>
                <th className="bg-[#f2eee7] border-b border-[#e5e2db] text-[#736d63] px-[18px] py-[14px] font-semibold text-[11px] tracking-[0.8px]">
                  REMARKS
                </th>
                <th className="bg-[#f2eee7] border-b border-[#e5e2db] text-[#736d63] px-[18px] py-[14px] font-semibold text-[11px] tracking-[0.8px]">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredReferrals.length > 0 ? (
                filteredReferrals.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#f2efe9] transition-colors duration-150 hover:bg-[#fbfaf8] last:border-b-0"
                  >
                    <td className="px-[18px] py-4 align-middle">
                      <span className="bg-[#f2eee7] border border-[#e5e2db] rounded-md px-[10px] py-[5px] text-[12px] font-bold text-[#1a1a1a] tracking-[0.5px] font-mono">
                        {item.code}
                      </span>
                    </td>
                    <td className="px-[18px] py-4 align-middle text-[#1a1a1a] font-medium">
                      {item.ownerEmail}
                    </td>
                    <td className="px-[18px] py-4 align-middle text-[#1a1a1a] font-semibold">
                      {item.timesUsed}
                    </td>
                    <td className="px-[18px] py-4 align-middle">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold inline-block tracking-[0.3px] ${
                          item.discountGiven === "Pending"
                            ? "bg-[#fdf0e6] text-[#b86230] border border-[#f2d2be]"
                            : "bg-[#edf4eb] text-[#3d6b38] border border-[#cbe3c7]"
                        }`}
                      >
                        {item.discountGiven}
                      </span>
                    </td>
                    <td className="px-[18px] py-4 align-middle text-[#55514a] max-w-[280px] leading-[1.4]">
                      {item.remarks}
                    </td>
                    <td className="px-[18px] py-4 align-middle">
                      <div className="flex gap-1.5 items-center">
                        {item.discountGiven === "Pending" && (
                          <button
                            onClick={() => handleMarkGiven(item.id)}
                            className="bg-[#f6f5f2] border border-[#d4d1c8] rounded-md px-2.5 py-1.5 text-[12px] font-medium text-[#33312e] cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-[#ece8e1] hover:border-[#bc8f6f]"
                          >
                            ✓ Mark Given
                          </button>
                        )}
                        <button
                          onClick={() =>
                            handleUpdateRemarks(item.id, item.remarks)
                          }
                          className="bg-white border border-[#d4d1c8] rounded-md px-2.5 py-1.5 text-[12px] font-medium text-[#33312e] cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-[#f8f6f2] hover:border-[#bc8f6f]"
                        >
                          ✏️ Remark
                        </button>
                        <button
                          onClick={() => handleDeleteCode(item.id)}
                          className="bg-[#fdf2f2] border border-[#f5c6c6] text-[#a83232] rounded-md px-2.5 py-1.5 text-[12px] font-medium cursor-pointer whitespace-nowrap transition-all duration-200 hover:bg-[#fae1e1]"
                          title="Delete code"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-[#8a8479]">
                    No referral codes found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Create Referral Code Card */}
        <div className="bg-white border border-[#e5e2db] rounded-[10px] p-6 max-w-[540px] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h3 className="text-[18px] font-semibold mb-5 text-[#1a1a1a] font-['Playfair_Display']">
            Create Referral Code
          </h3>

          <form onSubmit={handleCreateCode}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="mb-0">
                <label className="block text-[11px] font-bold text-[#8a8479] mb-1.5 tracking-[0.8px] uppercase">
                  Member Email
                </label>
                <input
                  type="email"
                  placeholder="member@example.com"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                  className="w-full px-[14px] py-2.5 rounded-md border border-[#e5e2db] text-[13px] outline-none box-border bg-[#faf9f6] font-sans transition-all duration-200 focus:border-[#8d6d53] focus:bg-white focus:ring-3 focus:ring-[#8d6d53]/10"
                />
              </div>

              <div className="mb-0">
                <label className="block text-[11px] font-bold text-[#8a8479] mb-1.5 tracking-[0.8px] uppercase">
                  Code (Leave blank to auto-generate)
                </label>
                <input
                  type="text"
                  placeholder="RST-XXXXX"
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                  className="w-full px-[14px] py-2.5 rounded-md border border-[#e5e2db] text-[13px] outline-none box-border bg-[#faf9f6] font-sans transition-all duration-200 focus:border-[#8d6d53] focus:bg-white focus:ring-3 focus:ring-[#8d6d53]/10"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] font-bold text-[#8a8479] mb-1.5 tracking-[0.8px] uppercase">
                Remarks
              </label>
              <input
                type="text"
                placeholder="e.g. Referral code issued to Tanjila Islam on Jun 2026"
                value={remarksInput}
                onChange={(e) => setRemarksInput(e.target.value)}
                className="w-full px-[14px] py-2.5 rounded-md border border-[#e5e2db] text-[13px] outline-none box-border bg-[#faf9f6] font-sans transition-all duration-200 focus:border-[#8d6d53] focus:bg-white focus:ring-3 focus:ring-[#8d6d53]/10"
              />
            </div>

            <button
              type="submit"
              className="bg-[#52614b] text-white border-none rounded-md px-5 py-2.5 text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#44513e] active:scale-[0.98]"
            >
              Create Code
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
