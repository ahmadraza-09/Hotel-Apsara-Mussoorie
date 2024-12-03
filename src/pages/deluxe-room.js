import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import DeluxeRoomComp from '../components/deluxe-room-comp'
import SocialMediaFixed from '../components/socialmedia-fixed'

const DeluxeRoom = () => {

    return (
        <>
            <Helmet>
                <title>Deluxe Room - Hotel Apsara Mussoorie</title>
                <meta name="description" content="Book the Deluxe Room at Hotel Apsara Mussoorie for a luxurious stay with stunning views, elegant decor, and all modern amenities to make your stay memorable." />
                <meta name="keywords" content="Deluxe room hotel Mussoorie, luxury hotel room, deluxe room booking, stay at Hotel Apsara Mussoorie, hotel rooms in Mussoorie, best deluxe room in Mussoorie" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/rooms/deluxe-room" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Room",
                        "name": "Deluxe Room",
                        "url": "https://www.hotelapsaramussoorie.com/rooms/deluxe-room",
                        "telephone": "+91 8743000182"

                    })}
                </script>
            </Helmet>




            {<TopBanner />}
            {<Navbar />}
            {<DeluxeRoomComp />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default DeluxeRoom
