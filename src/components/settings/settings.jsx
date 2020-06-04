import React from 'react';
import s from './settings.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Settings = () => {
    return (
        <div>
            Settings
        </div>




    )
}

export default withAuthRedirect(Settings);