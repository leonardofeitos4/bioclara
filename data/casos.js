/* ═══════════════════════════════════════════
   DADOS — Casos de pré e pós

   Para adicionar: salvar a foto em assets/img/
   e incluir um novo objeto no array casos.
   { img: arquivo, proc: procedimento, obs: observação }

   ⚠️ Só publicar caso com autorização por escrito
   da paciente (ver docs/PENDENCIAS.md).
═══════════════════════════════════════════ */

const casos = [
  {
    img:  'caso-01.jpeg',
    proc: 'Contorno mandibular',
    obs:  'Definição do ângulo da mandíbula e do terço inferior da face, preservando os traços da paciente.',
  },
  {
    img:  'caso-02.jpeg',
    proc: 'Preenchimento labial',
    obs:  'Contorno, hidratação e volume proporcional, lábios valorizados sem perder a naturalidade.',
  },
  {
    img:  'caso-03.jpeg',
    proc: 'Contorno mandibular e mento',
    obs:  'Definição do mento e da linha da mandíbula, com resultado natural no perfil.',
  },
  {
    img:  'caso-04.jpeg',
    proc: 'Harmonização de perfil',
    obs:  'Definição do contorno cervicomentoniano, com o perfil mais harmônico.',
  },
  {
    img:  'caso-05.jpeg',
    proc: 'Contorno mandibular e papada',
    obs:  'Definição do ângulo da mandíbula e da transição entre queixo e pescoço.',
  },
  {
    img:  'caso-06.jpeg',
    proc: 'Harmonização de perfil',
    obs:  'Equilíbrio entre nariz, lábios e queixo, respeitando as proporções do rosto.',
  },
  {
    img:  'caso-07.jpeg',
    proc: 'Harmonização de perfil',
    obs:  'Ajuste do terço inferior da face, com resultado discreto e natural.',
  },
  {
    img:  'caso-08.jpeg',
    proc: 'Harmonização facial',
    obs:  'Contorno facial e lábios trabalhados em conjunto, preservando a expressão da paciente.',
  },
  {
    img:  'caso-09.jpeg',
    proc: 'Harmonização de perfil',
    obs:  'Definição do contorno do rosto em perfil, complementando a harmonização facial.',
  },
  {
    img:  'caso-10.jpeg',
    proc: 'Preenchimento labial',
    obs:  'Contorno e volume labial proporcionais ao rosto, sem exageros.',
  },
];

function renderCasos() {
  const el = document.getElementById('casos');
  if (!el) return;
  el.innerHTML = casos.map((c, i) => `
    <div class="caso">
      <div class="caso-meta">
        <div class="caso-proc">${c.proc}</div>
        <div class="caso-num">Caso ${String(i + 1).padStart(2, '0')}</div>
      </div>
      <div class="caso-media" onclick="ampliarFoto('assets/img/${c.img}')">
        <img src="assets/img/${c.img}" alt="Pré e pós de ${c.proc.toLowerCase()}" loading="lazy">
      </div>
      <div class="caso-obs">${c.obs}</div>
    </div>`).join('');
}
