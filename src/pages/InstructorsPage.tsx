import React, { useState } from "react";

// SVG Avatar Illustrations matching the design aesthetics with Tailwind classes
const FemaleAvatar1 = () => (
  <svg
    viewBox="0 0 300 260"
    width="100%"
    height="220"
    className="bg-[#f4f4f4] rounded-t-lg"
  >
    <ellipse cx="150" cy="240" rx="90" ry="15" fill="#e2e2e2" />
    <path
      d="M 110 210 Q 150 240 190 210 Q 210 180 180 160 C 170 170 130 170 120 160 Q 90 180 110 210 Z"
      fill="#1b3b42"
    />
    <path
      d="M 125 140 Q 150 150 175 140 L 180 180 Q 150 195 120 180 Z"
      fill="#e25b52"
    />
    <path
      d="M 125 140 Q 90 170 60 180 Q 90 190 110 180"
      fill="none"
      stroke="#f0aa8a"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <path
      d="M 175 140 Q 210 170 240 180 Q 210 190 190 180"
      fill="none"
      stroke="#f0aa8a"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <path d="M 142 120 L 158 120 L 156 135 L 144 135 Z" fill="#e89d7d" />
    <circle cx="150" cy="100" r="22" fill="#f0aa8a" />
    <path
      d="M 130 95 C 130 75 170 75 170 95 C 170 102 165 108 150 108 C 135 108 130 102 130 95 Z"
      fill="#6d2325"
    />
    <circle cx="150" cy="68" r="12" fill="#6d2325" />
    <path
      d="M 142 102 Q 146 106 150 106 Q 154 106 158 102"
      fill="none"
      stroke="#c07358"
      strokeWidth="2"
    />
    <path
      d="M 140 96 Q 144 93 147 96"
      fill="none"
      stroke="#5d1e20"
      strokeWidth="2"
    />
    <path
      d="M 153 96 Q 156 93 160 96"
      fill="none"
      stroke="#5d1e20"
      strokeWidth="2"
    />
  </svg>
);

const MaleAvatar1 = () => (
  <svg
    viewBox="0 0 300 260"
    width="100%"
    height="220"
    className="bg-white rounded-t-lg"
  >
    <circle cx="150" cy="130" r="85" fill="#e0f2f1" />
    <path
      d="M 80 130 C 60 90 100 60 110 80 C 120 100 90 120 80 130 Z"
      fill="#00897b"
      opacity="0.6"
    />
    <path
      d="M 220 130 C 240 90 200 60 190 80 C 180 100 210 120 220 130 Z"
      fill="#00897b"
      opacity="0.6"
    />
    <path
      d="M 210 160 C 240 140 230 110 210 125 Z"
      fill="#004d40"
      opacity="0.5"
    />
    <path d="M 90 160 C 60 140 70 110 90 125 Z" fill="#004d40" opacity="0.5" />
    <path
      d="M 100 215 Q 150 240 200 215 Q 215 190 185 175 C 170 185 130 185 115 175 Q 85 190 100 215 Z"
      fill="#ffab91"
    />
    <path d="M 120 170 L 180 170 L 190 200 L 110 200 Z" fill="#0277bd" />
    <path d="M 125 125 L 175 125 L 185 170 L 115 170 Z" fill="#90a4ae" />
    <path d="M 140 125 L 150 138 L 160 125 Z" fill="#f5c09e" />
    <path
      d="M 125 130 Q 95 160 75 170 Q 100 180 115 170"
      fill="none"
      stroke="#f5c09e"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <path
      d="M 175 130 Q 205 160 225 170 Q 200 180 185 170"
      fill="none"
      stroke="#f5c09e"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <circle cx="150" cy="100" r="20" fill="#f5c09e" />
    <path
      d="M 132 92 C 132 75 168 75 168 92 C 168 95 162 90 150 90 C 138 90 132 95 132 92 Z"
      fill="#263238"
    />
    <path
      d="M 141 98 Q 144 96 147 98"
      fill="none"
      stroke="#263238"
      strokeWidth="2"
    />
    <path
      d="M 153 98 Q 156 96 159 98"
      fill="none"
      stroke="#263238"
      strokeWidth="2"
    />
    <path
      d="M 145 106 Q 150 109 155 106"
      fill="none"
      stroke="#d87a68"
      strokeWidth="2"
    />
  </svg>
);

