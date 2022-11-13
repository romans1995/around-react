const Main=()=> {
 
 const handleEditAvatarClick=()=>{
    document.querySelector(".popup-editAvatar").classList.add("popup_active");
 }
 const handleEditProfileClick=()=>{
    document.querySelector(".profile-popup").classList.add("popup_active");
 }
 const handleAddPlaceClick=()=>{
    document.querySelector(".popup-addElement").classList.add("popup_active");
 }
    
    // handleAddPlaceClick

    return (
<main className="main">
<section className="profile">
    <div onClick={handleEditAvatarClick} className="profile__img-container">
        <img  className="profile__img" alt="profile img"/></div>
    <div className="profile__description">
        <div className="profile__description-button" >
            <h1 className="profile__description-name"></h1>
            <button onClick={handleEditProfileClick} className="profile__edit" type="button"></button>
        </div>
        <p className="profile__description-prof"></p>
    </div>

    <button className="profile__add" onClick={handleAddPlaceClick} type="button"></button>
</section>
<div className="elements">
    <ul className="elements__list">
    </ul>
</div>
</main>
    )}
    export default Main;