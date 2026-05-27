# Tomé e Paiva — Design System

> **"Autoridade elegante"** — escritório de advocacia premium, identidade jurídica moderna, sóbria e seletiva.

Sistema de design para o site institucional de **Tomé e Paiva Advocacia**, baseado no documento de identidade "Prestige Legal" (ver `uploads/Design.md`).

O produto é um site institucional com duas rotas:

1. **`/`** — landing page (hero, sobre, especialidades, equipe, contato, etc.).
2. **`/especialidades`** — página listando as áreas de atuação, na ordem:
   1. Direito do Trabalho
   2. Direito Previdenciário
   3. Famílias e Sucessões
   4. Direito Civil
   5. Direito do Consumidor

Compatível com mobile e desktop. Tema escuro institucional com acentos em ouro bronze.

---

## Sources

- `uploads/Design.md` — documento "Prestige Legal" com tokens completos (cores, tipografia, espaçamento, componentes, motion).
- `uploads/logo upscale tome e paiva.png` → `assets/logo-tome-paiva-gold.png` — símbolo oficial em ouro (escala de justiça + monograma "T"), transparente.
- `uploads/WhatsApp Image 2026-05-25 at 10.40.35 (1).jpeg` → `assets/logo-tome-paiva-full-gold-on-black.jpeg` — lockup completo (símbolo + wordmark "TOMÉ & PAIVA / advogados associados") em ouro sobre preto.
- `uploads/CARIMBO COM LOGO.jpg` → `assets/stamp-mark-black.jpg` — variante monocromática preto sobre branco (carimbo).
- `uploads/CARTÕES.jpg` → `assets/business-card-reference.jpg` — referência de aplicação em cartão de visita.

### Dados institucionais (extraídos do cartão)

- **Razão visual:** Tomé & Paiva — advogados associados
- **Sócio:** David Tomé — OAB/SP 443.938
- **E-mail:** david.tome@tomepaivaadvogados.com.br
- **Site:** www.tomepaivaadvogados.com.br
- **Telefone:** (19) 3324 3864
- **WhatsApp:** (19) 98978 6826
- **Endereço:** Rua Dona Ana Eufrosina, nº 54, Sala 1 — Jardim Brasil — Campinas/SP — CEP: 13073-023

Nenhum codebase ou Figma foi fornecido — o sistema visual é montado a partir do documento de identidade e do logo. Telas do UI kit são interpretações do briefing, não recriações de produto existente.

---

## Index

| Arquivo | O que é |
|---|---|
| `README.md` | Este documento. |
| `SKILL.md` | Manifesto compatível com Agent Skills — instruções para usar este sistema. |
| `colors_and_type.css` | CSS vars: cores, tipografia, espaçamento, motion, radii. Importe em qualquer página. |
| `assets/` | Logos (símbolo + lockup), referência de cartão e carimbo. |
| `fonts/` | Cookie Cutter Culture (display), Montserrat (200/300/400), Cormorant Garamond. |
| `preview/` | Cards individuais que populam a aba Design System (Brand · Colors · Type · Spacing · Components). |
| `ui_kits/website/` | UI kit do site institucional — `index.html` (landing) + `especialidades.html` + componentes JSX. |

---

## Content Fundamentals

A voz de Tomé e Paiva é **institucional, sóbria e em português brasileiro**. O leitor é tratado com formalidade controlada — sem juridiquês excessivo, sem informalidade. A copy comunica **segurança, prestígio e domínio técnico**.

### Voz & tom

- **Pessoa:** terceira pessoa institucional ("o escritório", "nossa equipe") ou segunda pessoa formal ("você"). Nunca "tu", nunca "a gente".
- **Tom:** confiante, técnico-acessível, sem promessas exageradas. Não vende — explica e demonstra autoridade.
- **Comprimento:** frases curtas e diretas. Parágrafos de 2–4 linhas. Headlines com no máximo 8 palavras.
- **Tempo verbal:** presente do indicativo é o padrão. Evitar futuro vago ("vamos resolver").
- **Casing:** Sentence case no corpo, **UPPERCASE com letter-spacing aberto** em labels, eyebrows e botões.
- **Emoji:** **nunca**. Quebra a sobriedade institucional.
- **Ponto final:** sempre em frases completas. Headlines podem dispensar.

### Vocabulário preferido

