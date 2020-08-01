import { BrowserWindow, ipcMain } from 'electron'
import * as  storageManager from './storageManager'
import { TransferType, TransferPacket, TransferHandler } from './transfer'
let transferHandler: TransferHandler = new TransferHandler();

class IpcServiceRouter {
    mainWindow: BrowserWindow;
    constructor(mainWindow: BrowserWindow) {
        this.mainWindow = mainWindow
        //监听渲染进程的页面跳转请求
        ipcMain.on('view', (e, args) => {
            mainWindow.loadFile(storageManager.getViewPath(args))
        })
        ipcMain.on('conn', (e, args) => {
            let type: TransferType = args.type
            let packet: TransferPacket = { type: type, data: args.data };
            packet = transferHandler.dataOperate(packet);
            console.log(packet)
            e.reply('conn', packet)
        })
        ipcMain.on('conn_data', (e, args) => {
            let type: TransferType = args.type
            let packet: TransferPacket = { type: type, data: args.data }
            packet = transferHandler.dataGet(packet)
            console.log(packet)
            console.log(packet.data)
            e.reply('conn_data', packet)
        })
    }
}
export { IpcServiceRouter }