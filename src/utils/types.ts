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
  };
  series?: {
    available: number;
  };
  stories?: {
    available: number;
  };
}
