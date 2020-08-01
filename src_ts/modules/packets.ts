enum TransferType { AddGroup = 1, DeleteGroup, AddMember, DeleteMember, GetAllGroup, GetGroup, GetMember }
interface TransferPacket {
    type: TransferType;
    status?: boolean;
    data: ConnectorPacket | any;
}
interface ConnectorPacket {
    groupName?: string;
    memberName?: string;
    ip?: string;
}

export { TransferType, TransferPacket, ConnectorPacket }