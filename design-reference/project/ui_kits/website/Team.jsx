// Team.jsx — partner / associate portrait cards
const TEAM = [
  { name: 'David Tomé',  role: 'Sócio fundador', oab: 'OAB/SP 443.938', initial: 'D' },
  { name: 'A. Paiva',    role: 'Sócio fundador', oab: 'OAB/SP',           initial: 'P' },
  { name: 'Equipe associada', role: 'Advogados associados', oab: 'Cinco áreas de atuação', initial: 'T' },
];

function TeamCard({ member }) {
  return (
    <div className="tp-team-card">
      <div className="tp-team-card__portrait">
        <span className="tp-team-card__portrait-initial">{member.initial}</span>
      </div>
      <div className="tp-team-card__body">
        <div className="tp-team-card__role">{member.role}</div>
        <div className="tp-team-card__name">{member.name}</div>
        <div className="tp-team-card__oab">{member.oab}</div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section id="equipe" className="tp-section" style={{background: 'var(--surface-dim)'}}>
      <div className="tp-container">
        <div className="tp-section__header">
          <div className="tp-section__eyebrow">Equipe</div>
          <h2 className="tp-section__title">Acompanhamento <em>próximo</em>, sócio a sócio.</h2>
          <p className="tp-section__lede">
            Cada demanda é conduzida por um sócio responsável, com equipe associada
            dedicada à área. Sem terceirização do contato com o cliente.
          </p>
        </div>
        <div className="tp-team__grid">
          {TEAM.map(m => <TeamCard key={m.name} member={m} />)}
        </div>
      </div>
    </section>
  );
}

window.TeamCard = TeamCard;
window.Team = Team;
