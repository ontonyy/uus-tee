import { CONTACT } from '../constants';
import { useI18n } from '../i18n';

export function ContactLinks() {
  const { t } = useI18n();

  return (
    <ul className="contact-list">
      <li>
        <span>{t('contact.labels.email')}</span>: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </li>
      <li>
        <span>{t('contact.labels.phone')}</span>: <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a>
      </li>
      <li>
        <span>{t('contact.labels.facebookGroup')}</span>:{' '}
        <a href={CONTACT.facebookGroup} target="_blank" rel="noopener noreferrer">
          {t('contact.openLink')}
        </a>
      </li>
      <li>
        <span>{t('contact.labels.facebookProfile')}</span>:{' '}
        <a href={CONTACT.facebookProfile} target="_blank" rel="noopener noreferrer">
          {t('contact.openLink')}
        </a>
      </li>
    </ul>
  );
}
