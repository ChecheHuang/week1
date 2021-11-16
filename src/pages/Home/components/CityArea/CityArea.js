import "./cityArea.css";
import mapIcon from "../images/Subtract.png";
import 台北 from "../images/台北.png";
import 台中 from "../images/台中.png";
import 台東 from "../images/台東.png";
import 台南 from "../images/台南.png";
import 宜蘭 from "../images/宜蘭.png";
import 花蓮 from "../images/花蓮.png";
import 金門 from "../images/金門.png";
import 南投 from "../images/南投.png";
import 屏東 from "../images/屏東.png";
import 桃園 from "../images/桃園.png";
import 高雄 from "../images/高雄.png";
import 新北 from "../images/新北.png";
import 新竹 from "../images/新竹.png";
import 嘉義 from "../images/嘉義.png";
import React, { useState } from "react";
function CityArea({blur,setStatus,setCity}) {
  const [slider, setSlider] = useState("0vw");
  function leftMinus() {
    var left = parseInt(slider.replace("vw", "")) - 16.8;
    if (left < -81) {
      left = -81;
    }
    setSlider(left + "vw");
  }
  function leftPlus() {
    var left = parseInt(slider.replace("vw", "")) + 16.8;
    if (left > 0) {
      left = 0;
    }
    setSlider(left + "vw");
  }
  function turnCityArea(cityName,queryName){
    setCity([cityName,queryName])
    setStatus("連結")
    window.scroll(0, 0);

  }
  return (
    <div className={"cityArea "+(blur&& " blurClass")}>
      <div className="d-flex align-items-center title">
        <div className="triangle me-2"></div>
        <p>熱門城市</p>
        {slider !== "0vw" &&<div onClick={leftPlus} className="leftButton">
          <div className="left"></div>
        </div>}
        {slider !== "-90vw" && <div onClick={leftMinus} className="rightButton">
          <div className="right"></div>
        </div>}
      </div>
      <div className="imageAreaUp">
        <div className="imageArea" style={{ left: slider }}>
          <div onClick={()=>{turnCityArea("台北市","/Taipei")}} className="item1">
            <div className="blur"></div>
            <img src={台北} alt="" />
            <div className="insideGroup d-flex flex-column">
              <div className="mapIcon">
                <img src={mapIcon} alt="" />
              </div>
              <p>台北市</p>
            </div>
          </div>
          <div className="item2">
            <div onClick={()=>{turnCityArea("新北市","/NewTaipei")}} className="item2-1">
              <div className="blur"></div>
              <img src={新北} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>新北市</p>
              </div>
            </div>
            <div onClick={()=>{turnCityArea("桃園市","/Taoyuan")}} className="item2-2">
              {" "}
              <div className="blur"></div>
              <img src={桃園} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>桃園市</p>
              </div>
            </div>
          </div>
          <div onClick={()=>{turnCityArea("新竹市","/HsinchuCounty")}} className="item1">
            <div className="blur"></div>
            <img src={新竹} alt="" />
            <div className="insideGroup d-flex flex-column">
              <div className="mapIcon">
                <img src={mapIcon} alt="" />
              </div>
              <p>新竹市</p>
            </div>
          </div>
          <div className="item2">
            <div onClick={()=>{turnCityArea("台中市","/Taichung")}} className="item2-1">
              <div className="blur"></div>
              <img src={台中} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>台中市</p>
              </div>
            </div>
            <div onClick={()=>{turnCityArea("南投市","/NantouCounty")}} className="item2-2">
              {" "}
              <div className="blur"></div>
              <img src={南投} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>南投市</p>
              </div>
            </div>
          </div>
          <div onClick={()=>{turnCityArea("嘉義市","/ChiayiCounty")}} className="item1">
            <div className="blur"></div>
            <img src={嘉義} alt="" />
            <div className="insideGroup d-flex flex-column">
              <div className="mapIcon">
                <img src={mapIcon} alt="" />
              </div>
              <p>嘉義市</p>
            </div>
          </div>
          <div onClick={()=>{turnCityArea("台南市","/Tainan")}} className="item1">
            <div className="blur"></div>
            <img src={台南} alt="" />
            <div className="insideGroup d-flex flex-column">
              <div className="mapIcon">
                <img src={mapIcon} alt="" />
              </div>
              <p>台南市</p>
            </div>
          </div>
          <div className="item2">
            <div onClick={()=>{turnCityArea("高雄市","/Kaohsiung")}} className="item2-1">
              <div className="blur"></div>
              <img src={高雄} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>高雄市</p>
              </div>
            </div>
            <div onClick={()=>{turnCityArea("屏東市","/PingtungCounty")}} className="item2-2">
              {" "}
              <div className="blur"></div>
              <img src={屏東} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>屏東市</p>
              </div>
            </div>
          </div>
          <div onClick={()=>{turnCityArea("宜蘭市","/YilanCounty")}} className="item1">
            <div className="blur"></div>
            <img src={宜蘭} alt="" />
            <div className="insideGroup d-flex flex-column">
              <div className="mapIcon">
                <img src={mapIcon} alt="" />
              </div>
              <p>宜蘭市</p>
            </div>
          </div>
          <div className="item2">
            <div onClick={()=>{turnCityArea("花蓮市","/HualienCounty")}} className="item2-1">
              <div className="blur"></div>
              <img src={花蓮} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>花蓮市</p>
              </div>
            </div>
            <div onClick={()=>{turnCityArea("台東市","/TaitungCounty")}} className="item2-2">
              {" "}
              <div className="blur"></div>
              <img src={台東} alt="" />
              <div className="insideGroup d-flex flex-column">
                <div className="mapIcon">
                  <img src={mapIcon} alt="" />
                </div>
                <p>台東市</p>
              </div>
            </div>
          </div>
          <div onClick={()=>{turnCityArea("台東市","/KinmenCounty")}} className="item1">
            <div className="blur"></div>
            <img src={金門} alt="" />
            <div className="insideGroup d-flex flex-column">
              <div className="mapIcon">
                <img src={mapIcon} alt="" />
              </div>
              <p>金門馬祖</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CityArea;
