import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ pokemon }) {
  return (
    <div>
      <Layout title="Pokedex" description="An app for tracking Pokemon">
        <ul>
          {pokemon.map(({ name, image }, idx) => (
            <li key={idx} className="bg-slate-300 border-2 border-gray-100 rounded-xl">
              <Link href={`/pokemon?id=${idx + 1}`}>
                <a className="flex items-center p-5 ">
                  <img width={100} height={100} src={image} alt={name} />
                  <span className="pl-10 capitalize text-xl font-bold">
                    {name}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const res = await data.json();

  const pokemon = res.results.map((result, idx) => {
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
      "00" +
      (idx + 1)
    ).slice(-3)}.png`;
    return {
      ...result,
      image,
    };
  });

  return {
    props: {
      pokemon,
    },
  };
};
