/* ═══════════════════════════════════════════
   DADOS — Procedimentos e seletor de interesse

   PROCEDIMENTOS: alimenta os chips da home e
   os cards da página "Procedimentos".
   Cada item: { nome, desc, cat }
   cat: 'expressao' | 'volume' | 'pele'
═══════════════════════════════════════════ */

const CATEGORIAS = {
  expressao: { label: 'Toxina botulínica', desc: 'Suavizar marcas e tensões sem congelar a expressão — o movimento natural do rosto é preservado.' },
  volume:    { label: 'Contorno & volume',   desc: 'Redesenhar proporções com preenchedores, respeitando a anatomia de cada face.' },
  pele:      { label: 'Qualidade de pele',   desc: 'Estimular colágeno, hidratar em profundidade e devolver viço à pele.' },
};

const PROCEDIMENTOS = [
  { nome: 'Toxina botulínica',        cat: 'expressao', desc: 'Suaviza linhas de expressão da testa, glabela e olhos preservando a naturalidade.' },
  { nome: 'Sorriso gengival',         cat: 'expressao', desc: 'Ajuste da exposição da gengiva ao sorrir, com aplicação pontual e precisa.' },
  { nome: 'Bruxismo e apertamento',   cat: 'expressao', desc: 'Alívio da tensão do masseter — conforto no dia a dia e suavização do terço inferior.' },
  { nome: 'Preenchimento labial',     cat: 'volume',    desc: 'Contorno, hidratação e volume proporcional ao seu rosto — sem exageros.' },
  { nome: 'Preenchimento facial',     cat: 'volume',    desc: 'Malar, mento, olheiras e mandíbula com desenho personalizado.' },
  { nome: 'Rinomodelação',            cat: 'volume',    desc: 'Ajuste do perfil nasal sem cirurgia, em consultório.' },
  { nome: 'Contorno mandibular',      cat: 'volume',    desc: 'Definição do ângulo da mandíbula e do terço inferior da face.' },
  { nome: 'Bioestimulador de colágeno', cat: 'pele',    desc: 'Firmeza e qualidade de pele com resultado progressivo e duradouro.' },
  { nome: 'Skinbooster',              cat: 'pele',      desc: 'Hidratação profunda, viço e textura de pele mais uniforme.' },
  { nome: 'Lipo enzimática de papada', cat: 'pele',     desc: 'Redução de gordura localizada na papada e definição do contorno.' },
];

/* ═══════════════════════════════════════════
   SELETOR — "O que mais te incomoda hoje?"
   Alimenta os botões da home. Para adicionar,
   crie a entrada aqui e o botão no index.html.
═══════════════════════════════════════════ */

