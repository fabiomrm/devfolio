import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Number } from '../Number';
import './styles.css';

export const UserCard = () => {

    const ctxUser = useContext(UserContext);

    return(
        <div className="card">
            <img src={ctxUser.userData?.avatar_url} alt="avatar" className="profile-picture"/>
            <div className="text-section">
                <h2>{ctxUser.userData?.name}</h2>
                <h3>{ctxUser.userData?.login}</h3>
                <p>{ctxUser.userData?.bio}</p>
            </div>
            <div className="number-section">
                <Number number={ctxUser.userData?.public_repos} label="Repositórios"/>
                <Number number={ctxUser.userData?.followers} label="Followers"/>
                <Number number={ctxUser.userData?.following} label="Following"/>
            </div>
        </div>
    )
}