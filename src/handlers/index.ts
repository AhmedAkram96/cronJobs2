import { receiveMoney } from "./receiveMoney";
import { sendMoney } from "./sendMoney";

export interface handlers {
    receiveMoney: string,
    sendMoney: string
}
export default { receiveMoney, sendMoney }