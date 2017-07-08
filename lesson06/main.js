//创建场景
var scene = new THREE.Scene();
//创建相机
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//创建控制器
var controls = new THREE.OrbitControls( camera );

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

var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
;
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 100;

/**
 * ----------------end start --------------------
 */
//开始循环渲染
var render = function () {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
};
render();