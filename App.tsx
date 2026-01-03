
import React, { useState } from 'react';
import Header from './components/Header';
import AccountSection from './components/AccountSection';
import FeatureRow from './components/FeatureRow';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#f8f9fa] shadow-xl overflow-x-hidden relative">
      {/* Top Section with Gradient Background */}
      <div className="custom-gradient pb-6">
        <Header />
        <AccountSection />
      </div>

      {/* Feature Icon Row */}
      <div className="bg-white py-4 mb-3">
        <FeatureRow />
      </div>

      {/* Menu List */}
      <div className="px-3 pb-24">
        <MenuList />
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
