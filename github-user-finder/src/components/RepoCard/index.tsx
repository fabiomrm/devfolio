import { ReactComponent as Star } from '../../assets/start.svg';
import { ReactComponent as Arrow } from '../../assets/right-arrow.svg';
import './styles.css';
import { Repo } from '../../types/Repos';

type Props = {
    repo: Repo;
}

export const RepoCard = ({ repo }: Props) => {
    

    return (
        <div className="repo-card">
            <div className="repo-text-section">     
                <h4>{repo.name}</h4>
                <span>{repo.description}</span>
                <span>{repo.login}</span>
            </div>
           
            <div className="repo-star-section">
                <div>
                    <Star />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="arrow-container">
                    <Arrow />
                </div>
            </div>   
        </div>
    )
}