import React from "react";
import "./traffic.css";
export default function Traffic(props) {
  const { stepDisplay, stepInfo, stepInfoDisplay, setStepInfoDisplay } = props;
  // console.log(stepInfoDisplay[stepInfo].Stops)
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
                  return <div class="stepArea">
                  <div class="stepItem ">未到站</div>
                  <div class="stepText">{item.StopName.Zh_tw}</div>
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
