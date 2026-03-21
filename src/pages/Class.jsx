import React from 'react';
import "../css/Class.css";

// Importing the images directly
import heroImg from "../images/IMG_7115.webp";
import scrap1 from '../images/IMG_7117.webp';
import scrap2 from '../images/IMG_7119.webp';
import scrap3 from '../images/IMG_7120.webp';
// import houseImg from '../images/IMG_7118.webp'; // Kept in case you use it for flashbacks
import oldalum from "../images/oldalum.webp";
// import modernImg from '../images/IMG_7121.webp';

import BarryGoldwater from '../images/sigs/BarryGoldwater.webp';
import GroverCleveland from '../images/sigs/GroverCleveland.webp';
import BradPitt from '../images/sigs/BradPitt.webp';
import JohnWayne from '../images/sigs/JohnWayne.webp';
import DavidLetterman from '../images/sigs/DavidLetterman.webp';
import LukeBryan from '../images/sigs/LukeBryan.webp';
import DrewBrees from '../images/sigs/DrewBrees.webp';
import MikeDitka from '../images/sigs/MikeDitka.webp';

import FlashBack1 from '../images/flashbacks/IMG_7142.webp';
import FlashBack2 from '../images/flashbacks/IMG_7143.webp';
import FlashBack3 from '../images/flashbacks/IMG_7144.webp';
import FlashBack4 from '../images/flashbacks/IMG_7145.webp';
import FlashBack5 from '../images/flashbacks/IMG_7146.webp';
import FlashBack6 from '../images/flashbacks/IMG_7147.webp';

import flash1 from '../images/flashbacks/flash1.webp';
import flash2 from '../images/flashbacks/flash2.webp';
import flash3 from '../images/flashbacks/flash3.webp';

