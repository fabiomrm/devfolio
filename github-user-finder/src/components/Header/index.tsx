import { ReactComponent as GithubLogo } from '../../assets/logo.svg';
import './styles.css';

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <GithubLogo className="logo"/>
            </div>
            <h1>Github User Finder</h1>
        </header>
    )
}