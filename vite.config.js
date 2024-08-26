import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import VueRouter from 'unplugin-vue-router/vite'
export default defineConfig({
	plugins: [
		VueRouter({
			routesFolder: 'src/views',
			exclude: ['**/components/**/*.(vue|jsx)', '**/module/**/*'],
			extensions: ['.vue', '.jsx'],
			// getRouteName(node) {
			// 	console.log(node.value.rawSegment)
			// 	return node.value.rawSegment
			// },
		}),

		vue(),
		vueJsx(),
		vitePluginForArco(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
