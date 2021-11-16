import axios from 'axios'
import jsSHA from 'jssha'
export const API_GET_DATA = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=4&$format=JSON'
export const API_GET_ACTIVE = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=4&$skip=${Math.floor(Math.random()*100)}&$format=JSON`
export const API_GET_FOOD_RANDOM_TEN=`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=10&$skip=${Math.floor(Math.random()*4000)}&$format=JSON`

export function getData(api,setData){
    axios.get(
        api,
      {
         headers: getAuthorizationHeader()
      }
   )
   .then(function (response) {
    setData(response.data)
   })
   .catch(function (error) {
     console.log(error);
   }); 
   
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
}