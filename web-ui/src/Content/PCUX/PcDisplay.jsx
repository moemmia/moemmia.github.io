import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

import { TaskBar, List, Modal, TitleBar } from '@react95/core';
import { ReaderClosed, WindowsExplorer } from '@react95/icons';
import { DosGameWindow } from './Components/DosGameWindow';
import { DesktopItem } from './Components/DesktopItem';
import { useState } from 'react';

export default function PcDisplay() {
  const [desktopItems] = useState([
    {
      id: 'doom',
      name: 'DOS Game',
      icon: <ReaderClosed variant="32x32_4" />,
      content: () => <DosGameWindow />,
      showOnDesktop: true,
      showInTaskbar: false,
    },
    {
      id: 'notepad',
      name: 'Notepad',
      icon: <WindowsExplorer variant="32x32_4" />,
      content: () => <div style={{ padding: 10 }}>Aquí va el Notepad</div>,
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
      <div className="absolute inset-0 p-4 grid grid-cols-7  grid-rows-7 gap-x-8 gap-y-8">
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
                <List.Item key={item.id} icon={item.icon} onClick={() => handleOpen(item.id)}>
                  {item.name}
                </List.Item>
              ))}
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
