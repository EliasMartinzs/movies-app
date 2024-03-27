export type OttDetails = {
  imageurl: string[];
  genre: string[];
  imdbid: string;
  title: string;
  runtime: string;
  imdbrating: number;
  released: number;
  synopsis: string;
  type: string;
  language: string[];
  streamingAvailability: {
    country: {
      [countryCode: string]: {
        url: string;
        platform: string;
      }[];
    };
  };
};

export type MovieSearch = {
  page: number;
  results: {
    imageurl: string[];
    genre: string[];
    imdbid: string;
    title: string;
    released: number;
    type: string;
    synopsis: string;
  }[];
};
