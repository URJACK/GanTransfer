const { remote } = window.Myrequire('electron')
const fs = window.Myrequire('fs')

function getProcessInfo() {
    console.log("Cpu ", process.getCPUUsage())
    console.log("Memory ", process.getProcessMemoryInfo())
    console.log("env ", process.env)
    console.log("arch ", process.arch)
    console.log("platform ", process.platform)
    changeView('receiver_sender')
}
