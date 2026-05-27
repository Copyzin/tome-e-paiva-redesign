// Specialties.jsx — preview grid on landing page (5 cards) + helpers

function LucideIcon({ name, size = 28 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { 'stroke-width': 1.25, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', width: size, height: size },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size]);
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, color: 'var(--primary)' }} aria-hidden="true" />;
}

function SpecialtyCard({ spec, featured = false }) {
  return (
    <a href={`especialidades.html#${spec.id}`} className={`tp-spec-card ${featured ? 'tp-spec-card--featured' : ''}`}>
      <div className="tp-spec-card__num"><span>{spec.num}</span></div>
      <LucideIcon name={spec.iconName} size={32} />
      <h3>{spec.title}</h3>
      <p>{spec.short}</p>
      <span className="tp-spec-card__cta">
        Ver atuação
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </span>
    </a>
  );
}

function SpecialtiesPreview() {
  return (
    <section id="especialidades-preview" className="tp-section">
      <div className="tp-container">
        <div className="tp-section__header">
          <div className="tp-section__eyebrow">Áreas de atuação</div>
          <h2 className="tp-section__title">Cinco frentes do Direito. Uma <em>conduta</em>.</h2>
          <p className="tp-section__lede">
            Equipe dedicada por área, com domínio técnico e leitura estratégica.
            Selecione uma especialidade para conhecer a atuação em detalhe.
          </p>
        </div>
        <div className="tp-specialty-grid">
          {SPECIALTIES.map((s, i) => (
            <SpecialtyCard key={s.id} spec={s} featured={i === 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.SpecialtyCard = SpecialtyCard;
window.SpecialtiesPreview = SpecialtiesPreview;
window.LucideIcon = LucideIcon;
