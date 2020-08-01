enum TransferType { AddGroup = 1, DeleteGroup, AddMember, DeleteMember, GetAllGroup, GetGroup, GetMember }
class TransferPacket {
    type: TransferType;
    data: ConnectorPacket;
    constructor(type: TransferType, data: any) {
        this.type = type
        this.data = data
    }
}
interface ConnectorPacket {
    groupName?: string;
    memberName?: string;
    ip?: string;
}

export { TransferType, TransferPacket, ConnectorPacket }