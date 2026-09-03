/* ═══════════════════════════════════════════
   DADOS, Depoimentos reais das pacientes

   Para adicionar: novo objeto no array tdata.
   { t: texto (HTML ok), a: autoria }
═══════════════════════════════════════════ */

const tdata = [
  { t: '"Eu amei demaisss o resultado! Clara superou todas as minhas expectativas. Ficou <strong>exatamente como eu queria</strong>! Obrigada por todo o carinho e cuidado. Você é incrível no que faz. ♥️♥️♥️♥️"', a: 'Paciente' },
  { t: '"Quero deixar meu sincero agradecimento à Dra. Clara Dantas por todo o cuidado, profissionalismo e dedicação durante o meu procedimento. Estou muito feliz com o resultado. Obrigada por <strong>transformar minha autoestima</strong>."', a: 'Paciente' },
];

function renderTestimonials() {
  const tt = document.getElementById('tt');
  if (!tt) return;
  /* Duplicado para o loop contínuo do marquee */
  tt.innerHTML = [...tdata, ...tdata].map(t => `
    <div class="tc">
      <div class="tc-stars">★★★★★</div>
      <div class="tc-txt">${t.t}</div>
      <div class="tc-author">${t.a}</div>
    </div>`).join('');
}
