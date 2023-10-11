import { PrismaClient } from "@prisma/client";

const prismadb = new PrismaClient();

async function main() {
  try {
    // const newRoute = await prismadb.route.create({
    //   data: {
    //     name: "Route_2",
    //     dificulty: "Medium",
    //   },
    // });
    // const newPokemom = await prismadb.pokemon.create({
    //   data: {
    //     name: "Buizel",
    //     level: 10,
    //     type: "Water",
    //     routeId: 1,
    //   },
    // });

    // const newPokemom2 = await prismadb.pokemon.create({
    //   data: {
    //     name: "Pinsir",
    //     level: 30,
    //     type: "Bug",
    //     route: {
    //       connect: {
    //         id: newRoute.id,
    //       },
    //     },
    //   },
    // });

    // const newPokemom3 = await prismadb.pokemon.create({
    //   data: {
    //     name: "Pinsir",
    //     level: 30,
    //     type: "Bug",
    //     routeID: newRoute.id,
    //   },
    // });

    const newRoute = await prismadb.route.create({
      data: {
        name: "Route_3",
        dificulty: "Easy",
        pokemon: {
          create: {
            name: "Empoleon",
            type: "Water",
            level: 40,
          },
        },
      },
    });

    // console.log(newPokemom2);
    // console.log(newRoute);
    console.log(newRoute);
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

async function updatePokemon() {
  try {
    const updatedPokemon = await prismadb.pokemon.update({
      where: {
        id: 1,
      },
      data: {
        name: "Charizardo",
        type: "super-fyre",
      },
    });
  } catch (error) {
    console.log(error.code, error.meta);
  }
}

async function upsertPokemon() {
  try {
    await prismadb.pokemon.upsert({
      where: {
        id: 4,
      },
      create: {
        name: "Buizel",
        level: 10,
        type: "Water",
      },
      update: {
        type: "updatedTime",
      },
    });
  } catch (error) {}
}

async function relational() {
  try {
    const routes = await prismadb.route.findMany({
      include: {
        pokemon: true,
      },
    });

    routes.forEach((route) => {
      route.pokemon.forEach((pokemon) => {
        console.log(pokemon.name);
      });
    });
    console.log(routes);
  } catch (error) {}
}

//main();
//getPokemon();
//deletePokemon();
//updatePokemon();
relational();
