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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleConversationEntity = void 0;
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
let SingleConversationEntity = class SingleConversationEntity {
};
exports.SingleConversationEntity = SingleConversationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SingleConversationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: "senderId" }),
    __metadata("design:type", users_entity_1.UserEntity)
], SingleConversationEntity.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SingleConversationEntity.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({ name: "receiverId" }),
    __metadata("design:type", users_entity_1.UserEntity)
], SingleConversationEntity.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SingleConversationEntity.prototype, "receiverId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "text" }),
    __metadata("design:type", String)
], SingleConversationEntity.prototype, "content", void 0);
exports.SingleConversationEntity = SingleConversationEntity = __decorate([
    (0, typeorm_1.Entity)("SingleConversation")
], SingleConversationEntity);
//# sourceMappingURL=single-conversation.entity.js.map