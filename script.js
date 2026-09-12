const content = {
  en: {
    nav: {
      about: "About",
      education: "Education",
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
      tagline: "Building reliable backend systems, ERP integrations, and AI-assisted supply-chain workflows.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact me",
      location: "Waterloo, ON",
      availability: "Open to co-op opportunities",
      cardTitle: "Snapshot",
      card1: "UWaterloo CS",
      card2: "ERP development at Sailun Tires Americas",
      card3: "Backend, systems, and AI-assisted workflows"
    },
    about: {
      title: "About",
      subtitle: "A short note on how I learn and build.",
      body:
        "I'm a Computer Science student at the University of Waterloo who likes breaking down messy problems into shippable features. Through co-op roles at Sailun Tires Americas and Hongsheng North America, I've worked on ERP business logic, external system integrations, and enterprise IT support. My coursework and personal projects explore reliable APIs, clean data models, C++ systems, and AI-assisted supply-chain workflows. I'm looking for a co-op role where I can contribute quickly and keep growing.",
      highlight1Title: "Fast learner",
      highlight1Body: "Pick up new tools quickly and move work forward independently.",
      highlight2Title: "Engineering fundamentals",
      highlight2Body: "Care about data structures, systems thinking, and code quality.",
      highlight3Title: "Team mindset",
      highlight3Body: "Clear communication and iterative improvement through feedback."
    },
    education: {
      title: "Education",
      subtitle: "Computer science foundations and a background in mathematics.",
      school: "University of Waterloo",
      degree: "Bachelor of Computer Science | Sept 2024 – Present",
      courseworkTitle: "Relevant coursework",
      coursework: "User Interfaces, Compilers, Computer Architecture, Neural Networks",
      scholarshipsTitle: "Scholarships",
      scholarships: "President's Scholarship; René Descartes National Scholarship",
      awardsTitle: "Awards",
      awards: "COMC NB Gold Award; Euclid Competition — Second Place in New Brunswick"
    },
    resume: {
      title: "Resume",
      subtitle: "Download or view my latest resume.",
      cardTitle: "Download my resume",
      cardBody: "PDF · 2026 3A version.",
      ctaPrimary: "Download PDF",
      ctaSecondary: "View in browser"
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Projects that show my hands-on work.",
      items: [
        {
          title: "AI Supply Chain Query Workflow",
          description: "Designed an AI-assisted workflow that converts natural-language supply-chain questions into structured data queries. Implemented intent classification and parameter extraction for factory, order, and product requests, with SQL agents retrieving enterprise data and generating structured responses for business users.",
          stack: ["Dify", "SQL", "APIs", "Python"]
        },
        {
          title: "WaterlooStar Forum Backend",
          description:
            "Go backend for a campus forum with RESTful APIs, authentication, post creation, pagination, filtering, and email verification. Designed relational data models and PostgreSQL queries with an emphasis on correctness and reliability.",
          stack: ["Go", "PostgreSQL", "GORM", "REST APIs"],
          link: "https://github.com/20age1million/WaterlooStar-Backend",
          linkLabel: "Repo (Private)"
        },
        {
          title: "RAIInet",
          description:
            "Turn-based strategy board game built with C++20 modules and a modular object-oriented architecture. Supports text and X11 graphical interfaces, custom event handling and rendering, abilities, and CLI-driven gameplay, with memory safety and RAII-based resource management.",
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
      subtitle: "ERP development, enterprise IT, and earlier teaching and teamwork experience.",
      items: [
        {
          role: "Junior ERP Developer (Co-op)",
          meta: "Sailun Tires Americas Inc. | Woodbridge, ON | May 2026 – Aug 2026",
          bullets: [
            "Developed and maintained Microsoft Dynamics NAV 2017 functionality in C/AL, implementing Codeunits, reports, and ERP business logic.",
            "Integrated NAV with external systems through SOAP web services and XML, building and debugging SmartEquip Supplier API request-response workflows.",
            "Developed and optimized an Assembly Item BOM weight report, improving data processing, report usability, and query performance.",
            "Built AI-assisted supply-chain workflows using Dify and SQL-based tools to interpret natural-language requests and retrieve structured enterprise data."
          ]
        },
        {
          role: "IT Analyst (Co-op)",
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
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "C/AL",
        "Racket",
        "HTML & CSS",
        "PostgreSQL",
        "Golang",
        "Microsoft Dynamics NAV 2017",
        "GORM",
        "Node.js",
        "REST APIs",
        "SOAP / XML",
        "Bash",
        "Dify",
        "PyTorch",
        "Jupyter",
        "Ollama",
        "Git / Linux",
        "ARMv8(introductory level)",
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
      education: "教育",
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
      tagline: "构建可靠的后端系统、ERP 集成与 AI 辅助供应链工作流。",
      ctaPrimary: "查看项目",
      ctaSecondary: "联系我",
      location: "滑铁卢，安省",
      availability: "正在寻找 Co-op 机会",
      cardTitle: "概览",
      card1: "滑铁卢 CS",
      card2: "Sailun Tires Americas ERP 开发经历",
      card3: "关注后端、系统与 AI 辅助工作流"
    },
    about: {
      title: "关于",
      subtitle: "关于我的学习方式与做事风格。",
      body:
        "我是滑铁卢大学计算机科学本科生，喜欢把复杂问题拆解成可交付的功能。在 Sailun Tires Americas 和鸿盛北美的 Co-op 工作中，我参与了 ERP 业务逻辑开发、外部系统集成和企业 IT 支持。通过课程与个人项目，我持续探索可靠的 API、清晰的数据模型、C++ 系统开发与 AI 辅助供应链工作流，希望在下一段 Co-op 中贡献所学并持续成长。",
      highlight1Title: "上手快",
      highlight1Body: "快速学习新工具，独立推进工作。",
      highlight2Title: "工程基础",
      highlight2Body: "关注数据结构、系统思维与代码质量。",
      highlight3Title: "团队协作",
      highlight3Body: "沟通清晰，愿意在反馈中迭代改进。"
    },
    education: {
      title: "教育背景",
      subtitle: "计算机科学基础与数学积累。",
      school: "滑铁卢大学",
      degree: "计算机科学学士 | 2024 年 9 月 – 至今",
      courseworkTitle: "相关课程",
      coursework: "用户界面、编译器、计算机体系结构、神经网络",
      scholarshipsTitle: "奖学金",
      scholarships: "President's Scholarship（校长奖学金）；René Descartes National Scholarship",
      awardsTitle: "竞赛奖项",
      awards: "COMC 新不伦瑞克省金奖；Euclid 数学竞赛新不伦瑞克省第二名"
    },
    resume: {
      title: "简历",
      subtitle: "下载或在线查看我的最新简历。",
      cardTitle: "获取简历",
      cardBody: "PDF · 2026 年 3A 版本。",
      ctaPrimary: "下载 PDF",
      ctaSecondary: "浏览器查看"
    },
    projects: {
      title: "项目",
      subtitle: "展示我实践过的项目。",
      items: [
        {
          title: "AI 供应链查询工作流",
          description: "设计 AI 辅助工作流，将自然语言供应链问题转换为结构化数据查询。针对工厂、订单和产品请求实现意图分类与参数提取，集成 SQL 智能体查询企业数据，并为业务用户生成结构化回复。",
          stack: ["Dify", "SQL", "APIs", "Python"]
        },
        {
          title: "WaterlooStar 论坛后端",
          description: "使用 Go 构建校园论坛 RESTful API，实现身份认证、发帖、分页、筛选与邮箱验证；设计关系型数据模型与 PostgreSQL 查询，注重正确性和可靠性。",
          stack: ["Go", "PostgreSQL", "GORM", "REST APIs"],
          link: "https://github.com/20age1million/WaterlooStar-Backend",
          linkLabel: "仓库 （私密）"
        },
        {
          title: "RAIInet",
          description: "采用 C++20 模块与模块化面向对象架构构建回合制策略棋盘游戏，支持文本和 X11 图形界面、自定义事件处理与渲染、技能系统及命令行玩法，并运用 RAII 管理资源、保障内存安全。",
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
      subtitle: "ERP 开发、企业 IT，以及教学与团队实践经历。",
      items: [
        {
          role: "初级 ERP 开发工程师（Co-op）",
          meta: "Sailun Tires Americas Inc. | 安省 Woodbridge | 2026-05 至 2026-08",
          bullets: [
            "使用 C/AL 开发和维护 Microsoft Dynamics NAV 2017 定制功能，包括 Codeunit、报表和 ERP 业务逻辑。",
            "通过 SOAP Web 服务和 XML 集成 NAV 与外部系统，构建并调试 SmartEquip Supplier API 的请求与响应流程。",
            "开发并优化 Assembly Item BOM 重量报表，改进数据处理、报表易用性和查询性能。",
            "使用 Dify 和 SQL 工具构建 AI 辅助供应链工作流，解析自然语言请求并检索结构化企业数据。"
          ]
        },
        {
          role: "IT 分析师（Co-op）",
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
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "C/AL",
        "Racket",
        "HTML & CSS",
        "PostgreSQL",
        "Golang",
        "Microsoft Dynamics NAV 2017",
        "GORM",
        "Node.js",
        "REST APIs",
        "SOAP / XML",
        "Bash",
        "Dify",
        "PyTorch",
        "Jupyter",
        "Ollama",
        "Git / Linux",
        "ARMv8(入门级)",
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
      ${project.link ? `<a class="project-link" href="${project.link}">${project.linkLabel}</a>` : ""}
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
      ${item.bullets ? `<ul class="experience-bullets">${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : `<p>${item.detail}</p>`}
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


