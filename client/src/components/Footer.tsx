export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4" data-testid="text-footer-brand">
              PTB Manufacturing
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Bringing fashion ideas to life with precision and care
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-pattern">
                  Pattern Making
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-sampling">
                  Sampling
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-grading">
                  Grading
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-manufacturing">
                  Manufacturing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">Materials</h4>
            <ul className="space-y-2">
              <li>
                <a href="#materials" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-linen">
                  Linen
                </a>
              </li>
              <li>
                <a href="#materials" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-cotton">
                  Cotton
                </a>
              </li>
              <li>
                <a href="#materials" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-bamboo">
                  Bamboo
                </a>
              </li>
              <li>
                <a href="#materials" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-printing">
                  Digital Printing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-process">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
            © {new Date().getFullYear()} PTB Manufacturing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
