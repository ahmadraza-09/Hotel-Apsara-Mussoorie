import React from "react";
import "../css/places-to-visit.css";

const PlacesToVisit = () => {
  return (
    <section className="places-to-visit-section">
      <h1 className="swipe">Places To Visit</h1>
      <br />
      <div className="places-to-visit-container">
        <div className="places-to-visit-card places-to-visit-card1 swipe">
          <div className="places-to-visit-card-content">
            <h2>KEMPTY FALLS</h2>
            <p>
              Located around 45 km from Dhanaulti, Kempty Falls is one of the most famous waterfalls in Uttarakhand. The water cascades down from a height of 40 feet, creating a mesmerizing sight. The falls are a popular tourist attraction, and visitors can enjoy swimming and bathing in the pool at the base of the falls. The surrounding area is dotted with small shops and eateries, making it a perfect spot for a day trip.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card2 swipe">
          <div className="places-to-visit-card-content">
            <h2>LAL TIBBA</h2>
            <p>

              Lal Tibba, the highest point in Mussoorie, offers stunning views of the Himalayas, serene sunsets, and peaceful surroundings. Located at 7,500 feet, it features a telescope for close views of peaks like Kedarnath. A tranquil spot, it’s perfect for nature lovers and photographers.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card3 swipe">
          <div className="places-to-visit-card-content">
            <h2>GUN HILL POINT</h2>
            <p>
              Gun Hill Point in Mussoorie offers stunning views of the Himalayas and Doon Valley. Accessible by cable car or a short trek, it’s a serene spot with historical charm, perfect for nature lovers and photographers.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card4 swipe">
          <div className="places-to-visit-card-content">
            <h2>SIR GEORGE EVEREST'S HOUSE</h2>
            <p>
              Sir George Everest's House, near Mussoorie, is a historic site offering panoramic views of the Himalayas and Doon Valley. Once home to the Surveyor General after whom Mount Everest is named, it’s a serene spot for history and nature enthusiasts.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card5 swipe">
          <div className="places-to-visit-card-content">
            <h2>COMPANY GARDEN</h2>
            <p>

              Company Garden, located in Mussoorie, is a vibrant and well-maintained park featuring colorful flowers, fountains, and lush greenery. A popular spot for families, it offers boating, food stalls, and a mini amusement park, making it ideal for a relaxing day out.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card6 swipe">
          <div className="places-to-visit-card-content">
            <h2>CLOUDS END MUSSOORIE</h2>
            <p>
              Clouds End, located at the farthest point of Mussoorie, is a serene retreat surrounded by dense oak and deodar forests. Known for its peaceful atmosphere and stunning views, it marks the geographical end of Mussoorie and is perfect for nature lovers and trekkers.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card7 swipe">
          <div className="places-to-visit-card-content">
            <h2>MALL ROAD</h2>
            <p>

              Mall Road in Mussoorie is the town's bustling hub, lined with shops, cafes, and colonial-era architecture. A popular spot for strolling, it offers souvenirs, local snacks, and scenic views of the valley, making it a must-visit for tourists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesToVisit;
