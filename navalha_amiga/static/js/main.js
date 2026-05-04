document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileToggle?.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    mobileToggle.innerHTML = open ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu?.classList.remove('open');
      if (mobileToggle) mobileToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.demo-panel').forEach(panel => panel.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab)?.classList.add('active');
    });
  });

  const billingButtons = document.querySelectorAll('[data-billing]');
  function setBilling(period) {
    const annual = period === 'annual';
    billingButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.billing === period);
    });
    document.querySelectorAll('[data-monthly-price]').forEach(el => {
      el.textContent = annual ? el.dataset.annualPrice : el.dataset.monthlyPrice;
    });
    document.querySelectorAll('[data-monthly-period]').forEach(el => {
      el.textContent = annual ? el.dataset.annualPeriod : el.dataset.monthlyPeriod;
    });
    document.querySelectorAll('[data-monthly-note]').forEach(el => {
      el.textContent = annual ? el.dataset.annualNote : el.dataset.monthlyNote;
      el.classList.toggle('annual', annual);
    });
  }
  billingButtons.forEach(button => button.addEventListener('click', () => setBilling(button.dataset.billing)));
  setBilling('annual');

  const supportScriptUrl = document.querySelector("script[data-support-src]")?.dataset.supportSrc;
  let supportLoader = null;

  function loadSupport() {
    if (window.NivelaSupport) return Promise.resolve(window.NivelaSupport);
    if (!supportScriptUrl) return Promise.resolve(null);
    if (!supportLoader) {
      supportLoader = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = supportScriptUrl;
        script.defer = true;
        script.onload = () => resolve(window.NivelaSupport);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    return supportLoader;
  }

  function openSupportModalLazy() {
    loadSupport().then(support => support?.open?.());
  }

  document.getElementById("supportFab")?.addEventListener("click", openSupportModalLazy);
  document.querySelectorAll("[data-help-open]").forEach(button => {
    button.addEventListener("click", openSupportModalLazy);
  });

  const modalContent = {
    sobre: {
      title: 'Sobre nós',
      body: [
        'O Nivela nasceu para tirar barbearias do improviso e colocar agenda, fila, caixa, estoque, assinaturas e equipe em uma rotina organizada.',
        'A proposta é ser um sistema premium, direto e operacional: bonito o bastante para gerar confiança, simples o bastante para ser usado todos os dias.'
      ]
    },
    implantacao: {
      title: 'Implantação',
      body: [
        'A implantação começa pela configuração da rotina real da barbearia: serviços, profissionais, horários, formas de pagamento, permissões e regras de caixa.',
        'O objetivo é colocar o sistema para rodar com o mínimo de fricção, preservando o jeito da operação trabalhar e tirando os controles paralelos do caminho.'
      ]
    },
    contato: {
      title: 'Contato',
      body: [
        'Para falar com o time Nivela, use os canais oficiais de atendimento comercial e suporte. A resposta deve ser objetiva, com foco em entender o tamanho da barbearia e o melhor plano.',
        'Clientes ativos também podem acessar o sistema pela área exclusiva e buscar suporte pela Central de Ajuda.'
      ]
    },
    termos: {
      title: 'Termos de Uso',
      body: [
        'Os Termos de Uso definem as regras de acesso ao Nivela, responsabilidades de uso, limites da conta, condições de assinatura e disponibilidade do serviço.',
        'As informações completas devem ser consultadas nos documentos oficiais disponibilizados pelo Nivela.'
      ]
    },
    privacidade: {
      title: 'Privacidade',
      body: [
        'A política de privacidade explica como dados de barbearias, usuários e clientes são tratados para permitir agenda, atendimento, financeiro, estoque e suporte.',
        'O compromisso é coletar apenas o necessário para operar o sistema com segurança e transparência.'
      ]
    },
    lgpd: {
      title: 'LGPD',
      body: [
        'A área de LGPD reúne informações sobre tratamento de dados, bases legais, direitos dos titulares e canais para solicitações relacionadas a privacidade.',
        'O Nivela deve apoiar a barbearia no uso responsável dos dados dos seus clientes, sem transformar a operação em burocracia.'
      ]
    },
    cookies: {
      title: 'Cookies',
      body: [
        'Cookies podem ser usados para manter sessão, melhorar navegação, medir desempenho da página e entender quais áreas ajudam melhor o visitante.',
        'As preferências e finalidades ficam disponíveis nos avisos e documentos oficiais de privacidade.'
      ]
    },
    ajuda: {
      title: 'Central de Ajuda',
      body: [
        'A Central de Ajuda concentra guias rápidos para configurar agenda, cadastrar serviços, controlar fila, abrir caixa, acompanhar estoque e criar planos.',
        'O foco é resolver dúvidas no ritmo da barbearia: respostas curtas, exemplos claros e caminhos diretos para voltar ao atendimento.'
      ]
    }
  };

  const modal = document.getElementById('institutionalModal');
  const modalTitle = document.getElementById('institutionalTitle');
  const modalBody = document.getElementById('institutionalBody');
  const modalClose = document.getElementById('institutionalClose');
  let lastFocusedElement = null;

  function closeInstitutionalModal() {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    lastFocusedElement?.focus?.();
  }

  function openInstitutionalModal(key, trigger) {
    const content = modalContent[key];
    if (!content || !modal || !modalTitle || !modalBody) return;
    lastFocusedElement = trigger;
    modalTitle.textContent = content.title;
    modalBody.textContent = '';
    content.body.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      modalBody.appendChild(p);
    });
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalClose?.focus();
  }

  document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => openInstitutionalModal(button.dataset.modal, button));
  });
  modalClose?.addEventListener('click', closeInstitutionalModal);
  modal?.addEventListener('click', event => {
    if (event.target === modal) closeInstitutionalModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal?.classList.contains('open')) {
      closeInstitutionalModal();
    }
    if (event.key === 'Escape' && window.NivelaSupport?.isOpen?.()) {
      window.NivelaSupport.close();
    }
  });

  const routeParams = new URLSearchParams(window.location.search);
  const requestedModal = routeParams.get('modal');
  const requestedHelp = routeParams.get('help');
  const requestedPlan = routeParams.get('plano');
  const planLabels = {
    'solo': 'Solo',
    'equipe': 'Equipe',
    'profissional': 'Profissional',
    'enterprise': 'Enterprise',
    'unidade-pro': 'Profissional',
    'fiscal-pro': 'Enterprise'
  };
  if (requestedModal === 'contato' && planLabels[requestedPlan]) {
    modalContent.contato = {
      title: `Contato - ${planLabels[requestedPlan]}`,
      body: [
        `Você selecionou o plano ${planLabels[requestedPlan]}. O próximo passo é entender a rotina da barbearia, quantidade de profissionais, volume de agenda e pontos de controle que precisam entrar na implantação.`,
        'O atendimento comercial deve confirmar o melhor plano, explicar o acesso anual ou mensal e orientar a abertura da conta sem deixar o dono preso em termos técnicos.'
      ]
    };
  }
  if (requestedHelp === '1' || requestedModal === 'ajuda') {
    openSupportModalLazy();
  } else if (requestedModal && modalContent[requestedModal]) {
    openInstitutionalModal(requestedModal, null);
  }

  document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => openItem.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
});
