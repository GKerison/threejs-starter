//创建场景
var scene = new THREE.Scene();
//创建相机
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//创建渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document
    .body
    .appendChild(renderer.domElement);

//创建物体
var geometry = new THREE.BoxGeometry(1, 1, 1);
//创建材质
var material = new THREE.MeshNormalMaterial();
//组合实物
var cube = new THREE.Mesh(geometry, material);
//添加到场景
scene.add(cube);
//设置相机Z轴距离
camera.position.z = 5;

//开始循环渲染
var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
};
render();