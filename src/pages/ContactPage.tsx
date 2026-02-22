import { FormEvent, useMemo, useState } from 'react';
import { ADDRESS } from '../constants';
import { ContactLinks } from '../components/ContactLinks';
import { usePageMeta } from '../hooks/usePageMeta';
import { useI18n } from '../i18n';

export function ContactPage() {
  const { t } = useI18n();
  const [showSuccess, setShowSuccess] = useState(false);

  usePageMeta({
    title: t('meta.contactTitle'),
    description: t('meta.contactDescription')
  });

  const mapSrc = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`,
    []
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setShowSuccess(true);
  }

  return (
    <>
      <section className="section page-intro reveal">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="section section-soft reveal reveal-delay-1">
        <div className="container contact-layout">
          <article className="contact-card">
            <h2>{t('contact.infoTitle')}</h2>
            <ContactLinks />
          </article>

          <article className="contact-card">
            <h2>{t('contact.formTitle')}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">{t('contact.form.nameLabel')}</label>
              <input id="name" name="name" type="text" autoComplete="name" required placeholder={t('contact.form.namePlaceholder')} />

              <label htmlFor="email">{t('contact.form.emailLabel')}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder={t('contact.form.emailPlaceholder')}
              />

              <label htmlFor="message">{t('contact.form.messageLabel')}</label>
              <textarea id="message" name="message" rows={5} required placeholder={t('contact.form.messagePlaceholder')} />

              <button className="btn" type="submit">
                {t('contact.form.submit')}
              </button>
              {showSuccess ? (
                <p className="form-message" role="status" aria-live="polite">
                  {t('contact.form.success')}
                </p>
              ) : null}
            </form>
          </article>
        </div>
      </section>

      <section className="section reveal reveal-delay-2">
        <div className="container">
          <h2>{t('contact.mapTitle')}</h2>
          <p className="address-line">
            <strong>{t('contact.labels.address')}</strong>: <span>{ADDRESS}</span>
          </p>

          <div className="map-wrap">
            <iframe
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={t('contact.mapIframeTitle')}
              src={mapSrc}
            />
          </div>
        </div>
      </section>
    </>
  );
}
