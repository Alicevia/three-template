import { createApp, toRef } from 'vue'
import { createCSS2DObject } from '../../../utils'
import { toReactive } from '@vueuse/core'
export const createCard = (a) => {
	const { container, css2Obj } = createCSS2DObject()
	const data = toRef(a)
	const app = createApp(() => {
		if (!data.value) return '暂无数据'
		const { grain, grainHeight, weight, granaryName, temperature } = data.value
		return (
			<a-card title={granaryName} class='w-[200px]' extra={temperature}>
				<div>
					<a-space size={30} align='center'>
						<a-avatar>S</a-avatar>
						<a-statistic
							animation
							title={grain}
							value={weight}
							show-group-separator
						/>
					</a-space>
				</div>
			</a-card>
		)
	})
	app.mount(container)

	return css2Obj
}
