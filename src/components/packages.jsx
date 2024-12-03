import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/packages.css";
import PackageBanner1 from "../assets/banner/package-banner1.jpg";
import PackageBanner2 from "../assets/banner/package-banner2.jpg";


const Packages = () => {
  const navigate = useNavigate();
  return (
    <section className="packages-section">
      <h1 className="swipe">Corbett Tour Packages</h1>
      <br />
      <div className="packages-container">
        
        <div className="packages-card swipe">
          <div className="packages-card-banner">
            <img src={PackageBanner1} alt="" />
          </div>
          <h3>Uttrakhand Package</h3>
          <div className="packages-card-content">
            <span className="package-price">
              Starting from <span>Rs. 45,700</span>
            </span>
            <ul>
              <li>
                <i class="fa-solid fa-circle-check"></i> <span>No of Guest -</span>02 Adults
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> <span>Duration -</span> 05 Nights / 06 Days
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> <span>Destinations</span> Mussoorie, Haridwar, Rishikesh
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 01 Deluxe Room
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Welcome Drinks on
                Arrival
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Daily Breakfast
                & Dinner
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 02 Nights in Mussoorie
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 01 Night in Haridwar
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 02 Nights in Rishikesh
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Sightseeing as per Itinerary By Individual by Desire 
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Toll Tax & Parking 
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Pickup & Drop from Dehradun By Desire 
              </li>
              
            </ul>
          </div>
          <button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Book Now
          </button>
        </div>
        <div className="packages-card swipe">
          <div className="packages-card-banner">
            <img src={PackageBanner2} alt="" />
          </div>
          <h3>Delhi - Uttrakhand - Delhi</h3>
          <div className="packages-card-content">
            <span className="package-price">
              Starting from <span>Rs. 23,114</span> / person
            </span>
            <ul>
              <li>
                <i class="fa-solid fa-circle-check"></i> <span>No of Guest -</span>09 Adults
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> <span>Duration -</span> 08 Nights / 09 Days
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> <span>Destinations</span> Nainital, Kausani, Jim Corbett, Mussoorie, Haridwar, Rishikesh
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 03 Deluxe Room + 03 Extra Mattress
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Welcome Drinks on
                Arrival
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Daily Breakfast
                & Dinner
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 02 Nights in Nainital
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 01 Night in Kausani
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 01 Night in Jim Corbett
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 02 Night in Mussoorie
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 01 Night in Haridwar
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> 01 Night in Rishikesh
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Sightseeing as per Itinerary By Individual by Tempo Traveller 
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Toll Tax & Parking 
              </li>
              <li>
                <i class="fa-solid fa-circle-check"></i> Pickup & Drop from Delhi By Tempo Traveller
              </li>
              
            </ul>
          </div>
          <button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
