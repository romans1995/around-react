import PopupWithForm from "./PopupWithForm";
const EditProfilePopup = ({ isOpen, onClose}) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Edit profile"
      name="profile-popup"
      buttonText="Save"
    >
      <div className="popup__inputs-div">
        <input
          id="name-input"
          name="name"
          className="popup__input popup__inputs-type-name"
          type="text"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          id="name-input-error"
          className="popup__input-error name-input-error"
        ></span>
      </div>
      <div className="popup__inputs-div">
        <input
          id="description-input"
          name="job"
          className=" popup__input popup__inputs-type-description "
          type="text"
          placeholder="Description"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          id="description-input-error"
          className="popup__input-error description-input-error"
        ></span>
      </div>
    </PopupWithForm>
  );
};
export default EditProfilePopup;
