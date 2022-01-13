import BodyData from 'components/body-data';
import Filter from 'components/filter';
import Header from 'components/header';
import { buildSalesByGenderChart } from 'helpers';
import { useEffect, useMemo, useState } from 'react';
import { FilterData, PieChartConfig, SalesByGender } from 'types';
import { buildFilterParams, makeRequest } from 'utils/request';
import './app.css';

function App() {
  /*const [salesSummary, setSalesSummary] = useState();*/
  const [filterData, setFilterData] = useState<FilterData>();

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        console.log(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Erro na comunicação com API SalesByGender');
      });
  }),
    [params];

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    //console.log({ filter });
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
      <BodyData name="Genero" labels={salesByGender?.labels} series={salesByGender?.series} />
    </>
  );
}

export default App;
