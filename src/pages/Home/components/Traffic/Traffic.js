import React from "react";
import "./traffic.css";
export default function Traffic(props) {
  const { stepDisplay, stepInfo,stepInfoDisplay,setStepInfoDisplay} = props;

  return (
    <>
      <div className="traffic">
        <p>*每隔五秒自動更新</p>
        <div className="trafficInfo">
          {stepDisplay ? (
            <>
              <div className="stepContainer">
              {stepInfoDisplay.map(((item,index)=>{
                 const {EstimateTime,StopName}=item
                  return  <div class="stepArea">
                  {EstimateTime==="沒資料"&&
                   <div class="stepItem stepItemActive2">{EstimateTime}</div>
                   }
                  {parseInt(EstimateTime)>0 &&
                    <div class="stepItem ">{parseInt(EstimateTime)/60+'分'}</div>
                   }
                  <div class="stepText">{StopName.Zh_tw}</div>
                </div>
              }))}
               
                
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
