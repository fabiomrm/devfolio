import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RepoList } from "../RepoList";
import "react-tabs/style/react-tabs.css";

import './styles.css';




export const TabArea = () => {

    
  return (      
            <Tabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected"
                className="my-tabs"
                role="tab"
            >
            <TabList className="my-tab-list" role="tablist">
                <Tab className="my-tab" role="tab" id="#repositories">Repositórios</Tab>
                <Tab className="my-tab" role="tab" id="#star">Starred</Tab>
                
            </TabList>

            <TabPanel className="my-tab-panel" role="tabpanel">
                <RepoList />
            </TabPanel>

            <TabPanel  className="my-tab-panel" role="tabpanel">
                <p>oi 2</p>
            </TabPanel>
            </Tabs>
  );
};
