import { useEffect, useRef, useState } from 'react';
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LanguageProvider, useI18n } from './i18n';

const MOBILE_BREAKPOINT = 760;

function AppContent() {
  const { language, setLanguage, languages, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      const clickedToggle = toggleRef.current?.contains(target);
      const clickedNav = navRef.current?.contains(target);

      if (!clickedToggle && !clickedNav) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t('a11y.skip')}
      </a>

      <header className="site-header">
        <div className="container header-shell">
          <NavLink className="logo" to="/" aria-label={t('a11y.logo')}>
            Uustee
          </NavLink>

          <div className="header-controls">
            <div className="lang-switcher" role="group" aria-label={t('a11y.languageSwitcher')}>
              {languages.map((lang) => {
                const isActive = lang === language;
                return (
                  <button
                    key={lang}
                    type="button"
                    className={`lang-btn ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => setLanguage(lang)}
                  >
                    {lang.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="site-nav"
              aria-label={t('a11y.toggleMenu')}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
            </button>
          </div>

          <nav
            id="site-nav"
            ref={navRef}
            className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
            aria-label={t('a11y.mainNav')}
          >
            <NavLink to="/" end>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            &copy; {new Date().getFullYear()} Uustee. {t('footer.rights')}
          </p>
          <div className="footer-links">
            <NavLink to="/" end>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </HashRouter>
  );
}
