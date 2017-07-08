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

function updateFrame(mesh) {
    //左移1个单位
    mesh.position.x = -1;
    //上移1个单位
    mesh.position.y = 1;

    //X方向缩小一半，Y方向不变，Z方向放大2倍
    mesh
        .scale
        .set(0.5, 1, 2);

    //绕Y轴旋转45度
    mesh.rotation.y = Math.PI / 4;
    //绕X轴旋转45度
    mesh.rotation.x = THREE
        .Math
        .degToRad(45);
}

/**
 * 圆形变化（类时钟）
 */
var x = 0;
var step = 2 * Math.PI / 360;
function updateClock(mesh) {
    mesh.position.x = Math.cos(x);
    mesh.position.y = Math.sin(x);
    x = (x + step) % (2 * Math.PI);
}

//创建物体
var geometry = new THREE.BoxGeometry(1, 1, 1);
//创建材质
var material = new THREE.MeshNormalMaterial();
//组合实物
var mesh = new THREE.Mesh(geometry, material);
//添加到场景
scene.add(mesh);
//设置相机Z轴距离
camera.position.z = 5;

/**
 * ----------------end start --------------------
 */
//开始循环渲染
var render = function () {
    requestAnimationFrame(render);
    // updateFrame(mesh);
    updateClock(mesh);
    renderer.render(scene, camera);
};
render();