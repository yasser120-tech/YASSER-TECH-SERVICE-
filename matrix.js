// matrix.js - effect ya hacker background
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

const cols = Math.floor(W / 14) + 1;
const ypos = Array(cols).fill(0);

function matrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "#00ff9c";
    ctx.font = "14px monospace";

    ypos.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = index * 14;

        ctx.fillText(text, x, y);

        if (y > H + Math.random() * 1000) {
            ypos[index] = 0;
        } else {
            ypos[index] = y + 18;
        }
    });

    requestAnimationFrame(matrix);
}

matrix();

window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
});
