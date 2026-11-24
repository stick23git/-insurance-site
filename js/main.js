/* =========================================================
   AutoInsure EDU — UI logic
   - language switch (dictionary driven, saved in localStorage)
   - mobile burger menu
   - header shadow on scroll + active nav link
   - OSAGO calculator (reusable component)
   - self-check quiz (tests.html)
   ========================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------------
     Коэффициенты калькулятора (реальные, от страховщика).
     Одна правка здесь при изменении тарифов:
     - base: базовый тариф Classic за 15 дней по типу ТС (сум)
     - termMult: множитель за срок относительно 15 дней
     - vipMult: надбавка за полис VIP
     Формула: base[type] * termMult[term] * (VIP ? vipMult : 1)
  ------------------------------------------------------- */
  const CALC = {
    base:     { car: 64000, truck: 112000, bus: 128000, other: 24000 },
    termMult: { 15: 1, 60: 2, 365: 5 },
    vipMult:  2,
  };

  const STORAGE_KEY = "aie_lang";
  const DEFAULT_LANG = "ru";
  const htmlLangMap = { ru: "ru", en: "en", kz: "kk" };

  let currentLang = DEFAULT_LANG;
  const onLangChange = []; // callbacks re-run after each language switch

  /* ---------- i18n ---------- */
  function applyLanguage(lang) {
    const store = window.I18N || {};
    const dict = store[lang] || store[DEFAULT_LANG];
    if (!dict) return;
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.documentElement.setAttribute("lang", htmlLangMap[lang] || lang);
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    onLangChange.forEach(function (fn) { try { fn(lang); } catch (e) {} });
  }

  function initLanguage() {
    let saved = DEFAULT_LANG;
    try { saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (e) {}
    document.querySelectorAll(".lang__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
    applyLanguage(saved);
  }

  /* ---------- burger ---------- */
  function initBurger() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("mainNav");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () { nav.classList.toggle("is-open"); });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("is-open"); });
    });
  }

  /* ---------- header shadow on scroll ---------- */
  function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- active nav link ---------- */
  function initActiveNav() {
    const nav = document.getElementById("mainNav");
    if (!nav) return;
    let file = window.location.pathname.split("/").pop() || "index.html";
    if (file === "") file = "index.html";
    nav.querySelectorAll("a").forEach(function (a) {
      const href = (a.getAttribute("href") || "").split("#")[0];
      if (href === file) a.classList.add("is-active");
    });
  }

  /* ---------- calculator (reusable) ---------- */
  function formatNum(n) {
    return Math.round(n).toLocaleString("ru-RU").replace(/,/g, " ");
  }

  function initCalculators() {
    const nodes = document.querySelectorAll("[data-calc]");
    if (!nodes.length) return;

    nodes.forEach(function (root) {
      const vehicle = root.querySelector("[data-calc-vehicle]");
      const term = root.querySelector("[data-calc-term]");
      const segBtns = root.querySelectorAll("[data-calc-seg] .seg__btn");
      const priceEl = root.querySelector("[data-calc-price]");
      const baseEl = root.querySelector("[data-calc-base]");
      const termEl = root.querySelector("[data-calc-termlbl]");
      const typeEl = root.querySelector("[data-calc-typelbl]");
      let type = "classic";

      function selectedTermText() {
        return term.options[term.selectedIndex].textContent;
      }
      function selectedVehicleText() {
        return vehicle.options[vehicle.selectedIndex].textContent;
      }
      function activeTypeText() {
        const b = root.querySelector("[data-calc-seg] .seg__btn.is-active");
        return b ? b.textContent : "Classic";
      }

      function compute() {
        const base = CALC.base[vehicle.value] || CALC.base.car;
        const mult = CALC.termMult[term.value] || 1;
        const typeMult = type === "vip" ? CALC.vipMult : 1;
        const price = base * mult * typeMult;

        if (priceEl) priceEl.textContent = formatNum(price);
        if (baseEl) baseEl.textContent = formatNum(base) + " · " + selectedVehicleText();
        if (termEl) termEl.textContent = selectedTermText() + " (×" + mult + ")";
        if (typeEl) typeEl.textContent = activeTypeText();
      }

      vehicle.addEventListener("change", compute);
      term.addEventListener("change", compute);
      segBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          segBtns.forEach(function (b) { b.classList.remove("is-active"); });
          btn.classList.add("is-active");
          type = btn.getAttribute("data-type");
          compute();
        });
      });

      compute();
      onLangChange.push(compute); // refresh localized labels on language switch
    });
  }

  /* ---------- quiz (tests.html) ---------- */
  function initQuiz() {
    const root = document.querySelector("[data-quiz]");
    if (!root || !window.QUIZ) return;

    const state = { index: 0, answers: [] };

    function L() { return QUIZ.ui[currentLang] || QUIZ.ui.ru; }
    function Q() { return QUIZ.questions[currentLang] || QUIZ.questions.ru; }

    function render() {
      const ui = L();
      const qs = Q();

      // result screen
      if (state.index >= qs.length) {
        const score = state.answers.reduce(function (acc, a, i) {
          return acc + (a === qs[i].answer ? 1 : 0);
        }, 0);
        const pct = score / qs.length;
        const msg = pct >= 0.8 ? ui.good : pct >= 0.5 ? ui.mid : ui.low;
        root.innerHTML =
          '<div class="quiz__result">' +
            '<div class="quiz__score">' + score + "/" + qs.length + "</div>" +
            "<h3>" + ui.result_h + "</h3>" +
            "<p>" + msg + " · " + score + " " + ui.correct_of + ".</p>" +
            '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
              '<button class="btn btn--green" data-quiz-restart>' + ui.restart + "</button>" +
              '<a class="btn btn--outline" href="osago.html">' + ui.review + "</a>" +
            "</div>" +
          "</div>";
        root.querySelector("[data-quiz-restart]").addEventListener("click", function () {
          state.index = 0; state.answers = []; render();
        });
        return;
      }

      const q = qs[state.index];
      const answered = state.answers[state.index] != null;
      const chosen = state.answers[state.index];
      const progress = Math.round(((state.index + (answered ? 1 : 0)) / qs.length) * 100);

      let opts = "";
      q.options.forEach(function (opt, i) {
        let cls = "quiz__opt";
        if (answered) {
          if (i === q.answer) cls += " is-correct";
          else if (i === chosen) cls += " is-wrong";
        }
        const letter = String.fromCharCode(65 + i);
        opts +=
          '<button class="' + cls + '" data-opt="' + i + '"' + (answered ? " disabled" : "") + ">" +
            '<span class="mark">' + letter + "</span>" +
            "<span>" + opt + "</span>" +
          "</button>";
      });

      root.innerHTML =
        '<div class="quiz__progress">' +
          "<span>" + ui.question + " " + (state.index + 1) + " " + ui.of + " " + qs.length + "</span>" +
          '<div class="quiz__bar"><i style="width:' + progress + '%"></i></div>' +
        "</div>" +
        '<div class="quiz__q">' + q.q + "</div>" +
        '<div class="quiz__options">' + opts + "</div>" +
        '<div class="quiz__explain' + (answered ? " is-shown" : "") + '">' + q.explain + "</div>" +
        '<div class="quiz__foot">' +
          (answered
            ? '<button class="btn btn--green" data-quiz-next>' +
                (state.index + 1 >= qs.length ? ui.finish : ui.next) + "</button>"
            : "") +
        "</div>";

      if (!answered) {
        root.querySelectorAll("[data-opt]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            state.answers[state.index] = parseInt(btn.getAttribute("data-opt"), 10);
            render();
          });
        });
      } else {
        root.querySelector("[data-quiz-next]").addEventListener("click", function () {
          state.index++; render();
        });
      }
    }

    render();
    onLangChange.push(render); // re-render quiz in the new language
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initCalculators();
    initQuiz();
    initLanguage();   // applyLanguage runs callbacks above → everything localized
    initBurger();
    initHeaderScroll();
    initActiveNav();
  });
})();
