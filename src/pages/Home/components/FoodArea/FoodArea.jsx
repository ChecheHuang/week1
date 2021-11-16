import "./foodArea.css";
import FoodItem from "./FoodItem";
import {useState,useEffect} from "react"
import { PostalCode } from "../../../../global/PostalCode";
import { getData } from "../../../../global/constants";

function FoodArea(props) {
  const {blur,api}=props
  const [footItem, setFoodItem] = useState([]);

  function int(s) {    
    if(!s){
        return 0;
    }else{
       return s;
    }   
}
  var PostalCodeData = []
  PostalCode.forEach((item) => {
    item.districts.forEach((item) => {
      PostalCodeData.push([{ "zip": item.zip }, { "name": item.name }])
    });
  });
  useEffect(() => {
    getData(api, setFoodItem);
  
  }, [api]);
  // console.log(api)
  
  return (
    <div className={"foodArea "+(blur&& " blurClass")}>
      <div className="d-flex align-items-center  title">
        {props.children}
      </div>
      <div className="foodItemArea">
        {footItem.map((item, index) => {
          const { Name, Picture, City, ZipCode } = item;
          var Town= PostalCodeData.find((item) => {
            return item[0].zip === ZipCode
          })
          if(int(Town) !== 0){
            Town =Town[1].name
          }
          
         
          return (
            <FoodItem key={index} Name={Name} Picture={Picture} City={City} Town={Town} />
          );
        })}
      </div>
    </div>
  );
}
export default FoodArea;
