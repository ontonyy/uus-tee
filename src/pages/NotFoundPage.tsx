import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useI18n } from '../i18n';

export function NotFoundPage() {
    const { t } = useI18n();

    usePageMeta({
        title: t('meta.notFoundTitle'),
        description: t('meta.notFoundDescription')
    });

    return (
        <section className="section reveal">
            <div className="container not-found">
                <h1>{t('notFound.title')}</h1>
                <p>{t('notFound.text')}</p>
                <Link className="btn" to="/">
                    {t('notFound.cta')}
                </Link>
            </div>
        </section>
    );
}
