// Navbar.jsx · fixed top nav with brand mark, divider, links + Especialidades dropdown, CTA, mobile menu
const { useEffect, useState } = React;

function ChevronDown() {
  return (
    <svg className="tp-nav__link-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>);

}

function Navbar({ active = 'home' }) {
  const navRef = React.useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [especOpen, setEspecOpen] = useState(false);

  useEffect(() => {
    // Find the nearest scrollable ancestor (window by default, or the phone
    // screen container when this nav is rendered inside the mobile preview).
    function findScroller(el) {
      let n = el ? el.parentElement : null;
      while (n && n !== document.body) {
        const oy = getComputedStyle(n).overflowY;
        if ((oy === 'auto' || oy === 'scroll') && n.scrollHeight > n.clientHeight) return n;
        n = n.parentElement;
      }
      return window;
    }
    const scroller = findScroller(navRef.current);
    const getY = () => scroller === window ? window.scrollY : scroller.scrollTop;
    const onScroll = () => setScrolled(getY() > 12);
    onScroll();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const specs = window.SPECIALTIES || [];

  return (
    <React.Fragment>
      <header ref={navRef} className={`tp-nav ${scrolled || open ? 'is-scrolled' : ''}`}>
        <div className="tp-nav__inner" style={{ height: "51px" }}>
          <a href="index.html" className="tp-nav__brand">
            <img src="../../assets/logo-tome-paiva-gold.png" alt="Tomé e Paiva" />
            <span className="tp-nav__brand-text">
              <span>TOMÉ</span>
              <span className="tp-amp">&amp;</span>
              <span>PAIVA</span>
            </span>
          </a>
          <span className="tp-nav__divider" aria-hidden="true"></span>
          <nav className="tp-nav__links">
            <a href="index.html#escritorio" className={`tp-nav__link ${active === 'escritorio' ? 'is-active' : ''}`}>Escritório</a>

            <div className="tp-nav__dropdown-wrap"
            onMouseEnter={() => setEspecOpen(true)}
            onMouseLeave={() => setEspecOpen(false)}>
              <a href="especialidades.html"
              className={`tp-nav__link ${active === 'especialidades' ? 'is-active' : ''}`}
              aria-haspopup="true"
              aria-expanded={especOpen}>
                Especialidades
                <ChevronDown />
              </a>
              <div className="tp-nav__dropdown" role="menu">
                {specs.map((s) =>
                <a key={s.id} href={`especialidades.html#${s.id}`} role="menuitem">
                    <span>{s.title}</span>
                    <span className="tp-nav__dropdown-num">{s.num}</span>
                  </a>
                )}
              </div>
            </div>

            <a href="index.html#equipe" className={`tp-nav__link ${active === 'equipe' ? 'is-active' : ''}`}>Equipe</a>
            <a href="index.html#contato" className={`tp-nav__link ${active === 'contato' ? 'is-active' : ''}`}>Contato</a>
          </nav>
          <a href="#contato" className="tp-nav__cta">Agendar reunião</a>
          <button className="tp-nav__mobile-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            {open ?
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg> :

            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            }
          </button>
        </div>
      </header>

      <div className={`tp-mobile-menu ${open ? 'is-open' : ''}`} onClick={(e) => {if (e.target.tagName === 'A') setOpen(false);}}>
        <a href="index.html#escritorio" className={active === 'escritorio' ? 'is-active' : ''}>Escritório</a>
        <a href="especialidades.html" className={active === 'especialidades' ? 'is-active' : ''}>Especialidades</a>
        {/* show specialty sub-items, indented */}
        {specs.map((s) =>
        <a key={s.id} href={`especialidades.html#${s.id}`}
        style={{ paddingLeft: 24, fontSize: 18, color: 'var(--on-surface-variant)' }}>
            {s.num} · {s.title}
          </a>
        )}
        <a href="index.html#equipe" className={active === 'equipe' ? 'is-active' : ''}>Equipe</a>
        <a href="index.html#contato" className={active === 'contato' ? 'is-active' : ''}>Contato</a>
        <a href="#contato" className="tp-mobile-menu__cta">Agendar reunião</a>
      </div>
    </React.Fragment>);

}

window.Navbar = Navbar;