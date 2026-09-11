declare const marked: { parse: (markdown: string) => string }

interface Post {
  slug: string
  title: string
  date: string
  description: string
  file: string
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement
  const toggle = document.querySelector('#theme-toggle')

  const theme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  root.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)

  toggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  })

  const container = document.querySelector('#posts') as HTMLElement
  if (!container) return

  let allPosts: Post[] = []

  function renderList() {
    container.className = 'posts-grid'
    container.innerHTML = allPosts.map((p) => `
      <a href="#${p.slug}" class="post-card">
        <h2>${p.title}</h2>
        <time>${p.date}</time>
        <p>${p.description}</p>
      </a>
    `).join('')
  }

  function openPost(slug: string) {
    const post = allPosts.find((p) => p.slug === slug)
    if (!post) return renderList()

    fetch(`${post.file}?v=1.0.0`)
      .then((res) => res.text())
      .then((markdown) => {
        const cleanContent = markdown.replace(/^---[\s\S]*?---\r?\n/, '')
        const html = marked.parse(cleanContent)

        container.className = 'post-view'
        container.innerHTML = `
          <a href="#" class="back-btn">← Voltar</a>
          <article class="post-content">
            ${html}
          </article>
        `
      })
      .catch(() => {
        container.innerHTML = `
          <a href="#" class="back-btn">← Voltar</a>
          <p>Erro ao carregar o artigo.</p>
        `
      })
  }

  function handleRoute() {
    const slug = window.location.hash.replace(/^#/, '')
    if (slug) {
      openPost(slug)
    } else {
      renderList()
    }
  }

  fetch('./posts.json?v=1.0.0')
    .then((res) => res.json())
    .then((posts) => {
      allPosts = posts
      handleRoute()
      window.addEventListener('hashchange', handleRoute)
    })
    .catch((err) => {
      console.error('Erro ao carregar posts.json:', err)
    })
})
