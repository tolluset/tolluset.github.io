// GA 이벤트 추적 모듈
const GAEventTracker = {
  // 이벤트 등록
  registerEvents() {
    document.querySelectorAll("a").forEach((aTag) => {
      aTag.addEventListener("click", (e) => this.handleLinkClick(e));
    });
  },

  // 이벤트 처리
  handleLinkClick(event) {
    gtag("event", "link_click", {
      event_label: event.currentTarget.getAttribute("aria-label"),
      transport_type: "beacon",
    });
  },
};

// 섹션 체류 시간 추적 모듈
const SectionTimeTracker = {
  // 상태 관리
  state: {
    lastVisibleSection: null,
    lastScrollTime: Date.now(),
  },

  // Observer 설정
  observer: new IntersectionObserver(
    (entries) => {
      const now = Date.now();
      entries.forEach((entry) => {
        const section = entry.target;
        const sectionId = section.id;

        if (entry.isIntersecting) {
          if (
            SectionTimeTracker.state.lastVisibleSection &&
            SectionTimeTracker.state.lastVisibleSection !== sectionId
          ) {
            const duration = now - SectionTimeTracker.state.lastScrollTime;
            SectionTimeTracker.sendTimeToGA(
              SectionTimeTracker.state.lastVisibleSection,
              duration,
            );
          }
          SectionTimeTracker.state.lastVisibleSection = sectionId;
          SectionTimeTracker.state.lastScrollTime = now;
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    },
  ),

  // GA로 시간 전송
  sendTimeToGA(sectionId, duration) {
    // 5초 이상 체류한 경우만 전송
    if (duration >= 5000) {
      gtag("event", "engagement_time", {
        event_section: sectionId,
        value: Math.round(duration / 1000),
        transport_type: "beacon",
      });
    }
  },

  // 초기화
  init() {
    // 섹션 관찰 시작
    document.querySelectorAll("section").forEach((section) => {
      this.observer.observe(section);
    });

    // 페이지 언로드 시 마지막 섹션 체류 시간 기록
    window.addEventListener("beforeunload", () => {
      if (this.state.lastVisibleSection) {
        const duration = Date.now() - this.state.lastScrollTime;
        this.sendTimeToGA(this.state.lastVisibleSection, duration);
      }
    });
  },
};

// 테마 관리 모듈
const ThemeManager = {
  themeToggle: null,

  init() {
    this.themeToggle = document.getElementById("theme-toggle");

    // 초기 테마 설정 (다크모드 기본)
    this.applyInitialTheme();

    // 테마 변경 이벤트 리스너 등록
    this.themeToggle.addEventListener("click", () => this.toggleTheme());

    // 시스템 테마 변경 감지
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        this.setDarkTheme(); // 다크모드를 기본값으로 설정
      }
    });
  },

  applyInitialTheme() {
    const currentTheme = localStorage.getItem("theme");

    // localStorage에 테마가 저장되어 있으면 해당 테마 적용
    if (currentTheme === "light") {
      this.setLightTheme();
    } else {
      // 저장된 테마가 없거나 'dark'이면 다크모드를 기본으로 적용
      this.setDarkTheme();
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
  GAEventTracker.registerEvents();
  SectionTimeTracker.init();
  ThemeManager.init();
});

