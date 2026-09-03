/* ═══════════════════════════════════════════
   APP, navegação, hidratação e interações
   Depende de: data/site.js, data/procedimentos.js,
   data/testimonials.js, data/casos.js, chatbot/*
═══════════════════════════════════════════ */

/* ══════════════════════════════
   1. HIDRATAÇÃO A PARTIR DO SITE
   Evita número de WhatsApp e @ espalhados
   pelo HTML, tudo vem de data/site.js.
══════════════════════════════ */
function hydrate() {
  /* href de WhatsApp: <a data-wa="mensagem"> */
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.setAttribute('href', waLink(el.dataset.wa));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* href do Instagram */
  document.querySelectorAll('[data-href="instagram"]').forEach(el => {
    el.setAttribute('href', igLink());
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* href de e-mail (o card some se não houver e-mail definido) */
  document.querySelectorAll('[data-href="email"]').forEach(el => {
    if (!SITE.email) { el.remove(); return; }
    el.setAttribute('href', 'mailto:' + SITE.email);
  });

  /* Textos: <span data-txt="cro"> */
  const textos = {
    nome: SITE.nome,
    profissao: SITE.profissao,
    cro: SITE.cro,
    area: SITE.area,
    cidade: SITE.cidade,
    instagram: '@' + SITE.instagram,
    email: SITE.email,
    'endereco.linha1': SITE.endereco.linha1,
    'endereco.linha2': SITE.endereco.linha2,
  };
  document.querySelectorAll('[data-txt]').forEach(el => {
    const v = textos[el.dataset.txt];
    if (v !== undefined) el.textContent = v;
  });

  /* Horários */
  const hr = document.getElementById('horarios');
  if (hr) hr.innerHTML = SITE.horarios.join('<br>');

  /* Mapa: só monta o iframe se houver embed configurado */
  const map = document.getElementById('map-box');
  if (map) {
    map.innerHTML = SITE.endereco.embed
      ? `<iframe src="${SITE.endereco.embed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa do consultório"></iframe>`
      : `<div class="eyebrow">Mapa a configurar</div>`;
  }
  const rota = document.getElementById('btn-rota');
  if (rota) {
    if (SITE.endereco.mapsUrl) rota.setAttribute('href', SITE.endereco.mapsUrl);
    else rota.remove();
  }

  document.title = `${SITE.nome} | ${SITE.area}`;
}

/* ══════════════════════════════
   2. NAVEGAÇÃO ENTRE PÁGINAS
   Cada subpágina tem um endereço próprio
   (#quem-sou, #procedimentos...), então dá
   para compartilhar o link de uma seção e o
   botão voltar do celular funciona sozinho.
══════════════════════════════ */
const ROTAS = {
  'page-sobre':         'quem-sou',
  'page-procedimentos': 'procedimentos',
  'page-resultados':    'pre-e-pos',
  'page-local':         'localizacao',
  'page-chat':          'duvidas',
};
const POR_SLUG = {};
Object.entries(ROTAS).forEach(([id, slug]) => { POR_SLUG[slug] = id; });

let paginaAtual = null;

/* O hash muda; sincronizar() cuida do resto */
function go(id) { location.hash = ROTAS[id] || ''; }
function back() { history.back(); }

function sincronizar() {
  const id = POR_SLUG[location.hash.slice(1)] || null;
  if (id === paginaAtual) return;

  if (paginaAtual) document.getElementById(paginaAtual).classList.remove('active');
  paginaAtual = id;

  const home = document.getElementById('home');
  const fabs = document.getElementById('home-fabs');

  if (!id) {
    home.classList.remove('behind');
    fabs.style.cssText = '';
    return;
  }

  const pg = document.getElementById(id);
  pg.classList.add('active');
  pg.scrollTop = 0;
  home.classList.add('behind');
  fabs.style.cssText = 'opacity:0;pointer-events:none';

  if (id === 'page-chat' && !aiStarted) { aiStarted = true; startChat(); }
}

addEventListener('hashchange', sincronizar);

/* ══════════════════════════════
   3. ABAS (Procedimentos)
══════════════════════════════ */
function ctab(btn, pane) {
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.cat-pane').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(pane).classList.add('on');
  document.getElementById('page-procedimentos').scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════
   4. RIPPLE NOS CARDS
══════════════════════════════ */
function bindRipple() {
  document.querySelectorAll('.lcard').forEach(card => {
    card.addEventListener('pointerdown', function (e) {
      const r = this.getBoundingClientRect();
      const size = r.width * 2;
      const d = document.createElement('div');
      d.className = 'ripple';
      d.style.cssText =
        `left:${e.clientX - r.left}px;top:${e.clientY - r.top}px;` +
        `width:${size}px;height:${size}px;margin:-${size / 2}px`;
      this.appendChild(d);
      setTimeout(() => d.remove(), 500);
    });
  });
}

/* ══════════════════════════════
   5. FOTO AMPLIADA (pré e pós)
══════════════════════════════ */
function ampliarFoto(src) {
  document.getElementById('foto-zoom-img').src = src;
  document.getElementById('foto-zoom').classList.add('on');
}

function fecharFoto() {
  document.getElementById('foto-zoom').classList.remove('on');
}

addEventListener('keydown', e => { if (e.key === 'Escape') fecharFoto(); });

/* ══════════════════════════════
   6. BOOT
══════════════════════════════ */
hydrate();
renderProcedimentos();
renderTestimonials();
renderCasos();
bindRipple();
sincronizar();   /* abre a seção direto se a URL já vier com #hash */
