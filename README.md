# Tomé & Paiva — Site institucional

Site institucional de **Tomé & Paiva Advocacia** (Campinas/SP). Implementação real do design
"Prestige Legal" (tema escuro, acentos em ouro bronze), construída em **Astro** (saída estática)
para hospedagem na **Hostinger**.

## Estrutura do repositório

```
.
├─ site/               # aplicação Astro (todo o código do site)
│  ├─ public/          # arquivos estáticos servidos como estão (fonts/, assets/, robots.txt, .htaccess)
│  ├─ src/
│  │  ├─ components/   # componentes .astro (Navbar, Hero, About, Specialties, ...) ← markup do <body>
│  │  ├─ data/         # specialties.ts (fonte única das 5 áreas de atuação)
│  │  ├─ layouts/      # BaseLayout.astro (o <head>: SEO, meta, fonts) — vale para todas as páginas
│  │  ├─ pages/        # rotas: index.astro (HOME), especialidades.astro, blog/
│  │  ├─ content/      # posts do blog (Markdown) — Fase B
│  │  └─ styles/       # tokens.css (cores/tipografia) + site.css (componentes)
│  └─ dist/            # SAÍDA GERADA por `npm run build` → index.html etc. (NÃO editar à mão)
├─ design-reference/   # pacote original do Claude Design — referência visual (NÃO editar, NÃO é o site)
└─ brand-source/       # ativos de marca originais (logos, fonts, referências, PDF de identidade)
```

## Onde está o `index.html` que roda o site (leia antes de editar)

Este site é gerado pelo **Astro** — o HTML **não** é escrito à mão num único arquivo. Em vez disso,
cada página é montada a partir de componentes `.astro` e o HTML final é **gerado** no `build`.

| O que você procura | Onde fica |
|---|---|
| **O `index.html` que de fato roda/é publicado** | `site/dist/index.html` — **gerado** por `npm run build`. ⚠️ É reescrito a cada build; editar à mão aqui **se perde** no próximo build. |
| **O código-fonte da home (onde editar de verdade)** | `site/src/pages/index.astro` + os componentes que ela monta em `site/src/components/` (`Navbar.astro`, `Hero.astro`, `About.astro`, …) |
| **Tags no `<head>`** (meta, SEO, scripts de analytics/rastreamento, etc.) | `site/src/layouts/BaseLayout.astro` — vale para **todas** as páginas |
| **Só referência visual** | `design-reference/project/.../index.html` — é o mock original, **não** é o site que roda; mexer aqui não tem efeito nenhum |

**Para adicionar tags no HTML:** edite o **fonte** (`.astro` em `site/src/`), não o `dist/`. Tags de
conteúdo/estrutura vão no componente correspondente em `site/src/components/`; tags de `<head>` vão no
`BaseLayout.astro`. Depois rode `npm run build` para regerar `site/dist/` (é essa pasta que vai para a Hostinger).

## Desenvolvimento

```bash
cd site
npm install      # primeira vez
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera dist/ (arquivos estáticos)
npm run preview  # serve o build de produção localmente
```

## Publicar na Hostinger

1. `cd site && npm run build` — gera a pasta `site/dist/`.
2. Suba **o conteúdo** de `site/dist/` para `public_html/` (Gerenciador de Arquivos do hPanel ou FTP).
3. O `.htaccess` (em `site/public/`, copiado para o build) força HTTPS e define cache/404.

## Como publicar um post no blog

1. Crie um arquivo `site/src/content/blog/meu-post.md`.
2. Preencha o frontmatter: `title`, `description`, `pubDate`, `tags`, e opcionalmente `cover`, `author`, `draft`.
3. Escreva o conteúdo em Markdown abaixo do frontmatter.
4. `npm run build` e publique. O post aparece em `/blog` e nos "últimos artigos" da home.

> A arquitetura de conteúdo é compatível com um CMS visual (Sveltia/Decap) caso o cliente queira
> editar posts por uma interface no futuro — sem retrabalho.

## Créditos

Desenvolvido por [Almeida Escala Digital](https://almeidaescaladigital.com/).
