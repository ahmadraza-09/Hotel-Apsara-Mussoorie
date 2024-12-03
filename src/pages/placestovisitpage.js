import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import PlacesToVisit from '../components/places-to-visit';

const PlacesToVisitPage = () => {
    return (
        <>
            <Helmet>
                <title>Places to Visit in Mussoorie - Explore Attractions with Hotel Apsara</title>
                <meta name="description" content="Discover the best tourist attractions in Mussoorie, including Kempty Falls, Lal Tibba, Gun Hill Point, Sir George Everest's House, Company Garden, Clouds End, and Mall Road. Explore the beauty of the Queen of Hills." />
                <meta name="keywords" content="places to visit in Mussoorie, Kempty Falls, Lal Tibba, Gun Hill Point, Sir George Everest's House, Company Garden, Clouds End, Mall Road, Mussoorie tourist attractions, Mussoorie sightseeing, Queen of Hills" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/places-to-visit" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TouristDestination",
                        "name": "Mussoorie",
                        "url": "https://www.hotelapsaramussoorie.com/places-to-visit",
                        "hasPart": [
                            {
                                "@type": "LandmarksOrHistoricalBuildings",
                                "name": "Kempty Falls",
                                "description": "A scenic waterfall and popular picnic spot in Mussoorie."
                            },
                            {
                                "@type": "LandmarksOrHistoricalBuildings",
                                "name": "Lal Tibba",
                                "description": "The highest point in Mussoorie, offering breathtaking views of the Himalayas."
                            },
                            {
                                "@type": "LandmarksOrHistoricalBuildings",
                                "name": "Gun Hill Point",
                                "description": "A historical point and a must-visit spot for panoramic views of Mussoorie."
                            },
                            {
                                "@type": "LandmarksOrHistoricalBuildings",
                                "name": "Sir George Everest's House",
                                "description": "The residence of the famous surveyor George Everest, surrounded by mesmerizing views."
                            },
                            {
                                "@type": "Park",
                                "name": "Company Garden",
                                "description": "A beautifully maintained garden with a variety of flora and recreational activities."
                            },
                            {
                                "@type": "LandmarksOrHistoricalBuildings",
                                "name": "Clouds End Mussoorie",
                                "description": "A serene spot marking the end of Mussoorie with lush greenery and tranquility."
                            },
                            {
                                "@type": "Place",
                                "name": "Mall Road",
                                "description": "The bustling heart of Mussoorie, ideal for shopping and dining."
                            }
                        ]
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <PlacesToVisit />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PlacesToVisitPage;
