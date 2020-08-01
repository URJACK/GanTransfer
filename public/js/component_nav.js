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
class ConnType{
    constructor(){
        this.ADDGROUP = 1;
        this.DELETEGROUP = 2;
        this.ADDMEMBER = 3;
        this.DELETEMEMBER = 4;
        this.GETALLGROUP = 5;
        this.GETGROUP = 6;
        this.GETMEMBER = 7;
    }
}
connType = new ConnType()