import React from "react";
import { FOOTER_CONTENT } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 snap-start flex flex-col items-center justify-center bg-luxury-black border-t border-luxury-border text-luxury-white">
      <h2 className="font-serif text-2xl mb-4">{FOOTER_CONTENT.name}</h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
        {FOOTER_CONTENT.socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors"
          >
            {link.platform}
          </a>
        ))}
      </div>
      <p className="mt-6 text-[9px] text-luxury-gray uppercase tracking-widest">
        {FOOTER_CONTENT.copyright}
      </p>
    </footer>
  );
};

export default Footer;
