import React from "react";
import redIcon from "../images/redIcon.png"
function FoodItem(props) {
    const {Name,Picture,City,Town}=props
  return (
    <div className="item">
        <div className="itemContain">
            <div className="imageArea">
                <img className="image" src={Picture.PictureUrl1||"https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
            </div>
        <p className="itemName">{Name}</p>
        <div className="itemAddress">
            <div className="mapIcon">
                <img className="redIcon" src={redIcon} alt="" />
            </div>
            <div className="address">{City} {Town}</div>
        </div>
        </div>

      <div className="shadow1"></div>
      <div className="shadow2"></div>
    </div>
  );
}
export default FoodItem;
