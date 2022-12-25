import React, { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup  from "./AddPlacePopup .js";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/Api";

// css
import "../index.css";
import "../blocks/body.css";
import "../blocks/header.css";
import "../blocks/main.css";
import "../blocks/profile.css";
import "../blocks/elements.css";
import "../blocks/element.css";
import "../blocks/popup.css";
import "../blocks/footer.css";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });
  const [cards, setCards] = useState([]);
  
const handleAddPlaceSubmit = (name,link) =>{
  api.createCard({name,link}).then((newCard)=>{
    setCards([newCard, ...cards]);
    closeAllPopups();
  })
}

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((cards) => cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    });
} 
function handleCardDelete(card) {
  api.deleteCard(card._id).then((newCard) => {
    const newCards = cards.filter(
      (currentCard) => currentCard._id !== card._id
    );
    setCards(newCards);
  });
} 

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleUpdateUser = ({ name, about }) =>{
    api
    .setUserInfo({name,about}).then((res)=>{
      setCurrentUser(res)
      closeAllPopups();
    })
  }
  const handleUpdateAvatar = (url) =>{
    api.setAvatarImage(url).then((res) =>{
      setCurrentUser(res);
      closeAllPopups();
    })
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePreviewOpen(false);
  };
  const handleCardClick = (card) => {
    setIsImagePreviewOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
  };


  useEffect(() => {
    api
      .getUserInformation()
      .then((user) => {
        setCurrentUser(user);
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

  return (
    <div className="body">
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
      cards={cards}
    onEditAvatarClick={handleEditAvatarClick}
    onEditProfileClick={handleEditProfileClick}
    onAddPlaceClick={handleAddPlaceClick}
    handleCardClick={handleCardClick}
    onCardLike={handleCardLike}
    onCardDelete ={handleCardDelete}
      />
      <Footer />

      <PopupWithForm
        title="Are you sure?"
        name="delete-card"
        buttonText="Delete"
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar ={handleUpdateAvatar}
      />
      <AddPlacePopup  isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit} />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser ={handleUpdateUser}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePreviewOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
