class Group {
    constructor(name) {
        this.name = name
        this.menbers = []
    }
    getMenbers() {
        return this.menbers
    }
}
class Menber {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
        //聊天记录
        this.content = []
    }
}
const groups = []
function addGroup(name) {
    for (let i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            return false;
        }
    }
    groups.push(new Group(name))
    return true;
}
//添加一个新的组 只有不重名的组才可以添加进去
module.exports.addGroup = addGroup
function deleteGroup(name) {
    for (let i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            groups.splice(i, i)
            return true;
        }
    }
    return false;
}
module.exports.deleteGroup = deleteGroup
function addMenber(groupName, name, ip) {
    //开始查询组
    for (let i = 0; i < groups.length; ++i) {
        let localGroup = groups[i];
        if (localGroup.name == groupName) {
            let newMember = new Menber(name, ip)
            //检查该组内是否有同名用户
            for (let i = 0; i < localGroup.length; ++i) {
                if (localGroup[i].name == name) {
                    //发现同名用户
                    return false
                }
            }
            //没有同名用户，添加成功
            localGroup.push(newMember)
            return true
        }
    }
    //未找到组
    return false
}
//添加一个新成员 只有同名的组 并且组内必须没有该成员 才可以添加
module.exports.addMenber = addMenber
function deleteMenber(groupName, name) {
    for (let i = 0; i < groups.length; ++i) {
        let localGroup = groups[i];
        if (localGroup.name == groupName) {
            for (let i = 0; i < localGroup.length; ++i) {
                if (localGroup[i].name == name) {
                    //发现同名用户
                    localGroup.splice(i, i)
                    return true
                }
            }
            //没有同名用户,删除失败
            return false
        }
    }
    //未找到组
    return false;
}
//删除一个成员 只有同名组 并且组内必须包含该成员 才可以删除
module.exports.deleteMenber = deleteMenber