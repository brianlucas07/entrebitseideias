"use strict";
const config = {
    title: 'Entre Bits e Ideias',
    ready: true,
};
const statusEl = document.querySelector('#status');
if (statusEl) {
    statusEl.textContent = `${config.title} está pronto com TypeScript!`;
}
console.log(`[${config.title}] TypeScript iniciado com sucesso.`);
