import { useEffect, useRef } from "react";

function Modal({ open, onCloseRequested, children }) {
  const dialogRef = useRef(null);
  const handleClick = (ev) => {
    if (ev.target === ev.currentTarget) {
      onCloseRequested && onCloseRequested();
    }
  };

  useEffect(() => {
    if (!dialogRef.current) return;
    if (open) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [open]);

  return (
    <dialog className="bg-transparent" onClick={handleClick} ref={dialogRef}>
      {children}
    </dialog>
  );
}

export default Modal;
