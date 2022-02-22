import { FilterArea } from "../FilterArea"
import './styles.css';

export const NoContent = () => {
    return(
        <div className="no-content-container">
            <h1>Github User Finder</h1>
            <p>Veja as informações de usuários e seus repositórios</p>
            <FilterArea />
        </div>
    )
}