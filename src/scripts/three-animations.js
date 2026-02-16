import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';

const greenColor = 0x10b981;

// Service 1: Website Audit - Scanning Torus Knot
const canvas1 = document.getElementById('three-canvas-1');
if (canvas1) {
	const scene1 = new THREE.Scene();
	const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1, alpha: true, antialias: true });
	renderer1.setSize(400, 400);
	renderer1.setPixelRatio(window.devicePixelRatio);
	camera1.position.z = 5;

	const geometry1 = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
	const material1 = new THREE.MeshBasicMaterial({ color: greenColor, wireframe: true });
	const torusKnot = new THREE.Mesh(geometry1, material1);
	scene1.add(torusKnot);

	function animate1() {
		requestAnimationFrame(animate1);
		torusKnot.rotation.x += 0.01;
		torusKnot.rotation.y += 0.01;
		renderer1.render(scene1, camera1);
	}
	animate1();
}

// Service 2: Performance - Speed Particles
const canvas2 = document.getElementById('three-canvas-2');
if (canvas2) {
	const scene2 = new THREE.Scene();
	const camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2, alpha: true, antialias: true });
	renderer2.setSize(400, 400);
	renderer2.setPixelRatio(window.devicePixelRatio);
	camera2.position.z = 5;

	const particles = new THREE.BufferGeometry();
	const particleCount = 1000;
	const positions = new Float32Array(particleCount * 3);

	for (let i = 0; i < particleCount * 3; i += 3) {
		positions[i] = (Math.random() - 0.5) * 10;
		positions[i + 1] = (Math.random() - 0.5) * 10;
		positions[i + 2] = (Math.random() - 0.5) * 10;
	}

	particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
	const particleMaterial = new THREE.PointsMaterial({ color: greenColor, size: 0.05 });
	const particleSystem = new THREE.Points(particles, particleMaterial);
	scene2.add(particleSystem);

	function animate2() {
		requestAnimationFrame(animate2);
		particleSystem.rotation.y += 0.002;
		const positions = particleSystem.geometry.attributes.position.array;
		for (let i = 0; i < positions.length; i += 3) {
			positions[i] += 0.01;
			if (positions[i] > 5) positions[i] = -5;
		}
		particleSystem.geometry.attributes.position.needsUpdate = true;
		renderer2.render(scene2, camera2);
	}
	animate2();
}

// Service 3: Web Development - Floating Cubes
const canvas3 = document.getElementById('three-canvas-3');
if (canvas3) {
	const scene3 = new THREE.Scene();
	const camera3 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3, alpha: true, antialias: true });
	renderer3.setSize(400, 400);
	renderer3.setPixelRatio(window.devicePixelRatio);
	camera3.position.z = 8;

	const cubes = [];
	for (let i = 0; i < 5; i++) {
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({
			color: greenColor,
			wireframe: true
		});
		const cube = new THREE.Mesh(geometry, material);
		cube.position.x = (Math.random() - 0.5) * 6;
		cube.position.y = (Math.random() - 0.5) * 6;
		cube.position.z = (Math.random() - 0.5) * 6;
		cubes.push(cube);
		scene3.add(cube);
	}

	function animate3() {
		requestAnimationFrame(animate3);
		cubes.forEach((cube, i) => {
			cube.rotation.x += 0.01 * (i + 1);
			cube.rotation.y += 0.01 * (i + 1);
		});
		renderer3.render(scene3, camera3);
	}
	animate3();
}

// Service 4: WordPress - Rotating Octahedron
const canvas4 = document.getElementById('three-canvas-4');
if (canvas4) {
	const scene4 = new THREE.Scene();
	const camera4 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4, alpha: true, antialias: true });
	renderer4.setSize(400, 400);
	renderer4.setPixelRatio(window.devicePixelRatio);
	camera4.position.z = 5;

	const geometry4 = new THREE.OctahedronGeometry(2, 0);
	const material4 = new THREE.MeshBasicMaterial({
		color: greenColor,
		wireframe: true
	});
	const octahedron = new THREE.Mesh(geometry4, material4);
	scene4.add(octahedron);

	function animate4() {
		requestAnimationFrame(animate4);
		octahedron.rotation.x += 0.005;
		octahedron.rotation.y += 0.01;
		renderer4.render(scene4, camera4);
	}
	animate4();
}

// Service 5: Backend/CMS - Connected Network
const canvas5 = document.getElementById('three-canvas-5');
if (canvas5) {
	const scene5 = new THREE.Scene();
	const camera5 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer5 = new THREE.WebGLRenderer({ canvas: canvas5, alpha: true, antialias: true });
	renderer5.setSize(400, 400);
	renderer5.setPixelRatio(window.devicePixelRatio);
	camera5.position.z = 8;

	const spheres = [];
	const sphereCount = 6;

	for (let i = 0; i < sphereCount; i++) {
		const geometry = new THREE.SphereGeometry(0.3, 16, 16);
		const material = new THREE.MeshBasicMaterial({ color: greenColor, wireframe: true });
		const sphere = new THREE.Mesh(geometry, material);

		const angle = (i / sphereCount) * Math.PI * 2;
		sphere.position.x = Math.cos(angle) * 3;
		sphere.position.y = Math.sin(angle) * 3;

		spheres.push(sphere);
		scene5.add(sphere);
	}

	const lineMaterial = new THREE.LineBasicMaterial({ color: greenColor, opacity: 0.3, transparent: true });
	const lines = [];
	for (let i = 0; i < spheres.length; i++) {
		for (let j = i + 1; j < spheres.length; j++) {
			const points = [spheres[i].position.clone(), spheres[j].position.clone()];
			const geometry = new THREE.BufferGeometry().setFromPoints(points);
			const line = new THREE.Line(geometry, lineMaterial);
			lines.push({ line, i, j });
			scene5.add(line);
		}
	}

	function animate5() {
		requestAnimationFrame(animate5);
		spheres.forEach((sphere, i) => {
			const angle = (i / sphereCount) * Math.PI * 2 + Date.now() * 0.0005;
			sphere.position.x = Math.cos(angle) * 3;
			sphere.position.y = Math.sin(angle) * 3;
		});

		lines.forEach(({ line, i, j }) => {
			const points = [spheres[i].position, spheres[j].position];
			line.geometry.setFromPoints(points);
		});

		renderer5.render(scene5, camera5);
	}
	animate5();
}

// Service 6: Consulting - Icosahedron
const canvas6 = document.getElementById('three-canvas-6');
if (canvas6) {
	const scene6 = new THREE.Scene();
	const camera6 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	const renderer6 = new THREE.WebGLRenderer({ canvas: canvas6, alpha: true, antialias: true });
	renderer6.setSize(400, 400);
	renderer6.setPixelRatio(window.devicePixelRatio);
	camera6.position.z = 5;

	const geometry6 = new THREE.IcosahedronGeometry(2, 0);
	const material6 = new THREE.MeshBasicMaterial({
		color: greenColor,
		wireframe: true
	});
	const icosahedron = new THREE.Mesh(geometry6, material6);
	scene6.add(icosahedron);

	function animate6() {
		requestAnimationFrame(animate6);
		icosahedron.rotation.x += 0.008;
		icosahedron.rotation.y += 0.012;
		renderer6.render(scene6, camera6);
	}
	animate6();
}
