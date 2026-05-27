// Hero.jsx · headline + iridescent perspective lockup card with tweak controls
const { useRef, useState, useEffect } = React;

const HERO_CARD_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tiltDeg": 5,
  "scale": 1.02,
  "glowSize": 55,
  "glowIntensity": 0.55,
  "iridescence": 0.25,
  "iridescenceHue": 38,
  "noise": 0.36,
  "edgeHighlight": 0.7,
  "border": 0.55
} /*EDITMODE-END*/;

function IridescentLockupCard({ src, alt, t }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 100;
    const y = (e.clientY - r.top) / r.height * 100;
    setPos({ x, y, active: true });
  }
  function onLeave() {setPos((p) => ({ ...p, active: false }));}

  const rotY = (pos.x - 50) / 50 * t.tiltDeg;
  const rotX = -((pos.y - 50) / 50) * t.tiltDeg;
  const scale = pos.active ? t.scale : 1;

  // Two complementary iridescence hues offset around the gold base
  const h1 = t.iridescenceHue;
  const h2 = (t.iridescenceHue + 60) % 360;
  const h3 = (t.iridescenceHue + 180) % 360;

  return (
    <div className="iri-stage">
      {/* Halo behind the card — lives OUTSIDE the card so the card's edges
               stay perfectly symmetric. The halo is intentionally larger and blurred. */}
      <div
        className="iri-stage__halo"
        style={{
          opacity: pos.active ? 0.7 : 0.28,
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%,
            rgba(226, 192, 120, 0.55) 0%,
            rgba(169, 121, 64, 0.30) 28%,
            rgba(169, 121, 64, 0) 65%)`
        }}>
      </div>

      <div
        ref={ref}
        className={`iri-card ${pos.active ? 'is-active' : ''}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          transform: `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`,
          '--mx': `${pos.x}%`,
          '--my': `${pos.y}%`,
          '--border-a': t.border
        }}>
        
        {/* the actual lockup */}
        <img src={src} alt={alt} className="iri-card__image" draggable="false" />

        {/* edge highlight (top hairline gold bloom) */}
        <div className="iri-card__edge" style={{ opacity: t.edgeHighlight }}></div>

        {/* iridescent conic sheen — clipped to card */}
        <div
          className="iri-card__iri"
          style={{
            opacity: t.iridescence,
            background: `conic-gradient(from ${pos.x * 3.6}deg at var(--mx) var(--my),
              hsla(${h1}, 80%, 60%, 0.55) 0deg,
              hsla(${h2}, 70%, 55%, 0.0) 90deg,
              hsla(${h3}, 65%, 60%, 0.45) 180deg,
              hsla(${h1}, 80%, 70%, 0.0) 270deg,
              hsla(${h1}, 80%, 60%, 0.55) 360deg)`
          }}>
        </div>

        {/* specular cursor glow */}
        <div
          className="iri-card__spec"
          style={{
            opacity: pos.active ? t.glowIntensity : 0,
            background: `radial-gradient(circle ${t.glowSize}% at var(--mx) var(--my),
              rgba(255, 220, 160, 0.45) 0%,
              rgba(195, 145, 80, 0.25) 28%,
              rgba(169, 121, 64, 0) 60%)`
          }}>
        </div>

        {/* noise grain */}
        <div className="iri-card__noise" style={{ opacity: t.noise }}></div>
      </div>
    </div>);

}

function Hero() {
  const [t, setTweak] = (window.useTweaks || ((d) => [d, () => {}]))(HERO_CARD_DEFAULTS);
  const isTweaks = !!window.useTweaks;

  return (
    <React.Fragment>
      <section id="hero" className="tp-hero">
        <div className="tp-hero__bg"></div>
        <img className="tp-hero__symbol" src="../../assets/logo-tome-paiva-gold.png" alt="" aria-hidden="true" />
        <div className="tp-container">
          <div className="tp-hero__inner">
            <div className="tp-hero__copy">
              <div className="tp-hero__eyebrow">
                <span style={{ fontSize: "8px" }}>Advogados associados · Campinas / SP</span>
              </div>
              <h1>
                <em>Rigor</em> técnico em<br />cinco frentes do Direito.
              </h1>
              <p style={{ lineHeight: "1.45" }}>
                Tomé &amp; Paiva atua em demandas estratégicas, contenciosas e
                consultivas. Equipe dedicada por área, com acompanhamento
                próximo do cliente.
              </p>
              <div className="tp-hero__cta-row">
                <Button variant="primary" href="#contato" iconRight={<ArrowRight />}>Agendar reunião</Button>
                <Button variant="secondary" href="especialidades.html">Conhecer especialidades</Button>
              </div>
            </div>
            <div className="tp-hero__visual">
              <IridescentLockupCard
                src="../../assets/logo-tome-paiva-full-gold-on-black.jpeg"
                alt="Tomé &amp; Paiva, advogados associados"
                t={t} />
              
            </div>
          </div>
        </div>
      </section>

      {isTweaks && window.TweaksPanel &&
      <window.TweaksPanel>
          <window.TweakSection title="Card iridescente · Hero">
            <window.TweakSlider label="Inclinação (graus)" value={t.tiltDeg} min={0} max={28} step={1} onChange={(v) => setTweak('tiltDeg', v)} />
            <window.TweakSlider label="Escala no hover" value={t.scale} min={1} max={1.12} step={0.01} onChange={(v) => setTweak('scale', v)} />
            <window.TweakSlider label="Tamanho do glow" value={t.glowSize} min={20} max={100} step={1} onChange={(v) => setTweak('glowSize', v)} />
            <window.TweakSlider label="Intensidade do glow" value={t.glowIntensity} min={0} max={1} step={0.05} onChange={(v) => setTweak('glowIntensity', v)} />
            <window.TweakSlider label="Iridescência" value={t.iridescence} min={0} max={1} step={0.05} onChange={(v) => setTweak('iridescence', v)} />
            <window.TweakSlider label="Tom da iridescência" value={t.iridescenceHue} min={0} max={360} step={1} onChange={(v) => setTweak('iridescenceHue', v)} />
            <window.TweakSlider label="Granulação" value={t.noise} min={0} max={0.6} step={0.02} onChange={(v) => setTweak('noise', v)} />
            <window.TweakSlider label="Brilho da borda" value={t.edgeHighlight} min={0} max={1} step={0.05} onChange={(v) => setTweak('edgeHighlight', v)} />
            <window.TweakSlider label="Opacidade da borda" value={t.border} min={0} max={1} step={0.05} onChange={(v) => setTweak('border', v)} />
          </window.TweakSection>
        </window.TweaksPanel>
      }
    </React.Fragment>);

}

window.Hero = Hero;
window.IridescentLockupCard = IridescentLockupCard;