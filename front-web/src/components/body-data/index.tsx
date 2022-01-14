import './styles.css';
import { formatPrice } from 'utils/formatters';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  totalSum: number;
  labels?: string[];
  name: string;
  series?: number[];
};

function BodyData({ totalSum, labels = [], name, series = [] }: Props) {
  return (
    <div className="body-data-container base-card">
      <div className="total-sales-container">
        <h1 className="total-sales">{formatPrice(totalSum)}</h1>
        <h2 className="text-total-sales">Total das Vendas</h2>
      </div>
      <div className="pie-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default BodyData;
