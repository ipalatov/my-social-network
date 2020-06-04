import React from 'react';
import s from './news.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const News = () => {
    return (
        <div>
            News
        </div>




    )
}

export default withAuthRedirect(News);