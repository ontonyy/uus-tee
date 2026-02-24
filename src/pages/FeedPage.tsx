import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { useI18n } from '../i18n';
import { posts } from '../posts';
import { VideoCard } from '../components/VideoCard';

export function FeedPage() {
    const { t } = useI18n();
    const [isMuted, setIsMuted] = useState(true);

    usePageMeta({
        title: t('meta.feedTitle'),
        description: t('meta.feedDescription')
    });

    return (
        <>
            <section className="feed-header reveal">
                <div className="container">
                    <h1>{t('feed.title')}</h1>
                    <p>{t('feed.subtitle')}</p>
                </div>
            </section>

            {posts.length === 0 ? (
                <section className="section">
                    <div className="container feed-empty">
                        <p>{t('feed.empty')}</p>
                    </div>
                </section>
            ) : (
                <div className="feed-scroll-container">
                    {posts.map((post) => (
                        <VideoCard
                            key={post.id}
                            post={post}
                            isGloballyMuted={isMuted}
                            onToggleMute={() => setIsMuted((m) => !m)}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
