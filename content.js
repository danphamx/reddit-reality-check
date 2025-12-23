(function() {
    if (document.getElementById('reality-check-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'reality-check-wrapper';
    
    // Ensure the wrapper itself doesn't take up space in the layout
    Object.assign(wrapper.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '2147483647'
    });

    const shadow = wrapper.attachShadow({mode: 'closed'});
    const imgUrl = chrome.runtime.getURL("dontcare.jpg");

    shadow.innerHTML = `
        <style>
            :host {
                all: initial; /* Reset everything */
            }
            .overlay {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-color: #0a0a0a;
                color: #ffffff;
                display: flex;
                flex-direction: column;
                justify-content: center; /* Vertical center */
                align-items: center;     /* Horizontal center */
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                text-align: center;
                box-sizing: border-box;
            }
            .container {
                max-width: 650px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
            }
            img {
                width: 320px;
                height: auto;
                border-radius: 8px;
                margin-bottom: 50px;
                box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            }
            h1 {
                font-size: 3.5rem;
                font-weight: 800;
                margin: 0 0 20px 0;
                letter-spacing: -0.04em;
                line-height: 1.1;
            }
            p {
                font-size: 1.4rem;
                line-height: 1.6;
                margin: 0 0 50px 0;
                color: #a0a0a0;
                font-weight: 400;
            }
            button {
                background-color: #ffffff;
                color: #000000;
                border: none;
                padding: 18px 50px;
                font-size: 1rem;
                cursor: pointer;
                border-radius: 50px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                transition: transform 0.2s ease, background-color 0.2s ease;
            }
            button:hover {
                transform: scale(1.05);
                background-color: #f0f0f0;
            }
        </style>
        <div class="overlay">
            <div class="container">
                <img src="${imgUrl}" alt="Reality Check">
                <h1>Hey there.</h1>
                <p>
                    Did you know that Reddit is mostly bullshit and a waste of time? 
                    Instead: {{INSERT GOALS HERE}} 🐢
                </p>
                <button id="proceed-btn">Proceed to Reddit</button>
            </div>
        </div>
    `;

    document.documentElement.appendChild(wrapper);

    shadow.getElementById('proceed-btn').onclick = () => wrapper.remove();
})();