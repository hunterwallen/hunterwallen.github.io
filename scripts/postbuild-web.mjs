#!/usr/bin/env node
import { mkdirSync, readdirSync, renameSync, copyFileSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')

if (!existsSync(distDir)) {
	console.error(`dist directory not found at ${distDir}. Did you run "expo export --platform web"?`)
	process.exit(1)
}

const SKIP_FILES = new Set(['index.html', '+not-found.html', '_sitemap.html', '404.html'])

const folderified = []
for (const entry of readdirSync(distDir, { withFileTypes: true })) {
	if (!entry.isFile() || !entry.name.endsWith('.html')) continue
	if (SKIP_FILES.has(entry.name)) continue
	const routeName = entry.name.slice(0, -'.html'.length)
	const targetDir = join(distDir, routeName)
	mkdirSync(targetDir, { recursive: true })
	renameSync(join(distDir, entry.name), join(targetDir, 'index.html'))
	folderified.push(`${entry.name} → ${routeName}/index.html`)
}

const indexPath = join(distDir, 'index.html')
const notFoundPath = join(distDir, '404.html')
if (existsSync(indexPath)) {
	copyFileSync(indexPath, notFoundPath)
}

console.log('postbuild-web complete')
if (folderified.length > 0) {
	console.log('  folderified routes:')
	for (const line of folderified) console.log(`    - ${line}`)
}
console.log(`  wrote SPA fallback at 404.html (copy of index.html)`)
