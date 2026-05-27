// Footer.jsx
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="tp-footer">
      <div className="tp-container">
        <div className="tp-footer__grid">
          <div className="tp-footer__brand">
            <img src="../../assets/logo-tome-paiva-gold.png" alt="Tomé e Paiva" />
            <p>
              Tomé &amp; Paiva, advogados associados.
              Campinas / SP. Atuação em todo o território nacional.
            </p>
          </div>
          <div className="tp-footer__col">
            <h5>Navegação</h5>
            <ul>
              <li><a href="index.html#escritorio">Escritório</a></li>
              <li><a href="especialidades.html">Especialidades</a></li>
              <li><a href="index.html#equipe">Equipe</a></li>
              <li><a href="index.html#contato">Contato</a></li>
            </ul>
          </div>
          <div className="tp-footer__col">
            <h5>Áreas</h5>
            <ul>
              {SPECIALTIES.map(s => (
                <li key={s.id}><a href={`especialidades.html#${s.id}`}>{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="tp-footer__col">
            <h5>Contato</h5>
            <ul>
              <li><a href="tel:+551933243864">(19) 3324 3864</a></li>
              <li><a href="https://wa.me/5519989786826">(19) 98978 6826</a></li>
              <li><a href="mailto:david.tome@tomepaivaadvogados.com.br">david.tome@<br/>tomepaivaadvogados.com.br</a></li>
            </ul>
          </div>
        </div>
        <div className="tp-footer__bottom">
          <div>© {year} TOMÉ &amp; PAIVA ADVOGADOS ASSOCIADOS</div>
          <div>OAB/SP 443.938 · CAMPINAS/SP</div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
