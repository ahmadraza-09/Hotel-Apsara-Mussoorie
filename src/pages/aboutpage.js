import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TopBanner from "../components/top-banner";
import SocialMediaFixed from "../components/socialmedia-fixed";
import OurResortValue from "../components/our-resort-value";
import IntroductionSection from "../components/introduction-section";


const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Hotel Apsara Mussoorie | Comfort & Elegance in the Queen of Hills</title>
                <meta name="description" content="Learn about Hotel Apsara Mussoorie, your perfect retreat offering cozy accommodations, warm hospitality, and breathtaking views of the Himalayas. Experience unmatched comfort in the heart of Mussoorie." />
                <meta name="keywords" content="About Hotel Apsara Mussoorie, Mussoorie hotel story, best hospitality Mussoorie, luxury hotel in Mussoorie, scenic hotel Mussoorie, Mussoorie accommodations, family-friendly hotels in Mussoorie" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/about" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "About Us - Hotel Apsara Mussoorie | Comfort & Elegance in the Queen of Hills",
                        "url": "https://www.hotelapsaramussoorie.com",
                        "telephone": "+91-8743000182"
                    })}
                </script>
            </Helmet>




            <TopBanner />
            <Navbar />
            <IntroductionSection />
            <OurResortValue />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default AboutPage;
