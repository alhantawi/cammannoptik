"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, Eye, EyeOff, Loader2, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

export function AccessForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        // Short delay for smooth visual transition
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 500);
      } else {
        setError(data.message || "Das eingegebene Passwort ist leider nicht korrekt.");
      }
    } catch {
      setError("Verbindung zum Server fehlgeschlagen. Bitte versuchen Sie es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <div className="relative flex items-center">
          <div className="absolute left-4 pointer-events-none text-[#161719]/40 dark:text-white/40">
            <Lock size={18} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Zugangspasswort eingeben…"
            autoFocus
            disabled={loading || success}
            className="w-full pl-12 pr-12 py-3.5 bg-[#FAF8F5] dark:bg-[#161719]/70 text-[#161719] dark:text-white placeholder-[#161719]/40 dark:placeholder-white/40 rounded-2xl border border-[#161719]/15 dark:border-white/15 focus:outline-none focus:border-[#D13426] focus:ring-2 focus:ring-[#D13426]/20 transition-all text-sm sm:text-base font-medium"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading || success}
            tabIndex={-1}
            className="absolute right-4 text-[#161719]/40 dark:text-white/40 hover:text-[#161719] dark:hover:text-white transition-colors cursor-pointer"
            aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#D13426]/10 border border-[#D13426]/20 text-[#D13426] text-xs sm:text-sm animate-in fade-in slide-in-from-top-1">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm animate-in fade-in slide-in-from-top-1">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>Passwort bestätigt! Website wird geladen…</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || success || !password.trim()}
        className="w-full py-3.5 px-6 rounded-2xl bg-[#D13426] hover:bg-[#B5281B] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D13426]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Überprüfung läuft…</span>
          </>
        ) : success ? (
          <>
            <Sparkles size={18} />
            <span>Zugang freigeschaltet</span>
          </>
        ) : (
          <>
            <span>Website öffnen</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
