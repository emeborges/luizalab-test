export interface CharacterProps {
  name: string;
  id: number;
  thumbnail: {
    extension: string;
    path: string;
  };
  description?: string;
  modified?: string;
  comics?: {
    available: number;
    collectionURI: string;
  };
  series?: {
    available: number;
  };
  stories?: {
    available: number;
  };
}
interface DatesProps {
  date: string;
  type: string;
}

export interface ComicProps {
  title: string;
  id: number;
  thumbnail: {
    extension: string;
    path: string;
  };
  dates?: DatesProps[];
}
