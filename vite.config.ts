import { defineConfig } from 'vite'
import path from 'path'
import solid from 'vite-plugin-solid'
import pkg from './package.json' assert { type: 'json' }
const { name, version } = pkg
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es'],
			name,
		},
		outDir: './lib'
	},
	define: {
		pkgJson: { name, version },
	},
	plugins: [solid()],
})
