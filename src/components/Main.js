import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.js";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  handleCardClick,
  onCardLike ,
  onCardDelete 
}) => {
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitalCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.likeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    });
} 
function handleCardDelete(card) {
  api.deleteCard(card._id).then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
  });
} 

  return (
    <main className="main">
      <section className="profile">
        <div onClick={onEditAvatarClick} className="profile__img-container">
          <img
            src={currentUser.avatar}
            className="profile__img"
            alt="profile img"
          />
        </div>
        <div className="profile__description">
          <div className="profile__description-button">
            <h1 className="profile__description-name"> {currentUser.name} </h1>
            <button
              onClick={onEditProfileClick}
              className="profile__edit"
              type="button"
            ></button>
          </div>
          <p className="profile__description-prof"> {currentUser.about} </p>
        </div>
        <button
          className="profile__add"
          onClick={onAddPlaceClick}
          type="button"
        ></button>
      </section>
      <div className="elements">
        <ul className="elements__list">
          
          {cards.map((card) => {
            return (
              <Card card={card} key={card._id} onCardClick={handleCardClick} onCardLike ={handleCardLike}  onCardDelete={handleCardDelete} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default Main;
