// Initial Data from Prompt
const defaultData = {
    hero: {
        name: "Subhash Krishna Veer Buddhi",
        title: "AI Engineer • Machine Learning Researcher • Full-Stack Developer",
        image: "assets/profile.jpg",
        links: {
            resume: "#", // Placeholder
            contact: "#contact",
            projects: "#projects"
        }
    },
    about: "I am a Master of Science in Computer Science student at the University of North Carolina at Charlotte (GPA 3.75/4.0), focusing on Machine Learning, Deep Learning, Reinforcement Learning, and secure, scalable software systems. My experience spans teaching graduate-level Machine Learning as a Graduate Teaching Assistant and working as a VAPT intern, where I audited and strengthened real-world web applications.\n\nI enjoy building end-to-end AI and data systems: training and evaluating models, integrating them into production APIs, and designing clean, usable frontends. Some of my favorite projects include FairRL, a fairness-aware reinforcement learning pipeline; a Student Information Chatbot with GPT-4o and FastAPI; and an Intrusion Detection System for IoT networks.\n\nI am particularly interested in ethical and responsible AI, bias mitigation, and systems that combine strong security principles with intelligent automation. Outside of coursework and research, I like experimenting with new tools, mentoring peers, and continuously improving my engineering and communication skills.",
    education: [
        {
            degree: "Master of Science in Computer Science",
            school: "UNC Charlotte, USA",
            gpa: "GPA: 3.75/4.0",
            date: "Graduation: Dec 2025",
            coursework: "Algorithms and Data Structures, Machine Learning, Applied AI, Parallel Computing, Principles of Information and Security, Deep Reinforcement Learning, Software Systems Development and Integration, Visual Analytics, Data Security and Privacy, VAPT, Transformers, Bias Mitigation, NLP, Front-End & Full-Stack Development, SDLC, Product Lifecycle Management."
        }
    ],
    experience: [
        {
            title: "Graduate Teaching Assistant – Machine Learning",
            company: "University of North Carolina at Charlotte",
            location: "Charlotte, NC, USA",
            date: "Aug 2025 – Present",
            details: [
                "Support instruction for graduate and PhD students in Machine Learning by simplifying complex topics in deep learning, reinforcement learning, and model evaluation.",
                "Design and grade programming assignments (Python, TensorFlow, SQL, Scikit-Learn).",
                "Conduct weekly office hours, reducing student debugging time by 30%.",
                "Collaborate with faculty on curriculum enhancements."
            ]
        },
        {
            title: "Summer Intern – VAPT Analysis",
            company: "VNRVJIET",
            location: "Hyderabad, India",
            date: "June 2023 – December 2023",
            details: [
                "Performed a security audit identifying and remediating XSS, CSRF, and SQL Injection vulnerabilities.",
                "Conducted penetration testing using Metasploit, OWASP ZAP, and Kali Linux.",
                "Enhanced overall website security posture by 40%.",
                "Implemented real-time threat monitoring and secure coding practices."
            ]
        }
    ],
    projects: [
        {
            title: "FairRL Pipeline to Mitigate Statistical Bias",
            image: "assets/FairRL.png",
            description: "A fairness-aware reinforcement learning pipeline that reduces demographic bias in AI decision-making systems using Double-DQN and constraint-based optimization.",
            tech: ["Python", "Deep Reinforcement Learning", "Double-DQN"],
            details: [
                "Trained Double-DQN on UCI Adult dataset and used Integrated Gradients to expose gender bias.",
                "Applied fairness-aware reward shaping with constraint-based optimization.",
                "Reduced demographic-parity gap by 95% and equal-opportunity gap by 87%.",
                "Balanced fairness performance with acceptable reward trade-offs."
            ],
            github: "https://github.com/skveer1902/FairRL.git",
            website: ""
        },
        {
            title: "Student Information Chatbot System",
            image: "assets/Chatbot.png",
            description: "An intelligent chatbot system that automates student information access using GPT-4o for natural language SQL query generation with sub-2 second response times.",
            tech: ["FastAPI", "GPT-4o", "React.js", "Tailwind", "MySQL"],
            details: [
                "Built chatbot to automate access to GPA, tuition, ID cards, schedules, etc.",
                "GPT-4o generates SQL queries dynamically in real time.",
                "Secure role-based access for students/faculty/admin.",
                "Sub-2 second latency, 100+ concurrent users, 99.9% uptime."
            ],
            github: "https://github.com/skveer1902/Student-Information-Chatbot.git",
            website: ""
        },
        {
            title: "Intrusion Detection System for IoT Networks",
            image: "assets/IOT.png",
            description: "A machine learning-based intrusion detection system achieving 96% accuracy in identifying cyber threats across IoT networks using advanced feature selection.",
            tech: ["Python", "ANN", "CNN", "LSTM", "Random Forest"],
            details: [
                "Built IDS to detect cyber threats across IoT datasets (TON-IoT, NSL-KDD, UNSW).",
                "Used PPGO for feature selection, improving detection accuracy by 15%.",
                "Achieved 96% detection accuracy.",
                "Developed real-time visualization dashboard for administrators."
            ],
            github: "https://github.com/skveer1902/IDS-IOT.git",
            website: ""
        },
        {
            title: "Waste Classification System",
            image: "assets/waste.png",
            description: "An image-based waste classification system using deep learning to support sustainability initiatives with an intuitive web interface.",
            tech: ["Python", "Deep Learning"],
            details: [
                "Built an image-based waste classifier for sustainability applications.",
                "Deployed simple web interface for predictions."
            ],
            github: "https://github.com/skveer1902/Waste-Classification-system.git",
            website: ""
        },
        {
            title: "AILogue – AI Conversation & Analytics Platform",
            image: "assets/AILogue.png",
            description: "A conversational AI platform with integrated logging and analytics capabilities for tracking and analyzing user interactions.",
            tech: ["Python", "FastAPI", "React", "LLM Integration"],
            details: [
                "Built conversational interface with logging + analytics for user queries."
            ],
            github: "https://github.com/skveer1902/AILogue.git",
            website: ""
        },
        {
            title: "Weather App with CRUD & APIs",
            image: "assets/Weather.png",
            description: "A full-stack weather dashboard with CRUD operations, REST API integration, and database management capabilities.",
            tech: ["Next.js/React", "REST APIs", "CI/CD"],
            details: [
                "Weather dashboard with CRUD functionalities and database integration."
            ],
            github: "https://github.com/skveer1902/Weather-App.git",
            website: ""
        }
    ],
    skills: {
        "Programming Languages & Databases": ["Python", "C", "C++", "C#", "Java", "JavaScript", "SQL", "HTML/CSS", "MySQL", "MongoDB"],
        "Frameworks & Libraries": ["PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI", "NumPy", "React.js", "Next.js", "Node.js", "Flask", ".NET"],
        "Machine Learning & Data Science": ["Data Preparation", "Feature Engineering", "EDA", "Data Visualization", "ANN", "CNN", "LSTM", "Reinforcement Learning", "BERT", "T5", "GPT-4o", "GPT-3.5", "Claude", "Random Forest", "Gradient Boosting"],
        "Tools & Paradigms": ["Git", "GitHub", "VSCode", "Jupyter Notebook", "REST APIs", "CI/CD Pipelines", "Figma", "Tableau", "Agile", "Project Management"],
        "Cloud Platforms": ["AWS (Lambda, EC2, VPC)", "GCP (GPU/TPU)"],
        "Soft Skills": ["Communication", "teamwork", "adaptability", "problem-solving", "fast learner"]
    },
    certifications: [
        {
            title: "Generative AI with Large Language Models",
            org: "AWS",
            year: "2025",
            link: "https://www.coursera.org/account/accomplishments/records/LTI9JLL7Z1H1"
        },
        {
            title: "Deep Learning",
            org: "NPTEL",
            year: "2023",
            link: ""
        },
        {
            title: "Cloud Computing",
            org: "NPTEL",
            year: "2022",
            link: ""
        }
    ],
    contact: {
        email: "bskveer55@gmail.com",
        linkedin: "https://www.linkedin.com/in/subhash-krishna-veer-buddhi",
        github: "https://github.com/skveer1902"
    }
};

