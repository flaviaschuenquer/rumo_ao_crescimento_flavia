import './styles.css';

import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';

const Pdi = () => {
  return (
    <div className="pdi-container">
      <div className="base-card pdi-card">
        <div className="pdi-content-container">
          <div>
            <h1>Plano de desenvolvimento individual</h1>
            <p>
              Você não possui nenhum plano em andamento, verificar
              disponibilidade em criar novo plano{' '}
            </p>
          </div>
          <div>
            <Link to="/Plan">
              <ButtonIcon text=" Crie seu plano" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdi;
