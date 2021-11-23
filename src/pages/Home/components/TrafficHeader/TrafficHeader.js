import React,{useState,useEffect} from "react";
import "./trafficHeader.css";
import search from "../images/search.png";
import {getData} from "../../../../global/constants"

export default function TrafficHeader(props) {
  const {setStepDisplay,setStepInfo,stepInfo}=props
    const [city,setCity]=useState("選擇縣市")
    const [showOption,setShowOption]=useState(false)
    const [showOption2,setShowOption2]=useState(false)
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
    const [routeSelected,setRouteSelected]=useState("選擇路線")
      function selectRoute (queryName){
        setShowOption(false)
        const filterData = busData.filter(item=>item.City===queryName)
        const selectData = filterData.map(item=>item.TaiwanTripName.Zh_tw )
        const City = selectCity.filter(item=>item.queryName===filterData[0].City )
        setRouteName(selectData)
        setCity(City[0].chineseName)
        setRouteSelected("選擇路線")

      }
      function getBusData(route){
        setRouteSelected(route)
      }
      function routeSearch(){
        setStepDisplay(true)
        getData(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip/${routeSelected}?$top=30&$format=JSON`,setStepInfo)
      }
      const outBand=stepInfo.filter((item)=>{
        return item.Direction===0
      })
      console.log(outBand)
      const back=stepInfo.filter((item)=>{
        return item.Direction===1
      })
      console.log(back)
    
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
             
            </div>
              <div className="trafficDropIcon"></div>
          </div>
          <div  onClick={()=>{
                    setShowOption2(!showOption2)
          }} className="trafficSelect">
            <div className={"trafficSelected "+(routeName.length===0 && "trafficSelectedActive")}>
              {routeSelected}
            </div>
            <div  className={"trafficOptions "+(showOption2 &&"routeOptionsActive")}>
            {routeName.map((item,index)=>{
                return <div onClick={()=>{getBusData(item)}} className="trafficOption">{item}</div>
            })}
             
            </div>
              <div className="trafficDropIcon"></div>
          </div>
          <button onClick={routeSearch} className="trafficButton">
            <img className="btnSearchIcon" src={search} alt="" />
          </button>
        </div>
        <div className="trafficTarget">
          <div className="trafficStart">
            <div className="trafficStartContain">
                <div>往</div>
                <div className="trafficStep" >蘭潭</div>
            </div>
          </div>
          <div className="trafficEnd">
          <div className="trafficStartContain">
                <div>往</div>
                <div className="trafficStep" >港坪運動公園</div>
            </div>
          </div>
        </div>
        <div className="trafficHeaderShadow1"></div>
        <div className="trafficHeaderShadow2"></div>
      </div>
    </>
  );
}
