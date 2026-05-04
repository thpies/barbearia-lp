(() => {
const supportTopics = [
  {
    id: 'teste',
    category: 'Começo',
    title: 'Como funcionam os 7 dias de cortesia?',
    summary: 'Teste o Nivela na rotina antes de decidir.',
    keywords: ['teste', 'cortesia', '7 dias', 'gratis', 'grátis', 'experimentar', 'sem compromisso', 'cartao', 'cartão'],
    answer: [
      'Os 7 dias de cortesia servem para você sentir o Nivela na prática antes de decidir. A intenção é testar agenda, fila, caixa, equipe e os primeiros cadastros sem pressão comercial.',
      'Durante esse período, use o sistema como se estivesse em operação real: cadastre serviços, profissionais, horários, formas de pagamento e simule atendimentos do dia. Assim você percebe se o fluxo reduz retrabalho e se a equipe consegue acompanhar.',
      'Ao final do período, o próximo passo é escolher o plano que combina com o tamanho da barbearia. Se o sistema não fizer sentido para a rotina, você não precisa seguir adiante.'
    ],
    steps: ['Escolha o plano que mais parece com a sua operação.', 'Configure serviços, horários e profissionais básicos.', 'Teste agenda, fila e caixa por alguns dias antes de decidir.'],
    related: ['implantacao', 'planos']
  },
  {
    id: 'implantacao',
    category: 'Começo',
    title: 'Como começar a usar sem bagunçar a barbearia?',
    summary: 'Ordem recomendada para colocar o sistema em funcionamento.',
    keywords: ['começar', 'comecar', 'implantacao', 'implantação', 'configurar', 'primeiro acesso', 'onboarding', 'dados'],
    answer: [
      'O melhor começo é cadastrar apenas o essencial: serviços, profissionais, horários, formas de pagamento e permissões iniciais. Você não precisa colocar tudo perfeito no primeiro dia.',
      'Depois disso, teste a agenda e o caixa em uma rotina pequena. Quando o fluxo principal estiver confortável, avance para estoque, planos de assinatura, relatórios e ajustes mais finos.',
      'Essa ordem evita que a barbearia pare para configurar sistema. O Nivela deve entrar na operação aos poucos, sem virar mais uma tarefa pesada.'
    ],
    steps: ['Cadastre serviços e duração média.', 'Adicione profissionais e horários.', 'Abra o caixa e teste um atendimento completo.', 'Depois evolua para estoque, planos e relatórios.'],
    related: ['agenda', 'caixa']
  },
  {
    id: 'login',
    category: 'Acesso',
    title: 'Não consigo entrar no sistema. O que fazer?',
    summary: 'Verificações rápidas para acesso, senha e conta ativa.',
    keywords: ['login', 'entrar', 'senha', 'acesso', 'conta', 'email', 'não consigo acessar', 'nao consigo acessar'],
    answer: [
      'Primeiro confirme se está usando o email correto da conta e se não há espaço antes ou depois do endereço. Em seguida, tente redefinir a senha pelo fluxo de acesso do sistema.',
      'Se você é barbeiro, gerente ou auxiliar, o dono ou administrador da conta pode precisar liberar seu usuário e suas permissões. Nem todo acesso mostra as mesmas áreas.',
      'Se a conta estiver ativa e mesmo assim o acesso falhar, envie o email usado no login, telefone e uma foto da mensagem exibida para que o suporte consiga identificar o bloqueio.'
    ],
    steps: ['Confira o email digitado.', 'Tente redefinir a senha.', 'Peça ao administrador para confirmar suas permissões.', 'Se persistir, abra atendimento com foto da tela.'],
    related: ['permissoes', 'mobile']
  },
  {
    id: 'agenda',
    category: 'Agenda',
    title: 'Como funciona a agenda online?',
    summary: 'Link público, horários disponíveis e organização por profissional.',
    keywords: ['agenda', 'agendamento', 'horario', 'horário', 'marcar', 'link', 'cliente marcar', 'reserva'],
    answer: [
      'A agenda online permite que o cliente escolha serviço, profissional e horário disponível pelo link público da barbearia. Isso reduz conversa repetida no WhatsApp e evita conflito de horários.',
      'Dentro do sistema, a equipe acompanha status como reservado, confirmado, pendente ou concluído. O dono também consegue enxergar a agenda por profissional para entender movimento e ocupação.',
      'O ideal é manter serviços, durações e horários atualizados. Se esses dados estiverem corretos, o link público trabalha a favor da operação.'
    ],
    steps: ['Cadastre serviços e duração.', 'Defina horários de funcionamento.', 'Configure profissionais disponíveis.', 'Compartilhe o link público na bio, Google e mensagens.'],
    related: ['fila', 'mobile']
  },
  {
    id: 'fila',
    category: 'Atendimento',
    title: 'Dá para atender cliente que chega sem marcar?',
    summary: 'Fila presencial para encaixes e atendimento por ordem.',
    keywords: ['fila', 'encaixe', 'chegou sem marcar', 'presencial', 'chamar', 'atendimento'],
    answer: [
      'Sim. A fila presencial existe para clientes que chegam sem horário marcado ou para encaixes do dia. A equipe adiciona o cliente, chama quando chegar a vez, inicia o atendimento e conclui no fim.',
      'Isso evita depender de lista em papel, grupo de mensagem ou memória do balcão. A barbearia passa a ter uma visão clara de quem está aguardando, quem está em atendimento e quem já foi concluído.',
      'Quando usada junto com a agenda, a fila ajuda a equilibrar horário marcado e movimento espontâneo.'
    ],
    steps: ['Adicione o cliente na fila.', 'Informe serviço e preferência, se houver.', 'Chame, inicie e conclua o atendimento.', 'Feche o pedido no caixa quando necessário.'],
    related: ['agenda', 'caixa']
  },
  {
    id: 'caixa',
    category: 'Financeiro',
    title: 'Como o fechamento do caixa ajuda no controle?',
    summary: 'Abertura, despesas, saldo esperado e conferência do dia.',
    keywords: ['caixa', 'fechamento', 'abrir caixa', 'fechar caixa', 'saldo', 'pagamento', 'pix', 'cartão', 'cartao', 'dinheiro'],
    answer: [
      'O caixa diário organiza entradas, despesas, formas de pagamento e fechamento em um único fluxo. A ideia é comparar o saldo esperado com o valor informado no fim do dia.',
      'Serviços, produtos e assinaturas deixam de ficar soltos. Quando um pedido é fechado corretamente, o financeiro e os relatórios ganham mais consistência.',
      'O dono passa a revisar o dia por registro, não por lembrança. Isso reduz divergência, esquecimento de despesa e dúvida sobre forma de pagamento.'
    ],
    steps: ['Abra o caixa no início da operação.', 'Registre pedidos e despesas durante o dia.', 'Confira formas de pagamento.', 'Feche comparando esperado e informado.'],
    related: ['financeiro', 'relatorios']
  },
  {
    id: 'financeiro',
    category: 'Financeiro',
    title: 'O que entra no financeiro?',
    summary: 'Contas, despesas, recebimentos, assinaturas e visão de resultado.',
    keywords: ['financeiro', 'contas', 'despesas', 'receita', 'faturamento', 'lucro', 'receber', 'pagar', 'assinaturas'],
    answer: [
      'O financeiro reúne informações que ajudam a entender se a barbearia está apenas movimentada ou realmente saudável. Entram receitas, despesas, contas a pagar, contas a receber e assinaturas.',
      'No repositório do sistema, o financeiro também trabalha com leitura guiada: faturamento, despesas pagas, lucro real, meta mensal, receita de assinaturas e relatórios por período.',
      'Quanto mais a equipe registra pedidos, caixa e despesas corretamente, mais útil fica a leitura financeira para decisões de preço, escala e crescimento.'
    ],
    steps: ['Registre despesas e recebimentos.', 'Feche pedidos corretamente.', 'Acompanhe contas em aberto.', 'Use relatórios para comparar períodos.'],
    related: ['caixa', 'relatorios']
  },
  {
    id: 'relatorios',
    category: 'Financeiro',
    title: 'Quais relatórios posso consultar ou enviar ao contador?',
    summary: 'Período, serviços, produtos, profissionais e exportação.',
    keywords: ['relatorio', 'relatório', 'contador', 'exportar', 'pdf', 'excel', 'planilha', 'comissão', 'comissao'],
    answer: [
      'Os relatórios servem para transformar registros do dia em leitura de gestão. Você pode acompanhar faturamento, ticket médio, retorno, no-show, produtos vendidos, assinaturas e desempenho por profissional.',
      'Para conferência ou contabilidade, a exportação em planilha ou PDF ajuda a enviar dados organizados sem remontar tudo manualmente.',
      'Relatório bom depende de rotina registrada. Se caixa, pedidos e equipe são usados corretamente, os números ficam mais confiáveis.'
    ],
    steps: ['Filtre o período desejado.', 'Compare serviços, produtos e profissionais.', 'Exporte quando precisar conferir ou enviar ao contador.'],
    related: ['financeiro', 'equipe']
  },
  {
    id: 'estoque',
    category: 'Operação',
    title: 'Como controlar produtos e estoque mínimo?',
    summary: 'Cadastro de produtos, quantidade atual e alerta para compra.',
    keywords: ['estoque', 'produto', 'produtos', 'pomada', 'comprar', 'estoque mínimo', 'estoque minimo', 'alerta'],
    answer: [
      'O estoque permite cadastrar produtos, acompanhar quantidade atual e definir estoque mínimo. Quando um item se aproxima do limite, o sistema sinaliza que precisa de atenção.',
      'Isso ajuda tanto em venda de balcão quanto em insumos usados na operação. A barbearia evita perceber falta de produto apenas quando o cliente pede ou o barbeiro precisa usar.',
      'Para funcionar bem, ajuste entradas e saídas com frequência. Estoque desatualizado vira número bonito, mas pouco útil.'
    ],
    steps: ['Cadastre produto e unidade de medida.', 'Informe quantidade atual.', 'Defina estoque mínimo.', 'Acompanhe alertas e ajuste movimentações.'],
    related: ['caixa', 'relatorios']
  },
  {
    id: 'planos',
    category: 'Assinaturas',
    title: 'Como funcionam planos de assinatura e créditos?',
    summary: 'Recorrência, créditos por ciclo e renovação.',
    keywords: ['plano', 'planos', 'assinatura', 'crédito', 'creditos', 'recorrencia', 'recorrência', 'renovar', 'mensal'],
    answer: [
      'Os planos de assinatura ajudam a criar receita mais previsível. Você define o plano, valor, créditos por ciclo e quais serviços ou produtos entram no benefício.',
      'Quando o cliente usa um crédito, a equipe registra o consumo. Na renovação, o sistema adiciona novos créditos e registra a receita no financeiro.',
      'Esse fluxo é útil para fidelizar clientes, reduzir dependência de movimento aleatório e acompanhar compromissos já vendidos pela barbearia.'
    ],
    steps: ['Crie o plano com valor e créditos.', 'Ative para o cadastro do cliente.', 'Registre o consumo dos créditos.', 'Renove quando chegar o ciclo combinado.'],
    related: ['financeiro', 'agenda']
  },
  {
    id: 'equipe',
    category: 'Equipe',
    title: 'Como gerenciar profissionais e comissões?',
    summary: 'Agenda por profissional, comissão e desempenho.',
    keywords: ['equipe', 'barbeiro', 'profissional', 'profissionais', 'comissão', 'comissao', 'gerente', 'cargo'],
    answer: [
      'A gestão de equipe permite acompanhar profissionais ativos, agenda por barbeiro, comissões e acesso por função. Isso ajuda a separar atendimento, operação e administração.',
      'Quando pedidos e caixa são fechados corretamente, a comissão pode ser acompanhada com mais clareza. O dono deixa de depender de cálculo manual no fim do mês.',
      'Também fica mais fácil entender produtividade, agenda cheia, clientes por profissional e necessidade de ajuste na escala.'
    ],
    steps: ['Cadastre profissionais.', 'Defina agenda e função.', 'Configure comissão quando aplicável.', 'Acompanhe relatórios por profissional.'],
    related: ['permissoes', 'relatorios']
  },
  {
    id: 'permissoes',
    category: 'Acesso',
    title: 'Como controlar o que cada funcionário vê?',
    summary: 'Perfis para dono, gerente, barbeiro e auxiliar.',
    keywords: ['permissão', 'permissao', 'permissões', 'permissoes', 'acesso', 'funcionario', 'funcionário', 'usuario', 'usuário', 'barbeiro ver', 'cada barbeiro', 'quem consegue ver', 'o que cada um vê', 'bloquear financeiro', 'esconder caixa', 'cargo', 'perfil'],
    answer: [
      'As permissões evitam que todo mundo veja tudo. O dono pode liberar acessos diferentes para gerente, barbeiro, auxiliar e administração.',
      'Quem atende precisa enxergar agenda, fila e pedidos. Quem administra pode precisar de caixa, financeiro, relatórios, equipe e configurações.',
      'Essa separação protege áreas sensíveis e reduz erro operacional, sem bloquear o trabalho diário de quem está atendendo.'
    ],
    steps: ['Defina o papel do usuário.', 'Libere apenas as áreas necessárias.', 'Revise permissões quando alguém mudar de função.'],
    related: ['login', 'equipe']
  },
  {
    id: 'mobile',
    category: 'Acesso',
    title: 'O cliente ou a equipe precisa baixar aplicativo?',
    summary: 'Acesso pelo navegador e atalho na tela inicial.',
    keywords: ['aplicativo', 'baixar', 'app', 'celular', 'atalho', 'mobile', 'navegador'],
    answer: [
      'O cliente não precisa baixar aplicativo para agendar. Ele abre o link público pelo navegador, escolhe serviço, profissional e horário disponível.',
      'A equipe também pode acessar pelo navegador do celular. Quando fizer sentido, é possível salvar um atalho na tela inicial para abrir com aparência de aplicativo.',
      'Isso reduz barreira para cliente e equipe, principalmente no início da implantação.'
    ],
    steps: ['Compartilhe o link público com clientes.', 'Acesse o sistema pelo navegador no celular.', 'Salve o atalho na tela inicial se usar com frequência.'],
    related: ['agenda', 'login']
  },
  {
    id: 'planos-comerciais',
    category: 'Comercial',
    title: 'Qual plano do Nivela escolher?',
    summary: 'Solo, Equipe, Profissional ou Enterprise.',
    keywords: ['preço', 'preco', 'valor', 'plano solo', 'plano equipe', 'profissional', 'enterprise', 'multiunidade', 'filiais', 'rede'],
    answer: [
      'Solo é indicado para barbeiro autônomo. Equipe é para barbearias com mais profissionais e atendimento presencial mais movimentado. Profissional é para uma unidade que precisa enxergar caixa, estoque, recorrência e relatórios.',
      'Enterprise é para dono com mais de uma barbearia, filiais, gestores por unidade e necessidade de padronizar financeiro, permissões e operação.',
      'Se houver dúvida, comece pelo plano que mais parece com sua operação atual. O objetivo é subir de plano quando a rotina realmente exigir, não antes.'
    ],
    steps: ['Conte quantos profissionais usam o sistema.', 'Avalie se existe uma ou mais unidades.', 'Veja se precisa de financeiro avançado, relatórios e permissões.'],
    related: ['teste', 'enterprise']
  },
  {
    id: 'enterprise',
    category: 'Rede',
    title: 'Quando faz sentido falar de Enterprise?',
    summary: 'Filiais, gestores, padronização e visão de rede.',
    keywords: ['enterprise', 'filial', 'filiais', 'rede', 'unidades', 'multiunidade', 'mais de uma barbearia', 'grupo'],
    answer: [
      'Enterprise faz sentido quando o dono já não gerencia apenas uma cadeira ou uma unidade. A preocupação passa a ser padrão de atendimento, visão por filial, permissões de gerentes e leitura financeira comparável.',
      'Esse nível pede implantação mais cuidadosa: mapear unidades, profissionais, formas de pagamento, regras de caixa, relatórios e responsabilidades por perfil.',
      'A meta é reduzir operação solta entre filiais. Cada unidade pode ter sua rotina, mas a gestão precisa enxergar a rede com a mesma lógica.'
    ],
    steps: ['Mapeie unidades e responsáveis.', 'Defina permissões por função.', 'Padronize agenda, fila, caixa e relatórios.', 'Acompanhe indicadores por filial.'],
    related: ['financeiro', 'permissoes']
  },
  {
    id: 'seguranca',
    category: 'Segurança',
    title: 'Meus dados e clientes ficam protegidos?',
    summary: 'Dados operacionais, acesso por perfil e privacidade.',
    keywords: ['segurança', 'seguranca', 'dados', 'lgpd', 'privacidade', 'clientes', 'proteção', 'protecao'],
    answer: [
      'O Nivela trabalha com dados necessários para agenda, atendimento, caixa, financeiro, estoque e suporte. O foco é organizar a operação sem expor informações além do necessário.',
      'Permissões por perfil ajudam a proteger áreas sensíveis. Um barbeiro não precisa necessariamente enxergar financeiro completo; um gerente pode ter acesso maior conforme a função.',
      'Para dúvidas formais de privacidade, consulte os documentos de Privacidade, LGPD e Termos no rodapé.'
    ],
    steps: ['Use permissões por perfil.', 'Evite compartilhar senha.', 'Revise acessos de quem saiu da equipe.', 'Consulte documentos legais quando necessário.'],
    related: ['permissoes', 'login']
  },
  {
    id: 'cancelamento',
    category: 'Planos',
    title: 'Existe fidelidade ou posso parar?',
    summary: 'Entenda mensal, anual e continuidade.',
    keywords: ['cancelar', 'cancelamento', 'fidelidade', 'parar', 'mensal', 'anual', 'cobrança', 'cobranca'],
    answer: [
      'O plano mensal é pensado para reduzir barreira de entrada. O anual existe para quem já decidiu usar o sistema por mais tempo e quer aproveitar a condição melhor.',
      'Antes de decidir, use os 7 dias de cortesia para sentir a rotina. O objetivo é contratar porque o sistema resolveu um problema claro, não por pressão.',
      'Em qualquer dúvida comercial, fale com atendimento para confirmar prazos, condições e o melhor formato para sua barbearia.'
    ],
    steps: ['Teste por 7 dias.', 'Escolha mensal se quiser começar com flexibilidade.', 'Escolha anual quando já souber que faz sentido.'],
    related: ['teste', 'planos-comerciais']
  }
];

const supportCategories = ['Todos', 'Começo', 'Agenda', 'Atendimento', 'Financeiro', 'Operação', 'Assinaturas', 'Equipe', 'Acesso', 'Comercial', 'Rede', 'Segurança', 'Planos'];
const supportIntentGroups = [
  {
    topics: ['permissoes', 'equipe', 'login'],
    weight: 7,
    terms: ['quem pode ver', 'consegue ver', 'cada barbeiro', 'barbeiro ver', 'barbeiro consegue acessar', 'o que barbeiro ve', 'o que barbeiro vê', 'funcionario ver', 'funcionário ver', 'o que cada um ve', 'o que cada um vê', 'liberar acesso', 'bloquear acesso', 'esconder financeiro', 'esconder caixa', 'perfil de acesso', 'cargo', 'permissao', 'permissão', 'visibilidade']
  },
  {
    topics: ['login', 'permissoes', 'mobile'],
    weight: 6.5,
    terms: ['nao consigo entrar', 'não consigo entrar', 'nao entra', 'não entra', 'erro de login', 'senha', 'esqueci senha', 'recuperar senha', 'email de acesso', 'entrar no sistema', 'conta bloqueada', 'primeiro acesso']
  },
  {
    topics: ['agenda', 'fila', 'mobile'],
    weight: 6,
    terms: ['marcar horario', 'marcar horário', 'cliente marca', 'link da bio', 'link publico', 'link público', 'agenda online', 'horario disponivel', 'horário disponível', 'encaixe', 'chegou sem marcar', 'sem agendar', 'fila de espera']
  },
  {
    topics: ['caixa', 'financeiro', 'relatorios'],
    weight: 6,
    terms: ['fechar caixa', 'caixa fecha', 'caixa nao fecha', 'caixa não fecha', 'abrir caixa', 'saldo do dia', 'valor nao bate', 'valor não bate', 'forma de pagamento', 'pix', 'cartao', 'cartão', 'dinheiro', 'conferir recebimento', 'entrada e saida', 'entrada e saída', 'despesa', 'lucro', 'faturamento']
  },
  {
    topics: ['estoque', 'caixa', 'relatorios'],
    weight: 5,
    terms: ['produto acabou', 'falta produto', 'estoque minimo', 'estoque mínimo', 'venda de produto', 'pomada', 'insumo', 'quantidade atual', 'alerta de compra']
  },
  {
    topics: ['planos', 'planos-comerciais', 'cancelamento', 'teste'],
    weight: 5.5,
    terms: ['assinatura do cliente', 'credito mensal', 'crédito mensal', 'plano de cliente', 'recorrencia', 'recorrência', 'renovacao', 'renovação', 'mensalidade', 'cortesia', 'teste gratis', 'teste grátis', 'cancelar', 'fidelidade']
  },
  {
    topics: ['enterprise', 'financeiro', 'permissoes'],
    weight: 6.5,
    terms: ['mais de uma unidade', 'mais de uma barbearia', 'filiais', 'filial', 'rede', 'multiunidade', 'gerente por unidade', 'comparar unidades', 'dono de rede', 'grupo de barbearias']
  },
  {
    topics: ['relatorios', 'financeiro', 'equipe'],
    weight: 5.5,
    terms: ['enviar contador', 'mandar contador', 'exportar', 'pdf', 'planilha', 'excel', 'comissao', 'comissão', 'desempenho do barbeiro', 'relatorio', 'relatório']
  },
  {
    topics: ['mobile', 'agenda', 'login'],
    weight: 5,
    terms: ['baixar app', 'tem aplicativo', 'instalar aplicativo', 'atalho no celular', 'abrir no celular', 'navegador do celular', 'pwa', 'link no celular']
  },
  {
    topics: ['seguranca', 'permissoes', 'privacidade'],
    weight: 5,
    terms: ['dados protegidos', 'dados dos clientes', 'privacidade', 'lgpd', 'seguranca', 'segurança', 'senha compartilhada', 'proteger informação', 'proteger informacao']
  }
];
const supportStopWords = new Set(['a', 'o', 'os', 'as', 'um', 'uma', 'uns', 'umas', 'de', 'da', 'do', 'das', 'dos', 'e', 'ou', 'que', 'qual', 'quais', 'como', 'para', 'pra', 'por', 'com', 'sem', 'em', 'no', 'na', 'nos', 'nas', 'ao', 'aos', 'eu', 'meu', 'minha', 'meus', 'minhas', 'ele', 'ela', 'eles', 'elas', 'cada', 'sobre', 'saber', 'tentando', 'estava', 'estou', 'ter', 'tem', 'tenho']);
const supportQuizQuestions = [
  {
    step: '1 de 3',
    title: 'O que você quer resolver agora?',
    description: 'Escolha o bloco que mais parece com a sua dúvida. Não precisa acertar o nome técnico.',
    options: [
      { icon: 'bi-calendar2-check', label: 'Agenda e cliente marcando horário', helper: 'Link público, horários, confirmação e agenda por profissional.', scores: { agenda: 5, mobile: 1.5, fila: 1 } },
      { icon: 'bi-person-lines-fill', label: 'Atendimento do dia ou cliente sem horário', helper: 'Fila, encaixe, pedido em andamento e rotina presencial.', scores: { fila: 5, agenda: 1.5, caixa: 1 } },
      { icon: 'bi-cash-coin', label: 'Caixa, pagamento ou dinheiro', helper: 'Fechamento, saldo, PIX, cartão, despesas e conferência.', scores: { caixa: 5, financeiro: 3, relatorios: 1 } },
      { icon: 'bi-person-badge', label: 'Equipe, acesso ou comissão', helper: 'Profissionais, cargos, permissões e o que cada pessoa enxerga.', scores: { equipe: 4, permissoes: 4, relatorios: 1 } },
      { icon: 'bi-box-seam', label: 'Estoque ou produto', helper: 'Produto vendido, insumo, alerta de compra e estoque mínimo.', scores: { estoque: 5, caixa: 1, relatorios: 1 } },
      { icon: 'bi-gem', label: 'Planos, assinatura ou valor', helper: '7 dias, plano ideal, mensalidade, recorrência e cancelamento.', scores: { 'planos-comerciais': 3, planos: 3, teste: 2, cancelamento: 1 } },
      { icon: 'bi-buildings', label: 'Filiais ou operação maior', helper: 'Mais de uma unidade, gerentes, padrão de rede e visão por filial.', scores: { enterprise: 6, financeiro: 2, permissoes: 1 } },
      { icon: 'bi-shield-lock', label: 'Login, celular ou segurança', helper: 'Acesso, senha, uso no telefone, privacidade e dados.', scores: { login: 4, mobile: 2, seguranca: 2, permissoes: 1 } }
    ]
  },
  {
    step: '2 de 3',
    title: 'Qual ação você está tentando fazer?',
    description: 'Aqui a Central separa dúvida comercial, configuração e problema de rotina.',
    options: [
      { icon: 'bi-sliders', label: 'Configurar pela primeira vez', helper: 'Quero organizar o começo sem parar a barbearia.', scores: { implantacao: 5, teste: 2, agenda: 1, caixa: 1 } },
      { icon: 'bi-link-45deg', label: 'Deixar o cliente resolver sozinho', helper: 'Agendamento, link público e menos conversa repetida.', scores: { agenda: 5, mobile: 2, fila: 1 } },
      { icon: 'bi-eye', label: 'Definir o que funcionário pode ver', helper: 'Dono, gerente, barbeiro, auxiliar e áreas sensíveis.', scores: { permissoes: 6, equipe: 2, login: 1 } },
      { icon: 'bi-receipt', label: 'Conferir valor que não bate', helper: 'Caixa, pagamentos, despesas e fechamento do dia.', scores: { caixa: 6, financeiro: 3, relatorios: 1 } },
      { icon: 'bi-graph-up-arrow', label: 'Enxergar números ou enviar ao contador', helper: 'Relatórios, desempenho, exportação e leitura financeira.', scores: { relatorios: 6, financeiro: 4, equipe: 1 } },
      { icon: 'bi-arrow-repeat', label: 'Criar recorrência com clientes', helper: 'Assinatura, créditos, renovação e receita previsível.', scores: { planos: 6, financeiro: 2, agenda: 1 } },
      { icon: 'bi-boxes', label: 'Saber quando comprar produto', helper: 'Estoque mínimo, entrada, saída e venda de balcão.', scores: { estoque: 6, caixa: 1 } },
      { icon: 'bi-diagram-3', label: 'Padronizar mais de uma unidade', helper: 'Filiais, gestores, permissões e comparativo por unidade.', scores: { enterprise: 6, permissoes: 2, financeiro: 2 } }
    ]
  },
  {
    step: '3 de 3',
    title: 'Qual frase parece mais com o momento?',
    description: 'Último clique. A recomendação já aparece depois disso.',
    options: [
      { icon: 'bi-lightning-charge', label: 'Quero resolver sozinho agora', helper: 'Prefiro uma resposta direta e um passo a passo.', scores: { agenda: 1, caixa: 1, permissoes: 1, estoque: 1 } },
      { icon: 'bi-cup-hot', label: 'Ainda estou avaliando se vale a pena', helper: 'Quero entender antes de testar ou contratar.', scores: { teste: 4, 'planos-comerciais': 3, implantacao: 1 } },
      { icon: 'bi-exclamation-circle', label: 'Estou travado em algo específico', helper: 'Já tentei fazer e quero saber onde ir.', scores: { login: 2, caixa: 2, agenda: 1, permissoes: 1 } },
      { icon: 'bi-people', label: 'Tenho equipe e preciso evitar bagunça', helper: 'Acesso, função, comissão e rotina de profissionais.', scores: { equipe: 4, permissoes: 4, relatorios: 1 } },
      { icon: 'bi-wallet2', label: 'Preciso parar de controlar dinheiro no improviso', helper: 'Caixa, financeiro, relatório e decisão com número.', scores: { financeiro: 4, caixa: 3, relatorios: 2 } },
      { icon: 'bi-building-check', label: 'Meu problema já é escala', helper: 'Mais unidade, mais gente, mais regra e menos tolerância a erro.', scores: { enterprise: 5, financeiro: 2, permissoes: 2 } }
    ]
  }
];
const supportModal = document.getElementById('supportModal');
const supportClose = document.getElementById('supportClose');
const supportQuizStart = document.getElementById('supportQuizStart');
const supportChips = document.getElementById('supportChips');
const supportList = document.getElementById('supportList');
const supportAnswer = document.getElementById('supportAnswer');
const supportContact = document.getElementById('supportContact');
const supportLayout = document.querySelector('.support-layout');
const supportSearch = document.getElementById('supportSearch');
const supportForm = document.getElementById('supportForm');
const supportProblem = document.getElementById('supportProblem');
const supportSuggestion = document.getElementById('supportSuggestion');
const supportFiles = document.getElementById('supportFiles');
const supportFileText = document.getElementById('supportFileText');
const supportStatus = document.getElementById('supportStatus');
let activeSupportCategory = 'Todos';
let activeSupportTopic = supportTopics[0].id;
let forceSpecialistSupport = false;
let lastSupportFocus = null;
let supportQuizIndex = 0;
let supportQuizScores = {};
let supportQuizTrail = [];
let supportQuizAnswers = [];

function normalizeSupportText(value) {
  return (value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function supportStem(word) {
  if (word.length <= 4) return word;
  return word
    .replace(/(mente|coes|cao|oes|ais|eis)$/g, '')
    .replace(/r$/g, '')
    .replace(/s$/g, '');
}

function supportTokens(value) {
  return normalizeSupportText(value)
    .split(' ')
    .filter(word => word.length > 2 && !supportStopWords.has(word))
    .map(supportStem);
}

function supportTopicDocument(topic) {
  return normalizeSupportText([
    topic.title,
    topic.summary,
    topic.category,
    ...(topic.keywords || []),
    ...(topic.answer || []),
    ...(topic.steps || [])
  ].join(' '));
}

function getSupportTopic(id) {
  return supportTopics.find(topic => topic.id === id) || supportTopics[0];
}

function getSupportMatch(topic, query) {
  const normalizedQuery = normalizeSupportText(query);
  if (!normalizedQuery) return { topic, score: 0, confidence: 'baixa' };

  const queryTokens = supportTokens(normalizedQuery);
  const topicDocument = supportTopicDocument(topic);
  const topicTokens = new Set(supportTokens(topicDocument));
  let score = 0;

  if (topicDocument.includes(normalizedQuery)) score += 6;

  queryTokens.forEach(token => {
    if (topicTokens.has(token)) {
      score += 1.15;
      return;
    }
    for (const topicToken of topicTokens) {
      if (token.length > 4 && topicToken.length > 4 && (topicToken.startsWith(token) || token.startsWith(topicToken))) {
        score += 0.55;
        break;
      }
    }
  });

  (topic.keywords || []).forEach(keyword => {
    const normalizedKeyword = normalizeSupportText(keyword);
    if (!normalizedKeyword) return;
    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.includes(' ') ? 5.25 : 3.25;
      return;
    }
    const keywordTokens = supportTokens(normalizedKeyword);
    if (keywordTokens.length && keywordTokens.every(token => queryTokens.includes(token))) {
      score += keywordTokens.length > 1 ? 4.25 : 2.5;
    }
  });

  supportIntentGroups.forEach(group => {
    const hits = group.terms.reduce((total, term) => {
      const normalizedTerm = normalizeSupportText(term);
      if (normalizedQuery.includes(normalizedTerm)) return total + 1;
      const termTokens = supportTokens(normalizedTerm);
      return termTokens.length && termTokens.every(token => queryTokens.includes(token)) ? total + 1 : total;
    }, 0);
    if (!hits || !group.topics.includes(topic.id)) return;
    score += group.weight + Math.min(hits - 1, 3) * 1.4;
    if (topic.id === group.topics[0]) score += 1.8;
  });

  if (supportTokens(topic.category).some(token => queryTokens.includes(token))) score += 2;

  return {
    topic,
    score,
    confidence: score >= 10 ? 'alta' : score >= 5.5 ? 'media' : 'baixa'
  };
}

function supportTopicMatches(topic, query) {
  return !normalizeSupportText(query) || getSupportMatch(topic, query).score >= 2.2;
}

function renderSupportChips() {
  if (!supportChips) return;
  supportChips.textContent = '';
  supportCategories.forEach(category => {
    const button = document.createElement('button');
    button.className = `support-chip${category === activeSupportCategory ? ' active' : ''}`;
    button.type = 'button';
    button.textContent = category;
    button.addEventListener('click', () => {
      activeSupportCategory = category;
      renderSupportChips();
      renderSupportList();
    });
    supportChips.appendChild(button);
  });
}

function filteredSupportTopics() {
  const query = supportSearch?.value || '';
  const categoryTopics = supportTopics.filter(topic => activeSupportCategory === 'Todos' || topic.category === activeSupportCategory);
  if (!normalizeSupportText(query)) return categoryTopics;
  return categoryTopics
    .map(topic => getSupportMatch(topic, query))
    .filter(match => match.score >= 2.2)
    .sort((a, b) => b.score - a.score)
    .map(match => match.topic);
}

function renderSupportList() {
  if (!supportList) return;
  supportList.textContent = '';
  const topics = filteredSupportTopics();
  if (!topics.length) {
    const empty = document.createElement('div');
    empty.className = 'support-topic';
    empty.innerHTML = '<strong>Nenhum tópico encontrado</strong><span>Descreva seu problema no atendimento especializado para verificarmos o melhor caminho.</span>';
    supportList.appendChild(empty);
    return;
  }
  topics.forEach(topic => {
    const button = document.createElement('button');
    button.className = `support-topic${topic.id === activeSupportTopic ? ' active' : ''}`;
    button.type = 'button';
    button.innerHTML = `<strong>${topic.title}</strong><span>${topic.summary}</span>`;
    button.addEventListener('click', () => openSupportTopic(topic.id));
    supportList.appendChild(button);
  });
}

function openSupportTopic(id) {
  const topic = getSupportTopic(id);
  activeSupportTopic = topic.id;
  renderSupportList();
  if (!supportAnswer) return;
  supportAnswer.scrollTo({ top: 0, behavior: 'smooth' });
  supportAnswer.textContent = '';
  const card = document.createElement('div');
  card.className = 'support-answer-card';
  const title = document.createElement('h3');
  title.textContent = topic.title;
  card.appendChild(title);
  topic.answer.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    card.appendChild(p);
  });
  if (topic.steps?.length) {
    const ul = document.createElement('ul');
    topic.steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      ul.appendChild(li);
    });
    card.appendChild(ul);
  }
  if (topic.related?.length) {
    const related = document.createElement('div');
    related.className = 'support-related';
    topic.related.forEach(relatedId => {
      const relatedTopic = getSupportTopic(relatedId);
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = relatedTopic.title;
      button.addEventListener('click', () => openSupportTopic(relatedTopic.id));
      related.appendChild(button);
    });
    card.appendChild(related);
  }
  supportAnswer.appendChild(card);

  const actions = document.createElement('div');
  actions.className = 'support-actions';
  const unresolved = document.createElement('button');
  unresolved.className = 'btn btn-gold';
  unresolved.type = 'button';
  unresolved.innerHTML = '<i class="bi bi-life-preserver"></i> Ainda não resolvi meu problema';
  unresolved.addEventListener('click', () => openSupportContact());
  const backToSearch = document.createElement('button');
  backToSearch.className = 'btn btn-ghost';
  backToSearch.type = 'button';
  backToSearch.innerHTML = '<i class="bi bi-search"></i> Buscar outro tópico';
  backToSearch.addEventListener('click', () => supportSearch?.focus());
  actions.append(unresolved, backToSearch);
  supportAnswer.appendChild(actions);
}

