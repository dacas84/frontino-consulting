import React, { useEffect } from "react";

const BookingSuccessModal = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-background-dark border border-white/10 rounded-2xl p-8 max-w-md mx-4 glass animate-scale">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
          </div>
          <h3 className="text-2xl font-bold">Thank You!</h3>
          <p className="text-slate-400">We've received your message and will be in contact with you soon.</p>
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-8 h-12 transition-all w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessModal;
