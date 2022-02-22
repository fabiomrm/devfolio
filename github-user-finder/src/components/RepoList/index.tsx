import React, { useContext } from 'react';
import { RepoCard } from '../../components/RepoCard';
import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';
import { Pagination } from '../Pagination';
import './styles.css';

export const RepoList = () => {

    const ctx = useContext(UserContext);

    const [itensPerPage, setItensPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(ctx.userRepos?.length as number / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = ctx.userRepos!.slice(startIndex, endIndex);
    
    
    return(
        <>
            <div className="grid">
                {ctx.userRepos ? (
                    currentItens.map((repo, index) => (
                            <RepoCard repo={repo} key={index}/>
                    ))
                    ): "No content"}
            </div>
            <Pagination setCurrentPage={setCurrentPage} pages={pages}/>
        </>
    )
}