function addSupportQuizScores(scores) {
  Object.entries(scores || {}).forEach(([topicId, value]) => {
    supportQuizScores[topicId] = (supportQuizScores[topicId] || 0) + value;
  });
}

function rebuildSupportQuizScores() {
  supportQuizScores = {};
  supportQuizAnswers.forEach(option => addSupportQuizScores(option?.scores));
}

function getSupportQuizMatches() {
  const matches = supportTopics
    .map(topic => ({ topic, score: supportQuizScores[topic.id] || 0 }))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score);
  return matches.length ? matches : [{ topic: getSupportTopic(activeSupportTopic), score: 1 }];
}

function startSupportQuiz() {
  supportQuizIndex = 0;
  supportQuizScores = {};
  supportQuizTrail = [];
  supportQuizAnswers = [];
  forceSpecialistSupport = false;
  supportContact?.classList.remove('open');
  supportLayout?.classList.remove('contact-open');
  if (supportSearch) supportSearch.value = '';
  activeSupportCategory = 'Todos';
  renderSupportChips();
  renderSupportList();
  renderSupportQuizStep(0);
}

function renderSupportQuizStep(index) {
  const question = supportQuizQuestions[index];
  if (!question || !supportAnswer) return;
  supportQuizIndex = index;
  supportAnswer.scrollTo({ top: 0, behavior: 'smooth' });
  supportAnswer.textContent = '';

  const card = document.createElement('div');
  card.className = 'support-quiz-card';

  const progress = document.createElement('div');
  progress.className = 'support-quiz-progress';
  progress.style.setProperty('--progress', `${((index + 1) / supportQuizQuestions.length) * 100}%`);
  card.appendChild(progress);

  const step = document.createElement('span');
  step.className = 'support-quiz-step';
  step.textContent = question.step;
  card.appendChild(step);

  const title = document.createElement('h3');
  title.textContent = question.title;
  card.appendChild(title);

  const description = document.createElement('p');
  description.textContent = question.description;
  card.appendChild(description);

  const options = document.createElement('div');
  options.className = 'support-quiz-options';
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'support-quiz-option';
    button.type = 'button';
    button.innerHTML = `<i class="bi ${option.icon}"></i><span><strong>${option.label}</strong><span>${option.helper}</span></span>`;
    button.addEventListener('click', () => {
      supportQuizAnswers[index] = option;
      supportQuizAnswers = supportQuizAnswers.slice(0, index + 1);
      supportQuizTrail = supportQuizAnswers.map(answer => answer.label);
      rebuildSupportQuizScores();
      if (index + 1 < supportQuizQuestions.length) {
        renderSupportQuizStep(index + 1);
        return;
      }
      renderSupportQuizResult();
    });
    options.appendChild(button);
  });
  card.appendChild(options);

  const actions = document.createElement('div');
  actions.className = 'support-actions';
  if (index > 0) {
    const back = document.createElement('button');
    back.className = 'btn btn-ghost';
    back.type = 'button';
    back.innerHTML = '<i class="bi bi-arrow-left"></i> Voltar';
    back.addEventListener('click', () => renderSupportQuizStep(index - 1));
    actions.appendChild(back);
  }
  const search = document.createElement('button');
  search.className = 'btn btn-ghost';
  search.type = 'button';
  search.innerHTML = '<i class="bi bi-search"></i> Prefiro buscar';
  search.addEventListener('click', () => supportSearch?.focus());
  actions.appendChild(search);

  supportAnswer.append(card, actions);
}

