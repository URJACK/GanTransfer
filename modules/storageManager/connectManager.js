"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenber = exports.addMenber = exports.deleteGroup = exports.addGroup = void 0;
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
function addMenber(groupName, name, ip) {
    //开始查询组
    for (var i = 0; i < groups.length; ++i) {
        var localGroup = groups[i];
        if (localGroup.name == groupName) {
            var newMember = new Member(name, ip);
            return localGroup.addMember(newMember);
        }
    }
    //未找到组
    return false;
}
exports.addMenber = addMenber;
//添加一个新成员 只有同名的组 并且组内必须没有该成员 才可以添加
module.exports.addMenber = addMenber;
function deleteMenber(groupName, name) {
    for (var i = 0; i < groups.length; ++i) {
        var localGroup = groups[i];
        if (localGroup.name == groupName) {
            return localGroup.deleteMember(name);
        }
    }
    //未找到组
    return false;
}
exports.deleteMenber = deleteMenber;
