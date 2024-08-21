import Stats from 'three/examples/jsm/libs/stats.module'
import { onMounted, watch } from 'vue'

export const useStats = (root) => {
	const stats = new Stats()

	watch(root, (v) => {
		if (v) {
			stats.domElement.style.position = 'absolute'
			v.appendChild(stats.domElement)
		}
	})
	return { stats }
}