function renderSupportQuizResult() {
  const matches = getSupportQuizMatches();
  const best = matches[0].topic;
  activeSupportTopic = best.id;
  activeSupportCategory = best.category;
  if (supportSearch) supportSearch.value = '';
  renderSupportChips();
  renderSupportList();

  if (!supportAnswer) return;
  supportAnswer.scrollTo({ top: 0, behavior: 'smooth' });
  supportAnswer.textContent = '';

  const card = document.createElement('div');
  card.className = 'support-quiz-card';

  const step = document.createElement('span');
  step.className = 'support-quiz-step';
  step.textContent = 'Resultado do diagnóstico';
  card.appendChild(step);

  const title = document.createElement('h3');
  title.textContent = 'Esse é o caminho mais provável.';
  card.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'Pelas respostas, a Central filtrou os assuntos e separou a resposta que mais combina com a sua situação.';
  card.appendChild(description);

  const result = document.createElement('div');
  result.className = 'support-quiz-result';
  const matchBox = document.createElement('div');
  matchBox.className = 'support-quiz-match';
  matchBox.innerHTML = `<strong>${best.title}</strong><span>${best.summary}</span>`;
  result.appendChild(matchBox);
  card.appendChild(result);

  const altMatches = matches.slice(1, 4).filter(match => match.topic.id !== best.id);
  if (altMatches.length) {
    const alternatives = document.createElement('div');
    alternatives.className = 'support-quiz-alt';
    altMatches.forEach(match => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = match.topic.title;
      button.addEventListener('click', () => openSupportTopic(match.topic.id));
      alternatives.appendChild(button);
    });
    card.appendChild(alternatives);
  }

  const actions = document.createElement('div');
  actions.className = 'support-actions';
  const openAnswer = document.createElement('button');
  openAnswer.className = 'btn btn-gold';
  openAnswer.type = 'button';
  openAnswer.innerHTML = '<i class="bi bi-arrow-right-circle"></i> Abrir resposta indicada';
  openAnswer.addEventListener('click', () => openSupportTopic(best.id));

  const restart = document.createElement('button');
  restart.className = 'btn btn-ghost';
  restart.type = 'button';
  restart.innerHTML = '<i class="bi bi-arrow-repeat"></i> Refazer quiz';
  restart.addEventListener('click', startSupportQuiz);

  const contact = document.createElement('button');
  contact.className = 'btn btn-ghost';
  contact.type = 'button';
  contact.innerHTML = '<i class="bi bi-life-preserver"></i> Ainda quero atendimento';
  contact.addEventListener('click', openSupportContact);
  actions.append(openAnswer, restart, contact);

  supportAnswer.append(card, actions);
}

