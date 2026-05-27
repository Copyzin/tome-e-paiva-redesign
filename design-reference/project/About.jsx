// About.jsx — "O Escritório" institutional section with quote
function About() {
  return (
    <section id="escritorio" className="tp-section tp-about" style={{ padding: "64px 0px" }}>
      <div className="tp-container">
        <div className="tp-about__grid">
          <div className="tp-about__copy">
            <div className="tp-section__eyebrow">Sobre o escritório</div>
            <h2 style={{ margin: "0px 0px 43px" }}>Direito conduzido com <em>técnica</em>, discrição e presença.</h2>
            <p>
              Fundado em Campinas, o Tomé &amp; Paiva nasce da convicção de que
              cada demanda exige escuta atenta, leitura técnica precisa e
              estratégia desenhada caso a caso.
            </p>
            <p>
              Atendemos pessoas físicas e jurídicas em cinco áreas do Direito,
              combinando contencioso de alta complexidade com consultoria
              preventiva. Acompanhamento próximo do início ao fim.
            </p>
          </div>
          <blockquote className="tp-about__quote">
            "A justiça é a constante e perpétua vontade de dar a cada um o que é seu."
            <cite>Ulpiano · Digesto 1.1.10</cite>
          </blockquote>
        </div>
      </div>
    </section>);

}

window.About = About;