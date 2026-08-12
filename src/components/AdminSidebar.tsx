import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const navItems = [
    { label: "Overview", path: "/", icon: "🎨" },
    { label: "Bookings", path: "/bookings", icon: "📋" },
    { label: "Classes & Slots", path: "/classes", icon: "📅" },
    { label: "Instructors", path: "/instructors", icon: "👩‍🏫" },
    { label: "Members", path: "/members", icon: "👥" },
    { label: "Drop-in", path: "/drop-in", icon: "💧" },
    { label: "Loyalty", path: "/loyalty", icon: "⭐" },
    { label: "Referrals", path: "/referrals", icon: "🎁" },
    { label: "Payments", path: "/payments", icon: "💳" },
    { label: "Notices", path: "/notices", icon: "📢" },
    { label: "Announcements", path: "/announcements", icon: "🔔" },
    { label: "Settings", path: "/settings", icon: "⚙️" },
    { label: "Newsletter", path: "/newsletter", icon: "✉️" },
  ];

  return (
    <aside className="w-[260px] bg-[#1a1816] text-[#b3ada4] flex flex-col justify-between min-h-screen select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Brand Section */}
      <div>
        <div className="p-6 border-b border-[#2d2925]">
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-white text-[#1a1816] px-2 py-0.5 rounded text-[11px] font-bold tracking-widest">
              RESET
            </div>
            <span className="text-white font-['Playfair_Display'] text-lg font-semibold tracking-wide">
              Admin
            </span>
          </div>
          <div className="text-[10px] tracking-widest text-[#8c857b] uppercase">
            ADMIN MANAGEMENT
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13px] transition-colors ${
                  isActive
                    ? "bg-[#2d2925] text-white font-semibold"
                    : "hover:bg-[#25211e] text-[#b3ada4] hover:text-white"
                }`
              }
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Profile & Exit Portal Section */}
      <div className="p-5 border-t border-[#2d2925]">
        <div className="text-[12px] text-[#8c857b] mb-1.5 truncate">
          admin@resetstudio.com
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-[13px] text-[#b3ada4] hover:text-white transition-colors cursor-pointer"
        >
          <span>←</span>
          <span>Exit Portal</span>
        </button>
      </div>
    </aside>
  );
};
