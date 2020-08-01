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
exports.IpcServiceRouter = void 0;
var electron_1 = require("electron");
var storageManager = __importStar(require("./storageManager"));
var transfer_1 = require("./transfer");
var transferHandler = new transfer_1.TransferHandler();
var IpcServiceRouter = /** @class */ (function () {
    function IpcServiceRouter(mainWindow) {
        this.mainWindow = mainWindow;
        //监听渲染进程的页面跳转请求
        electron_1.ipcMain.on('view', function (e, args) {
            mainWindow.loadFile(storageManager.getViewPath(args));
        });
        electron_1.ipcMain.on('conn', function (e, args) {
            var type = args.type;
            var packet = { type: type, data: args.data };
            packet = transferHandler.dataOperate(packet);
            console.log(packet);
            e.reply('conn', packet);
        });
        electron_1.ipcMain.on('conn_data', function (e, args) {
            var type = args.type;
            var packet = { type: type, data: args.data };
            packet = transferHandler.dataGet(packet);
            console.log(packet);
            console.log(packet.data);
            e.reply('conn_data', packet);
        });
    }
    return IpcServiceRouter;
}());
exports.IpcServiceRouter = IpcServiceRouter;
