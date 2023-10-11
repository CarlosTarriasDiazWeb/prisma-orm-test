import { PrismaClient } from "@prisma/client";

const prismadb = new PrismaClient();

async function main() {
  try {
    const newPokemom = await prismadb.pokemon.create({
      data: {
        name: "Buizel",
        level: 10,
        type: "Water",
      },
    });

    console.log(newPokemom);
  } catch (error) {
    console.log(error);
  }
}

async function getPokemon() {
  try {
    const pokemons = await prismadb.pokemon.findMany();
    //console.log(pokemons);
    pokemons.map((pokemon) => console.log(`${pokemon.id} - ${pokemon.name}`));

    const pokemonFirst = await prismadb.pokemon.findFirst({
      where: {
        id: 2,
        name: "Rayquaza",
      },
    });

    const pokemonFirst2 = await prismadb.pokemon.findFirst({
      where: {
        OR: [{ id: 34 }, { name: "Charmander" }],
      },
    });

    console.log(pokemonFirst, pokemonFirst2);
  } catch (error) {
    console.log(error);
  }
}

async function deletePokemon() {
  try {
    const deletedPokemon = await prismadb.pokemon.delete({
      where: {
        id: 2,
      },
    });

    console.log("Pokemon eliminado ", deletedPokemon);
  } catch (error) {
    console.log(error.code, error.meta);
  }
}

//main();
//getPokemon();
deletePokemon();
