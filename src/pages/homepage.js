import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import HeroSection from '../components/hero-section';
import IntroductionSection from '../components/introduction-section';
import OurResortValue from '../components/our-resort-value';
import ExploreRoomsSection from '../components/explore-rooms-section';
import Testimonial from '../components/testimonial';
import Services from '../components/services';



const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Hotel Apsara Mussoorie | Best Hotel in Mussoorie with Scenic Views</title>
                <meta name="description" content="Welcome to Hotel Apsara Mussoorie, your perfect retreat in the Queen of Hills. Enjoy cozy rooms, warm hospitality, and stunning views of the Himalayas. Book your stay now!" />
                <meta name="keywords" content="Hotel Apsara Mussoorie, best hotel in Mussoorie, hotels in Mussoorie, Mussoorie accommodation, scenic hotel Mussoorie, luxury hotels in Mussoorie, Mussoorie resort with view" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Apsara Mussoorie - Your Gateway to the Queen of Hills",
                        "url": "https://www.hotelapsaramussoorie.com",
                        "telephone": "+91-8743000182"
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <HeroSection />
            <IntroductionSection />
            <OurResortValue />
            <Services />
            <ExploreRoomsSection />
            <Testimonial />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
