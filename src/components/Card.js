const Card = (props) =>{
  console.log(props)
return(
  <li className="element ">
  <button
    type="button "
    aria-label="delete element "
    className="element__delete-button "
  ></button>
  <img src={props.card.link} alt="# " className="element__image" />
  <div className="element__title-area ">
    <h2 className="element__title">{props.card.name}</h2>
    <div className="element__like-countainer">
        <button
        className="element__like-button "
        type="button "
        aria-label="like element"
      ></button>
      <span className="element__likes-count">{props.card.likes.length}</span>
    </div>
 
  </div>
</li>

);
}

export default Card;