| Use | Evite |
|---|---|
| "Atuação" | "Serviços" |
| "Áreas de atuação", "Especialidades" | "Produtos", "Soluções" |
| "Cliente", "parte" | "Usuário" |
| "Consultoria jurídica" | "Ajuda legal" |
| "Tese", "demanda", "patrocínio" | "Caso", "lance" |
| "Agendar uma reunião" | "Bater um papo", "marcar um café" |
| "Equipe", "advogados" | "Time", "pessoal" |

### Exemplos de copy

> **Eyebrow:** ÁREAS DE ATUAÇÃO
> **Headline:** Excelência técnica em cinco frentes do Direito.
> **Body:** Atuamos em demandas estratégicas, contenciosas e consultivas, com equipe dedicada por área e acompanhamento próximo do cliente.

> **CTA primário:** AGENDAR REUNIÃO
> **CTA secundário:** CONHECER O ESCRITÓRIO

> **Card de especialidade — Trabalho:**
> "Defesa de direitos trabalhistas, negociações coletivas e contencioso estratégico para empregados e empregadores."

### O que **não** escrever

- "Bora resolver seu problema?" — informal demais.
- "🎯 Foco no resultado" — emoji proibido.
- "O melhor escritório do Brasil!" — autoelogio vazio.
- "Soluções jurídicas inovadoras" — clichê corporativo genérico.

---

## Visual Foundations

### Paleta

| Cor | Hex | Uso |
|---|---|---|
| **Ouro Bronze** | `#A97940` | Cor de marca. Botões primários, linhas finas, ícones, hover. Acento — **não** dominante. |
| **Dourado Claro** | `#E2C078` | Ponto de luz em gradientes e microdetalhes. |
| **Grafite Jurídico** | `#5B5B5F` | Texto auxiliar, divisórias, cards. |
| **Preto Profundo** | `#111111` | Background base. |
| **Off-White** | `#F2F0EC` | Texto sobre fundos escuros. **Nunca branco puro.** |

Toda a paleta vive em `colors_and_type.css` como CSS vars (`--primary`, `--surface`, etc.). Veja `preview/Colors-*.html`.

**Gradiente assinatura** — `linear-gradient(-45deg, #A97940, #C39150, #E2C078)`. Usar em detalhes finos (logo, linhas, CTA premium), **nunca** em grandes áreas ou textos longos.

### Tipografia

- **Wordmark / lockup** — **Montserrat ExtraLight** (200), UPPERCASE, tracking 0.22–0.24em. O "&" entre TOMÉ e PAIVA usa Cormorant Garamond Italic em tom dourado como ornamento.
- **Cookie Cutter Culture** (`fonts/Cookie_Cutter_Culture.otf`) — reservada para o **monograma decorativo** (símbolo da marca), papelaria impressa e aplicações editoriais ornamentais. Não usar em interfaces digitais correntes.
- **Headlines** — Montserrat ExtraLight (200) / Light (300), tracking levemente negativo.
- **Body** — Montserrat Regular (400), line-height generoso (26–30px).
- **Botões/labels** — Montserrat Medium (500) / SemiBold (600), **UPPERCASE**, tracking aberto (0.08–0.14em).
- **Citações editoriais** — Cormorant Garamond Italic, usada com moderação.

### Layout

- Grid 12 colunas, gutter 32px, container 1280px.
- Margens: 64 / 40 / 20 (desktop / tablet / mobile).
- Section gap: **120–160px** vertical. Bastante respiro.
- Mobile empilha verticalmente, mantém respiro generoso, reduz densidade.

### Backgrounds

- **Sempre** dark base. Sem light mode neste sistema.
- Camadas tonais: `#0B0B0B` (mais escuro) → `#111111` (base) → `#151515` / `#1C1C1C` (cards).
- **Imagens** com tratamento dessaturado, contraste controlado, luz quente pontual (dourado/grafite). Texturas: couro escuro, mármore escuro, metal dourado, livros jurídicos, arquitetura.
- **Sem** gradientes coloridos cheios. **Sem** padrões repetitivos lúdicos. **Sem** ilustrações desenhadas à mão.

### Borders, shadows, depth

- **Cards:** fundo `#1C1C1C` ou `#151515`, borda fina `rgba(169,121,64,0.22)`. **Sem** sombra pesada — profundidade vem de tom + borda.
- **Divisórias:** 1px em `rgba(169,121,64,0.18)`.
- **Hover em card:** borda dourada mais presente, transição 220ms ease-out.
- **Shadow só onde necessário:** elementos flutuantes (navbar, modal), com sombra muito espalhada e escura — nunca leve cinza tipo Material.
- **Glassmorphism:** permitido **apenas** em navbar fixa flutuante (blur leve + fundo escuro translúcido).

