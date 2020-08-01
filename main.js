"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var beforeStart = __importStar(require("./modules/beforeStart"));
var storageManager = __importStar(require("./modules/storageManager"));
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true
        }
    });
    mainWindow.webContents.on('did-finish-load', function () {
        console.log("did finish load");
    });
    mainWindow.webContents.on('dom-ready', function () {
        //比 did finish load 更快
        console.log("doc ready");
    });
    mainWindow.loadFile(storageManager.getViewPath(0));
}
//程序第一次启动
electron_1.app.on('ready', function () {
    console.log("Ready to Create Window");
    createWindow();
    //注册左右切换使用的快捷键
    electron_1.globalShortcut.register('CommandOrControl+E', function () {
        mainWindow.loadFile(storageManager.getRightPath());
    });
    electron_1.globalShortcut.register('CommandOrControl+Q', function () {
        mainWindow.loadFile(storageManager.getLeftPath());
    });
});
//监听渲染进程的页面跳转请求
electron_1.ipcMain.on('view', function (e, args) {
    mainWindow.loadFile(storageManager.getViewPath(args));
});
beforeStart.endProcess(electron_1.app, electron_1.globalShortcut);
