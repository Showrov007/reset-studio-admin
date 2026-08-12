import React, { useState } from "react";

interface AnnouncementItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string[];
  date: string;
}

const initialAnnouncements: AnnouncementItem[] = [
  {
    id: "1",
    tag: "CANCEL",
    title: "Class Cancellation — Mat Strength 7 AM (Jun 28)",
    description:
      "Due to instructor unavailability, the Mat Strength class on June 28 at 7:00 AM has been cancelled. All booked members will be refunded their credit.",
    meta: ["Mat Strength", "7:00 AM", "Imran Kabir"],
    date: "Jun 25, 2026",
  },
  {
    id: "2",
    tag: "RESCHEDULE",
    title: "Reschedule — Ladies Reformer ♀ (Jun 30)",
    description:
      "The Ladies Reformer session on June 30 has been moved from 10:00 AM to 11:00 AM. We apologise for any inconvenience.",
    meta: ["Ladies Reformer ♀", "10:00 AM → 11:00 AM", "Maliha Chowdhury"],
    date: "Jun 23, 2026",
  },
  {
    id: "3",
    tag: "INFO",
    title: "New Private Session Slot — Sundays 9 AM",
    description:
      "We have added a new private session slot every Sunday at 9:00 AM with Farhan Ahmed. Book via the Schedule tab.",
    meta: [],
    date: "Jun 20, 2026",
  },
];

export const AnnouncementsPage: React.FC = () => {
  const [announcements, setAnnouncements] =
    useState<AnnouncementItem[]>(initialAnnouncements);

  // Form states
  const [type, setType] = useState("Info");
  const [date, setDate] = useState("e.g. Jun 27, 2026");
  const [affectedClass, setAffectedClass] = useState("");
  const [timeChange, setTimeChange] = useState("");
  const [instructor, setInstructor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleDelete = (id: string) => {
    setAnnouncements(announcements.filter((a) => a.id !== id));
  };

  const handlePostAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) return;

    const metaList: string[] = [];
    if (affectedClass) metaList.push(affectedClass);
    if (timeChange) metaList.push(timeChange);
    if (instructor) metaList.push(instructor);

    const newAnnouncement: AnnouncementItem = {
      id: Date.now().toString(),
      tag: type.toUpperCase(),
      title,
      description: body,
      meta: metaList,
      date: date && date !== "e.g. Jun 27, 2026" ? date : "Aug 9, 2026",
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setTitle("");
    setBody("");
    setAffectedClass("");
    setTimeChange("");
    setInstructor("");
    setDate("e.g. Jun 27, 2026");
  };

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Announcements
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Announcements List */}
      <div className="flex flex-col gap-4 mb-8">
        {announcements.map((item) => (
          <div
            key={item.id}
            className={`bg-white border border-[#e5e2db] rounded-lg p-5 md:px-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${
              item.tag === "CANCEL"
                ? "border-l-4 border-l-[#b85252]"
                : item.tag === "RESCHEDULE"
                  ? "border-l-4 border-l-[#d49b43]"
                  : "border-l-4 border-l-[#6b7a67]"
            }`}
          >
            <div className="flex justify-between items-start mb-1.5">
              <div>
                <div
                  className={`text-[10px] font-bold tracking-[0.5px] mb-1 ${
                    item.tag === "CANCEL"
                      ? "text-[#b85252]"
                      : item.tag === "RESCHEDULE"
                        ? "text-[#b8802a]"
                        : "text-[#5b6e56]"
                  }`}
                >
                  {item.tag}
                </div>
                <div className="text-base font-bold text-stone-900 font-serif">
                  {item.title}
                </div>
              </div>
              <div className="text-xs text-[#8a8479]">{item.date}</div>
            </div>

            <div
              className={`text-[13px] text-[#595349] leading-relaxed ${
                item.meta.length > 0 ? "mb-3" : "mb-4"
              }`}
            >
              {item.description}
            </div>

            {item.meta.length > 0 && (
              <div className="flex gap-3 text-xs text-[#686259] mb-4 items-center flex-wrap">
                {item.meta.map((m, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    {idx === 0 ? "🛈 " : idx === 1 ? "⏰ " : "👤 "}
                    {m}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <button className="bg-white border border-[#d4cebe] text-[#2a2a2a] px-2.5 py-1 rounded text-[11px] cursor-pointer font-medium hover:bg-stone-50 transition-colors">
                ◉ Notify All
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-[#b87053] text-white border-none rounded px-2.5 py-1 text-[11px] cursor-pointer font-medium hover:bg-[#a65f42] transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Post New Announcement Form Box */}
      <div className="bg-white border border-[#e5e2db] rounded-lg p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] max-w-[550px]">
        <div className="text-sm font-bold text-stone-900 mb-5">
          Post New Announcement
        </div>

        <form onSubmit={handlePostAnnouncement}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                TYPE
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none cursor-pointer focus:border-[#52634d] transition-colors"
              >
                <option>Info</option>
                <option>Cancel</option>
                <option>Reschedule</option>
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
                className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              AFFECTED CLASS (OPTIONAL)
            </label>
            <input
              type="text"
              placeholder="e.g. Mat Strength"
              value={affectedClass}
              onChange={(e) => setAffectedClass(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                TIME / CHANGE
              </label>
              <input
                type="text"
                placeholder="e.g. 7:00 AM or 10 AM → 11 AM"
                value={timeChange}
                onChange={(e) => setTimeChange(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                INSTRUCTOR
              </label>
              <input
                type="text"
                placeholder="e.g. Nadia Rahman"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              TITLE
            </label>
            <input
              type="text"
              placeholder="Announcement headline..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              BODY
            </label>
            <textarea
              placeholder="Detailed announcement..."
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-md px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border resize-vertical focus:border-[#52634d] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="bg-[#52634d] text-white border-none rounded-md px-5 py-2.5 text-[13px] cursor-pointer font-medium hover:bg-[#43523f] transition-colors"
          >
            Post Announcement
          </button>
        </form>
      </div>
    </div>
  );
};
