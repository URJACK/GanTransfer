let app;
window.onload = function () {
    app = new Vue({
        el: "#app",
        data: {
            //监听端口号
            listenPort: 6012,
            //接收方加密
            recvEncryType: 0,
            //发送方加密
            sendEncryType: 0,
            encryList: encryList
        },
        computed: {
            recvEncryText() {
                return this.encryList[this.recvEncryType]
            },
            sendEncryText() {
                return this.encryList[this.sendEncryType]
            }
        },
        methods: {
            //isRecv为true，代表更改接受端的加密方式。 否则更改发送端的接受方式
            encryClick(index, isRecv) {
                if (isRecv) {
                    this.recvEncryType = index
                } else {
                    this.sendEncryType = index
                }
            }
        },
        mounted() {
            console.log("Reading Initial Datas From the Disks")
        }
    })
}