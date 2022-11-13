import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup =({isOpen})=>{
    return(
        <PopupWithForm
        isOpen={isOpen}
        >
<div className="popup__container">
    <button type="button" className="popup__close-btn popup__close-delete-card "></button>
    <form className="popup__inputs-container popup__inputs-edit-avatar " name="popup__edit-avatar" noValidate onChange>
        <h3 className="popup__title ">Change profile picture</h3>
        <div className="popup__inputs-div">
            <input id="placeLink-inputAvatr" name="link" className="popup__input popup__inputs-type-placeLink" type="url" placeholder="Image url" defaultValue="input" required/>
            <span id="placeLink-inputAvatr-error" className="popup__input-error placeLink-input-error "></span>
        </div>
        <button className="popup__submit-button popup__submit-button-changeAvatar" type="submit">Change</button>
    </form>
</div>
</PopupWithForm>
    )
}
export default EditAvatarPopup;
