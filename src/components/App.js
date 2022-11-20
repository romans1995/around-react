import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditAddPlace from "./EditAddPlace.js";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

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

  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

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

  return (
    <div className="body">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        handleCardClick={handleCardClick}
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
      />
      <EditAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
