
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import AccountSection from './components/AccountSection.tsx';
import FeatureRow from './components/FeatureRow.tsx';
import MenuList from './components/MenuList.tsx';
import BottomNav from './components/BottomNav.tsx';
import WithdrawalModal from './components/WithdrawalModal.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [showModal, setShowModal] = useState(false);

  // Re-enable the modal to show immediately on load
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#f8f9fa] shadow-xl overflow-x-hidden relative">
      {/* Centered Withdrawal Popup Wizard */}
      {showModal && <WithdrawalModal />}

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
