import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Spinner from 'react-bootstrap/esm/Spinner';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import React from 'react';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = React.useContext(Context);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className='d-flex justify-content-center align-content-center'>
        <Spinner />;
      </div>
    );

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
