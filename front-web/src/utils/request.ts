import axios from 'axios';
import { FilterData } from 'types';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({ baseURL });

export const buildFilterParams = (
  filterData?: FilterData,
  extraparams?: Record<string, unknown>
) => {
  //é um objeto que é chave valor de string e unknown. Tipo de dados desconhecido
  return {
    store: filterData?.store,
    ...extraparams //passa o valor usando um SPREAD OPERATOR ...
  };
};
