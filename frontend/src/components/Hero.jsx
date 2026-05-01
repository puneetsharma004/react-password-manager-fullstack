import React, { useState } from 'react';
import AddNewPassword from './Add';

  // Sample data to map through for the list items
  const vaultItems = [
    {
      id: 1,
      name: 'Chase Banking',
      category: 'Banking',
      username: 'alex_rivers_92',
      status: 'Secure',
      statusColor: 'text-[#059669]', // standard success green
      statusBg: 'bg-[#d1fae5]',
      barColor: 'bg-[#059669]',
      barWidth: 'w-[85%]',
      date: '2 days ago',
      iconBg: 'bg-[#e0e7ff]'
    },
    {
      id: 2,
      name: 'GitHub Dev',
      category: 'Work',
      username: 'arivers-work',
      status: 'Fair',
      statusColor: 'text-[#b45309]', // standard warning text
      statusBg: 'bg-[#fef3c7]', // standard warning bg
      barColor: 'bg-[#f59e0b]', // standard warning yellow
      barWidth: 'w-[60%]',
      date: '1 week ago',
      iconBg: 'bg-[#191b23]'
    },
    {
      id: 3,
      name: 'Netflix Family',
      category: 'Social',
      username: 'arivers_home_admin',
      status: 'Weak',
      statusColor: 'text-[#ba1a1a]', // design system error text
      statusBg: 'bg-[#ffdad6]', // design system error container
      barColor: 'bg-[#ba1a1a]', // design system error
      barWidth: 'w-[20%]',
      date: 'Oct 12, 2023',
      iconBg: 'bg-[#ffdad6]'
    },
    {
      id: 4,
      name: 'Figma Team',
      category: 'Work',
      username: 'arivers@studio.com',
      status: 'Secure',
      statusColor: 'text-[#059669]',
      statusBg: 'bg-[#d1fae5]',
      barColor: 'bg-[#059669]',
      barWidth: 'w-[85%]',
      date: 'Sep 30, 2023',
      iconBg: 'bg-[#e0e7ff]'
    }
  ];

export default function Hero() {
    let [openModal, setOpenModal] = useState(false)

    let handleOpenModal = () => {
        setOpenModal(!openModal)
        console.log(openModal)
    }



  return (
    <div className="min-h-screen bg-[#f9f9ff] font-['Inter',sans-serif] text-[#191b23]">
      
      {openModal && <AddNewPassword handleOpenModal={handleOpenModal} />}

      {/* Navigation Bar */}
      <nav className="bg-[#ffffff] border-b border-[#e1e2ec] px-[200px] py-[16px] flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <h1 className="text-[20px] font-bold text-[#0058be] font-['Manrope',sans-serif] tracking-tight">
            SecureVault
          </h1>
        </div>
        <div className="flex items-center gap-[16px]">
          <button onClick={handleOpenModal} className="bg-[#0058be] hover:bg-[#004395] text-[#ffffff] cursor-pointer px-[16px] py-[10px] rounded-[8px] text-[14px] font-semibold flex items-center gap-[8px] transition-colors shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Add New
          </button>
        </div>
      </nav>

      {/* Main Content (Hero Section) */}
      <main className="max-w-[1200px] mx-auto px-[32px] pt-[48px] pb-[64px]">
        
        {/* Page Header */}
        <div className="mb-[32px]">
          <h2 className="text-[32px] font-bold font-['Manrope',sans-serif] tracking-[-0.01em] text-[#191b23] leading-[1.25]">
            Main Vault
          </h2>
          <p className="text-[16px] text-[#424754] mt-[8px]">
            Manage and secure your digital credentials.
          </p>
        </div>

        {/* List Container (Level 1 Elevation) */}
        <div className="bg-[#ffffff] rounded-[16px] border border-[#e1e2ec] shadow-[0_4px_20px_rgba(15,23,42,0.03)] overflow-hidden">
          
          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-[16px] px-[24px] py-[16px] border-b border-[#e1e2ec] bg-[#f9f9ff]/50 text-[12px] font-semibold text-[#727785] uppercase tracking-[0.02em]">
            <div className="col-span-4">Name</div>
            <div className="col-span-3">Username</div>
            <div className="col-span-3">Security</div>
            <div className="col-span-1">Last Modified</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {/* List Items */}
          <div className="flex flex-col">
            {vaultItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`grid grid-cols-12 gap-[16px] items-center px-[24px] py-[16px] transition-colors hover:bg-[#f2f3fd]/50 ${
                  index !== vaultItems.length - 1 ? 'border-b border-[#e1e2ec]' : ''
                }`}
              >
                {/* Name & Icon */}
                <div className="col-span-4 flex items-center gap-[16px]">
                  <div className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center ${item.iconBg}`}>
                    {/* Placeholder for generic logo shapes based on design */}
                    <div className="w-[18px] h-[18px] bg-white/80 rounded-[4px]"></div>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#191b23] leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-[13px] text-[#727785] mt-[2px] block">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Username */}
                <div className="col-span-3 text-[14px] text-[#424754]">
                  {item.username}
                </div>

                {/* Security Status */}
                <div className="col-span-3 flex items-center gap-[16px] pr-[24px]">
                  {/* Progress Bar */}
                  <div className="flex-1 h-[6px] bg-[#ecedf7] rounded-full overflow-hidden">
                    <div className={`h-full ${item.barColor} ${item.barWidth} rounded-full`}></div>
                  </div>
                  {/* Status Chip */}
                  <span className={`px-[10px] py-[4px] rounded-[12px] text-[11px] font-bold uppercase tracking-wider ${item.statusBg} ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                {/* Last Modified */}
                <div className="col-span-1 text-[14px] text-[#727785] whitespace-nowrap">
                  {item.date}
                </div>

                {/* Actions */}
                <div className="col-span-1 flex items-center justify-end gap-[12px]">
                  <button className="text-[#0058be] cursor-pointer hover:text-[#004395] transition-colors p-[6px] rounded-[6px] hover:bg-[#e1e2ec]/50" aria-label="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
                  </button>
                  <button className="text-[#ba1a1a] cursor-pointer hover:text-[#93000a] transition-colors p-[6px] rounded-[6px] hover:bg-[#ffdad6]/50" aria-label="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="px-[24px] py-[16px] border-t border-[#e1e2ec] flex justify-center bg-[#f9f9ff]/30">
            <button className="text-[14px] cursor-pointer font-bold text-[#0058be] hover:text-[#004395] transition-colors">
              View All 42 Items
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}