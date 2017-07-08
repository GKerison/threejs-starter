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

/**
 * 创建一个Box
 */
function createBox(size) {
    //创建物体
    var geometry = new THREE.BoxGeometry(size, size, size);
    //创建材质
    var material = new THREE.MeshNormalMaterial();
    //组合实物
    var box = new THREE.Mesh(geometry, material);
    return box;
}

function updateFrame(group) {
    group && group
        .children
        .forEach(function (box) {
            box.rotation.x += 0.01;
            box.rotation.y += 0.01;
        }, this);
}

//创建组
var group = new THREE.Group();
scene.add(group);

for (var i = 1; i <= 3; i++) {
    var box = createBox(i);
    box.position.x += 10 * (i - 2);
    box.position.y += 10 * (i - 2);
    group.add(box)
}

var box1 = group.children[0];
console.log(box1);
// box1.visible = false; group.remove(box1) //移除
console.log(group.children); // [boxs]
console.log(group.parent); // scene

//添加到场景
scene.add(group);

//设置相机Z轴距离
camera.position.z = 30;

/**
 * ----------------end start --------------------
 */

//开始循环渲染
var render = function () {
    requestAnimationFrame(render);
    updateFrame(group);
    renderer.render(scene, camera);
};
render();