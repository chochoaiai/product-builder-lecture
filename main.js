// AI News Data (Enhanced with views, country, and multiple dates)
const newsData = [
    // Today's News (2026.05.04)
    {
        id: 1,
        title: "OpenAI, 차세대 모델 'GPT-5' 학습 시작 - 인류 수준의 지능 지향",
        tag: "Breaking News",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        source: "TechCrunch",
        date: "2026.05.04",
        views: 15420,
        summary: "OpenAI가 차세대 모델 GPT-5의 학습을 공식적으로 시작했습니다. 이 모델은 추론 능력을 획기적으로 개선하고 실시간 멀티모달 기능을 강화하여 인간 수준의 인공 일반 지능(AGI)에 다가가는 것을 목표로 합니다.",
        insights: ["논리 추론 능력의 비약적 발전", "실시간 상호작용 지연 해소", "에너지 효율적 아키텍처 핵심"],
        url: "https://techcrunch.com"
    },
    {
        id: 2,
        title: "삼성전자, 온디바이스 AI용 차세대 LPDDR5X 메모리 양산",
        tag: "Hardware",
        country: "🇰🇷 Korea",
        image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&w=1000",
        source: "Yonhap News",
        date: "2026.05.04",
        views: 12300,
        summary: "삼성전자가 업계 최선단 12나노급 공정을 적용한 LPDDR5X D램 양산을 시작했습니다. 온디바이스 AI 시장을 겨냥하여 저전력 성능을 극대화했습니다.",
        insights: ["모바일 AI 연산 가속화", "전력 효율 25% 개선", "글로벌 AI 메모리 주도권 강화"],
        url: "https://yna.co.kr"
    },
    {
        id: 3,
        title: "Apple, 'iOS 20'에 생성형 AI 시리 전면 통합 발표",
        tag: "Software",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1611186871348-b1ec696e523b?auto=format&fit=crop&q=80&w=1000",
        source: "9to5Mac",
        date: "2026.05.04",
        views: 9800,
        summary: "애플이 iOS 20을 통해 완전히 재설계된 시리를 선보였습니다. 온디바이스 생성형 AI 모델을 통해 개인화된 맥락을 이해하고 복잡한 작업을 수행합니다.",
        insights: ["사용자 개인 정보 보호 유지", "앱 간 유기적 동작 수행", "시각적 인터페이스 대폭 개선"],
        url: "https://9to5mac.com"
    },
    {
        id: 4,
        title: "SoftBank, AI 전용 슈퍼컴퓨터 구축에 1조엔 투자",
        tag: "Investment",
        country: "🇯🇵 Japan",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        source: "Nikkei Asia",
        date: "2026.05.04",
        views: 8500,
        summary: "소프트뱅크가 일본 내 AI 인프라 확충을 위해 거대 규모의 투자를 단행합니다. 엔비디아의 최신 칩을 도입하여 아시아 최대 규모의 AI 연산망을 구축합니다.",
        insights: ["국가 차원의 AI 자립 기반 마련", "엔비디아 최신 가속기 대량 확보", "스타트업 육성 생태계 강화"],
        url: "https://asia.nikkei.com"
    },
    {
        id: 5,
        title: "Mistral AI, 새로운 오픈소스 언어 모델 'Mistral Large 3' 공개",
        tag: "AI Model",
        country: "🇫🇷 France",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=1000",
        source: "Le Monde",
        date: "2026.05.04",
        views: 7200,
        summary: "프랑스의 AI 유니콘 미스트랄 AI가 오픈소스 생태계를 위한 최신 모델을 공개했습니다. 성능 면에서 유료 모델인 GPT-4o와 대등한 수준을 기록했습니다.",
        insights: ["오픈소스 AI 성능의 정점 갱신", "유럽 AI 기술 주권의 핵심 역할", "효율적인 토큰 처리 방식 도입"],
        url: "https://lemonde.fr"
    },
    // Yesterday's News (2026.05.03)
    {
        id: 6,
        title: "NVIDIA, 초거대 AI 가속기 'B200' 양산 돌입 - 성능 30배 향상",
        tag: "Hardware",
        country: "🇺🇸 USA",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
        source: "The Verge",
        date: "2026.05.03",
        views: 21000,
        summary: "엔비디아가 블랙웰 아키텍처 기반의 B200 GPU 양산에 돌입했습니다. 기존 대비 추론 성능이 30배 향상되었습니다.",
        insights: ["AI 인프라 세대교체 가속화", "데이터센터 전력 효율 극대화", "기술적 진입장벽 강화"],
        url: "https://theverge.com"
    },
    {
        id: 7,
        title: "네이버, 한국형 거대언어모델 'HyperCLOVA X' 대폭 업데이트",
        tag: "AI Model",
        country: "🇰🇷 Korea",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        source: "Daily IT",
        date: "2026.05.03",
        views: 14500,
        summary: "네이버가 하이퍼클로바X의 업데이트를 통해 한국어 특화 성능을 40% 이상 개선했습니다. 법률, 의료 등 전문 분야 답변 정확도가 높아졌습니다.",
        insights: ["국내 전문직 대상 AI 서비스 확대", "데이터 신뢰도 및 보안 강화", "B2B 솔루션 시장 공략 본격화"],
        url: "https://dailyit.co.kr"
    },
    {
        id: 8,
        title: "Stability AI, 이미지 생성 모델 'Stable Diffusion 4' 출시",
        tag: "Creative",
        country: "🇬🇧 UK",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        source: "Creative Bloq",
        date: "2026.05.03",
        views: 12000,
        summary: "스테이빌리티 AI가 더욱 사실적인 이미지 생성이 가능한 SD4 모델을 출시했습니다. 텍스트 이해도가 비약적으로 향상되었습니다.",
        insights: ["디자인 워크플로우 자동화", "저작권 관리 기능 내장", "오픈소스 배포 유지 결정"],
        url: "https://creativebloq.com"
    },
    {
        id: 9,
        title: "Tencent, 중국 내 최대 규모의 AI 트레이닝 클러스터 완공",
        tag: "Infrastructure",
        country: "🇨🇳 China",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        source: "SCMP",
        date: "2026.05.03",
        views: 9500,
        summary: "텐센트가 수만 개의 GPU를 연결한 슈퍼컴퓨팅 단지를 가동하기 시작했습니다. 자체 모델인 'Hunyuan' 학습에 속도를 냅니다.",
        insights: ["중국 독자적 AI 기술망 구축", "미국 기술 규제에 대한 대응책", "아시아 클라우드 시장 점유 확대"],
        url: "https://scmp.com"
    },
    {
        id: 10,
        title: "BMW, 생산 라인에 휴머노이드 로봇 'Figure 02' 투입",
        tag: "Robotics",
        country: "🇩🇪 Germany",
        image: "https://images.unsplash.com/photo-1531746790731-6c2079eadbed?auto=format&fit=crop&q=80&w=1000",
        source: "Auto News",
        date: "2026.05.03",
        views: 8800,
        summary: "BMW 그룹이 공장 내 물류 업무에 피규어 사의 최신 휴머노이드 로봇을 배치했습니다. AI 기반 자율 동작이 가능합니다.",
        insights: ["스마트 팩토리의 최종 진화", "인력난 해결 및 정밀도 향상", "제조업과 AI 로보틱스의 결합"],
        url: "https://autonews.com"
    }
];

