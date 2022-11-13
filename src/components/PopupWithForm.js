const PopupWithForm = (props)=>{
return(
<div 
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
        <div className="popup__container">
            <button type="button" className="popup__close-btn" ></button>
            <h3 className="popup__title">{props.title}</h3>
            <form className="popup__inputs-container" name="popup__inputs" noValidate>
                <div className="popup__inputs-div">
                    <input id="name-input" name="name" className="popup__input popup__inputs-type-name" type="text" placeholder="Name" value="Jacques Cousteau" minLength="2" maxLength="40" required/>
                    <span id="name-input-error" className="popup__input-error name-input-error"></span>
                </div>
                <div className="popup__inputs-div">
                    <input id="description-input" name="job" className=" popup__input popup__inputs-type-description " type="text" value="Explorer " placeholder="About me " minLength="2" maxLength="200" required/>
                    <span id="description-input-error" className="popup__input-error description-input-error"></span>
                </div>
                <button className="popup__submit-button " type="submit">save</button>
            </form>
        </div>
    </div>
);
}
export default PopupWithForm;