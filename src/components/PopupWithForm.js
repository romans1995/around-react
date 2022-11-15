import React from "react";

const PopupWithForm = (props) => {
  return (
    <div
      className={`popup ${props.name} ${
        props.isOpen ? "popup_active" : ""
      }` }
    >
      <div  className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          action="submit"
          className={`popup__inputs-container popup__inputs-${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}
        
            <button className={`popup__submit-button popup__submit-button-${props.name}`} type="submit">
              {props.buttonText}
            </button>
    
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;