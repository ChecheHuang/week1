import SearchOutputItem from "./SearchOutputItem";
import { useState,useEffect } from "react";
import { PostalCode } from "../../../../global/PostalCode";

function SearchOutput(props) {
  const { blur, searchDisplayData } = props;
  const [page, setPage] = useState(1);
  const pageItem = 10;
  useEffect(()=>{
    setPage(1)
  },[searchDisplayData])
  function pagePlus() {
    setPage(page + 1);
  }
  function pageMinus() {
    const newPage = page-1
    if(newPage>0){
      setPage(newPage);
    }
  }
  function int(s) {
    if (!s) {
      return 0;
    } else {
      return s;
    }
  }
  var PostalCodeData = [];
  PostalCode.forEach((item) => {
    item.districts.forEach((item) => {
      PostalCodeData.push([{ zip: item.zip }, { name: item.name }]);
    });
  });

  return (
    <>
      <div className={"foodArea " + (blur && " blurClass")}>
        <div className="d-flex align-items-center mb-3  title">
          {searchDisplayData.city !== "" && (
            <>
              {" "}
              <div className="triangle me-2"></div>
              <p>{searchDisplayData.city}</p>
            </>
          )}
        </div>
        <div className="d-flex align-items-center  title">
          {searchDisplayData.searchTitle === "活動" && (
            <>
              <div className="square me-2"></div>
              <p>熱門活動</p>
            </>
          )}
          {searchDisplayData.searchTitle === "景點" && (
            <>
              <div className="square me-2"></div>
              <p>推薦景點</p>
            </>
          )}
          {searchDisplayData.searchTitle === "美食" && (
            <>
              <div className="square me-2"></div>
              <p>熱門美食</p>
            </>
          )}
          {searchDisplayData.searchTitle === "住宿" && (
            <>
              <div className="square me-2"></div>
              <p>推薦住宿</p>
            </>
          )}
          {searchDisplayData.searchTitle === "美食住宿" && (
            <>
              <div className="square me-2"></div>
              <p>美食住宿</p>
            </>
          )}
          {searchDisplayData.searchTitle === "景點活動" && (
            <>
              <div className="square me-2"></div>
              <p>景點活動</p>
            </>
          )}
        </div>
        <div className="foodItemArea">
          {searchDisplayData.displayData
            .slice((page - 1) * pageItem, page * pageItem)
            .map((item, index) => {
              const { Name, Picture, City, ZipCode } = item;
              var Town = PostalCodeData.find((item) => {
                return item[0].zip === ZipCode;
              });
              if (int(Town) !== 0) {
                Town = Town[1].name;
              }
              return (
                <SearchOutputItem
                  key={index}
                  Name={Name}
                  Picture={Picture}
                  City={City}
                  Town={Town}
                />
              );
            })}
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
        </div>
      </div>
    </>
  );
}
export default SearchOutput;
