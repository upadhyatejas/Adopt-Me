import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
console.log(modalRoot);

const Modal = ({ children }) => {
  const elref = useRef(null);
  const ref1 = useRef(null);
  ref1.current = 1;
  if (!elref.current) {
    elref.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elref.current);
    ref1.current++;
    return () => modalRoot.removeChild(elref.current);
  }, []);

  return (
    <div>
      {ref1.current++}
      {createPortal(children, elref.current)}
    </div>
  );
};

export default Modal;
