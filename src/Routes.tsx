import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Plan from 'pages/Plan';
import Cadastro from 'components/Cadastro';
import Auth from 'pages/Admin/Auth';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Cadastro />
      </Route>
      <Route path="/plan">
        <Plan />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
