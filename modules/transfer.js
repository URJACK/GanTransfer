"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferType = exports.TransferHandler = void 0;
var StorageManager = __importStar(require("./storageManager"));
var packets_1 = require("./packets");
Object.defineProperty(exports, "TransferType", { enumerable: true, get: function () { return packets_1.TransferType; } });
var TransferHandler = /** @class */ (function () {
    function TransferHandler() {
    }
    TransferHandler.prototype.dataOperate = function (e) {
        if (e.type == packets_1.TransferType.AddGroup) {
            if (e.data.groupName == null) {
                e.status = false;
                return e;
            }
            e.data = StorageManager.addGroup(e.data.groupName);
            if (e.data != null) {
                e.status = true;
            }
            else {
                e.status = false;
            }
            return e;
        }
        else if (e.type == packets_1.TransferType.DeleteGroup) {
            var packet = { groupName: e.data.groupName };
            if (e.data.groupName == null) {
                e.status = false;
                return e;
            }
            e.data = StorageManager.deleteGroup(e.data.groupName);
            if (e.data != null) {
                e.status = true;
            }
            else {
                e.status = false;
            }
            return e;
        }
        else if (e.type == packets_1.TransferType.AddMember) {
            var packet = { groupName: e.data.groupName, memberName: e.data.memberName, ip: e.data.ip };
            if (e.data.groupName == null || e.data.memberName == null || e.data.ip == null) {
                e.status = false;
                return e;
            }
            e.status = StorageManager.addMenber(e.data.groupName, e.data.memberName, e.data.ip);
            return e;
        }
        else if (e.type == packets_1.TransferType.DeleteMember) {
            var packet = { groupName: e.data.groupName, memberName: e.data.memberName };
            if (packet.groupName == null || packet.memberName == null || packet.ip == null) {
                e.status = false;
            }
            else {
                e.status = StorageManager.deleteMenber(packet.groupName, packet.memberName);
            }
            return e;
        }
        else {
            e.status = false;
            return e;
        }
    };
    TransferHandler.prototype.dataGet = function (e) {
        if (e.type == packets_1.TransferType.GetAllGroup) {
            e.status = true;
            e.data = StorageManager.getAllInfo();
            return e;
        }
        else if (e.type == packets_1.TransferType.GetGroup) {
            if (e.data.groupName == null) {
                e.status = false;
                e.data = null;
            }
            else {
                e.status = true;
                e.data = StorageManager.getGroupByName(e.data.groupName);
            }
            return e;
        }
        else if (e.type == packets_1.TransferType.GetMember) {
            if (e.data.groupName == null || e.data.memberName == null) {
                e.status = false;
                e.data = null;
            }
            else {
                e.status = false;
                e.data = StorageManager.getMember(e.data.groupName, e.data.memberName);
            }
            return e;
        }
        else {
            e.status = false;
            return e;
        }
    };
    return TransferHandler;
}());
exports.TransferHandler = TransferHandler;
