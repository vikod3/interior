import { useRef } from 'react';

const TEXTURE_FILES = [
  'text (1).png',
  'text (2).png',
  'text (3).png',
  'text (4).png',
  'text (5).png',
  'text (6).png',
  'text (7).png',
  'text (8).png',
  'text (9).png',
];

const PANEL_ROWS = [
  { label: 'Palette', value: 'Warm Organic', hasDots: true, dots: ['#dcc6a2', '#caa97c', '#b8966a', '#a8623a'] },
  { label: 'Wall Finish', value: 'Limestone' },
  { label: 'Sofa Fabric', value: 'Natural Linen' },
  { label: 'Wood Tone', value: 'European Oak' },
];

const SWATCHES = [
  { name: 'Warm Oak', selected: true },
  { name: 'Walnut' },
  { name: 'Natural Linen' },
  { name: 'Travertine' },
  { name: 'Sage Green' },
];

function texturePath(index) {
  return `/assets/section4_textures/${TEXTURE_FILES[index]}`;
}

export default function CardFour({ images, isNight, NightPhoto, useArtboardScale }) {
  const cardRef = useRef(null);
  const artboardRef = useRef(null);
  useArtboardScale(cardRef, artboardRef);

  let texIdx = 0;

  return (
    <div className="card-frame">
      <div className="direct-card" ref={cardRef}>
        <div className="direct-card__artboard" ref={artboardRef}>
          <NightPhoto
            className="direct4-photo"
            src={images.day}
            nightSrc={images.night}
            isNight={isNight}
            alt="Warm organic living room"
          />
          <div className="direct4-grade" />

          <div className="direct4-panel">
            <div className="direct4-panel__head">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z" />
                <path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9z" />
              </svg>
              <span>Style Preview</span>
            </div>

            {PANEL_ROWS.map((row) => {
              const src = texturePath(texIdx++);
              return (
                <div key={row.label} className="direct4-panel__row">
                  <span className="direct4-panel__thumb">
                    <img src={src} alt="" />
                  </span>
                  <span className="direct4-panel__txt">
                    <span className="direct4-panel__label">{row.label}</span>
                    <span className={`direct4-panel__value${row.hasDots ? ' direct4-panel__value--stack' : ''}`}>
                      {row.value}
                      {row.hasDots && (
                        <span className="direct4-dots">
                          {row.dots.map((c) => (
                            <i key={c} style={{ background: c }} />
                          ))}
                        </span>
                      )}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="direct4-swatches">
            <div className="direct4-swatches__row">
              {SWATCHES.map((sw) => {
                const src = texturePath(texIdx++);
                return (
                  <div key={sw.name} className={`direct4-swatch${sw.selected ? ' is-selected' : ''}`}>
                    <span className="direct4-swatch__tile">
                      <img src={src} alt="" />
                    </span>
                    <span className="direct4-swatch__name">{sw.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <svg className="direct4-cursor" viewBox="0 0 24 28" fill="none">
            <path d="M3 2 L3 22 L8.4 16.8 L12 26 L15.6 24.5 L11.9 15.6 L19 15 Z" fill="#fff" stroke="rgba(20,16,30,.45)" strokeWidth="1.1" strokeLinejoin="round" />
          </svg>

          <div className="direct4-footer">
            <div className="direct4-footer__head">
              <span className="direct4-footer__icon" style={{ background: '#b06ad0', color: '#fff', boxShadow: '0 10px 24px -10px rgba(176,106,208,.6)' }}>
                <span className="material-icons">palette</span>
              </span>
              <div className="direct4-footer__title">Explore finishes instantly</div>
            </div>
            <p className="direct4-footer__desc">Swap materials and compare palettes before deciding.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
