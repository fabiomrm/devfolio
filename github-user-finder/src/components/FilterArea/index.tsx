import { api } from '../../hooks/useFetch';
import { FiSearch } from 'react-icons/fi';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import './styles.css';


export const FilterArea = () => {

    const ctx = useContext(UserContext);
    const [searchValue, setSearchValue] = useState('');

    const getUserData = async () => {
        try {
            const responseUser = await api.get(`/users/${searchValue}`);
            const responseRepo = await api.get(`/users/${searchValue}/repos`);
            ctx.setUserData(responseUser.data);
            ctx.setUserRepos(responseRepo.data);

        } catch(err) {
            alert(`Usuário: ${searchValue} não encontrado.`);

        } finally {
            setSearchValue("");
        }
    }

    const handleEnterPress = async (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            try {
                await getUserData();
            } catch (err) {
                console.error(err);
            };
        };
    };

    return (
        <div className="search-area">
            <FiSearch className="magnifier"/>
            <input type="text" value={searchValue} 
                onChange={e => setSearchValue(e.target.value)} 
                onKeyPress={(e: React.KeyboardEvent) => handleEnterPress(e)}
                placeholder="Digite um username"
            />
        </div>
    )
}