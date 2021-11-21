import React, { useState } from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import bg1 from "../../pages/Home/components/images/bg1.jpg";
import bg2 from "../../pages/Home/components/images/bg2.jpg";
import bg3 from "../../pages/Home/components/images/bg3.jpg";
import Vector from "../../pages/Home/components/images/Vector.png";
import search from "../../pages/Home/components/images/search.png";
import BackgroundSlider from "react-background-slider";
export default function TopBar({
  blur,
  setHeader,
  setSelectTheme,
  setStatus,
  setShowRwdSearch
}) {
  const [action, setAction] = useState(1);
  function change1() {
    setHeader({
      headerBg: "header",
      headerSlier: (
        <BackgroundSlider
          images={[bg1, bg2, bg3]}
          duration={5}
          transition={3}
        />
      )
    });
    setAction(1);
    setStatus("首頁")
    setSelectTheme(["景點","活動"])
    window.scrollTo(0, 0);
  }
  function change2() {
    setHeader({
      headerBg: "header2",
      headerSlier: "",
    });
    setStatus("首頁二")
    setSelectTheme(["美食","住宿"])
    setAction(2);
   
    window.scrollTo(0, 0);
  }
  function change3() {
    setAction(3);
    setStatus("首頁三")
  
    window.scrollTo(0, 0);
  }
  function turnHome() {
    change1();
    setStatus("首頁")
    window.scrollTo(0, 0);

  }

  return (
    <>
      <div className={"topBar sticky-top " + (blur && " blurClass")}>
        <div className="topBarContainer">
          <div onClick={turnHome} className="logo">
            <img src={logo} alt="" />

            {/* rwd按鈕 */}
            <button onClick={()=>{setShowRwdSearch(true)}} className="rwdSearchButton " type="button">
              <div className="searchIcon">
                <img src={search} alt="searchIcon" />
              </div>
            </button>
            <button className="rwdSelectButton" type="button">
              <div className="selectIcon">
                <img src={Vector} alt="selectIcon" />
              </div>
            </button>
          </div>
          <div className="topText">
            <div
              onClick={() => {
                change1();
              }}
              className={"attractions theme " + (action === 1 && "active")}
            >
              <div className="circle">
                <div className="triangle"></div>
              </div>
              <p>台灣景點</p>
            </div>
            <div
              onClick={() => {
                change2();
              }}
              className={"stay theme " + (action === 2 && "active")}
            >
              <div className="circle">
                <div className="square"></div>
              </div>
              <p>美食住宿</p>
            </div>
            <div
              onClick={() => {
                change3();
              }}
              className={"transportation theme " + (action === 3 && "active")}
            >
              <div className="circle">
                <div className="insideCircle"></div>
              </div>
              <p>景點交通</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadowContainer">
        <div className="topBarShadow1 shadow1"></div>
        <div className="topBarShadow2 shadow2"></div>
      </div>
    </>
  );
}
