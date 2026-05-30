import emailIcon from "../../public/email.svg"
import telephoneIcon from "../../public/telephone.svg"
import locationIcon from "../../public/location.svg"
import checkIcon from "../../public/check.svg"
import emailBulletkIcon from "../../public/bullet-email.svg"
 import editIcon from "../../public/applied.svg"

interface StudentInfoPanelProps {
  onClose: () => void;
}

export default function StudentInfoPanel({ onClose }: StudentInfoPanelProps) {
  return (
    <section className="w-full lg:w-72 border-l border-gray-200 bg-[#eff4ff] flex flex-col h-full overflow-hidden">
      {/* Close button on mobile */}
      <div className="lg:hidden flex justify-end p-2 border-b border-gray-200">
        <button onClick={onClose} className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Profile header */}
      <div className="p-6 border-b border-gray-200 bg-white text-center">
        <img
          className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#dce9ff]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeo7mEI0uubdPsCNBnKCvtlupZV69fjgfiEmnqd8SY5envWVWoiMfM4t7bmS_venUJWOOaMWx3d-zSyWPc7ZknlHPLjMICrZFJOV4e9j9Nx5SCUHnlTla64UpEk8h92whxdeqIOQkQveTl1iY8PNIUtyR6D1qrvT0yfVqS6M3LB7_OABry18T0VLrj_nneb3V9jPJhx65vKDdgnUh062lcNR_-IuBHJZrd9oqt3RjXeLfwy8VbZqgRUTOb8ldq32bEhN26gWLjCrKz"
          alt="Marcus Chen"
        />
        <h3 className="mt-3 text-xl font-semibold text-gray-900">Marcus Chen</h3>
        <p className="text-[13px] text-gray-400">Applied Science • Year 1</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-[#e5eeff] p-2 rounded-lg text-center">
            <p className="text-[10px] text-gray-400 uppercase font-bold">Lead Score</p>
            <p className="text-xl font-semibold text-[#006a61]">88</p>
          </div>
          <div className="bg-[#e5eeff] p-2 rounded-lg text-center">
            <p className="text-[10px] text-gray-400 uppercase font-bold">Activity</p>
            <p className="text-xl font-semibold text-gray-900">High</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        {/* Contact info */}
        <div>
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Contact Info</h4>
          <ul className="flex flex-col gap-3">
            {[
              { icon: emailIcon, text: "marcus.c@gmail.com" },
              { icon: telephoneIcon, text: "+1 (555) 234-8901" },
              { icon: locationIcon, text: "Vancouver, BC" },
            ].map((item) => (
              <li key={item.icon} className="flex items-center gap-3 text-[13px]">
                <img src={item.icon} className="material-symbols-outlined text-gray-400 text-[18px]"/>
                <span className="text-gray-700 truncate">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div>
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Timeline Activities</h4>
          <div className="relative pl-6 flex flex-col gap-5 border-l-2 border-gray-200 ml-2">
            {[
              { dot: "bg-[#006a61]", icon: checkIcon, iconColor: "text-white", label: "Portfolio Uploaded", time: "Just now" },
              { dot: "bg-gray-900", icon: emailBulletkIcon, iconColor: "text-white", label: "Email Sent", time: "2 hours ago" },
              { dot: "bg-[#191c1e]", icon: editIcon , iconColor: "text-white", label: "Applied to Science", time: "Yesterday" },
            ].map((ev) => (
              <div key={ev.label} className="relative">
                <span className={`absolute -left-8.25 top-0 w-4 h-4 ${ev.dot} rounded-full border-2 border-[#eff4ff] flex items-center justify-center`}>
                  <img src={ev.icon} className={`material-symbols-outlined text-[8px] ${ev.iconColor}`}/>
                </span>
                <p className="text-[13px] font-bold text-gray-900">{ev.label}</p>
                <p className="text-[10px] text-gray-400">{ev.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 bg-white border-t border-gray-200 flex flex-col gap-3">
        <button className="w-full bg-[#006a61] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]">
         <img className="w-7 h-7" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="add--v1"/>
          <span>Create Deal</span>
        </button>
        <button className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
          View Full Profile
        </button>
      </div>
    </section>
  );
}