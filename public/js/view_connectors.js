// const { ipcRenderer } = require("electron");

let app;
const TYPE = new ConnType()
window.onload = function () {
    ipcSetting()
    app = new Vue({
        el: "#app",
        data: {
            groups: [],
            newGroupName: "",
            selectGroupIndex: -1
        },
        computed: {
            selectGroupName() {
                if (this.selectGroupIndex == -1) {
                    return "No Select Group"
                } else {
                    return this.groups[selectGroupIndex].name
                }
            },
            groupsName() {
                let arr = [];
                for (let i = 0; i < this.groups.length; ++i) {
                    arr.push(this.groups[i].name)
                }
                return arr
            }
        },
        methods: {
            addGroup() {
                ipcRenderer.send('conn', { type: TYPE.ADDGROUP, data: { groupName: this.newGroupName } })
            },
            sendAddMember(index) {
                ipcRenderer.send('conn', { type: TYPE.ADDMEMBER, data: { groupName: this.groups[index].name, memberName: this.groups[index].newmemberName, ip: this.groups[index].newip } })
            }
        },
        mounted() {
            ipcRenderer.send('conn_data', { type: TYPE.GETALLGROUP, data: null })
        }
    })
}
function ipcSetting() {
    ipcRenderer.on('conn_data', (e, data) => {
        console.log(data)
        if (data.type == TYPE.GETALLGROUP) {
            app.groups = data.data
        }
    })
    ipcRenderer.on('conn', (e, data) => {
        console.log(data)
        if (data.type == TYPE.ADDGROUP) {
            console.log("ADD GROUP ", data.data)
            app.groups.push(data.data)
        } else if (data.type == TYPE.DELETEGROUP) {
            console.log("DELETE GROUP ", data.data)
        } else if (data.type == TYPE.ADDMEMBER) {
            console.log("ADD MEMBER ", data.data)
        } else if (data.type == TYPE.DELETEMEMBER) {
            console.log("DELETE MEMBER ", data.data)
        } else {
            console.log(data)
        }
        ipcRenderer.send('conn_data', { type: TYPE.GETALLGROUP, data: null })
    })
}