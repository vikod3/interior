import { useState, useEffect, useRef, useCallback } from 'react';
import CardOne from './cards/CardOne';
import CardTwo from './cards/CardTwo';
import CardThree from './cards/CardThree';
import CardFour from './cards/CardFour';

const ROOM_IMAGES = {
  card1: {
    day: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913982/room_vy9koe.png',
    night: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913982/room_night_rt10xm.png',
  },
  card2: {
    day: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913983/room2_pihyox.png',
    night: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913982/room2_night_qc4qeq.png',
  },
  card3: {
    day: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913986/room3_ix0ik9.png',
    night: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913984/room3_night_u2hkfr.png',
  },
  card4: {
    day: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913986/room4_r4tdal.png',
    night: 'https://res.cloudinary.com/dgupuutfn/image/upload/v1780913986/room4_night_gfmdal.png',
  },
};

function useArtboardScale(cardRef, artboardRef) {
  const fit = useCallback(() => {
    const card = cardRef.current;
    const artboard = artboardRef.current;
    if (!card || !artboard) return;
    const scale = Math.min(card.clientWidth / 660, card.clientHeight / 836);
    artboard.style.setProperty('--direct-scale', scale);
  }, [cardRef, artboardRef]);

  useEffect(() => {
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [fit]);

  return fit;
}

function NightPhoto({ src, nightSrc, isNight, className, alt = '', style }) {
  const imgRef = useRef(null);
  const currentSrc = isNight ? nightSrc : src;

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    img.style.opacity = '0';
    const reveal = () => { img.style.opacity = '1'; };
    img.addEventListener('load', reveal, { once: true });
    img.src = currentSrc;
    return () => img.removeEventListener('load', reveal);
  }, [currentSrc]);

  return (
    <img
      ref={imgRef}
      className={className}
      src={currentSrc}
      alt={alt}
      style={style}
    />
  );
}

export default function App() {
  const [isNight, setIsNight] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('is-night', isNight);
  }, [isNight]);

  const fitLanding = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.transform = 'none';
    if (window.innerWidth <= 920) return;
    const width = wrap.offsetWidth;
    const height = wrap.offsetHeight;
    if (!width || !height) return;
    const scale = Math.min(window.innerWidth / width, window.innerHeight / height, 1);
    wrap.style.transform = `scale(${scale})`;
  }, []);

  useEffect(() => {
    fitLanding();
    window.addEventListener('resize', fitLanding);
    return () => window.removeEventListener('resize', fitLanding);
  }, [fitLanding]);

  useEffect(() => {
    fitLanding();
  }, [isNight, fitLanding]);

  return (
    <main className="wrap" ref={wrapRef}>
      <div className="theme-toggle">
        <span className="theme-toggle__label">Night</span>
        <button
          className="theme-toggle__switch"
          type="button"
          aria-label="Toggle night mode"
          aria-pressed={isNight}
          onClick={() => setIsNight((v) => !v)}
        />
      </div>

      <header className="head">
        <h1>Design your next room,<br />live, with your studio.</h1>
        <p>From the first sketch to the final finish, the whole design<br />process stays connected on one shared canvas.</p>
      </header>

      <section className="cards">
        <CardOne images={ROOM_IMAGES.card1} isNight={isNight} NightPhoto={NightPhoto} useArtboardScale={useArtboardScale} />
        <CardTwo images={ROOM_IMAGES.card2} isNight={isNight} NightPhoto={NightPhoto} useArtboardScale={useArtboardScale} />
        <CardThree images={ROOM_IMAGES.card3} isNight={isNight} NightPhoto={NightPhoto} useArtboardScale={useArtboardScale} />
        <CardFour images={ROOM_IMAGES.card4} isNight={isNight} NightPhoto={NightPhoto} useArtboardScale={useArtboardScale} />
      </section>
    </main>
  );
}
