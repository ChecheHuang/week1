import React from "react";
import "./header.css";
import search from "../images/search.png";
import Vector from "../images/Vector.png";
function Header(props) {
  const {
    headerBg,
    headerSlier,
    searchItem,
    setSearchItem,
    showOption,
    setShowOption,
    selectCity,
    selectTheme,
    setStatus,
    scenicSpotData,
    restaurantData,
    hotelData,
    activityData,
    searchDisplayData,
    setSearchDisplayData,
  } = props;
  function headerSearch() {
    console.log(searchDisplayData)
    setStatus("loading")
    setTimeout(() => {
      setStatus("搜尋");
    }, 1500)
    setShowOption([false,false]);
    if(scenicSpotData.length>1){
      // eslint-disable-next-line default-case
      switch (searchItem[1]) {
        case "景點":
          
          const scenic1=  scenicSpotData.filter((item,index)=>{
            const inputSearchArea=item.Name|| ""
            return inputSearchArea.indexOf(searchItem[0])>-1 
          })
          const scenic2=  scenic1.filter((item,index)=>{
            const inputSearchArea=item.Address|| ""
            return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
          })
          
          
          if(searchItem[2]==="不分縣市"){
            setSearchDisplayData({"searchTitle":"景點","city":"","displayData":scenic1})
          }else{
            setSearchDisplayData({"searchTitle":"景點","city":searchItem[2],"displayData":scenic2})
          }
          break;
        case "活動":
          const activity1=  activityData.filter((item,index)=>{
            const inputSearchArea=item.Name|| ""
            return inputSearchArea.indexOf(searchItem[0])>-1 
          })
          const activity2=  activity1.filter((item,index)=>{
            const inputSearchArea=item.Address|| ""
            return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
          })
          if(searchItem[2]==="不分縣市"){
            setSearchDisplayData({"searchTitle":"活動","city":"","displayData":activity1})
          }else{
            setSearchDisplayData({"searchTitle":"活動","city":searchItem[2],"displayData":activity2})
          }
          break;
        case "美食":
          const restaurant1=  restaurantData.filter((item,index)=>{
            const inputSearchArea=item.Name|| ""
            return inputSearchArea.indexOf(searchItem[0])>-1 
          })
          const restaurant2=  restaurant1.filter((item,index)=>{
            const inputSearchArea=item.Address|| ""
            return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
          })
          if(searchItem[2]==="不分縣市"){
            setSearchDisplayData({"searchTitle":"美食","city":"","displayData":restaurant1})
          }else{
            setSearchDisplayData({"searchTitle":"美食","city":searchItem[2],"displayData":restaurant2})
          }
          break;
        case "住宿":
          const hotel1=  hotelData.filter((item,index)=>{
            const inputSearchArea=item.Name|| ""
            return inputSearchArea.indexOf(searchItem[0])>-1 
          })
          const hotel2=  hotel1.filter((item,index)=>{
            const inputSearchArea=item.Address|| ""
            return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
          })
          if(searchItem[2]==="不分縣市"){
            setSearchDisplayData({"searchTitle":"住宿","city":"","displayData":hotel1})
          }else{
            setSearchDisplayData({"searchTitle":"住宿","city":searchItem[2],"displayData":hotel2})
          }
          break;
        case "類別":
          if(headerBg==="header"){
            //活動篩選搜尋
            const activity1=  activityData.filter((item,index)=>{
              const inputSearchArea=item.Name|| ""
              return inputSearchArea.indexOf(searchItem[0])>-1 
            }) 
            //活動篩選縣市
            const activity2=  activity1.filter((item,index)=>{
              const inputSearchArea=item.Address|| ""
              return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
            })
            //景點篩選
            const scenic1=  scenicSpotData.filter((item,index)=>{
              const inputSearchArea=item.Name|| ""
              return inputSearchArea.indexOf(searchItem[0])>-1 
            })
            // 景點篩選城市
            const scenic2=  scenic1.filter((item,index)=>{
              const inputSearchArea=item.Address|| ""
              return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
            })

            if(searchItem[2]==="不分縣市"){
              setSearchDisplayData({"searchTitle":"景點活動","city":"","displayData":[...activity1,...scenic1]})
            }else{
              setSearchDisplayData({"searchTitle":"景點活動","city":searchItem[2],"displayData":[...activity2,...scenic2]})
            }
            
            
          }
          if(headerBg==="header2"){
            //美食篩選
            const restaurant1=  restaurantData.filter((item,index)=>{
              const inputSearchArea=item.Name|| ""
              return inputSearchArea.indexOf(searchItem[0])>-1 
            })
            const restaurant2=  restaurant1.filter((item,index)=>{
              const inputSearchArea=item.Address|| ""
              return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
            })
           //住宿篩選
            const hotel1=  hotelData.filter((item,index)=>{
              const inputSearchArea=item.Name|| ""
              return inputSearchArea.indexOf(searchItem[0])>-1 
            })
            const hotel2=  hotel1.filter((item,index)=>{
              const inputSearchArea=item.Address|| ""
              return inputSearchArea.indexOf(searchItem[2].replace('台','臺'))>-1 
            })
            if(searchItem[2]==="不分縣市"){
              setSearchDisplayData({"searchTitle":"美食住宿","city":"","displayData":[...restaurant1,...hotel1]})
            }else{
              setSearchDisplayData({"searchTitle":"美食住宿","city":searchItem[2],"displayData":[...restaurant2,...hotel2]})
            }
          }
          break;
      }
    }
    }
    
  
  //設定下拉選單顯示
  function handleShowOption() {
    const newShowOption = [...showOption];
    newShowOption[0] = !newShowOption[0];
    setShowOption(newShowOption);
  }
  function handleShowCityOption() {
    const newShowOption = [...showOption];
    newShowOption[1] = !newShowOption[1];
    setShowOption(newShowOption);
  }

  //設定選單取值
  function handleSelectValue(item) {
    const newSearch = [...searchItem];
    newSearch[1] = item;
    setSearchItem(newSearch);
  }
  function handleCityValue(item) {
    const newSearch = [...searchItem];
    newSearch[2] = item;
    setSearchItem(newSearch);
  }
  function searchInput(e) {
    const newSearch = [...searchItem];
    newSearch[0] = e.target.value;
    setSearchItem(newSearch);
  }

  return (
    <>
      {/* RWD版 */}
      <div className="row rwdHeader ">
        <div className="col-10 pe-0 mb-2">
          <input
            value={searchItem[0]}
            onChange={searchInput}
            className="searchInput "
            type="text"
            placeholder="搜尋關鍵字"
          />
        </div>
        <div className="col-2 pe-0 mb-2 ">
          <button className="selectButton" type="button">
            <div className="selectIcon">
              <img src={Vector} alt="selectIcon" />
            </div>
          </button>
        </div>
        <div className="selectArea  col-10 d-flex justify-content-between pe-0">
          <div onClick={handleShowOption} className="select">
            <div className="selectItem category ">
              <div className="selectTitle category">{searchItem[1]}</div>

              <div className="dropIcon"></div>
            </div>
            <div className={"option " + (showOption[0] && "active")}>
              {selectTheme.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      handleSelectValue(item);
                    }}
                    className="optionItem"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div onClick={handleShowCityOption} className="select">
            <div className="selectItem city">
              <div className="selectTitle category">{searchItem[2]}</div>
              <div className="dropIcon"></div>
            </div>
            <div className={"option " + (showOption[1] && "active")}>
              {selectCity.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      handleCityValue(item);
                    }}
                    className="optionItem"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-2 pe-0 submitButtonArea">
          {/* rwd送出 */}
          <div onClick={headerSearch} className="submitButton">送出</div>

          {/* 正常搜尋 */}
          <button onClick={headerSearch} className="searchButton ">
            <div className="searchIcon">
              <img src={search} alt="searchIcon" />
            </div>
          </button>
        </div>
      </div>
      {/* 正常版 */}
      <div className={headerBg}>
        <div className="headerContainer ">
          {headerSlier}
          <div className="headerInner">
            <h1>
              Welc<span className="textCircle"></span>me t
              <span className="textSquare"></span>&nbsp;
              <span>Taiwan</span>
              <span className="textTriangle"></span>
            </h1>

            <p>台北、台中、台南、屏東、宜蘭.....遊遍台灣</p>
            <div className="row ">
              <div className="col-10 pe-0 mb-2">
                <input
                  value={searchItem[0]}
                  onChange={searchInput}
                  className="searchInput "
                  type="text"
                  placeholder="搜尋關鍵字"
                />
              </div>
              <div className="col-2 pe-0 mb-2">
                <button className="selectButton" type="button">
                  <div className="selectIcon">
                    <img src={Vector} alt="selectIcon" />
                  </div>
                </button>
              </div>
              <div className="selectArea col-10 d-flex justify-content-between pe-0">
                <div onClick={handleShowOption} className="select">
                  <div className="selectItem ">
                    <div className="selectTitle category">{searchItem[1]}</div>
                    <div className="dropIcon"></div>
                  </div>
                  <div className={"option " + (showOption[0] && "active")}>
                    {selectTheme.map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleSelectValue(item);
                          }}
                          className="optionItem"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div onClick={handleShowCityOption} className="select">
                  <div className="selectItem city">
                    <div className="selectTitle category">{searchItem[2]}</div>
                    <div className="dropIcon"></div>
                  </div>
                  <div className={"option " + (showOption[1] && "active")}>
                    {selectCity.map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleCityValue(item);
                          }}
                          className="optionItem"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-2 pe-0 ">
                <button onClick={headerSearch} className="searchButton ">
                  <div className="searchIcon">
                    <img src={search} alt="searchIcon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow1"></div>
        <div className="shadow2"></div>
      </div>
    </>
  );
}
export default Header;
