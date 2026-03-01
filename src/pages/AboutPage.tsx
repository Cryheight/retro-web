import { useEffect } from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles, Heart, Eye, Coffee } from 'lucide-react';

const AboutPage = () => {
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

    const elements = document.querySelectorAll('.about-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const philosophies = [
    {
      icon: Eye,
      title: 'ATTENTION TO DETAIL',
      description: 'Every pixel matters. I believe that the smallest details create the biggest impact in design.',
    },
    {
      icon: Heart,
      title: 'PASSION DRIVEN',
      description: 'Design is not just work; it\'s a way of life. I pour my heart into every project I undertake.',
    },
    {
      icon: Sparkles,
      title: 'CREATIVE EXCELLENCE',
      description: 'Pushing boundaries and exploring new possibilities is at the core of my creative process.',
    },
  ];

  const hobbies = [
    { icon: Eye, label: 'ART APPRECIATION', desc: 'Visiting galleries & museums' },
    { icon: Coffee, label: 'COFFEE CULTURE', desc: 'Exploring local cafes' },
    { icon: Sparkles, label: 'DIGITAL ART', desc: 'Creating abstract pieces' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Cryheight', label: 'GitHub', color: '#c9a227' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#8b5cf6' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#c9a227' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#8b5cf6' },
  ];

  return (
    <div className="w-full min-h-screen pb-20">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center">
            <span className="about-reveal opacity-0 bracket-label">[ ABOUT ME ]</span>
            <h1 className="about-reveal opacity-0 mt-4 text-4xl md:text-5xl lg:text-6xl font-mono font-bold" style={{ animationDelay: '100ms' }}>
              THE <span className="text-[#c9a227]">ARTIST</span> BEHIND
            </h1>
            <div className="about-reveal opacity-0 mt-6 flex justify-center" style={{ animationDelay: '200ms' }}>
              <div className="divider-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image & Quick Info */}
          <div className="about-reveal opacity-0" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-[#c9a227]/30 pointer-events-none" />
              <div className="absolute -inset-8 border border-[#8b5cf6]/20 pointer-events-none" />
              
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#c9a227]" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#c9a227]" />
              
              {/* Image */}
              <div className="image-frame aspect-[3/4]">
                <img 
                  src="/images/han-portrait.jpg" 
                  alt="Han - Frontend Artist"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] border border-[#c9a227] p-4 max-w-[200px]">
                <p className="text-[#8b5cf6] text-xs font-mono tracking-wider">LOCATION</p>
                <p className="text-white text-sm mt-1">New York, USA</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#c9a227]/20">
                <Mail size={20} className="text-[#c9a227]" />
                <div>
                  <p className="text-[10px] text-white/50 font-mono">EMAIL</p>
                  <p className="text-sm text-white">han@portfolio.demo</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#c9a227]/20">
                <Phone size={20} className="text-[#c9a227]" />
                <div>
                  <p className="text-[10px] text-white/50 font-mono">PHONE</p>
                  <p className="text-sm text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#c9a227]/20">
                <MapPin size={20} className="text-[#c9a227]" />
                <div>
                  <p className="text-[10px] text-white/50 font-mono">ADDRESS</p>
                  <p className="text-sm text-white">123 Creative Street, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            {/* Philosophy Section */}
            <div className="about-reveal opacity-0" style={{ animationDelay: '400ms' }}>
              <span className="bracket-label">[ PHILOSOPHY ]</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-mono font-bold text-white">
                WHERE <span className="text-[#c9a227]">VISION</span> MEETS CRAFT
              </h2>
              <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
                <p>
                  I believe that great design is more than just aesthetics—it's about creating meaningful 
                  connections between people and technology. Every line of code, every pixel placed, serves 
                  a purpose in telling a story.
                </p>
                <p>
                  My approach combines technical precision with artistic sensibility. I don't just build 
                  websites; I craft digital experiences that resonate, engage, and inspire action.
                </p>
                <p>
                  In a world of templates and shortcuts, I choose the path of craftsmanship. Each project 
                  is an opportunity to push boundaries, explore new possibilities, and create something 
                  truly unique.
                </p>
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="about-reveal opacity-0 grid gap-4" style={{ animationDelay: '500ms' }}>
              {philosophies.map((item, i) => (
                <div 
                  key={i}
                  className="p-6 bg-[#1a1a1a] border border-[#c9a227]/20 hover:border-[#c9a227]/50 
                           transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#8b5cf6]/10 text-[#8b5cf6] group-hover:text-[#c9a227] 
                                  group-hover:bg-[#c9a227]/10 transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-white tracking-wider">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hobbies Section */}
            <div className="about-reveal opacity-0" style={{ animationDelay: '600ms' }}>
              <span className="bracket-label">[ BEYOND CODE ]</span>
              <h2 className="mt-4 text-2xl font-mono font-bold text-white">
                APPRECIATING <span className="text-[#c9a227]">ART</span>
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                When I'm not crafting digital experiences, you'll find me exploring the world of art. 
                From contemporary galleries to classical museums, I find inspiration in the works of 
                masters past and present. This appreciation for visual arts deeply influences my design 
                philosophy—bringing an artist's eye to every project.
              </p>

              {/* Hobby Tags */}
              <div className="mt-6 flex flex-wrap gap-3">
                {hobbies.map((hobby, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#8b5cf6]/30
                             hover:border-[#c9a227] transition-all duration-300"
                  >
                    <hobby.icon size={14} className="text-[#8b5cf6]" />
                    <span className="text-xs font-mono text-white">{hobby.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="about-reveal opacity-0" style={{ animationDelay: '700ms' }}>
              <span className="bracket-label">[ CONNECT ]</span>
              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 bg-[#1a1a1a] border border-[#c9a227]/30
                             hover:border-[#c9a227] hover:bg-[#c9a227]/5 transition-all duration-300 group"
                  >
                    <social.icon size={20} className="text-[#c9a227]" />
                    <div>
                      <span className="text-xs font-mono text-white group-hover:text-[#c9a227] transition-colors">
                        {social.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* GitHub Highlight */}
              <div className="mt-6 p-4 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30">
                <div className="flex items-center gap-3">
                  <Github size={24} className="text-[#8b5cf6]" />
                  <div>
                    <p className="text-xs text-white/50 font-mono">CHECK OUT MY CODE</p>
                    <a 
                      href="https://github.com/Cryheight" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-[#c9a227] transition-colors"
                    >
                      github.com/Cryheight
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="mt-24 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-[#c9a227]/5" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="about-reveal opacity-0">
              <span className="text-6xl text-[#c9a227] font-serif">"</span>
            </div>
            <blockquote className="about-reveal opacity-0 mt-4 text-xl md:text-2xl font-mono text-white/90 italic" style={{ animationDelay: '100ms' }}>
              Design is not just what it looks like and feels like. 
              Design is how it works.
            </blockquote>
            <div className="about-reveal opacity-0 mt-6" style={{ animationDelay: '200ms' }}>
              <div className="divider-gold mx-auto" />
            </div>
            <p className="about-reveal opacity-0 mt-6 text-sm text-white/50 font-mono" style={{ animationDelay: '300ms' }}>
              — STEVE JOBS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