function scoreSupportTopic(topic, description) {
  return getSupportMatch(topic, description).score;
}

function findSupportSuggestion(description) {
  return supportTopics
    .map(topic => getSupportMatch(topic, description))
    .sort((a, b) => b.score - a.score)[0];
}

function updateSupportSuggestion() {
  if (!supportSuggestion || !supportProblem) return null;
  const match = findSupportSuggestion(supportProblem.value);
  supportSuggestion.classList.remove('open');
  supportSuggestion.textContent = '';
  if (!match || match.score < 4.4) return null;
  const topic = match.topic;
  supportSuggestion.classList.add('open');
  supportSuggestion.innerHTML = `<strong>Essa dúvida parece ter resposta na Central.</strong><p>${topic.title}</p>`;
  const goTopic = document.createElement('button');
  goTopic.type = 'button';
  goTopic.textContent = 'Ver resposta conclusiva';
  goTopic.addEventListener('click', () => {
    openSupportTopic(topic.id);
    forceSpecialistSupport = false;
  });
  const continueContact = document.createElement('button');
  continueContact.type = 'button';
  continueContact.textContent = 'Ainda quero atendimento';
  continueContact.addEventListener('click', () => {
    forceSpecialistSupport = true;
    supportStatus.textContent = 'Tudo certo. Se a resposta cadastrada não resolver, envie os detalhes para um agente especializado.';
  });
  supportSuggestion.append(goTopic, continueContact);
  return topic;
}

