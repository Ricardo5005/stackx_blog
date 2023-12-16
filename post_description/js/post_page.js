// seleção de elementos html
const date_time = document.querySelector('[js_date_time]');
const category = document.querySelector('[js_category]');
const views = document.querySelector('[js_views]');
const img = document.querySelector('[js_img]');
const title = document.querySelector('[js_title]');
const text = document.querySelector('[js_text]');

const views_card_1 = localStorage.getItem('views_card_1') || '0';
const views_card_2 = localStorage.getItem('views_card_2') || '0';
const views_card_3 = localStorage.getItem('views_card_3') || '0';
const views_card_4 = localStorage.getItem('views_card_4') || '0';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const indice_post = localStorage.getItem('card_indice') || '0';

// renderizar post individual------
switch (indice_post) {
    case "1":
        title.innerHTML = "playstation 5";
        date_time.innerHTML = `${date} - ${time}`;
        category.innerHTML = "Game";
        views.innerHTML = views_card_1;
        img.setAttribute("src", "https://images.unsplash.com/photo-1617864064479-f203fc7897c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww");
        text.innerHTML = "Os principais recursos de hardware do PlayStation 5 incluem uma unidade de estado sólido personalizada para streaming de dados em alta velocidade para permitir melhorias significativas no desempenho de armazenamento, uma AMD GPU capaz de resolução 4Krastreamento de raio e com . PlayStation VR2PlayStation VR com a maioria dos jogos de PlayStation 4 e compatibilidade com versões anteriores, feedback tátil com DualSense acelerados por hardware. Outros recursos incluem o controlador efeitos de áudio 3D para iluminação e reflexos realistas, e o Tempest Engine para , quadros por segundo exibição em até 120"
        break;
       
        case "2":
        title.innerHTML = "smartphone";
        date_time.innerHTML = `${date} - ${time}`;
        category.innerHTML = "mobile";
        views.innerHTML = views_card_2;
        img.setAttribute("src","https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        text.innerHTML = "Telefone celular (português brasileiro) ou telemóvel (português europeu) é um aparelho de comunicação por ondas eletromagnéticas que permite a transmissão bidirecional de voz e dados utilizáveis em uma área geográfica que se encontra dividida em células (de onde provém a nomenclatura celular), cada uma delas servida por um transmissor/receptor. A invenção do telefone celular ocorreu em 1947 pelo laboratório Bell, nos Estados Unidos."
        break;
      
        case "3":
            title.innerHTML = "smartwatch";
            date_time.innerHTML = `${date} - ${time}`;
            category.innerHTML = "iot";
            views.innerHTML = views_card_3;
            img.setAttribute("src", "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D");
            text.innerHTML = "Um relógio inteligente é um relógio de pulso computadorizado com funcionalidades que vão além de mostrar as horas, e é com frequência comparado aos assistentes digitais pessoais (PDA). Enquanto os primeiro modelos podem executar tarefas simples, como cálculos, tradução e jogar videojogos, os relógios inteligentes modernos são efetivamente computadores vestíveis."
            break;
           
            case "4":
                title.innerHTML = "veiculo elétrico";
                date_time.innerHTML = `${date} - ${time}`;
                category.innerHTML = "sustentabilidade";
                views.innerHTML = views_card_4;
                img.setAttribute("src","https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
                text.innerHTML = "Carro elétrico é um veículo a motor para transporte de carga e de pessoas propulsionado por motor elétrico.                O termo descreve carros de passeio em geral, mas pode, contudo, também ser entendido para toda a gama de veículos de várias faixas"
                break;
        

    default:
        break;

}