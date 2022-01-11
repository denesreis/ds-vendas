import BodyData from 'components/body-data';
import Filter from 'components/filter';
import Header from 'components/header';
import './app.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
      <BodyData name="Lojas" labels={['Lavras', 'Perdoes', 'Varginha']} series={[40, 30, 30]} />
    </>
  );
}

export default App;