### Corner radii

Linguagem **retilínea, disciplinada**.

- 0px — divisores, linhas decorativas.
- 2px — elementos premium (cards de destaque).
- 4px — botões, inputs (padrão).
- 6px — cards padrão (máximo).
- **Nunca** acima de 6px. Sem bolhas, sem pills, sem formas orgânicas.

### Motion

- Durações entre **180ms e 280ms**.
- Easing: `cubic-bezier(0.2, 0, 0.2, 1)` (ease-out controlado).
- Hover em botão: leve mudança tonal ou borda; **sem** elevação dramática, sem bouncing.
- Linhas douradas podem aparecer com animação horizontal (slide-in da esquerda).
- **Proibido:** efeitos elásticos, spring, partículas, parallax exagerado.

### Hover / press states

- **Botão primário:** hover → `--primary-bright` (#C39150). Press → escurece para `--primary-container` (#7C5730).
- **Botão secundário (outline):** hover → background `rgba(169,121,64,0.08)`. Press → `rgba(169,121,64,0.16)`.
- **Card:** hover → borda `rgba(169,121,64,0.45)` + transform sutil (`translateY(-2px)`).
- **Link de texto:** hover → cor primária + sublinhado fino dourado.

### Transparência & blur

- **Navbar fixa:** `backdrop-filter: blur(14px)` + `background: rgba(11,11,11,0.72)`.
- **Overlays de imagem (hero):** gradient overlay escuro de baixo para cima, `linear-gradient(to top, rgba(0,0,0,0.85), transparent)`.
- **Não** abusar de blur em outros lugares.

### Layout rules (fixos)

- **Navbar:** fixa no topo, transparente no topo da página, ganha background blur ao rolar.
- **CTA flutuante (mobile):** botão WhatsApp / "Reunião" canto inferior direito, opcional.
- Footer: dark, alto contraste, links em uppercase pequeno.

---

## Iconography

A linguagem de ícone segue o resto do sistema: **traços finos, geométricos, monocromáticos** em ouro bronze ou off-white.

### Sistema usado

Por **não** existir biblioteca proprietária, o sistema adota **Lucide** (`https://unpkg.com/lucide@latest`) como icon font padrão:

- Stroke 1.5–2px, geométrico, traço aberto — alinhado ao briefing ("traços finos, geométricos").
- Tamanho padrão: 20px (inline), 24px (cards), 32px (destaques).
- Cor padrão: `currentColor`; em cards de especialidade, `var(--primary)`.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="scale" class="tp-icon"></i>
<script>lucide.createIcons();</script>
```

**Substituição flagged:** Lucide cobre os ícones jurídicos comuns (`scale`, `gavel`, `briefcase`, `file-text`, `users`, `shield`, `handshake`), mas não há set proprietário de Tomé e Paiva — caso seja desenvolvido, substituir documentando aqui.

### Emoji & unicode

- **Emoji: nunca.**
- Unicode decorativo permitido em casos pontuais (em-dash `—`, bullet `•`, símbolo de seção `§`).
- Marcadores de lista substituem o bullet redondo por **traço fino dourado** ou seta — ver `.tp-list` em `colors_and_type.css` (planejado).

### Logo

`assets/logo-tome-paiva-gold.png` — balança da justiça estilizada com monograma "T" central, em gradiente dourado. PNG com transparência, 1232×835.

- Sobre fundos escuros: usar logo dourado direto.
- Sobre fundos claros (raro): aplicar variante monocromática (a desenvolver).
- Espaço de respiro mínimo: altura do monograma "T".

---

## CAVEATS — pontos para revisar com o cliente

1. ~~**Cookie Cutter Culture** é fonte paga e não disponível em CDN.~~ ✅ Resolvido — arquivo licenciado em `fonts/Cookie_Cutter_Culture.otf`.
2. **Imagens institucionais** (escritório, equipe, detalhes editoriais) **ainda não foram fornecidas**. UI kit usa placeholders escuros texturizados. Será necessário um shoot dirigido (briefing: contraste alto, luz quente pontual, tons dessaturados, dourado/grafite predominantes).
3. **Variantes do logo** — temos apenas a versão dourada gradiente em PNG. Recomenda-se também: SVG vetorial, variante monocromática (off-white sobre escuro), variante reduzida (apenas monograma "T").
4. **Conteúdo real** de cada especialidade ainda é placeholder; recomenda-se reunião com sócios para escrever cada descrição com termos técnicos corretos.