// Initial State
let portfolioData = JSON.parse(localStorage.getItem('portfolioData')) || defaultData;
let isOwner = false; // Initial state, will verify with server
// PASSWORD REMOVED from client-side code

// DOM Elements
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const editorModal = document.getElementById('editor-modal');

// Init
function init() {
    if (window.appInitialized) {
        console.warn("App already initialized. Skipping.");
        return;
    }
    window.appInitialized = true;
    console.log("App Init: Rendering Portfolio");

    // DATA MIGRATION: Convert old string certifications to objects if needed
    if (portfolioData.certifications.length > 0 && typeof portfolioData.certifications[0] === 'string') {
        console.log("Migrating certifications to objects...");
        portfolioData.certifications = portfolioData.certifications.map(c => {
            let title = c;
            let org = "";
            let year = "";
            if (c.includes('–')) {
                const parts = c.split('–');
                title = parts[0].trim();
                const rest = parts[1] ? parts[1].trim() : "";
                if (rest.includes('(')) {
                    const yearParts = rest.split('(');
                    org = yearParts[0].trim();
                    year = yearParts[1].replace(')', '').trim();
                } else {
                    org = rest;
                }
            }
            return { title, org, year, link: "" };
        });
        saveState();
    }

    // Ensure persistent link for specific AWS cert if missing
    const awsCert = portfolioData.certifications.find(c => c.title.includes("Generative AI") && c.org === "AWS");
    if (awsCert && (!awsCert.link || awsCert.link === "")) {
        awsCert.link = "https://www.coursera.org/account/accomplishments/records/LTI9JLL7Z1H1";
        saveState();
    }

    renderAll();
    setupEventListeners();
    checkObserver();
}

