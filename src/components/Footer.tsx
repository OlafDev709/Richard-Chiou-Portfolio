const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Richard Chiou. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
