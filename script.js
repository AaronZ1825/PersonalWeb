const content = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      resume: "Resume",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Seeking co-op opportunities",
      title: "Yiming Zhai",
      role: "Computer Science @ University of Waterloo",
      tagline: "Building and shipping web projects, with a focus on backend systems.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
      location: "Waterloo, ON",
      availability: "Open for 2026 co-op",
      cardTitle: "Snapshot",
      card1: "UWaterloo CS",
      card2: "Built multiple course + personal projects",
      card3: "Interested in backend, systems, and product impact"
    },
    about: {
      title: "About",
      subtitle: "A short note on how I learn and build.",
      body:
        "I like breaking down messy problems into shippable features. In coursework and side projects, I focus on clean data models, reliable APIs, and readable code. I'm looking for a co-op role where I can contribute quickly and keep growing.",
      highlight1Title: "Fast learner",
      highlight1Body: "Pick up new tools quickly and move work forward independently.",
      highlight2Title: "Engineering fundamentals",
      highlight2Body: "Care about data structures, systems thinking, and code quality.",
      highlight3Title: "Team mindset",
      highlight3Body: "Clear communication and iterative improvement through feedback."
    },
    resume: {
      title: "Resume",
      subtitle: "A quick download link for my latest resume.",
      cardTitle: "Download my resume",
      cardBody: "PDF, updated Jan 2026.",
      ctaPrimary: "Download PDF",
      ctaSecondary: "View in browser"
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Projects that show my hands-on work.",
      items: [
        {
          title: "WaterlooStar Forum Backend",
          description:
            "Go backend for a campus forum with auth, post creation, pagination filters, and email verification flows.",
          stack: ["Go", "PostgreSQL", "Gorm", "REST API"],
          link: "https://github.com/20age1million/WaterlooStar-Backend",
          linkLabel: "Repo (Private)"
        },
        {
          title: "RAIInet",
          description:
            "C++20 modules turn-based board game with text and X11 graphics, abilities, and CLI-driven gameplay.",
          stack: ["C++20", "X11", "Modules", "CLI"],
          link: "https://github.com/AaronZ1825/RAIInet",
          linkLabel: "Repo"
        },
        {
          title: "Google Sheet ClickUp Sync",
          description:
            "Google Apps Script for two-way Google Sheets and ClickUp sync with conflict detection, custom fields, and triggers.",
          stack: ["Apps Script", "ClickUp API", "Google Sheets", "Automation"],
          link: "https://github.com/AaronZ1825/Google-Sheet-Click-Up-Sync",
          linkLabel: "Repo"
        }
      ]
    },
    experience: {
      title: "Experience",
      subtitle: "Campus work, teamwork, and building experience.",
      items: [
        {
          role: "Co-op Student IT Analyst",
          meta: "Hongsheng North America | Cambridge, ON | 2025-04 to 2025-08",
          detail:
            "Provided IT support and troubleshooting, installed software/hardware, supported system administration and network maintenance, and helped optimize the HSNA ERP system with process documentation and cybersecurity support."
        },
        {
          role: "Math Tutor",
          meta: "2023-09 to 2024-06",
          detail:
            "Tutored high school students in algebra, calculus, and trigonometry with tailored study plans, goal-setting, and progress evaluation; students reported improved grades and confidence."
        },
        {
          role: "Robotics and Computer Science Club Member",
          meta: "2021-09 to 2024-06",
          detail:
            "Designed and programmed competition robots using Python and Arduino, explored sensor integration in research sessions, and helped run coding workshops for new members."
        }
      ]
    },

    skills: {
      title: "Skills",
      subtitle: "Languages and tools I use the most.",
      items: [
        "C & C++",
        "JavaScript",
        "HTML & CSS",
        "PostgreSQL",
        "Golang",
        "Git / Linux",
        "ARMv8",
        "MS Office"
      ]
    },
    contact: {
      title: "Let's connect",
      subtitle: "Happy to chat about co-op roles, projects, or collaboration.",
      email: "Email me",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    footer: {
      note: "Designed & built by Yiming Zhai - 2026",
      location: "Waterloo, Canada"
    },
    toggle: "中文",
    docTitle: "Yiming Zhai | UWaterloo CS Student"
  },
  zh: {
    nav: {
      about: "关于",
      projects: "项目",
      experience: "经历",
      resume: "简历",
      skills: "技能",
      contact: "联系"
    },
    hero: {
      eyebrow: "正在寻找 Co-op / 实习机会",
      title: "翟一鸣",
      role: "滑铁卢大学计算机科学本科",
      tagline: "专注后端与全栈项目，喜欢把想法快速落地。",
      ctaPrimary: "查看项目",
      ctaSecondary: "联系我",
      location: "滑铁卢，安省",
      availability: "开放 2026 Co-op",
      cardTitle: "概览",
      card1: "滑铁卢 CS",
      card2: "完成多项课程与个人项目",
      card3: "关注后端、系统与产品影响力"
    },
    about: {
      title: "关于",
      subtitle: "关于我的学习方式与做事风格。",
      body:
        "我喜欢把复杂问题拆解成可交付的功能。在课程与个人项目中，我专注于清晰的数据模型、可靠的 API 和可读性好的代码。我希望在 Co-op 中快速贡献并持续成长。",
      highlight1Title: "上手快",
      highlight1Body: "快速学习新工具，独立推进工作。",
      highlight2Title: "工程基础",
      highlight2Body: "关注数据结构、系统思维与代码质量。",
      highlight3Title: "团队协作",
      highlight3Body: "沟通清晰，愿意在反馈中迭代改进。"
    },
    resume: {
      title: "简历",
      subtitle: "下载我的最新简历。",
      cardTitle: "获取简历",
      cardBody: "PDF 格式",
      ctaPrimary: "下载 PDF",
      ctaSecondary: "浏览器查看"
    },
    projects: {
      title: "项目",
      subtitle: "展示我实践过的项目。",
      items: [
        {
          title: "WaterlooStar 论坛后端",
          description: "使用 Go 搭建校园论坛后端，包含注册/登录、发帖、分页筛选与邮箱验证流程。",
          stack: ["Go", "PostgreSQL", "Gorm", "REST API"],
          link: "https://github.com/20age1million/WaterlooStar-Backend",
          linkLabel: "仓库 （私密）"
        },
        {
          title: "RAIInet",
          description: "C++20 模块化回合制棋盘游戏，支持文本与 X11 图形界面、技能系统和命令行玩法。",
          stack: ["C++20", "X11", "Modules", "CLI"],
          link: "https://github.com/AaronZ1825/RAIInet",
          linkLabel: "仓库"
        },
        {
          title: "Google 表格 ClickUp 同步",
          description: "Google Apps Script 实现 Google Sheets 与 ClickUp 双向同步，含冲突检测、自定义字段与定时触发。",
          stack: ["Apps Script", "ClickUp API", "Google Sheets", "Automation"],
          link: "https://github.com/AaronZ1825/Google-Sheet-Click-Up-Sync",
          linkLabel: "仓库"
        }
      ]
    },
    experience: {
      title: "经历",
      subtitle: "校园活动、团队协作与实践经验。",
      items: [
        {
          role: "Co-op 学生 IT 分析师",
          meta: "鸿盛北美 · 剑桥市 · 2025-04 至 2025-08",
          detail:
            "负责 IT 支持与故障排查、软硬件安装、系统与网络维护，并协助优化 HSNA ERP 系统，整理流程文档并参与网络安全支持。"
        },
        {
          role: "数学家教",
          meta: "2023-09 至 2024-06",
          detail:
            "为高中生提供代数、微积分与三角函数辅导，制定个性化学习计划、设定目标并跟踪评估；学生反馈成绩与信心提升。"
        },
        {
          role: "机器人与计算机科学社团成员",
          meta: "2021-09 至 2024-06",
          detail:
            "与团队设计并编程比赛机器人（Python/Arduino），研究传感器集成方法，并协助组织新成员编程与问题解决工作坊。"
        }
      ]
    },
    skills: {
      title: "技能",
      subtitle: "常用语言与工具。",
      items: [
        "C & C++",
        "JavaScript",
        "HTML & CSS",
        "PostgreSQL",
        "Golang",
        "Git / Linux",
        "ARMv8",
        "MS Office"
      ]
    },
    contact: {
      title: "联系我",
      subtitle: "欢迎交流 Co-op、项目或合作。",
      email: "发邮件",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    footer: {
      note: "设计与搭建：Yiming Zhai · 2026",
      location: "滑铁卢，加拿大"
    },
    toggle: "EN",
    docTitle: "Yiming Zhai | 滑铁卢 CS 学生"
  }

};

const toggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileClose = document.getElementById("mobile-close");
const projectsGrid = document.getElementById("projects-grid");
const experienceList = document.getElementById("experience-list");
const skillsList = document.getElementById("skills-list");

const getByPath = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

function renderProjects(items) {
  projectsGrid.innerHTML = "";
  items.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-meta">
        ${project.stack.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <a class="project-link" href="${project.link}">${project.linkLabel}</a>
    `;
    projectsGrid.appendChild(card);
  });
}

function renderExperience(items) {
  experienceList.innerHTML = "";
  items.forEach((item) => {
    const entry = document.createElement("div");
    entry.className = "timeline-item reveal";
    entry.innerHTML = `
      <div class="timeline-role">${item.role}</div>
      <div class="timeline-meta">${item.meta}</div>
      <p>${item.detail}</p>
    `;
    experienceList.appendChild(entry);
  });
}

function renderSkills(items) {
  skillsList.innerHTML = "";
  items.forEach((skill) => {
    const pill = document.createElement("span");
    pill.className = "skill-pill reveal";
    pill.textContent = skill;
    skillsList.appendChild(pill);
  });
}

function renderLanguage(lang) {
  const dictionary = content[lang];
  document.documentElement.lang = lang;
  document.title = dictionary.docTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getByPath(dictionary, key);
    if (value) {
      el.textContent = value;
    }
  });

  renderProjects(dictionary.projects.items);
  renderExperience(dictionary.experience.items);
  renderSkills(dictionary.skills.items);
  toggle.textContent = dictionary.toggle;
  observeReveals();
}

let currentLang = "en";
let revealObserver;

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal");

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => revealObserver.observe(el));
}

renderLanguage(currentLang);

toggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  renderLanguage(currentLang);
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileNav.classList.toggle("show", isOpen);
  mobileOverlay.classList.toggle("show", isOpen);
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
  mobileOverlay.setAttribute("aria-hidden", String(!isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("show");
    mobileOverlay.classList.remove("show");
    mobileNav.setAttribute("aria-hidden", "true");
    mobileOverlay.setAttribute("aria-hidden", "true");
  });
});

function closeMobileNav() {
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("show");
  mobileOverlay.classList.remove("show");
  mobileNav.setAttribute("aria-hidden", "true");
  mobileOverlay.setAttribute("aria-hidden", "true");
}

mobileClose.addEventListener("click", closeMobileNav);
mobileOverlay.addEventListener("click", closeMobileNav);


