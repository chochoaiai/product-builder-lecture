class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .lotto-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    padding: 20px;
                }
                .lotto-ball {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: white;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    border: none;
                    background-color: #4CAF50;
                    color: white;
                }
            </style>
            <div class="lotto-container"></div>
            <button>Generate Numbers</button>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const lottoContainer = this.shadowRoot.querySelector('.lotto-container');
        lottoContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        for (const number of Array.from(numbers).sort((a, b) => a - b)) {
            const lottoBall = document.createElement('div');
            lottoBall.classList.add('lotto-ball');
            lottoBall.textContent = number;
            lottoBall.style.backgroundColor = this.getColor(number);
            lottoContainer.appendChild(lottoBall);
        }
    }

    getColor(number) {
        if (number <= 10) return '#fbc400';
        if (number <= 20) return '#69c8f2';
        if (number <= 30) return '#ff7272';
        if (number <= 40) return '#aaa';
        return '#b0d840';
    }
}

customElements.define('lotto-generator', LottoGenerator);