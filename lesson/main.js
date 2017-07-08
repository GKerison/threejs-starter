//创建场景
var scene = new THREE.Scene();
//创建相机
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//创建渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//添渲染器到dom上
document
    .body
    .appendChild(renderer.domElement);
/**
 * ----------------link start --------------------
 */

//TOOD add something

/**
 * ----------------end start --------------------
 */
//开始循环渲染
var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
render();