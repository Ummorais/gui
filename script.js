// Perguntas e respostas
const faqs = [
    {
        question: "Qual contato do time de Back Office?",
        answer: "Arthur Santos: <a href='https://wa.me/5511933487922'>WhatsApp</a><br>Guilherme Morais: <a href='https://wa.me/5511942315351'>WhatsApp</a><br>Luis Antonio: <a href='https://wa.me/5511964757181'>WhatsApp</a>"
    },
    {
        question: "Qual contato do time de Last Mile?",
        answer: "Iuri Lima: <a href='https://wa.me/5511988654605'>WhatsApp</a><br>Larissa Fernandes: <a href='https://wa.me/5511911840676'>WhatsApp</a><br>Leandro Duarte: <a href='https://wa.me/5511950663345'>WhatsApp</a>"
    },
    {
        question: "Qual contato do Coordenador de Last Mile?",
        answer: "Pedro Savagin: <a href='https://wa.me/5511989149453'>WhatsApp</a>"
    },
    {
        question: "O que é logística?",
        answer: "Logística é o processo de planejamento, implementação e controle de um fluxo eficiente e eficaz de mercadorias e serviços."
    },
    {
        question: "O que é cadeia de suprimentos?",
        answer: "Cadeia de suprimentos é o conjunto de processos que envolvem a movimentação de produtos e informações desde a matéria-prima até o consumidor final."
    },
    {
        question: "O que é logística reversa?",
        answer: "Logística reversa é o processo de planejamento, implementação e controle do fluxo de produtos desde o consumidor até o ponto de origem."
    },
    {
        question: "Quais são os benefícios da logística eficiente?",
        answer: "Os benefícios incluem redução de custos, aumento da satisfação do cliente, melhor utilização de recursos e otimização do tempo de entrega."
    },
    {
        question: "O que é transporte multimodal?",
        answer: "Transporte multimodal é a utilização de mais de um modo de transporte para movimentar mercadorias, otimizando o tempo e os custos."
    },
    {
        question: "O que é cross-docking?",
        answer: "Cross-docking é uma prática de logística que envolve a movimentação de produtos diretamente do recebimento para a expedição, sem armazenagem prolongada."
    },
    {
        question: "O que é inventário?",
        answer: "Inventário é a lista de todos os itens e quantidades armazenadas em um local, essencial para o controle de estoque."
    },
    {
        question: "Como a tecnologia afeta a logística?",
        answer: "A tecnologia melhora a eficiência, proporciona rastreamento em tempo real, otimiza rotas e facilita a comunicação."
    },
    {
        question: "O que é gestão de estoques?",
        answer: "Gestão de estoques é o controle e monitoramento dos produtos armazenados, visando equilibrar a oferta e a demanda."
    },
    {
        question: "Qual a importância da previsão de demanda?",
        answer: "A previsão de demanda ajuda a planejar a produção e o estoque, evitando excessos ou faltas."
    },
    {
        question: "O que é logística de distribuição?",
        answer: "Logística de distribuição envolve o planejamento e controle do fluxo de produtos acabados até o consumidor final."
    },
    {
        question: "O que é eficiência logística?",
        answer: "Eficiência logística refere-se à capacidade de entregar produtos e serviços de forma oportuna e a um custo reduzido."
    },
    {
        question: "Como melhorar os processos logísticos?",
        answer: "Melhorias podem ser feitas por meio da automação, treinamento de equipes, análise de dados e revisão de processos."
    },
    {
        question: "O que é lead time?",
        answer: "Lead time é o tempo total necessário para completar um processo, desde a solicitação até a entrega."
    },
    {
        question: "O que é FIFO e LIFO?",
        answer: "FIFO (First In, First Out) é um método de gestão de estoques onde os primeiros produtos a entrarem são os primeiros a serem vendidos. LIFO (Last In, First Out) é o oposto."
    },
    {
        question: "O que é um armazém?",
        answer: "Um armazém é um espaço utilizado para armazenar produtos e mercadorias antes de serem distribuídos."
    },
    {
        question: "O que é um centro de distribuição?",
        answer: "Um centro de distribuição é um local onde os produtos são recebidos, armazenados e redistribuídos para os clientes."
    },
    {
        question: "Qual a função do gestor logístico?",
        answer: "O gestor logístico é responsável por planejar e coordenar todas as atividades logísticas de uma empresa."
    },
    {
        question: "O que é just in time?",
        answer: "Just in time é uma estratégia de gestão que visa reduzir os estoques e aumentar a eficiência ao receber produtos apenas quando necessário."
    },
    {
        question: "O que é a logística 4.0?",
        answer: "Logística 4.0 integra tecnologias digitais e automação nos processos logísticos para aumentar a eficiência e a transparência."
    },
    {
        question: "Como a sustentabilidade se relaciona com a logística?",
        answer: "A sustentabilidade na logística envolve práticas que minimizam o impacto ambiental, como otimização de rotas e uso de embalagens recicláveis."
    },
    {
        question: "Quais são os desafios da logística internacional?",
        answer: "Os desafios incluem regulamentações, diferenças culturais, variações na qualidade dos serviços e custos de transporte."
    },
    {
        question: "O que é a logística de última milha?",
        answer: "Logística de última milha refere-se ao movimento final de um produto até o consumidor final, muitas vezes o mais complexo e caro."
    },
    {
        question: "Qual a importância da comunicação na logística?",
        answer: "A comunicação eficaz é crucial para coordenar atividades, resolver problemas rapidamente e manter o fluxo de informações."
    },
    {
        question: "O que é um KPI logístico?",
        answer: "KPI (Key Performance Indicator) é um indicador-chave de desempenho que mede a eficácia das operações logísticas."
    },
    {
        question: "O que significa o termo 'custo total da propriedade'?",
        answer: "Custo total da propriedade é uma análise que considera todos os custos associados à aquisição, operação e manutenção de um ativo."
    },
    {
        question: "Como as empresas podem otimizar seus processos logísticos?",
        answer: "As empresas podem utilizar tecnologias, revisar processos regularmente, treinar funcionários e adotar práticas de melhoria contínua."
    },
    {
        question: "O que é um plano de logística?",
        answer: "Um plano de logística é um documento que descreve como uma empresa gerenciará sua cadeia de suprimentos e operações logísticas."
    },
    {
        question: "O que é a logística de e-commerce?",
        answer: "Logística de e-commerce envolve o planejamento e execução do fluxo de produtos vendidos online, desde a compra até a entrega."
    },
    {
        question: "Como a análise de dados pode melhorar a logística?",
        answer: "A análise de dados permite identificar padrões, prever tendências e otimizar operações logísticas."
    },
    {
        question: "O que é um sistema de gerenciamento de armazém?",
        answer: "Um sistema de gerenciamento de armazém (WMS) é um software que ajuda a gerenciar as operações diárias de um armazém."
    },
    {
        question: "O que é a cadeia de suprimento verde?",
        answer: "Cadeia de suprimento verde refere-se a práticas que buscam minimizar o impacto ambiental durante a produção e distribuição."
    },
    {
        question: "Qual o papel da logística na satisfação do cliente?",
        answer: "A logística desempenha um papel fundamental na satisfação do cliente ao garantir entregas pontuais e eficazes."
    },
    {
        question: "O que é um planejamento de demanda?",
        answer: "Planejamento de demanda é o processo de previsão de vendas e planejamento de estoque para atender a essa demanda."
    },
    {
        question: "Como a automação pode ajudar na logística?",
        answer: "A automação aumenta a eficiência, reduz erros e libera os funcionários para se concentrarem em tarefas mais estratégicas."
    },
    {
        question: "O que é um contrato de logística?",
        answer: "Um contrato de logística é um acordo formal entre um fornecedor de logística e uma empresa, detalhando os serviços a serem prestados."
    },
    {
        question: "Como a logística pode impactar os custos de uma empresa?",
        answer: "Uma gestão logística eficiente pode reduzir custos operacionais, de transporte e armazenamento, aumentando a rentabilidade."
    },
    {
        question: "O que é uma operação logística integrada?",
        answer: "Uma operação logística integrada combina todas as funções logísticas em um só lugar para melhorar a eficiência e reduzir custos."
    },
    {
        question: "Qual a função do transporte na logística?",
        answer: "O transporte é fundamental na logística, pois garante que os produtos sejam entregues aos clientes no tempo certo."
    },
    {
        question: "O que é gestão de riscos na logística?",
        answer: "Gestão de riscos na logística envolve identificar, avaliar e mitigar riscos que podem afetar a cadeia de suprimentos."
    },
    {
        question: "Como as empresas podem se preparar para interrupções na cadeia de suprimentos?",
        answer: "As empresas podem criar planos de contingência, diversificar fornecedores e monitorar continuamente a cadeia de suprimentos."
    },
    {
        question: "O que são serviços logísticos?",
        answer: "Serviços logísticos são as atividades que suportam a movimentação e armazenamento de produtos, como transporte, armazenagem e manuseio."
    },
    {
        question: "Como a logística pode melhorar a eficiência operacional?",
        answer: "A logística melhora a eficiência operacional ao otimizar processos, reduzir custos e melhorar a comunicação."
    },
    {
        question: "O que é um modelo de negócios logístico?",
        answer: "Um modelo de negócios logístico descreve como uma empresa cria, entrega e captura valor por meio de suas operações logísticas."
    },
    {
        question: "Qual a diferença entre logística e supply chain?",
        answer: "Logística refere-se ao gerenciamento do movimento e armazenamento de produtos, enquanto supply chain abrange todo o fluxo de materiais e informações."
    },
    {
        question: "Como o mapeamento de processos pode ajudar na logística?",
        answer: "O mapeamento de processos ajuda a identificar gargalos, ineficiências e áreas de melhoria nas operações logísticas."
    }
];

