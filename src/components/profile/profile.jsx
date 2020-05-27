import React from 'react';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = ({ isOwner, profile, status, updateStatus, savePhoto }) => {

    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto} />
            <MyPostsContainer />
        </div>
    )

}

export default Profile;