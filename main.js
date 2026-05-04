// AI News Intelligence Data (Global/English/Deep)
const newsData = [
    {
        id: 1,
        title: "The Architecture of Tomorrow: OpenAI Commences Training for GPT-5",
        tag: "Core Model",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        source: "Reuters Intelligence",
        date: "2026.05.04",
        views: 84200,
        summary: "OpenAI has officially initiated the training phase for GPT-5, a model designed to transcend current limitations in artificial reasoning. This next-generation large language model (LLM) is engineered with a focus on Artificial General Intelligence (AGI), featuring a sophisticated multi-modal architecture that allows for native integration of text, vision, and audio data. Reports suggest that GPT-5 utilizes a specialized 'sparse mixture of experts' (MoE) approach, drastically increasing parameter counts while optimizing inference costs. The training run is leveraging tens of thousands of NVIDIA Blackwell B200 GPUs, signaling a massive capital commitment to maintaining technological hegemony in the AI sector.",
        insights: [
            "Advanced Reasoning: Expect a paradigm shift from pattern matching to structured logical deduction.",
            "Native Multimodality: The model will perceive the world holistically, processing diverse sensory inputs in a unified latent space.",
            "Strategic Infrastructure: The reliance on massive compute clusters highlights the growing moat between frontier labs and second-tier developers."
        ],
        url: "https://reuters.com"
    },
    {
        id: 2,
        title: "NVIDIA's Blackwell B200: Deciphering the 30x Performance Leap in AI Inference",
        tag: "Infrastucture",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
        source: "Bloomberg Technology",
        date: "2026.05.04",
        views: 71500,
        summary: "NVIDIA has entered full-scale production of its Blackwell B200 GPUs, representing the most significant leap in data center compute since the introduction of the CUDA platform. The B200 delivers a staggering 20 petaflops of FP4 power, optimized specifically for the massive inference requirements of trillion-parameter models. By integrating two chips on a single substrate via a high-bandwidth interconnect, NVIDIA has effectively doubled the physical compute density. This hardware evolution is expected to reduce the energy consumption of AI tasks by up to 25x, addressing the primary bottleneck in global AI scaling: power availability. Major hyperscalers including AWS, Azure, and GCP are already re-architecting their cooling systems to accommodate the liquid-cooled Blackwell racks.",
        insights: [
            "Cost Efficiency: A 30x improvement in inference performance will democratize the deployment of ultra-large models for enterprise applications.",
            "Energy Pivot: The focus on performance-per-watt reflects a shift towards sustainable AI scaling.",
            "Hardware Lock-in: The proprietary NVLink 5.0 interconnect further solidifies NVIDIA's dominance over the data center fabric."
        ],
        url: "https://bloomberg.com"
    },
    {
        id: 3,
        title: "On-Device Intelligence: Google Deploys Gemini Nano Across Global Android Ecosystem",
        tag: "Edge AI",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=1000",
        source: "TechCrunch",
        date: "2026.05.04",
        views: 58900,
        summary: "Google has announced a massive rollout of Gemini Nano, its most efficient on-device AI model, to over 2 billion Android devices worldwide. This move effectively shifts the center of AI processing from the cloud to the edge, enabling latency-free interactions for translation, summarization, and context-aware assistance. By leveraging specialized NPUs (Neural Processing Units) in modern mobile chipsets, Gemini Nano ensures that sensitive user data never leaves the device, providing a robust privacy layer that cloud-only solutions cannot match. This strategic deployment aims to create a unified AI experience that remains functional even in offline environments, setting a new benchmark for mobile operating systems.",
        insights: [
            "Privacy at Scale: Local processing mitigates the data security concerns associated with centralized AI servers.",
            "UX Fluidity: Eliminating round-trip latency to the cloud makes AI interactions feel instantaneous and native.",
            "Ecosystem Loyalty: Deep OS integration creates a sticky user experience that competitors will struggle to replicate without similar hardware-software control."
        ],
        url: "https://techcrunch.com"
    },
    {
        id: 4,
        title: "Microsoft's Copilot+ PCs: Redefining the Personal Computing Paradigm",
        tag: "End-User",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000",
        source: "The Verge",
        date: "2026.05.03",
        views: 42300,
        summary: "Microsoft has unveiled the 'Copilot+ PC' standard, a transformative update to the Windows hardware ecosystem. These devices are equipped with specialized AI silicon capable of 45+ TOPS (Trillion Operations Per Second), allowing for 'system-wide semantic understanding.' Feature such as 'Recall' allow users to search across their entire computing history using natural language, effectively giving the computer a perfect photographic memory of everything seen on the screen. This integration marks the end of the traditional OS-and-App silos, moving towards a fluid, agentic experience where the computer proactively assists in creative and analytical workflows. The partnership with Qualcomm, Intel, and AMD ensures a broad market reach for these AI-native workstations.",
        insights: [
            "Semantic OS: Windows is evolving into a context-aware layer that understands the meaning behind user data.",
            "Hardware Renaissance: The AI requirements are driving the first significant wave of PC hardware upgrades in over a decade.",
            "Productivity Surge: Semantic search and proactive assistance will eliminate 'digital friction' for knowledge workers."
        ],
        url: "https://theverge.com"
    },
    {
        id: 5,
        title: "The UN Global Resolution on AI: Establishing a Framework for Planetary Safety",
        tag: "Governance",
        country: "🌐 UN",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1000",
        source: "The Guardian",
        date: "2026.05.03",
        views: 31200,
        summary: "The United Nations General Assembly has unanimously adopted a landmark resolution on the safe and ethical deployment of Artificial Intelligence. This resolution, co-sponsored by over 120 nations, establishes a global consensus that AI development must prioritize human rights, safety, and international law. It explicitly calls for a ban on autonomous weapons systems that operate without meaningful human oversight and mandates transparency in the training of foundational models. Furthermore, the resolution outlines a cooperative framework for bridging the digital divide, ensuring that the economic benefits of AI are distributed equitably across the Global South. This represents a historic pivot from fragmented national regulations towards a unified global governance model for transformative technologies.",
        insights: [
            "Global Standardization: International consensus will likely drive a unified regulatory baseline for AI labs worldwide.",
            "Safety-First Mandate: The focus on human rights and safety over pure innovation speed reflects growing public concern over AGI.",
            "Inclusion Strategy: Addressing the digital divide is now a core component of global geopolitical stability."
        ],
        url: "https://theguardian.com"
    }
];

