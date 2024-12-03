import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import CancellationPolicy from '../components/cancellation-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'

const CancellationPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Cancellation Policy - Hotel Apsara Mussoorie</title>
                <meta name="description" content="Learn about the cancellation policy for bookings at Hotel Apsara Mussoorie. Know the terms, deadlines, and conditions for modifying or canceling your reservation." />
                <meta name="keywords" content="Hotel Apsara Mussoorie cancellation policy, hotel booking cancellation terms, cancellation policy, Mussoorie hotel cancellation, Hotel Apsara booking rules" />
                <link rel="canonical" href="https://www.hotelapsaramussoorie.com/cancellation-policy" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Apsara Mussoorie",
                        "url": "https://www.hotelapsaramussoorie.com/cancellation-policy",
                        "telephone": "+91 8743000182"

                    })}
                </script>
            </Helmet>




            {<TopBanner />}
            {<Navbar />}
            {<CancellationPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CancellationPolicyPage
