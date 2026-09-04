const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-electric-blue to-purple" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              © 2026{' '}
              <span className="text-white font-medium">Rontu Das</span>
            </p>
            <p className="text-xs text-text-secondary/60 mt-1">
              Computational Chemistry | Molecular Dynamics | AI for Materials
              Science
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
