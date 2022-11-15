import React from "react";
import Card from "./Card.js";
const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  cards,
  onCardClick,
  userAvatar,
  userDescription,
  userName
}) => {

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
          {cards.map((card,i) => {
            
            return (<Card
            card={card}
            key={i}
            onCardClick={onCardClick}
             />
          )})}
        </ul>
      </div>
    </main>
  );
};
export default Main;