const INTERESSES = {
  labios: {
    titulo: 'Lábios sem volume ou assimétricos',
    texto:  'O preenchimento labial da Dra. Clara parte do <strong>desenho do seu rosto</strong>, não de um modelo pronto. O objetivo é contorno definido, hidratação e proporção — lábios que continuam sendo os seus, só que valorizados.',
    cta:    'Quero avaliar meus lábios',
    wa:     'Olá, Dra. Clara! Gostaria de avaliar um preenchimento labial.',
  },
  rugas: {
    titulo: 'Linhas de expressão marcadas',
    texto:  'A toxina botulínica bem aplicada <strong>suaviza sem congelar</strong>. A Dra. Clara ajusta a dose ponto a ponto para que a sua expressão continue viva — você parece descansada, não "operada".',
    cta:    'Quero suavizar minhas linhas',
    wa:     'Olá, Dra. Clara! Tenho interesse em toxina botulínica para linhas de expressão.',
  },
  contorno: {
    titulo: 'Rosto sem definição ou papada',
    texto:  'Contorno mandibular, mento e papada são tratados em conjunto. A partir da <strong>análise facial completa</strong>, a Dra. Clara define o que realmente precisa ser feito para desenhar o terço inferior da face.',
    cta:    'Quero definir meu contorno',
    wa:     'Olá, Dra. Clara! Gostaria de falar sobre contorno facial e papada.',
  },
  pele: {
    titulo: 'Pele sem viço, flacidez',
    texto:  'Bioestimuladores de colágeno e skinboosters trabalham a <strong>qualidade da pele</strong> a médio e longo prazo: mais firmeza, textura uniforme e aquele viço que nenhuma maquiagem entrega.',
    cta:    'Quero cuidar da minha pele',
    wa:     'Olá, Dra. Clara! Quero saber sobre bioestimulador de colágeno e skinbooster.',
  },
  olheiras: {
    titulo: 'Olhar cansado e olheiras',
    texto:  'Olheiras têm causas diferentes — perda de volume, pigmentação ou sombra. Por isso o tratamento só é definido <strong>depois da avaliação</strong>, e nem sempre envolve preenchimento.',
    cta:    'Quero avaliar minhas olheiras',
    wa:     'Olá, Dra. Clara! Gostaria de avaliar tratamento para olheiras.',
  },
  nariz: {
    titulo: 'Perfil do nariz',
    texto:  'A rinomodelação corrige projeções, giba e ponta caída <strong>sem cirurgia</strong>, em consultório. É um procedimento delicado, indicado apenas quando a avaliação confirma que é seguro para o seu caso.',
    cta:    'Quero saber sobre rinomodelação',
    wa:     'Olá, Dra. Clara! Tenho interesse em rinomodelação.',
  },
  primeira: {
    titulo: 'Nunca fiz nada e tenho receio',
    texto:  'Esse é o melhor lugar para começar. A primeira consulta é uma <strong>análise facial completa</strong>: a Dra. Clara escuta seus objetivos, avalia proporções e propõe um planejamento — sem compromisso de fechar nada no mesmo dia.',
    cta:    'Quero marcar minha avaliação',
    wa:     'Olá, Dra. Clara! Nunca fiz harmonização e gostaria de fazer uma avaliação.',
  },
  manutencao: {
    titulo: 'Já fiz e quero manutenção',
    texto:  'Manutenção pede uma leitura do que já foi feito e de como o seu rosto respondeu. A Dra. Clara avalia o resultado atual antes de <strong>ajustar ou repetir</strong> qualquer procedimento.',
    cta:    'Quero avaliar minha manutenção',
    wa:     'Olá, Dra. Clara! Já fiz harmonização e gostaria de avaliar manutenção.',
  },
};

/* Renderiza a resposta do seletor */
function sym(btn, chave) {
  document.querySelectorAll('.sc').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const d = INTERESSES[chave];
  const el = document.getElementById('sr');
  if (!d || !el) return;
  el.innerHTML = `
    <div class="sr-ttl">${d.titulo}</div>
    <div>${d.texto}</div>
    <a href="${waLink(d.wa)}" target="_blank" rel="noopener">→ ${d.cta}</a>`;
  el.classList.add('show');
}

/* Popula os chips da home e os cards da página de procedimentos */
function renderProcedimentos() {
  const chips = document.getElementById('proc-chips');
  if (chips) {
    chips.innerHTML = PROCEDIMENTOS.map(p =>
      `<a class="pchip" href="${waLink(`Olá, Dra. Clara! Tenho interesse em ${p.nome}. Pode me explicar como funciona?`)}" target="_blank" rel="noopener">${p.nome}</a>`
    ).join('');
  }

  Object.keys(CATEGORIAS).forEach(cat => {
    const pane = document.getElementById(`proc-${cat}`);
    if (!pane) return;
    const lista = PROCEDIMENTOS.filter(p => p.cat === cat);
    pane.innerHTML = `
      <p class="cat-desc">${CATEGORIAS[cat].desc}</p>
      ${lista.map(p => `
        <a class="proc-card" href="${waLink(`Olá, Dra. Clara! Tenho interesse em ${p.nome}. Pode me explicar como funciona?`)}" target="_blank" rel="noopener">
          <div style="flex:1">
            <div class="proc-name">${p.nome}</div>
            <div class="proc-desc">${p.desc}</div>
          </div>
          <div class="proc-arr">→</div>
        </a>`).join('')}`;
  });
}
