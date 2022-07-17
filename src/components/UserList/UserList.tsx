import React from "react";
import UserHandle from "../../ui-components/UserHandle/UserHandle";
import styles from "./UserList.module.css"

const UserList= (props: any) => {


    return (
        <div>
            <h2 className={styles['list-title']}>{props.type} Users</h2>
            <div className={styles['list']}>
                <UserHandle/>
                <UserHandle/>
            </div>
        </div>
    )
}
export default UserList;