export type Post = {
    id: string;
    videoSrc: string;
    titleKey: string;
    descriptionKey: string;
    date: string;
};

/**
 * Add new posts here.
 * 1. Drop your .mp4 file into  public/videos/
 * 2. Add an entry below pointing  videoSrc  to  videos/<filename>.mp4
 * 3. Add matching translation keys in  src/i18n.tsx  under  feed.posts.<id>.*
 */
export const posts: Post[] = [
    {
        id: 'welcome',
        videoSrc: 'videos/welcome.mp4',
        titleKey: 'feed.posts.welcome.title',
        descriptionKey: 'feed.posts.welcome.description',
        date: '2026-02-20'
    },
    {
        id: 'workshop',
        videoSrc: 'videos/workshop.mp4',
        titleKey: 'feed.posts.workshop.title',
        descriptionKey: 'feed.posts.workshop.description',
        date: '2026-02-18'
    },
    {
        id: 'community',
        videoSrc: 'videos/community.mp4',
        titleKey: 'feed.posts.community.title',
        descriptionKey: 'feed.posts.community.description',
        date: '2026-02-15'
    }
];
