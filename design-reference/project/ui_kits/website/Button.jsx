// Button.jsx — primary / secondary / premium / ghost button
function Button({ variant = 'primary', children, href, icon, iconRight, ...rest }) {
  const cls = `tp-btn tp-btn--${variant}`;
  const content = (
    <React.Fragment>
      {icon && <span className="tp-btn__icon">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="tp-btn__icon">{iconRight}</span>}
    </React.Fragment>
  );
  if (href) return <a className={cls} href={href} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}

// inline arrow used in CTAs
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
);

window.Button = Button;
window.ArrowRight = ArrowRight;
