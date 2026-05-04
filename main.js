// Global AI News Data (Enriched for AdSense/SEO)
const newsData = [
    {
        id: 1,
        title: "OpenAI Begins Training GPT-5: A Milestone Towards Artificial General Intelligence",
        tag: "Breaking News",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        source: "Reuters",
        date: "2026.05.04",
        views: 45200,
        summary: "OpenAI가 공식적으로 차세대 거대 언어 모델인 'GPT-5'의 학습 단계에 진입했음을 발표했습니다. 이번 모델은 단순한 텍스트 예측을 넘어 인류 수준의 인공 일반 지능(AGI)을 목표로 설계되었습니다. 내부 소식통에 따르면, GPT-5는 이전 모델보다 수십 배 커진 파라미터와 고도화된 추론 알고리즘을 탑재하여 복잡한 과학적 문제 해결과 정교한 멀티모달 상호작용이 가능해질 전망입니다. 이는 AI 산업의 새로운 패러다임을 제시하며 전 세계 기술 패권 경쟁에 큰 파장을 일으키고 있습니다.",
        insights: [
            "인간의 사고방식을 모방한 추론 엔진의 비약적 발전이 예상됩니다.",
            "멀티모달 통합 기술을 통해 시각, 청각, 텍스트가 완벽히 결합된 지능형 에이전트가 탄생할 것입니다.",
            "막대한 전력 소모를 해결하기 위한 친환경 AI 연산 아키텍처 도입이 필수적인 과제로 부상했습니다."
        ],
        url: "https://reuters.com"
    },
    {
        id: 2,
        title: "NVIDIA Blackwell GPUs Enter Mass Production: Revolutionizing Data Center Efficiency",
        tag: "Hardware",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
        source: "Bloomberg",
        date: "2026.05.04",
        views: 38500,
        summary: "엔비디아가 혁신적인 블랙웰(Blackwell) 아키텍처 기반의 B200 GPU 양산 체제에 본격 돌입했습니다. 이 새로운 칩셋은 기존 H100 모델 대비 인공지능 추론 성능에서 최대 30배 이상의 향상을 보여주며, 대규모 언어 모델(LLM) 구동 비용을 획기적으로 낮출 것으로 기대됩니다. 전 세계 주요 클라우드 서비스 기업들은 이미 선주문을 완료한 상태이며, 이는 데이터센터 인프라의 전면적인 세대교체를 의미합니다. 특히 에너지 효율성이 25배 개선되어 지속 가능한 AI 인프라 구축의 핵심 동력이 될 것입니다.",
        insights: [
            "하드웨어 성능 향상이 AI 모델의 대중화와 서비스 단가 하락을 가속화할 것입니다.",
            "엔비디아의 생태계 장악력이 더욱 공고해지며 경쟁사와의 격차가 벌어질 전망입니다.",
            "액체 냉각 방식 등 새로운 데이터센터 설계 표준이 도입되는 계기가 될 것입니다."
        ],
        url: "https://bloomberg.com"
    },
    {
        id: 3,
        title: "Google Expands Gemini Nano to All Android Devices: On-Device AI for Billions",
        tag: "Mobile",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=1000",
        source: "TechCrunch",
        date: "2026.05.04",
        views: 32100,
        summary: "구글이 자사의 경량화 AI 모델인 Gemini Nano를 전 세계 모든 안드로이드 기기로 확대 적용한다고 발표했습니다. 이는 클라우드 서버와의 통신 없이 기기 내부에서 직접 AI 연산을 수행하는 '온디바이스 AI'의 대중화를 선언한 것입니다. 실시간 번역, 오디오 받아쓰기, 지능형 사진 편집 기능 등이 인터넷 연결 없이도 안전하게 작동하게 됩니다. 사용자의 민감한 데이터가 외부로 유출되지 않아 프라이버시가 극대화되며, 저지연 응답 속도를 통해 사용자 경험이 비약적으로 향상될 것입니다.",
        insights: [
            "엣지 컴퓨팅 기술의 발전으로 개인 정보 보호와 성능을 동시에 잡는 트렌드가 정착될 것입니다.",
            "네트워크 인프라가 취약한 지역에서도 고성능 AI 혜택을 누릴 수 있는 디지털 격차 해소가 기대됩니다.",
            "스마트폰 하드웨어 사양 경쟁이 AI 전용 프로세서(NPU) 최적화 중심으로 이동할 것입니다."
        ],
        url: "https://techcrunch.com"
    },
    {
        id: 4,
        title: "Microsoft Announces 'Copilot+ PC' with Advanced Neural Processing Units",
        tag: "Software",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000",
        source: "The Verge",
        date: "2026.05.03",
        views: 29800,
        summary: "마이크로소프트가 AI 기능을 운영체제(OS) 깊숙이 통합한 새로운 하드웨어 카테고리인 'Copilot+ PC'를 공개했습니다. 40 TOPS 이상의 연산 성능을 갖춘 NPU를 탑재하여, 윈도우 환경 내에서 사용자의 모든 활동을 이해하고 보조합니다. 특히 'Recall' 기능을 통해 과거의 작업 내용을 자연어로 검색하고 복원하는 혁신적인 경험을 제공합니다. 이는 윈도우 탄생 이후 가장 큰 변화로 평가받으며, PC 시장의 새로운 부흥기를 예고하고 있습니다.",
        insights: [
            "PC가 단순한 도구를 넘어 사용자의 기억과 업무 방식을 보조하는 파트너로 진화하고 있습니다.",
            "로컬 AI 연산 비중이 커짐에 따라 운영체제의 구조적 패러다임이 변화하고 있습니다.",
            "기업용 시장에서 AI 기반 업무 생산성 도구의 도입이 필수화될 것입니다."
        ],
        url: "https://theverge.com"
    },
    {
        id: 5,
        title: "UN Adopts Landmark Resolution on AI Safety and Human Rights Protection",
        tag: "Policy",
        country: "🌐 UN",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1000",
        source: "The Guardian",
        date: "2026.05.03",
        views: 25400,
        summary: "유엔 총회에서 인공지능의 안전하고 신뢰할 수 있는 사용을 보장하기 위한 역사적인 결의안이 만장일치로 채택되었습니다. 이번 결의안은 AI 기술이 인권을 침해하거나 민주주의를 위협하는 방식으로 사용되어서는 안 된다는 국가 간의 강력한 합의를 담고 있습니다. 특히 개발도상국과 선진국 간의 AI 기술 격차를 해소하고, 공정한 기술 분배를 위한 국제적 협력 체계를 마련할 것을 촉구했습니다. 이는 전 세계적으로 파편화되어 있던 AI 규제 가이드라인을 하나로 모으는 이정표가 될 것입니다.",
        insights: [
            "글로벌 기술 규제가 '혁신'과 '안전' 사이의 균형을 찾는 단계로 진입했습니다.",
            "국제 표준 준수가 AI 기업들의 글로벌 시장 진출에 필수적인 요건이 될 것입니다.",
            "기술 격차 해소가 미래 국제 정치 및 경제 안보의 핵심 변수로 부상하고 있습니다."
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
        
        // Reset history tabs if going back to home
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
            this.newsContainer.innerHTML = '<div class="loading">No news found for this date.</div>';
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
                            <div class="views-count">${(news.views/1000).toFixed(1)}k</div>
                        </div>
                        <h3><span class="country-tag">${news.country}</span>${news.title}</h3>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 15px;">
                            ${news.summary}
                        </p>
                    </div>
                    <div class="news-card-meta">
                        <span>${news.source}</span> • <span>${news.date}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => this.showDetail(news));
            this.newsContainer.appendChild(card);
            
            // Inject small ad placeholder after 2nd card
            if (index === 1) {
                const ad = document.createElement('div');
                ad.className = 'ad-placeholder mid-ad';
                ad.innerHTML = '<p>AdSense Slot: Native In-feed</p>';
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
                <span>Source: ${news.source}</span>
                <span>Date: ${news.date}</span>
                <span>Views: ${news.views.toLocaleString()}</span>
            </div>
            
            <div class="summary-section">
                <h4 style="margin-bottom: 20px; color: var(--primary-color);">Deep Summary (Korean)</h4>
                <p style="line-height: 1.9; letter-spacing: -0.01em;">${news.summary}</p>
            </div>

            <!-- Detail Mid Ad -->
            <div class="ad-placeholder" style="height: 100px; margin: 40px 0;">
                <p>AdSense Slot: Article Body</p>
            </div>
            
            <div class="insight-section">
                <h4 style="font-size: 1.5rem; margin-bottom: 25px;">Core Insights</h4>
                <ul class="insight-list">
                    ${news.insights.map(item => `<li style="margin-bottom: 20px; line-height: 1.6;">${item}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-top: 50px; text-align: center;">
                <a href="${news.url}" target="_blank" class="source-link" style="font-size: 1.1rem; padding: 12px 30px; border: 2px solid var(--primary-color); border-radius: 50px;">
                    Read Original Article (English) →
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