class AINewsApp {
    constructor() {
        this.currentDateTarget = 'today'; // 'today' or 'yesterday'
        this.todayStr = '2026.05.04';
        this.yesterdayStr = '2026.05.03';
        this.init();
    }

    init() {
        this.newsContainer = document.getElementById('news-container');
        this.listView = document.getElementById('list-view');
        this.detailView = document.getElementById('detail-view');
        this.articleDetail = document.getElementById('article-detail');
        this.backBtn = document.getElementById('back-btn');
        this.themeBtn = document.getElementById('theme-btn');
        this.contactModal = document.getElementById('contact-modal');
        this.showContact = document.getElementById('show-contact');
        this.closeModal = document.querySelector('.close-modal');
        this.liveDateEl = document.getElementById('live-date');
        this.navTabs = document.querySelectorAll('.nav-tab');

        this.setupTheme();
        this.updateLiveDate();
        this.renderNewsList();
        this.setupEventListeners();
        
        // Start real-time clock
        setInterval(() => this.updateLiveDate(), 1000);
    }

    updateLiveDate() {
        const now = new Date();
        const options = { 
            year: 'numeric', month: '2-digit', day: '2-digit', 
            weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Seoul'
        };
        const formatter = new Intl.DateTimeFormat('ko-KR', options);
        this.liveDateEl.textContent = formatter.format(now);
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        this.updateThemeButton(savedTheme);
    }

    updateThemeButton(theme) {
        this.themeBtn.innerHTML = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    }

    renderNewsList() {
        this.newsContainer.innerHTML = '';
        const targetDate = this.currentDateTarget === 'today' ? this.todayStr : this.yesterdayStr;
        
        // Filter by date, sort by views (desc), and take top 5
        const filteredNews = newsData
            .filter(news => news.date === targetDate)
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);

        if (filteredNews.length === 0) {
            this.newsContainer.innerHTML = '<div class="loading">해당 날짜의 뉴스가 없습니다.</div>';
            return;
        }

        filteredNews.forEach(news => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <div class="news-card-image" style="background-image: url('${news.image}')"></div>
                <div class="news-card-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span class="news-card-tag">${news.tag}</span>
                        <div class="views-count">${news.views.toLocaleString()}</div>
                    </div>
                    <h3><span class="country-tag">${news.country}</span>${news.title}</h3>
                    <div class="news-card-meta">
                        <span>${news.source}</span> • <span>${news.date}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => this.showDetail(news));
            this.newsContainer.appendChild(card);
        });
    }

    showDetail(news) {
        this.listView.style.display = 'none';
        this.detailView.style.display = 'block';
        window.scrollTo(0, 0);

        this.articleDetail.innerHTML = `
            <div class="detail-header-image" style="background-image: url('${news.image}')"></div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                <span class="country-tag" style="font-size: 1.2rem; padding: 5px 12px;">${news.country}</span>
                <span class="news-card-tag" style="margin-bottom: 0;">${news.tag}</span>
            </div>
            <h1 class="detail-title">${news.title}</h1>
            <div class="detail-meta">
                <span>출처: ${news.source}</span>
                <span>게시일: ${news.date}</span>
                <span>조회수: ${news.views.toLocaleString()}</span>
            </div>
            
            <div class="summary-section">
                <h4>한국어 요약</h4>
                <p>${news.summary}</p>
            </div>
            
            <div class="insight-section">
                <h4>전문가 인사이트</h4>
                <ul class="insight-list">
                    ${news.insights.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <a href="${news.url}" target="_blank" class="source-link">원본 기사 읽기 (영문) →</a>
        `;
    }

    setupEventListeners() {
        this.backBtn.addEventListener('click', () => {
            this.detailView.style.display = 'none';
            this.listView.style.display = 'block';
            window.scrollTo(0, 0);
        });

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

        this.closeModal.addEventListener('click', () => {
            this.contactModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === this.contactModal) {
                this.contactModal.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AINewsApp();
});
