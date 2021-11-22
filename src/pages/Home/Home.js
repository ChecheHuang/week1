import "./home.css";
import TopBar from "../../components/TopBar/TopBar";
import Header from "./components/Header/Header";
import CityArea from "./components/CityArea/CityArea";
import ActiveArea from "./components/ActiveArea/ActiveArea";
import FoodArea from "./components/FoodArea/FoodArea";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import bg1 from "./components/images/bg1.jpg";
import bg2 from "./components/images/bg2.jpg";
import bg3 from "./components/images/bg3.jpg";
import BackgroundSlider from "react-background-slider";
import { getData } from "../../global/constants";
import SearchArea from "./components/SearchArea/SearchArea";
import Lottie from "react-lottie";
import loading from "../../global/loading_TW.json"
import TrafficHeader from "./components/TrafficHeader/TrafficHeader";
import Traffic from "./components/Traffic/Traffic";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
 
    

 
  // 首頁  分頁  程式連結  header搜尋
  const [status, setStatus] = useState("首頁");
  // console.log(status);
  // 首頁用
  const [showOption, setShowOption] = useState([false, false]);
  const selectCity = [
    "不分縣市",
    "台北市",
    "新北市",
    "桃園市",
    "台中市",
    "台南市",
    "高雄市",
    "基隆市",
    "新竹市",
    "新竹縣",
    "苗栗縣",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "嘉義市",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "台東縣",
    "金門縣",
    "澎湖縣",
    "連江縣",
  ];

  //page1的類別下拉選單
  const [selectTheme, setSelectTheme] = useState(["類別","景點", "活動"]);

  //設定cityArea要接api參數
  const [city, setCity] = useState(["台北市", "Taipei"]);
  //搜尋區域value
  const [searchItem, setSearchItem] = useState(["", "類別", "不分縣市"]);

  //點開modal背景模糊設定
  const [blur, setBlur] = useState(false);
  //台灣景點與美食住宿header切換
  const [header, setHeader] = useState({
    headerBg: "header",
    headerSlier: (
      <BackgroundSlider images={[bg1, bg2, bg3]} duration={5} transition={3} />
    ),
  });
  const searchClass = [
    { title: "景點", query: "ScenicSpot" },
    { title: "美食", query: "Restaurant" },
    { title: "住宿", query: "Hotel" },
  ];
  //頁面
  const [page, setPage] = useState(1);

  const [api, setApi] = useState([
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=10&$skip=${Math.floor(
      Math.random() * 4000
    )}&$format=JSON`,
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=10&$skip=${Math.floor(Math.random() * 4000) + 50
    }&$format=JSON`,
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=10&$skip=${Math.floor(
      Math.random() * 4000
    )}&$format=JSON`,
    `https://ptx.transportdata.tw/MOTC/v2/Tourism${searchClass[0].query}/${city[1]
    }?$top=20&$skip=${page * 20}&$format=JSON`,
  ]);

  //page2
  const [rwdApi, setRwdApi] = useState([
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=12&$skip=${Math.floor(
      Math.random() * 4000
    )}&$format=JSON`,
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=12&$skip=${Math.floor(Math.random() * 4000) + 50
    }&$format=JSON`,
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=12&$skip=${Math.floor(
      Math.random() * 4000
    )}&$format=JSON`,
    `https://ptx.transportdata.tw/MOTC/v2/Tourism${searchClass[0].query}/${city[1]
    }?$top=20&$skip=${page * 20}&$format=JSON`,
  ]);

  useEffect(() => {
    const newApi = [...api];
    const newRwdApi = [...rwdApi];
    newApi[3] = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city[1]
      }?$top=20&$skip=${page * 20}&$format=JSON`;
    newApi[3] = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city[1]
      }?$top=20&$skip=${page * 20}&$format=JSON`;
    setApi(newApi);
    setRwdApi(newRwdApi);
  }, [page, city]);

  //連結後後分頁
  function pagePlus() {
    const newPage = page + 1;
    setPage(newPage);
    window.scrollTo(0, 0);
  }
  function pageMinus() {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      window.scrollTo(0, 0);
    }
  }


  // 搜尋用
  //觀光所有資料
  const [scenicSpotData, setScenicSpotData] = useState([]);
  //餐廳所有資料
  const [restaurantData, setRestaurantData] = useState([]);
  //住宿所有資料
  const [hotelData, setHotelData] = useState([]);
  //活動所有資料
  const [activityData, setActivityData] = useState([]);
  //搜尋顯示資料
  const [searchDisplayData, setSearchDisplayData] = useState({"searchTitle":"","city":"","displayData":[]});
  const [secondDisplayData, setSecondDisplayData] = useState({"searchTitle":"","city":"","displayData":[]});
  //進來就把所有api打一遍
  useEffect(() => {
    getData(
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON",
      setScenicSpotData
    );
    getData(
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON",
      setRestaurantData
    );
    getData(
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$format=JSON",
      setHotelData
    );
    getData(
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON",
      setActivityData
    );
  }, []);
  // useEffect(()=>{
  //   setSearchItem(["", "類別", "不分縣市"])
  // },[status])
  const [showRwdSearch,setShowRwdSearch]=useState(false)
  // 景點頁面站牌資訊
  const [stepDisplay,setStepDisplay]=useState(false)

  return (
    <div>
      
      <TopBar
        blur={blur}
        setHeader={setHeader}
        setPage={setPage}
        setSelectTheme={setSelectTheme}
        setStatus={setStatus}
        setShowRwdSearch={setShowRwdSearch}
      />
      {status!== "首頁三"&&<Header
        blur={blur}
        headerBg={header.headerBg}
        headerSlier={header.headerSlier}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        showOption={showOption}
        setShowOption={setShowOption}
        selectCity={selectCity}
        selectTheme={selectTheme}
        setStatus={setStatus}
        scenicSpotData={scenicSpotData}
        restaurantData={restaurantData}
        hotelData={hotelData}
        activityData={activityData}
        searchDisplayData={searchDisplayData}
        setSearchDisplayData={setSearchDisplayData}
        secondDisplayData={secondDisplayData}
        status={status}
        setSecondDisplayData={setSecondDisplayData}
        showRwdSearch={showRwdSearch}
        setShowRwdSearch={setShowRwdSearch}
      />}

      {status === "首頁" && (
        <>
          <CityArea blur={blur} setCity={setCity} setStatus={setStatus} />
          <ActiveArea blur={blur} setBlur={setBlur} />
          <div className="d-none d-lg-block">
            <FoodArea blur={blur} api={api[0]}>
              <div className="square me-2"></div>
              <p>熱門餐飲</p>
            </FoodArea>
          </div>
          <div className="d-block d-lg-none">
            <FoodArea blur={blur} api={rwdApi[0]}>
              <div className="square me-2"></div>
              <p>熱門餐飲</p>
            </FoodArea>
          </div>
        </>
      )}

      {status === "首頁二" && (
        <>
          <div className="d-none d-lg-block">
            <FoodArea blur={blur} api={api[1]}>
              <div className="square me-2"></div>
              <p>熱門美食</p>
            </FoodArea>
            <FoodArea blur={blur} api={api[2]}>
              <div className="square me-2"></div>
              <p>推薦住宿</p>
            </FoodArea>
          </div>
          <div className="d-block d-lg-none">
            <FoodArea blur={blur} api={rwdApi[1]}>
              <div className="square me-2"></div>
              <p>熱門美食</p>
            </FoodArea>
            <FoodArea blur={blur} api={rwdApi[2]}>
              <div className="square me-2"></div>
              <p>推薦住宿</p>
            </FoodArea>
          </div>
        </>
      )}

      {status === "連結" && (
        <>
          <FoodArea api={api[3]}>
            <div className="triangle me-2"></div>
            <p>{city[0]}</p>
          </FoodArea>
          <div className="changeButtonArea d-flex justify-content-between">
            <button
              onClick={pageMinus}
              className="changePageButtonLeft d-flex justify-content-center align-items-center"
            >
              <div className="insideLeft"></div>
            </button>
            <div className=" PageNumber">{page}</div>
            <button
              onClick={pagePlus}
              className="changePageButtonRight d-flex justify-content-center align-items-center"
            >
              <div className="insideRight"></div>
            </button>
          </div>
        </>
      )}
      {status === "搜尋" && <>
       <SearchArea searchDisplayData={searchDisplayData} secondDisplayData={secondDisplayData} />
      </>}
    {status === "loading" &&
    <Lottie  options={defaultOptions}
        height={200}
        width={200}/>
     }
     {status ==="首頁三"&&
     <>
     <TrafficHeader setStepDisplay={setStepDisplay}/>
     <Traffic stepDisplay={stepDisplay} />
     </>}
      <Footer blur={blur} />
    </div>
  );
};
export default Home;
