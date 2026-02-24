import { useEffect, useRef, useState } from 'react';
import type { Post } from '../posts';
import { useI18n } from '../i18n';

type Props = {
    post: Post;
    isGloballyMuted: boolean;
    onToggleMute: () => void;
};

export function VideoCard({ post, isGloballyMuted, onToggleMute }: Props) {
    const { t } = useI18n();
    const videoRef = useRef<HTMLVideoElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Auto-play / pause based on visibility
    useEffect(() => {
        const video = videoRef.current;
        const card = cardRef.current;
        if (!video || !card) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {/* autoplay blocked */ });
                    setIsPlaying(true);
                } else {
                    video.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.6 }
        );

        observer.observe(card);
        return () => observer.disconnect();
    }, []);

    // Sync mute state
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isGloballyMuted;
        }
    }, [isGloballyMuted]);

    function handleVideoClick() {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play().catch(() => { });
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }

    const formattedDate = new Date(post.date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="feed-card" ref={cardRef}>
            {hasError ? (
                <div className="feed-card-placeholder">
                    <p className="feed-card-placeholder-icon">🎬</p>
                    <p>{t('feed.videoUnavailable')}</p>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    className="feed-card-video"
                    src={post.videoSrc}
                    loop
                    muted={isGloballyMuted}
                    playsInline
                    preload="metadata"
                    onClick={handleVideoClick}
                    onError={() => setHasError(true)}
                />
            )}

            {!isPlaying && !hasError && (
                <button
                    type="button"
                    className="feed-play-btn"
                    aria-label={t('feed.play')}
                    onClick={handleVideoClick}
                >
                    ▶
                </button>
            )}

            <button
                type="button"
                className="feed-mute-btn"
                aria-label={isGloballyMuted ? t('feed.unmute') : t('feed.mute')}
                onClick={onToggleMute}
            >
                {isGloballyMuted ? '🔇' : '🔊'}
            </button>

            <div className="feed-card-overlay">
                <h2 className="feed-card-title">{t(post.titleKey)}</h2>
                <p className="feed-card-desc">{t(post.descriptionKey)}</p>
                <time className="feed-card-date" dateTime={post.date}>{formattedDate}</time>
            </div>
        </div>
    );
}
