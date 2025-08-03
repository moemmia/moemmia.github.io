import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return (
    <div className="text-left flex flex-col gap-2 w-[284px]">
      <p>
        {`${t('contact.mailme')} `}
        <a href="mailto:moises.muniz.mangas@gmail.com">moises.muniz.mangas@gmail.com</a>
      </p>
      <p>{`${t('contact.findme')} `}</p>
      <div className="flex flex-row h-5 place-content-center gap-4 overflow-hidden">
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/moisés-muñiz-mangas-a2a8a615a/"
        >
          <img alt="linkedin" className="object-contain pixelated" src="icons/linkedin.webp" />
        </a>
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/moemmia"
        >
          <img alt="github" className="object-contain pixelated" src="icons/github.webp" />
        </a>
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://bsky.app/profile/moemmia.bsky.social"
        >
          <img alt="bluesky" className="object-contain pixelated" src="icons/bluesky.webp" />
        </a>
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/moemmia"
        >
          <img alt="twitter" className="object-contain pixelated" src="icons/twitter.webp" />
        </a>
        <a
          className="contents"
          target="_blank"
          rel="noopener noreferrer"
          href="https://moemm.itch.io"
        >
          <img alt="itchio" className="object-contain pixelated" src="icons/itchio.webp" />
        </a>
      </div>
    </div>
  );
}
