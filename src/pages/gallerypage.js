import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import OurGallery from '../components/our-gallery';
import SocialMediaFixed from '../components/socialmedia-fixed';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - Hotel Apsara Mussoorie</title>
                <meta name="description" content="Browse through our photo gallery showcasing the stunning views, rooms, amenities, and beautiful landscapes of Hotel Apsara Mussoorie. Experience the charm of Mussoorie in pictures." />
                <meta name="keywords" content="Hotel Apsara gallery, Mussoorie hotel photos, Mussoorie resort images, hotel rooms, Mussoorie sightseeing, beautiful views, hotel amenities, luxury rooms, scenic Mussoorie" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/gallery" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Gallery - Hotel Apsara Mussoorie",
                        "url": "https://www.hotelapsaramussoorie.com/gallery",
                        "telephone": "+91-8743000182"
                    })}
                </script>
            </Helmet>





            <TopBanner />
            <Navbar />
            <OurGallery />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default GalleryPage;
