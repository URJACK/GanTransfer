import { app, BrowserWindow, globalShortcut } from 'electron'
import * as beforeStart from './modules/beforeStart'
import * as  storageManager from './modules/storageManager'
import { IpcServiceRouter } from './modules/ipcServiceRouter'
//声明主窗口
let mainWindow: BrowserWindow;
//声明渲染进程通讯处理器
let ipcServiceRouter: IpcServiceRouter;
function createWindow() {
    //创建主窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true
        }
    })
    //创建渲染进程通讯处理器
    ipcServiceRouter = new IpcServiceRouter(mainWindow)
    mainWindow.webContents.on('did-finish-load', () => {
        console.log("did finish load")
    })
    mainWindow.webContents.on('dom-ready', () => {
        //比 did finish load 更快
        console.log("doc ready")
    })
    mainWindow.loadFile(storageManager.getViewPath(0))
}
//程序第一次启动
app.on('ready', () => {
    console.log("Ready to Create Window")
    createWindow()
    //注册左右切换使用的快捷键
    globalShortcut.register('CommandOrControl+E', () => {
        mainWindow.loadFile(storageManager.getRightPath())
    })
    globalShortcut.register('CommandOrControl+Q', () => {
        mainWindow.loadFile(storageManager.getLeftPath())
    })
})

beforeStart.endProcess(app, globalShortcut)