const FemaleAvatar2 = () => (
  <svg
    viewBox="0 0 300 260"
    width="100%"
    height="220"
    className="bg-white rounded-t-lg"
  >
    <circle cx="150" cy="130" r="90" fill="#e8eaf6" />
    <circle cx="215" cy="170" r="6" fill="#ffffff" />
    <circle cx="225" cy="165" r="4" fill="#ffd54f" />
    <circle cx="85" cy="170" r="5" fill="#ffffff" />
    <path d="M 70 170 C 60 120 90 100 80 140 Z" fill="#9fa8da" />
    <path d="M 230 170 C 240 120 210 100 220 140 Z" fill="#9fa8da" />
    <path
      d="M 105 205 Q 150 230 195 205 Q 210 180 180 165 C 170 175 130 175 120 165 Q 90 180 105 205 Z"
      fill="#1a237e"
    />
    <path d="M 130 130 L 170 130 L 175 165 L 125 165 Z" fill="#ffffff" />
    <path
      d="M 130 135 Q 110 155 142 155 L 150 135"
      fill="none"
      stroke="#f8c1a6"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M 170 135 Q 190 155 158 155 L 150 135"
      fill="none"
      stroke="#f8c1a6"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M 120 90 C 110 130 120 170 125 180 C 130 150 130 100 135 90 Z"
      fill="#1a237e"
    />
    <path
      d="M 180 90 C 190 130 180 170 175 180 C 170 150 170 100 165 90 Z"
      fill="#1a237e"
    />
    <circle cx="150" cy="95" r="18" fill="#f8c1a6" />
    <path
      d="M 132 90 C 132 70 168 70 168 90 C 160 82 140 82 132 90 Z"
      fill="#1a237e"
    />
    <path
      d="M 142 94 Q 145 98 148 94"
      fill="none"
      stroke="#1a237e"
      strokeWidth="1.8"
    />
    <path
      d="M 152 94 Q 155 98 158 94"
      fill="none"
      stroke="#1a237e"
      strokeWidth="1.8"
    />
    <path
      d="M 146 102 Q 150 105 154 102"
      fill="none"
      stroke="#d87a68"
      strokeWidth="1.8"
    />
  </svg>
);

const MaleAvatar2 = () => (
  <svg
    viewBox="0 0 300 260"
    width="100%"
    height="220"
    className="bg-white rounded-t-lg"
  >
    <ellipse cx="150" cy="210" rx="100" ry="25" fill="#e0f2f1" opacity="0.7" />
    <path
      d="M 100 210 Q 150 235 200 210 Q 215 185 185 170 C 170 180 130 180 115 170 Q 85 185 100 210 Z"
      fill="#4e342e"
    />
    <path d="M 125 125 L 175 125 L 185 175 L 115 175 Z" fill="#4db6ac" />
    <path d="M 138 125 L 150 142 L 162 125 Z" fill="#e0a98b" />
    <path
      d="M 125 130 Q 95 160 75 170 Q 100 180 115 170"
      fill="none"
      stroke="#e0a98b"
      strokeWidth="11"
      strokeLinecap="round"
    />
    <path
      d="M 175 130 Q 205 160 225 170 Q 200 180 185 170"
      fill="none"
      stroke="#e0a98b"
      strokeWidth="11"
      strokeLinecap="round"
    />
    <circle cx="150" cy="98" r="20" fill="#e0a98b" />
    <path
      d="M 132 90 C 132 72 168 72 168 90 C 168 95 160 85 150 85 C 140 85 132 95 132 90 Z"
      fill="#5d4037"
    />
    <path
      d="M 140 102 Q 150 106 160 102 Q 158 114 150 114 Q 142 114 140 102 Z"
      fill="#5d4037"
    />
    <path
      d="M 142 96 Q 145 94 148 96"
      fill="none"
      stroke="#3e2723"
      strokeWidth="2"
    />
    <path
      d="M 152 96 Q 155 94 158 96"
      fill="none"
      stroke="#3e2723"
      strokeWidth="2"
    />
  </svg>
);

interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  avatarStyle: "Female 1" | "Male 1" | "Female 2" | "Male 2";
}

const initialInstructors: Instructor[] = [
  {
    id: "1",
    name: "Nadia Rahman",
    role: "LEAD INSTRUCTOR",
    bio: "Certified Reformer & Mat instructor, 7 years coaching beginner-to-intermediate.",
    tags: ["Reformer Flow", "Beginner Reformer"],
    avatarStyle: "Female 1",
  },
  {
    id: "2",
    name: "Farhan Ahmed",
    role: "PRIVATE SESSIONS",
    bio: "Specialises in post-injury rehab and one-to-one strength programming.",
    tags: ["Private Session"],
    avatarStyle: "Male 1",
  },
  {
    id: "3",
    name: "Maliha Chowdhury",
    role: "GROUP & LADIES",
    bio: "Leads ladies-only sessions focused on posture and flexibility.",
    tags: ["Ladies Reformer ♀"],
    avatarStyle: "Female 2",
  },
  {
    id: "4",
    name: "Imran Kabir",
    role: "TOWER & MAT",
    bio: "Sports physiotherapy background; coaches intermediate strength tracks.",
    tags: ["Mat Strength", "Intermediate Mat"],
    avatarStyle: "Male 2",
  },
];

