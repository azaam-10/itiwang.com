
import React from 'react';

interface MenuItemProps {
  icon: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <div className="flex items-center justify-between py-[16px] px-4 group cursor-pointer active:bg-gray-50 border-b border-gray-50">
    <div className="flex items-center space-x-3">
      <div className="w-6 flex justify-center text-[#9ca3af] text-[20px]">
        <i className={icon}></i>
      </div>
      <span className="text-[15px] text-[#444] font-bold">{label}</span>
    </div>
    <div className="text-[#d1d5db]">
      <i className="fa-solid fa-chevron-right text-[14px]"></i>
    </div>
  </div>
);

const MenuList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 mt-2">
      <MenuItem icon="fa-solid fa-id-badge" label="Profile" />
      <MenuItem icon="fa-solid fa-clipboard-list" label="Deposit records" />
      <MenuItem icon="fa-solid fa-layer-group" label="Withdrawal records" />
      <MenuItem icon="fa-solid fa-gear" label="Setting" />
    </div>
  );
};

export default MenuList;