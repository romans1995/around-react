const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element">
      <button
        type="button "
        aria-label="delete element "
        className="element__delete-button"
      />
      <img
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
        className="element__image"
      />
      <div className="element__title-area ">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-countainer">
          <button
            className="element__like-button "
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
