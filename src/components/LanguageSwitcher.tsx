import { useState, useRef, useEffect } from "react";
import { Check, Globe } from "lucide-react";
import { LANGS, LANG_META } from "@/i18n/types";
import type { Lang } from "@/i18n/types";

interface Props {
  current: Lang;
  onSelect: (lang: Lang) => void;
}

export default function LanguageSwitcher({ current, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-clay-400/50 bg-cream-50/70 px-3 py-2 text-sm font-semibold text-espresso-800 transition-all hover:border-clay-500 hover:bg-clay-400/10"
        aria-label="Language"
        aria-expanded={open}
      >
        <Globe size={15} className="text-clay-600" />
        <span>{LANG_META[current].flag}</span>
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 shadow-card transition-all duration-200 ease-soft ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="p-1.5">
          {LANGS.map((l) => (
            <li key={l}>
              <button
                onClick={() => {
                  onSelect(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                  current === l
                    ? "bg-clay-400/20 text-espresso-900"
                    : "text-espresso-800 hover:bg-cream-200"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="font-semibold">{LANG_META[l].flag}</span>
                  <span>{LANG_META[l].label}</span>
                </span>
                {current === l && <Check size={15} className="text-clay-600" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
