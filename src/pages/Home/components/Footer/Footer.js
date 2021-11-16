import React from 'react'
import "./footer.css"
function Footer({blur}) {
    return (
        <footer>
            <div className={"footerText "+(blur&& " blurClass")}>Taiwan Tourguide © Code:Carl /Design:KT</div>
        </footer>
    )
}
export default Footer