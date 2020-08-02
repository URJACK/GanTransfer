"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMember = exports.getGroupByName = exports.getAllInfo = exports.deleteMember = exports.addMember = exports.deleteGroup = exports.addGroup = void 0;
var Content = /** @class */ (function () {
    function Content(isMe, text) {
        this.isMe = isMe;
        this.text = text;
    }
    return Content;
}());
var Member = /** @class */ (function () {
    function Member(name, ip) {
        this.name = name;
        this.ip = ip;
        //聊天记录
        this.contents = [];
    }
    Member.prototype.addContent = function (content) {
        this.contents.push(content);
    };
    return Member;
}());
var Group = /** @class */ (function () {
    function Group(name) {
        this.name = name;
        this.members = [];
    }
    Group.prototype.getMembers = function () {
        return this.members;
    };
    Group.prototype.getMember = function (index) {
        return this.members[index];
    };
    Group.prototype.getLength = function () {
        return this.members.length;
    };
    Group.prototype.addMember = function (newMember) {
        console.log(" ADDMEMBER");
        console.log(newMember);
        //检查该组内是否有同名用户
        for (var i = 0; i < this.members.length; ++i) {
            if (this.members[i].name == newMember.name) {
                //发现同名用户
                return false;
            }
        }
        console.log(" AFTER ADDMEMBER");
        //没有同名用户，添加成功
        this.members.push(newMember);
        console.log(this.members);
        return true;
    };
    Group.prototype.deleteMember = function (name) {
        for (var i = 0; i < this.members.length; ++i) {
            if (this.members[i].name == name) {
                //发现同名用户
                this.members.splice(i, i);
                return true;
            }
        }
        //没有同名用户,删除失败
        return false;
    };
    return Group;
}());
var groups = [];
function addGroup(name) {
    for (var i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            return false;
        }
    }
    groups.push(new Group(name));
    return true;
}
exports.addGroup = addGroup;
function deleteGroup(name) {
    for (var i = 0; i < groups.length; ++i) {
        if (groups[i].name == name) {
            groups.splice(i, i);
            return true;
        }
    }
    return false;
}
exports.deleteGroup = deleteGroup;
function getGroup(groupName) {
    for (var i = 0; i < groups.length; ++i) {
        var group = groups[i];
        if (group.name == groupName) {
            return group;
        }
    }
    return null;
}
function addMember(groupName, memberName, ip) {
    var group = getGroup(groupName);
    if (group == null) {
        return false;
    }
    var newMember = new Member(memberName, ip);
    return group.addMember(newMember);
}
exports.addMember = addMember;
function deleteMember(groupName, memberName) {
    var group = getGroup(groupName);
    if (group == null) {
        return false;
    }
    return group.deleteMember(memberName);
}
exports.deleteMember = deleteMember;
function getAllInfo() {
    return groups;
}
exports.getAllInfo = getAllInfo;
function getGroupByName(groupName) {
    return getGroup(groupName);
}
exports.getGroupByName = getGroupByName;
function getMember(groupName, memberName) {
    var localGroup = getGroup(groupName);
    if (localGroup == null) {
        return null;
    }
    var members = localGroup.getMembers();
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        if (member.name == memberName) {
            return member;
        }
    }
    return null;
}
exports.getMember = getMember;