function renderAll() {
    renderHero();
    renderAbout();
    renderEducation();
    renderExperience();
    renderProjects();
    renderSkills();
    renderCertifications();
    renderContact();
    updateOwnerUI();
}

function saveState() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    renderAll();
}

// Render Functions
function renderHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>

        <div class="hero-container">
            <div class="hero-image-container fade-in">
                <div class="hero-image-wrapper">
                    <div class="hero-image-glow"></div>
                    <img src="${portfolioData.hero.image}" alt="Profile" class="hero-image" onerror="if(this.src!=='https://via.placeholder.com/350') this.src='https://via.placeholder.com/350'">
                </div>
            </div>
            
            <div class="hero-content fade-in-delay-1">
                <h1 class="hero-title">
                    Hi, I'm <br>
                    <span class="gradient-text">${portfolioData.hero.name}</span>
                    ${getEditBtn('hero')}
                </h1>
                <p class="hero-subtitle fade-in-delay-2">${portfolioData.hero.title}</p>
                <div class="hero-buttons fade-in-delay-2">
                    <a href="${portfolioData.hero.links.resume}" class="btn btn-primary">Resume</a>
                    <a href="${portfolioData.hero.links.contact}" class="btn btn-secondary">Contact Me</a>
                    <a href="${portfolioData.hero.links.projects}" class="btn btn-outline">View Work</a>
                </div>
            </div>
        </div>
    `;
}

function renderAbout() {
    const container = document.getElementById('about-content');
    container.innerHTML = `
        <div class="about-text">
            ${portfolioData.about.replace(/\n/g, '<br>')}
        </div>
    `;
}

function renderEducation() {
    const s = document.getElementById('education-grid');
    let html = '';
    portfolioData.education.forEach((edu, idx) => {
        html += `
            <div class="card">
                ${getItemActions('education', idx)}
                <div class="card-header">
                    <div class="card-title">${edu.degree}</div>
                    <div class="card-institution">${edu.school}</div>
                </div>
                <div class="card-meta">
                    <span><i class="far fa-calendar-alt"></i> ${edu.date}</span>
                    ${edu.gpa ? `<span class="meta-divider">•</span><span>${edu.gpa}</span>` : ''}
                </div>
                <div class="card-content">
                    <div class="card-label">Coursework:</div>
                    <p class="card-text">${edu.coursework}</p>
                </div>
            </div>
        `;
    });
    s.innerHTML = html;
}

function renderExperience() {
    const s = document.getElementById('experience-grid');
    // Wrap the grid content in a relative container for the timeline
    let html = '<div class="experience-section-wrapper"><div class="experience-timeline"></div><div style="display:grid; gap:2rem;">';

    portfolioData.experience.forEach((exp, idx) => {
        // Timeline dot positioning relative to the card
        const dot = `<div class="timeline-dot" style="top: ${(idx * 0) + 2}rem;"></div>`; // Simplified for now, CSS handles absolute positioning better if items are relative

        // Actually, better to put the dot inside the card or wrapper. 
        // Let's attach the dot to the card wrapper for simpler alignment
        html += `
            <div class="card" style="position:relative;">
                <div class="timeline-dot" style="top: 2rem; right: -2.3rem;"></div>
                ${getItemActions('experience', idx)}
                <div class="card-header">
                    <div class="card-title">${exp.title}</div>
                    <div class="card-institution">${exp.company}</div>
                </div>
                <div class="card-meta">
                    <span><i class="far fa-calendar-alt"></i> ${exp.date}</span>
                    ${exp.location ? `<span class="meta-divider">•</span><span class="card-location"><i class="fas fa-map-marker-alt location-icon"></i> ${exp.location}</span>` : ''}
                </div>
                <div class="card-content">
                    <ul class="card-list">
                        ${exp.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    html += '</div></div>';
    s.innerHTML = html;
}

