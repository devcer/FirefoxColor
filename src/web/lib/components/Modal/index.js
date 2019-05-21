import React from "react";
import classNames from "classnames";

import iconClose from "../../../../images/close-16.svg";
import "./index.scss";

export const Modal = ({ toggleModal, displayModal, children }) => {
  const handleToggle = e => {
    e.stopPropagation();
    toggleModal({ display: false });
  };
  return (
    <div
      role="dialog"
      className={classNames("modal", { "modal--display": displayModal })}
      onClick={handleToggle}
    >
      <div
        role="dialog"
        className="modal__content"
        onClick={event => event.stopPropagation()}
      >
        <button className="modal__toggle" title="Close" onClick={handleToggle}>
          <img src={iconClose} alt="close icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
