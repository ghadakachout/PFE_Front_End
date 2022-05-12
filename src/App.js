import React, { useEffect, useState } from "react";
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import AdminDashboard from './components/pages/AdminDashboard/AdminDashboard';
import FinancierDashboard from './components/pages/FinancierDashboard/FinancierDashboard';
import MagasinierDashboard from './components/pages/MagasinierDashboard/MagasinierDashboard';
import ResplogistiqueDashboard from './components/pages/LogistiqueDashboard/ResplogistiqueDashboard';
import RespachatDashboard from './components/pages/AchatDashboard/RespachatDashboard';
import Vente from './components/pages/VenteDashboard/Vente';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';
import parseJwt from "./services/JWTDecoder";

function App() {
  const accessToken = useSelector(state => state.rootReducer.token);
  const [redirect, setRedirect] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(actions.checkTokenFromLocalDtroage());
    dispatch(actions.getProvider());
  },[])

  useEffect(() => {
    if (accessToken) {
      console.log("test V", parseJwt(accessToken).roles[0])
      switch (parseJwt(accessToken).roles[0]) {
        case 'ROLE_ADMIN':
          setRedirect('/AdminDashboard');
          dispatch(actions.getCenter());
          dispatch(actions.getDept());
          dispatch(actions.getResponsble());
          dispatch(actions.getPaie());
          dispatch(actions.getLiv());
          dispatch(actions.getCatg());
          break;
        case 'ROLE_FINANCIER':
          setRedirect('/FinancierDashboard');
          break;
        case 'ROLE_MAGASINIER':
          setRedirect('/MagasinierDashboard');
          break;
        case 'ROLE_RESPVENTE':
          setRedirect('/Vente')
          break;
        case 'ROLE_RESPACHAT':
          setRedirect('/RespachatDashboard');
          break;
        case 'ROLE_RESPLOGISTIQUE':
          setRedirect('/ResplogistiqueDashboard');
          break;
      }
    }
  }, [accessToken])
  
  useEffect(()=> { 
    console.log('redirect => ' ,redirect);
  },[redirect])

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              {accessToken === null ?
                <>
                  <Route exact path="/" component={Home} />
                  <Route path="/Login" component={Login} />
                </>
                :
                <>
                  <Redirect to={redirect} />
                  <Route path="/AdminDashboard" component={AdminDashboard} />
                  <Route path="/FinancierDashboard" component={FinancierDashboard} />
                  <Route path="/MagasinierDashboard" component={MagasinierDashboard} />
                  <Route path="/RespachatDashboard" component={RespachatDashboard} />
                  <Route path="/ResplogistiqueDashboard" component={ResplogistiqueDashboard} />
                  <Route path="/Vente" component={Vente} />
                </>
              }
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
