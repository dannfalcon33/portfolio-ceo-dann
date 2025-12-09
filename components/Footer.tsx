import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 snap-start flex flex-col items-center justify-center bg-luxury-black border-t border-luxury-border text-luxury-white">
        <h2 className="font-serif text-2xl mb-4">YOSHUA SOTO</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-4">
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors">GitHub</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors">Twitter</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors">YouTube</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors">TikTok</a>
            <a href="mailto:yoshuasoto54@gmail.com" className="text-[10px] uppercase tracking-widest hover:text-luxury-gray transition-colors">Email</a>
        </div>
        <p className="mt-6 text-[9px] text-luxury-gray uppercase tracking-widest">© 2024. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;