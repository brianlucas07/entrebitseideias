import fs from 'node:fs'
import path from 'node:path'

const postsDir = path.resolve('posts')
const outputFile = path.resolve('posts.json')

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true })
}

const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'))

const posts = files.map((file) => {
  const slug = file.replace(/\.md$/, '')
  const content = fs.readFileSync(path.join(postsDir, file), 'utf-8')

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const meta = {}

  if (match) {
    match[1].split('\n').forEach((line) => {
      const [key, ...values] = line.split(':')
      if (key && values.length) {
        meta[key.trim()] = values.join(':').trim()
      }
    })
  }

  return {
    slug,
    title: meta.title || slug,
    date: meta.date || '',
    description: meta.description || '',
    file: `posts/${file}`,
  }
})

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2))
console.log(`[build-posts] ${posts.length} artigo(s) indexado(s) em posts.json`)
