import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import { api } from "../utils/Api";
const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  handleCardClick
}) => {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  
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
  return (
    <main className="main">
      <section className="profile">
        <div onClick={onEditAvatarClick} className="profile__img-container">
          <img src={userAvatar} className="profile__img" alt="profile img" />
        </div>
        <div className="profile__description">
          <div className="profile__description-button">
            <h1 className="profile__description-name">{userName}</h1>
            <button
              onClick={onEditProfileClick}
              className="profile__edit"
              type="button"
            ></button>
          </div>
          <p className="profile__description-prof">{userDescription}</p>
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
            return <Card card={card} key={card._id} onCardClick={handleCardClick} />;
          })}
        </ul>
      </div>
    </main>
  );
};
export default Main;
