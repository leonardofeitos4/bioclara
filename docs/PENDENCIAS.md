# Pendências — informações que faltam da Dra. Clara

Tudo abaixo está com **valor provisório** no código. Assim que a Clara passar os dados
reais, é só editar `data/site.js` (todos os itens marcados com `AJUSTAR`).

## 1. Contato — `data/site.js`

| Campo | Valor atual | O que preciso |
|---|---|---|
| `whatsapp` | `5583999999999` | Número real, só dígitos, com `55` + DDD |
| `instagram` | `draclaradantas` | @ correto, sem o `@` |
| `email` | vazio | E-mail profissional. Se ficar vazio, o card de e-mail some sozinho |

## 2. Consultório — `data/site.js` → `endereco`

- `linha1` — rua, número e sala
- `linha2` — bairro, cidade e UF
- `cidade` — confirmar se é João Pessoa · PB
- `mapsUrl` — link do Google Maps (botão "Abrir no Google Maps"; some se ficar vazio)
- `embed` — o `src` do iframe do Google Maps, para o mapa aparecer na página
- `horarios` — dias e horários reais de atendimento

**Como pegar o embed:** Google Maps → buscar o endereço → Compartilhar →
Incorporar um mapa → copiar só o valor do `src="..."`.

## 3. Depoimentos — `data/testimonials.js`

Os 6 depoimentos de hoje são **provisórios**. Preciso dos reais (print ou texto),
de preferência com autorização da paciente para publicar. Formato de cada item:

```js
{ t: 'texto do depoimento (pode usar <strong>)', a: 'Autoria · Procedimento' }
```

## 4. Antes & depois — `assets/img/`

Estão publicados 2 casos reais (`caso-01.jpeg` contorno mandibular, `caso-02.jpeg`
preenchimento labial). Para adicionar mais:

1. Salvar a imagem em `assets/img/caso-03.jpeg`
2. Duplicar um bloco `.caso` em `index.html`, na página `page-resultados`

Confirmar com a Clara se os dois casos publicados **têm autorização por escrito**.

## 5. Procedimentos — `data/procedimentos.js`

A lista foi montada a partir do que é comum em Harmonização Orofacial.
A Clara precisa confirmar **o que ela realmente faz** — o que entra, o que sai
e se algum nome muda. Cada item tem `nome`, `desc` e `cat`
(`expressao`, `volume` ou `pele`).

## 6. Logo

Os arquivos em `assets/logos/` são PDFs. Para usar a marca no site,
preciso deles em **SVG ou PNG com fundo transparente**.

## 7. CRO

Está como `CROPB 12226`, lido das artes de antes e depois. Confirmar se está correto.
