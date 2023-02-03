var data = {
    "pl": 
    {
      "title": "Cześć",
      "description": "Informacja",
      "whatsappBttn": "Pisać Wiadomość",
      "callUsBttn": "Zadzwoń do nas",
    },
    "tr": 
    {
      "title": "Merhaba oç",
      "description": "Açıklama yaz",
      "whatsappBttn": "Bize yaz",
      "callUsBttn": "Bizi ara",

    },
    "eng": 
    {
        "title": "Hi stranger!",
        "description": "Description",
        "whatsappBttn": "Chat on WhatsApp",
        "callUsBttn": "Call Us",
    }
  }

  const langEl = document.querySelector('.container');
  const link = document.querySelectorAll('a');
  const titleEl = document.querySelector('#title');
  const descrEl = document.querySelector('#description');
  const wpEl = document.querySelector('#whatsappBttn');
  const callEl = document.querySelector('#callUsBttn');

  link.forEach(el => {
      el.addEventListener('click', () => {
          langEl.querySelector('.active').classList.remove('active');
          el.classList.add('active');

          const attr = el.getAttribute('language');

          titleEl.textContent = data[attr].title;
          descrEl.textContent = data[attr].description;
          wpEl.textContent = data[attr].whatsappBttn;
          callEl.textContent = data[attr].callUsBttn;
      });
  });


