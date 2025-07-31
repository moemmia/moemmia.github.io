import { Modal, TitleBar } from "@react95/core";

export function DesktopItem({ item, isOpen, onClose, onFocus, zIndex }) {

  if (!isOpen) return null;
  
  return (
    <div
      style={{
        position: "absolute",
        left: `${100}px`,
        zIndex,
      }}
      onMouseDown={onFocus}
    >
      {item.content &&
        <Modal
          dragOptions={{
            defaultPosition: {
              x: -20,
              y: -40
            }
          }} 
          key={item.id}
          icon={item.icon}
          title={item.name}
          titleBarOptions={[
            <TitleBar.Close key="close" onClick={onClose} />,
          ]}
        >
          <Modal.Content>{item.content()}</Modal.Content>
        </Modal>}
      </div>
  );
}
