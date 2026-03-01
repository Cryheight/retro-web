import { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';

type Page = 'home' | 'gallery' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; page: Page }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'GALLERY', page: 'gallery' },
    { label: 'ABOUT', page: 'about' },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white bg-grid-pattern">
      {/* Fixed Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#c9a227]/20' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigateTo('home')}
            className="font-mono text-xl font-bold text-white hover:text-[#c9a227] transition-colors"
          >
            HAN<span className="text-[#c9a227]">.</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`nav-link ${currentPage === item.page ? 'text-[#c9a227]' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 border border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227] hover:text-black transition-all duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Side Drawer */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsDrawerOpen(false)}
        />
        
        {/* Drawer Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#1a1a1a] border-l-2 border-[#c9a227]/30 
                      transform transition-transform duration-500 ease-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#c9a227]/20">
            <span className="font-mono text-lg text-[#8b5cf6] tracking-widest">[ MENU ]</span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-white/60 hover:text-[#c9a227] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`w-full text-left py-4 px-6 font-mono text-2xl tracking-wider
                           border border-transparent hover:border-[#c9a227]/50
                           transition-all duration-300 group
                           ${currentPage === item.page ? 'text-[#c9a227] border-[#c9a227]/50 bg-[#c9a227]/5' : 'text-white'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-[#8b5cf6] text-sm mr-4">0{index + 1}</span>
                <span className="group-hover:text-[#c9a227] transition-colors">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#c9a227]/20">
            <p className="text-[#8b5cf6] text-xs tracking-widest mb-4">[ CONNECT ]</p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/Cryheight' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#c9a227]/30 text-[#c9a227] 
                           hover:bg-[#c9a227] hover:text-black transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#c9a227]/20">
        <div className="w-full px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-mono text-2xl font-bold text-white mb-4">
                HAN<span className="text-[#c9a227]">.</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Frontend artist crafting digital experiences with React & Tailwind. 
                Where vision meets craft.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="bracket-label mb-4">[ CONTACT ]</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin size={16} className="text-[#c9a227]" />
                  <span>123 Creative Street, Design District, NY 10001</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Mail size={16} className="text-[#c9a227]" />
                  <span>han@portfolio.demo</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Phone size={16} className="text-[#c9a227]" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="bracket-label mb-4">[ FOLLOW ]</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/Cryheight', label: 'GitHub' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#c9a227]/30 text-[#c9a227] 
                             hover:bg-[#c9a227] hover:text-black transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs font-mono">
              © 2024 HAN. ALL RIGHTS RESERVED. CRAFTED WITH REACT & TAILWIND.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
