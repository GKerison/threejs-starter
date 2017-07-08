//创建场景
var scene = new THREE.Scene();
//创建相机
var aspect = window.innerWidth / window.innerHeight;

// var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 10);
camera.rotation.z = Math.PI/4;

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

//创建物体
var geometry = new THREE.BoxGeometry(1, 1, 1);
//创建材质
var material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
//组合实物
var cube = new THREE.Mesh(geometry, material);
//添加到场景
scene.add(cube);
//设置相机Z轴距离
camera.position.z = 5;

/**
 * ----------------end start --------------------
 */

//开始循环渲染
var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};
render();