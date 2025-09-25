const i18n = {
  en: {
    "block.about-me-title": "About Me",
    "block.about-me":
      "I develop web applications with a focus on responsive design, clean code structure, and modern technologies.",
    "block.about-me-techno": "Experienced with:",
    "block.about-me2":
      "My portfolio includes projects focused both on UI/UX design and visual dynamics, as well as projects emphasizing architecture and server integration.",
    "block1.title": "UI & Design-Focused Projects",
    "block1.subtitle":
      "Simple, stylish websites emphasizing visuals, motion, and user experience.",

    "block1.subsubtitle": "UI Projects Repository.",

    "block2.title": "REST API & React-Driven Projects",
    "block2.subtitle":
      "Advanced apps focused on structure: REST APIs, Node.js, Next.js, WebSocket.",

    "block2.subsubtitle": "Structure Projects Repository",

    "block3.desc-project":
      "A one-page website focused on UI design and responsiveness.",
    "block4.desc-techno": "Technologies:",
    "block5.desc-library":
      "A simple web application without a visual design focus, emphasizing Node.js, Next.js, and a custom API for creating a book list (title, description, author).",
    "block6.desc-movie":
      "An application for searching movies (basic interface, no advanced design). Focused on working with REST API, Next.js, and TypeScript, along with state management and handling asynchronous requests (fetch/axios).",
    "block7.desc-morago":
      "Morago is a web application that enables users and translators to make real-time translated calls.The functionality includes registration and authentication via JWT, role management (User, Translator, Admin), and storing and viewing call history. For data exchange and notifications, it uses REST API and WebSocket, while calls are handled through WebRTC. The frontend is built with React/Next.js and TypeScript, and the backend with Spring Boot and MySQL.",
    "block8.btnBlock": "View",
  },
  ko: {
    "block.about-me-title": "자기소개",
    "block.about-me":
      "반응형 디자인, 코드 구조, 최신 기술에 중점 웹 애플리케이션 개발 경험.",
    "block.about-me-techno": "경험 기술:",
    "block.about-me2":
      "포트폴리오에는 UI/UX와 시각적 요소에 중점을 둔 프로젝트, 아키텍처와 서버 연동에 중점을 둔 프로젝트 포함.",

    "block1.title": "UI·디자인 중심 프로젝트",
    "block1.subtitle":
      "비주얼·동적 요소·사용자 경험에 초점을 둔 심플하고 세련된 웹사이트.",

    "block1.subsubtitle": "UI 프로젝트 저장소.",

    "block2.title": "REST API & React 기반 프로젝트",
    "block2.subtitle":
      "구조에 중점을 둔 고급 앱: REST API, Node.js, Next.js, WebSocket.",

    "block2.subsubtitle": "구조 프로젝트 저장소",

    "block3.desc-project": "UI 디자인과 반응형에 중점을 둔 원페이지 웹사이트.",
    "block4.desc-techno": "사용 기술:",
    "block5.desc-library":
      "시각적 디자인보다는 Node.js, Next.js 및 자체 API를 활용하여 도서 목록(제목, 설명, 저자)을 만드는 데 중점을 둔 간단한 웹 애플리케이션.",

    "block6.desc-movie":
      "영화 검색을 위한 애플리케이션(기본 인터페이스, 특별한 디자인 없음). REST API, Next.js, TypeScript를 중심으로 상태 관리와 비동기 요청(fetch/axios)에 중점을 둔 프로젝트",

    "block7.desc-morago":
      "Morago는 사용자와 통역사가 실시간 통역 전화를 할 수 있는 웹 애플리케이션. 주요 기능은 JWT를 통한 회원가입 및 인증, 역할 관리(User, Translator, Admin), 통화 내역 저장 및 조회 포함. 데이터 교환과 알림은 REST API와 WebSocket을 통해 처리하고, 통화는 WebRTC로 구현. 프론트엔드는 React/Next.js, TypeScript, 백엔드는 Spring Boot, MySQL 기반.",
    "block8.btnBlock": "보기",
  },
};

const els = [...document.querySelectorAll("[data-i18n]")];
const btn = document.getElementById("lang-toggle");

function applyLang(lang) {
  els.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18n[lang][key] || key;
  });
  btn.textContent = lang === "en" ? "한국어" : "ENG";
  localStorage.setItem("lang", lang);
}

btn.addEventListener("click", () => {
  const cur = localStorage.getItem("lang") || "en";
  applyLang(cur === "en" ? "ko" : "en");
});

// инициализация
applyLang(localStorage.getItem("lang") || "en");

const video = document.getElementById("myVideo");
const btnMorago = document.getElementById("morago-play");

video.addEventListener("click", () => {
  if (video.muted === false) {
    video.muted = true;
  } else {
    video.muted = false; // снимаем mute
    video.play(); // запускаем заново со звуком
  }
});

btnMorago.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

const booksVideo = document.getElementById("books-video");
const btnBooks = document.getElementById("books-play");

btnBooks.addEventListener("click", () => {
  if (booksVideo.requestFullscreen) {
    booksVideo.requestFullscreen();
  } else if (booksVideo.webkitRequestFullscreen) {
    booksVideo.webkitRequestFullscreen();
  } else if (booksVideo.msRequestFullscreen) {
    booksVideo.msRequestFullscreen();
  }
});
