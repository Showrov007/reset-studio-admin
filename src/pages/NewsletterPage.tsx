import React, { useState } from "react";

export const NewsletterPage: React.FC = () => {
  // Bulk Message states
  const [selectedClass, setSelectedClass] = useState("Mat Strength");
  const [bulkSubject, setBulkSubject] = useState("");
  const [bulkMessage, setBulkMessage] = useState("");

  // General Newsletter states
  const [generalSubject, setGeneralSubject] = useState("");
  const [generalMessage, setGeneralMessage] = useState("");

  const handleSendBulk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkSubject || !bulkMessage) return;
    alert(`Bulk message sent to members of ${selectedClass}!`);
    setBulkSubject("");
    setBulkMessage("");
  };

  const handleSendGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    if (!generalSubject || !generalMessage) return;
    alert("General newsletter sent to all 2 members!");
    setGeneralSubject("");
    setGeneralMessage("");
  };

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Newsletter
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Bulk Message Section Box */}
      <div className="bg-[#edf2ed] border border-[#d4e0d2] rounded-lg p-6 mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="text-sm font-bold text-[#2d382b] mb-1.5 flex items-center gap-1.5">
          <span>📢</span> Bulk Message — Send to All Members of a Class
        </div>
        <div className="text-[13px] text-[#3f4d3d] mb-5">
          Target everyone currently booked into a specific class. Great for
          schedule changes, instructor updates or reminders.
        </div>

        <form onSubmit={handleSendBulk}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#5d6d5a] tracking-[0.5px] mb-1.5">
                SELECT CLASS
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-white border border-[#c8d6c5] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
              >
                <option>Mat Strength</option>
                <option>Beginner Reformer</option>
                <option>Ladies Reformer ♀</option>
                <option>Private Session</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#5d6d5a] tracking-[0.5px] mb-1.5">
                SUBJECT
              </label>
              <input
                type="text"
                placeholder="e.g. Class rescheduled to 7:00 PM"
                value={bulkSubject}
                onChange={(e) => setBulkSubject(e.target.value)}
                className="w-full bg-white border border-[#c8d6c5] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#5d6d5a] tracking-[0.5px] mb-1.5">
              MESSAGE
            </label>
            <textarea
              placeholder="Write your message to class members..."
              rows={4}
              value={bulkMessage}
              onChange={(e) => setBulkMessage(e.target.value)}
              className="w-full bg-white border border-[#c8d6c5] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border resize-vertical focus:border-[#52634d] transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="submit"
              className="bg-[#52634d] text-white border-none rounded-md py-2.5 px-5 text-[13px] cursor-pointer font-medium hover:bg-[#43513f] transition-colors"
            >
              Send to Class Members
            </button>
            <span className="text-xs text-[#5d6d5a]">
              → 1 member currently booked in this class
            </span>
          </div>
        </form>
      </div>

      {/* General Newsletter Section Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-6 mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[550px]">
        <div className="text-sm font-bold text-stone-900 mb-5 flex items-center gap-1.5">
          <span>✉️</span> General Newsletter — All Members
        </div>

        <form onSubmit={handleSendGeneral}>
          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              SUBJECT
            </label>
            <input
              type="text"
              placeholder="e.g. July Class Schedule"
              value={generalSubject}
              onChange={(e) => setGeneralSubject(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#8d6d53] transition-colors"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              MESSAGE
            </label>
            <textarea
              placeholder="Write your announcement..."
              rows={4}
              value={generalMessage}
              onChange={(e) => setGeneralMessage(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border resize-vertical focus:border-[#8d6d53] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-[#52634d] text-white border-none rounded-md py-2.5 px-5 text-[13px] cursor-pointer font-medium hover:bg-[#43513f] transition-colors"
          >
            Send to All 2 Members
          </button>
        </form>
      </div>

      {/* Sent History Section */}
      <div>
        <div className="text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-3 flex items-center gap-1.5">
          <span>📋</span> SENT HISTORY
        </div>
        <div className="text-[13px] text-[#8a8479]">
          No newsletters sent yet.
        </div>
      </div>
    </div>
  );
};
