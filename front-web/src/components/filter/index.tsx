import './styles.css';
import { ReactComponent as XIcon } from 'assets/x-icon.svg';

function Filter() {
  return (
    <div className="main-filter-container base-card">
      <div className="filter-container base-card">
        <input type="text" className="text-filter form-control" />
        <XIcon className="xicon-filter" />
        <select className="select-filter"></select>
      </div>
    </div>
  );
}

export default Filter;
