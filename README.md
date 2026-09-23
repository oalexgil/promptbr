# PromptBR

Portal brasileiro de **prompts, conteúdo prático e educação aplicada em inteligência artificial**, construído como produto web estático de baixo custo.

O projeto reúne uma biblioteca aberta com **145+ prompts em português**, artigos, ferramentas e newsletter, com foco em tornar casos de uso de IA mais acessíveis para quem trabalha, estuda ou cria conteúdo.

**Site:** https://brprompt.tec.br

> **Status:** produto público em evolução. O repositório concentra a aplicação web, conteúdo editorial e estrutura de publicação.

## Objetivo

Grande parte do conteúdo técnico sobre IA nasce em inglês e costuma exigir que o usuário descubra sozinho como transformar conceitos em instruções úteis.

O PromptBR foi criado para reduzir essa barreira com três camadas:

1. **biblioteca pesquisável de prompts**;
2. **conteúdo editorial sobre ferramentas e aplicações de IA**;
3. **distribuição recorrente por newsletter**.

## O que o produto entrega

- biblioteca organizada por categorias;
- busca e filtros para localizar prompts;
- cópia rápida dos prompts;
- artigos sobre automação, LLMs, produtividade e ferramentas;
- páginas dedicadas a ferramentas e casos de uso;
- newsletter integrada ao ecossistema do projeto;
- estrutura preparada para SEO e publicação independente;
- experiência responsiva em HTML, CSS e JavaScript sem framework obrigatório.

## Arquitetura

O PromptBR foi intencionalmente mantido simples:

```text
conteúdo + interface estática
          ↓
HTML / CSS / JavaScript
          ↓
GitHub Pages
          ↓
domínio próprio
```

Esse formato reduz dependências de infraestrutura, custo de hospedagem e complexidade operacional.

## Estrutura do repositório

O projeto cresceu para além da estrutura inicial e atualmente inclui páginas editoriais, biblioteca, ferramentas e ativos públicos.

```text
promptbr/
├── index.html
├── prompts.html
├── ferramentas.html
├── newsletter.html
├── artigos e guias
├── global.css
├── global.js
├── assets/
├── CNAME
├── ads.txt
└── README.md
```

## Stack

`HTML5` · `CSS3` · `JavaScript` · `GitHub Pages` · `SEO técnico` · `Beehiiv`

## Decisões de produto

### Site estático antes de backend complexo

A primeira versão prioriza distribuição, navegação e conteúdo. Um backend permanente não é necessário para servir a maior parte da experiência.

### Conteúdo como parte do produto

O repositório não é apenas uma landing page. A biblioteca, os artigos e as ferramentas formam o próprio produto e servem como laboratório de conteúdo assistido por IA, arquitetura web simples e aquisição orgânica.

### IA como apoio, não como selo de qualidade

Prompts e artigos precisam ser revisados como conteúdo editorial. O uso de IA no processo de criação não elimina a necessidade de validação humana, atualização e contexto.

## Desenvolvimento local

Não há etapa obrigatória de build.

```bash
python3 -m http.server 8000
```

Depois, abra:

```text
http://localhost:8000
```

## Publicação

O domínio `brprompt.tec.br` é configurado por `CNAME` e a aplicação é compatível com publicação via GitHub Pages.

Alterações no conteúdo são versionadas no mesmo repositório, mantendo histórico editorial e técnico.

## Limitações atuais

- conteúdo e páginas ainda seguem uma arquitetura predominantemente estática;
- parte do catálogo exige revisão periódica por mudanças rápidas em modelos e produtos de IA;
- não há CMS dedicado;
- automações editoriais e métricas não estão centralizadas neste repositório;
- a estrutura de testes ainda pode evoluir.

## Próximos passos

- separar conteúdo estruturado da apresentação;
- automatizar validação de links e páginas;
- ampliar testes de navegação e acessibilidade;
- criar pipeline editorial versionado;
- consolidar analytics e métricas de conteúdo;
- documentar critérios de revisão e atualização dos prompts.

## Sobre este projeto

O PromptBR demonstra uma abordagem de **produto digital enxuto**, combinando desenvolvimento web, publicação contínua, conteúdo sobre IA e experimentação de aquisição orgânica com infraestrutura simples.
