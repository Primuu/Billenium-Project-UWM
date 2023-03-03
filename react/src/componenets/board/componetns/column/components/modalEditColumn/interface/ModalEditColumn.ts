import BoardProps from "../../../../../interface/Board";
import {_Data} from "../../../../../../../interfaces/Data";
import React from "react";
interface ModalEditColumnProps {
    id:string
    title:string
    cardsLimit:number
    modalEdit:boolean
    modalEditClose:() => void
    data:_Data["data"]
    handleDataChange:_Data["setData"]
}

export default ModalEditColumnProps