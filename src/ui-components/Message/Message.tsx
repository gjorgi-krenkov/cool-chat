import React from "react"
import styles from "./Message.module.css"

const Message = (props: any)  =>
{
    return (
        <div className={styles['wrapper']}>
            <div className={styles['user-image']}>
                .
            </div>
            <div className={styles['content']}>
                <span className={styles['message-text']}>Hello message that is pretty longgg.. that spans next row mby</span>
            </div>
        </div>
    )
}
export default Message;