// App Controller
class AIGlobalApp {
    constructor() {
        this.currentPage = 'home';
        this.currentDateTarget = 'today';
        this.todayStr = '2026.05.04';
        this.yesterdayStr = '2026.05.03';
        this.init();
    }

    init() {
        // Elements
        this.mainContent = document.getElementById('main-content');
        this.newsContainer = document.getElementById('news-container');
        this.views = {
            home: document.getElementById('list-view'),
            detail: document.getElementById('detail-view'),
            guestbook: document.getElementById('guestbook-view')
        };
        this.articleDetail = document.getElementById('article-detail');
        this.backBtn = document.getElementById('back-btn');
        this.themeBtn = document.getElementById('theme-btn');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navTabs = document.querySelectorAll('.nav-tab');
        this.liveDateEl = document.getElementById('live-date');
        this.contactModal = document.getElementById('contact-modal');
        this.showContact = document.getElementById('show-contact');
        this.closeModal = document.querySelector('.close-modal');

        // Logic
        this.setupTheme();
        this.updateUserLocalDate();
        this.renderNewsList();
        this.setupEventListeners();
        
        // Dynamic Clock
        setInterval(() => this.updateUserLocalDate(), 1000);
    }

    updateUserLocalDate() {
        const now = new Date();
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const options = { 
            year: 'numeric', month: '2-digit', day: '2-digit', 
            weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false,
            timeZone: userTimeZone
        };
        const formatter = new Intl.DateTimeFormat(navigator.language, options);
        this.liveDateEl.textContent = `${formatter.format(now)} (${userTimeZone})`;
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        this.updateThemeButton(savedTheme);
    }

    updateThemeButton(theme) {
        this.themeBtn.innerHTML = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    }

