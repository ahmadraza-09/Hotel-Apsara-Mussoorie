import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/explore-rooms-section.css";
import RoomCard from "./room-card";
import DeluxeRoom from "../assets/room/deluxe-room/1.jpg"; // Add more images if needed
import SemiDeluxeRoom from "../assets/room/semi-deluxe-room/1.jpg"; // Add more images if needed

const ExploreRoomsSection = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      image: DeluxeRoom,
      title: "Deluxe Room",
      description:
        "The Deluxe Room at Hotel Apsara offers a cozy retreat with modern amenities, plush bedding, and stunning views of the surrounding mussoorie, ensuring a comfortable and memorable stay.",
      price: 3999,
    },
    {
      id: 2,
      image: SemiDeluxeRoom,
      title: "Semi Deluxe Room",
      description:
        "We ensure a luxurious mussoorie experience with well-equipped rooms, scenic views, and the best of forests, wildlife, and rivers. Hotel Apsara Mussoorie is perfect for fun with friends, family, and groups.",
      price: 4999,
    },
  ];

  return (
    <section className="explore-rooms-section">
      <div className="explore-rooms-header">
        <div className="explore-rooms-header-left swipe">
          <h2>Explore Our Rooms</h2>
          <h4>Choose a room according to your budget</h4>
        </div>
        <div className="explore-rooms-header-right swipe-right">
          <button
            onClick={() => {
              navigate("/rooms");
            }}
          >
            View All Rooms <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="explore-rooms-cards swipe">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            description={room.description}
            price={room.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreRoomsSection;
