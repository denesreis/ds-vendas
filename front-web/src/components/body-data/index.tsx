import './styles.css';
import { formatPrice } from 'utils/formatters';

function BodyData() {
  return (
    <div className="body-data-container base-card">
      <div className="total-sales-container">
        <h1 className="total-sales">{formatPrice(746865.0)}</h1>
        <h2 className="text-total-sales">Total das Vendas</h2>
      </div>
    </div>
  );
}

export default BodyData;
