import RestaurantCard from "./Restaurant";
import { cardData } from "../utils/mockData";
import { useEffect, useState } from "react";

const BodyComponent = () => {
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.568729&lng=73.958935&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resJson = await data.json();
    console.log(resJson);
  };

  let [restList, setRestList] = useState(cardData);
  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
          const updateList = restList.filter((res) => res.info.avgRating > 4);
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
