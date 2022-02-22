import { Dispatch, SetStateAction } from "react"
import './styles.css';

type Props = {
    pages: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ pages, setCurrentPage }: Props) => {
    return (
        <div className="pagination-component">
            {Array.from(Array(pages), (_, index) => {
                return(
                <button 
                    key={index} 
                    value={index}
                    onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}
                >
                    {index + 1}
                </button>
                ) 
                
            })}
        </div>
    )
}