import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const elementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    if (!modalRoot || !elementRef.current) return;

    modalRoot.appendChild(elementRef.current);

    return () => {
      if (elementRef.current) {
        modalRoot.removeChild(elementRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
