import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

import { TaskBar, List } from '@react95/core';
import { Phone2, Grpconv100, Progman34, Awfxcg321303, Progman14, Computer4 } from '@react95/icons';
import { DosGameWindow } from './Components/DosGameWindow';
import { DesktopItem } from './Components/DesktopItem';
import { useState } from 'react';
import { Contact } from './Components/Contact';
import { Resume } from './Components/Resume';
import { Coding } from './Components/Coding';
import { Credits} from './Components/Credits'

export default function PcDisplay() {
  const [desktopItems] = useState([
    {
      id: 'karateka',
      name: 'Karateka',
      icon: <img src="icons/karateka.webp" className='w-[32px] r95_1ct83mo9 object-contain object-left'/>,
      content: () => <DosGameWindow url='/js-dos/Karateka.jsdos'/>,
      showOnDesktop: true,
      showInTaskbar: false,
    },
    {
      id: 'coding',
      name: 'Coding',
      icon: <Grpconv100 variant="32x32_4" />,
      content: () => <Coding />,
      showOnDesktop: true,
      showInTaskbar: false,
    },
    {
      id: 'resume',
      name: 'Resume',
      icon: <Progman34 variant="32x32_4" />,
      content: () => <Resume />,
      showOnDesktop: true,
      showInTaskbar: false,
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: <Phone2 variant="32x32_4" />,
      content: () => <Contact/>,
      showOnDesktop: true,
      showInTaskbar: false,
    },
    {
      id: 'source',
      name: 'Source Code',
      icon: <Progman14 variant="32x32_4" />,
      action: () => {window.open("https://github.com/moemmia/moemmia.github.io", "_blank");},
      showOnDesktop: false,
      showInTaskbar: true,
    },
    {
      id: 'credits',
      name: 'Credits',
      icon: <Awfxcg321303 variant="32x32_4" />,
      content: () => <Credits />,
      showOnDesktop: false,
      showInTaskbar: true,
    },
  ]);

  const [openItems, setOpenItems] = useState([]);
  const [zOrder, setZOrder] = useState([]);

  const handleOpen = (id) => {
    setOpenItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
    bringToFront(id);
  };

  const handleClose = (id) => {
    setOpenItems((prev) => prev.filter((item) => item !== id));
    setZOrder((prev) => prev.filter((item) => item !== id));
  };

  const bringToFront = (id) => {
    setZOrder((prev) => [...prev.filter((item) => item !== id), id]);
  };

  return (
    <div className="w-full h-full bg-[#5aa] relative overflow-hidden">

      {/* Ícons */}
      <div className="absolute inset-0 p-4 grid grid-cols-7  grid-rows-7 gap-x-8 gap-y-8 grid-flow-col">
        {desktopItems
          .filter((item) => item.showOnDesktop)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleOpen(item.id)}
            >
              <div>{item.icon}</div>
              <span className="text-xs mt-1 select-none">{item.name}</span>
            </div>
          ))}
      </div>

      {/* TaskBar */}
      <TaskBar
        list={
          <List>
            {desktopItems
              .filter((item) => item.showInTaskbar)
              .map((item) => (
                <List.Item key={item.id} icon={item.icon} onClick={() => {
                    handleOpen(item.id)
                    item.action?.()
                }}>
                  {item.name}
                </List.Item>
              ))}
              <List.Divider></List.Divider>
              <List.Item icon={<Computer4 variant="32x32_4" />} onClick={() => {}}>
                Shut Down...
              </List.Item>
          </List>
        }
      />

      {/* Windows */}
      {desktopItems.map((item) => (
        <DesktopItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onClose={() => handleClose(item.id)}
          onFocus={() => bringToFront(item.id)}
          zIndex={zOrder.indexOf(item.id) + 100}
        />
      ))}
    </div>
  );
}
