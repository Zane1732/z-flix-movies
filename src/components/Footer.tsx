
import { Link } from 'react-router-dom';
import { ExternalLink, Github,Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto bg-black/40 border-t border-white/10 pt-8 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Z-FLIX </h3>
            <p className="text-white/70 text-sm">
              Discover and enjoy the best movies and TV shows all in one place.Let's Z-flix helps you find, explore, and watch your favorite content online.
            </p>
          </div>
          
          {/* Quick Links */}  
          
          {/* Social */}
<div>
  <h3 className="text-white font-medium mb-4">Connect</h3>
  <div className="flex space-x-3">
    <a 
      href="https://zane-lol.vercel.app/" 
      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      aria-label="zane bio"
    >
      <User className="h-5 w-5 text-white" />
    </a>
    {/* Removed Twitter button */}

    <a 
      href="https://byzanebio.vercel.app/" 
      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      aria-label="intro"
    >
      <User className="h-5 w-5 text-white" />
    </a>
    <a 
      href="https://instagram.com/zane_ox0" 
      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      aria-label="Instagram"
    >
      <Instagram className="h-5 w-5 text-white" />
    </a>
    <a 
      href="mailto:kk2216157@gmail.com" 
      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
      aria-label="Email"
    >
      <Mail className="h-5 w-5 text-white" />
    </a>
  </div>
  <p className="mt-4 text-white/50 text-xs">
    Powered by ZANE
  </p>
</div>

          
          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
<Link
  to="/dmca"
  className="text-white/70 hover:text-white transition-colors"
>
  DMCA Notice
</Link>
              </li>
              <li>
<Link
  to="/content-removal"
  className="text-white/70 hover:text-white transition-colors"
>
  Content Removal
</Link>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-3">
              <a 
                href="https://zane-lol.vercel.app/" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="zane bio"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://x.com/sid992r" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://byzanebio.vercel.app/" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="intro"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/zane_ox0" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="kk2216157@gmail.com" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="mt-4 text-white/50 text-xs">
              Powered by ZANE
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-white/50 text-xs">
          <p>© {currentYear}Z-FLIX BY ZANE All rights reserved.</p>
          <p className="mt-1">
            This site does not store any files on its server. All contents are provided by non-affiliated third parties.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
