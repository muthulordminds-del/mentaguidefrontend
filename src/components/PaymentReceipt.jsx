import React, { useState } from 'react';

const loadJsPDF = () => {
  return new Promise((resolve, reject) => {
    if (window.jspdf?.jsPDF) {
      resolve(window.jspdf.jsPDF);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = () => {
      if (window.jspdf?.jsPDF) resolve(window.jspdf.jsPDF);
      else reject(new Error('jsPDF failed to load'));
    };
    script.onerror = () => reject(new Error('jsPDF failed to load'));
    document.body.appendChild(script);
  });
};

const EVENT_PAGE_URL = 'https://mentaguide.com/event';

// receipt: { fullName, email, paymentType, amountPaid, balanceAmount, paymentStatus, razorpayPaymentId, date }
const PaymentReceipt = ({ receipt }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const goToEventPage = () => {
    window.location.href = EVENT_PAGE_URL;
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const jsPDF = await loadJsPDF();
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });

      const green = [164, 214, 79];
      const dark = [32, 37, 35];
      const gray = [90, 90, 90];

      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, 595, 90, 'F');
      doc.setTextColor(...green);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('Payment Receipt', 40, 50);
      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text('Mentaguide - Expand 360\u00b2', 40, 72);

      let y = 130;
      doc.setTextColor(...dark);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Registration Details', 40, y);
      y += 10;
      doc.setDrawColor(...green);
      doc.line(40, y, 555, y);
      y += 25;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(...gray);

      const rows = [
        ['Name', receipt.fullName || '-'],
        ['Email', receipt.email || '-'],
        ['Payment Type', receipt.paymentType === 'full' ? 'Full Payment' : 'Partial Payment'],
        ['Amount Paid', `Rs. ${receipt.amountPaid}`],
        ['Balance Due', receipt.balanceAmount ? `Rs. ${receipt.balanceAmount} (payable at venue)` : 'Rs. 0'],
        ['Payment Status', (receipt.paymentStatus || '').replace('_', ' ').toUpperCase()],
        ['Payment ID', receipt.razorpayPaymentId || '-'],
        ['Date', receipt.date || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })],
      ];

      rows.forEach(([label, value]) => {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...dark);
        doc.text(`${label}:`, 40, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...gray);
        doc.text(String(value), 200, y);
        y += 22;
      });

      y += 15;
      doc.setFillColor(244, 249, 236);
      doc.roundedRect(40, y, 515, 60, 6, 6, 'F');
      doc.setTextColor(...dark);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('Event Details', 55, y + 22);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text('11th August 2026  |  11:11 AM  |  Merlis Hotel, Coimbatore', 55, y + 42);

      y += 90;
      doc.setFontSize(9);
      doc.setTextColor(...gray);
      doc.text('This is a system-generated receipt from Mentaguide.', 40, y);

      doc.save(`Mentaguide_Receipt_${receipt.razorpayPaymentId || 'payment'}.pdf`);
    } catch (err) {
      console.error('Error generating receipt PDF:', err);
    } finally {
      setIsGenerating(false);
      goToEventPage();
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 font-inter text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-[#f4f9ec] border-2 border-[#a4d64f] flex items-center justify-center">
        <svg className="w-8 h-8 text-[#a4d64f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-gilroy font-black text-[#2d2f31]">Payment Successful!</h3>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Thank you {receipt.fullName}, your registration is confirmed.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left flex flex-col gap-2">
        <div className="flex justify-between text-sm"><span className="text-gray-500">Payment Type</span><span className="font-semibold text-[#2d2f31]">{receipt.paymentType === 'full' ? 'Full Payment' : 'Partial Payment'}</span></div>
        <div className="flex justify-between text-sm"><span className="text-gray-500">Amount Paid</span><span className="font-semibold text-[#2d2f31]">₹{receipt.amountPaid}</span></div>
        {!!receipt.balanceAmount && (
          <div className="flex justify-between text-sm"><span className="text-gray-500">Balance Due (at venue)</span><span className="font-semibold text-[#b00]">₹{receipt.balanceAmount}</span></div>
        )}
        <div className="flex justify-between text-sm"><span className="text-gray-500">Payment ID</span><span className="font-semibold text-[#2d2f31] break-all">{receipt.razorpayPaymentId}</span></div>
      </div>

      <button
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
        className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-base sm:text-lg flex justify-center items-center gap-3 transition-all shadow-[0_10px_25px_rgba(164,214,79,0.3)] ${
          isGenerating ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#a4d64f] text-[#202523] hover:bg-[#b5e663] hover:-translate-y-1 cursor-pointer'
        }`}
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
            Preparing Receipt...
          </>
        ) : (
          'Download Receipt & Continue'
        )}
      </button>

      <button
        type="button"
        onClick={goToEventPage}
        className="text-sm text-gray-500 underline hover:text-gray-700 cursor-pointer"
      >
        Skip and go to Event Page
      </button>
    </div>
  );
};

export default PaymentReceipt;
