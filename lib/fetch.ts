import { Movie } from '~/interfaces/movie';
import { Movies } from '../interfaces/movies';
import { OttDetails } from '~/interfaces/ottDetailts';

const url = 'https://moviesdatabase.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '488fbc12c0msh86d32a72473524dp117130jsnd5dc39ebcc7f',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};

const ottDetails = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2136fcec17msh4741451f13987b6p10a676jsn59268c188b8d',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
  },
};

export const fetchAll = async (params: string): Promise<Movies> => {
  try {
    const response = await fetch(`${url}${params}`, options);

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados');
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Erro na busca dos dados: ${error.message}`);
  }
};

export const fetchIdMovies = async (id: string): Promise<Movie> => {
  try {
    const response = await fetch(`${url}/titles/${id}`, options);

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados');
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Erro na busca dos dados: ${error.message}`);
  }
};

export const fetchOTTDetails = async (endpoint: string): Promise<OttDetails> => {
  try {
    const response = await fetch(
      `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${endpoint}`,
      ottDetails
    );

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados');
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Erro na busca dos dados: ${error.message}`);
  }
};
