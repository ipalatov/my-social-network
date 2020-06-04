import React from 'react';
import s from './music.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Music = () => {
    return (
        <div>
            Music
        </div>




    )
}

export default withAuthRedirect(Music);