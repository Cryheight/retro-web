import { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioImages = [
    { src: '/images/portfolio-1.jpg', title: 'Abstract Flow', category: 'Digital Art' },
    { src: '/images/portfolio-2.jpg', title: 'Modern Dashboard', category: 'UI Design' },
    { src: '/images/portfolio-3.jpg', title: 'Brand Identity', category: 'Branding' },
    { src: '/images/portfolio-4.jpg', title: 'Creative Space', category: 'Photography' },
    { src: '/images/portfolio-5.jpg', title: 'Typography Art', category: 'Graphic Design' },
    { src: '/images/portfolio-6.jpg', title: 'Web Interface', category: 'Web Design' },
    { src: '/images/portfolio-7.jpg', title: 'Minimal Poster', category: 'Print Design' },
    { src: '/images/portfolio-8.jpg', title: 'App Mockup', category: 'UI/UX' },
    { src: '/images/portfolio-9.jpg', title: 'Purple Waves', category: 'Digital Art' },
    { src: '/images/portfolio-10.jpg', title: 'Portfolio Site', category: 'Web Design' },
    { src: '/images/portfolio-11.jpg', title: 'Crystal Form', category: '3D Render' },
    { src: '/images/portfolio-12.jpg', title: 'Luxury Brand', category: 'Branding' },
    { src: '/images/portfolio-13.jpg', title: 'Finance App', category: 'UI Design' },
    { src: '/images/portfolio-14.jpg', title: 'Geometric Art', category: 'Digital Art' },
    { src: '/images/portfolio-15.jpg', title: 'Analytics Dashboard', category: 'UI Design' },
    { src: '/images/portfolio-16.jpg', title: 'Liquid Gold', category: '3D Render' },
    { src: '/images/portfolio-17.jpg', title: 'E-commerce Site', category: 'Web Design' },
    { src: '/images/portfolio-18.jpg', title: 'Creative Type', category: 'Typography' },
    { src: '/images/portfolio-19.jpg', title: 'SaaS Landing', category: 'Web Design' },
    { src: '/images/portfolio-20.jpg', title: 'Neon Lights', category: 'Digital Art' },
  ];

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

    const elements = document.querySelectorAll('.gallery-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % portfolioImages.length
      : (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioImages[newIndex].src);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="w-full min-h-screen pb-20">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center">
            <span className="gallery-reveal opacity-0 bracket-label">[ PORTFOLIO ]</span>
            <h1 className="gallery-reveal opacity-0 mt-4 text-4xl md:text-5xl lg:text-6xl font-mono font-bold" style={{ animationDelay: '100ms' }}>
              MY <span className="text-[#c9a227]">WORKS</span>
            </h1>
            <div className="gallery-reveal opacity-0 mt-6 flex justify-center" style={{ animationDelay: '200ms' }}>
              <div className="divider-gold" />
            </div>
            <p className="gallery-reveal opacity-0 mt-6 text-white/60 max-w-2xl mx-auto" style={{ animationDelay: '300ms' }}>
              A curated collection of my finest projects spanning web design, UI/UX, branding, and digital art. 
              Each piece represents my passion for creating beautiful, functional experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full px-6 lg:px-12">
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((item, i) => (
            <div
              key={i}
              className="gallery-reveal opacity-0 group relative cursor-pointer"
              style={{ animationDelay: `${(i % 4) * 100}ms` }}
              onClick={() => openLightbox(item.src, i)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden border border-[#c9a227]/20 hover:border-[#c9a227]/60 
                            transition-all duration-500 aspect-[4/3]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Index Number */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-[#8b5cf6] text-[10px] font-mono">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 p-2 bg-[#141414]/80 text-[#c9a227] 
                              opacity-0 group-hover:opacity-100 transition-all duration-300
                              transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn size={16} />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 
                              transform translate-y-full group-hover:translate-y-0 
                              transition-transform duration-300">
                  <span className="text-[10px] text-[#8b5cf6] font-mono tracking-wider">{item.category}</span>
                  <h3 className="text-sm font-mono text-white mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-3 text-white/60 hover:text-white 
                     border border-white/20 hover:border-[#c9a227] transition-all duration-300"
          >
            <X size={24} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 
                     p-3 text-white/60 hover:text-[#c9a227] 
                     border border-white/20 hover:border-[#c9a227] transition-all duration-300"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 
                     p-3 text-white/60 hover:text-[#c9a227] 
                     border border-white/20 hover:border-[#c9a227] transition-all duration-300"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div 
            className="h-full flex items-center justify-center p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-5xl max-h-[80vh]">
              <img
                src={selectedImage}
                alt="Portfolio item"
                className="max-w-full max-h-[80vh] object-contain border-2 border-[#c9a227]/30"
              />
              
              {/* Image Info */}
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <span className="text-[#8b5cf6] text-xs font-mono">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(portfolioImages.length).padStart(2, '0')}
                </span>
                <h3 className="text-white font-mono mt-1">{portfolioImages[currentIndex].title}</h3>
                <span className="text-white/50 text-xs">{portfolioImages[currentIndex].category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
