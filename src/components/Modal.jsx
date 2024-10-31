import { useEffect, useRef } from "react";

function Modal({ open, onCloseRequested, children }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!dialogRef.current) return;
    if (open) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [open]);

  return (
    <dialog
      className="bg-transparent"
      onClick={(ev) => {
        if (ev.target === ev.currentTarget) {
          onCloseRequested && onCloseRequested();
        }
      }}
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}

export default Modal;
