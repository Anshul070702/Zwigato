import React from "react";

const CardInfo = ({ resInfo, one, two }) => {
  // console.log(resInfo?.cards[one]?.card?.card?.info)
  // const { name,cuisines,costForTwoMessage } = resInfo?.cards[one]?.card?.card?.info?.name;
  // const itemCards = resInfo?.cards[two]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
  //       // cannot directly write @type
  //       return c?.card?.card?.["@type"] === " "
  // })
  const {costForTwo}=resInfo.cards[2].card.card.info

  return (
    <div className="menu">
      {console.log(resInfo.cards[2].card.card.info.costForTwo / 100)}

      <div>
        <h1>cost for two is {costForTwo/100}</h1>
      </div>
    </div>
  );
};

export default CardInfo;
