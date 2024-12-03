import React from "react";
import "../css/services.css";
import Parking from "../assets/icons/parked-car.png";
import Restaurant from "../assets/icons/restaurant.png";
import Wifi from "../assets/icons/wifi-router.png";
import HouseKeeping from "../assets/icons/vacuum-cleaner.png";
import DoubleBed from "../assets/icons/double-bed.png";
import CCTV from "../assets/icons/cctv.png";
import Guard from "../assets/icons/guard.png";
import Doctor from "../assets/icons/doctor.png"
import FireExtinguishers from "../assets/icons/fire-extinguisher.png"
import Reception from "../assets/icons/reception.png"
import Tv from "../assets/icons/smart-tv.png"
import Newspaper from "../assets/icons/newspaper.png"
import RoomHeater from "../assets/icons/room-heater.png"
import Bathroom from "../assets/icons/bathroom.png"
import Internet from "../assets/icons/wifi-router.png"
import Slippers from "../assets/icons/slippers.png"

const Services = () => {
  return (
    <section className="services-section">
        <h1 className="swipe">OUR SERVICES</h1>
      <div className="services-container">
        <h2>Hotel Facilities</h2>
        <br />
        <div className="services-boxes">
          <div className="service-box swipe">
            <img src={Parking} alt="" />
            <span>Parking Space</span>
          </div>
          <div className="service-box swipe">
            <img src={Guard} alt="" />
            <span>Security Guard</span>
          </div>
          <div className="service-box swipe">
            <img src={Doctor} alt="" />
            <span>Doctor on Call</span>
          </div>
          <div className="service-box swipe">
            <img src={Reception} alt="" />
            <span>Reception</span>
          </div>
          <div className="service-box swipe">
            <img src={FireExtinguishers} alt="" />
            <span>Fire Extinguishers</span>
          </div>
          <div className="service-box swipe">
            <img src={Restaurant} alt="" />
            <span>Restaurant</span>
          </div>
          <div className="service-box swipe">
            <img src={Wifi} alt="" />
            <span>Free Wifi</span>
          </div>
          <div className="service-box swipe">
            <img src={CCTV} alt="" />
            <span>CCTV Security</span>
          </div>
        </div>
      </div>
      <div className="services-container">
        <h2>Room Facilities</h2>
        <br />
        <div className="services-boxes">
          
          <div className="service-box swipe">
            <img src={HouseKeeping} alt="" />
            <span>House Keeping</span>
          </div>
          <div className="service-box swipe">
            <img src={DoubleBed} alt="" />
            <span>Double Bed</span>
          </div>
          <div className="service-box swipe">
            <img src={Tv} alt="" />
            <span>LCD TV</span>
          </div>  
          <div className="service-box swipe">
            <img src={Bathroom} alt="" />
            <span>Attached Bathroom</span>
          </div>
          <div className="service-box swipe">
            <img src={Internet} alt="" />
            <span>Internet Access</span>
          </div>
          <div className="service-box swipe">
            <img src={Slippers} alt="" />
            <span>Slippers</span>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Services;