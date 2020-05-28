import React, { useState, useEffect } from 'react';
import s from './profileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)


    }
    return (

        <div className={s.status}>
            <b>Status:</b>
            {!editMode &&
                <div>
                {props.isOwner ?  <span onDoubleClick={activateEditMode} > {props.status || '---'} </span> : <span> {props.status || '---'} </span>}
                   
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;