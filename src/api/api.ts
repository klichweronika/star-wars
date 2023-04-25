type Person = {
  name: string;
  population: string;
  films: string[];
  url: string;
  homeworld: string;
};

type PersonResponse = {
  results: Person[];
};

type PlanetResponse = {
  name: string;
  films: string[];
  population: string;
  url: string;
};

type MovieResponse = {
  opening_crawl: string;
  release_date: string;
  title: string;
};

export const getPersons = async (name: string): Promise<PersonResponse> => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for "${name}"`);
  }
  return response.json();
};

export const getPlanet = async (planetId: number): Promise<PlanetResponse> => {
  const response = await fetch(`https://swapi.dev/api/planets/${planetId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for planet ID ${planetId}`);
  }
  return response.json();
};

export const getMovies = async (movieId: number): Promise<MovieResponse> => {
  const response = await fetch(`https://swapi.dev/api/films/${movieId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data for movie ID ${movieId}`);
  }
  return response.json();
};
