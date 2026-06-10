// ===== CONFIGURAÇÃO DO WHATSAPP DE IVAN =====
const IVAN_WHATSAPP = "5511999999999"; // SUBSTITUIR pelo número real de Ivan

// ===== PERGUNTAS DO QUIZ =====
const questions = [
  {
    id: 1,
    text: "Você já possui plano de saúde atualmente?",
    hint: "",
    options: [
      { label: "Sim, tenho plano de saúde", value: "tem_plano", score: 10 },
      { label: "Não tenho, mas estou pesquisando", value: "nao_tem_pesquisando", score: 8 },
      { label: "Tive, mas cancelei", value: "cancelou", score: 7 },
      { label: "Nunca tive plano de saúde", value: "nunca_teve", score: 4 }
    ],
    key: "situacao_plano"
  },
  {
    id: 2,
    text: "Se você tem plano, como você avalia o atendimento que recebe?",
    hint: "Seja honesto — sua resposta nos ajuda a encontrar o melhor para você",
    options: [
      { label: "Péssimo — tenho muita dificuldade", value: "pessimo", score: 12 },
      { label: "Ruim — deixa muito a desejar", value: "ruim", score: 10 },
      { label: "Regular — poderia ser melhor", value: "regular", score: 7 },
      { label: "Bom — estou satisfeito", value: "bom", score: 2 }
    ],
    key: "satisfacao",
    conditional: (answers) => answers.situacao_plano !== "nunca_teve"
  },
  {
    id: 3,
    text: "Seu plano de saúde teve reajuste nos últimos 12 meses?",
    hint: "",
    options: [
      { label: "Sim, e ficou muito caro", value: "reajuste_alto", score: 14 },
      { label: "Sim, mas achei razoável", value: "reajuste_ok", score: 5 },
      { label: "Não teve reajuste", value: "sem_reajuste", score: 2 },
      { label: "Não sei / não tenho plano", value: "nao_sabe", score: 0 }
    ],
    key: "reajuste",
    conditional: (answers) => answers.situacao_plano !== "nunca_teve"
  },
  {
    id: 4,
    text: "Para quem você está procurando o plano de saúde?",
    hint: "",
    options: [
      { label: "Só para mim (individual)", value: "individual", score: 6 },
      { label: "Para mim e minha família", value: "familiar", score: 10 },
      { label: "Para minha empresa e funcionários", value: "empresarial", score: 18 },
      { label: "Para mim e para a empresa", value: "individual_empresa", score: 20 }
    ],
    key: "tipo_plano"
  },
  {
    id: 5,
    text: "Você tem empresa ou é profissional autônomo/liberal?",
    hint: "Empresários têm acesso a planos com vantagens fiscais exclusivas",
    options: [
      { label: "Sim, tenho empresa (CNPJ)", value: "tem_cnpj", score: 16 },
      { label: "Sou profissional autônomo/liberal", value: "autonomo", score: 10 },
      { label: "Sou funcionário CLT", value: "clt", score: 4 },
      { label: "Sou aposentado ou pensionista", value: "aposentado", score: 6 }
    ],
    key: "perfil_profissional"
  },
  {
    id: 6,
    text: "Quantas pessoas você deseja incluir no plano?",
    hint: "Inclua você mesmo na contagem",
    options: [
      { label: "Apenas 1 pessoa (só eu)", value: "1_pessoa", score: 4 },
      { label: "2 a 3 pessoas", value: "2_3_pessoas", score: 8 },
      { label: "4 a 6 pessoas", value: "4_6_pessoas", score: 12 },
      { label: "Mais de 6 pessoas ou funcionários", value: "mais_6", score: 18 }
    ],
    key: "qtd_pessoas"
  },
  {
    id: 7,
    text: "Qual a sua faixa etária?",
    hint: "Cada faixa tem opções específicas com melhores condições",
    options: [
      { label: "Menos de 35 anos", value: "ate_35", score: 4 },
      { label: "Entre 35 e 49 anos", value: "35_49", score: 8 },
      { label: "Entre 50 e 59 anos", value: "50_59", score: 10 },
      { label: "60 anos ou mais", value: "60_mais", score: 8 }
    ],
    key: "faixa_etaria"
  },
  {
    id: 8,
    text: "Qual região você mora?",
    hint: "A disponibilidade de planos varia por estado",
    options: [
      { label: "São Paulo (capital ou interior)", value: "sp", score: 10 },
      { label: "Rio de Janeiro", value: "rj", score: 10 },
      { label: "Outras capitais ou regiões metropolitanas", value: "capitais", score: 9 },
      { label: "Interior ou cidades menores", value: "interior", score: 7 }
    ],
    key: "regiao"
  },
  {
    id: 9,
    text: "Você tem interesse em incluir cobertura odontológica?",
    hint: "Muitas pessoas não sabem que dá pra economizar no combo saúde + dental",
    options: [
      { label: "Sim, quero saúde + odontológico", value: "saude_dental", score: 12 },
      { label: "Só odontológico por enquanto", value: "so_dental", score: 8 },
      { label: "Só saúde por enquanto", value: "so_saude", score: 6 },
      { label: "Ainda não decidi", value: "indeciso", score: 3 }
    ],
    key: "interesse_dental"
  },
  {
    id: 10,
    text: "Pensando no seu orçamento, qual faixa mensal faz mais sentido para você?",
    hint: "Lembre: qualidade de cobertura muda bastante conforme o investimento",
    options: [
      { label: "Até R$ 200 por pessoa", value: "ate_200", score: 2 },
      { label: "Entre R$ 200 e R$ 500 por pessoa", value: "200_500", score: 8 },
      { label: "Entre R$ 500 e R$ 1.000 por pessoa", value: "500_1000", score: 14 },
      { label: "Acima de R$ 1.000 por pessoa", value: "acima_1000", score: 20 }
    ],
    key: "orcamento"
  },
  {
    id: 11,
    text: "O que mais te incomoda no plano que você tem (ou já teve)?",
    hint: "Escolha a que mais se parece com a sua situação",
    options: [
      { label: "O preço está alto demais", value: "preco_alto", score: 12 },
      { label: "Rede de médicos e hospitais ruim", value: "rede_ruim", score: 10 },
      { label: "Muita burocracia para usar", value: "burocracia", score: 9 },
      { label: "Cobertura insuficiente para o que preciso", value: "cobertura_ruim", score: 11 }
    ],
    key: "principal_dor"
  },
  {
    id: 12,
    text: "Com que urgência você quer resolver isso?",
    hint: "Sua resposta nos ajuda a priorizar seu atendimento",
    options: [
      { label: "Quero resolver o quanto antes, é urgente", value: "urgente", score: 20 },
      { label: "Nos próximos 30 dias", value: "30_dias", score: 14 },
      { label: "Nos próximos 3 meses", value: "3_meses", score: 8 },
      { label: "Estou só pesquisando por enquanto", value: "pesquisando", score: 2 }
    ],
    key: "urgencia"
  }
];