function renderProjects() {
    const s = document.getElementById('projects-grid');
    let html = '';
    portfolioData.projects.forEach((proj, idx) => {
        html += `
            <div class="project-card">
                ${getItemActions('projects', idx)}
                <img src="${proj.image}" alt="${proj.title}" class="project-image" onerror="if(this.src!=='https://via.placeholder.com/350x200') this.src='https://via.placeholder.com/350x200'">
                <div class="project-content">
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-description">${proj.description}</p>
                    <div class="tech-tags">
                        ${proj.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <div class="project-buttons">
                        ${proj.website ? `<a href="${proj.website}" target="_blank" class="project-btn project-btn-secondary"><i class="fas fa-external-link-alt"></i> View Website</a>` : ''}
                        <a href="${proj.github}" target="_blank" class="project-btn project-btn-primary"><i class="fab fa-github"></i> View Code</a>
                    </div>
                </div>
            </div>
        `;
    });
    s.innerHTML = html;
}

function renderSkills() {
    const s = document.getElementById('skills-grid');
    let html = '';

    // Icon/Color Mapping
    const categoryStyles = {
        "Programming Languages & Databases": { icon: "fas fa-code", color: "#60a5fa" }, // Blue
        "Frameworks & Libraries": { icon: "fas fa-layer-group", color: "#a78bfa" }, // Purple
        "Machine Learning & Data Science": { icon: "fas fa-brain", color: "#f472b6" }, // Pink
        "Tools & Paradigms": { icon: "fas fa-tools", color: "#34d399" }, // Green
        "Cloud Platforms": { icon: "fas fa-cloud", color: "#fcd34d" }, // Yellow
        "Soft Skills": { icon: "fas fa-users", color: "#f87171" } // Red
    };

    Object.keys(portfolioData.skills).forEach((cat) => {
        const style = categoryStyles[cat] || { icon: "fas fa-star", color: "#cbd5e1" };
        const skills = portfolioData.skills[cat];

        // Owner checks
        let deleteBtn = '';
        if (isOwner) {
            deleteBtn = `
                <div class="skill-card-controls">
                     <button class="category-pencil" onclick="deleteSkillCategory('${cat}')"><i class="fas fa-trash"></i></button>
                </div>
            `;
        }

        const tagsHtml = skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        const addBtn = isOwner ? `<button class="add-list-item-btn" onclick="addSkillItem('${cat}')" style="margin-top:0.5rem; font-size:0.8rem;">+ Add</button>` : '';

        html += `
            <div class="skill-card">
                ${deleteBtn}
                <div class="skill-icon-outer">
                    <div class="skill-icon-wrapper" style="border-color: ${style.color}; background: ${style.color}10;">
                        <i class="${style.icon} skill-icon" style="color: ${style.color};"></i>
                    </div>
                </div>
                <h3 class="skill-card-title">${cat}</h3>
                <hr class="skill-divider">
                <div class="skill-list">
                    ${tagsHtml}
                    ${addBtn}
                </div>
            </div>
        `;
    });
    s.innerHTML = html;
}

