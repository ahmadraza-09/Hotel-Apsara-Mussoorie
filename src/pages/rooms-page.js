import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import ExploreRoomsSection from '../components/explore-rooms-section'
import SocialMediaFixed from '../components/socialmedia-fixed'
import Services from '../components/services';

const RoomsPage = () => {
    return (
        <>
            <Helmet>
                <title>Rooms at Hotel Apsara Mussoorie | Comfortable & Luxurious Stays in the Queen of Hills</title>
                <meta name="description" content="Explore the range of rooms at Hotel Apsara Mussoorie, including Deluxe, Super Deluxe, and Family Suites. Each room is designed for comfort and offers stunning views of Mussoorie's natural beauty." />
                <meta name="keywords" content="Hotel Apsara Mussoorie rooms, Deluxe Room Mussoorie, Super Deluxe Room Mussoorie, Family Suite Mussoorie, luxury rooms Mussoorie, Mussoorie hotel accommodations, scenic stays in Mussoorie" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/rooms" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Rooms at Hotel Apsara Mussoorie | Comfortable & Luxurious Stays in the Queen of Hills",
                        "url": "https://www.hotelapsaramussoorie.com/rooms",
                        "telephone": "+91-8743000182",

                    })}
                </script>
            </Helmet>




            {<TopBanner />}
            {<Navbar />}
            {<ExploreRoomsSection />}
            {<Services />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default RoomsPage
