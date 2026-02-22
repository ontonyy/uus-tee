import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactLinks } from '../components/ContactLinks';
import { usePageMeta } from '../hooks/usePageMeta';
import { useI18n } from '../i18n';

export function HomePage() {
  const { t } = useI18n();
  const [showFallback, setShowFallback] = useState(false);

  usePageMeta({
    title: t('meta.homeTitle'),
    description: t('meta.homeDescription')
  });

  return (
    <>
      <section className="hero section reveal">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>{t('home.heroTitle')}</h1>
            <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
            <Link className="btn" to="/contact">
              {t('home.heroCta')}
            </Link>
          </div>

          <div className={`hero-media ${showFallback ? 'no-image' : ''}`}>
            <img
              src="assets/img.png"
              alt={t('home.heroImageAlt')}
              onError={() => setShowFallback(true)}
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth <= 10) {
                  setShowFallback(true);
                } else {
                  setShowFallback(false);
                }
              }}
            />
            <div className="hero-fallback" aria-hidden="true">
              <div>
                <p>{t('home.heroFallbackTitle')}</p>
                <p>{t('home.heroFallbackText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft reveal reveal-delay-1">
        <div className="container">
          <div className="section-head">
            <h2>{t('home.featuresTitle')}</h2>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <h3>{t('home.features.friendlyTitle')}</h3>
              <p>{t('home.features.friendlyText')}</p>
            </article>

            <article className="feature-card">
              <h3>{t('home.features.reliableTitle')}</h3>
              <p>{t('home.features.reliableText')}</p>
            </article>

            <article className="feature-card">
              <h3>{t('home.features.quickTitle')}</h3>
              <p>{t('home.features.quickText')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section reveal reveal-delay-2">
        <div className="container about-grid">
          <article>
            <h2>{t('home.aboutTitle')}</h2>
            <p>{t('home.aboutText')}</p>
          </article>

          <aside className="quick-panel">
            <h2>{t('home.quickContactTitle')}</h2>
            <ContactLinks />
          </aside>
        </div>
      </section>
    </>
  );
}
