import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import Packages from '../components/packages';

const PackagesPage = () => {
    return (
        <>
            <Helmet>
                <title>Explore Uttarakhand Tour Packages | Hotel Apsara Mussoorie</title>
                <meta name="description" content="Discover exclusive Uttarakhand tour packages from Hotel Apsara Mussoorie. Explore popular destinations like Nainital, Mussoorie, Haridwar, Jim Corbett, Rishikesh, and Kausani. Plan your perfect getaway with us!" />
                <meta name="keywords" content="Uttarakhand tour packages, Delhi to Uttarakhand packages, Nainital tour, Mussoorie tour, Haridwar packages, Jim Corbett safaris, Rishikesh adventure trips, Kausani sightseeing, hotel packages Mussoorie, Uttarakhand travel offers" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/packages" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Explore Uttarakhand Tour Packages | Hotel Apsara Mussoorie",
                        "url": "https://www.hotelapsaramussoorie.com/packages",
                        "telephone": "+91-8743000182",

                    })}
                </script>
            </Helmet>


            <TopBanner />
            <Navbar />
            <Packages />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PackagesPage;
