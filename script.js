/* ==========================================================================
   Portfólio — Joanes Walker
   JavaScript puro: tema, idioma PT/EN, menu, scrollspy, contadores,
   animações de entrada e formulário Formspree.
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Configuração
     ------------------------------------------------------------------------ */

  // Endpoint do formulário Formspree (também aplicado ao action do <form>).
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maeoeryg';

  const STORAGE_THEME = 'portfolio-theme';
  const STORAGE_LANG = 'portfolio-lang';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     2. Textos (PT/EN)
     ------------------------------------------------------------------------ */

  const translations = {
    pt: {
      'meta.title': 'Henrique Walker | Analista de TI — Infraestrutura, Suporte e Full Stack',
      'meta.description': 'Portfólio de Joanes Henrique Walker Cunha — Analista de TI em Boa Vista, RR. Infraestrutura, suporte técnico, Microsoft 365 e desenvolvimento full stack.',

      'a11y.skip': 'Pular para o conteúdo',
      'a11y.theme': 'Alternar tema',
      'a11y.menuOpen': 'Abrir menu',
      'a11y.menuClose': 'Fechar menu',

      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.skills': 'Habilidades',
      'nav.contact': 'Contato',

      'hero.roleA': 'Analista de TI',
      'hero.roleB': 'Infraestrutura, Suporte e Desenvolvedor Full Stack',
      'hero.ctaProjects': 'Ver projetos',
      'hero.ctaResume': 'Baixar currículo',

      'stats.units': 'unidades atendidas',
      'stats.tickets': 'chamados registrados',
      'stats.projects': 'projetos publicados',

      'status.title': 'Disponível para oportunidades',
      'status.text': 'CLT, freelance e remoto',

      'about.eyebrow': 'Apresentação',
      'about.title': 'Sobre',
      'about.p1': 'Tecnólogo em Análise e Desenvolvimento de Sistemas, com experiência prática em Tecnologia da Informação atuando de forma integrada em infraestrutura, suporte técnico, desenvolvimento full stack e automação.',
      'about.p2': 'Minha trajetória reúne experiências no setor público e privado, da manutenção de equipamentos e gestão de ativos à modernização de sistemas internos em produção. Acredito que a tecnologia vai além de manter sistemas funcionando: ela resolve problemas, integra áreas e gera resultados concretos.',
      'about.p3': 'Busco evoluir continuamente em Desenvolvimento de Software, Infraestrutura, Administração de Sistemas e Automação.',

      'exp.eyebrow': 'Trajetória',
      'exp.title': 'Experiência profissional',
      'exp.job1.role': 'Suporte de TI',
      'exp.job1.period': 'set. 2026 – o momento',
      'exp.job1.org': 'Hemissul Proteção Veicular · Tempo integral',
      'exp.job1.b1': 'Suporte técnico e infraestrutura: manutenção preventiva e corretiva, diagnóstico de hardware e software e atendimento aos usuários.',
      'exp.job1.b2': 'Administração de sistemas: Microsoft 365, CRMs, sistemas internos e aplicações hospedadas no Heroku.',
      'exp.job1.b3': 'Desenvolvimento: manutenção evolutiva, reformulação de interfaces e novas funcionalidades com Python, JavaScript e PostgreSQL.',
      'exp.job1.b4': 'Melhoria contínua: automação, modernização de ferramentas internas e otimização de processos.',
      'exp.job1.result': 'Liderei a modernização do sistema interno de atendimento usado na operação — mais de 4 mil chamados nos últimos seis meses — e fui reconhecido como destaque da semana no primeiro mês.',
      'exp.job2.role': 'Suporte de TI (estágio)',
      'exp.job2.period': 'fev. 2026 – jul. 2026',
      'exp.job2.org': 'Prefeitura Municipal de Boa Vista · Secretaria Municipal de Saúde',
      'exp.job2.tagNetworks': 'Redes',
      'exp.job2.tagAssets': 'Gestão de ativos',
      'exp.job2.tagUnits': '30+ unidades',
      'exp.job2.b1': 'Suporte técnico e infraestrutura em mais de 30 unidades de saúde, incluindo UBS, hospitais e setores administrativos.',
      'exp.job2.b2': 'Montagem, instalação, configuração e manutenção de computadores e periféricos.',
      'exp.job2.b3': 'Organização, triagem, recuperação, reaproveitamento e redistribuição de equipamentos de TI.',
      'exp.job2.b4': 'Participação na implantação da infraestrutura de TI de uma nova Unidade Básica de Saúde.',

      'projects.eyebrow': 'Portfólio',
      'projects.title': 'Projetos',
      'projects.subtitle': 'Aplicações e sistemas que desenvolvi para praticar e resolver problemas reais.',
      'project1.title': 'Sala Escura — catálogo de filmes',
      'project1.desc': 'Catálogo full stack com backend em FastAPI e frontend em JavaScript puro, integrado à API do TMDB. Tem cache com TTL, busca por título, filtros por gênero e ficha técnica completa.',
      'project2.title': 'PIGZ — API de Veículos e Tabela FIPE',
      'project2.desc': 'API REST em Symfony com autenticação por token, níveis de acesso, CRUD de veículos e comparação do preço anunciado com a Tabela FIPE.',
      'project3.title': 'Sistema de Livraria (CRUD)',
      'project3.desc': 'Sistema completo com cadastro, listagem, busca, edição e exclusão de livros. Back-end em PHP com MySQL, front-end em Bootstrap e ambiente Docker.',
      'project4.title': 'AutoViagem — autonomia e custo',
      'project4.desc': 'Aplicativo desktop em Electron para calcular autonomia e custo de combustível, com histórico local das simulações.',
      'projects.demo': 'Demo',
      'projects.demoSoon': 'Demo de {name} em breve.',
      'projects.all': 'Ver todos os repositórios',

      'skills.eyebrow': 'Competências',
      'skills.title': 'Habilidades técnicas',
      'skills.subtitle': 'Ferramentas e tecnologias que uso no dia a dia, organizadas por área de atuação.',
      'skills.groupInfra': 'Infraestrutura',
      'skills.groupDev': 'Desenvolvimento',
      'skills.groupDb': 'Banco de Dados',
      'skills.groupTools': 'Automação / Ferramentas',
      'skills.networks': 'Redes',
      'skills.support': 'Suporte técnico',
      'skills.automation': 'Automação',

      'certs.eyebrow': 'Aprendizado contínuo',
      'certs.title': 'Formação e certificações',
      'certs.degree': 'Graduação',
      'certs.degreeTitle': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      'certs.degreeOrg': 'Claretiano – Rede de Educação',
      'certs.degreePeriod': 'fev. 2024 – jul. 2026',
      'certs.tagWeb': 'Desenvolvimento Web',
      'certs.tagDb': 'Banco de Dados',
      'certs.tagNetworks': 'Redes',
      'certs.tagSoftware': 'Engenharia de Software',
      'certs.tagSecurity': 'Segurança',
      'certs.certLabel': 'Capacitação',
      'certs.certTitle': 'Capacitação e Extensão em IA – Indústria 4.0 e Inovação Tecnológica',
      'certs.certOrg': 'Universidade Federal de Roraima – UFRR',
      'certs.certPeriod': 'jun. de 2024',
      'certs.tagAI': 'Inteligência Artificial',
      'certs.tagIndustry': 'Indústria 4.0',
      'certs.tagInnovation': 'Inovação',

      'contact.title': 'Contato',
      'languages.title': 'Idiomas',
      'languages.pt': 'Português',
      'languages.en': 'Inglês',
      'languages.es': 'Espanhol',
      'languages.native': 'Nativo',
      'languages.enLevel': 'Leitura e documentação técnica',
      'languages.esLevel': 'Básico / Compreensão e leitura',

      'form.eyebrow': 'Vamos conversar',
      'form.title': 'Entre em contato',
      'form.intro': 'Estou aberto a oportunidades CLT, projetos freelance e trabalho remoto. Preencha o formulário ou fale comigo pelos canais abaixo — respondo em até 1 dia útil.',
      'form.name': 'Nome',
      'form.namePlaceholder': 'Seu nome',
      'form.email': 'E-mail',
      'form.emailPlaceholder': 'seu@email.com',
      'form.subject': 'Assunto',
      'form.subjectPlaceholder': 'Ex.: Oportunidade de emprego',
      'form.company': 'Empresa (opcional)',
      'form.companyPlaceholder': 'Nome da empresa',
      'form.message': 'Mensagem',
      'form.messagePlaceholder': 'Olá Joanes, gostaria de conversar sobre...',
      'form.submit': 'Enviar mensagem',
      'form.emailSubject': 'Novo contato pelo portfólio',
      'form.sending': 'Enviando...',
      'form.success': 'Mensagem enviada com sucesso! Responderei em breve.',
      'form.error': 'Não foi possível enviar. Tente novamente ou escreva para joaneshwc31@gmail.com.',
      'form.notConfigured': 'O formulário ainda não foi configurado. Envie um e-mail para joaneshwc31@gmail.com.',
      'form.errName': 'Informe seu nome.',
      'form.errEmail': 'Informe seu e-mail.',
      'form.errEmailInvalid': 'Informe um e-mail válido.',
      'form.errMessage': 'Escreva uma mensagem com pelo menos 10 caracteres.',

      'footer.backToTop': 'Voltar ao topo'
    },

    en: {
      'meta.title': 'Henrique Walker | IT Analyst — Infrastructure, Support & Full Stack',
      'meta.description': 'Portfolio of Joanes Henrique Walker Cunha — IT Analyst based in Boa Vista, Brazil. Infrastructure, technical support, Microsoft 365 and full stack development.',

      'a11y.skip': 'Skip to content',
      'a11y.theme': 'Toggle theme',
      'a11y.menuOpen': 'Open menu',
      'a11y.menuClose': 'Close menu',

      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'hero.roleA': 'IT Analyst',
      'hero.roleB': 'Infrastructure, Support & Full Stack Developer',
      'hero.ctaProjects': 'View projects',
      'hero.ctaResume': 'Download résumé',

      'stats.units': 'units supported',
      'stats.tickets': 'tickets logged',
      'stats.projects': 'published projects',

      'status.title': 'Available for opportunities',
      'status.text': 'Full-time, freelance and remote',

      'about.eyebrow': 'Introduction',
      'about.title': 'About',
      'about.p1': 'Information Systems graduate with hands-on experience in IT, working across infrastructure, technical support, full stack development and automation.',
      'about.p2': 'My background spans the public and private sectors — from hardware maintenance and asset management to modernizing internal systems in production. I believe technology goes beyond keeping systems running: it solves problems, connects teams and delivers concrete results.',
      'about.p3': "I'm continuously improving in Software Development, Infrastructure, Systems Administration and Automation.",

      'exp.eyebrow': 'Career',
      'exp.title': 'Professional experience',
      'exp.job1.role': 'IT Support',
      'exp.job1.period': 'Sep 2026 – present',
      'exp.job1.org': 'Hemissul Proteção Veicular · Full-time',
      'exp.job1.b1': 'Technical support and infrastructure: preventive and corrective maintenance, hardware and software diagnostics, and user support.',
      'exp.job1.b2': 'Systems administration: Microsoft 365, CRMs, internal systems and applications hosted on Heroku.',
      'exp.job1.b3': 'Development: evolutionary maintenance, interface redesign and new features with Python, JavaScript and PostgreSQL.',
      'exp.job1.b4': 'Continuous improvement: automation, modernization of internal tools and process optimization.',
      'exp.job1.result': 'I led the modernization of the internal service desk used in the operation — over 4,000 tickets in the last six months — and was recognized as employee of the week in my first month.',
      'exp.job2.role': 'IT Support (internship)',
      'exp.job2.period': 'Feb 2026 – Jul 2026',
      'exp.job2.org': 'Boa Vista City Hall · Municipal Health Department',
      'exp.job2.tagNetworks': 'Networking',
      'exp.job2.tagAssets': 'Asset management',
      'exp.job2.tagUnits': '30+ units',
      'exp.job2.b1': 'Technical support and infrastructure across 30+ health units, including primary care clinics, hospitals and administrative departments.',
      'exp.job2.b2': 'Assembly, installation, configuration and maintenance of computers and peripherals.',
      'exp.job2.b3': 'Organization, triage, recovery, reuse and redistribution of IT equipment.',
      'exp.job2.b4': 'Participated in deploying the IT infrastructure of a new primary care unit.',

      'projects.eyebrow': 'Portfolio',
      'projects.title': 'Projects',
      'projects.subtitle': 'Applications and systems I built to practice and solve real problems.',
      'project1.title': 'Sala Escura — movie catalog',
      'project1.desc': 'Full stack catalog with a FastAPI backend and vanilla JavaScript frontend, integrated with the TMDB API. Includes TTL caching, title search, genre filters and full movie details.',
      'project2.title': 'PIGZ — Vehicle API & FIPE price table',
      'project2.desc': 'REST API built with Symfony featuring token authentication, access levels, vehicle CRUD and comparison between listed prices and the FIPE price table.',
      'project3.title': 'Bookstore System (CRUD)',
      'project3.desc': 'Complete system with book registration, listing, search, editing and deletion. PHP and MySQL backend, Bootstrap frontend and Docker environment.',
      'project4.title': 'AutoViagem — range and cost',
      'project4.desc': 'Desktop app built with Electron to calculate fuel range and cost, with local simulation history.',
      'projects.demo': 'Demo',
      'projects.demoSoon': 'Demo for {name} coming soon.',
      'projects.all': 'View all repositories',

      'skills.eyebrow': 'Skills',
      'skills.title': 'Technical skills',
      'skills.subtitle': 'Tools and technologies I use daily, organized by area of expertise.',
      'skills.groupInfra': 'Infrastructure',
      'skills.groupDev': 'Development',
      'skills.groupDb': 'Databases',
      'skills.groupTools': 'Automation / Tools',
      'skills.networks': 'Networking',
      'skills.support': 'Technical support',
      'skills.automation': 'Automation',

      'certs.eyebrow': 'Continuous learning',
      'certs.title': 'Education & certifications',
      'certs.degree': 'Degree',
      'certs.degreeTitle': 'Associate Degree in Systems Analysis and Development',
      'certs.degreeOrg': 'Claretiano – Education Network',
      'certs.degreePeriod': 'Feb 2024 – Jul 2026',
      'certs.tagWeb': 'Web Development',
      'certs.tagDb': 'Databases',
      'certs.tagNetworks': 'Networking',
      'certs.tagSoftware': 'Software Engineering',
      'certs.tagSecurity': 'Security',
      'certs.certLabel': 'Certificate',
      'certs.certTitle': 'AI Extension Course – Industry 4.0 and Technological Innovation',
      'certs.certOrg': 'Federal University of Roraima – UFRR',
      'certs.certPeriod': 'Jun 2024',
      'certs.tagAI': 'Artificial Intelligence',
      'certs.tagIndustry': 'Industry 4.0',
      'certs.tagInnovation': 'Innovation',

      'contact.title': 'Contact',
      'languages.title': 'Languages',
      'languages.pt': 'Portuguese',
      'languages.en': 'English',
      'languages.es': 'Spanish',
      'languages.native': 'Native',
      'languages.enLevel': 'Reading and technical documentation',
      'languages.esLevel': 'Basic / Reading comprehension',

      'form.eyebrow': "Let's talk",
      'form.title': 'Get in touch',
      'form.intro': "I'm open to full-time roles, freelance projects and remote work. Fill in the form or reach out through the channels below — I usually reply within one business day.",
      'form.name': 'Name',
      'form.namePlaceholder': 'Your name',
      'form.email': 'Email',
      'form.emailPlaceholder': 'you@email.com',
      'form.subject': 'Subject',
      'form.subjectPlaceholder': 'E.g. Job opportunity',
      'form.company': 'Company (optional)',
      'form.companyPlaceholder': 'Company name',
      'form.message': 'Message',
      'form.messagePlaceholder': "Hi Joanes, I'd like to talk about...",
      'form.submit': 'Send message',
      'form.emailSubject': 'New message from your portfolio',
      'form.sending': 'Sending...',
      'form.success': "Message sent successfully! I'll get back to you soon.",
      'form.error': 'Something went wrong. Please try again or email joaneshwc31@gmail.com.',
      'form.notConfigured': "The form isn't configured yet. Please email joaneshwc31@gmail.com.",
      'form.errName': 'Please enter your name.',
      'form.errEmail': 'Please enter your email.',
      'form.errEmailInvalid': 'Please enter a valid email address.',
      'form.errMessage': 'Please write a message with at least 10 characters.',

      'footer.backToTop': 'Back to top'
    }
  };

  /* ------------------------------------------------------------------------
     3. Estado e referências do DOM
     ------------------------------------------------------------------------ */

  let currentLang = 'pt';
  let menuOpen = false;
  let statusKey = '';

  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navPanel = document.getElementById('primary-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const langButtons = document.querySelectorAll('.lang-btn');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = ['sobre', 'experiencia', 'projetos', 'habilidades', 'contato'];
  const form = document.getElementById('contact-form');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  const submitLabel = submitBtn ? submitBtn.querySelector('[data-i18n="form.submit"]') : null;
  const statusEl = document.getElementById('form-status');

  /* ------------------------------------------------------------------------
     4. Utilitários
     ------------------------------------------------------------------------ */

  const safeStorage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        /* armazenamento indisponível — ignora */
      }
    }
  };

  function t(key) {
    const dictionary = translations[currentLang] || translations.pt;
    return dictionary[key] || translations.pt[key] || key;
  }

  function setMeta(selector, content) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('content', content);
  }

  function updateMeta(lang) {
    document.title = translations[lang]['meta.title'];
    setMeta('meta[name="description"]', translations[lang]['meta.description']);
    setMeta('meta[property="og:title"]', translations[lang]['meta.title']);
    setMeta('meta[property="og:description"]', translations[lang]['meta.description']);
    setMeta('meta[name="twitter:title"]', translations[lang]['meta.title']);
    setMeta('meta[name="twitter:description"]', translations[lang]['meta.description']);
    setMeta('meta[property="og:locale"]', lang === 'pt' ? 'pt_BR' : 'en_US');
  }

  /* ------------------------------------------------------------------------
     5. Tema claro/escuro
     ------------------------------------------------------------------------ */

  function updateThemeButtonLabel() {
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-label', t('a11y.theme'));
    themeToggle.setAttribute('title', t('a11y.theme'));
  }

  function setTheme(theme, persist) {
    root.dataset.theme = theme;
    if (persist) safeStorage.set(STORAGE_THEME, theme);
    updateThemeButtonLabel();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next, true);
    });
  }

  /* ------------------------------------------------------------------------
     6. Idioma PT/EN
     ------------------------------------------------------------------------ */

  function updateMenuLabel() {
    if (!navToggle) return;
    navToggle.setAttribute('aria-label', menuOpen ? t('a11y.menuClose') : t('a11y.menuOpen'));
  }

  function setLanguage(lang, persist) {
    currentLang = translations[lang] ? lang : 'pt';
    root.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const value = t(key);
      if (value) element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const value = t(element.dataset.i18nPlaceholder);
      if (value) element.setAttribute('placeholder', value);
    });

    const emailSubjectField = document.getElementById('contact-subject-hidden');
    if (emailSubjectField) emailSubjectField.value = t('form.emailSubject');

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === currentLang;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (statusKey && statusEl) {
      statusEl.textContent = t(statusKey);
    }

    document.querySelectorAll('.stat-value[data-count]').forEach((counter) => {
      setCounterFinal(counter);
    });

    updateMeta(currentLang);
    updateThemeButtonLabel();
    updateMenuLabel();

    if (persist) safeStorage.set(STORAGE_LANG, currentLang);
  }

  langButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang, true));
  });

  // Aplica o idioma salvo antes de montar contadores/animações
  const storedLang = safeStorage.get(STORAGE_LANG);
  setLanguage(storedLang === 'en' ? 'en' : 'pt', false);

  /* ------------------------------------------------------------------------
     7. Menu mobile
     ------------------------------------------------------------------------ */

  function setMenu(open) {
    if (!navToggle || !navPanel) return;

    menuOpen = open;
    navToggle.setAttribute('aria-expanded', String(open));
    navPanel.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-locked', open && window.innerWidth < 900);
    updateMenuLabel();
  }

  if (navToggle && navPanel) {
    navToggle.addEventListener('click', () => setMenu(!menuOpen));

    navPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('click', (event) => {
      if (!menuOpen || event.target.closest('.site-header')) return;
      setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenu(false);
        navToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 900 && menuOpen) setMenu(false);
    });
  }

  /* ------------------------------------------------------------------------
     8. Scrollspy (link ativo na navbar)
     ------------------------------------------------------------------------ */

  function updateActiveLink() {
    if (!navLinks.length) return;

    const headerHeight = header ? header.offsetHeight : 72;
    const offset = headerHeight + 96;
    let current = '';

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      if (section.getBoundingClientRect().top <= offset) current = id;
    });

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = 'contato';

    navLinks.forEach((link) => {
      const isActive = link.dataset.section === current;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  let scrollTicking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        updateActiveLink();
        scrollTicking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener('resize', updateActiveLink);

  /* ------------------------------------------------------------------------
     9. Contadores animados
     ------------------------------------------------------------------------ */

  function setCounterFinal(element) {
    const target = Number(element.dataset.count || 0);
    element.textContent = `${target}${counterSuffix(element)}`;
  }

  function counterSuffix(element) {
    if (currentLang === 'en' && element.dataset.suffixEn) return element.dataset.suffixEn;
    return element.dataset.suffix || '';
  }

  function animateCounter(element) {
    const target = Number(element.dataset.count || 0);
    const suffix = counterSuffix(element);

    if (prefersReducedMotion || !target) {
      setCounterFinal(element);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        element.textContent = `${target}${suffix}`;
      }
    }

    window.requestAnimationFrame(frame);
  }

  const counters = document.querySelectorAll('.stat-value[data-count]');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => {
      counter.textContent = `0${counterSuffix(counter)}`;
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(setCounterFinal);
  }

  /* ------------------------------------------------------------------------
     10. Animações de entrada
     ------------------------------------------------------------------------ */

  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    document.querySelectorAll('.project-grid .reveal, .skills-grid .reveal').forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  /* ------------------------------------------------------------------------
     11. Toast simples (links "Demo" ainda sem URL)
     ------------------------------------------------------------------------ */

  let toastTimer = null;

  function showToast(message) {
    let toast = document.querySelector('.toast');

    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('is-visible');

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
  }

  document.querySelectorAll('[data-demo]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const name = link.dataset.demo || 'Demo';
      showToast(t('projects.demoSoon').replace('{name}', name));
    });
  });

  /* ------------------------------------------------------------------------
     12. Formulário de contato (Formspree)
     ------------------------------------------------------------------------ */

  if (form) {
    // Aceita o endpoint definido acima ou, como fallback, o action do HTML.
    const actionEndpoint = form.getAttribute('action') || '';
    const endpoint =
      FORMSPREE_ENDPOINT.includes('SEU_ID') && actionEndpoint && !actionEndpoint.includes('SEU_ID')
        ? actionEndpoint
        : FORMSPREE_ENDPOINT;

    form.action = endpoint;
    form.noValidate = true; // validação nativa permanece apenas como fallback sem JS

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    function applyFieldError(fieldName, message) {
      const input = document.getElementById(`contact-${fieldName}`);
      const error = document.getElementById(`contact-${fieldName}-error`);

      if (input) {
        if (message) {
          input.setAttribute('aria-invalid', 'true');
        } else {
          input.removeAttribute('aria-invalid');
        }
      }

      if (error) error.textContent = message || '';
    }

    function setFieldError(fieldName, messageKey) {
      applyFieldError(fieldName, messageKey ? t(messageKey) : '');
    }

    function showStatus(type, key) {
      if (!statusEl) return;
      statusKey = key;
      statusEl.textContent = t(key);
      statusEl.className = `form-status is-${type}`;
    }

    function clearStatus() {
      statusKey = '';
      if (!statusEl) return;
      statusEl.textContent = '';
      statusEl.className = 'form-status';
    }

    [nameInput, emailInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener('input', () => {
        setFieldError(input.id.replace('contact-', ''), '');
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      clearStatus();

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      setFieldError('name', '');
      setFieldError('email', '');
      setFieldError('message', '');

      let firstInvalid = null;

      if (name.length < 2) {
        setFieldError('name', 'form.errName');
        firstInvalid = firstInvalid || nameInput;
      }

      if (!email) {
        setFieldError('email', 'form.errEmail');
        firstInvalid = firstInvalid || emailInput;
      } else if (!emailPattern.test(email)) {
        setFieldError('email', 'form.errEmailInvalid');
        firstInvalid = firstInvalid || emailInput;
      }

      if (message.length < 10) {
        setFieldError('message', 'form.errMessage');
        firstInvalid = firstInvalid || messageInput;
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      if (!endpoint || endpoint.includes('SEU_ID')) {
        showStatus('error', 'form.notConfigured');
        return;
      }

      submitBtn.disabled = true;
      form.setAttribute('aria-busy', 'true');
      if (submitLabel) submitLabel.textContent = t('form.sending');

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
          let data = null;
          try {
            data = await response.json();
          } catch (parseError) {
            /* resposta sem JSON */
          }

          const serverErrors = Array.isArray(data?.errors)
            ? data.errors.filter((item) => ['name', 'email', 'message'].includes(item.field))
            : [];

          if (serverErrors.length) {
            serverErrors.forEach((item) => applyFieldError(item.field, item.message));
            const firstField = document.getElementById(`contact-${serverErrors[0].field}`);
            if (firstField) firstField.focus();
          } else {
            showStatus('error', 'form.error');
          }
          return;
        }

        form.reset();
        showStatus('success', 'form.success');
      } catch (error) {
        showStatus('error', 'form.error');
      } finally {
        submitBtn.disabled = false;
        form.removeAttribute('aria-busy');
        if (submitLabel) submitLabel.textContent = t('form.submit');
      }
    });
  }

  /* ------------------------------------------------------------------------
     13. Inicialização
     ------------------------------------------------------------------------ */

  const storedTheme = safeStorage.get(STORAGE_THEME);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    setTheme(storedTheme, false);
  } else {
    setTheme(root.dataset.theme === 'light' ? 'light' : 'dark', false);
  }

  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());

  updateActiveLink();
})();
