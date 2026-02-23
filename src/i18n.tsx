/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export type Language = 'en' | 'ru' | 'et';

type Dictionary = {
  [key: string]: string | Dictionary;
};

const STORAGE_KEY = 'uustee-language';
const DEFAULT_LANGUAGE: Language = 'en';
const SUPPORTED_LANGUAGES: Language[] = ['en', 'ru', 'et'];

const translations: Record<Language, Dictionary> = {
  en: {
    meta: {
      homeTitle: 'Uustee | Home',
      homeDescription:
        'Uustee is a welcoming community-focused space with a friendly approach and reliable contact.',
      contactTitle: 'Uustee | Contact',
      contactDescription: 'Contact Uustee by email, phone, or Facebook. Find us in Loksa, Estonia.',
      notFoundTitle: 'Uustee | Page not found',
      notFoundDescription: 'The page you are looking for does not exist.'
    },
    a11y: {
      skip: 'Skip to main content',
      logo: 'Uustee home page',
      languageSwitcher: 'Language switcher',
      mainNav: 'Main navigation',
      toggleMenu: 'Toggle navigation menu'
    },
    nav: {
      home: 'Home',
      contact: 'Contact'
    },
    home: {
      heroTitle: 'Welcome to Uustee',
      heroSubtitle:
        'A warm and modern space for connection, support, and meaningful conversations.',
      heroCta: 'Contact us',
      heroImageAlt: 'People connecting in a welcoming environment',
      heroFallbackTitle: 'Hero image placeholder',
      heroFallbackText: 'Replace /public/assets/img.png with your own photo.',
      featuresTitle: 'Features',
      aboutTitle: 'About',
      aboutText:
        'Uustee is a community-minded initiative designed to make communication easier and more welcoming. We value respect, clarity, and practical support.',
      quickContactTitle: 'Contact info',
      features: {
        friendlyTitle: 'Friendly approach',
        friendlyText:
          'We focus on clear communication and a positive experience for everyone.',
        reliableTitle: 'Reliable',
        reliableText:
          'You can expect consistent, thoughtful support whenever you reach out.',
        quickTitle: 'Quick contact',
        quickText:
          'Contact options are simple and direct so you can get help without delays.'
      }
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Pick the channel that is most convenient for you.',
      infoTitle: 'Contact info',
      formTitle: 'Send a message',
      labels: {
        email: 'Email',
        phone: 'Phone',
        facebookGroup: 'Facebook group',
        facebookProfile: 'Facebook profile',
        address: 'Address'
      },
      openLink: 'Open link',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'How can we help?',
        submit: 'Send message',
        success: "Thanks! We'll get back to you soon."
      },
      mapTitle: 'Address',
      mapIframeTitle: 'Uustee map location'
    },
    notFound: {
      title: 'Page not found',
      text: 'Sorry, the page you are looking for does not exist or has been moved.',
      cta: 'Back to home'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  ru: {
    meta: {
      homeTitle: 'Uustee | Главная',
      homeDescription:
        'Uustee — это дружелюбное сообщество с понятной коммуникацией и удобной связью.',
      contactTitle: 'Uustee | Контакты',
      contactDescription:
        'Свяжитесь с Uustee по email, телефону или через Facebook. Мы находимся в Локса, Эстония.',
      notFoundTitle: 'Uustee | Страница не найдена',
      notFoundDescription: 'Запрашиваемая страница не существует.'
    },
    a11y: {
      skip: 'Перейти к основному содержимому',
      logo: 'Главная страница Uustee',
      languageSwitcher: 'Выбор языка',
      mainNav: 'Основная навигация',
      toggleMenu: 'Открыть или закрыть меню навигации'
    },
    nav: {
      home: 'Главная',
      contact: 'Контакты'
    },
    home: {
      heroTitle: 'Добро пожаловать в Uustee',
      heroSubtitle:
        'Теплое и современное пространство для общения, поддержки и содержательных разговоров.',
      heroCta: 'Связаться с нами',
      heroImageAlt: 'Люди в дружелюбной и открытой обстановке',
      heroFallbackTitle: 'Заполнитель главного изображения',
      heroFallbackText: 'Замените файл /public/assets/img.png своей фотографией.',
      featuresTitle: 'Преимущества',
      aboutTitle: 'О нас',
      aboutText:
        'Uustee — это инициатива, ориентированная на сообщество и понятное взаимодействие. Мы ценим уважение, прозрачность, практичность и аккуратный подход к деталям.',
      quickContactTitle: 'Контактная информация',
      features: {
        friendlyTitle: 'Дружелюбный подход',
        friendlyText:
          'Мы говорим ясно и уважительно, чтобы вам было легко и спокойно в любой ситуации.',
        reliableTitle: 'Надежность',
        reliableText:
          'Вы получаете последовательную и внимательную поддержку, когда она действительно нужна.',
        quickTitle: 'Быстрая связь',
        quickText:
          'Удобные каналы связи помогают быстро получить ответ без лишних шагов и ожидания.'
      }
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Выберите наиболее удобный для вас способ связи.',
      infoTitle: 'Контактная информация',
      formTitle: 'Отправить сообщение',
      labels: {
        email: 'Эл. почта',
        phone: 'Телефон',
        facebookGroup: 'Группа Facebook',
        facebookProfile: 'Профиль Facebook',
        address: 'Адрес'
      },
      openLink: 'Открыть ссылку',
      form: {
        nameLabel: 'Имя',
        namePlaceholder: 'Ваше имя',
        emailLabel: 'Эл. почта',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'Сообщение',
        messagePlaceholder: 'Чем мы можем помочь?',
        submit: 'Отправить сообщение',
        success: 'Спасибо! Мы скоро свяжемся с вами.'
      },
      mapTitle: 'Адрес',
      mapIframeTitle: 'Карта расположения Uustee'
    },
    notFound: {
      title: 'Страница не найдена',
      text: 'Извините, запрашиваемая страница не существует или была перемещена.',
      cta: 'На главную'
    },
    footer: {
      rights: 'Все права защищены.'
    }
  },
  et: {
    meta: {
      homeTitle: 'Uustee | Avaleht',
      homeDescription:
        'Uustee on soe ja kogukonnale suunatud koht, kus suhtlus on lihtne ja usaldusväärne.',
      contactTitle: 'Uustee | Kontakt',
      contactDescription:
        'Võta Uusteega ühendust e-posti, telefoni või Facebooki kaudu. Asume Loksal, Eestis.',
      notFoundTitle: 'Uustee | Lehte ei leitud',
      notFoundDescription: 'Otsitavat lehte ei ole olemas.'
    },
    a11y: {
      skip: 'Liigu põhisisu juurde',
      logo: 'Uustee avaleht',
      languageSwitcher: 'Keelevalik',
      mainNav: 'Peamenüü',
      toggleMenu: 'Ava või sulge navigeerimismenüü'
    },
    nav: {
      home: 'Avaleht',
      contact: 'Kontakt'
    },
    home: {
      heroTitle: 'Tere tulemast Uusteesse',
      heroSubtitle: 'Soe ja kaasaegne koht suhtlemiseks, toeks ja sisukateks vestlusteks.',
      heroCta: 'Võta ühendust',
      heroImageAlt: 'Inimesed sõbralikus ja avatud keskkonnas',
      heroFallbackTitle: 'Päise pildi asendus',
      heroFallbackText: 'Asenda fail /public/assets/img.png oma fotoga.',
      featuresTitle: 'Eelised',
      aboutTitle: 'Meist',
      aboutText:
        'Uustee on kogukonnale suunatud algatus, mille eesmärk on muuta suhtlus lihtsamaks ja toetavamaks. Väärtustame austust, selgust ja praktilist abi.',
      quickContactTitle: 'Kontaktandmed',
      features: {
        friendlyTitle: 'Sõbralik lähenemine',
        friendlyText:
          'Peame oluliseks selget suhtlust ja meeldivat kogemust iga inimese jaoks.',
        reliableTitle: 'Usaldusväärne',
        reliableText:
          'Võid arvestada järjepideva ja läbimõeldud toega, kui meiega ühendust võtad.',
        quickTitle: 'Kiire kontakt',
        quickText:
          'Kontaktivõimalused on lihtsad ja otsekohesed, et vastuse saamine oleks kiire.'
      }
    },
    contact: {
      title: 'Võta ühendust',
      subtitle: 'Vali endale sobivaim suhtluskanal.',
      infoTitle: 'Kontaktandmed',
      formTitle: 'Saada sõnum',
      labels: {
        email: 'E-post',
        phone: 'Telefon',
        facebookGroup: 'Facebooki grupp',
        facebookProfile: 'Facebooki profiil',
        address: 'Aadress'
      },
      openLink: 'Ava link',
      form: {
        nameLabel: 'Nimi',
        namePlaceholder: 'Sinu nimi',
        emailLabel: 'E-post',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'Sõnum',
        messagePlaceholder: 'Kuidas saame aidata?',
        submit: 'Saada sõnum',
        success: 'Aitäh! Võtame sinuga peagi ühendust.'
      },
      mapTitle: 'Aadress',
      mapIframeTitle: 'Uustee asukoha kaart'
    },
    notFound: {
      title: 'Lehte ei leitud',
      text: 'Vabandust, otsitavat lehte ei ole olemas või see on teisaldatud.',
      cta: 'Tagasi avalehele'
    },
    footer: {
      rights: 'Kõik õigused kaitstud.'
    }
  }
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  languages: Language[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(dictionary: Dictionary, path: string): string | undefined {
  const value = path.split('.').reduce<string | Dictionary | undefined>((acc, key) => {
    if (!acc || typeof acc === 'string') {
      return undefined;
    }
    return acc[key];
  }, dictionary);

  return typeof value === 'string' ? value : undefined;
}

function loadStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
  } catch {
    // localStorage may be unavailable.
  }
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(loadStoredLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);

    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // localStorage may be unavailable.
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const current = getByPath(translations[language], key);
      if (current) {
        return current;
      }

      const fallback = getByPath(translations[DEFAULT_LANGUAGE], key);
      return fallback ?? key;
    },
    [language]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t,
      languages: SUPPORTED_LANGUAGES
    }),
    [language, setLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside LanguageProvider');
  }
  return context;
}
