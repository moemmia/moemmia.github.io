import { useState, useMemo } from 'react';
import { Tree, Frame, Fieldset, TitleBar } from '@react95/core';
import {
  Explorer100,
  Mshtml32536,
  Fte128,
  Gcdef100,
  User as UserIcon,
  WebLink,
} from '@react95/icons';

import { useTranslation, Trans } from 'react-i18next';

const PROJECTS = {
  portfolio: {
    id: 'portfolio',
    label: 'portfolio.html',
    tech: ['React', 'Three.js', 'Tailwind', 'Blender'],
    year: '2025',
    link: 'https://github.com/moemmia/moemmia.github.io',
    icon: <Mshtml32536 variant="16x16_4" />,
    category: 'web',
  },
  'us-ar': {
    id: 'us-ar',
    label: 'us-ar.apk',
    tech: ['Ionic', 'Firebase', 'Android'],
    year: '2022',
    link: 'https://github.com/moemmia/TFG_AR',
    icon: <Fte128 variant="16x16_4" />,
    category: 'mobile',
  },
  reactive: {
    id: 'reactive',
    label: 'reactive.exe',
    tech: ['Unity', 'OpenXR', 'WebRTC'],
    year: '2021',
    link: 'https://www.youtube.com/watch?v=DNuNgw26g5Q',
    icon: <UserIcon variant="16x16_4" />,
    category: 'vr',
  },
  balaçera: {
    id: 'balaçera',
    label: 'balaçera.exe',
    tech: ['Unity', 'WebGL', 'Firebase', 'Aseprite'],
    year: '2023',
    link: 'https://outsidederoutine.itch.io/balacera',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'games',
  },
  pogo: {
    id: 'pogo',
    label: 'pogo.exe',
    tech: ['Unity', 'Windows', 'Blender'],
    year: '2020',
    link: 'https://moemm.itch.io/pogoforworkgroups',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'games',
  },
  drac: {
    id: 'drac',
    label: 'drac.exe',
    tech: ['Unity', 'Windows', 'Blender'],
    year: '2020',
    link: 'https://moemm.itch.io/al-rescate-del-dragon',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'games',
  },
  museum: {
    id: 'museum',
    label: 'museum.exe',
    tech: ['Unity', 'WebGL', 'Photon', 'Blender'],
    year: '2022',
    link: 'https://outsidederoutine.itch.io/humdrum-days-at-the-routine-museum',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'games',
  },
  elections: {
    id: 'elections',
    label: 'elections.exe',
    tech: ['Unity', 'Windows', 'Blender'],
    year: '2018',
    link: 'https://outsidederoutine.itch.io/election-day',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'games',
  },
  hand: {
    id: 'hand',
    label: 'hand.exe',
    tech: ['Unity', 'WebGL', 'Blender'],
    year: '2017',
    link: 'https://moemm.itch.io/hand-wall',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'games',
  },
};

const CATEGORIES = [{ label: 'web' }, { label: 'mobile' }, { label: 'vr' }, { label: 'games' }];

function useTreeData(onSelect) {
  const { t } = useTranslation();

  return useMemo(() => {
    const byCat = CATEGORIES.map(cat => {
      const children = Object.values(PROJECTS)
        .filter(p => p.category === cat.label)
        .map(p => ({
          label: p.label,
          icon: p.icon,
          onClick: () => onSelect(p.id),
        }));
      return { label: t(`coding.categories.${cat.label}`), children };
    });
    return { data: byCat };
  }, [onSelect, t]);
}

function ProjectPanel({ project }) {
  const { t } = useTranslation();

  if (!project) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TitleBar title="_" />
        <p style={{ margin: '16px', fontSize: '0.8rem' }}>{t('coding.fallback')}</p>
      </div>
    );
  }
  const { id, tech, link, icon } = project;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TitleBar
        icon={icon || <Explorer100 variant="16x16_4" />}
        title={t(`coding.projects.${id}.name`)}
      >
        <TitleBar.OptionsBox>
          {link && (
            <TitleBar.Option
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="Open link"
            >
              <WebLink variant="16x16_4" />
            </TitleBar.Option>
          )}
        </TitleBar.OptionsBox>
      </TitleBar>

      <div style={{ padding: 12, overflowY: 'auto', flex: 1 }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '0.8rem' }}>
          <b>{t('coding.techLabel')}</b> {tech.join(', ')}
        </p>
        <Fieldset legend={t('coding.aboutLabel')}>
          <Frame padding="$10">
            <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.2 }}>
              {t(`coding.projects.${id}.description`)}
            </p>
          </Frame>
        </Fieldset>
      </div>
    </div>
  );
}

export function Coding() {
  const { t } = useTranslation();

  const [selectedId, setSelectedId] = useState(null);

  const treeData = useTreeData(id => setSelectedId(id));
  const root = {
    label: t('coding.treeRoot'),
    icon: <Explorer100 variant="16x16_4" />,
  };

  const selectedProject = selectedId ? PROJECTS[selectedId] : null;

  return (
    <div className="text-left flex flex-row gap-2" style={{ width: '100%', maxWidth: 480 }}>
      <Frame w="160px" h="260px" bgColor="$material" padding="$0">
        <Frame className="overflow-auto" h="100%" bgColor="white" boxShadow="$in" padding="$4">
          <Tree {...treeData} root={root} />
        </Frame>
      </Frame>

      <Frame w="255px" h="260px" bgColor="$material" boxShadow="$in">
        <ProjectPanel project={selectedProject} />
      </Frame>
    </div>
  );
}
