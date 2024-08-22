import { createApp } from 'vue'
import { createCSS2DObject } from '../../../utils'

export const createCard = () => {
	const { container, css2Obj } = createCSS2DObject()

	const app = createApp(
		<Card title='arco'>
			ByteDance's core product, Toutiao ("Headlines"), is a content platform in
			China and around the world. Toutiao started out as a news recommendation
			engine and gradually evolved into a platform delivering content in various
			formats.
		</Card>
	)
	app.mount(container)

	return css2Obj
}
