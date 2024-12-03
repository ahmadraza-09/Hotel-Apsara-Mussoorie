import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Hotel Apsara Mussoorie</title>
                <meta name="description" content="Get in touch with Hotel Apsara Mussoorie for bookings, inquiries, or general questions. Our team is ready to assist you in planning your perfect stay in Mussoorie." />
                <meta name="keywords" content="Hotel Apsara contact, Mussoorie hotel contact, Mussoorie booking, contact hotel Apsara Mussoorie, inquiries hotel, Mussoorie reservations, hotel support" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/contact" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Contact Us - Hotel Apsara Mussoorie",
                        "url": "https://www.hotelapsaramussoorie.com/contact",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91 8743000182",
                            "contactType": "Customer Service",
                            "areaServed": "IN",
                            "availableLanguage": "English"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "opp. Picture Palace, The Mall Road, Mussoorie",
                            "addressRegion": "Uttarakhand",
                            "postalCode": "248179",
                            "addressCountry": "IN"
                        }
                    })}
                </script>
            </Helmet>
            <TopBanner />
            <Navbar />
            <ContactUs />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default ContactPage;
