import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import AccountDetailsForm from "./accountDetail";
import AddressSection from "./address";

const ProfileSidebar = () => {
  const [activeTab, setActiveTab] = useState("account");

  const tabOptions = [
    { key: "account", label: "Account" },
    { key: "address", label: "Address" },
    { key: "orders", label: "Orders" },
    { key: "wishlist", label: "Wishlist" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <AccountDetailsForm />;
      case "address":
        return <AddressSection />;
      case "orders":
        return (
          <div className="text-gray-700">Your orders will appear here.</div>
        );
      case "wishlist":
        return <div className="text-gray-700">Your wishlist is empty.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full p-6">
      {/* LEFT: Profile + Nav */}
      <div className="w-full md:max-w-xs max-h-[25rem] bg-gray-100 p-6 rounded-xl text-center md:text-left">
        {/* Profile Image */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 mx-auto md:mx-0 mb-4">
            <img
              src="https://i.pravatar.cc/400"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 bg-black p-1 rounded-full border border-white">
              <FaCamera className="text-white text-sm" />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-text10 Inter mb-6">Sofia Havertz</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <h3
            className={`text-text12 Inter mb-4 border-b border-gray-300 pb-1 cursor-pointer ${
              activeTab === "account"
                ? "text-black font-bold"
                : "text-[#6C7275]"
            }`}
            onClick={() => setActiveTab("account")}
          >
            Account
          </h3>
          <ul className="space-y-4 text-[#6C7275] text-text12 Inter">
            {tabOptions.map((tab) => {
              if (tab.key === "account") return null; 

              return (
                <li
                  key={tab.key}
                  className={`cursor-pointer hover:text-black ${
                    activeTab === tab.key ? "text-black font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </li>
              );
            })}

            <li
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => alert("Log Out")}
            >
              Log Out
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-4">
          <select
            className="w-full p-2 rounded-md"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabOptions.map((tab) => (
              <option key={tab.key} value={tab.key}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default ProfileSidebar;
