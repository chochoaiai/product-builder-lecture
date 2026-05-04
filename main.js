// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeBtn.innerHTML = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .lotto-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 12px;
                    padding: 30px 0;
                    min-height: 80px;
                }
                .lotto-ball {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    font-weight: 800;
                    color: white;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                @keyframes popIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                button {
                    padding: 12px 28px;
                    font-size: 18px;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 30px;
                    border: none;
                    background: linear-gradient(135deg, #6e8efb, #a777e3);
                    color: white;
                    box-shadow: 0 4px 15px rgba(110, 142, 251, 0.4);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(110, 142, 251, 0.6);
                }
                button:active {
                    transform: translateY(0);
                }
            </style>
            <div class="lotto-container"></div>
            <button id="generate">Generate Numbers</button>
        `;

        this.shadowRoot.querySelector('#generate').addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const lottoContainer = this.shadowRoot.querySelector('.lotto-container');
        lottoContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const lottoBall = document.createElement('div');
                lottoBall.classList.add('lotto-ball');
                lottoBall.textContent = number;
                lottoBall.style.backgroundColor = this.getColor(number);
                lottoContainer.appendChild(lottoBall);
            }, index * 100);
        });
    }

    getColor(number) {
        if (number <= 10) return '#ffcc00'; // Yellow
        if (number <= 20) return '#3399ff'; // Blue
        if (number <= 30) return '#ff3333'; // Red
        if (number <= 40) return '#999999'; // Gray
        return '#33cc33'; // Green
    }
}

customElements.define('lotto-generator', LottoGenerator);