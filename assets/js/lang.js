var data = {
    "pl":
    {
        "title": "Cześć",
        "description": "Informacja",
        "ourServices": "Informacja",
        "ourServicesTitle1": "Informacja",
        "ourServicesTitle2": "Informacja",
        "ourServicesTitle3": "Informacja",
        "ourServicesDesc1": "Informacja",
        "ourServicesDesc2": "Informacja",
        "ourServicesDesc3": "Informacja",
    },
    "tr":
    {
        "title": "Merhaba!",
        "description": "Açıklama",
        "ourServices": "Informacja",
        "ourServicesTitle1": "Informacja",
        "ourServicesTitle2": "Informacja",
        "ourServicesTitle3": "Informacja",
        "ourServicesDesc1": "Informacja",
        "ourServicesDesc2": "Informacja",
        "ourServicesDesc3": "Informacja",

    },
    "eng":
    {
        "title": "Hello!",
        "description": "Description",
        "ourServices": "Informacja",
        "ourServicesTitle1": "Informacja",
        "ourServicesTitle2": "Informacja",
        "ourServicesTitle3": "Informacja",
        "ourServicesDesc1": "Informacja",
        "ourServicesDesc2": "Informacja",
        "ourServicesDesc3": "Informacja",
    }
}

const langEl = document.querySelector('.container');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('#title');
const descrEl = document.querySelector('#description');
const ourServicesEl = document.querySelector('#ourServices');
const ourServicesTitle1 = document.querySelector('#ourServicesTitle1');
const ourServicesTitle2 = document.querySelector('#ourServicesTitle2');
const ourServicesTitle3 = document.querySelector('#ourServicesTitle3');
const ourServicesDesc1 = document.querySelector('#ourServicesDesc1');
const ourServicesDesc2 = document.querySelector('#ourServicesDesc2');
const ourServicesDesc3 = document.querySelector('#ourServicesDesc3');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        ourServicesEl.textContent = data[attr].ourServices;
        ourServicesTitle1.textContent = data[attr].ourServicesTitle1;
        ourServicesTitle2.textContent = data[attr].ourServicesTitle2;
        ourServicesTitle3.textContent = data[attr].ourServicesTitle3;
        ourServicesDesc1.textContent = data[attr].ourServicesDesc1;
        ourServicesDesc2.textContent = data[attr].ourServicesDesc2;
        ourServicesDesc3.textContent = data[attr].ourServicesDesc3;
    });
});


