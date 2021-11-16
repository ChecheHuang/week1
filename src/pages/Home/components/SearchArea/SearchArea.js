import React from 'react'
import SearchOutput from './SearchOutput'
import union from "../images/Union.png"
import "./searchArea.css"
function SearchArea(props) {
    const { searchDisplayData } = props
    console.log(searchDisplayData)
    return (
        <>
            {searchDisplayData.displayData.length > 0 ? (<SearchOutput searchDisplayData={searchDisplayData} />) : <div className="searchIndexZero">
                <div class="union">
                    <img src={union} alt="" />
                </div>
                <div>
                    <h3>Oops!</h3>
                    <p>很抱歉，找不到符合此搜尋相關的內容</p>
                </div>
            </div>
            }

        </>
    )
}
export default SearchArea