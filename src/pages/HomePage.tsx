import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Code, Palette, Monitor } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'gallery' | 'about') => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const previewImages = [
    '/images/portfolio-1.jpg',
    '/images/portfolio-9.jpg',
    '/images/portfolio-10.jpg',
    '/images/portfolio-11.jpg',
    '/images/portfolio-12.jpg',
    '/images/portfolio-14.jpg',
  ];

  const skills = [
    { icon: Code, label: 'REACT', desc: 'Modern Framework' },
    { icon: Palette, label: 'TAILWIND', desc: 'Styling Mastery' },
    { icon: Monitor, label: 'UI/UX', desc: 'User Experience' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#c9a227]/10 pointer-events-none" />
        
        <div className="w-full px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="reveal opacity-0">
                <span className="bracket-label">[ CREATIVE DEVELOPER ]</span>
              </div>
              
              <h1 className="reveal opacity-0 mt-6 text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight" style={{ animationDelay: '100ms' }}>
                HI, I'M <span className="text-gradient-gold">HAN</span>
              </h1>
              
              <h2 className="reveal opacity-0 mt-4 text-xl md:text-2xl text-white/80 font-mono" style={{ animationDelay: '200ms' }}>
                Frontend Artist & Web Designer
              </h2>
              
              <p className="reveal opacity-0 mt-6 text-white/60 leading-relaxed max-w-lg" style={{ animationDelay: '300ms' }}>
                Specializing in creating stunning digital experiences with React and Tailwind CSS. 
                I transform creative visions into elegant, functional websites that captivate and inspire.
              </p>

              {/* Skills */}
              <div className="reveal opacity-0 mt-8 flex flex-wrap gap-4" style={{ animationDelay: '400ms' }}>
                {skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border border-[#c9a227]/30
                             hover:border-[#c9a227] transition-all duration-300 group"
                  >
                    <skill.icon size={18} className="text-[#8b5cf6] group-hover:text-[#c9a227] transition-colors" />
                    <div>
                      <span className="text-xs font-mono text-white">{skill.label}</span>
                      <span className="block text-[10px] text-white/50">{skill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="reveal opacity-0 mt-10 flex flex-wrap gap-4" style={{ animationDelay: '500ms' }}>
                <button 
                  onClick={() => onNavigate('gallery')}
                  className="gold-button flex items-center gap-3 group"
                >
                  VIEW WORK
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('about')}
                  className="outline-button"
                >
                  ABOUT ME
                </button>
              </div>
            </div>

            {/* Right Content - Portrait */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="reveal opacity-0 relative" style={{ animationDelay: '200ms' }}>
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border-2 border-[#c9a227]/30 pointer-events-none" />
                <div className="absolute -inset-8 border border-[#8b5cf6]/20 pointer-events-none" />
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#c9a227]" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#c9a227]" />
                
                {/* Image */}
                <div className="image-frame w-72 h-96 md:w-80 md:h-[28rem]">
                  <img 
                    src="/images/han-portrait.jpg" 
                    alt="Han - Frontend Artist"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border border-[#8b5cf6] px-4 py-2">
                  <span className="text-[#8b5cf6] text-xs font-mono tracking-wider">5+ YEARS EXP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/40 font-mono tracking-widest">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#c9a227] to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-[#c9a227]/10">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'PROJECTS' },
              { value: '30+', label: 'CLIENTS' },
              { value: '5+', label: 'YEARS' },
              { value: '∞', label: 'PASSION' },
            ].map((stat, i) => (
              <div key={i} className="reveal opacity-0 text-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-mono font-bold text-[#8b5cf6]">{stat.value}</div>
                <div className="mt-2 text-xs text-white/50 font-mono tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24">
        <div className="w-full px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="reveal opacity-0 bracket-label">[ SELECTED WORKS ]</span>
            <h2 className="reveal opacity-0 mt-4 section-title" style={{ animationDelay: '100ms' }}>
              FEATURED <span className="text-[#c9a227]">PROJECTS</span>
            </h2>
            <div className="reveal opacity-0 mt-6 flex justify-center" style={{ animationDelay: '200ms' }}>
              <div className="divider-gold" />
            </div>
          </div>

          {/* Preview Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewImages.map((img, i) => (
              <div 
                key={i}
                className="reveal opacity-0 group relative overflow-hidden border border-[#c9a227]/20
                         hover:border-[#c9a227]/60 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Project ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Number */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#8b5cf6] text-xs font-mono">
                  0{i + 1}
                </div>
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 
                              transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[#c9a227]">
                    <Sparkles size={14} />
                    <span className="text-xs font-mono">VIEW PROJECT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="reveal opacity-0 mt-12 text-center" style={{ animationDelay: '600ms' }}>
            <button 
              onClick={() => onNavigate('gallery')}
              className="gold-button inline-flex items-center gap-3 group"
            >
              VIEW ALL PROJECTS
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#c9a227]/5" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="reveal opacity-0 bracket-label">[ LET'S CONNECT ]</span>
            <h2 className="reveal opacity-0 mt-6 text-3xl md:text-4xl font-mono font-bold" style={{ animationDelay: '100ms' }}>
              READY TO CREATE SOMETHING <span className="text-[#c9a227]">AMAZING?</span>
            </h2>
            <p className="reveal opacity-0 mt-6 text-white/60" style={{ animationDelay: '200ms' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="reveal opacity-0 mt-8" style={{ animationDelay: '300ms' }}>
              <button 
                onClick={() => onNavigate('about')}
                className="gold-button"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
