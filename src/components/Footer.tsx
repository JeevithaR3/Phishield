import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              <span className="text-gradient">Jeevitha</span>
              <span className="text-foreground"> R</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Aspiring Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary mx-1 fill-primary" /> by Jeevitha R
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
