const { globalShortcut } = require("electron")

module.exports.endProcess = function (app, globalShortcut) {
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

    app.on('activate', () => {
        // 在macOS上，当单击dock图标并且没有其他窗口打开时，
        // 通常在应用程序中重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    // 您可以把应用程序其他的流程写在在此文件中
    // 代码 也可以拆分成几个文件，然后用 require 导入。
}