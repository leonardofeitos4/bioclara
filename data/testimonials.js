/* ═══════════════════════════════════════════
   DADOS — Depoimentos

   ⚠️ PROVISÓRIOS. Substituir pelos depoimentos
   reais das pacientes (ver docs/PENDENCIAS.md).
   Para adicionar: novo objeto no array tdata.
   { t: texto (HTML ok), a: autoria }
═══════════════════════════════════════════ */

const tdata = [
  { t: '"Ninguém percebeu que eu tinha feito algo — só disseram que eu estava <strong>descansada</strong>. Era exatamente o que eu queria."', a: 'Paciente · Preenchimento' },
  { t: '"Fui muito bem acolhida. A <strong>análise antes de tudo</strong> me deu total segurança para seguir com o tratamento."', a: 'Paciente · Primeira consulta' },
  { t: '"Resultado leve e natural, do jeito que combinamos no planejamento. <strong>Voltarei com certeza.</strong>"', a: 'Paciente · Toxina botulínica' },
  { t: '"Tinha muito medo de ficar artificial. A Dra. Clara explicou cada passo e o resultado ficou <strong>totalmente natural</strong>."', a: 'Paciente · Lábios' },
  { t: '"Meu contorno mudou sem mudar meu rosto. <strong>Continuo sendo eu</strong>, só que melhor."', a: 'Paciente · Contorno facial' },
  { t: '"Atendimento impecável do início ao fim. Me senti <strong>segura e bem orientada</strong> em todas as etapas."', a: 'Paciente · Bioestimulador' },
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
