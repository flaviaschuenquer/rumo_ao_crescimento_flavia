import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Admin from 'pages/Plan';
import Cenario from 'pages/Cenario';
import Plan from 'pages/Plan';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Cenario />
      </Route>
      <Route path="/plan">
        <Plan />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
