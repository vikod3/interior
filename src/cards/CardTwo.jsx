import { useRef } from 'react';

export default function CardTwo({ images, isNight, NightPhoto, useArtboardScale }) {
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
          <div className="direct2-grade" />

          <div className="direct2-glass">
            <div className="direct2-glass__title">Living Room Collaboration</div>
            <div className="direct2-glass__sub">Live workspace with your studio</div>
            <hr className="direct2-glass__rule" />

            <div className="direct2-stats">
              <div className="direct2-stat">
                <div className="direct2-stat__label">Layout progress</div>
                <div className="direct2-progress">
                  <div className="direct2-progress__track">
                    <span className="direct2-progress__seg is-on" />
                    <span className="direct2-progress__seg is-on" />
                    <span className="direct2-progress__seg is-on" />
                    <span className="direct2-progress__seg" />
                  </div>
                  <span className="direct2-progress__pct">75%</span>
                </div>
              </div>
              <div className="direct2-stats__div" />
              <div className="direct2-stat">
                <div className="direct2-stat__label">Proposal status</div>
                <div className="direct2-stat__small">Current direction</div>
                <div className="direct2-stat__accent">Warm Minimal</div>
              </div>
            </div>

            <hr className="direct2-glass__rule" />

            <div className="direct2-ov__label">Design overview</div>
            <div className="direct2-ov">
              <div className="direct2-ov__cell">
                <span className="direct2-ov__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="1.5" />
                    <path d="M3 11h7" /><path d="M10 3v18" /><path d="M10 14h11" /><path d="M16 14v7" />
                  </svg>
                </span>
                <div className="direct2-ov__name">Layout flow</div>
                <div className="direct2-ov__val">Optimized</div>
              </div>
              <div className="direct2-ov__div" />
              <div className="direct2-ov__cell">
                <span className="direct2-ov__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
                    <path d="M3 13a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3h10v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5H3z" />
                    <path d="M6 18v2" /><path d="M18 18v2" />
                  </svg>
                </span>
                <div className="direct2-ov__name">Furniture fit</div>
                <div className="direct2-ov__val">92%</div>
              </div>
              <div className="direct2-ov__div" />
              <div className="direct2-ov__cell">
                <span className="direct2-ov__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="8" height="8" rx="1.6" />
                    <rect x="13" y="3" width="8" height="8" rx="1.6" />
                    <rect x="3" y="13" width="8" height="8" rx="1.6" />
                    <rect x="13" y="13" width="8" height="8" rx="1.6" />
                  </svg>
                </span>
                <div className="direct2-ov__name">Material palette</div>
                <div className="direct2-ov__val">Coordinated</div>
              </div>
            </div>
          </div>

          <div className="direct-footer">
            <div className="direct-footer__head">
              <span className="direct-footer__icon" style={{ background: '#3fae6b', color: '#fff', boxShadow: '0 10px 24px -10px rgba(63,174,107,.6)' }}>
                <span className="material-icons">construction</span>
              </span>
              <div className="direct-footer__title">Build the room in real time</div>
            </div>
            <p className="direct-footer__desc">Move pieces, explore finishes, and align with your studio on one shared canvas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