function renderCertifications() {
    const s = document.getElementById('certifications-grid');
    let html = '';
    portfolioData.certifications.forEach((cert, idx) => {
        const hasLink = cert.link && cert.link.trim() !== "";
        // If hasLink, add onclick to open new tab, otherwise default cursor
        const clickAttr = hasLink ? `onclick="window.open('${cert.link}', '_blank')"` : `style="cursor: default"`;
        const linkIndicator = hasLink ? `<i class="fas fa-external-link-alt" style="font-size:0.8rem; margin-left:0.5rem; opacity:0.5;"></i>` : '';

        const controls = isOwner ? `
            <div class="card-controls">
                <button class="edit-btn" onclick="event.stopPropagation(); editItem('certifications', ${idx})"><i class="fas fa-pen"></i></button>
                <button class="delete-btn" onclick="event.stopPropagation(); deleteItem('certifications', ${idx})"><i class="fas fa-trash"></i></button>
            </div>
        ` : '';

        html += `
            <div class="cert-card" ${clickAttr}>
                ${controls}
                <i class="fas fa-award cert-icon"></i>
                <div class="cert-title">
                    ${cert.title}
                    ${linkIndicator}
                </div>
                <div class="cert-meta">
                    ${cert.org} ${cert.year ? '• ' + cert.year : ''}
                </div>
            </div>
        `;
    });
    s.innerHTML = html;
}

function renderContact() {
    const s = document.getElementById('contact-content');
    const c = portfolioData.contact;
    s.innerHTML = `
        <div class="contact-wrapper">
            <!-- Left Column: Links & Info -->
            <div class="contact-info">
                <p class="contact-note">
                    Want to collaborate, chat about AI, or build something cool together?
                </p>

                <p>
                    You can connect with me on LinkedIn, follow my work on GitHub, email me directly, or send a message here.
                </p>
                <br>
                
                <div class="contact-links-list">
                    <a href="mailto:${c.email}" class="contact-link-item">
                        <i class="fas fa-envelope"></i>
                        <span>${c.email}</span>
                    </a>
                    <a href="${c.linkedin}" target="_blank" class="contact-link-item">
                        <i class="fab fa-linkedin"></i>
                        <span style="word-break: break-all;">${c.linkedin}</span>
                    </a>
                    <a href="${c.github}" target="_blank" class="contact-link-item">
                        <i class="fab fa-github"></i>
                        <span>${c.github}</span>
                    </a>
                </div>
            </div>

            <!-- Right Column: Form Card -->
            <div class="contact-form-card">
                <h3 class="contact-form-title">Send a Message</h3>
                <form id="contact-form" onsubmit="handleContactSubmit(event)">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    
                    <div class="form-group">
                        <label class="form-label">Name</label>
                        <input type="text" name="name" class="form-input" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" class="form-input" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Subject</label>
                        <input type="text" name="subject" class="form-input" placeholder="Subject" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Message</label>
                        <textarea name="message" class="form-textarea" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width:100%" id="contact-submit-btn">Send Message</button>
                    <p id="form-status" style="margin-top:1rem; text-align:center; font-size:0.9rem;"></p>
                </form>
            </div>
        </div>
    `;
}

