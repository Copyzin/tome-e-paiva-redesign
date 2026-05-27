# Tomé & Paiva — Site institucional

Site institucional de **Tomé & Paiva Advocacia** (Campinas/SP). Implementação real do design
"Prestige Legal" (tema escuro, acentos em ouro bronze), construída em **Astro** (saída estática)
para hospedagem na **Hostinger**.

## Estrutura do repositório

```
.
├─ site/               # aplicação Astro (todo o código do site)
│  ├─ public/          # arquivos estáticos servidos como estão (fonts/, assets/, robots.txt, .htaccess)
│  └─ src/
│     ├─ components/   # componentes .astro (Navbar, Hero, About, Specialties, ...)
│     ├─ data/         # specialties.ts (fonte única das 5 áreas de atuação)
│     ├─ layouts/      # BaseLayout.astro (head, SEO, fonts)
│     ├─ pages/        # rotas: index, especialidades, blog/
│     ├─ content/      # posts do blog (Markdown) — Fase B
│     └─ styles/       # tokens.css (cores/tipografia) + site.css (componentes)
├─ design-reference/   # pacote original do Claude Design — referência visual (NÃO editar)
└─ brand-source/       # ativos de marca originais (logos, fonts, referências, PDF de identidade)
```

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
