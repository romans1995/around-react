import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.js";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  handleCardClick,
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
            <h1 className="profile__description-name">{currentUser.name}</h1>
            <button
              onClick={onEditProfileClick}
              className="profile__edit"
              type="button"
            ></button>
          </div>
          <p className="profile__description-prof">{currentUser.about}</p>
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
              <Card card={card} key={card._id} onCardClick={handleCardClick}/>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default Main;
