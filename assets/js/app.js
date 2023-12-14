// seleção de elementos html----------
const all_cards = document.querySelectorAll("[js_cards]");
const all_views = document.querySelectorAll("[js_views]");
const date_time = document.querySelectorAll("[js_date_time]");
const views_card_1 = document.querySelector("[js_views_card_1]");
const views_card_2 = document.querySelector("[js_views_card_2]");
const views_card_3 = document.querySelector("[js_views_card_3]");
const views_card_4 = document.querySelector("[js_views_card_4]");
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

// local storage  
views_card_1.innerHTML = localStorage.getItem("views_card_1") || 0;
views_card_2.innerHTML = localStorage.getItem("views_card_2") || 0;
views_card_3.innerHTML = localStorage.getItem("views_card_3") || 0;
views_card_4.innerHTML = localStorage.getItem("views_card_4") || 0;

// filtro de categoria
window.addEventListener("click", (event) => {
    const filter_category = event.target.getAttribute("data_filter");

    switch (filter_category) {
        case "all_categories":
            all_cards.forEach((card) => {
                card.style.display = "block"
            });
            break;

        case "category_1":
            all_cards.forEach((card) => {
                card.getAttribute("data_category") === "category_1" ? card.style.display = "block" : card.style.display = "none";
            });
            break;

        case "category_2":
            all_cards.forEach((card) => {
                card.getAttribute("data_category") === "category_2" ? card.style.display = "block" : card.style.display = "none";
            });
            break;

        case "category_3":
            all_cards.forEach((card) => {
                card.getAttribute("data_category") === "category_3" ? card.style.display = "block" : card.style.display = "none";
            });
            break;

        case "category_4":
            all_cards.forEach((card) => {
                card.getAttribute("data_category") === "category_4" ? card.style.display = "block" : card.style.display = "none";
            });
            break;

        default:
            break;
    }

});

date_time.forEach((item) => {
    item.innerHTML = `${date} ${time}`
});

// seleção de cards-----
all_cards.forEach((card, indice) => {
    card.addEventListener("click", () => {
        localStorage.setItem("card_indice",indice+1);
        const card_category = card.getAttribute("js_category");
        switch (card_category) {
            case 'category_1':
                views_card_1.innerHTML = parseInt(views_card_1.innerHTML) + 1;
                localStorage.setItem("views_card_1", views_card_1.innerText);
                window.location.assign("../post_description/post.html");
                break;

            case 'category_2':
                views_card_2.innerHTML = parseInt(views_card_2.innerHTML) + 1;
                localStorage.setItem("views_card_2", views_card_2.innerText);
                window.location.assign("../post_description/post.html");
                break;

            case 'category_3':
                views_card_3.innerHTML = parseInt(views_card_3.innerHTML) + 1;
                localStorage.setItem("views_card_3", views_card_3.innerText);
                window.location.assign("../post_description/post.html");
                break;

            case 'category_4':
                views_card_4.innerHTML = parseInt(views_card_4.innerHTML) + 1;
                localStorage.setItem("views_card_4", views_card_4.innerText);
                window.location.assign("../post_description/post.html");
                break;

            default:
                break;
        }
    });
});
