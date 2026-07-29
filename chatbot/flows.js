/* ═══════════════════════════════════════════
   FLUXOS — Evo, assistente da Dra. Clara

   Estrutura de cada fluxo:
   {
     msg: string (HTML permitido),
     chips: [
       { l: 'Rótulo', f: 'id_do_fluxo' }  → navega
       { l: 'Rótulo', wa: 'mensagem' }    → abre WhatsApp
     ]
   }

   Para criar um novo fluxo: adicione a entrada
   aqui e referencie com { f: 'novo_fluxo' }.

   ⚠️ Nenhuma resposta deve prometer resultado,
   dar diagnóstico ou citar preço fechado.
═══════════════════════════════════════════ */

const flows = {

  /* ── MENU PRINCIPAL ── */
  inicio: {
    msg: `Me conta o que te trouxe até aqui — assim eu te explico direitinho como funciona. 🤍`,
    chips: [
      { l: '💋 Lábios', f: 'labios' },
      { l: '✨ Linhas de expressão', f: 'rugas' },
      { l: '💎 Contorno e papada', f: 'contorno' },
      { l: '🌸 Qualidade de pele', f: 'pele' },
      { l: '👃 Nariz', f: 'nariz' },
      { l: '❓ Ainda não sei', f: 'naosei' },
      { l: '📅 Quero agendar', f: 'agendar' },
    ]
  },

  /* ── ÁREAS DE INTERESSE ── */
  labios: {
    msg: `O preenchimento labial da Dra. Clara parte do <strong>desenho do seu rosto</strong> — nada de modelo pronto. O foco é contorno, hidratação e proporção, com resultado natural.<br><br>Você já fez algum procedimento nos lábios antes?`,
    chips: [
      { l: 'Nunca fiz', f: 'primeira_vez' },
      { l: 'Já fiz, quero manutenção', f: 'manutencao' },
      { l: 'Como é feito?', f: 'como_funciona' },
      { l: 'Dói?', f: 'dor' },
    ]
  },
  rugas: {
    msg: `A toxina botulínica bem aplicada <strong>suaviza sem congelar</strong>. A Dra. Clara ajusta a dose ponto a ponto para que a sua expressão continue viva.<br><br>O que você gostaria de saber?`,
    chips: [
      { l: 'Fica natural mesmo?', f: 'natural' },
      { l: 'Quanto tempo dura?', f: 'duracao' },
      { l: 'Nunca fiz', f: 'primeira_vez' },
      { l: 'Tem recuperação?', f: 'recuperacao' },
    ]
  },
  contorno: {
    msg: `Contorno mandibular, mento e papada costumam ser avaliados <strong>em conjunto</strong> — o resultado bonito vem do equilíbrio entre eles, não de tratar um ponto isolado.<br><br>Por onde quer começar?`,
    chips: [
      { l: 'Como é o planejamento?', f: 'primeira_consulta' },
      { l: 'Quanto tempo dura?', f: 'duracao' },
      { l: 'Ver pré e pós', f: 'resultados' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  pele: {
    msg: `Bioestimuladores de colágeno e skinboosters trabalham a <strong>qualidade da pele</strong>: firmeza, textura e viço. O resultado é progressivo — aparece ao longo das semanas e dura bastante.<br><br>Quer saber mais sobre o quê?`,
    chips: [
      { l: 'Quanto tempo dura?', f: 'duracao' },
      { l: 'Quantas sessões?', f: 'sessoes' },
      { l: 'Tem recuperação?', f: 'recuperacao' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  nariz: {
    msg: `A rinomodelação ajusta o perfil nasal <strong>sem cirurgia</strong>, em consultório. É um procedimento delicado: a Dra. Clara só indica depois de confirmar, na avaliação, que é seguro para o seu caso.<br><br>O que você quer saber?`,
    chips: [
      { l: 'Como é feito?', f: 'como_funciona' },
      { l: 'É seguro?', f: 'seguranca' },
      { l: 'Quanto tempo dura?', f: 'duracao' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  naosei: {
    msg: `Sem problema — a maioria das pacientes chega assim. 🤍<br><br>É exatamente para isso que existe a <strong>análise facial completa</strong>: a Dra. Clara avalia proporções, escuta o que te incomoda e mostra o que faz sentido para você — inclusive quando a resposta é "não precisa fazer nada agora".`,
    chips: [
      { l: 'Como é a 1ª consulta?', f: 'primeira_consulta' },
      { l: 'Quais os valores?', f: 'valores' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },

  /* ── DÚVIDAS FREQUENTES ── */
  como_funciona: {
    msg: `O procedimento é feito no consultório, em uma sessão, e normalmente leva de <strong>30 a 60 minutos</strong>.<br><br>Antes, a Dra. Clara marca os pontos do planejamento no seu rosto e aplica o anestésico. Durante a aplicação você fica acordada e conversando — e no fim vê o resultado no espelho, junto com as orientações do pós.`,
    chips: [
      { l: 'Dói?', f: 'dor' },
      { l: 'Tem recuperação?', f: 'recuperacao' },
      { l: 'Quanto tempo dura?', f: 'duracao' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  primeira_vez: {
    msg: `Começar bem faz toda diferença. 🌸<br><br>Na primeira vez a Dra. Clara costuma trabalhar de forma <strong>conservadora e progressiva</strong> — melhor construir o resultado aos poucos do que exagerar de uma vez. Você vê a evolução e decide os próximos passos com calma.`,
    chips: [
      { l: 'Como é a 1ª consulta?', f: 'primeira_consulta' },
      { l: 'Dói?', f: 'dor' },
      { l: 'Quais os valores?', f: 'valores' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  manutencao: {
    msg: `Para manutenção, a avaliação é ainda mais importante: a Dra. Clara precisa ler <strong>como o seu rosto respondeu</strong> ao que já foi feito antes de ajustar ou repetir qualquer coisa.<br><br>Se você tiver fotos do resultado atual, leve — ajuda bastante no planejamento.`,
    chips: [
      { l: 'Como é a consulta?', f: 'primeira_consulta' },
      { l: 'Quais os valores?', f: 'valores' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  primeira_consulta: {
    msg: `A primeira consulta é uma <strong>análise facial completa</strong>:<br><br>• A Dra. Clara escuta seus objetivos e o que te incomoda<br>• Avalia proporções, anatomia e qualidade de pele<br>• Monta um <strong>planejamento exclusivo</strong> para o seu rosto<br>• Explica cada etapa, prazos e cuidados<br><br>Sem compromisso de fechar nada no mesmo dia. 🤍`,
    chips: [
      { l: 'Quais os valores?', f: 'valores' },
      { l: 'Onde fica o consultório?', f: 'local' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  natural: {
    msg: `Sim — esse é o princípio do trabalho da Dra. Clara. 🤍<br><br>O planejamento parte da <strong>sua própria anatomia</strong>: a ideia é valorizar o que você já tem de bonito, preservando sua identidade. Nada de rosto padronizado.`,
    chips: [
      { l: 'Ver pré e pós', f: 'resultados' },
      { l: 'Como é a 1ª consulta?', f: 'primeira_consulta' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  dor: {
    msg: `O desconforto é bem pequeno. 😌<br><br>A maioria dos procedimentos usa <strong>anestésico tópico ou local</strong>, e a Dra. Clara conversa com você durante todo o atendimento para que tudo aconteça com tranquilidade. Se a sensibilidade for uma preocupação, é só avisar — dá para ajustar.`,
    chips: [
      { l: 'Tem recuperação?', f: 'recuperacao' },
      { l: 'É seguro?', f: 'seguranca' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  duracao: {
    msg: `Varia por procedimento e por organismo, mas em média:<br><br>• <strong>Toxina botulínica</strong> · 4 a 6 meses<br>• <strong>Preenchimentos</strong> · 9 a 18 meses<br>• <strong>Bioestimuladores</strong> · até cerca de 2 anos<br><br>Na consulta a Dra. Clara estima melhor de acordo com o seu caso.`,
    chips: [
      { l: 'Quantas sessões?', f: 'sessoes' },
      { l: 'Quais os valores?', f: 'valores' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  sessoes: {
    msg: `Depende do que for planejado. Toxina e preenchimentos costumam ser <strong>sessão única</strong>, com retorno de checagem. Já bioestimuladores e skinboosters normalmente pedem <strong>mais de uma sessão</strong>, espaçadas em algumas semanas.<br><br>O número exato sai no planejamento da sua avaliação.`,
    chips: [
      { l: 'Quais os valores?', f: 'valores' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  recuperacao: {
    msg: `Na maioria dos casos você <strong>volta à rotina no mesmo dia</strong>. 🌸<br><br>Pode haver leve inchaço ou pequenos hematomas nos primeiros dias, dependendo do procedimento. Você sai do consultório com todas as orientações de cuidado por escrito, e a Dra. Clara fica disponível para acompanhar o pós.`,
    chips: [
      { l: 'É seguro?', f: 'seguranca' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  seguranca: {
    msg: `A Dra. Clara é <strong>cirurgiã-dentista (${SITE.cro})</strong> com formação específica e atualização constante em Harmonização Orofacial.<br><br>Todos os produtos são de marcas registradas na ANVISA, e nenhum procedimento é feito sem <strong>avaliação prévia</strong> — se algo não for indicado para você, ela vai dizer isso com clareza.`,
    chips: [
      { l: 'Conhecer a Dra. Clara', f: 'sobre' },
      { l: 'Como é a 1ª consulta?', f: 'primeira_consulta' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  valores: {
    msg: `Os valores dependem do <strong>planejamento feito na análise facial</strong> — cada rosto pede uma combinação diferente, então não existe tabela única.<br><br>Por isso a Dra. Clara passa os valores individualmente no WhatsApp, já com base no que faz sentido para você.`,
    chips: [
      { l: 'Falar sobre valores', wa: 'Olá, Dra. Clara! Gostaria de saber os valores para o meu caso.' },
      { l: 'Como é a 1ª consulta?', f: 'primeira_consulta' },
    ]
  },
  resultados: {
    msg: `Tem uma seção de <strong>pré e pós</strong> aqui no perfil, com casos reais publicados mediante autorização das pacientes. 📸<br><br>É só voltar e tocar em "Pré e pós" — ou dar uma olhada no Instagram, onde tem mais casos.`,
    chips: [
      { l: 'Ver o Instagram', f: 'instagram' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  sobre: {
    msg: `A Dra. Clara Dantas é <strong>cirurgiã-dentista</strong> (${SITE.cro}) apaixonada por Harmonização Orofacial. 🤍<br><br>A trajetória dela é construída com muito estudo e atualização constante — e a certeza de que a excelência está nos detalhes. Antes de qualquer tratamento, ela faz uma análise completa para criar um planejamento exclusivo para você.`,
    chips: [
      { l: 'Como é a 1ª consulta?', f: 'primeira_consulta' },
      { l: 'Onde fica o consultório?', f: 'local' },
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },
  local: {
    msg: `O consultório fica em <strong>${SITE.cidade}</strong>, e o atendimento é sempre <strong>com hora marcada</strong>.<br><br>O endereço completo, o mapa e os horários estão na seção "Localização" aqui do perfil.`,
    chips: [
      { l: 'Quero agendar', f: 'agendar' },
      { l: 'Quais os valores?', f: 'valores' },
    ]
  },
  instagram: {
    msg: `O Instagram da Dra. Clara é <strong>@${SITE.instagram}</strong> — lá ela publica casos, bastidores do consultório e conteúdo sobre Harmonização Orofacial. ✨`,
    chips: [
      { l: 'Quero agendar', f: 'agendar' },
    ]
  },

  /* ── FECHAMENTO ── */
  agendar: {
    msg: `Perfeito! 🤍<br><br>É só tocar no botão abaixo e a Dra. Clara te responde no WhatsApp para reservar o melhor horário para a sua avaliação.`,
    chips: [
      { l: '💬 Falar no WhatsApp', wa: 'Olá, Dra. Clara! Vim pelo link do perfil e gostaria de agendar minha avaliação de Harmonização Orofacial.' },
    ]
  },
};
