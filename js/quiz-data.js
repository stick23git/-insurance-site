/* =========================================================
   AutoInsure EDU — quiz data (RU / EN / KZ)
   Used by js/main.js on tests.html.
   Each question: { q, options:[...], answer: <index>, explain }
   ========================================================= */
window.QUIZ = {
  ui: {
    ru: {
      question: "Вопрос", of: "из",
      next: "Следующий вопрос", finish: "Показать результат",
      restart: "Пройти заново", review: "Повторить теорию",
      result_h: "Ваш результат", correct_of: "правильных ответов",
      good: "Отлично! Вы хорошо разобрались в теме.",
      mid: "Неплохо, но стоит повторить теорию.",
      low: "Стоит перечитать разделы ОСАГО и КАСКО.",
    },
    en: {
      question: "Question", of: "of",
      next: "Next question", finish: "Show result",
      restart: "Try again", review: "Review theory",
      result_h: "Your result", correct_of: "correct answers",
      good: "Great! You know the topic well.",
      mid: "Not bad, but review the theory.",
      low: "Better re-read the OSAGO and KASKO sections.",
    },
    kz: {
      question: "Сұрақ", of: "ішінен",
      next: "Келесі сұрақ", finish: "Нәтижені көрсету",
      restart: "Қайта тапсыру", review: "Теорияны қайталау",
      result_h: "Сіздің нәтижеңіз", correct_of: "дұрыс жауап",
      good: "Тамаша! Тақырыпты жақсы меңгергенсіз.",
      mid: "Жаман емес, бірақ теорияны қайталаған жөн.",
      low: "ОСАГО мен КАСКО бөлімдерін қайта оқыған жөн.",
    },
  },

  questions: {
    ru: [
      {
        q: "Что такое ОСАГО?",
        options: [
          "Страхование собственного автомобиля от угона",
          "Обязательное страхование ответственности перед третьими лицами",
          "Международная «Зелёная карта»",
          "Добровольное страхование жизни водителя",
        ],
        answer: 1,
        explain: "ОСАГО покрывает вашу ответственность за вред третьим лицам, а не повреждения вашего авто.",
      },
      {
        q: "Действует ли «Зелёная карта» (Green Card) в Узбекистане?",
        options: [
          "Да, она заменяет местный полис",
          "Нет — нужен местный полис ОСАГО",
          "Да, но только для грузовиков",
          "Только в первые 15 дней",
        ],
        answer: 1,
        explain: "Узбекистан не входит в систему Green Card, поэтому нужен местный полис ОСАГО.",
      },
      {
        q: "Что покрывает ОСАГО?",
        options: [
          "Ремонт вашего собственного автомобиля",
          "Угон вашего автомобиля",
          "Вред жизни, здоровью и имуществу третьих лиц",
          "Любые поломки двигателя",
        ],
        answer: 2,
        explain: "ОСАГО возмещает вред третьим лицам в пределах лимитов договора.",
      },
      {
        q: "Чем КАСКО отличается от ОСАГО?",
        options: [
          "КАСКО обязательно, а ОСАГО — нет",
          "КАСКО защищает ваш собственный автомобиль",
          "Это одно и то же",
          "КАСКО действует только за границей",
        ],
        answer: 1,
        explain: "КАСКО — добровольная защита вашего авто (ДТП, угон, пожар, стихия). ОСАГО — ответственность перед третьими лицами.",
      },
      {
        q: "На какой минимальный срок можно оформить полис?",
        options: ["На 1 день", "На 7 дней", "От 15 дней", "Только на 1 год"],
        answer: 2,
        explain: "Минимальный срок полиса — 15 дней.",
      },
      {
        q: "Какой номер вызвать для полиции при ДТП?",
        options: ["101", "102", "103", "112"],
        answer: 1,
        explain: "102 — полиция, 103 — скорая, 101 — пожарная служба.",
      },
      {
        q: "С какой даты ОСАГО обязательно для иностранных авто в Узбекистане?",
        options: ["С 1 января 2024", "С 1 июля 2025", "С 1 января 2026", "Пока не обязательно"],
        answer: 1,
        explain: "С 1 июля 2025 года ОСАГО обязательно для иностранных автомобилей при въезде.",
      },
      {
        q: "Что из перечисленного НЕ покрывает ОСАГО?",
        options: [
          "Вред здоровью третьих лиц",
          "Ущерб имуществу третьих лиц",
          "Угон вашего собственного автомобиля",
          "Вред пассажирам других авто",
        ],
        answer: 2,
        explain: "Угон и повреждения собственного авто покрывает КАСКО, а не ОСАГО.",
      },
      {
        q: "Какие документы обычно нужны для оформления полиса?",
        options: [
          "Только водительские права",
          "Паспорт, техпаспорт авто и гос. номер",
          "Только гос. номер",
          "Загранпаспорт и виза",
        ],
        answer: 1,
        explain: "Нужны паспорт, техпаспорт автомобиля, гос. номер и данные собственника.",
      },
      {
        q: "Какое максимальное страховое покрытие по ОСАГО (2026)?",
        options: ["до 10 млн сум", "до 50 млн сум", "до 80 млн сум", "без ограничений"],
        answer: 2,
        explain: "Покрытие — до 80 млн сум (по открытым источникам, 2026).",
      },
    ],

    en: [
      {
        q: "What is OSAGO?",
        options: [
          "Insurance of your own car against theft",
          "Mandatory liability insurance for harm to third parties",
          "The international Green Card",
          "Optional life insurance for the driver",
        ],
        answer: 1,
        explain: "OSAGO covers your liability for harm to third parties, not damage to your own car.",
      },
      {
        q: "Does the Green Card work in Uzbekistan?",
        options: [
          "Yes, it replaces the local policy",
          "No — you need a local OSAGO policy",
          "Yes, but only for trucks",
          "Only for the first 15 days",
        ],
        answer: 1,
        explain: "Uzbekistan is not in the Green Card system, so a local OSAGO policy is required.",
      },
      {
        q: "What does OSAGO cover?",
        options: [
          "Repair of your own car",
          "Theft of your car",
          "Harm to life, health and property of third parties",
          "Any engine breakdown",
        ],
        answer: 2,
        explain: "OSAGO compensates third parties within the policy limits.",
      },
      {
        q: "How is KASKO different from OSAGO?",
        options: [
          "KASKO is mandatory, OSAGO is not",
          "KASKO protects your own car",
          "They are the same thing",
          "KASKO only works abroad",
        ],
        answer: 1,
        explain: "KASKO is optional protection for your car (crash, theft, fire, nature). OSAGO is liability to third parties.",
      },
      {
        q: "What is the minimum policy term?",
        options: ["1 day", "7 days", "From 15 days", "Only 1 year"],
        answer: 2,
        explain: "The minimum policy term is 15 days.",
      },
      {
        q: "Which number do you call for the police after an accident?",
        options: ["101", "102", "103", "112"],
        answer: 1,
        explain: "102 — police, 103 — ambulance, 101 — fire service.",
      },
      {
        q: "Since when is OSAGO mandatory for foreign cars in Uzbekistan?",
        options: ["Since Jan 1, 2024", "Since July 1, 2025", "Since Jan 1, 2026", "Not mandatory yet"],
        answer: 1,
        explain: "Since July 1, 2025 OSAGO is mandatory for foreign cars on entry.",
      },
      {
        q: "Which of these does OSAGO NOT cover?",
        options: [
          "Harm to third parties' health",
          "Damage to third parties' property",
          "Theft of your own car",
          "Harm to passengers of other cars",
        ],
        answer: 2,
        explain: "Theft and damage to your own car are covered by KASKO, not OSAGO.",
      },
      {
        q: "Which documents are usually needed to get a policy?",
        options: [
          "Driver's licence only",
          "Passport, vehicle registration and plate number",
          "Plate number only",
          "Passport and visa",
        ],
        answer: 1,
        explain: "You need a passport, vehicle registration, plate number and owner details.",
      },
      {
        q: "What is the maximum OSAGO coverage (2026)?",
        options: ["up to 10M soums", "up to 50M soums", "up to 80M soums", "unlimited"],
        answer: 2,
        explain: "Coverage is up to 80M soums (per open sources, 2026).",
      },
    ],

    kz: [
      {
        q: "ОСАГО дегеніміз не?",
        options: [
          "Өз көлігін ұрлықтан сақтандыру",
          "Үшінші тұлғалар алдындағы жауапкершілікті міндетті сақтандыру",
          "Халықаралық «Жасыл карта»",
          "Жүргізушінің өмірін ерікті сақтандыру",
        ],
        answer: 1,
        explain: "ОСАГО өз көлігіңіздің зақымын емес, үшінші тұлғаларға келтірілген зиян үшін жауапкершілікті жабады.",
      },
      {
        q: "«Жасыл карта» (Green Card) Өзбекстанда жұмыс істей ме?",
        options: [
          "Иә, ол жергілікті полисті алмастырады",
          "Жоқ — жергілікті ОСАГО полисі қажет",
          "Иә, бірақ тек жүк көліктеріне",
          "Тек алғашқы 15 күнде",
        ],
        answer: 1,
        explain: "Өзбекстан Green Card жүйесіне кірмейді, сондықтан жергілікті ОСАГО полисі қажет.",
      },
      {
        q: "ОСАГО нені жабады?",
        options: [
          "Өз көлігіңізді жөндеу",
          "Көлігіңіздің ұрлануы",
          "Үшінші тұлғалардың өмірі, денсаулығы мен мүлкіне зиян",
          "Қозғалтқыштың кез келген ақауы",
        ],
        answer: 2,
        explain: "ОСАГО үшінші тұлғаларға шарт шектері шегінде өтемақы төлейді.",
      },
      {
        q: "КАСКО ОСАГО-дан несімен ерекшеленеді?",
        options: [
          "КАСКО міндетті, ОСАГО — жоқ",
          "КАСКО сіздің өз көлігіңізді қорғайды",
          "Бұл бір нәрсе",
          "КАСКО тек шетелде жұмыс істейді",
        ],
        answer: 1,
        explain: "КАСКО — көлігіңізді ерікті қорғау (апат, ұрлық, өрт, зілзала). ОСАГО — үшінші тұлғалар алдындағы жауапкершілік.",
      },
      {
        q: "Полисті ең аз қандай мерзімге рәсімдеуге болады?",
        options: ["1 күнге", "7 күнге", "15 күннен бастап", "Тек 1 жылға"],
        answer: 2,
        explain: "Полистің ең аз мерзімі — 15 күн.",
      },
      {
        q: "Жол апатында полицияны шақыру үшін қай нөмірге қоңырау шаламыз?",
        options: ["101", "102", "103", "112"],
        answer: 1,
        explain: "102 — полиция, 103 — жедел жәрдем, 101 — өрт сөндіру қызметі.",
      },
      {
        q: "Өзбекстанда ОСАГО шетелдік көліктерге қай күннен міндетті?",
        options: ["2024 жылғы 1 қаңтардан", "2025 жылғы 1 шілдеден", "2026 жылғы 1 қаңтардан", "Әзірге міндетті емес"],
        answer: 1,
        explain: "2025 жылғы 1 шілдеден бастап ОСАГО кіру кезінде шетелдік көліктерге міндетті.",
      },
      {
        q: "Төмендегілердің қайсысын ОСАГО ЖАБМАЙДЫ?",
        options: [
          "Үшінші тұлғалардың денсаулығына зиян",
          "Үшінші тұлғалардың мүлкіне зиян",
          "Өз көлігіңіздің ұрлануы",
          "Басқа көлік жолаушыларына зиян",
        ],
        answer: 2,
        explain: "Өз көлігіңіздің ұрлануы мен зақымын ОСАГО емес, КАСКО жабады.",
      },
      {
        q: "Полис рәсімдеу үшін әдетте қандай құжаттар қажет?",
        options: [
          "Тек жүргізуші куәлігі",
          "Паспорт, көлік техпаспорты және мемлекеттік нөмір",
          "Тек мемлекеттік нөмір",
          "Шетелдік паспорт пен виза",
        ],
        answer: 1,
        explain: "Паспорт, көлік техпаспорты, мемлекеттік нөмір және иесінің деректері қажет.",
      },
      {
        q: "ОСАГО бойынша ең жоғары сақтандыру жабыны қандай (2026)?",
        options: ["10 млн сумға дейін", "50 млн сумға дейін", "80 млн сумға дейін", "шектеусіз"],
        answer: 2,
        explain: "Жабын — 80 млн сумға дейін (ашық дереккөздер бойынша, 2026).",
      },
    ],
  },
};
