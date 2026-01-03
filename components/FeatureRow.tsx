import React from 'react';

const FeatureItem: React.FC<{ icon: string; label: string; color: string }> = ({ icon, label, color }) => (
  <div className="flex flex-col items-center flex-1 active:opacity-70 transition-opacity">
    <div className={`w-11 h-11 flex items-center justify-center text-[36px] mb-2`} style={{ color }}>
      <i className={icon}></i>
    </div>
    <span className="text-[11px] text-[#555] font-bold text-center leading-tight px-1">{label}</span>
  </div>
);

const FeatureRow: React.FC = () => {
  return (
    <div className="flex justify-between items-start px-2 py-3.5">
      <FeatureItem icon="fa-solid fa-user-circle" label="Teams" color="#f59e0b" />
      <FeatureItem icon="fa-solid fa-file-lines" label="Record" color="#10b981" />
      <FeatureItem icon="fa-solid fa-chart-line" label="Wallet management" color="#ef4444" />
      <FeatureItem icon="fa-solid fa-envelope" label="Invite friends" color="#3b82f6" />
    </div>
  );
};

export default FeatureRow;