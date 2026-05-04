// AI News Data (Mocking for the prototype)
const newsData = [
    {
        id: 1,
        title: "OpenAI, 차세대 모델 'GPT-5' 학습 시작 - 인류 수준의 지능 지향",
        tag: "Breaking News",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        source: "TechCrunch",
        date: "2026.05.04",
        summary: "OpenAI가 내부적으로 'Gobi' 또는 'Arrakis'로 불리는 차세대 모델 GPT-5의 학습을 공식적으로 시작했습니다. 이 모델은 추론 능력을 획기적으로 개선하고 실시간 멀티모달 기능을 강화하여 인간 수준의 인공 일반 지능(AGI)에 한 걸음 더 다가가는 것을 목표로 합니다.",
        insights: [
            "단순한 텍스트 생성을 넘어선 복합적 논리 추론 능력의 비약적 발전이 기대됨.",
            "실시간 상호작용의 지연 시간이 사라지며 진정한 AI 비서의 시대가 열릴 것.",
            "컴퓨팅 자원 소모가 막대해짐에 따라 에너지 효율적인 모델 아키텍처가 핵심 경쟁력이 됨."
        ],
        url: "https://techcrunch.com"
    },
    {
        id: 2,
        title: "NVIDIA, 초거대 AI 가속기 'B200' 양산 돌입 - 성능 30배 향상",
        tag: "Hardware",
        image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000",
        source: "The Verge",
        date: "2026.05.03",
        summary: "엔비디아가 블랙웰(Blackwell) 아키텍처 기반의 B200 GPU 양산에 돌입했습니다. 기존 H100 대비 추론 성능은 최대 30배, 전력 효율은 25배 개선되었습니다. 이는 전 세계 데이터센터의 AI 전환 속도를 더욱 가속화할 전망입니다.",
        insights: [
            "하드웨어 성능의 압도적 우위가 AI 소프트웨어 생태계의 성장을 견인 중.",
            "전력 소모 대비 성능 비(Perf/Watt)가 AI 인프라 구축의 가장 중요한 지표로 부상.",
            "클라우드 서비스 제공업체(CSP)들의 엔비디아 의존도는 더욱 심화될 것으로 보임."
        ],
        url: "https://theverge.com"
    },
    {
        id: 3,
        title: "Google, 기기 내장형 AI 'Gemini Nano' 안드로이드 전 기기 확대",
        tag: "Mobile",
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=1000",
        source: "Wired",
        date: "2026.05.02",
        summary: "구글이 온디바이스 AI 모델인 Gemini Nano를 중저가형 안드로이드 스마트폰까지 확대 적용한다고 발표했습니다. 이제 클라우드 연결 없이도 실시간 번역, 사진 편집, 문서 요약 기능을 스마트폰 내에서 빠르고 안전하게 처리할 수 있게 됩니다.",
        insights: [
            "프라이버시 보호를 위해 데이터 처리가 기기 내부에서 이루어지는 '엣지 AI' 트렌드 강화.",
            "네트워크 연결이 불안정한 환경에서도 AI 기능을 원활히 사용할 수 있는 접근성 확보.",
            "스마트폰 제조사 간 하드웨어 성능 경쟁이 'AI 최적화' 중심으로 재편됨."
        ],
        url: "https://wired.com"
    },
    {
        id: 4,
        title: "AI 영상 제작 시장의 혁명, 'Sora' 일반 공개 임박",
        tag: "Creative",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
        source: "Bloomberg",
        date: "2026.05.01",
        summary: "OpenAI의 동영상 생성 AI인 Sora의 일반 사용자 대상 공개가 임박했습니다. 텍스트 한 줄로 영화 수준의 60초 영상을 생성하는 이 기술은 광고, 영화, 콘텐츠 제작 산업에 파괴적 혁신을 가져올 것으로 예상됩니다.",
        insights: [
            "콘텐츠 제작 비용의 획기적 절감과 1인 크리에이터의 영향력 극대화.",
            "딥페이크 및 저작권 문제 등 윤리적/법적 가이드라인 마련이 시급한 과제로 부상.",
            "전통적인 영상 편집 및 CG 기술과의 융합을 통한 새로운 창작 워크플로우 탄생."
        ],
        url: "https://bloomberg.com"
    },
    {
        id: 5,
        title: "유엔(UN), 세계 최초 'AI 안전 보장' 결의안 만장일치 채택",
        tag: "Policy",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1000",
        source: "Reuters",
        date: "2026.04.30",
        summary: "유엔 총회에서 인공지능의 안전하고 신뢰할 수 있는 사용을 촉구하는 결의안이 만장일치로 통과되었습니다. 이는 AI 기술 발전에 따른 인권 보호와 기술 격차 해소를 위한 국가 간 협력을 강조하는 역사적인 첫걸음입니다.",
        insights: [
            "기술 패권 경쟁 속에서도 '인류의 안전'이라는 공통된 가치에 대한 국제적 합의 도출.",
            "국가별 AI 규제 입법이 이 결의안을 기준으로 표준화될 가능성 높음.",
            "개발도상국에 대한 AI 기술 지원이 글로벌 평화와 안정의 새로운 변수로 작용."
        ],
        url: "https://reuters.com"
    }
];

// App Controller
class AINewsApp {
    constructor() {
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

        this.setupTheme();
        this.renderNewsList();
        this.setupEventListeners();
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
        newsData.forEach(news => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <div class="news-card-image" style="background-image: url('${news.image}')"></div>
                <div class="news-card-content">
                    <span class="news-card-tag">${news.tag}</span>
                    <h3>${news.title}</h3>
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
            <h1 class="detail-title">${news.title}</h1>
            <div class="detail-meta">
                <span>출처: ${news.source}</span>
                <span>게시일: ${news.date}</span>
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

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new AINewsApp();
});
