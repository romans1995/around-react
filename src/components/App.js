
import React, { useState,useEffect } from "react";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditAddPlace from "./EditAddPlace.js";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";

// css
import '../blocks/body.css';
import '../blocks/header.css'
import '../blocks/main.css'
import '../blocks/profile.css'
import '../blocks/elements.css'
import '../blocks/element.css';
import '../blocks/popup.css';
import '../blocks/footer.css';

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
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    
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
          .getUserInformation()
          .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
          })
          .catch(console.log);
      }, []);

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
    userName={userName}
    userDescription={userDescription}
    userAvatar={userAvatar}
 
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
  userDescription={userDescription}
         userName={userName}
       />
          <ImagePopup
          card={selectedCard}
       isOpen={isImagePreviewOpen}
       onClose={closeAllPopups}
       />

</div>
  );
}

export default App;
