/* ═══════════════════════════════════════════
   CONFIGURAÇÃO CENTRAL DO SITE
   Único lugar para alterar contato, redes e
   endereço. Todo o resto lê daqui.

   ⚠️ Itens marcados com AJUSTAR ainda estão
   com valor provisório, ver docs/PENDENCIAS.md
═══════════════════════════════════════════ */

const SITE = {
  nome:      'Dra. Clara Dantas',
  primeiro:  'Clara',
  profissao: 'Cirurgiã-dentista',
  cro:       'CROPB 12226',
  area:      'Harmonização Orofacial',

  whatsapp:  '5583999999999',        // AJUSTAR, só números, com 55 + DDD
  instagram: 'draclaradantas',       // AJUSTAR, sem @
  email:     '',                     // AJUSTAR, deixe '' para ocultar o card

  cidade:    'João Pessoa · PB',     // AJUSTAR
  endereco: {
    linha1:  'Rua e número, sala',   // AJUSTAR
    linha2:  'Bairro · João Pessoa · PB', // AJUSTAR
    mapsUrl: '',                     // AJUSTAR, link do Google Maps
    embed:   '',                     // AJUSTAR, src do iframe do Google Maps
  },
  horarios: [
    'Segunda a sexta · 09h às 18h',  // AJUSTAR
    'Sábado · 09h às 13h',           // AJUSTAR
  ],

  assistente: {
    nome:     'Evo',
    monograma:'E',
    assinatura:'Evo · Assistente digital',
  },
};

/* Monta um link de WhatsApp já com a mensagem codificada */
function waLink(msg) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* Link do Instagram */
function igLink() {
  return `https://instagram.com/${SITE.instagram}`;
}
