import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import { Route, Switch } from 'react-router-dom';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Acesse a plataforma da TicSocial</h1>
        <p>Insira sua matrícula e senha para ter acesso ao sistema</p>
        <AuthImage />
        <div className="auth-form-container">
          <Switch>
            <Route path="/admin/auth/login">
              <h1>Card de Login</h1>
            </Route>
            <Route path="/admin/auth/signup">
              <h1>Card de Signup</h1>
            </Route>
            <Route path="/admin/auth/recover">
              <h1>Card de Recover</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Auth;
