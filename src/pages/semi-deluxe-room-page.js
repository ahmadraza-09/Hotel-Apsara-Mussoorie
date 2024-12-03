import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SemiDeluxeRoom from '../components/semi-deluxe-room'


const SemiDeluxeRoomPage = () => {

    return (
        <>
            <Helmet>
                <title>Semi Deluxe Room - Hotel Apsara Mussoorie</title>
                <meta name="description" content="Book the Semi Deluxe Room at Hotel Apsara Mussoorie for an affordable yet luxurious stay with beautiful views, cozy interiors, and all essential amenities." />
                <meta name="keywords" content="Semi deluxe room Mussoorie, affordable luxury room, semi deluxe room booking, stay at Hotel Apsara Mussoorie, hotel rooms in Mussoorie, semi deluxe accommodation" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/rooms/semi-deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Semi Deluxe Room",
                        "url": "https://www.hotelapsaramussoorie.com/rooms/semi-deluxe-room",
                        "telephone": "+91 8743000182",

                    })}
                </script>
            </Helmet>




            {<TopBanner />}
            {<Navbar />}
            {<SemiDeluxeRoom />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SemiDeluxeRoomPage
