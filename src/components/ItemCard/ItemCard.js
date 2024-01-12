import "./ItemCard.css";
import likeBtn from "../../images/likeBtn.svg";
import liked from "../../images/liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike, isLoggedIn }) => {
  const currentUser = CurrentUserContext();
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeBtnClassName = `item__like ${
    !isLoggedIn && "item__like_hidden"
  }`;
  const itemLikeBtnSrc = `${isLiked ? liked : likeBtn}`;

  const handleLike = (e) => {
    e.preventDefault();
    onCardLike({ _id: item._id, owner: item.owner, isLiked });
  };
  return (
    <div className="card__content">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__caption">
        <p className="card__name">{item.name}</p>
        {currentUser ? (
          <img
            className={itemLikeBtnClassName}
            src={itemLikeBtnSrc}
            alt="like button"
            onClick={handleLike}
          ></img>
        ) : null}
      </div>
    </div>
  );
};

export default ItemCard;
