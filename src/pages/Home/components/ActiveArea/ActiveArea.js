import React, { useState, useEffect, useRef } from "react";
import "./activeArea.css";
import { API_GET_ACTIVE } from "../../../../global/constants";
import ActiveItem from "./ActiveItem";
import { getData } from "../../../../global/constants";
import Modal from "../../../../components/Modal/Modal";
import open from "../images/open.png";
import phone from "../images/phone.png";
import redIcon from "../images/redIcon.png";
import free from "../images/free.png";
function ActiveArea({blur,setBlur}) {
  
  const [active, setActive] = useState([
    {
      ID: "",
      Name: "",
      Description: "",
      Location: "",
      Address: "",
      Phone: "",
      Organizer: "",
      StartTime: "",
      EndTime: "",
      Picture: {},
      Position: {
        PositionLon: 0,
        PositionLat: 0,
        GeoHash: "",
      },
    },
  ]);
  const [modalData, setModalData] = useState({
    Picture: { PictureUrl1: "", PictureUrl2: "", PictureUrl3: "" },
  });
  const [slider, setSlider] = useState([0, -100, -200]);
  function leftSlide() {
    if (slider[0] < 200) {
      var newSlider = slider.map((item) => item + 100);
      setSlider(newSlider);
    }
  }
  function rightSlide() {
    if (slider[2] > -200) {
      var newSlider = slider.map((item) => item - 100);
      setSlider(newSlider);
    }
  }
  useEffect(() => {
    getData(API_GET_ACTIVE, setActive);
  }, []);
  const modalRef = useRef();
  return (
    <>
      <Modal ref={modalRef} setBlur={setBlur}>
        <div className="modalContainer">
          <div className="modalImages">
            <div className="modalImage" style={{ right: `${slider[0]}%` }}>
              <img
                src={
                  modalData.Picture.PictureUrl1 ||
                  "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                }
                alt=""
              />
            </div>
            <div className="modalImage2" style={{ right: `${slider[1]}%` }}>
              <img
                src={
                  modalData.Picture.PictureUrl2 ||
                  "https://images.pexels.com/photos/9552182/pexels-photo-9552182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
                alt=""
              />
            </div>
            <div className="modalImage3" style={{ right: `${slider[2]}%` }}>
              <img
                src={
                  modalData.Picture.PictureUrl3 ||
                  "https://images.pexels.com/photos/10096730/pexels-photo-10096730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
                alt=""
              />
            </div>
          </div>
          <div className="buttonArea">
           {slider[0]<200 &&  <div onClick={leftSlide} className="modalLeftButton">
              <div className="left"></div>
            </div>}
            {slider[2]>-200 ? <div onClick={rightSlide} className="modalRightButton">
              <div className="right"></div>
            </div> :<div style={{width:'3.5vw'}}></div> }
            
          </div>
          <h3>{modalData.Name}</h3>
          <p>{modalData.Description}</p>
          <div className="row iconArea">
            <div className="col-7 d-flex justify-content-start align-items-center iconItem">
              <div className="modalIcon1">
                <img src={open} alt="" />
              </div>
              <div>開放式空間，無空間限制</div>
            </div>
            <div className="col-5  d-flex justify-content-start align-items-center iconItem">
              <div className="modalIcon">
                <img src={free} alt="" />
              </div>
              <div>免費</div>
            </div>
            <div className="col-7  d-flex justify-content-start align-items-center iconItem">
              <div className="modalIcon1">
                <img src={redIcon} alt="" />
              </div>
              <div>{modalData.Address}</div>
            </div>
            <div className="col-5  d-flex justify-content-start align-items-center iconItem">
              <div className="modalIcon">
                <img src={phone} alt="" />
              </div>
              <div>{modalData.Phone}</div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={"activeArea "+(blur&& "blurClass")}>
        <div className="d-flex align-items-center  title">
          <div className="triangle me-2"></div>
          <p>熱門活動</p>
        </div>
        <div className="contain">
          <div className=" row ">
            {active.map((item, index) => {
              const {
                City,
                Description,
                Name,
                Picture,
                Location,
                Address,
                WebsiteUrl,
                Phone,
              } = item;
              return (
                <ActiveItem
                  key={index}
                  City={City}
                  Description={Description}
                  Name={Name}
                  Picture={Picture}
                  modalRef={modalRef}
                  index={index}
                  Location={Location}
                  Address={Address}
                  WebsiteUrl={WebsiteUrl}
                  Phone={Phone}
                  setModalData={setModalData}
                  setBlur={setBlur}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ActiveArea;
