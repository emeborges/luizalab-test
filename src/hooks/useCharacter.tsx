import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { api } from '../utils/services';

interface ProviderProps {
  children: ReactNode;
}

interface CharacterProps {}

interface ContextProps {
  characters: CharacterProps[];
}
const CharactersContext = createContext<ContextProps>({} as ContextProps);

export function CharacterProvider({ children }: ProviderProps) {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  const [load, setLoad] = useState(true);
  const route = useRouter();
  const pid: any = route.query.servidor;

  useEffect(() => {
    setLoad(true);
    async function getBosses() {
      const { data } = await api.get(`/characters`);
      setCharacters(data.data.results);
      setLoad(false);
    }
    getBosses();
  }, [pid]);

  console.log('aq', characters);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
}

export function useCharacter() {
  const context = useContext(CharactersContext);

  return context;
}
