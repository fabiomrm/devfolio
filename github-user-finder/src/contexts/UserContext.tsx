import { createContext, useState } from 'react';
import { User } from '../types/User';
import { Repo } from '../types/Repos';

const userInitialState: User = {
    login:"",
    id: 0,
    node_id:"",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type:"",
    site_admin: false,
    name: "",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: "",
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: "",
}

// const userInitialState: User = {
//     login:"fabiomrm",
//     id: 70236849,
//     node_id:"MDQ6VXNlcjcwMjM2ODQ5",
//     avatar_url: "https://avatars.githubusercontent.com/u/70236849?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/fabiomrm",
//     html_url: "https://github.com/fabiomrm",
//     followers_url: "https://api.github.com/users/fabiomrm/followers",
//     following_url: "https://api.github.com/users/fabiomrm/following{/other_user}",
//     gists_url: "https://api.github.com/users/fabiomrm/gists{/gist_id}",
//     starred_url: "https://api.github.com/users/fabiomrm/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/fabiomrm/subscriptions",
//     organizations_url: "https://api.github.com/users/fabiomrm/orgs",
//     repos_url: "https://api.github.com/users/fabiomrm/repos",
//     events_url: "https://api.github.com/users/fabiomrm/events{/privacy}",
//     received_events_url: "https://api.github.com/users/fabiomrm/received_events",
//     type:"User",
//     site_admin: false,
//     name: "Fábio Monteiro",
//     company: null,
//     blog: "",
//     location: null,
//     email: null,
//     hireable: null,
//     bio: "Fullstack Web Developer Jr",
//     twitter_username: null,
//     public_repos: 32,
//     public_gists: 0,
//     followers: 6,
//     following: 4,
//     created_at: "2020-08-25T20:34:38Z",
//     updated_at: "2022-02-02T12:13:02Z"
// }

const reposInitialState: Repo[] = [
    {
        name: "",
        login: "",
        description: "",
        stargazers_count: 0,
    }
]

type UserContextType = {
    userData: User | undefined;
    setUserData: React.Dispatch<React.SetStateAction< User | undefined>>;
    userRepos: Repo[] | undefined;
    setUserRepos: React.Dispatch<React.SetStateAction< Repo[] | undefined>>;
}

export const UserContext = createContext<UserContextType>({
    userData: {
        login:"",
        id: 0,
        node_id:"",
        avatar_url: "",
        gravatar_id: "",
        url: "",
        html_url: "",
        followers_url: "",
        following_url: "",
        gists_url: "",
        starred_url: "",
        subscriptions_url: "",
        organizations_url: "",
        repos_url: "",
        events_url: "",
        received_events_url: "",
        type:"",
        site_admin: false,
        name: "",
        company: null,
        blog: "",
        location: null,
        email: null,
        hireable: null,
        bio: "",
        twitter_username: null,
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: "",
        updated_at: ""
    },
    setUserData: () => {},
    userRepos: [
        {
            name: "",
            login: "",
            description: "",
            stargazers_count: 0,
        }
    ],
    setUserRepos: () => {},
});


export const Context:React.FC = ({ children }) => {

    const [userData, setUserData] = useState<User | undefined>(userInitialState);
    const [userRepos, setUserRepos] = useState<Repo[] | undefined>(reposInitialState);
    
    return(
        <UserContext.Provider value={{userData, setUserData, userRepos, setUserRepos }}>
            { children }
        </UserContext.Provider>
    )
}