import * as StorageManager from './storageManager'
import { TransferType, TransferPacket, ConnectorPacket } from './packets'

class TransferHandler {
    dataOperate(e: TransferPacket): TransferPacket {
        if (e.type == TransferType.AddGroup) {
            if (e.data.groupName == null) {
                e.status = false
                return e
            }
            e.data = StorageManager.addGroup(e.data.groupName)
            if (e.data != null) {
                e.status = true
            } else {
                e.status = false
            }
            return e
        } else if (e.type == TransferType.DeleteGroup) {
            let packet: ConnectorPacket = { groupName: e.data.groupName }
            if (e.data.groupName == null) {
                e.status = false
                return e;
            }
            e.data = StorageManager.deleteGroup(e.data.groupName)
            if (e.data != null) {
                e.status = true
            } else {
                e.status = false
            }
            return e;
        } else if (e.type == TransferType.AddMember) {
            let packet: ConnectorPacket = { groupName: e.data.groupName, memberName: e.data.memberName, ip: e.data.ip }
            if (e.data.groupName == null || e.data.memberName == null || e.data.ip == null) {
                e.status = false
                return e
            }
            e.status = StorageManager.addMenber(e.data.groupName, e.data.memberName, e.data.ip)
            return e

        } else if (e.type == TransferType.DeleteMember) {
            let packet: ConnectorPacket = { groupName: e.data.groupName, memberName: e.data.memberName }
            if (packet.groupName == null || packet.memberName == null || packet.ip == null) {
                e.status = false
            }
            else {
                e.status = StorageManager.deleteMenber(packet.groupName, packet.memberName)
            }
            return e
        } else {
            e.status = false
            return e
        }
    }
    dataGet(e: TransferPacket): TransferPacket {
        if (e.type == TransferType.GetAllGroup) {
            e.status = true
            e.data = StorageManager.getAllInfo()
            return e
        } else if (e.type == TransferType.GetGroup) {
            if (e.data.groupName == null) {
                e.status = false
                e.data = null
            } else {
                e.status = true
                e.data = StorageManager.getGroupByName(e.data.groupName)
            }
            return e
        } else if (e.type == TransferType.GetMember) {
            if (e.data.groupName == null || e.data.memberName == null) {
                e.status = false
                e.data = null
            } else {
                e.status = false
                e.data = StorageManager.getMember(e.data.groupName, e.data.memberName)
            }
            return e
        } else {
            e.status = false
            return e
        }
    }
}
export { TransferHandler, TransferType, TransferPacket }