    switchPage(pageId) {
        this.currentPage = pageId;
        Object.keys(this.views).forEach(id => {
            this.views[id].style.display = id === pageId ? 'block' : 'none';
        });
        
        this.navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
        
        window.scrollTo(0, 0);
        
        if (pageId === 'home') {
            this.renderNewsList();
        }
    }

    renderNewsList() {
        this.newsContainer.innerHTML = '';
        const targetDate = this.currentDateTarget === 'today' ? this.todayStr : this.yesterdayStr;
        
        const filteredNews = newsData
            .filter(news => news.date === targetDate)
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);

        if (filteredNews.length === 0) {
            this.newsContainer.innerHTML = '<div class="loading">No archival data found for this segment.</div>';
            return;
        }

        filteredNews.forEach((news, index) => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <div class="news-card-image" style="background-image: url('${news.image}')"></div>
                <div class="news-card-content">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <span class="news-card-tag">${news.tag}</span>
                            <div class="views-count">${(news.views/1000).toFixed(1)}k readers</div>
                        </div>
                        <h3><span class="country-tag">${news.country}</span>${news.title}</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 15px;">
                            ${news.summary}
                        </p>
                    </div>
                    <div class="news-card-meta">
                        <span>Source: ${news.source}</span> • <span>${news.date}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => this.showDetail(news));
            this.newsContainer.appendChild(card);
            
            if (index === 1) {
                const ad = document.createElement('div');
                ad.className = 'ad-placeholder mid-ad';
                ad.innerHTML = '<p>AdSense Slot: Premium In-feed Native</p>';
                this.newsContainer.appendChild(ad);
            }
        });
    }

    showDetail(news) {
        this.switchPage('detail');
        this.articleDetail.innerHTML = `
            <div class="detail-header-image" style="background-image: url('${news.image}')"></div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <span class="country-tag" style="font-size: 1.1rem; padding: 6px 15px;">${news.country}</span>
                <span class="news-card-tag" style="margin-bottom: 0;">${news.tag}</span>
            </div>
            <h1 class="detail-title" style="font-size: 2.8rem; margin-bottom: 25px;">${news.title}</h1>
            <div class="detail-meta" style="margin-bottom: 40px; border-bottom: 2px solid var(--border-color); padding-bottom: 25px;">
                <span>Authority: ${news.source}</span>
                <span>Publication Date: ${news.date}</span>
                <span>Audience Reach: ${news.views.toLocaleString()}</span>
            </div>
            
            <div class="summary-section">
                <h4 style="margin-bottom: 20px; color: var(--primary-color); font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;">Executive Summary</h4>
                <p style="line-height: 2; letter-spacing: -0.01em; font-size: 1.2rem;">${news.summary}</p>
            </div>

            <div class="ad-placeholder" style="height: 100px; margin: 40px 0;">
                <p>AdSense Slot: Contextual Mid-Article</p>
            </div>
            
            <div class="insight-section">
                <h4 style="font-size: 1.6rem; margin-bottom: 30px; font-weight: 800;">Strategic Insights</h4>
                <ul class="insight-list">
                    ${news.insights.map(item => `<li style="margin-bottom: 25px; line-height: 1.7; font-size: 1.1rem;">${item}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-top: 60px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 40px;">
                <a href="${news.url}" target="_blank" class="source-link" style="font-size: 1.1rem; padding: 15px 40px; border: 2px solid var(--primary-color); border-radius: 50px; font-weight: 700;">
                    Access Original Publication →
                </a>
            </div>
        `;
    }

    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.switchPage(link.dataset.page));
        });

        this.backBtn.addEventListener('click', () => this.switchPage('home'));

        this.themeBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeButton(newTheme);
        });

        this.navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.navTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.currentDateTarget = tab.dataset.target;
                this.renderNewsList();
            });
        });

        this.showContact.addEventListener('click', (e) => {
            e.preventDefault();
            this.contactModal.style.display = 'flex';
        });

        this.closeModal.addEventListener('click', () => this.contactModal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === this.contactModal) this.contactModal.style.display = 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AIGlobalApp();
});
