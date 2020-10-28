import React from "react";
import style from "./Message.module.css";

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={style.dialog}>
            <div className={style.dialog_photo}><img src={props.avatar} alt="avatar"/></div>
            <div className={style.dialog_mainMessagePart}>
                <div className={style.dialog_nickname}> {props.name} </div>
                <div className={style.dialog_message}> {props.message}</div>
                <div className={style.dialog_timeSend}> {props.time} </div>
            </div>
        </div>
    );
}

export default Message;
