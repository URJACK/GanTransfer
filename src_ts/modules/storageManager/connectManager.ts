class Content {
    isMe: boolean;
    text: string;
    constructor(isMe: boolean, text: string) {
        this.isMe = isMe;
        this.text = text;
    }
}
class Member {
    name: string;
    ip: string;
    contents: Array<Content>;
    constructor(name: string, ip: string) {
        this.name = name;
        this.ip = ip;
        //聊天记录
        this.contents = []
    }
    addContent(content: Content) {
        this.contents.push(content)
    }
}
class Group {
    name: string;
    menbers: Array<Member>;
    constructor(name: string) {
        this.name = name
        this.menbers = []
    }
    getMenbers(): Array<Member> {
        return this.menbers;
    }
    getLength(): number {
        return this.menbers.length;
    }
    addMember(newMember: Member): boolean {
        //检查该组内是否有同名用户
        for (let i = 0; i < this.menbers.length; ++i) {
            if (this.menbers[i].name == name) {
                //发现同名用户
                return false
            }
        }
        //没有同名用户，添加成功
        this.menbers.push(newMember)
        return true
    }
    deleteMember(name: string): boolean {
        for (let i = 0; i < this.menbers.length; ++i) {
            if (this.menbers[i].name == name) {
                //发现同名用户
                this.menbers.splice(i, i)
                return true
            }
        }
        //没有同名用户,删除失败
        return false
    }
}
const groups: Array<Group> = []
function addGroup(name: string): boolean {
    for (let i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            return false;
        }
    }
    groups.push(new Group(name))
    return true;
}
function deleteGroup(name: string) {
    for (let i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            groups.splice(i, i)
            return true;
        }
    }
    return false;
}
function addMenber(groupName: string, name: string, ip: string) {
    //开始查询组
    for (let i = 0; i < groups.length; ++i) {
        let localGroup: Group = groups[i];
        if (localGroup.name == groupName) {
            let newMember = new Member(name, ip)
            return localGroup.addMember(newMember)
        }
    }
    //未找到组
    return false
}
//添加一个新成员 只有同名的组 并且组内必须没有该成员 才可以添加
module.exports.addMenber = addMenber
function deleteMenber(groupName: string, name: string) {
    for (let i = 0; i < groups.length; ++i) {
        let localGroup = groups[i];
        if (localGroup.name == groupName) {
            return localGroup.deleteMember(name)
        }
    }
    //未找到组
    return false;
}
export { addGroup, deleteGroup, addMenber, deleteMenber }