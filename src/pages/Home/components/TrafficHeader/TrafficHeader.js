import React,{useState,useEffect} from "react";
import "./trafficHeader.css";
import search from "../images/search.png";
import {getData} from "../../../../global/constants"

export default function TrafficHeader() {
    const [city,setCity]=useState("選擇縣市")
    const [showOption,setShowOption]=useState(false)
    const [busData,setBusData]=useState([])
    useEffect(()=>{
        getData("https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?$format=JSON",setBusData)
    },[])
  
    const selectCity = [
        {chineseName:"基隆市",queryName:"Keelung"},
        {chineseName:"新北市",queryName:"NewTaipei"},
        {chineseName:"台北市",queryName:"Taipei"},
        {chineseName:"桃園市",queryName:"Taoyuan"},
        {chineseName:"宜蘭縣",queryName:"YilanCounty"},
        {chineseName:"嘉義縣",queryName:"ChiayiCounty"},
        {chineseName:"嘉義市",queryName:"Chiayi"},
        {chineseName:"雲林縣",queryName:"YunlinCounty"},
        {chineseName:"台南市",queryName:"Tainan"},
        {chineseName:"花蓮縣",queryName:"HualienCounty"},
        {chineseName:"屏東市",queryName:"PingtungCounty"},
        {chineseName:"彰化縣",queryName:"ChanghuaCounty"},
        {chineseName:"金門縣",queryName:"KinmenCounty"},
      ];
    const [routeName,setRouteName]=useState([])
      function selectRoute (queryName){
        setShowOption(false)
        const filterData = busData.filter(item=>item.City===queryName)
        const selectData = filterData.map(item=>item.TaiwanTripName.Zh_tw )
        const City = selectCity.filter(item=>item.queryName===filterData[0].City )
        setRouteName(selectData)
        console.log(filterData)
        setCity(City[0].chineseName)
      }
    
  return (
    <>
      <div className="trafficHeader">
        <div className="trafficSelectArea">
          <div  onClick={()=>{
                    setShowOption(!showOption)
          }} className="trafficSelect">
            <div className="trafficSelected">
              {city}
            </div>
            <div  className={"trafficOptions "+(showOption &&"trafficOptionsActive")}>
            {selectCity.map((item,index)=>{
                return <div onClick={()=>{selectRoute(item.queryName)}} className="trafficOption">{item.chineseName}</div>
            })}
                {/* <div className="trafficOption">台北市</div>
                <div className="trafficOption">新竹</div>
                <div className="trafficOption">新竹</div> */}
            </div>
              <div className="trafficDropIcon"></div>
          </div>
          <div className="trafficSelect">
            <div className="trafficSelected">
              選擇縣市
            </div>
              <div className="trafficDropIcon"></div>
          </div>
          <button class="trafficButton">
            <img className="btnSearchIcon" src={search} alt="" />
          </button>
        </div>
        <div className="trafficTarget"></div>
        <div className="trafficHeaderShadow1"></div>
        <div className="trafficHeaderShadow2"></div>
      </div>
    </>
  );
}
