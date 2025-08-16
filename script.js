// 테마 관리 모듈
const ThemeManager = {
  themeToggle: null,

  init() {
    this.themeToggle = document.getElementById("theme-toggle");

    // 초기 테마 설정 (라이트모드 기본)
    this.applyInitialTheme();

    // 테마 변경 이벤트 리스너 등록
    this.themeToggle.addEventListener("click", () => this.toggleTheme());

    // 시스템 테마 변경 감지
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        this.setLightTheme(); // 라이트모드를 기본값으로 설정
      }
    });
  },

  applyInitialTheme() {
    const currentTheme = localStorage.getItem("theme");

    // localStorage에 테마가 저장되어 있으면 해당 테마 적용
    if (currentTheme === "dark") {
      this.setDarkTheme();
    } else {
      // 저장된 테마가 없거나 'light'이면 라이트모드를 기본으로 적용
      this.setLightTheme();
    }
  },

  setDarkTheme() {
    document.documentElement.classList.add("dark");
    if (this.themeToggle) {
      this.themeToggle.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", "dark");
  },

  setLightTheme() {
    document.documentElement.classList.remove("dark");
    if (this.themeToggle) {
      this.themeToggle.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", "light");
  },

  toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  },
};

// DOM이 준비되면 모듈 초기화
document.addEventListener("DOMContentLoaded", () => {
  ThemeManager.init();
});
