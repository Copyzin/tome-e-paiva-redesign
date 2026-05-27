// Contact.jsx — contact section with info + form
function ContactInfoRow({ icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper href={href} className="tp-contact__info-row" style={href ? {textDecoration: 'none'} : null}>
      <span className="tp-contact__info-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <div>
        <div className="tp-contact__info-label">{label}</div>
        <div className="tp-contact__info-value">{value}</div>
      </div>
    </Wrapper>
  );
}

const ICONS = {
  pin:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.36 1.85.68 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.27a2 2 0 0 1 2.11-.45c.88.32 1.79.55 2.73.68A2 2 0 0 1 22 16.92Z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>`,
  mail:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>`,
  globe:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>`,
};

function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section id="contato" className="tp-section tp-contact">
      <div className="tp-container">
        <div className="tp-section__header">
          <div className="tp-section__eyebrow">Contato</div>
          <h2 className="tp-section__title">Agende uma <em>reunião</em>.</h2>
          <p className="tp-section__lede">
            Primeira conversa sem compromisso, reservada e técnica. Responda
            em até um dia útil.
          </p>
        </div>
        <div className="tp-contact__grid">
          <div className="tp-contact__info">
            <ContactInfoRow icon={ICONS.pin}      label="Endereço" value="Rua Dona Ana Eufrosina, nº 54, Sala 1. Jardim Brasil, Campinas/SP. CEP 13073-023" />
            <ContactInfoRow icon={ICONS.phone}    label="Telefone" value="(19) 3324 3864" href="tel:+551933243864" />
            <ContactInfoRow icon={ICONS.whatsapp} label="WhatsApp" value="(19) 98978 6826" href="https://wa.me/5519989786826" />
            <ContactInfoRow icon={ICONS.mail}     label="E-mail"   value="david.tome@tomepaivaadvogados.com.br" href="mailto:david.tome@tomepaivaadvogados.com.br" />
            <ContactInfoRow icon={ICONS.globe}    label="Site"     value="tomepaivaadvogados.com.br" href="https://tomepaivaadvogados.com.br" />
          </div>

          {submitted ? (
            <div className="tp-contact__form" style={{justifyContent: 'center', alignItems: 'center', minHeight: 360}}>
              <div className="tp-section__eyebrow">Mensagem recebida</div>
              <div style={{fontWeight: 300, fontSize: 28, lineHeight: 1.2, color: 'var(--on-surface)', marginTop: 12, marginBottom: 8, textAlign: 'center'}}>
                Obrigado pelo contato.
              </div>
              <p style={{fontSize: 15, lineHeight: '24px', color: 'var(--on-surface-variant)', textAlign: 'center', maxWidth: 320}}>
                Retornaremos em até um dia útil.
              </p>
            </div>
          ) : (
            <form className="tp-contact__form" onSubmit={handleSubmit}>
              <div className="tp-form-field">
                <label htmlFor="nome">Nome completo</label>
                <input id="nome" type="text" placeholder="Como devemos chamar você" required />
              </div>
              <div className="tp-form-field">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="tp-form-field">
                <label htmlFor="tel">Telefone (opcional)</label>
                <input id="tel" type="tel" placeholder="(19) 99999 9999" />
              </div>
              <div className="tp-form-field">
                <label htmlFor="msg">Descreva brevemente a demanda</label>
                <textarea id="msg" placeholder="Contexto, prazo, partes envolvidas" required />
              </div>
              <Button variant="primary" iconRight={<ArrowRight />}>Enviar mensagem</Button>
              <div style={{fontSize: 11, color: 'var(--on-surface-muted)', lineHeight: '18px'}}>
                Ao enviar, você concorda com nossa política de privacidade.
                Suas informações são confidenciais.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
