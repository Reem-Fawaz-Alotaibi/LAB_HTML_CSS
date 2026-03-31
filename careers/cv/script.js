const codeLines = [
    "const developer = 'Reem';",
    "function buildPortfolio() {",
    "  console.log('Loading assets...');",
    "  if (skills.includes('Full Stack')) {",
    "    renderMagic();",
    "  }",
    "}",
    "buildPortfolio();",
    "// UI/UX Design mode: active",
    "system.status('Optimized');",
    "fetching data from server...",
    "Done! Welcome to my world."
];

const terminal = document.getElementById('code-terminal');
let lineIndex = 0;

function typeCode() {
    if (lineIndex < codeLines.length) {
        let line = document.createElement('div');
        line.textContent = "> " + codeLines[lineIndex];
        terminal.appendChild(line);

        lineIndex++;

        terminal.scrollTop = terminal.scrollHeight;

        setTimeout(typeCode, 600);
    } else {
        setTimeout(() => {
            terminal.innerHTML = "";
            lineIndex = 0;
            typeCode();
        }, 3000);
    }
}

window.onload = typeCode;