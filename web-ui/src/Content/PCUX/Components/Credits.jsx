import { Fieldset, Frame } from '@react95/core';
import { useTranslation, Trans } from 'react-i18next';

export function Credits() {
  const { t } = useTranslation();
  return (
    <div className="text-left flex flex-col gap-4 p-2">
      {/* Author */}
      <Fieldset legend={t('credits.craftsman')} width="100%">
        <Frame padding="$7">
          <Trans i18nKey="credits.authorText" components={[<b key="0" />]}></Trans>
        </Frame>
      </Fieldset>

      {/* Tools */}
      <Fieldset legend={t('credits.toolsTech')} width="100%">
        <Frame padding="$7">
          <Trans i18nKey="credits.builtWith" components={[<b key="0" />]}></Trans>
        </Frame>
      </Fieldset>

      {/* Inspirations */}
      <Fieldset legend={t('credits.inspirations')} width="100%">
        <Frame padding="$7">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://henryheffernan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Henry Heffernan
              </a>
            </li>
            <li>
              <a
                href="https://hawwokitty.github.io/my-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Kitty
              </a>
            </li>
            <li>
              <a
                href="https://bruno-simon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Bruno Simon
              </a>
            </li>
          </ul>
        </Frame>
      </Fieldset>
    </div>
  );
}
