import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
   { label: "HOME", href: "#" },
   { label: "ABOUT ME", href: "#about" },
   { label: "EXPERIENCE", href: "#experience" },
   { label: "SKILLS", href: "#skills" },
   { label: "CONTACT", href: "#contact" },
  ];

  const handleDownloadResume = () => {
  window.open(
    "https://drive.google.com/drive/folders/1YenDAn266gyVjHHUIY4AhUvmv3xGFCkX?usp=sharing",
    "_blank"
  );
};

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-card/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="px-5 md:px-10 text-2xl font-bold glow-text">Tamil Anand</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={handleDownloadResume}
                className="btn-hero"
              >
                <Download className="w-4 h-4 mr-2" />
                View my Resume
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border/50">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleDownloadResume}
                  className="btn-hero w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  View my Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;