window.handleContactSubmit = function (e) {
    e.preventDefault();
    const btn = document.getElementById('contact-submit-btn');
    const status = document.getElementById('form-status');
    const form = e.target;

    btn.disabled = true;
    btn.textContent = "Sending...";
    status.textContent = "";

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/bskveer55@gmail.com", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            btn.textContent = "Message Sent!";
            status.textContent = "Thanks! I'll get back to you soon.";
            status.style.color = "var(--accent-teal)";
            form.reset();
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = "Send Message";
            }, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
            btn.disabled = false;
            btn.textContent = "Try Again";
            status.textContent = "Oops! Something went wrong. Please email me directly.";
            status.style.color = "#ef4444";
        });
}

// Helpers for Owner UI
function getEditBtn(section) {
    if (!isOwner) return '';
    return `<button class="section-pencil" onclick="openEditor('${section}')" style="display:inline-block"><i class="fas fa-pen"></i></button>`;
}

function getItemActions(section, index) {
    if (!isOwner) return '';
    return `
        <div class="card-controls">
            <button class="edit-btn" onclick="editItem('${section}', ${index})"><i class="fas fa-pen"></i></button>
            <button class="delete-btn" onclick="deleteItem('${section}', ${index})"><i class="fas fa-trash"></i></button>
        </div>
    `;
}

function updateOwnerUI() {
    // Buttons in HTML handled by visibility classes, but we toggle 'hidden' class here
    const editBtns = document.querySelectorAll('.section-pencil');
    if (isOwner) {
        loginBtn.textContent = "Logout";
        loginBtn.classList.add('nav-logout-btn');
        editBtns.forEach(btn => btn.classList.remove('hidden'));
    } else {
        loginBtn.textContent = "Login";
        loginBtn.classList.remove('nav-logout-btn');
        editBtns.forEach(btn => btn.classList.add('hidden'));
    }
}

// Intersection Observer for Animations
function checkObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(s => observer.observe(s));
}

// Auth Functions
async function checkLoginStatus() {
    try {
        const res = await fetch('/api/auth/verify');
        if (res.ok) {
            isOwner = true;
        } else {
            isOwner = false;
        }
    } catch (e) {
        console.log("Auth check skipped (local/static mode)");
        isOwner = false;
    }
    renderAll();
}

async function logoutOwner() {
    try {
        await fetch('/api/auth/logout');
    } catch (e) { console.error(e); }
    isOwner = false;
    renderAll();
}

// Interaction
function setupEventListeners() {
    // Verify auth on load
    checkLoginStatus();

    // Navigation Smooth Scroll
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Login
    document.getElementById('login-btn').addEventListener('click', (e) => {
        if (isOwner) {
            // Logout
            logoutOwner();
        } else {
            loginModal.classList.add('active');
            document.getElementById('password-input').focus();
        }
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal-overlay').classList.remove('active');
        });
    });

    document.getElementById('submit-login').addEventListener('click', async () => {
        const pass = document.getElementById('password-input').value;
        const errorMsg = document.getElementById('login-error');

        errorMsg.textContent = "Verifying...";

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: pass })
            });
            const data = await res.json();

            if (res.ok && data.success) {
                isOwner = true;
                document.getElementById('password-input').value = '';
                errorMsg.textContent = '';
                loginModal.classList.remove('active');
                renderAll(); // Re-render to show edit buttons
            } else {
                errorMsg.textContent = "Incorrect password";
            }
        } catch (err) {
            console.error(err);
            errorMsg.textContent = "Error connecting to server. (Note: Auth works on Vercel/Node environment)";
            // Fallback for visual testing if API fails (e.g. localhost python)
            if (location.hostname === 'localhost' && !location.port.includes('3000')) {
                alert("API not available in simple static server. Please deploy to Vercel or use 'vercel dev'.");
            }
        }
    });

    // Close editor
    document.getElementById('close-editor').addEventListener('click', () => {
        editorModal.classList.remove('active');
    });
}


// Custom Modal Helpers (Promisified)
function showConfirm(message) {
    return new Promise((resolve) => {
        const modal = document.getElementById('confirm-modal');
        const msg = document.getElementById('confirm-message');
        const yesBtn = document.getElementById('confirm-yes');
        const noBtn = document.getElementById('confirm-no');

        msg.textContent = message;
        modal.classList.add('active');

        const cleanup = () => {
            modal.classList.remove('active');
            yesBtn.removeEventListener('click', onYes);
            noBtn.removeEventListener('click', onNo);
        };

        const onYes = () => {
            cleanup();
            resolve(true);
        };

        const onNo = () => {
            cleanup();
            resolve(false);
        };

        yesBtn.addEventListener('click', onYes);
        noBtn.addEventListener('click', onNo);
    });
}

