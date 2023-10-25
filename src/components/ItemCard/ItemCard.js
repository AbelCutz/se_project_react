import "./ItemCard.css";
import likeBtn from "../../images/likeBtn.svg";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__content">
      <img
        src={item.link}
        className="card__image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <div className="card__caption">
        <p className="card__name">{item.name}</p>
        <img className="card__like-btn" src={likeBtn} alt={item.link}></img>
      </div>
    </div>
  );
};

export default ItemCard;
