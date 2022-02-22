import { Context } from './contexts/UserContext';
import { MainRoutes } from './MainRoutes';

function App() {
  
  return (
    <>
    <Context>
      <MainRoutes />
    </Context>
    </>
  );
}

export default App;
