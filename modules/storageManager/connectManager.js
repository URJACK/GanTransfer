"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMember = exports.getGroupByName = exports.getAllInfo = exports.deleteMenber = exports.addMenber = exports.deleteGroup = exports.addGroup = void 0;
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
        this.menbers = [];
    }
    Group.prototype.getMenbers = function () {
        return this.menbers;
    };
    Group.prototype.getMember = function (index) {
        return this.menbers[index];
    };
    Group.prototype.getLength = function () {
        return this.menbers.length;
    };
    Group.prototype.addMember = function (newMember) {
        //检查该组内是否有同名用户
        for (var i = 0; i < this.menbers.length; ++i) {
            if (this.menbers[i].name == name) {
                //发现同名用户
                return false;
            }
        }
        //没有同名用户，添加成功
        this.menbers.push(newMember);
        return true;
    };
    Group.prototype.deleteMember = function (name) {
        for (var i = 0; i < this.menbers.length; ++i) {
            if (this.menbers[i].name == name) {
                //发现同名用户
                this.menbers.splice(i, i);
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
function addMenber(groupName, memberName, ip) {
    var group = getGroup(groupName);
    if (group == null) {
        return false;
    }
    var newMember = new Member(memberName, ip);
    return group.addMember(newMember);
}
exports.addMenber = addMenber;
function deleteMenber(groupName, memberName) {
    var group = getGroup(groupName);
    if (group == null) {
        return false;
    }
    return group.deleteMember(memberName);
}
exports.deleteMenber = deleteMenber;
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
    var members = localGroup.getMenbers();
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        if (member.name == memberName) {
            return member;
        }
    }
    return null;
}
exports.getMember = getMember;
