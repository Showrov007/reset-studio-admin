import React, { useState } from "react";

interface NoticeItem {
  id: string;
  title: string;
  content: string;
  date: string;
  type: string;
}

const initialNotices: NoticeItem[] = [
  {
    id: "1",
    title: "Studio Closure — Eid Holiday",
    content:
      "The studio will be closed from June 28–30 for Eid ul-Adha. All bookings during this period have been rescheduled.",
    date: "Jun 20, 2026",
    type: "Info",
  },
  {
    id: "2",
    title: "New Ladies Reformer Slot Added",
    content:
      "We have added a new ladies-only reformer slot every Saturday at 9:00 AM starting July 5th. Book early — only 6 spots!",
    date: "Jun 18, 2026",
    type: "Info",
  },
  {
    id: "3",
    title: "Workshop: Pilates for Back Pain — July 12",
    content:
      "Join Farhan Ahmed for a 90-minute specialised workshop. Members get 20% discount. Contact us to register.",
    date: "Jun 15, 2026",
    type: "Info",
  },
];

export const NoticesPage: React.FC = () => {
  const [notices, setNotices] = useState<NoticeItem[]>(initialNotices);

  // Form states
  const [type, setType] = useState("Info");
  const [date, setDate] = useState("Jun 27, 2026");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleDelete = (id: string) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  const handlePostNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNotice: NoticeItem = {
      id: Date.now().toString(),
      title,
      content,
      date: date || "Aug 9, 2026",
      type,
    };

    setNotices([newNotice, ...notices]);
    setTitle("");
    setContent("");
    setDate("Aug 9, 2026");
  };

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Notice Board
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Notices List */}
      <div className="flex flex-col gap-4 mb-8">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white border border-[#e5e2db] rounded-lg p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] relative"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-base font-bold text-stone-900 font-serif">
                {notice.title}
              </div>
              <div className="text-xs text-[#8a8479]">{notice.date}</div>
            </div>

            <div className="text-[13px] text-[#595349] leading-[1.5] mb-4">
              {notice.content}
            </div>

            <button
              onClick={() => handleDelete(notice.id)}
              className="bg-[#b87053] text-white border-none rounded px-3 py-1.5 text-[11px] cursor-pointer font-medium hover:bg-[#a66247] transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Post New Notice Form Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[550px]">
        <div className="text-sm font-bold text-stone-900 mb-5">
          Post New Notice
        </div>

        <form onSubmit={handlePostNotice}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                TYPE
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
              >
                <option>Info</option>
                <option>Warning</option>
                <option>Update</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                DATE
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              TITLE
            </label>
            <input
              type="text"
              placeholder="Notice title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              BODY
            </label>
            <textarea
              placeholder="Notice content..."
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md py-2.5 px-3 text-[13px] text-stone-900 outline-none box-border resize-vertical focus:border-[#52634d] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-[#52634d] text-white border-none rounded-md py-2.5 px-5 text-[13px] cursor-pointer font-medium hover:bg-[#43513f] transition-colors"
          >
            Post Notice
          </button>
        </form>
      </div>
    </div>
  );
};
