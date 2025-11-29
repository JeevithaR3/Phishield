const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jeevitha R. All rights reserved.</p>
        <p>Built with passion</p>
      </div>
    </footer>
  );
};

export default Footer;