function openSupportContact() {
  supportContact?.classList.add('open');
  supportLayout?.classList.add('contact-open');
  if (supportStatus) {
    supportStatus.className = 'support-status';
    supportStatus.textContent = '';
  }
  setTimeout(() => document.getElementById('supportName')?.focus(), 60);
}

function openSupportModal() {
  if (!supportModal) return;
  lastSupportFocus = document.activeElement;
  renderSupportChips();
  renderSupportList();
  openSupportTopic(activeSupportTopic);
  supportModal.classList.add('open');
  supportModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  setTimeout(() => supportSearch?.focus(), 80);
}

function closeSupportModal() {
  supportModal?.classList.remove('open');
  supportModal?.setAttribute('aria-hidden', 'true');
  supportContact?.classList.remove('open');
  supportLayout?.classList.remove('contact-open');
  document.body.classList.remove('modal-open');
  lastSupportFocus?.focus?.();
}

function updateSupportFileLabel() {
  if (!supportFileText || !supportFiles) return;
  const files = Array.from(supportFiles.files || []);
  if (!files.length) {
    supportFileText.textContent = 'Nenhuma imagem selecionada';
    return;
  }
  supportFileText.textContent = files.map(file => file.name).join(' + ');
}

supportQuizStart?.addEventListener('click', startSupportQuiz);
supportClose?.addEventListener('click', closeSupportModal);
supportModal?.addEventListener('click', event => {
  if (event.target === supportModal) closeSupportModal();
});
supportSearch?.addEventListener('input', () => {
  if (activeSupportCategory !== 'Todos') {
    activeSupportCategory = 'Todos';
    renderSupportChips();
  }
  renderSupportList();
});
supportProblem?.addEventListener('input', () => {
  forceSpecialistSupport = false;
  updateSupportSuggestion();
});
supportFiles?.addEventListener('change', () => {
  if (supportFiles.files.length > 2) {
    if (supportStatus) {
      supportStatus.className = 'support-status';
      supportStatus.textContent = 'Envie no máximo 2 fotos. Remova anexos extras para continuar.';
    }
    supportFiles.value = '';
    updateSupportFileLabel();
    return;
  }
  updateSupportFileLabel();
});
supportForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (supportFiles?.files?.length > 2) {
    supportStatus.textContent = 'Envie no máximo 2 fotos.';
    return;
  }
  const suggestedTopic = updateSupportSuggestion();
  if (suggestedTopic && !forceSpecialistSupport) {
    openSupportTopic(suggestedTopic.id);
    supportStatus.textContent = 'Abrimos a resposta cadastrada para esse assunto. Se ela não resolver, clique em "Ainda quero atendimento" e envie o formulário.';
    return;
  }
  const name = document.getElementById('supportName')?.value.trim();
  const email = document.getElementById('supportEmail')?.value.trim();
  const phone = document.getElementById('supportPhone')?.value.trim();
  const description = supportProblem?.value.trim();
  const subject = encodeURIComponent(`Suporte Nivela - ${name || 'cliente'}`);
  const body = encodeURIComponent([
    `Nome: ${name}`,
    `Email para resposta: ${email}`,
    `Telefone: ${phone}`,
    '',
    'Descrição do problema:',
    description,
    '',
    `Tópico visto antes do contato: ${getSupportTopic(activeSupportTopic).title}`,
    '',
    'Prazo informado: retorno por email em até 48 horas úteis.',
    supportFiles?.files?.length ? 'Anexos: incluir manualmente até 2 fotos neste email antes de enviar.' : 'Anexos: nenhum informado.'
  ].join('\n'));
  window.location.href = `mailto:suporte@nivela.app?subject=${subject}&body=${body}`;
  supportStatus.className = 'support-status success';
  supportStatus.textContent = 'Abrimos seu email com as informações preenchidas. Confira os dados, anexe até 2 fotos se necessário e envie para o suporte.';
});


  window.NivelaSupport = {
    open: openSupportModal,
    close: closeSupportModal,
    isOpen: () => Boolean(supportModal?.classList.contains("open"))
  };
})();
