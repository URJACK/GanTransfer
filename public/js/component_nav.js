window.Myrequire = window.require;//(如果需要)
delete window.require;
delete window.exports;
delete window.module;
//引入子通信进程
const { ipcRenderer } = window.Myrequire('electron')
function changeView(viewName) {
    console.log("nav ", viewName)
    ipcRenderer.send("view", viewName)
}
//加密类型表
const encryList = ['无加密方式', 'InfoGAN加密', '正交GAN加密']