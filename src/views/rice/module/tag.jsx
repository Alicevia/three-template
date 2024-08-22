// import { Tag } from '@arco-design/web-vue'
// import '@arco-design/web-vue/lib/tag/style/css'
import { createApp, h } from 'vue'
import { createCSS2DObject } from '../../../utils'
export const createTag = (name) => {
	const { container, css2Obj } = createCSS2DObject()
	const app = createApp(
		<a-tag color='#165dff40' style={{ border: '1px solid #165dff80' }}>
			{name}
		</a-tag>
	)
	app.mount(container)
	return css2Obj
}
