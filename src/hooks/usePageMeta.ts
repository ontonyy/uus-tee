import { useEffect } from 'react';

type MetaOptions = {
  title: string;
  description: string;
};

function ensureMeta(selector: string, create: () => HTMLMetaElement) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  if (existing) {
    return existing;
  }

  const created = create();
  document.head.appendChild(created);
  return created;
}

export function usePageMeta({ title, description }: MetaOptions) {
  useEffect(() => {
    document.title = title;

    const descriptionMeta = ensureMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    });

    const ogTitleMeta = ensureMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    });

    const ogDescriptionMeta = ensureMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    });

    descriptionMeta.setAttribute('content', description);
    ogTitleMeta.setAttribute('content', title);
    ogDescriptionMeta.setAttribute('content', description);
  }, [title, description]);
}
