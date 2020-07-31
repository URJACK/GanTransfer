const electron = require('electron');
const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const beforeStart = require('./modules/beforeStart')
const storageManager = require('./modules/storageManager')
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true
        }
    })
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
//监听渲染进程的页面跳转请求
ipcMain.on('view', (e, args) => {
    mainWindow.loadFile(storageManager.getViewPath(args))
})

beforeStart.endProcess(app, globalShortcut)