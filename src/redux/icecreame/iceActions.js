import { BUY_ICE } from "./iceTypes"


export const buyIceCreame = (ice) => {
    return {
        type : BUY_ICE,
        payload : ice
    }
}