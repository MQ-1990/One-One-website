import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
// In Astro, assets are imported from src/assets
import imgLogo from "../assets/logo.png"; 

interface HeaderProps {
  isSearchOpen?: boolean;
  setIsSearchOpen?: (isOpen: boolean) => void;
}

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      if (query.trim()) {
        // Astro/Standard navigation
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
        setIsSearchOpen(false);
      }
    }
  };

  // Header Background Logic
  const headerBgClass = (isScrolled || isMenuOpen || isSearchOpen) 
    ? "bg-[#124734]/95 backdrop-blur-md shadow-lg" 
    : "bg-[#124734]/75 backdrop-blur-sm";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 h-[80px] lg:h-[120px] ${headerBgClass}`}>
        <div className="container mx-auto px-4 h-full relative">
          
          {/* Mobile Layout */}
          <div className="xl:hidden h-full flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium text-sm z-50">
                 <span className="cursor-pointer hover:text-white/80 transition-colors font-bold">VI</span>
                 <span className="h-3 w-px bg-white/50"></span>
                 <span className="cursor-pointer text-[#E5CA9F] hover:text-white transition-colors">EN</span>
              </div>

              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                 <a href="/">
                    <img src={imgLogo.src} alt="One One Logo" className="w-full h-auto object-contain" />
                 </a>
              </div>

              <div className="flex items-center gap-4 z-50">
                <button 
                    onClick={() => {
                        setIsSearchOpen(!isSearchOpen);
                        if(isMenuOpen) setIsMenuOpen(false);
                    }} 
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                   <Search size={24} className={isSearchOpen ? "text-white" : "text-[#E5CA9F]"} />
                </button>
                <button 
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        if(isSearchOpen) setIsSearchOpen(false);
                    }} 
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                   {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-[#E5CA9F]" />}
                </button>
              </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden xl:flex absolute top-4 right-8 items-center gap-6">
             <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm..." 
                    onKeyDown={handleSearchSubmit}
                    className="bg-transparent border border-[#799381] rounded-[10px] px-4 py-1.5 text-sm w-[200px] focus:w-[240px] focus:bg-[#124734]/20 focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/70"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70 group-focus-within:text-white transition-colors" />
             </div>
             
             <div className="flex items-center gap-3 font-medium text-[16px]">
                  <span className="cursor-pointer hover:text-white/80 transition-colors">VI</span>
                  <span className="h-4 w-px bg-white/50"></span>
                  <span className="cursor-pointer text-white/50 hover:text-white transition-colors">EN</span>
             </div>
          </div>

          <div className="hidden xl:flex absolute bottom-6 left-0 right-0 items-end justify-between px-8">
             <nav className="flex items-center gap-12 font-bold text-[18px] tracking-wide">
                <a href="/products" className="hover:text-[#da203a] transition-colors">SẢN PHẨM</a>
                <a href="/our-story" className="hover:text-[#da203a] transition-colors">CÂU CHUYỆN ONE ONE</a>
             </nav>

             <nav className="flex items-center gap-12 font-bold text-[18px] tracking-wide">
                <a href="/promotion" className="hover:text-[#da203a] transition-colors">KHUYẾN MÃI</a>
                <a href="/blog" className="hover:text-[#da203a] transition-colors">TÌM HIỂU</a>
                <a href="/contact" className="hover:text-[#da203a] transition-colors">LIÊN HỆ</a>
             </nav>
          </div>

          <div className="hidden xl:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] w-[100px]">
             <a href="/" className="block hover:scale-105 transition-transform duration-300">
                <img src={imgLogo.src} alt="One One Logo" className="w-full h-auto object-contain drop-shadow-lg" />
             </a>
          </div>

        </div>
        
        {/* Mobile Search Bar Overlay */}
        {isSearchOpen && (
            <div className="xl:hidden absolute top-full left-0 right-0 bg-[#124734]/80 h-[69px] flex items-center px-4 animate-in slide-in-from-top-2 border-t border-white/10">
                <div className="relative w-full max-w-[360px] mx-auto">
                    <input 
                        type="text" 
                        placeholder="Nhập từ khóa tìm kiếm..." 
                        onKeyDown={handleSearchSubmit}
                        className="w-full bg-transparent border border-[#799381] rounded-[20px] px-4 py-2 text-white placeholder:text-[#a69f8e] text-sm focus:outline-none focus:border-white transition-colors"
                        autoFocus
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#799381]" size={18} />
                </div>
            </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
            className="fixed inset-0 z-40 bg-black/50 xl:hidden fade-in duration-200"
            onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Side Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 bottom-0 right-0 z-50 w-[80%] max-w-[320px] bg-[#124734] shadow-2xl xl:hidden animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="p-4 flex justify-end border-b border-white/10">
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white/80 hover:text-white">
                    <X size={28} />
                </button>
            </div>
            
            <nav className="flex flex-col p-6 gap-0 font-bold text-sm text-white overflow-y-auto">
                <a href="/products" className="py-4 border-b border-white/20 hover:text-[#da203a] transition-colors">SẢN PHẨM</a>
                <a href="/our-story" className="py-4 border-b border-white/20 hover:text-[#da203a] transition-colors">CÂU CHUYỆN ONE ONE</a>
                <a href="/promotion" className="py-4 border-b border-white/20 hover:text-[#da203a] transition-colors">KHUYẾN MÃI</a>
                <a href="/blog" className="py-4 border-b border-white/20 hover:text-[#da203a] transition-colors">TÌM HIỂU</a>
                <a href="/contact" className="py-4 border-b border-white/20 hover:text-[#da203a] transition-colors">LIÊN HỆ</a>
            </nav>
            
            <div className="mt-auto p-6 border-t border-white/10">
                <div className="flex items-center gap-4 text-white font-medium">
                     <span className="font-bold border-b border-white">VI</span>
                     <span className="text-[#E5CA9F]">EN</span>
                </div>
            </div>
        </div>
      )}
    </>
  );
}
