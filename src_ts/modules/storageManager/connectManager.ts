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
    members: Array<Member>;
    constructor(name: string) {
        this.name = name
        this.members = []
    }
    getMembers(): Array<Member> {
        return this.members;
    }
    getMember(index: number): Member {
        return this.members[index]
    }
    getLength(): number {
        return this.members.length;
    }
    addMember(newMember: Member): boolean {
        console.log(" ADDMEMBER")
        console.log(newMember)
        //检查该组内是否有同名用户
        for (let i = 0; i < this.members.length; ++i) {
            if (this.members[i].name == newMember.name) {
                //发现同名用户
                return false
            }
        }
        console.log(" AFTER ADDMEMBER")
        //没有同名用户，添加成功
        this.members.push(newMember)
        console.log(this.members)
        return true
    }
    deleteMember(name: string): boolean {
        for (let i = 0; i < this.members.length; ++i) {
            if (this.members[i].name == name) {
                //发现同名用户
                this.members.splice(i, i)
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
function deleteGroup(name: string): boolean {
    for (let i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            groups.splice(i, i)
            return true;
        }
    }
    return false;
}
function getGroup(groupName: string): Group | null {
    for (let i = 0; i < groups.length; ++i) {
        let group: Group = groups[i];
        if (group.name == groupName) {
            return group
        }
    }
    return null
}
function addMember(groupName: string, memberName: string, ip: string): boolean {
    let group: Group | null = getGroup(groupName)
    if (group == null) {
        return false
    }
    let newMember = new Member(memberName, ip)
    return group.addMember(newMember)
}
function deleteMember(groupName: string, memberName: string) {
    let group: Group | null = getGroup(groupName)
    if (group == null) {
        return false
    }
    return group.deleteMember(memberName)
}
function getAllInfo(): Array<Group> {
    return groups;
}
function getGroupByName(groupName: string): Group | null {
    return getGroup(groupName)
}
function getMember(groupName: string, memberName: string): Member | null {
    let localGroup: Group | null = getGroup(groupName)
    if (localGroup == null) {
        return null
    }
    let members: Array<Member> = localGroup.getMembers()
    for (let i = 0; i < members.length; i++) {
        let member = members[i];
        if (member.name == memberName) {
            return member;
        }
    }
    return null
}
export { addGroup, deleteGroup, addMember, deleteMember, getAllInfo, getGroupByName, getMember }