// ===== ESTADO DO QUIZ =====
let currentQuestion = 0;
let answers = {};
let totalScore = 0;
let filteredQuestions = [];
let leadData = {};

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
    s.style.display = "none";
  });
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("active");
    el.style.display = "block";
  }
}

function startQuiz() {
  filteredQuestions = questions;
  currentQuestion = 0;
  answers = {};
  totalScore = 0;
  showScreen("screen-quiz");
  renderQuestion();
}

function renderQuestion() {
  const active = getActiveQuestions();
  const q = active[currentQuestion];
  if (!q) return;

  const total = active.length;
  const pct = Math.round(((currentQuestion) / total) * 100);
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-text").textContent = `Pergunta ${currentQuestion + 1} de ${total}`;

  const area = document.getElementById("question-area");
  area.innerHTML = `
    <div class="question-card">
      <div class="question-number">Pergunta ${currentQuestion + 1}</div>
      <h2 class="question-text">${q.text}</h2>
      ${q.hint ? `<p class="question-hint">${q.hint}</p>` : ""}
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="selectOption(${i})">${opt.label}</button>
        `).join("")}
      </div>
    </div>
  `;

  document.getElementById("btn-back").style.display = currentQuestion > 0 ? "block" : "none";
}

function getActiveQuestions() {
  return questions.filter(q => !q.conditional || q.conditional(answers));
}

function selectOption(index) {
  const active = getActiveQuestions();
  const q = active[currentQuestion];
  const opt = q.options[index];

  answers[q.key] = opt.value;
  totalScore += opt.score;

  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });

  setTimeout(() => {
    currentQuestion++;
    const newActive = getActiveQuestions();
    if (currentQuestion >= newActive.length) {
      showLoading();
    } else {
      renderQuestion();
    }
  }, 350);
}

function prevQuestion() {
  if (currentQuestion > 0) {
    const active = getActiveQuestions();
    const prev = active[currentQuestion - 1];
    if (prev && answers[prev.key]) {
      const removedOpt = prev.options.find(o => o.value === answers[prev.key]);
      if (removedOpt) totalScore -= removedOpt.score;
      delete answers[prev.key];
    }
    currentQuestion--;
    renderQuestion();
  }
}

// ===== LOADING =====
function showLoading() {
  showScreen("screen-loading");

  const steps = [
    { icon: "🔍", text: "Analisando suas respostas...",       sub: "Verificando seu perfil" },
    { icon: "💡", text: "Identificando oportunidades...",     sub: "Comparando planos disponíveis" },
    { icon: "📊", text: "Calculando sua economia...",          sub: "Quase pronto!" },
    { icon: "✅", text: "Diagnóstico concluído!",              sub: "Preparando seus resultados..." }
  ];

  let i = 0;
  let pct = 0;
  const bar  = document.getElementById("loading-bar");
  const text = document.getElementById("loading-text");
  const sub  = document.getElementById("loading-sub");
  const icon = document.getElementById("loading-icon");

  const interval = setInterval(() => {
    const s = steps[i] || steps[steps.length - 1];
    pct += 25;
    bar.style.width = pct + "%";
    icon.textContent = s.icon;
    text.textContent = s.text;
    sub.textContent  = s.sub;
    i++;
    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => showFinal(), 400);
    }
  }, 400);
}

// ===== CLASSIFICAÇÃO =====
function getClassification() {
  if (totalScore >= 90) return "premium";
  if (totalScore >= 60) return "quente";
  if (totalScore >= 35) return "morno";
  return "frio";
}

// ===== TELA FINAL (sem formulário) =====
function showFinal() {
  const cls = getClassification();

  const configs = {
    frio: {
      icon: "📋",
      badgeClass: "badge-frio",
      badgeText: "Diagnóstico pronto",
      title: "Você está dando o passo certo!",
      sub: "Encontramos opções que podem se encaixar muito bem no seu perfil. Converse com Ivan e descubra sem compromisso.",
      points: [
        "✅ Planos disponíveis para a sua região",
        "✅ Consultoria 100% gratuita",
        "✅ Ivan responde em até 24h"
      ],
      disclaimer: "Sem compromisso. Ivan explica tudo com calma."
    },
    morno: {
      icon: "🔥",
      badgeClass: "badge-morno",
      badgeText: "Oportunidade identificada",
      title: "Você pode estar pagando mais do que deveria!",
      sub: "Com base nas suas respostas, existe uma chance real de encontrar um plano melhor pelo mesmo preço ou menos.",
      points: [
        "⚠️ Possível desalinhamento entre cobertura e valor",
        "✅ Existem opções melhores para o seu perfil",
        "💰 Ivan faz a comparação gratuitamente para você"
      ],
      disclaimer: "Ivan atende em até 12h úteis."
    },
    quente: {
      icon: "🚨",
      badgeClass: "badge-quente",
      badgeText: "Atenção: ação recomendada",
      title: "Você está pagando caro por menos do que merece!",
      sub: "Seu diagnóstico indica alto potencial de economia. Outros clientes com o mesmo perfil economizaram até R$ 600 por mês.",
      points: [
        "🚨 Alto potencial de economia identificado",
        "🏥 Cobertura atual provavelmente inferior ao ideal",
        "⚡ Troca pode ser feita em menos de uma semana"
      ],
      disclaimer: "Atendimento prioritário — Ivan responde em até 2h."
    },
    premium: {
      icon: "⭐",
      badgeClass: "badge-premium",
      badgeText: "Perfil Premium",
      title: "Você tem acesso a condições exclusivas!",
      sub: "Seu perfil se enquadra em uma categoria especial. Ivan tem acesso a planos que não aparecem nas comparações comuns.",
      points: [
        "⭐ Planos premium com hospitais top do Brasil",
        "💼 Possível benefício fiscal para o seu perfil",
        "🤝 Proposta personalizada e exclusiva com Ivan"
      ],
      disclaimer: "Atendimento VIP — resposta imediata no horário comercial."
    }
  };

  const c = configs[cls];

  document.getElementById("final-icon").textContent       = c.icon;
  document.getElementById("final-badge").textContent      = c.badgeText;
  document.getElementById("final-badge").className        = `final-badge ${c.badgeClass}`;
  document.getElementById("final-title").textContent      = c.title;
  document.getElementById("final-sub").textContent        = c.sub;
  document.getElementById("final-disclaimer").textContent = c.disclaimer;
  document.getElementById("final-points").innerHTML       = c.points.map(p => `<p>${p}</p>`).join("");

  leadData = {
    score: totalScore,
    classificacao: cls,
    respostas: { ...answers },
    tipo_plano: answers.tipo_plano || "",
    orcamento: answers.orcamento || "",
    urgencia: answers.urgencia || "",
    principal_dor: answers.principal_dor || "",
    regiao: answers.regiao || "",
    timestamp: new Date().toISOString()
  };

  sendToCRM(leadData);
  showScreen("screen-final");
}

// ===== CRM / WEBHOOK =====
function sendToCRM(data) {
  const payload = {
    nome: data.nome,
    whatsapp: data.whatsapp,
    email: data.email,
    score: data.score,
    classificacao: data.classificacao,
    interesse_principal: data.tipo_plano,
    orcamento: data.orcamento,
    urgencia: data.urgencia,
    principal_dor: data.principal_dor,
    regiao: data.regiao,
    respostas_completas: data.respostas,
    timestamp: data.timestamp
  };

  // SUBSTITUIR pela URL do webhook (Make.com, Zapier, n8n, etc.)
  const WEBHOOK_URL = "https://SEU_WEBHOOK_AQUI";

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(() => {
    // silencia erro de webhook para não afetar o fluxo do usuário
  });

  console.log("Lead capturado:", payload);
}

// ===== WHATSAPP =====
function openWhatsApp() {
  const cls = leadData.classificacao || "frio";
  const msgs = {
    frio:    "Olá Ivan! Fiz o diagnóstico do quiz e gostaria de receber uma comparação gratuita de planos.",
    morno:   "Olá Ivan! Fiz o diagnóstico e parece que posso estar pagando mais do que deveria. Quero a análise comparativa gratuita!",
    quente:  "Olá Ivan! Fiz o diagnóstico e identifiquei que tenho uma oportunidade urgente de trocar de plano. Quero minha análise prioritária!",
    premium: "Olá Ivan! Meu diagnóstico identificou perfil premium. Gostaria de uma proposta exclusiva!"
  };
  const msg = encodeURIComponent(msgs[cls] || msgs.frio);
  window.open(`https://wa.me/${IVAN_WHATSAPP}?text=${msg}`, "_blank");
}
