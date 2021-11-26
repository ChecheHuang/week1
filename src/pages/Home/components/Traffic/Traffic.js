import React from "react";
import "./traffic.css";
export default function Traffic(props) {
  const { stepDisplay, stepInfo, stepInfoDisplay, setStepInfoDisplay } = props;
  return (
    <>
      <div className="traffic">
        <p>*每隔五秒自動更新</p>
        <div className="trafficInfo">
          {stepDisplay ? (
            <>
              <div className="stepContainer">
              { 
                stepInfoDisplay[stepInfo].Stops.map((item,index)=>{
                  return <div key={index} className="stepArea">
                  <div className="stepItem ">未到站</div>
                  <div className="stepText">{item.StopName.Zh_tw}</div>
                </div>
                })
              }
              </div>
            </>
          ) : (
            <div className="pleaseSelect">請選擇公車路線</div>
          )}
          <div className="trafficShadow1"></div>
          <div className="trafficShadow2"></div>
        </div>
      </div>
    </>
  );
}
