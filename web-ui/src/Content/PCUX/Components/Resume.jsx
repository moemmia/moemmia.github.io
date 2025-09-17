import { Tabs, Tab, Button, Fieldset, Frame, Avatar, Checkbox, ProgressBar } from '@react95/core';

import { useTranslation, Trans } from 'react-i18next';

export function Resume() {
  const { t } = useTranslation();

  return (
    <div className="text-left flex flex-col">
      <Tabs width="350px" defaultActiveTab={t('resume.tabs.about')}>
        <Tab title={t('resume.tabs.about')}>
          <div className="flex flex-col gap-3">
            <p>
              <Trans i18nKey="resume.greeting" components={[<b key="0" />]} />
            </p>
            <Avatar alt="Moet logo" size="115px" src="icons/moet.webp" circle />
            <Fieldset legend={t('resume.title')} width="100%">
              <Frame display="flex" flexDirection="column" padding="$10">
                {t('resume.about')}
              </Frame>
            </Fieldset>
          </div>
        </Tab>

        <Tab title={t('resume.tabs.education')}>
          <Fieldset legend="" width="100%">
            <Frame padding="$10">
              <Checkbox readOnly checked>
                <Trans i18nKey="resume.education.bachelor" components={[<b key="0" />]} />
              </Checkbox>
              <Checkbox readOnly checked>
                <Trans i18nKey="resume.education.master" components={[<b key="0" />]} />
              </Checkbox>
            </Frame>
          </Fieldset>
        </Tab>

        <Tab title={t('resume.tabs.experience')}>
          <Fieldset legend="" width="100%">
            <Frame padding="$10">
              <Checkbox readOnly checked>
                <Trans i18nKey="resume.experience.ctic" components={[<b key="0" />]} />
              </Checkbox>
              <Checkbox readOnly checked={false}>
                <Trans i18nKey="resume.experience.imascono" components={[<b key="0" />]} />
              </Checkbox>
              <Checkbox readOnly checked={false}>
                <Trans i18nKey="resume.experience.gooapps" components={[<b key="0" />]} />
              </Checkbox>
              <Checkbox readOnly checked={false}>
                <Trans i18nKey="resume.experience.adele" components={[<b key="0" />]} />
              </Checkbox>
            </Frame>
          </Fieldset>
        </Tab>

        <Tab title={t('resume.tabs.skills')}>
          <Fieldset
            legend={t('resume.skills.programming')}
            width="100%"
            height="170px"
            className="overflow-y-scroll"
          >
            <Frame padding="$10" className="flex flex-col gap-2">
              <div>
                {t('resume.tech.xr')}
                <ProgressBar percent={99} />
              </div>
              <div>
                {t('resume.tech.unity')}
                <ProgressBar percent={75} />
              </div>
              <div>
                {t('resume.tech.react')}
                <ProgressBar percent={75} />
              </div>
              <div>
                {t('resume.tech.three')}
                <ProgressBar percent={75} />
              </div>
              <div>
                {t('resume.tech.html')}
                <ProgressBar percent={65} />
              </div>
              <div>
                {t('resume.tech.git')}
                <ProgressBar percent={65} />
              </div>
              <div>
                {t('resume.tech.blender')}
                <ProgressBar percent={65} />
              </div>
              <div>
                {t('resume.tech.docker')}
                <ProgressBar percent={35} />
              </div>
            </Frame>
          </Fieldset>

          <Fieldset legend={t('resume.skills.languages')} width="100%">
            <Frame padding="$10">
              <div>
                {t('resume.tech.spanish')}
                <ProgressBar percent={100} />
              </div>
              <div>
                {t('resume.tech.english')}
                <ProgressBar percent={70} />
              </div>
            </Frame>
          </Fieldset>
        </Tab>
      </Tabs>

      {/* <Button className="mt-2 w-fit self-end">{t('resume.skills.cv')}</Button> */}
    </div>
  );
}
