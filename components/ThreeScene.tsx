import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window !== "undefined" && containerRef.current) {
			// Init Scene here
			containerRef.current.style.width = "100%";
			containerRef.current.style.height = "500px";

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				1000
			);
			const renderer = new THREE.WebGLRenderer();

			renderer.setSize(window.innerWidth, window.innerHeight);
			containerRef.current?.appendChild(renderer.domElement);
			camera.position.z = 5;

			const geometry = new THREE.SphereGeometry();
			const material = new THREE.MeshBasicMaterial({ color: 0x104c77 });
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			const light = new THREE.PointLight(0xffffff, 1, 100);
			light.position.set(10, 10, 10);
			scene.add(light);

			// renderer.render(scene, camera);

			const renderScene = () => {
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				renderer.render(scene, camera);
				requestAnimationFrame(renderScene);
			};

			renderScene();

			// return () => {
			// 	scene.remove(cube);
			// 	renderer.dispose();
			// };
		}
	}, []);

	return <div ref={containerRef} />;
};

export default ThreeScene;
