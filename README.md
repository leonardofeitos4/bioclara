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
│   ├── procedimentos.js  lista de procedimentos + seletor "o que te incomoda"
│   └── testimonials.js   depoimentos
├── chatbot/
│   ├── config.js       nome da assistente e velocidade de digitação
│   ├── flows.js        árvore de conversa
│   └── engine.js       motor de renderização do chat
├── assets/
│   ├── img/            fotos da Clara e casos de antes e depois
│   └── logos/          logos originais (PDF)
├── docs/
│   └── PENDENCIAS.md   ⚠️ o que ainda falta a Clara informar
├── tudosobreclara/     material bruto enviado pela Clara
└── _referencia/        protótipo original do biolink (não usado em produção)
```

## Onde mexer

**Trocar WhatsApp, Instagram, endereço ou horários:** só em `data/site.js`.
Nenhum número ou @ está escrito no HTML — o `app.js` preenche tudo no carregamento
a partir dos atributos `data-wa`, `data-href` e `data-txt`.

**Adicionar um procedimento:** novo item no array `PROCEDIMENTOS` em
`data/procedimentos.js`. Ele aparece sozinho nos chips da home e na aba
correspondente da página de procedimentos.

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

## Antes de publicar

Ver `docs/PENDENCIAS.md`. Os dados de contato e endereço ainda são provisórios.
