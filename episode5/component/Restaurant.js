import { styleCard } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { cardData } = props;
  console.log(cardData);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        height={100}
        width={200}
        src={
          CDN_URL +
          cardData.info.cloudinaryImageId
        }
        alt=""
      />
      <h3>{cardData.info.name}</h3>

      <h4 className="res-menu">{cardData.info.cuisines?.join(", ")}</h4>
      <h4 className="res-rating-time">{cardData.info.avgRating} stars</h4>
      <h4 className="res-rating-time">
        <span>{cardData.info.sla.deliveryTime}mins</span>
      </h4>
      <h4>{cardData.info.areaName}</h4>
    </div>
  );
};

export default RestaurantCard;