const AlumniPage = () => {
  // Array of scrapbook images
  const galleryImages = [
    { src: scrap1, alt: "Brothers hanging out" },
    { src: scrap2, alt: "Water fights and horses" },
    { src: scrap3, alt: "Formal events" },
    { src: oldalum, alt: "Alumni Next to Car" },
    // {src: flash1, alt: "Historical Chapter Moment"},
    //     {src: flash2, alt: "Historical Chapter Moment"},
    //     {src: flash3, alt: "Historical Chapter Moment"},
  ];

  // Data for the Significant Sigs Wall of Fame
//  const significantSigs = [
//     {
//       name: "Barry Goldwater",
//       category: "Politics",
//       bio: "Five-term U.S. Senator from Arizona and 1964 Presidential Candidate. A defining figure in Arizona history.",
//       image: BarryGoldwater
//     },
//     {
//       name: "Grover Cleveland",
//       category: "Politics",
//       bio: "The 22nd and 24th President of the United States. The only president in American history to serve two non-consecutive terms.",
//       image: GroverCleveland
//     },
//     {
//       name: "Brad Pitt",
//       category: "Entertainment",
//       bio: "Two-time Academy Award-winning actor and producer, known for his roles in Fight Club, Once Upon a Time in Hollywood, and Moneyball.",
//       image: BradPitt
//     },
//     {
//       name: "John Wayne",
//       category: "Entertainment",
//       bio: "Academy Award-winning actor and enduring American icon, starring in legendary Westerns like True Grit and The Searchers.",
//       image: JohnWayne
//     },
//     {
//       name: "David Letterman",
//       category: "Entertainment",
//       bio: "Iconic television host and comedian who hosted late-night talk shows for 33 years, redefining the genre.",
//       image: DavidLetterman
//     },
//     {
//       name: "Luke Bryan",
//       category: "Entertainment",
//       bio: "One of the most successful country music artists of the 2010s and 2020s, with dozens of number-one hits.",
//       image: LukeBryan
//     },
//     {
//       name: "Drew Brees",
//       category: "Sports",
//       bio: "Super Bowl XLIV Champion and MVP. One of the most prolific passers in NFL history.",
//       image: DrewBrees
//     },
//     {
//       name: "Mike Ditka",
//       category: "Sports",
//       bio: "Pro Football Hall of Famer. Won Super Bowls as both a player and head coach of the Chicago Bears.",
//       image: MikeDitka
//     }
//   ];

  // Data for Alumni Flashbacks
  // Replace the placeholder URLs with your imported images when ready
  const flashbacks = [
    { src: flash1, alt: "Historical Chapter Moment" },
    { src: FlashBack1, alt: "Vintage House" },
    { src: FlashBack2, alt: "Pool Area" },
    { src: flash2, alt: "Historical Chapter Moment" },
    { src: FlashBack3, alt: "Skateboarding at the House" },
    { src: FlashBack4, alt: "Old House Front" },
    { src: flash3, alt: "Historical Chapter Moment" },
    { src: FlashBack5, alt: "House Exterior" },
    { src: FlashBack6, alt: "A Mountain View" },
  ];

  return (
    <div className="alumni-page">
        
        {/* 1. Hero Section */}
        <section className="alumni-hero" style={{ backgroundImage: `url(${heroImg})` }}>
            <div className="alumni-hero__overlay">
                <h1 className="alumni-hero__title">From 34 E, 7th Street to the Plex</h1>
                <p className="alumni-hero__subtitle">
                    Honoring our roots, celebrating lifelong bonds, and preserving the traditions that built us.
                </p>
            </div>
        </section>

        {/* 2. Auto-Scrolling Scrapbook Gallery */}
        <section className="scrapbook-gallery">
            <h2 className="scrapbook-gallery__title">From the Archives</h2>
            <p className="scrapbook-gallery__swipe-indicator">Swipe to view more &rarr;</p>
            <div className="scrapbook-gallery__container">
                <div className="scrapbook-gallery__track">
                    {[...galleryImages, ...galleryImages].map((img, index) => (
                        <div className="scrapbook-gallery__item" key={index}>
                            <img src={img.src} alt={img.alt} className="scrapbook-gallery__image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Wall of Fame Section */}
        <section className="wall-of-fame">
            {/* <div className="wall-of-fame__header">
                <h2 className="wall-of-fame__title">Significant Sigs</h2>
                <p className="wall-of-fame__subtitle">Our brotherhood spans the nation, counting some of history's most notable leaders, entertainers, and athletes among our ranks.</p>
            </div> */}
            
            {/* <div className="sig-grid">
                {significantSigs.map((sig, index) => (
                    <div className="sig-card" key={index}>
                        <div className="sig-card__image-wrapper">
                            <img loading="lazy" src={sig.image} alt={sig.name} className="sig-card__image" />
                            <span className="sig-card__category">{sig.category}</span>
                        </div>
                        <div className="sig-card__content">
                            <h3 className="sig-card__name">{sig.name}</h3>
                            <p className="sig-card__bio">{sig.bio}</p>
                        </div>
                    </div>
                ))}
            </div> */}

          {/* --- NEW: Standalone Flashbacks Section --- */}
        <section className="flashbacks-section">
            <div className="container">
                <div className="flashbacks-header">
                    <h2 className="flashbacks-title">Chapter Flashbacks</h2>
                    <p className="flashbacks-subtitle">Moments from the Epsilon Upsilon history books.</p>
                </div>

                <div className="flashbacks-masonry">
                    {flashbacks.map((item, index) => (
                        <div className="flashback-masonry-item" key={index}>
                            <img loading="lazy" src={item.src} alt={item.alt} className="flashback-masonry-img" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        </section>

        {/* 4. Lifelong Bonds & Active Alumni (Present Day) */}
        {/* <section className="alumni-engagement">
            <div className="alumni-engagement__media">
                <img loading='lazy' src={modernImg} alt="Sigma Chi Michael F. Haley Memorial Dinner" className="alumni-engagement__image" />
            </div>
            <div className="alumni-engagement__content">
                <h2 className="alumni-engagement__title">Lifelong Bonds & Active Alumni</h2>
                <p className="alumni-engagement__text">
                    Graduation isn't the end; it's the beginning of a lifetime of brotherhood. Our alumni network remains highly active, gathering for tailgates, annual retreats, and memorial dinners to honor brothers who have passed.
                </p>
                <p className="alumni-engagement__text">
                    Stay connected, and help us ensure the next generation of brothers receives the same incredible experience we did.
                </p>
                <div className="alumni-engagement__actions">
                    <a href="/contact" className="alumni-engagement__button alumni-engagement__button--primary">Stay In The Loop</a>
                    <a href="/donate" className="alumni-engagement__button alumni-engagement__button--secondary">Donate to the Chapter</a>
                </div>
            </div>
        </section> */}

    </div>
  );
};

export default AlumniPage;