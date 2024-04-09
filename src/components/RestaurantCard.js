import { CDN_URL } from "../utils/constants";
import Star from "../utils/star.svg";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  // Function to truncate text if it exceeds two lines
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "..";
  };

  return (
    <div className="m-8 w-[300px] h-[450px] rounded-xl shadow-lg hover:shadow-2xl bg-white">
      <img
        className="object-cover rounded-t-lg h-60 w-full"
        alt="Restaurant Logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <div>
          <h2 className="mt-2 h-14 text-lg font-montserrat font-semibold">{name}</h2>
          <p className="text-sm text-gray-600 mb-2 break-word font-montserrat">
            {truncateText(cuisines.join(", "), 40)}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <img src={Star} className="w-8 h-8 mr-1 fill-current" />
          <span className="font-palaquin font-bold">{avgRating}</span>{" "}
          <span className="ml-2">&bull;</span>
          <span className="mx-2 font-grotesque">
            {resData.info.sla.deliveryTime} mins
          </span>
        </div>
        <div className="mb-2 flex items-center">
          <span className="font-montserrat">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
