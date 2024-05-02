"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4AI_EESCommands_API = void 0;
const C4AISDKAPIProvider_class_1 = require("../../../global/C4AISDKAPIProvider.class");
class C4AI_EESCommands_API extends C4AISDKAPIProvider_class_1.C4AI_SDK_APIProvider {
    execute(sic, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.axiosInstance.post(`${this.baseURL}/api/${this.version}/${this.entity}/commands/${sic}/execute`, request);
            return resp.data;
        });
    }
}
exports.C4AI_EESCommands_API = C4AI_EESCommands_API;
//# sourceMappingURL=EESCommands.api.js.map