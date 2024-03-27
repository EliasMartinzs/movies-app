interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: {
    plainText: string;
    __typename: string;
  };
  __typename: string;
}

interface TitleTypeCategory {
  value: string;
  __typename: string;
}

interface DisplayableTitleTypeProperty {
  value: {
    plainText: string;
    __typename: string;
  };
  __typename: string;
}

interface TitleType {
  displayableProperty?: DisplayableTitleTypeProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: TitleTypeCategory[];
  canHaveEpisodes: boolean;
  __typename: string;
}

interface YearRange {
  year: number;
  endYear: number | null;
  __typename: string;
}

interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}

export interface Movie {
  _id: string;
  id: string;
  primaryImage: Image | null;
  titleType: TitleType;
  titleText: {
    text: string;
    __typename: string;
  };
  originalTitleText: {
    text: string;
    __typename: string;
  };
  releaseYear: YearRange;
  releaseDate: ReleaseDate;
}

export interface Movies {
  page: number;
  next: string;
  entries: number;
  results: Movie[];
}
