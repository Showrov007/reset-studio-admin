import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminSidebar } from "./components/AdminSidebar";
import { InstructorsPage } from "./pages/AllPages";
import { AnnouncementsPage } from "./pages/AnnouncementsPage";
import { BookingsPage } from "./pages/BookingsPage";
import { ClassesPage } from "./pages/ClassesPage";
import { DropInPage } from "./pages/DropInPage";
import { LoginPage } from "./pages/LoginPage";
import { LoyaltyPage } from "./pages/LoyaltyPage";
import { MembersPage } from "./pages/MembersPage";
import { NewsletterPage } from "./pages/NewsletterPage";
import { NoticesPage } from "./pages/NoticesPage";
import { OverviewPage } from "./pages/OverviewPage";
import { PaymentsPage } from "./pages/PaymentsPage";
import { ReferralsPage } from "./pages/ReferralsPage";
import { SettingsPage } from "./pages/SettingsPage";

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute
            element={
              <div className="flex min-h-screen bg-[#f6f5f2]">
                <AdminSidebar />
                <main className="flex-1 px-10 py-8 overflow-y-auto">
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/overview" replace />}
                    />
                    <Route path="/overview" element={<OverviewPage />} />
                    <Route path="/bookings" element={<BookingsPage />} />
                    <Route path="/classes" element={<ClassesPage />} />
                    <Route path="/instructors" element={<InstructorsPage />} />
                    <Route path="/members" element={<MembersPage />} />
                    <Route path="/drop-in" element={<DropInPage />} />
                    <Route path="/loyalty" element={<LoyaltyPage />} />
                    <Route path="/referrals" element={<ReferralsPage />} />
                    <Route path="/payments" element={<PaymentsPage />} />
                    <Route path="/notices" element={<NoticesPage />} />
                    <Route
                      path="/announcements"
                      element={<AnnouncementsPage />}
                    />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/newsletter" element={<NewsletterPage />} />
                  </Routes>
                </main>
              </div>
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
