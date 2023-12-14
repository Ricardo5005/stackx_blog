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
        title.innerHTML = "titulo do card 1";
        date_time.innerHTML = `${date} - ${time}`;
        category.innerHTML = "categoria do card 1";
        views.innerHTML = views_card_1;
        img.setAttribute("src", "https://images.unsplash.com/photo-1670332339459-fe5d2093167a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60");
        text.innerHTML = "aqui jaz o texto do card 1"
        break;
       
        case "2":
        title.innerHTML = "titulo do card2";
        date_time.innerHTML = `${date} - ${time}`;
        category.innerHTML = "categoria do card 2";
        views.innerHTML = views_card_2;
        img.setAttribute("src", "https://images.unsplash.com/photo-1686139280426-483b26ab94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60");
        text.innerHTML = "aqui jaz o texto do card 1"
        break;
      
        case "3":
            title.innerHTML = "titulo do card3";
            date_time.innerHTML = `${date} - ${time}`;
            category.innerHTML = "categoria do card 3";
            views.innerHTML = views_card_3;
            img.setAttribute("src", "https://images.unsplash.com/photo-1621246046602-e75168c03fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60");
            text.innerHTML = "aqui jaz o texto do card 3"
            break;
           
            case "4":
                title.innerHTML = "titulo do card4";
                date_time.innerHTML = `${date} - ${time}`;
                category.innerHTML = "categoria do card 4";
                views.innerHTML = views_card_4;
                img.setAttribute("src", "https://images.unsplash.com/photo-1691938608898-88ae4d41375c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=2000&q=60");
                text.innerHTML = "aqui jaz o texto do card 4"
                break;
        

    default:
        break;

}