(function () {
  var STORAGE_KEY = "uustee-language";
  var DEFAULT_LANG = "en";
  var SUPPORTED_LANGS = ["en", "ru", "et"];

  var translations = {
    en: {
      meta: {
        homeTitle: "Uustee | Home",
        homeDescription:
          "Uustee is a welcoming community-focused space with a friendly approach and reliable contact.",
        contactTitle: "Uustee | Contact",
        contactDescription:
          "Contact Uustee by email, phone, or Facebook. Find us in Tallinn, Estonia."
      },
      a11y: {
        skip: "Skip to main content",
        logoAria: "Uustee home page",
        languageSwitcher: "Language switcher",
        toggleMenu: "Toggle navigation menu",
        mainNav: "Main navigation"
      },
      nav: {
        home: "Home",
        contact: "Contact"
      },
      home: {
        heroTitle: "Welcome to Uustee",
        heroSubtitle:
          "A warm and modern space for connection, support, and meaningful conversations.",
        heroCta: "Contact us",
        heroImageAlt: "People connecting in a welcoming environment",
        heroFallbackTitle: "Hero image placeholder",
        heroFallbackText: "Replace /assets/img.png with your own photo.",
        featuresTitle: "Features",
        features: {
          friendly: {
            title: "Friendly approach",
            text: "We focus on clear communication and a positive experience for everyone."
          },
          reliable: {
            title: "Reliable",
            text: "You can expect consistent, thoughtful support whenever you reach out."
          },
          quick: {
            title: "Quick contact",
            text: "Contact options are simple and direct so you can get help without delays."
          }
        },
        aboutTitle: "About",
        aboutText:
          "Uustee is a community-minded initiative designed to make communication easier and more welcoming. We value respect, clarity, and practical support.",
        quickContactTitle: "Contact info"
      },
      contact: {
        title: "Contact us",
        subtitle: "Pick the channel that is most convenient for you.",
        infoTitle: "Contact info",
        formTitle: "Send a message",
        labels: {
          email: "Email",
          phone: "Phone",
          facebookGroup: "Facebook group",
          facebookProfile: "Facebook profile"
        },
        links: {
          openLink: "Open link"
        },
        form: {
          nameLabel: "Name",
          namePlaceholder: "Your name",
          emailLabel: "Email",
          emailPlaceholder: "you@example.com",
          messageLabel: "Message",
          messagePlaceholder: "How can we help?",
          submit: "Send message",
          success: "Thanks! We'll get back to you soon."
        },
        map: {
          title: "Address",
          addressLabel: "Address",
          iframeTitle: "Uustee map location"
        }
      },
      footer: {
        rights: "All rights reserved."
      }
    },

    ru: {
      meta: {
        homeTitle: "Uustee | Главная",
        homeDescription:
          "Uustee — это дружелюбное сообщество с понятной коммуникацией и удобной связью.",
        contactTitle: "Uustee | Контакты",
        contactDescription:
          "Свяжитесь с Uustee по email, телефону или через Facebook. Мы находимся в Таллине, Эстония."
      },
      a11y: {
        skip: "Перейти к основному содержимому",
        logoAria: "Главная страница Uustee",
        languageSwitcher: "Выбор языка",
        toggleMenu: "Открыть или закрыть меню навигации",
        mainNav: "Основная навигация"
      },
      nav: {
        home: "Главная",
        contact: "Контакты"
      },
      home: {
        heroTitle: "Добро пожаловать в Uustee",
        heroSubtitle:
          "Теплое и современное пространство для общения, поддержки и содержательных разговоров.",
        heroCta: "Связаться с нами",
        heroImageAlt: "Люди в дружелюбной и открытой обстановке",
        heroFallbackTitle: "Заполнитель главного изображения",
        heroFallbackText: "Замените файл /assets/img.png своей фотографией.",
        featuresTitle: "Преимущества",
        features: {
          friendly: {
            title: "Дружелюбный подход",
            text: "Мы говорим ясно и уважительно, чтобы вам было легко и спокойно в любой ситуации."
          },
          reliable: {
            title: "Надежность",
            text: "Вы получаете последовательную и внимательную поддержку, когда она действительно нужна."
          },
          quick: {
            title: "Быстрая связь",
            text: "Удобные каналы связи помогают быстро получить ответ без лишних шагов и ожидания."
          }
        },
        aboutTitle: "О нас",
        aboutText:
          "Uustee — это инициатива, ориентированная на сообщество и понятное взаимодействие. Мы ценим уважение, прозрачность, практичность и аккуратный подход к деталям.",
        quickContactTitle: "Контактная информация"
      },
      contact: {
        title: "Свяжитесь с нами",
        subtitle: "Выберите наиболее удобный для вас способ связи.",
        infoTitle: "Контактная информация",
        formTitle: "Отправить сообщение",
        labels: {
          email: "Эл. почта",
          phone: "Телефон",
          facebookGroup: "Группа Facebook",
          facebookProfile: "Профиль Facebook"
        },
        links: {
          openLink: "Открыть ссылку"
        },
        form: {
          nameLabel: "Имя",
          namePlaceholder: "Ваше имя",
          emailLabel: "Эл. почта",
          emailPlaceholder: "you@example.com",
          messageLabel: "Сообщение",
          messagePlaceholder: "Чем мы можем помочь?",
          submit: "Отправить сообщение",
          success: "Спасибо! Мы скоро свяжемся с вами."
        },
        map: {
          title: "Адрес",
          addressLabel: "Адрес",
          iframeTitle: "Карта расположения Uustee"
        }
      },
      footer: {
        rights: "Все права защищены."
      }
    },

    et: {
      meta: {
        homeTitle: "Uustee | Avaleht",
        homeDescription:
          "Uustee on soe ja kogukonnale suunatud koht, kus suhtlus on lihtne ja usaldusväärne.",
        contactTitle: "Uustee | Kontakt",
        contactDescription:
          "Võta Uusteega ühendust e-posti, telefoni või Facebooki kaudu. Asume Tallinnas, Eestis."
      },
      a11y: {
        skip: "Liigu põhisisu juurde",
        logoAria: "Uustee avaleht",
        languageSwitcher: "Keelevalik",
        toggleMenu: "Ava või sulge navigeerimismenüü",
        mainNav: "Peamenüü"
      },
      nav: {
        home: "Avaleht",
        contact: "Kontakt"
      },
      home: {
        heroTitle: "Tere tulemast Uusteesse",
        heroSubtitle:
          "Soe ja kaasaegne koht suhtlemiseks, toeks ja sisukateks vestlusteks.",
        heroCta: "Võta ühendust",
        heroImageAlt: "Inimesed sõbralikus ja avatud keskkonnas",
        heroFallbackTitle: "Päise pildi asendus",
        heroFallbackText: "Asenda fail /assets/img.png oma fotoga.",
        featuresTitle: "Eelised",
        features: {
          friendly: {
            title: "Sõbralik lähenemine",
            text: "Peame oluliseks selget suhtlust ja meeldivat kogemust iga inimese jaoks."
          },
          reliable: {
            title: "Usaldusväärne",
            text: "Võid arvestada järjepideva ja läbimõeldud toega, kui meiega ühendust võtad."
          },
          quick: {
            title: "Kiire kontakt",
            text: "Kontaktivõimalused on lihtsad ja otsekohesed, et vastuse saamine oleks kiire."
          }
        },
        aboutTitle: "Meist",
        aboutText:
          "Uustee on kogukonnale suunatud algatus, mille eesmärk on muuta suhtlus lihtsamaks ja toetavamaks. Väärtustame austust, selgust ja praktilist abi.",
        quickContactTitle: "Kontaktandmed"
      },
      contact: {
        title: "Võta ühendust",
        subtitle: "Vali endale sobivaim suhtluskanal.",
        infoTitle: "Kontaktandmed",
        formTitle: "Saada sõnum",
        labels: {
          email: "E-post",
          phone: "Telefon",
          facebookGroup: "Facebooki grupp",
          facebookProfile: "Facebooki profiil"
        },
        links: {
          openLink: "Ava link"
        },
        form: {
          nameLabel: "Nimi",
          namePlaceholder: "Sinu nimi",
          emailLabel: "E-post",
          emailPlaceholder: "you@example.com",
          messageLabel: "Sõnum",
          messagePlaceholder: "Kuidas saame aidata?",
          submit: "Saada sõnum",
          success: "Aitäh! Võtame sinuga peagi ühendust."
        },
        map: {
          title: "Aadress",
          addressLabel: "Aadress",
          iframeTitle: "Uustee asukoha kaart"
        }
      },
      footer: {
        rights: "Kõik õigused kaitstud."
      }
    }
  };

  function getNested(obj, path) {
    return path.split(".").reduce(function (acc, part) {
      if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
        return acc[part];
      }
      return undefined;
    }, obj);
  }

  function getText(lang, key) {
    var scoped = translations[lang] || translations[DEFAULT_LANG];
    var value = getNested(scoped, key);

    if (value === undefined) {
      value = getNested(translations[DEFAULT_LANG], key);
    }

    return value;
  }

  function applyKeyToElements(selector, attribute, lang) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (node) {
      var key = node.getAttribute(attribute);
      var value = getText(lang, key);

      if (typeof value !== "string") {
        return;
      }

      if (attribute === "data-i18n") {
        node.textContent = value;
        return;
      }

      if (attribute === "data-i18n-placeholder") {
        node.setAttribute("placeholder", value);
        return;
      }

      if (attribute === "data-i18n-aria") {
        node.setAttribute("aria-label", value);
        return;
      }

      if (attribute === "data-i18n-title") {
        node.setAttribute("title", value);
        return;
      }

      if (attribute === "data-i18n-alt") {
        node.setAttribute("alt", value);
      }
    });
  }

  function updateMeta(lang) {
    var body = document.body;
    if (!body) {
      return;
    }

    var titleKey = body.getAttribute("data-title-key");
    var descriptionKey = body.getAttribute("data-description-key");

    if (titleKey) {
      var titleText = getText(lang, titleKey);
      if (typeof titleText === "string") {
        document.title = titleText;
      }
    }

    if (descriptionKey) {
      var descriptionText = getText(lang, descriptionKey);
      if (typeof descriptionText === "string") {
        var metaDescription = document.querySelector('meta[name="description"]');
        var ogDescription = document.querySelector('meta[property="og:description"]');
        if (metaDescription) {
          metaDescription.setAttribute("content", descriptionText);
        }
        if (ogDescription) {
          ogDescription.setAttribute("content", descriptionText);
        }
      }
    }
  }

  function updateLanguageButtons(lang) {
    var buttons = document.querySelectorAll("[data-lang-btn]");
    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyLanguage(lang) {
    var activeLang = SUPPORTED_LANGS.indexOf(lang) > -1 ? lang : DEFAULT_LANG;

    applyKeyToElements("[data-i18n]", "data-i18n", activeLang);
    applyKeyToElements("[data-i18n-placeholder]", "data-i18n-placeholder", activeLang);
    applyKeyToElements("[data-i18n-aria]", "data-i18n-aria", activeLang);
    applyKeyToElements("[data-i18n-title]", "data-i18n-title", activeLang);
    applyKeyToElements("[data-i18n-alt]", "data-i18n-alt", activeLang);

    updateMeta(activeLang);
    updateLanguageButtons(activeLang);
    document.documentElement.setAttribute("lang", activeLang);

    document.dispatchEvent(
      new CustomEvent("uustee:language-changed", {
        detail: { lang: activeLang }
      })
    );

    return activeLang;
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage unavailability.
    }
  }

  function loadLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGS.indexOf(saved) > -1) {
        return saved;
      }
    } catch (error) {
      // Ignore storage unavailability.
    }

    return DEFAULT_LANG;
  }

  function setLanguage(lang) {
    var applied = applyLanguage(lang);
    saveLanguage(applied);
    return applied;
  }

  function getLanguage() {
    var htmlLang = document.documentElement.getAttribute("lang");
    if (SUPPORTED_LANGS.indexOf(htmlLang) > -1) {
      return htmlLang;
    }
    return loadLanguage();
  }

  function initLanguageButtons() {
    var buttons = document.querySelectorAll("[data-lang-btn]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var lang = button.getAttribute("data-lang");
        setLanguage(lang);
      });
    });
  }

  function init() {
    initLanguageButtons();
    applyLanguage(loadLanguage());
  }

  window.UusteeI18n = {
    init: init,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    getText: getText,
    supportedLanguages: SUPPORTED_LANGS.slice()
  };

  document.addEventListener("DOMContentLoaded", init);
})();
