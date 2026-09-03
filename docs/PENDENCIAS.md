# Pendências, informações que faltam da Dra. Clara

Os itens marcados com ⚠️ ainda estão com **valor provisório** no código. Assim que a
Clara passar os dados reais, é só editar `data/site.js`.

## 1. Contato, `data/site.js`

| Campo | Situação | O que falta |
|---|---|---|
| `whatsapp` | ✅ `5583987564401` — +55 (83) 98756-4401 | — |
| `instagram` | ⚠️ `draclaradantas` (chutado) | O @ correto, sem o `@` |
| `email` | ⚠️ vazio | E-mail profissional. Enquanto ficar vazio, o card de e-mail some sozinho |

## 2. Consultório, `data/site.js` → `endereco`

- `linha1`, rua, número e sala
- `linha2`, bairro, cidade e UF
- `cidade`, confirmar se é João Pessoa · PB
- `mapsUrl`, link do Google Maps (botão "Abrir no Google Maps"; some se ficar vazio)
- `embed`, o `src` do iframe do Google Maps, para o mapa aparecer na página
- `horarios`, dias e horários reais de atendimento

**Como pegar o embed:** Google Maps → buscar o endereço → Compartilhar →
Incorporar um mapa → copiar só o valor do `src="..."`.

## 3. Depoimentos, `data/testimonials.js`

✅ Já estão no ar 2 depoimentos reais. Se a Clara quiser mandar mais, é só somar ao
array — o carrossel se ajusta sozinho. Vale confirmar se ela tem autorização das
pacientes para publicar. Formato de cada item:

```js
{ t: 'texto do depoimento (pode usar <strong>)', a: 'Autoria · Procedimento' }
```

## 4. Pré e pós, `data/casos.js`

Estão publicados 10 casos (`caso-01.jpeg` a `caso-10.jpeg`). Para adicionar mais:

1. Salvar a imagem em `assets/img/caso-11.jpeg`
2. Incluir um objeto novo no array `casos`, em `data/casos.js`

⚠️ Confirmar com a Clara se **todos os 10 casos têm autorização por escrito**
da paciente para publicação. As 8 fotos novas vieram da pasta `fotosnovas`,
sem essa informação junto.

⚠️ Os nomes de procedimento e as observações de cada caso novo (03 a 10) fui
eu que deduzi olhando as fotos: contorno mandibular, harmonização de perfil,
preenchimento labial. **A Clara precisa revisar**, porque só ela sabe o que
foi feito de fato em cada paciente.

## 5. Procedimentos, `data/procedimentos.js`

A lista foi montada a partir do que é comum em Harmonização Orofacial.
A Clara precisa confirmar **o que ela realmente faz**, o que entra, o que sai
e se algum nome muda. Cada item tem `nome`, `desc` e `cat`
(`expressao`, `volume` ou `pele`).

## 6. Logo

Resolvido, mas vale conferir: gerei `assets/img/logo-simbolo.png` (o monograma, usado
no círculo do topo e no favicon) e `assets/img/logo-horizontal.png` (usado no rodapé)
a partir dos PDFs em `tudosobreclara/`, recortando e deixando o fundo transparente.

Se ela tiver os originais em **SVG**, é melhor trocar, fica nítido em qualquer tela
e pesa menos. Os PNGs de hoje já estão em resolução suficiente para o uso atual.

## 7. CRO

Está como `CROPB 12226`, lido das artes de pré e pós. Confirmar se está correto.
