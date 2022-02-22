import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.css';

type Props = {
    number?: number;
    label: string;
}
export const Number = ({ number, label }: Props) => {


    return(
        <div className="number-container">
            <span className="number">{ number }</span>
            <span className="label">{ label }</span>
        </div>
    )
}