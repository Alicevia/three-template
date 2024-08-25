import * as THREE from 'three'
import { createTag } from './tag'
export const createFlame = (name) => {
	const w = 30
	const h = 1.6 * w
	const geometry = new THREE.PlaneGeometry(w, h)

	geometry.translate(0, h / 2, 0)

	const textureLoader = new THREE.TextureLoader()
	const texture = textureLoader.load('/src/assets/火焰.png')

	const num = 15
	texture.repeat.set(1 / num, 1)
	const material = new THREE.MeshBasicMaterial({
		map: texture,
		opacity: 0.5,
		depthWrite: false,
		side: THREE.DoubleSide,
		transparent: true,
	})

	const flame = new THREE.Group()
	const mesh = new THREE.Mesh(geometry, material)

	flame.add(
		mesh,
		mesh.clone().rotateY(Math.PI / 4),
		mesh.clone().rotateY((Math.PI / 4) * 2),
		mesh.clone().rotateY((Math.PI / 4) * 3)
	)
	let t = 0
	let timer
	const loop = () => {
		t += 0.1
		if (t > num) t = 0
		texture.offset.x = Math.floor(t) / num
		timer = requestAnimationFrame(loop)
	}
	loop()
	flame.stop = () => {
		cancelAnimationFrame(timer)
		flame.clear()
	}

	flame.name = name + '_fire'
	const fireTag = createTag(name + '着火啦！！！')
	fireTag.position.y += 40
	flame.add(fireTag)
	return flame
}
