export type Gender = 'MALE' | 'FEMALE' | 'OTHER'; //Vai ser Male ou Female ou other

export type SalesSummary = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type FilterData = {
  store?: number;
};
