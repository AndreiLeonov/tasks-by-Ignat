import React from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { RequestsAPI } from "./RequestsAPI";

export function Requests() {

    const onClickHandler = () => {
        RequestsAPI.sendCheckboxValue(true).then( res => {
            console.log(res)
        })

    }

    return (
        <div>
            <SuperCheckbox checked={true}/>
            <SuperButton onClick={onClickHandler}>SEND REQUEST</SuperButton>
        </div>
    );
}
