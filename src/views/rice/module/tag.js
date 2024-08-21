import { CSS2DObject } from 'three/examples/jsm/Addons.js'
import { Tag } from '@arco-design/web-vue'

import { createApp, h } from 'vue'
export const createTag = (name) => {
	const tagContainer = document.createElement('div')
	tagContainer.style.pointerEvents = 'none'
	const app = createApp(
		h(
			Tag,
			{ color: '#165dff40', style: { border: '1px solid #165dff80' } },
			() => name
		)
	)
	app.mount(tagContainer)

	const label = new CSS2DObject(tagContainer)
	return label
}
