import { useRef } from 'react';

export default function CardOne({ images, isNight, NightPhoto, useArtboardScale }) {
  const cardRef = useRef(null);
  const artboardRef = useRef(null);
  useArtboardScale(cardRef, artboardRef);

  return (
    <div className="card-frame">
      <div className="direct-card" ref={cardRef}>
        <div className="direct-card__artboard" ref={artboardRef}>
          <NightPhoto
            className="direct-card__photo"
            src={images.day}
            nightSrc={images.night}
            isNight={isNight}
            alt="Living room interior"
          />
          <div className="direct-card__grade" />

          <div className="direct-note">
            <span className="direct-note__tape" />
            <div className="direct-note__head">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17v5" />
                <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
              </svg>
              <span>Layout Review</span>
            </div>
            <hr className="direct-note__rule" />
            <div className="direct-note__body">Move sofa 18&rdquo; left<br />for better flow.</div>
          </div>

          <div className="direct-bubble">Float the sofa toward the window?</div>

          <svg className="direct-cursor" viewBox="0 0 24 28" fill="none">
            <path d="M3 2 L3 22 L8.4 16.8 L12 26 L15.6 24.5 L11.9 15.6 L19 15 Z" fill="#fff" stroke="rgba(20,16,30,.45)" strokeWidth="1.1" strokeLinejoin="round" />
          </svg>

          <div className="direct-nametag">Jake</div>

          <div className="direct-footer">
            <div className="direct-footer__head">
              <span className="direct-footer__icon" style={{ background: '#4f86c6', color: '#fff', boxShadow: '0 10px 24px -10px rgba(79,134,198,.6)' }}>
                <span className="material-icons">groups</span>
              </span>
              <div className="direct-footer__title">Design the room together</div>
            </div>
            <p className="direct-footer__desc">Pin ideas and nudge furniture with your studio on the same live canvas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
