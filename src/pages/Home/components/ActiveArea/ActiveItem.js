import React from 'react'
import redIcon from '../images/redIcon.png'
export default function ActiveItem(props) {

    const {Description,Name,Picture,modalRef,Address,WebsiteUrl,Phone,setModalData,City,setBlur}=props
    
    function openModal(){
        setModalData({Address,Description,Name,Picture,WebsiteUrl,Phone})
        modalRef.current.openModal()
        setBlur(true)
    }

    // const newPicture = Picture.PictureUrl1
    return (
        <div className="col-12 col-md-6 d-flex justify-content-center ">
            <div className="activeItem d-flex">
                    <div className="activeImage">
                <a href={WebsiteUrl}>
                        <img src={Picture.PictureUrl1||'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="" />
                </a>
                    </div>
                <div className="activeText d-flex flex-column justify-content-between align-items-center">
                    <h4>{Name}</h4>
                    <p className="Description">{Description.replace("&nbsp;","")}</p>
                <div className="addressArea">
                    <div className="address d-flex justify-content-start align-items-center">
                        <div className="redIcon">
                        <img src={redIcon} alt=""/>
                        </div>
                        <div className="addressName">{City}</div>
                    </div>
                    <div className="button">
                        <button onClick={openModal}>活動詳情</button>
                    </div>
                </div>
                </div>
                <div className="shadow1"></div>
                <div className="shadow2"></div>
            </div>
        </div>
    )
}
