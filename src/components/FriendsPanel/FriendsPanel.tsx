import React from "react";
import UserList from "../UserList/UserList";
import styles from "./FriendsPanel.module.css"

const FriendsPanel = (props:any) =>
{
    return(
        <div  className={styles["main-wrapper"]}>
            <div className={styles["content"]}>
                <UserList type={"Active"} />
            </div>
        </div>
    )
}

export default FriendsPanel;