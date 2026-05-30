import React from "react";
import searchIcon from "../../public/search.svg"
import settingIcon from "../../public/setting.svg"
import notificationIcon from "../../public/notification.svg"
interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-60 h-16 bg-white border-b border-gray-200 z-40 flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        {/* Hamburger for mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-500"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="relative hidden sm:block">
          <input
            className="bg-[#eff4ff] border-none rounded-full px-5 py-2 w-64 lg:w-80 text-sm focus:ring-2 focus:ring-[#006a61] outline-none"
            placeholder="Search students..."
            type="text"
          />
          <button type="submit" className="cursor-pointer material-symbols-outlined absolute right-3 top-2 text-gray-400 text-[18px]">
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined text-gray-600">
            <img src={notificationIcon} alt="" />
          </span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        <button className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined text-gray-600">
            <img src={settingIcon} alt="" />
          </span>
        </button>
        <img
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border border-gray-200"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSsKhYCf8CcCrZraMgVmFtvjqk2afTkDqb2K9f6UjOQ-6QC7pbxYe9s81xJBcIAE38AznoykniDH-pAaYjUVH9IF_z7RuYfgGRWs_ah6Icv5rrZ5sbQGLhjjeZpdpbN9kKioeuht9IdLUW8rJUuVbZPOH6G775oU_7JUOOmy4ypF9gsauVYE1UYfwsbQxnL1ssIn5EiUfjnN58BvVbYNsaP4ldDGJaqYhv2cOtygoi3GGqKRoXfEHf3hVq-XBzo9s_MiJ6BuhI3tkz"
        />
      </div>
    </header>
  );
}