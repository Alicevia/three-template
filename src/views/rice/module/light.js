import * as THREE from 'three'

const ambient = new THREE.AmbientLight(0xffffff, 0.6)

const directionalLight = new THREE.Group()
const dl1 = new THREE.DirectionalLight(0xffffff, 1)
dl1.position.set(400, 200, 300)
const dl2 = new THREE.DirectionalLight(0xffffff, 1)
dl2.position.set(-400, -200, -300)
directionalLight.add(dl1, dl2)
export { ambient, directionalLight }
