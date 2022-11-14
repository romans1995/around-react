import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup =({isOpen, onClose})=>{
    return(
        <PopupWithForm
        onClose={onClose}
        isOpen={isOpen}
        title="Change Profile Picture"
        name="editAvatar "
        buttonText="Change"
        >

    <form className="popup__inputs-container popup__inputs-edit-avatar " name="popup__edit-avatar" noValidate >
        <div className="popup__inputs-div">
            <input id="placeLink-inputAvatr" name="link" className="popup__input popup__inputs-type-placeLink" type="url" placeholder="Image url" defaultValue="Image url" required/>
            <span id="placeLink-inputAvatr-error" className="popup__input-error placeLink-input-error "></span>
        </div>
    </form>

</PopupWithForm>
    )
}
export default EditAvatarPopup;
