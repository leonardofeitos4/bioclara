# Biolink — Dra. Clara Dantas

Página de links da Dra. Clara Dantas, cirurgiã-dentista especializada em
Harmonização Orofacial. HTML, CSS e JavaScript puros — sem build, sem dependências.

Para rodar, basta abrir `index.html` no navegador (ou servir a pasta:
`python -m http.server 8000`).

## Estrutura

```
index.html              todas as telas (home + subpáginas), em uma SPA sem framework
├── css/
│   ├── main.css        tokens de design, reset, sistema de páginas, componentes
│   ├── home.css        capa, links, carrossel, seletor, depoimentos, rodapé
│   ├── pages.css       subpáginas (quem sou, procedimentos, resultados, local)
│   └── chat.css        assistente "Evo"
├── js/
│   └── app.js          hidratação, navegação, abas, ripple
├── data/
│   ├── site.js         ⭐ configuração central: contato, redes, endereço, horários
│   ├── procedimentos.js  procedimentos, categorias e seletor "o que te incomoda"
│   └── testimonials.js   depoimentos
├── chatbot/
│   ├── config.js       nome da assistente e velocidade de digitação
│   ├── flows.js        árvore de conversa
│   └── engine.js       motor de renderização do chat
├── assets/img/         só o que vai ao ar: 4 fotos, 2 casos e a logo em PNG
├── docs/
│   ├── PENDENCIAS.md   ⚠️ o que ainda falta a Clara informar
│   └── prototipo-original.html   protótipo de referência, fora do site
└── tudosobreclara/     material bruto da Clara: fotos originais e logos em PDF
```

`assets/` contém apenas arquivos que o site realmente carrega. Todo o material
bruto (fotos originais, logos em PDF) fica em `tudosobreclara/` — as imagens em
`assets/img/` são cópias renomeadas de lá, e os dois PNGs da logo foram gerados a
partir de `tudosobreclara/logo_CD_simbolo.pdf` e `logo_CD_horizontal.pdf`.

## Onde mexer

**Trocar WhatsApp, Instagram, endereço ou horários:** só em `data/site.js`.
Nenhum número ou @ está escrito no HTML — o `app.js` preenche tudo no carregamento
a partir dos atributos `data-wa`, `data-href` e `data-txt`.

**Adicionar um procedimento:** novo item no array `PROCEDIMENTOS` em
`data/procedimentos.js`. Ele aparece sozinho nos chips da home e na aba
correspondente da página de procedimentos. Criar uma entrada em `CATEGORIAS`
gera a aba e o painel novos automaticamente — não se mexe no HTML.

**Adicionar um depoimento:** novo item no array `tdata` em `data/testimonials.js`.

**Mexer no chat:** cada resposta é uma entrada em `flows` (`chatbot/flows.js`), com
`msg` e `chips`. Um chip com `f` navega para outro fluxo; um chip com `wa` abre o
WhatsApp.

**Trocar uma foto:** substituir o arquivo em `assets/img/` mantendo o nome.

## Cuidados de conteúdo

Área da saúde tem regra: nada de prometer resultado, dar diagnóstico pelo chat ou
publicar preço fechado. Os textos atuais seguem isso — valores sempre caem no
"passado individualmente após a avaliação", e as imagens de antes e depois trazem o
aviso de que resultados variam e de que há autorização da paciente.

## Deploy

Hospedado na Vercel (`bioclara.vercel.app`), a partir do branch `main` deste
repositório. Não há passo de build: a Vercel serve os arquivos como estão.

O Web Analytics está ativo pela tag no fim do `index.html`
(`/_vercel/insights/script.js`) — é a forma indicada para site estático, sem npm
nem React. Essa rota só existe quando servida pela Vercel; rodando local ela dá
404 e o navegador ignora, sem quebrar nada.

## Antes de publicar

Ver `docs/PENDENCIAS.md`. Os dados de contato e endereço ainda são provisórios.