// Adicionando 20 frases motivacionais
const motivationalQuotes = [
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você é o autor da sua própria história. Não deixe que ninguém a escreva por você.",
    "Acredite em si mesmo e tudo será possível.",
    "Desafios são o que tornam a vida interessante, e superá-los é o que dá significado à vida.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "A persistência é o caminho do êxito.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "A única limitação que você tem é a que você aceita.",
    "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
    "A motivação é o que te faz começar. O hábito é o que te mantém em movimento.",
    "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A única maneira de alcançar o impossível é acreditar que é possível.",
    "Se você pode sonhar, pode realizar.",
    "Não tenha medo de desistir do bom para perseguir o ótimo.",
    "Cair sete vezes, levantar oito.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "A única forma de falhar é desistir.",
    "A vida é 10% o que acontece com você e 90% como você reage a isso."
];

// Adicionando perguntas sobre frases motivacionais
const motivationalQuestions = [
    "me dê uma frase motivacional",
    "me dá uma frase bonita",
    "me passe uma frase inspiradora",
    "me fale uma frase motivacional",
    "qual é uma frase para me motivar"
];

// Função para normalizar strings (remover acentos e converter para minúsculas)
function normalizeString(str) {
    const accentsMap = {
        'á': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
        'é': 'e', 'ê': 'e', 'ë': 'e',
        'í': 'i', 'î': 'i', 'ï': 'i',
        'ó': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
        'ú': 'u', 'û': 'u', 'ü': 'u',
        'ç': 'c', 'ñ': 'n'
    };
    return str.toLowerCase().replace(/[áãâäéêëíîïóõôöúûüçñ]/g, match => accentsMap[match]);
}

