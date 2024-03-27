interface PrimaryImage {
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

interface TitleType {
  displayableProperty: {
    value: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  };
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: {
    value: string;
    __typename: string;
  }[];
  canHaveEpisodes: boolean;
  __typename: string;
}

interface TitleText {
  text: string;
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

interface Results {
  _id: string;
  id: string;
  primaryImage: PrimaryImage;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: YearRange;
  releaseDate: ReleaseDate;
}

export interface Movie {
  results: Results;
}
