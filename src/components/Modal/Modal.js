import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";
import "./modal.css"

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const {setBlur}=props
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
    setBlur(false)
  };
  if (display) {
    return ReactDom.createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"} />
        <div className={"modal-box"}>{props.children}</div>
        <div onClick={close} className={"closeButton"}>
          <div  className={"close"}></div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
});

export default Modal;
