import React, { useState, useEffect } from "react";
import axios from 'axios'
import jsSHA from 'jssha'
import "./trafficHeader.css";
import search from "../images/search.png";
import { getData } from "../../../../global/constants"

export default function TrafficHeader(props) {
  const { setStepDisplay, setStepInfo, stepInfo, stepInfoDisplay, setStepInfoDisplay } = props
  const [city, setCity] = useState("選擇縣市")
  const [showOption, setShowOption] = useState(false)
  const [showOption2, setShowOption2] = useState(false)
  const [busData, setBusData] = useState([])
  const [stepStart, setStepStart] = useState(["蘭潭", "港坪運動公園"])
  useEffect(() => {
    axios.get(
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?$format=JSON",
      {
        headers: getAuthorizationHeader()
      }
    )
      .then(function (response) {
        setBusData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
    let AppID = 'a465ec9e862b4c6cb1388215b593a2d0';
    let AppKey = 'D1VEDZ9dYJ6pkyxDK2QzK47GY3I';
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
  }
  function formatSecond(time) {          
    if(parseInt(time)<120 && parseInt(time)>60){
      return "進站中"
    }else if(parseInt(time)<60){
      return "離站中"
    }else{
      var t =new Date()
      var t_s =t.getTime()
      t.setTime(t_s+parseInt(time)*1000)
      var t_h=t.getHours()
      var t_m=t.getMinutes()
      if(t_m.toString().length<2){
        t_m="0"+t_m
      }
      time=t_h+":"+t_m
      return time
    }
}
 
  function getGo(){
    axios.get(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/StopOfRoute/TaiwanTrip/${routeSelected}?$top=30&$format=JSON`,
      {
        headers: getAuthorizationHeader()
      }
    )
      .then(function (response) {
        if(response.data.length===2){
          setStepInfoDisplay(response.data)
          const firstStop=response.data[0].Stops[0].StopName.Zh_tw
          const endStop=response.data[1].Stops[0].StopName.Zh_tw
          setStepStart([endStop,firstStop])
        }else{
          setStepInfoDisplay([response.data[0],[]])
          const firstStop=response.data[0].Stops[0].StopName.Zh_tw
          setStepStart(["",firstStop])
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getTime(){
    axios.get(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip/${routeSelected}?$format=JSON`,
      {
        headers: getAuthorizationHeader()
      }
    ).then(function(response){  
      response.data.filter((item,index)=>{
        if(item.EstimateTime && item.Direction===0 ){
          const index=stepInfoDisplay[0].Stops.findIndex((v)=>{
            return v.StopName.Zh_tw===item.StopName.Zh_tw})
            setStepInfoDisplay((prev)=>{
            const newData = [...prev]
            if(index!==-1){   
              Object.assign(newData[0].Stops[index],{Time:formatSecond(item.EstimateTime)})
            }
            return newData
            })
            return true
          }else if(item.EstimateTime && item.Direction===1){
            const index=stepInfoDisplay[1].Stops.findIndex((v)=>{
              return v.StopName.Zh_tw===item.StopName.Zh_tw})
              setStepInfoDisplay((prev)=>{
              const newData = [...prev]
              if(index!==-1){   
                Object.assign(newData[1].Stops[index],{Time:formatSecond(item.EstimateTime)})
              }
              return newData
              })
              return true
          }
          else{
            return false
          }
        })   
    })
  }



  useEffect(()=>{
    getTime()
    setInterval(()=>{getTime()},15000)
    
  },[stepStart])
 
  const selectCity = [
    { chineseName: "基隆市", queryName: "Keelung" },
    { chineseName: "新北市", queryName: "NewTaipei" },
    { chineseName: "台北市", queryName: "Taipei" },
    { chineseName: "桃園市", queryName: "Taoyuan" },
    { chineseName: "宜蘭縣", queryName: "YilanCounty" },
    { chineseName: "嘉義縣", queryName: "ChiayiCounty" },
    { chineseName: "嘉義市", queryName: "Chiayi" },
    { chineseName: "雲林縣", queryName: "YunlinCounty" },
    { chineseName: "台南市", queryName: "Tainan" },
    { chineseName: "花蓮縣", queryName: "HualienCounty" },
    { chineseName: "屏東市", queryName: "PingtungCounty" },
    { chineseName: "彰化縣", queryName: "ChanghuaCounty" },
    { chineseName: "金門縣", queryName: "KinmenCounty" },
  ];
  const [routeName, setRouteName] = useState([])
  const [routeSelected, setRouteSelected] = useState("選擇路線")
  function selectRoute(queryName) {
    setShowOption(false)
    const filterData = busData.filter(item => item.City === queryName)
    const selectData = filterData.map(item => item.TaiwanTripName.Zh_tw)
    const City = selectCity.filter(item => item.queryName === filterData[0].City)
    setRouteName(selectData)
    setCity(City[0].chineseName)
    setRouteSelected("選擇路線")

  }
  function getBusData(route) {
    setRouteSelected(route)
  }
  function routeSearch() {
    if (routeSelected !== "選擇路線") {
      setStepDisplay(true)
      getGo()
     setStepInfo(0)

     
    }
  }


  function go() {
    getGo()
    setStepInfo(0)
  }
  function back() {
    setStepInfo(1)
  }
  return (
    <>
      <div className="trafficHeader">
        <div className="trafficSelectArea">
          <div onClick={() => {
            setShowOption(!showOption)
          }} className="trafficSelect">
            <div className="trafficSelected">
              {city}
            </div>
            <div className={"trafficOptions " + (showOption && "trafficOptionsActive")}>
              {selectCity.map((item, index) => {
               
                return <div  key={index} onClick={() => { selectRoute(item.queryName) }} className="trafficOption">{item.chineseName}</div>
              })}

            </div>
            <div className="trafficDropIcon"></div>
          </div>
          <div onClick={() => {
            setShowOption2(!showOption2)
          }} className="trafficSelect">
            <div className={"trafficSelected " + (routeName.length === 0 && "trafficSelectedActive")}>
              {routeSelected}
            </div>
            <div className={"trafficOptions " + (showOption2 && "routeOptionsActive")}>
              {routeName.map((item, index) => {
                return <div key={index} onClick={() => { getBusData(item) }} className="trafficOption">{item}</div>
              })}

            </div>
            <div className="trafficDropIcon"></div>
          </div>
          <button onClick={routeSearch} className="trafficButton">
            <img className="btnSearchIcon" src={search} alt="" />
          </button>
        </div>
        <div className="trafficTarget">
        {
          stepStart[0]!=="" &&  <><div className={"trafficStart "+(stepInfo===0&&"trafficActive")}>
            <div onClick={go} className="trafficStartContain">
              <div>往</div>
              <div className="trafficStep" >{stepStart[0]}</div>
            </div>
          </div>
          <div onClick={back} className={"trafficStart "+(stepInfo===1&&"trafficActive")}>
            <div className="trafficStartContain">
              <div>往</div>
              <div className="trafficStep" >{stepStart[1]}</div>
            </div>
          </div>
          </>
        }
      
          {/* <div onClick={back} className={"trafficStart "+(stepInfo===1&&"trafficActive")}>
            <div className="trafficStartContain">
              <div>往</div>
              <div className="trafficStep" >{stepStart[1]}</div>
            </div>
          </div> */}
        </div>
        <div className="trafficHeaderShadow1"></div>
        <div className="trafficHeaderShadow2"></div>
      </div>
    </>
  );
}
