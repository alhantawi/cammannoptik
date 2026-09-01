"use client";

import React, { useState } from "react";
import { contactInfo } from "@/data/navigation";
import { X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Direct WhatsApp Number: +49 172 7442964
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    "Hallo Cammann Optik Team, ich interessiere mich für eine meisterliche Sehanalyse / Fassungsberatung und möchte einen Termin anfragen."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#161719] text-white text-xs py-2 px-3.5 rounded-full shadow-2xl border border-white/15 animate-in fade-in slide-in-from-right duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono">Fragen? Schreiben Sie uns auf WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-white/60 hover:text-white ml-1 p-0.5"
            aria-label="Hinweis schließen"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat mit Cammann Optik starten"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white/20"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 1.945.555 3.766 1.516 5.312L2 22l4.828-1.5c1.484.844 3.203 1.344 5.203 1.344 5.516 0 10-4.484 10-10S17.547 2 12.031 2zm0 18.281c-1.75 0-3.375-.484-4.781-1.328l-.344-.203-2.859.89.906-2.781-.219-.36c-.953-1.469-1.469-3.172-1.469-4.969 0-4.562 3.719-8.281 8.281-8.281 4.562 0 8.281 3.719 8.281 8.281 0 4.562-3.719 8.281-8.281 8.281zm4.531-6.203c-.25-.125-1.469-.719-1.703-.797-.234-.094-.406-.141-.578.125-.172.266-.672.797-.828.969-.156.172-.313.187-.563.063-.25-.125-1.047-.391-2-1.234-.734-.656-1.234-1.469-1.375-1.719-.141-.25-.016-.391.109-.516.109-.109.25-.281.375-.422.125-.141.172-.234.25-.391.078-.156.031-.313-.016-.438-.047-.125-.578-1.391-.797-1.906-.219-.516-.438-.438-.578-.438h-.5c-.172 0-.453.063-.688.313-.234.25-.906.89-.906 2.172 0 1.281.938 2.516 1.063 2.688.125.172 1.844 2.812 4.469 3.938.625.266 1.109.438 1.484.563.625.203 1.203.172 1.656.109.516-.078 1.469-.609 1.672-1.203.203-.594.203-1.094.141-1.203-.063-.109-.234-.172-.484-.297z" />
        </svg>
      </a>
    </div>
  );
};
