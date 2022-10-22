const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, 'pages')

console.log('Fixing canonical links')

fs.readdirSync(pagesDir).forEach(file => {
  if (file.startsWith('_')) {
    return
  }

  const newPath = path.join(__dirname, 'dist', file.replace('tsx', 'html'))

  const newContent = fs.readFileSync(newPath, 'utf-8').replace(
    /<link rel="canonical" href="(.)*?"\/>/g,
    function (match) {
      return match.replace('/>', '>')
    }
  )

  fs.writeFileSync(newPath, newContent)
})

console.log('[DONE] Fixing canonical links')
