import {
    useState,
    useRef,
    useCallback,
    useEffect,
} from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './CharacterSearch.scss';

export interface Homeworld {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface SearchResult {
    count: number;
    next: null;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: any[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}


interface SimpleHomeworld {
    name: string;
    population: number | string;
}

interface SimpleHomeworlds {
    [key: string]: SimpleHomeworld;
}

const Search = () => {
    const [search, setSearch] = useState<string>('');
    const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<Result[] | null>([]);
    const [homeworlds, setHomeworlds] = useState<SimpleHomeworlds>({});

    console.log('search', search)
    console.log('loadingAnimation', loadingAnimation)
    console.log('searchResults', searchResults)
    console.log('homeworlds', homeworlds)

    const fetchData = useCallback(async (character: string) => {
        try {
            setSearchResults(character ? (await (await fetch(`https://swapi.dev/api/people/?search=${character}`)).json()).results ?? [] : []);
        } catch (error) {
            console.error(error);
            setSearchResults(null);
        }
    }, []);


    const debouncedSearch = useRef(
        (character: any) => {
            setTimeout(async () => {
                await fetchData(character);
                setLoadingAnimation(false);
            }, 300);
        }
    ).current;

    useEffect(() => {
        setLoadingAnimation(true);
        debouncedSearch(search);
    }, [search]);


    useEffect(() => {
        if (!searchResults) return;
        Promise.all(
            Array.from(
                new Set(searchResults.map((result: any) => result.homeworld))
            ).map((homeworld: string) =>
                homeworlds?.[homeworld]
                    ? Promise.resolve()
                    : fetch(homeworld)
                        .then((data) => data.ok && data.json())
                        .then((dataJson: Homeworld) =>
                            setHomeworlds((prev) => ({
                                ...prev,
                                [homeworld]: {
                                    name: dataJson.name,
                                    population: dataJson.population,
                                },
                            }))
                        )
            )
        );
    }, [searchResults, homeworlds]);


    const getCharacterUrl = useCallback((url: string) => {
        const searchParams = new URLSearchParams(url);
        const id = searchParams.get('people')?.split('/').pop();
        return id ? `character/${id}` : '';
    }, []);



    return (
        <section className="search">
            <h1>Search your favorite character</h1>
            <input
                className="search__input" 
                type="search__input"
                placeholder="Search character"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search-box__results">

                {searchResults &&
                    searchResults.map(({ name, homeworld, url }, i) => {
                        const { name: homeworldName, population: homeworldPopulation } = homeworlds[homeworld] || {};
                        const text = homeworldName && homeworldPopulation
                            ? `Homeworld: ${homeworldName}, population: ${homeworldPopulation}`
                            : '';
                        return (
                            <SearchResult
                                key={i}
                                name={name}
                                text={text}
                                url={getCharacterUrl(url)}
                            />
                        )
                    }
                    )
                }
            </div>
            {!searchResults && !loadingAnimation && <div>No character found</div>}
        </section>
    );
};


export default Search;
