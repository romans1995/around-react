
import React, { useState,useEffect } from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditAddPlace from "./EditAddPlace.js";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";

function App() {


    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({
        name: "",
        link: "",
      });
    const [cards, setCards] = useState([""]);

    const handleEditAvatarClick=()=>{
        setIsEditAvatarPopupOpen(true);
     }
     const handleEditProfileClick=()=>{
        setIsEditProfilePopupOpen(true)
     }
     const handleAddPlaceClick=()=>{
        setIsAddPlacePopupOpen(true);
     }

     const closeAllPopups = () =>{
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePreviewOpen(false)
     }
     useEffect(() => {
        api
          .getInitalCards()
          .then((res) => {
            setCards(res);
          })
          .catch(console.log);
      }, []);
      const handleCardClick = (card) => {
        setIsImagePreviewOpen(true);
        setSelectedCard({
          name: card.name,
          link: card.link,
        });
      };

  return (
    <div className="body">
    <Header/>
    <Main 
   onCardClick={handleCardClick}
  onEditAvatarClick={handleEditAvatarClick}
    onEditProfileClick={handleEditProfileClick}
    onAddPlaceClick={handleAddPlaceClick}
    cards={cards}
 
    />
   <Footer/>
  
    <section className=" popup popup-deleteCard">
        <div className="popup__container">
            <button type="button" className="popup__close-btn popup__close-delete-card "></button>
            <form className="popup__inputs-container popup__inputs-delete-place " name="popup__delete-place" noValidate >
                <h3 className="popup__title ">Are you sure you want to Delete this card?</h3>
                <button className="popup__submit-button popup__submit-button-addPlace " type="submit">Delete</button>
            </form>
        </div>
    </section>
   <EditAvatarPopup
     isOpen={isEditAvatarPopupOpen}
     onClose={closeAllPopups}

       />:
       <EditAddPlace
       isOpen={isAddPlacePopupOpen}
       onClose={closeAllPopups}
       />
       <EditProfilePopup
       isOpen={isEditProfilePopupOpen}
       onClose={closeAllPopups}
       />
          <ImagePopup
          card={selectedCard}
       isOpen={isImagePreviewOpen}
       onClose={closeAllPopups}
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
