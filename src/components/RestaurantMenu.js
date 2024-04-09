import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CardInfo from "./CardInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // Custom hook for fetching the restaurant data.
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  if (resInfo?.data?.cards?.length === 3) {
    return <CardInfo resInfo={resInfo} one={0} two={2} />;
  } else if (resInfo?.data?.cards?.length === 6) {
    return <CardInfo resInfo={resInfo} one={2} two={5} />;
  } else {
    return <CardInfo resInfo={resInfo} one={2} two={4} />;
  }
};

export default RestaurantMenu;
