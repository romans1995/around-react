import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


const Card = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;

  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <button
        type="button"
        aria-label="delete element"
        className={isOwn?"element__delete-button":"element__delete-button_hidden"}
      />
      <img
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
      />
      <div className="element__title-area">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-countainer">
          <button
            className="element__like-button"
            type="button "
            aria-label="like element"
          />
          <span className="element__likes-count" defaultValue="0">
            {props.card.likes ? props.card.likes.length : 0}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Card;
