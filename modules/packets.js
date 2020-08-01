"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferType = void 0;
var TransferType;
(function (TransferType) {
    TransferType[TransferType["AddGroup"] = 1] = "AddGroup";
    TransferType[TransferType["DeleteGroup"] = 2] = "DeleteGroup";
    TransferType[TransferType["AddMember"] = 3] = "AddMember";
    TransferType[TransferType["DeleteMember"] = 4] = "DeleteMember";
    TransferType[TransferType["GetAllGroup"] = 5] = "GetAllGroup";
    TransferType[TransferType["GetGroup"] = 6] = "GetGroup";
    TransferType[TransferType["GetMember"] = 7] = "GetMember";
})(TransferType || (TransferType = {}));
exports.TransferType = TransferType;
