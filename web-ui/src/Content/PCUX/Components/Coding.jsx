import React, { useState, useMemo, Fragment } from 'react';
import {
  Tree,
  Frame,
  Fieldset,
  TitleBar,
  Button,
} from '@react95/core';
import {
  Explorer100,
  Mshtml32536,
  Fte128,
  Gcdef100,
  User as UserIcon,
  WebLink,
} from '@react95/icons';


const PROJECTS = {
  portfolio: {
    id: 'portfolio',
    label: 'portfolio.html',
    name: '3D Portfolio',
    tech: ['React', 'Three.js', 'Tailwind'],
    year: '2025',
    link: 'https://github.com/moemmia/moemmia.github.io',
    description: 'Personal website showcasing my projects and skills in a 3D environment.',
    icon: <Mshtml32536 variant="16x16_4" />,
    category: 'Web',
  },
  'us-ar': {
    id: 'us-ar',
    label: 'us-ar.apk',
    name: 'US-AR Mobile App',
    tech: ['Ionic', 'Firebase', 'Android'],
    year: '2022',
    link: 'https://github.com/moemmia/TFG_AR',
    description: 'Application aimed at evaluating the usability of augmented reality systems. Built as my final degree project, focusing on user interaction and real-world usability testing.',
    icon: <Fte128 variant="16x16_4" />,
    category: 'Mobile',
  },
  reactive: {
    id: 'reactive',
    label: 'reactive.exe',
    name: 'Reactive',
    tech: ['Unity', 'OpenXR'],
    year: '2021',
    link: '',
    description: 'Virtual reality application integrated with a remote control system via WebRTC, specifically designed to support pediatric patients with delirium.',
    icon: <UserIcon variant="16x16_4" />,
    category: 'VirtualReality',
  },
  'balaçera': {
    id: 'balaçera',
    label: 'balaçera.exe',
    name: 'Balaçera: Bullet Purgatory',
    tech: ['Unity', 'WebGL', 'Firebase'],
    year: '2023',
    link: 'https://outsidederoutine.itch.io/balacera',
    description: 'Arcade 2D bullet hell videogame.',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'Games',
  },
  pogo: {
    id: 'pogo',
    label: 'pogo.exe',
    name: 'Pogo For Workgroups',
    tech: ['Unity', 'Windows'],
    year: '2020',
    link: 'https://moemm.itch.io/pogoforworkgroups',
    description: 'Playful physics-based videogame created for a work-themed game jam.',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'Games',
  },
  drac: {
    id: 'drac',
    label: 'drac.exe',
    name: 'Al rescate del dragón',
    tech: ['Unity', 'Windows'],
    year: '2020',
    link: 'https://moemm.itch.io/al-rescate-del-dragon',
    description: 'Narrative videogame created for the Sant Jordi’s game jam.',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'Games',
  },
  museum: {
    id: 'museum',
    label: 'museum.exe',
    name: 'Hundrum days at the routine museum',
    tech: ['Unity', 'WebGL', 'Multiplayer'],
    year: '2022',
    link: 'https://outsidederoutine.itch.io/humdrum-days-at-the-routine-museum',
    description: 'Explorable digital art gallery.',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'Games',
  },
  elections: {
    id: 'elections',
    label: 'elections.exe',
    name: 'Election Day',
    tech: ['Unity', 'Windows'],
    year: '2018',
    link: 'https://outsidederoutine.itch.io/election-day',
    description: 'Narrative decision-making experience',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'Games',
  },
  hand: {
    id: 'hand',
    label: 'hand.exe',
    name: 'Hand Wall',
    tech: ['Unity', 'WebGL'],
    year: '2017',
    link: 'https://moemm.itch.io/hand-wall',
    description: 'Skill-based videogame where you control individual fingers with separate keys.',
    icon: <Gcdef100 variant="16x16_8" />,
    category: 'Games',
  },
};

/* Categories define the folder structure shown in the Tree */
const CATEGORIES = [
  { label: 'Web', icon: null },
  { label: 'Mobile', icon: null },
  { label: 'VirtualReality', icon: null },
  { label: 'Games', icon: null },
];

function useTreeData(onSelect) {
  return useMemo(() => {
    const byCat = CATEGORIES.map((cat) => {
      const children = Object.values(PROJECTS)
        .filter((p) => p.category === cat.label)
        .map((p) => ({
          label: p.label,
          icon: p.icon,
          onClick: () => onSelect(p.id),
        }));
      return { label: cat.label, children };
    });
    return { data: byCat };
  }, [onSelect]);
}

function TechList({ tech }) {
  if (!tech?.length) return null;
  return (
    <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.75rem', lineHeight: 1.2 }}>
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function ProjectPanel({ project }) {
  if (!project) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TitleBar title="_" />
        <p style={{ margin: '16px', fontSize: '0.8rem' }}>Pick an item from the list on the left.</p>
      </div>
    );
  }
  const { name, tech, year, link, description, icon } = project;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TitleBar icon={icon || <Explorer100 variant="16x16_4" />} title={name}>
        <TitleBar.OptionsBox>
          {link ? (
            <TitleBar.Option as="a" href={link} target="_blank" rel="noopener noreferrer" title="Open link">
              <WebLink variant="16x16_4" />
            </TitleBar.Option>
          ) : null}
        </TitleBar.OptionsBox>
      </TitleBar>
      <div style={{ padding: 12, overflowY: 'auto', flex: 1 }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '0.8rem' }}><b>Tech:</b> {tech.join(', ')}</p>
        <Fieldset legend="About">
          <Frame padding="$10">
            <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.2 }}>{description}</p>
          </Frame>
        </Fieldset>
      </div>
    </div>
  );
}

export function Coding() {
  const [selectedId, setSelectedId] = useState(null);

  const treeData = useTreeData((id) => setSelectedId(id));
  const root = {
    label: 'My Computer',
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

      <Frame w="280px" h="260px" bgColor="$material" boxShadow="$in">
        <ProjectPanel project={selectedProject} />
      </Frame>
    </div>
  );
}