function showPrompt(title, defaultValue = '') {
    return new Promise((resolve) => {
        const modal = document.getElementById('prompt-modal');
        const titleEl = document.getElementById('prompt-title');
        const input = document.getElementById('prompt-input');
        const okBtn = document.getElementById('prompt-ok');
        const cancelBtn = document.getElementById('prompt-cancel');

        titleEl.textContent = title;
        input.value = defaultValue;
        modal.classList.add('active');
        input.focus();

        const cleanup = () => {
            modal.classList.remove('active');
            okBtn.removeEventListener('click', onOk);
            cancelBtn.removeEventListener('click', onCancel);
        };

        const onOk = () => {
            const val = input.value;
            cleanup();
            resolve(val);
        };

        const onCancel = () => {
            cleanup();
            resolve(null);
        };

        okBtn.addEventListener('click', onOk);
        cancelBtn.addEventListener('click', onCancel);

        // Handle Enter key
        input.onkeydown = (e) => {
            if (e.key === 'Enter') onOk();
        };
    });
}

// Editing System
let currentEditContext = null;

window.openEditor = (sectionKey) => {
    currentEditContext = { type: 'section', key: sectionKey, mode: 'edit' };
    const data = portfolioData[sectionKey];
    const container = document.getElementById('editor-fields');
    container.innerHTML = '';

    if (sectionKey === 'hero') {
        container.innerHTML += createInput('Name', data.name, 'name');
        container.innerHTML += createInput('Title', data.title, 'title');
        container.innerHTML += createInput('Image URL', data.image, 'image');
    } else if (sectionKey === 'about') {
        container.innerHTML += createTextarea('Content', data, 'content');
    } else if (sectionKey === 'contact') {
        container.innerHTML += createInput('Email', data.email, 'email');
        container.innerHTML += createInput('LinkedIn', data.linkedin, 'linkedin');
        container.innerHTML += createInput('GitHub', data.github, 'github');
    }

    editorModal.classList.add('active');
};

window.editItem = (section, index) => {
    currentEditContext = { type: 'item', key: section, index: index, mode: 'edit' };
    const item = portfolioData[section][index];
    renderEditorFields(section, item);
    editorModal.classList.add('active');
};

function renderEditorFields(section, item) {
    const container = document.getElementById('editor-fields');
    container.innerHTML = '';

    if (section === 'education') {
        container.innerHTML += createInput('Degree', item.degree || '', 'degree');
        container.innerHTML += createInput('School', item.school || '', 'school');
        container.innerHTML += createInput('GPA', item.gpa || '', 'gpa');
        container.innerHTML += createInput('Date', item.date || '', 'date');
        container.innerHTML += createTextarea('Coursework', item.coursework || '', 'coursework');
    } else if (section === 'experience') {
        container.innerHTML += createInput('Title', item.title || '', 'title');
        container.innerHTML += createInput('Company', item.company || '', 'company');
        container.innerHTML += createInput('Location', item.location || '', 'location');
        container.innerHTML += createInput('Date', item.date || '', 'date');
        const details = Array.isArray(item.details) ? item.details.join('\n') : item.details || '';
        container.innerHTML += createTextarea('Details (New line per item)', details, 'details');
    } else if (section === 'projects') {
        container.innerHTML += createInput('Title', item.title || '', 'title');
        container.innerHTML += createInput('Image Filename', item.image || '', 'image');
        container.innerHTML += createTextarea('Description (Short)', item.description || '', 'description');
        const tech = Array.isArray(item.tech) ? item.tech.join(', ') : item.tech || '';
        container.innerHTML += createInput('Tech Stack (comma separated)', tech, 'tech');
        const details = Array.isArray(item.details) ? item.details.join('\n') : item.details || '';
        container.innerHTML += createTextarea('Internal Details (Bullets)', details, 'details');
        container.innerHTML += createInput('Website URL (Optional)', item.website || '', 'website');
        container.innerHTML += createInput('GitHub URL', item.github || '', 'github');
    } else if (section === 'certifications') {
        container.innerHTML += createInput('Certification Title', item.title || '', 'title');
        container.innerHTML += createInput('Organization', item.org || '', 'org');
        container.innerHTML += createInput('Year', item.year || '', 'year');
        container.innerHTML += createInput('Link (Optional)', item.link || '', 'link');
    }
}

