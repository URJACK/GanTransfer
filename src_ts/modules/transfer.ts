import * as StorageManager from './storageManager'
import { TransferType, TransferPacket, ConnectorPacket } from './packets'

class TransferHandler {
    dataOperate(e: TransferPacket): boolean {
        if (e.type == TransferType.AddGroup) {
            if (e.data.groupName == null) {
                return false
            }
            return StorageManager.addGroup(e.data.groupName)
        } else if (e.type == TransferType.DeleteGroup) {
            let packet: ConnectorPacket = { groupName: e.data.groupName }
            if (e.data.groupName == null) {
                return false
            }
            return StorageManager.deleteGroup(e.data.groupName)
        } else if (e.type == TransferType.AddMember) {
            let packet: ConnectorPacket = { groupName: e.data.groupName, memberName: e.data.memberName, ip: e.data.ip }
            if (e.data.groupName == null || e.data.memberName == null || e.data.ip == null) {
                return false
            }
            return StorageManager.addMenber(e.data.groupName, e.data.memberName, e.data.ip)

        } else if (e.type == TransferType.DeleteMember) {
            let packet: ConnectorPacket = { groupName: e.data.groupName, memberName: e.data.memberName }
            if (packet.groupName == null || packet.memberName == null || packet.ip == null) {
                return false
            }
            return StorageManager.deleteMenber(packet.groupName, packet.memberName)
        } else {
            return false
        }
    }
    dataGet(e: TransferPacket): any {
        if (e.type == TransferType.GetAllGroup) {
            return StorageManager.getAllInfo()
        } else if (e.type == TransferType.GetGroup) {
            if (e.data.groupName == null) {
                return null
            }
            return StorageManager.getGroupByName(e.data.groupName)
        } else if (e.type == TransferType.GetMember) {
            if (e.data.groupName == null || e.data.memberName == null) {
                return null
            }
            return StorageManager.getMember(e.data.groupName, e.data.memberName)
        }
    }
}
export { TransferHandler, TransferType, TransferPacket }