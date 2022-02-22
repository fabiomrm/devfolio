import { FilterArea } from "../../components/FilterArea";
import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard";
import { TabArea } from "../../components/TabArea";
import { NoContent } from "../../components/NoContent";


import './styles.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Home = () => {

    const ctx = useContext(UserContext);

    return (
        <>
        <Header />
        <main>
            {ctx.userData?.login !== "" 
            ? 
               (
               <>
                    <div className="left">
                        <FilterArea />
                        <UserCard />
                    </div>
                    <div className="right">
                        <TabArea />
                    </div>
                </>
                )
            :
                (
                    <>
                        <NoContent />
                    </>
                )

        }        
        </main>
        <footer>
       
        </footer>
        </>
    )
}