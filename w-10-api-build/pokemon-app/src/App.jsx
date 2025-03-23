import { useEffect, useState } from "react";

function App() {
    const [allPokemon, setAllPokemon] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("bg-red-200");

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=1000",
            );
            const data = await response.json();
            const detailedData = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const pokemonDetails = await res.json();
                    return {
                        name: pokemonDetails.name,
                        types: pokemonDetails.types.map(
                            (typeInfo) => typeInfo.type.name,
                        ),
                        image: pokemonDetails.sprites.front_default,
                    };
                }),
            );
            setAllPokemon(detailedData);
            setFilteredPokemon(detailedData);
        };

        fetchPokemon();
    }, []);

    const handleTypeChange = (event) => {
        const type = event.target.value;
        setSelectedType(type);
        if (type) {
            const filtered = allPokemon.filter((pokemon) =>
                pokemon.types.includes(type),
            );
            setFilteredPokemon(filtered);
            if (type === "grass") {
                setBackgroundColor("bg-green-200");
            } else if (type === "water") {
                setBackgroundColor("bg-blue-200");
            } else {
                setBackgroundColor("bg-red-200");
            }
        } else {
            setFilteredPokemon(allPokemon);
        }
    };

    const sortedPokemon = [...filteredPokemon].sort((a, b) =>
        a.name.localeCompare(b.name),
    );

    const uniqueTypes = [
        ...new Set(allPokemon.flatMap((pokemon) => pokemon.types)),
    ];

    return (
        <div className='grid justify-center'>
            <h1 className='text-2xl my-7 font-bold text-center'>Pokémon App</h1>
            <div className='border-red-200 border p-4'>
                <label htmlFor='type-select'>Filter by Type: </label>
                <select
                    id='type-select'
                    onChange={handleTypeChange}
                    value={selectedType}
                >
                    <option value=''>All Types</option>
                    {uniqueTypes.map((type) => (
                        <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className='grid grid-cols-4'>
                {sortedPokemon.map((pokemon) => (
                    <div
                        key={pokemon.name}
                        className={`p-8 ${backgroundColor}  m-8 grid place-content-center`}
                    >
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h2>{pokemon.name}</h2>
                        <p>Types: {pokemon.types.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
