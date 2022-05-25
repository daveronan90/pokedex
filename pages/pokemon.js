import Layout from "../components/Layout";

function pokemon({ pokemon }) {
  const { types, name, image, id } = pokemon;
  return (
    <Layout title={name} description={`Pokedex entry for ${name}`}>
      <div className="grid place-items-center h-screen">
        <img src={image} alt={`name`} />
        <span>{`#${id}`}</span>
        <span className="capitalize text-4xl font-bold">{name}</span>
        <div className="flex items-center capitalize justify-evenly w-full">
          {types.map(({ type }, idx) => (
            <span key={idx}>{type.name}</span>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default pokemon;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const res = await data.json();

  const { types, name } = res;
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
    "00" + id
  ).slice(-3)}.png`;

  const pokemon = {
    types,
    name,
    image,
    id: ("00" + id).slice(-3),
  };

  return {
    props: {
      pokemon,
    },
  };
};
