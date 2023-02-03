var data = {
    "pl":
    {
        "title": "Cześć",
        "description": "Informacja",
        "ourServices": "Nasze Usługi",
        "ourServicesTitle1": "PL",
        "ourServicesTitle2": "PL",
        "ourServicesTitle3": "PL",
        "ourServicesDesc1": "PL",
        "ourServicesDesc2": "PL",
        "ourServicesDesc3": "PL",
    },
    "tr":
    {
        "title": "Merhaba!",
        "description": "Açıklama",
        "ourServices": "Sunduğumuz Servisler",
        "ourServicesTitle1": "TR",
        "ourServicesTitle2": "TR",
        "ourServicesTitle3": "TR",
        "ourServicesDesc1": "TR",
        "ourServicesDesc2": "TR",
        "ourServicesDesc3": "TR",

    },
    "eng":
    {
        "title": "Hello!",
        "description": "Description",
        "ourServices": "Our Services",
        "ourServicesTitle1": "ENG",
        "ourServicesTitle2": "ENG",
        "ourServicesTitle3": "ENG",
        "ourServicesDesc1": "ENG",
        "ourServicesDesc2": "ENG",
        "ourServicesDesc3": "ENG",
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


