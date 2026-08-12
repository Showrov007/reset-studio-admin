import React, { useState } from "react";

export const SettingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstTimeDropInPrice: "1500",
    recurringDropInPrice: "1000",
    gracePeriodDays: "30",
    dropInPolicyNote:
      "Recurring drop-in discount applies when the member attended at least once in the past 30 days.",
    privateSessionPrice: "2500",
    referralDiscountPercent: "10",
    loyaltyDiscountPercent: "15",
    minClassesPerMonth: "4",
    minConsecutiveMonths: "2",
    loyaltyPolicyNote:
      "Loyalty discount applies after 4+ classes/month for 2 consecutive months. Gaps >30 days reset eligibility.",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
    }, 4000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .settings-container {
          max-width: 1150px;
          margin: 0 auto;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #2a2a2a;
          background-color: #faf9f6;
          min-height: 100vh;
          padding: 32px 20px;
          box-sizing: border-box;
        }

        .settings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .settings-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 600;
          margin: 0;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        .exit-btn {
          background-color: #8d6d53;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 8px 18px;
          font-size: 13px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s ease, transform 0.1s ease;
        }

        .exit-btn:hover {
          background-color: #7b5d45;
        }

        .exit-btn:active {
          transform: scale(0.98);
        }

        .success-banner {
          background-color: #edf4eb;
          border: 1px solid #cbe3c7;
          border-radius: 10px;
          padding: 14px 20px;
          margin-bottom: 24px;
          font-size: 13.5px;
          color: #3d6b38;
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .top-grid {
            grid-template-columns: 1fr;
          }
        }

        .settings-card {
          background-color: #ffffff;
          border-radius: 10px;
          border: 1px solid #e5e2db;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .settings-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #1a1a1a;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group:last-child {
          margin-bottom: 0;
        }

        .form-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #8a8479;
          margin-bottom: 6px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .form-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 6px;
          border: 1px solid #e5e2db;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
          background-color: #faf9f6;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus {
          border-color: #8d6d53;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(141, 109, 83, 0.1);
        }

        .form-textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 6px;
          border: 1px solid #e5e2db;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
          background-color: #faf9f6;
          font-family: 'Plus Jakarta Sans', sans-serif;
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-textarea:focus {
          border-color: #8d6d53;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(141, 109, 83, 0.1);
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .grid-2-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        @media (max-width: 580px) {
          .grid-2-cols {
            grid-template-columns: 1fr;
          }
        }

        .submit-btn {
          background-color: #52614b;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 11px 24px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease;
        }

        .submit-btn:hover {
          background-color: #44513e;
        }

        .submit-btn:active {
          transform: scale(0.98);
        }
      `}</style>

      <div className="settings-container">
        {/* Header */}
        <div className="settings-header">
          <h1 className="settings-title">Pricing & Discount Settings</h1>
          <button onClick={() => window.history.back()} className="exit-btn">
            ← Exit
          </button>
        </div>

        {/* Success Banner Notification */}
        {successMessage && (
          <div className="success-banner">
            <span>
              ✓ <strong>Settings saved successfully!</strong> All modifications
              have been updated.
            </span>
            <button
              onClick={() => setSuccessMessage(false)}
              className="bg-transparent border-none text-[#3d6b38] cursor-pointer font-bold"
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSave}>
          {/* Top Grid: Drop-in Pricing & Private Session / Referral */}
          <div className="top-grid">
            {/* Drop-in Pricing Card */}
            <div className="settings-card">
              <div className="card-header">
                <span className="text-[18px]">💧</span>
                <h2 className="card-title">Drop-in Pricing</h2>
              </div>

              <div className="form-group">
                <label className="form-label">
                  First-Time Drop-In Price (৳)
                </label>
                <input
                  type="text"
                  name="firstTimeDropInPrice"
                  value={formData.firstTimeDropInPrice}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Recurring Drop-In Price (৳)
                </label>
                <input
                  type="text"
                  name="recurringDropInPrice"
                  value={formData.recurringDropInPrice}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Grace Period (Days)</label>
                <input
                  type="text"
                  name="gracePeriodDays"
                  value={formData.gracePeriodDays}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Policy Note (Shown to Members)
                </label>
                <textarea
                  rows={3}
                  name="dropInPolicyNote"
                  value={formData.dropInPolicyNote}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>
            </div>

            {/* Right Column: Private Session & Referral Cards */}
            <div className="right-column">
              {/* Private Session Pricing Card */}
              <div className="settings-card">
                <div className="card-header">
                  <span className="text-[16px]">🔒</span>
                  <h2 className="card-title">Private Session Pricing</h2>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Private Session Price (৳)
                  </label>
                  <input
                    type="text"
                    name="privateSessionPrice"
                    value={formData.privateSessionPrice}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Referral Discount Card */}
              <div className="settings-card">
                <div className="card-header">
                  <span className="text-[16px]">🎁</span>
                  <h2 className="card-title">Referral Discount</h2>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Referral Discount % for Referrer
                  </label>
                  <input
                    type="text"
                    name="referralDiscountPercent"
                    value={formData.referralDiscountPercent}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Loyalty Discount Settings Card */}
          <div className="settings-card mb-8">
            <div className="card-header">
              <span className="text-[16px]">⭐</span>
              <h2 className="card-title">Loyalty Discount Settings</h2>
            </div>

            <div className="grid-2-cols">
              <div className="form-group mb-0">
                <label className="form-label">Loyalty Discount %</label>
                <input
                  type="text"
                  name="loyaltyDiscountPercent"
                  value={formData.loyaltyDiscountPercent}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group mb-0">
                <label className="form-label">Min Classes Per Month</label>
                <input
                  type="text"
                  name="minClassesPerMonth"
                  value={formData.minClassesPerMonth}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid-2-cols mb-4">
              <div className="form-group mb-0">
                <label className="form-label">Min Consecutive Months</label>
                <input
                  type="text"
                  name="minConsecutiveMonths"
                  value={formData.minConsecutiveMonths}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Policy Note (Shown to Members)
              </label>
              <textarea
                rows={3}
                name="loyaltyPolicyNote"
                value={formData.loyaltyPolicyNote}
                onChange={handleChange}
                className="form-textarea"
              />
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button type="submit" className="submit-btn">
              Save All Settings
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
