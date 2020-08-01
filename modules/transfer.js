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
exports.TransferPacket = exports.TransferType = exports.TransferHandler = void 0;
var StorageManager = __importStar(require("./storageManager"));
var packets_1 = require("./packets");
Object.defineProperty(exports, "TransferType", { enumerable: true, get: function () { return packets_1.TransferType; } });
Object.defineProperty(exports, "TransferPacket", { enumerable: true, get: function () { return packets_1.TransferPacket; } });
var TransferHandler = /** @class */ (function () {
    function TransferHandler() {
    }
    TransferHandler.prototype.dataOperate = function (e) {
        if (e.type == packets_1.TransferType.AddGroup) {
            if (e.data.groupName == null) {
                return false;
            }
            return StorageManager.addGroup(e.data.groupName);
        }
        else if (e.type == packets_1.TransferType.DeleteGroup) {
            var packet = { groupName: e.data.groupName };
            if (e.data.groupName == null) {
                return false;
            }
            return StorageManager.deleteGroup(e.data.groupName);
        }
        else if (e.type == packets_1.TransferType.AddMember) {
            var packet = { groupName: e.data.groupName, memberName: e.data.memberName, ip: e.data.ip };
            if (e.data.groupName == null || e.data.memberName == null || e.data.ip == null) {
                return false;
            }
            return StorageManager.addMenber(e.data.groupName, e.data.memberName, e.data.ip);
        }
        else if (e.type == packets_1.TransferType.DeleteMember) {
            var packet = { groupName: e.data.groupName, memberName: e.data.memberName };
            if (packet.groupName == null || packet.memberName == null || packet.ip == null) {
                return false;
            }
            return StorageManager.deleteMenber(packet.groupName, packet.memberName);
        }
        else {
            return false;
        }
    };
    TransferHandler.prototype.dataGet = function (e) {
        if (e.type == packets_1.TransferType.GetAllGroup) {
            return StorageManager.getAllInfo();
        }
        else if (e.type == packets_1.TransferType.GetGroup) {
            if (e.data.groupName == null) {
                return null;
            }
            return StorageManager.getGroupByName(e.data.groupName);
        }
        else if (e.type == packets_1.TransferType.GetMember) {
            if (e.data.groupName == null || e.data.memberName == null) {
                return null;
            }
            return StorageManager.getMember(e.data.groupName, e.data.memberName);
        }
    };
    return TransferHandler;
}());
exports.TransferHandler = TransferHandler;