window.addItem = async (section) => {
    if (section === 'skills') {
        const newCat = await showPrompt("Enter new category name:");
        if (newCat) {
            portfolioData.skills[newCat] = ["New Skill"]; // Default single item
            saveState();
        }
        return;
    }

    // Prepare empty item
    currentEditContext = { type: 'item', key: section, index: -1, mode: 'create' };
    let newItem = {};
    if (section === 'education') newItem = { degree: "", school: "", gpa: "", date: "", coursework: "" };
    if (section === 'experience') newItem = { title: "", company: "", location: "", date: "", details: [] };
    if (section === 'projects') newItem = { title: "", image: "", description: "", tech: [], details: [], github: "", website: "" };
    if (section === 'certifications') newItem = { title: "", org: "", year: "", link: "" };

    renderEditorFields(section, newItem);
    editorModal.classList.add('active');
};

window.deleteItem = async (section, index) => {
    const confirmed = await showConfirm("Delete this item permanently?");
    if (confirmed) {
        portfolioData[section].splice(index, 1);
        saveState();
    }
};

window.deleteSkillCategory = async (cat) => {
    const confirmed = await showConfirm(`Delete category "${cat}"?`);
    if (confirmed) {
        delete portfolioData.skills[cat];
        saveState();
    }
}

window.addSkillItem = async (cat) => {
    const s = await showPrompt("Add skill:");
    if (s) {
        portfolioData.skills[cat].push(s);
        saveState();
    }
}

document.getElementById('save-changes').addEventListener('click', () => {
    const inputs = document.querySelectorAll('#editor-fields input, #editor-fields textarea');
    let data = {};

    inputs.forEach(input => {
        data[input.dataset.key] = input.value;
    });

    if (currentEditContext.type === 'section') {
        if (currentEditContext.key === 'about') {
            portfolioData.about = data.content;
        } else if (currentEditContext.key === 'hero') {
            portfolioData.hero.name = data.name;
            portfolioData.hero.title = data.title;
            portfolioData.hero.image = data.image;
        } else if (currentEditContext.key === 'contact') {
            portfolioData.contact = data;
        }
    } else if (currentEditContext.type === 'item') {
        const section = currentEditContext.key;

        // Process arrays
        if (data.details) data.details = data.details.split('\n').filter(x => x.trim());
        if (data.tech) data.tech = data.tech.split(',').map(x => x.trim());

        if (section === 'certifications') {
            // Migrated to object structure, so handle same as others
            if (currentEditContext.mode === 'create') {
                portfolioData[section].push(data);
            } else {
                portfolioData[section][currentEditContext.index] = { ...portfolioData[section][currentEditContext.index], ...data };
            }
        } else {
            if (currentEditContext.mode === 'create') {
                portfolioData[section].push(data);
            } else {
                portfolioData[section][currentEditContext.index] = { ...portfolioData[section][currentEditContext.index], ...data };
            }
        }
    }

    saveState();
    editorModal.classList.remove('active');
});

// Utilities
function createInput(label, value, key) {
    return `
        <div class="form-group">
            <label class="form-label">${label}</label>
            <input type="text" value="${value}" class="form-input" data-key="${key}">
        </div>
    `;
}

function createTextarea(label, value, key) {
    return `
        <div class="form-group">
            <label class="form-label">${label}</label>
            <textarea rows="5" class="form-textarea" data-key="${key}">${value}</textarea>
        </div>
    `;
}

// Start
init();