// Função para lidar com a entrada do usuário
function handleUserInput(input) {
    let response = "";
    const chatBox = document.getElementById("chatBox");

    // Normaliza a entrada
    const normalizedInput = normalizeString(input);

    // Verifica se a pergunta está na lista de FAQs
    const faq = faqs.find(faq => normalizedInput.includes(normalizeString(faq.question)));

    // Verifica se a entrada está nas perguntas motivacionais
    const isMotivationalQuestion = motivationalQuestions.some(question => normalizedInput.includes(normalizeString(question)));

    if (faq) {
        response = faq.answer; // Se encontrar, usa a resposta correspondente
    } else if (isMotivationalQuestion) {
        // Seleciona uma frase motivacional aleatória
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        response = randomQuote;
    } else if (normalizedInput.includes("logística")) {
        response = "Logística é o processo de planejamento, implementação e controle de um fluxo eficiente e eficaz de mercadorias e serviços.";
    } else {
        response = "Opção não disponível.<br><br>" +
            "<button onclick='goBack()'>Voltar</button>";
    }

    // Limpar o chatBox antes de mostrar a nova resposta
    chatBox.innerHTML = ""; // Limpa todo o conteúdo do chat
    addMessage(getWelcomeMessage(), "bot-message"); // Adiciona a mensagem de boas-vindas
    addMessage(response, "bot-message"); // Adiciona a nova resposta
}

function addMessage(message, className) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = message; // Usar innerHTML para permitir links
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para a última mensagem
}

function getWelcomeMessage() {
    return `
        <div id="welcomeMessage">
            <img src="ia.jpg" alt="IA" style="width: 50px; height: 50px; margin-right: 10px; border-radius: 50%;">
            <span>Olá, Seja bem-vindo à GUI IA!</span>
        </div>
    `;
}

function goBack() {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = ""; // Limpa o conteúdo atual do chat
    addMessage(getWelcomeMessage(), "bot-message");
    addMessage("Faça sua pergunta abaixo para GUI IA", "bot-message");
}

// Evento de login
document.getElementById("enterBtn").addEventListener('click', () => {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const welcomeContainer = document.getElementById('welcomeContainer');
    const chatContainer = document.getElementById('chatContainer');
    const suggestions = document.getElementById('suggestions');

    const email = emailInput.value;
    if (email.includes('@loggi')) {
        welcomeContainer.style.display = 'none'; // Esconde a tela de boas-vindas
        chatContainer.style.display = 'block'; // Mostra o chat
        suggestions.style.display = 'block'; // Mostra a seção de sugestões
        goBack(); // Inicializa a conversa
        errorMessage.style.display = 'none'; // Esconde mensagem de erro
    } else {
        errorMessage.style.display = 'block'; // Mostra mensagem de erro
    }
});

// Evento de envio de mensagem
document.getElementById("sendBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user-message");
        handleUserInput(userMessage);
        userInput.value = "";
    }
});

// Evento para enviar mensagem ao pressionar "Enter"
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("sendBtn").click();
    }
});