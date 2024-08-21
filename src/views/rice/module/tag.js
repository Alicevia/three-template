import { CSS2DObject } from 'three/examples/jsm/Addons.js'
import { Tag } from '@arco-design/web-vue'

import { createApp, h } from 'vue'
import { createCSS2DObject } from '../../../utils'
export const createTag = (name) => {
	const { container, css2Obj } = createCSS2DObject()
	const app = createApp(
		h(
			Tag,
			{ color: '#165dff40', style: { border: '1px solid #165dff80' } },
			() => name
		)
	)
	app.mount(container)
	return css2Obj
}
