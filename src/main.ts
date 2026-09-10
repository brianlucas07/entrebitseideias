
interface AppConfig {
  title: string
  ready: boolean
}

const config: AppConfig = {
  title: 'Entre Bits e Ideias',
  ready: true,
}

const statusEl = document.querySelector<HTMLParagraphElement>('#status')
if (statusEl) {
  statusEl.textContent = `${config.title} está pronto com TypeScript!`
}

console.log(`[${config.title}] TypeScript iniciado com sucesso.`)

