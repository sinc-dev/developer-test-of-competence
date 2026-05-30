import { useState } from "react";
import schoolIcon from '../../public/school.svg';
import dashboardIcon from '../../public/dashboard.svg'
import messageIcon from '../../public/message.svg'
import pipelineIcon from '../../public/Pipeline.svg'
import helpIcon from '../../public/help.svg'

type NavItem = {
  id: string;
  label: string;
  icon: string;
  href?: string;
  badge?: number;
};

type NavSection = {
  title?: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    items: [
      { id: "dashboard", label: "Dashboard", icon: dashboardIcon },
      { id: "messages", label: "Messages", icon: messageIcon , },
      { id: "pipline", label: "Pipline", icon: pipelineIcon  },  

    ],
  },
  {
    title:"Account",
    items:[
      { id:"account" , label: "Help Center" , icon: helpIcon}
    ],
  }
];

type VerticalNavbarProps = {
  defaultActive?: string;
  collapsed?: boolean;
  onNavigate?: (id: string) => void;
};

export default function VerticalNavbar({
  defaultActive = "dashboard",
  collapsed: defaultCollapsed = false,
  onNavigate,
}: VerticalNavbarProps) {
  const [active, setActive] = useState(defaultActive);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const handleClick = (id: string) => {
    setActive(id);
    onNavigate?.(id);
  };

  return (
    <nav
      className={`
        ${collapsed ? "w-16" : "w-55"}
        min-h-screen flex flex-col shrink-0 overflow-hidden
        bg-white border-r border-gray-200
        transition-[width] duration-200 ease-in-out
      `}
      aria-label="Main navigation"
    >
      {/* Logo / Brand */}
      <div
        className={`
          h-14 flex items-center shrink-0 gap-2.5
          border-b border-gray-200
          ${collapsed ? "px-4.5" : "px-4"}
        `}
      >
        <div className="w-7 h-7 rounded-md bg-blue-100 flex items-center justify-center shrink-0">
          <img src={schoolIcon} alt="logo" />
        </div>
        {!collapsed && (
          <span className="font-medium text-[15px] text-neutral whitespace-nowrap">
            EduFlow CRM
          </span>
        )}
      </div>

      {/* Nav Sections */}
      <div className="flex-1 overflow-y-auto py-2">
        {navSections.map((section, si) => (
          <div key={si} className="mb-1">
            {section.title && !collapsed && (
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.06em] px-4 pt-2 pb-1 m-0">
                {section.title}
              </p>
            )}
            {section.title && collapsed && (
              <div className="h-px bg-gray-200 mx-3 my-2" />
            )}

            {section.items.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  title={collapsed ? item.label : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    w-full flex items-center gap-2.5 relative
                    border-none rounded-none cursor-pointer text-left text-sm whitespace-nowrap
                    transition-colors duration-120
                    ${collapsed ? "px-4.5 py-2.25" : "px-3.5 py-2.25"}
                    ${isActive
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "bg-transparent text-gray-500 font-normal hover:bg-gray-100"
                    }
                  `}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-[20%] h-[60%] w-[2.5px] rounded-r-sm bg-secondary"
                      aria-hidden="true"
                    />
                  )}

                  {item.icon.startsWith("ti-") ? (
                    <i
                      className={`ti ${item.icon} text-lg shrink-0 ${isActive ? "text-gray-900" : "text-gray-500"}`}
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                  )}

                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge !== undefined && (
                        <span className="text-[11px] font-medium bg-red-100 text-red-600 rounded-full px-1.75 py-px min-w-5 text-center">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}

                  {/* Badge dot when collapsed */}
                  {collapsed && item.badge !== undefined && (
                    <span
                      className="absolute top-1.5 right-2.5 w-1.75 h-1.75 rounded-full bg-red-400"
                      aria-label={`${item.badge} notifications`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* User profile footer */}
      <div
        className={`
          border-t border-gray-200 flex items-center gap-2.5
          ${collapsed ? "px-3.5 py-2.5" : "px-3 py-2.5"}
        `}
      >
        <div
          className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-medium text-green-700 shrink-0"
          aria-hidden="true"
        >
          JD
        </div>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="m-0 text-[13px] font-medium text-gray-900 truncate">
              Jane Doe
            </p>
            <p className="m-0 text-[11px] text-gray-400 truncate">
              jane@example.com
            </p>
          </div>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={`
          border-t border-gray-200 bg-transparent border-x-0 border-b-0
          cursor-pointer p-2.5 flex items-center
          text-gray-400 hover:text-gray-900 transition-colors duration-120
          ${collapsed ? "justify-center" : "justify-end pr-3.5"}
        `}
      >
        <i
          className={`ti ${collapsed ? "ti-layout-sidebar-right" : "ti-layout-sidebar-left"} text-base`}
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}