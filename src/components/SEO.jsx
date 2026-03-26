import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, url }) {
    const siteTitle = `${title} | Sigma Chi ASU`; 
    const fullUrl = `https://sigmachiasu.com${url}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Social Media Tags */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />
            
        </Helmet>
    );
}

export default SEO;