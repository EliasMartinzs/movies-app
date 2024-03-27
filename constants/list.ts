export interface ListFilter {
  label: string;
  valor: string;
}

export const listFilter: ListFilter[] = [
  { label: 'Top Séries', valor: 'most_pop_series' },
  { label: 'Top 200 Bilheterias', valor: 'top_boxoffice_200' },
  { label: 'Top 250 Mais Bem Avaliados em Inglês', valor: 'top_rated_english_250' },
  { label: 'Top 100 Menos Bem Avaliados', valor: 'top_rated_lowest_100' },
  { label: 'Top 250 Séries Mais Bem Avaliadas', valor: 'top_rated_series_250' },
];
