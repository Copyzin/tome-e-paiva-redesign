// SpecialtyDetail.jsx — full row for /especialidades page
function SpecialtyDetail({ spec }) {
  return (
    <article id={spec.id} className="tp-spec-row">
      <div className="tp-spec-row__num">{spec.num}</div>
      <div className="tp-spec-row__body">
        <h2>{spec.title}</h2>
        <p>{spec.long}</p>
        <ul className="tp-spec-row__list">
          {spec.bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
      </div>
      <aside className="tp-spec-row__aside">
        <div className="tp-spec-row__aside-eyebrow">{spec.aside.eyebrow}</div>
        <h4>{spec.aside.title}</h4>
        <p>{spec.aside.body}</p>
        <a className="tp-spec-card__cta" href="index.html#contato" style={{marginTop: 8}}>
          Falar com a equipe
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </aside>
    </article>
  );
}

window.SpecialtyDetail = SpecialtyDetail;
