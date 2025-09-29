import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = code => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div ref={switcherRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-black px-3 py-2 mt-1 flex items-center gap-1 text-white text-xs  font-mono hover:bg-white hover:text-black transition"
        aria-haspopup="true"
        aria-expanded={open}
        type="button"
      >
        {currentLang.label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute w-[-webkit-fill-available] bg-black shadow-lg z-10">
          {LANGUAGES.filter(l => l.code !== currentLang.code).map(({ code, label }) => {
            return (
              <li
                key={code}
                className={`cursor-pointer px-3 py-2 text-white text-xs font-mono hover:bg-white hover:text-black`}
                onClick={() => changeLanguage(code)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
