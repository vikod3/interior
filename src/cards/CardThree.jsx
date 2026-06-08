import { useRef, useEffect } from 'react';

const MASKS = [
  { left: '29.3%', top: '20.5%', width: '39.5%', height: '6.5%' },
  { left: '17.5%', top: '31.5%', width: '4.5%', height: '10%' },
  { left: '17%', top: '46%', width: '3.5%', height: '10.5%' },
];

function computeMaskImgStyle(mask) {
  const x = parseFloat(mask.left);
  const y = parseFloat(mask.top);
  const w = parseFloat(mask.width);
  const h = parseFloat(mask.height);
  if (!w || !h) return {};
  return {
    width: `${10000 / w}%`,
    height: `${10000 / h}%`,
    left: `${(-x / w) * 100}%`,
    top: `${(-y / h) * 100}%`,
  };
}

export default function CardThree({ images, isNight, NightPhoto, useArtboardScale }) {
  const cardRef = useRef(null);
  const artboardRef = useRef(null);
  useArtboardScale(cardRef, artboardRef);

  return (
    <div className="card-frame">
      <div className="direct-card" ref={cardRef}>
        <div className="direct-card__artboard" ref={artboardRef}>
          <NightPhoto
            className="direct3-photo"
            src={images.day}
            nightSrc={images.night}
            isNight={isNight}
            alt="Top-down living room layout"
          />
          <div className="direct3-grade" />

          <div className="direct3-sel">
            <div className="direct3-sel__box" />
            <span className="direct3-sel__handle tl" />
            <span className="direct3-sel__handle tr" />
            <span className="direct3-sel__handle bl" />
            <span className="direct3-sel__handle br" />
            <span className="direct3-sel__tag">8&#x2032; x 10&#x2032;</span>
          </div>

          {MASKS.map((mask, i) => (
            <div key={i} className="direct3-mask" style={mask}>
              <NightPhoto
                className="direct3-mask__img"
                src={images.day}
                nightSrc={images.night}
                isNight={isNight}
                style={computeMaskImgStyle(mask)}
              />
            </div>
          ))}

          <div className="direct3-footer">
            <div className="direct3-footer__head">
              <span className="direct3-footer__icon" style={{ background: '#f2a83a', color: '#3a2406', boxShadow: '0 10px 24px -10px rgba(242,168,58,.6)' }}>
                <span className="material-icons">square_foot</span>
              </span>
              <div className="direct3-footer__title">Plan with real-world scale</div>
            </div>
            <p className="direct3-footer__desc">Place furniture, check dimensions,<br />and visualize how everything fits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
