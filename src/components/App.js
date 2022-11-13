
import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import EditAvatarPopup from "./EditAvatarPopup";
// import {api}  from './Api.js';

function App() {

    // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const handleEditAvatarClick=()=>{
        setIsEditAvatarPopupOpen(true)
     }
     const handleEditProfileClick=()=>{
        document.querySelector(".profile-popup").classList.add("popup_active");
     }
     const handleAddPlaceClick=()=>{
        document.querySelector(".popup-addElement").classList.add("popup_active");
     }
    // const [cards, setCards] = useState([]);
    // useEffect(() => {
    //     api
    //       .getInitialCards()
    //       .then((res) => {
    //         setCards(res);
    //       })
    //       .catch(console.log);
    //   }, []);

  return (
    <div className="body">
    <Header/>
    <Main 
  
  onEditAvatarClick={handleEditAvatarClick}
    onEditProfileClick={handleEditProfileClick}
    onAddPlaceClick={handleAddPlaceClick}

    />
   <Footer/>
    <section className="popup profile-popup">
        <div className="popup__container">
            <button type="button" className="popup__close-btn"></button>
            <h3 className="popup__title">Edit profile</h3>
            <form className="popup__inputs-container" name="popup__inputs" noValidate onChange>
                <div className="popup__inputs-div">
                    <input id="name-input" name="name" className="popup__input popup__inputs-type-name" type="text" placeholder="Name" value="Jacques Cousteau" minLength="2" maxLength="40" defaultValue="input" required/>
                    <span id="name-input-error" className="popup__input-error name-input-error"></span>
                </div>
                <div className="popup__inputs-div">
                    <input id="description-input" name="job" className=" popup__input popup__inputs-type-description " type="text" value="Explorer " placeholder="About me " minLength="2" maxLength="200"defaultValue="input" required/>
                    <span id="description-input-error" className="popup__input-error description-input-error"></span>
                </div>
                <button className="popup__submit-button " type="submit">Save</button>
            </form>
        </div>
    </section>
    <section className=" popup popup-addElement ">
        <div className="popup__container ">
            <button type="button" className="popup__close-btn popup__close-btn-addPlace "></button>
            <h3 className="popup__title ">New place</h3>
            <form className="popup__inputs-container popup__inputs-container-addPlace " name="popup__addElement__inputs" noValidate onChange>
                <div className="popup__inputs-div">
                    <input id="placeName-input" name="name" className="popup__input popup__inputs-type-placeName " type="text" placeholder="Title " minLength="1" maxLength="30" defaultValue="input" required/>
                    <span id="placeName-input-error" className="popup__input-error name-input-error"></span>
                </div>
                <div className="popup__inputs-div">
                    <input id="placeLink-input" name="link" className="popup__input popup__inputs-type-placeLink" type="url" defaultValue="input" placeholder="Image url" required/>
                    <span id="placeLink-input-error" className="popup__input-error placeLink-input-error "></span>
                </div>
                <button className="popup__submit-button popup__submit-button-addPlace " type="submit">Create</button>
            </form>
        </div>
    </section>
    <section className=" popup popup-deleteCard">
        <div className="popup__container">
            <button type="button" className="popup__close-btn popup__close-delete-card "></button>
            <form className="popup__inputs-container popup__inputs-delete-place " name="popup__delete-place" noValidate onChange>
                <h3 className="popup__title ">Are you sure you want to Delete this card?</h3>
                <button className="popup__submit-button popup__submit-button-addPlace " type="submit">Delete</button>
            </form>
        </div>
    </section>
      <EditAvatarPopup
         
          isOpen={isEditAvatarPopupOpen}
          
        />
    <template className="element-Stracture ">
        <li className="element ">
          <button
            type="button "
            aria-label="delete element "
            className="element__delete-button "
          ></button>
          <img src="# " alt="# " className="element__image" />
          <div className="element__title-area ">
            <h2 className="element__title">Delete</h2>
            <div className="element__like-countainer">
                <button
                className="element__like-button "
                type="button "
                aria-label="like element"
              ></button>
              <span className="element__likes-count"></span>
            </div>
         
          </div>
        </li>
      </template>
    <div className="popup popup_image-prev ">
        <div className="popup__image-prev-container">
            <button className="popup__close-btn popup__close-button-image-prev" type="button" ></button>
            <img src="# " alt="# " className="popup__image " />
            <p className="popup__caption "></p>
        </div>
    </div>
</div>
  );
}

export default App;
