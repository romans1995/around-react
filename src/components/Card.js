const Card = (props) =>{
return(
    <li className="card">
   
      {/* <button
        type="button"
        aria-label="delete card"
        className="card__delete-button"
        onClick={handleDeleteCard}
      ></button> */}
    
    <img
      src={props.card.link}
      alt={props.card.name}
      className="card__image"
      defaultValue="img"
     
    />
    <div className="card__title-area">
      <h2 defaultValue="card__title" className="card__title">{props.card.name}</h2>

      <div className="card__like-container">
        <button
         
          type="button"
          aria-label="like card"
         
        ></button>
        <span defaultValue="card__title" className="card__like-count">{props.card.likes.length}</span>
      </div>
    </div>
  </li>

);
}

export default Card;