export const InstructorsPage: React.FC = () => {
  const [instructors, setInstructors] =
    useState<Instructor[]>(initialInstructors);
  const [searchQuery, setSearchQuery] = useState("");

  // Form State
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [tags, setTags] = useState("");
  const [assignClasses, setAssignClasses] = useState("");
  const [avatarStyle, setAvatarStyle] = useState<
    "Female 1" | "Male 1" | "Female 2" | "Male 2"
  >("Female 1");

  const handleRemove = (id: string) => {
    setInstructors((prev) => prev.filter((inst) => inst.id !== id));
  };

  const handleAddInstructor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !role) {
      alert("Please fill in at least the full name and role.");
      return;
    }

    const combinedTags = [
      ...tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      ...assignClasses
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
    ];

    const newInstructor: Instructor = {
      id: Date.now().toString(),
      name: fullName,
      role: role.toUpperCase(),
      bio: bio || "No bio provided.",
      tags:
        combinedTags.length > 0
          ? Array.from(new Set(combinedTags))
          : ["General"],
      avatarStyle,
    };

    setInstructors([...instructors, newInstructor]);
    setFullName("");
    setRole("");
    setBio("");
    setTags("");
    setAssignClasses("");
    setAvatarStyle("Female 1");
  };

  const renderAvatar = (style: Instructor["avatarStyle"]) => {
    switch (style) {
      case "Female 1":
        return <FemaleAvatar1 />;
      case "Male 1":
        return <MaleAvatar1 />;
      case "Female 2":
        return <FemaleAvatar2 />;
      case "Male 2":
      default:
        return <MaleAvatar2 />;
    }
  };

  const filteredInstructors = instructors.filter((inst) => {
    const q = searchQuery.toLowerCase();
    return (
      inst.name.toLowerCase().includes(q) ||
      inst.role.toLowerCase().includes(q) ||
      inst.bio.toLowerCase().includes(q) ||
      inst.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="p-8 md:px-10 max-w-[1250px] mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold m-0 text-stone-900 font-serif">
          Instructors
        </h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#8d6d53] text-white border-none rounded px-3.5 py-1.5 text-xs cursor-pointer font-medium hover:bg-[#7b5d45] transition-colors"
        >
          ← Exit
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <div className="relative w-full">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8479] text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by name or class..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-[#e5e2db] text-[13px] outline-none bg-white box-border focus:border-[#52634d] transition-colors text-stone-900"
          />
        </div>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 mb-8">
        {filteredInstructors.map((inst) => (
          <div
            key={inst.id}
            className="bg-white rounded-lg border border-[#e5e2db] overflow-hidden flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="w-full overflow-hidden">
              {renderAvatar(inst.avatarStyle)}
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-base font-bold mb-0.5 text-stone-900 font-serif">
                {inst.name}
              </h2>
              <span className="text-[10px] font-bold text-[#a07153] tracking-[0.5px] uppercase mb-2.5 block">
                {inst.role}
              </span>
              <p className="text-xs text-[#736d65] leading-[1.4] mb-4 flex-1">
                {inst.bio}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {inst.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f1efe9] text-[#55514a] text-[11px] px-2 py-1 rounded font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <button
                  onClick={() => handleRemove(inst.id)}
                  className="bg-[#fff5eb] border border-[#f3d6be] text-[#a85d2b] py-1.5 px-3 rounded text-[11px] font-semibold cursor-pointer hover:bg-[#faebd9] transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Instructor Form Card */}
      <div className="bg-white rounded-lg border border-[#e5e2db] p-6 max-w-[520px] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h2 className="text-base font-bold mb-5 text-stone-900 font-serif">
          Add New Instructor
        </h2>

        <form onSubmit={handleAddInstructor}>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                FULL NAME
              </label>
              <input
                type="text"
                placeholder="e.g. Rina Begum"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
                ROLE
              </label>
              <input
                type="text"
                placeholder="e.g. Mat Instructor"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              BIO
            </label>
            <textarea
              rows={3}
              placeholder="Short bio..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors resize-y font-sans"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              TAGS (COMMA-SEPARATED)
            </label>
            <input
              type="text"
              placeholder="e.g. Reformer, Mat"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              ASSIGN CLASSES (COMMA-SEPARATED)
            </label>
            <input
              type="text"
              placeholder="e.g. Reformer Flow, Mat Strength"
              value={assignClasses}
              onChange={(e) => setAssignClasses(e.target.value)}
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border focus:border-[#52634d] transition-colors"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[10px] font-bold text-[#8a8479] tracking-[0.5px] mb-1.5">
              AVATAR STYLE
            </label>
            <select
              value={avatarStyle}
              onChange={(e) => setAvatarStyle(e.target.value as any)}
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3 py-2.5 text-[13px] text-stone-900 outline-none box-border cursor-pointer focus:border-[#52634d] transition-colors"
            >
              <option value="Female 1">Female 1</option>
              <option value="Male 1">Male 1</option>
              <option value="Female 2">Female 2</option>
              <option value="Male 2">Male 2</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#52634d] text-white border-none rounded-md px-5 py-2.5 text-[13px] font-medium cursor-pointer hover:bg-[#43523f] transition-colors"
          >
            Add Instructor
          </button>
        </form>
      </div>
    </div>
  );
};
