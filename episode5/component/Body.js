import RestaurantCard from "./Restaurant";
import { cardData } from "../utils/mockData";
import { useState } from "react";


const BodyComponent = () => {
    let [restList, setRestList] = useState(cardData);
  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
            
          const updateList = restList.filter(
            (res) => res.info.avgRating > 4
          )
          setRestList(updateList);
        }}
      >
        
        Top Related Restaurants
      </button>
      <div className="res-container">
        {restList.map((card) => (
          <RestaurantCard key={card.info.id} cardData={card}></RestaurantCard>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
