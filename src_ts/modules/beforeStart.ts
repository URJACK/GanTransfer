import { App, GlobalShortcut } from "electron"

export const endProcess = function (app: App, globalShortcut: GlobalShortcut) {
    //当所有窗口都被关闭后退出
    app.on('window-all-closed', () => {
        console.log("window all closed~")
        globalShortcut.unregisterAll()
        // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
        // 否则绝大部分应用及其菜单栏会保持激活。
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
}