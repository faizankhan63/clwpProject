/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import cross from "../../assets/icons/cross.svg";
import style from "./modal.module.scss";

const Modal = ({
  open,
  children,
  className,
  modalWrapper,
  handleClose,
  showCross,
}) => {
  const handleClickWrapper = (event) => {
    event.nativeEvent.stopImmediatePropagation();
    handleClose?.();
  };

  return (
    <>
      {open && (
        <div
          className={`${style.modalWrapper} ${modalWrapper}`}
          onMouseDown={(e) => handleClickWrapper(e)}
        >
          <div
            className={`${style.modalContentWrapper} ${className}`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {showCross && (
              <div
                style={{
                  alignSelf: "flex-end",
                  marginRight: "10px",
                  marginTop: 20,
                }}
              >
                <img
                  height={20}
                  style={{ cursor: "pointer" }}
                  src={cross}
                  onClick={handleClose}
                />
              </div>
            )}
            <div className={style.body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
