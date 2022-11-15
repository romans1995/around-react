import PopupWithForm from "./PopupWithForm";
const EditAddPlace =({isOpen,onClose})=>{
    return(
        <PopupWithForm
        onClose={onClose}
        isOpen={isOpen}
        title="New place"
        name="addPlace"
        buttonText="Create"
        >

                <div className="popup__inputs-div">
                    <input id="placeName-input" name="name" className="popup__input popup__inputs-type-placeName " defaultValue="" type="text" placeholder="Title " minLength="1" maxLength="30"  required/>
                    <span id="placeName-input-error" className="popup__input-error name-input-error"></span>
                </div>
                <div className="popup__inputs-div">
                    <input id="placeLink-input" name="link" className="popup__input popup__inputs-type-placeLink" defaultValue="" type="url"  placeholder="Image url" required/>
                    <span id="placeLink-input-error" className="popup__input-error placeLink-input-error "></span>
                </div>
</PopupWithForm>
    )
}
export default EditAddPlace;