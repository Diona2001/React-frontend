// File: src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.scss';
import bgImage from '../assets/bg-image.jpg';
import {
  FaPlay,
  FaStar,
  FaFileAlt,
  FaBolt,
  FaFingerprint,
  FaLanguage,
} from 'react-icons/fa';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoClick = () => setShowVideo(true);

  return (
    <section className="hero"
    style={{
        backgroundImage: `url(${bgImage})`, // ✅ apply image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
      <div className="hero-content">
        <div className="left">
          <span className="pill">OUTSIDE SAUDI ARABIA</span>
          <h1>Get Your Saudi PCC Online – Fast & Easy</h1>
          <p>
            No need to travel. We do it all directly with the Saudi Police.
            <br />
            Hassle-free process – fast, secure, and fully remote.
          </p>

          <div className="cta-buttons">
            <button className="primary">STEP–BY–STEP PROCESS</button>
            <button>DELIVERY OPTIONS</button>
            <button>WANT HELP FAST?</button>
            <button>WHY CHOOSE HRSTRIDE.COM?</button>
            <button>FAQ</button>
            <button>CONTACT US</button>
          </div>

          <div className="user-review-summary">
            <div className="avatars">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt={`User ${i}`}
                />
              ))}
            </div>
            <div className="text">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#ffc107" />
                ))}
              </div>
              <div className="review-text">
                End-to-end service trusted by <br />
                <strong>500+ professionals worldwide</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          {!isMobile ? (
            <div className="video-thumbnail" onClick={handleVideoClick}>
              <img
                src="https://img.youtube.com/vi/qImKQMXBoZA/maxresdefault.jpg"
                alt="Saudi PCC Video"
              />
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
          ) : (
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/qImKQMXBoZA?autoplay=1&mute=1&loop=1&playlist=qImKQMXBoZA"
                title="Saudi PCC Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* ✅ Updated Feature Icons */}
          <div className="video-features">
            <div className="feature-item">
              <FaFileAlt />
              <span>Saudi PCC Process<br />within Two Days</span>
            </div>
            <div className="feature-item">
              <FaBolt />
              <span>Fast & Reliable<br />Processing</span>
            </div>
            <div className="feature-item">
              <FaFingerprint />
              <span>MOFA Attestation &<br />Fingerprint Support</span>
            </div>
            <div className="feature-item">
              <FaLanguage />
              <span>Arabic to English<br />Translation & Attestation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video for Desktop */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="modal-content">
            <iframe
              src="https://www.youtube.com/embed/qImKQMXBoZA?autoplay=1"
              title="Saudi PCC Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
