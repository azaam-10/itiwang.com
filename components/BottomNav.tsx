import React from 'react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <div
    className={`flex flex-col items-center justify-center flex-1 h-full cursor-pointer transition-all duration-200 ${
      isActive ? 'text-[#333]' : 'text-[#a0a0a0]'
    }`}
    onClick={onClick}
  >
    <div className={`text-[21px] mb-1 ${isActive ? 'font-bold' : 'font-normal opacity-80'}`}>
      <i className={icon}></i>
    </div>
    <span className={`text-[10px] font-bold ${isActive ? '' : 'font-semibold'}`}>{label}</span>
  </div>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { label: 'Home', icon: 'fa-solid fa-house-chimney' },
    { label: 'Service', icon: 'fa-solid fa-headset' },
    { label: 'Menu', icon: 'fa-solid fa-bag-shopping' },
    { label: 'Record', icon: 'fa-solid fa-calendar-check' },
    { label: 'Mine', icon: 'fa-solid fa-user-large' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-[64px] bg-white border-t border-gray-100 flex items-center justify-around z-50 px-1 bottom-nav-shadow">
      {tabs.map((tab) => (
        <NavItem
          key={tab.label}
          icon={tab.icon}
          label={tab.label}
          isActive={activeTab === tab.label}
          onClick={() => onTabChange(tab.label)}
        />
      ))}
    </div>
  );
};

export default BottomNav;