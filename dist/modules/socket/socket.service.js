"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
const single_conversation_entity_1 = require("./entities/single-conversation.entity");
const typeorm_2 = require("typeorm");
let SocketService = class SocketService {
    constructor(singleConversationRepository) {
        this.singleConversationRepository = singleConversationRepository;
    }
    async getSingleConversation({ senderId, receiverId, }) {
        if (!senderId?.trim() || !receiverId?.trim()) {
            throw new common_1.BadRequestException("SenderId or ReceiverId cannot be empty!");
        }
        if (!(0, class_validator_1.isUUID)(senderId) || !(0, class_validator_1.isUUID)(receiverId)) {
            throw new common_1.BadRequestException("Invalid SenderId or ReceiverId format!");
        }
        if (senderId === receiverId) {
            throw new common_1.BadRequestException("SenderId and ReceiverId cannot be the same!");
        }
        const listChat = await this.singleConversationRepository.find({
            where: {
                senderId: senderId,
                receiverId: receiverId,
            },
        });
        return listChat;
    }
};
exports.SocketService = SocketService;
exports.SocketService = SocketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(single_conversation_entity_1.SingleConversationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocketService);
//# sourceMappingURL=socket.service.js.map