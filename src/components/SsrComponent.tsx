import Image from "next/image";
import { use } from "react";

//SSRで取得
async function getData() {
  const returnData = [];
  for (let i = 1; i <= 50; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    returnData.push(await response.json());
  }
  return returnData;
}

type PokeType = {
  name: string;
  sprites: { front_default: string };
};

type PropsType = {
  propsItem: string;
};

export default function SsrComponent({ propsItem }: PropsType) {
  const pokeData: PokeType[] = use(getData());

  return (
    <>
      <div>SSRで呼び出しているコンポーネント</div>
      {propsItem}
      <ul>
        {pokeData.map((item, i) => (
          <li key={i}>
            <div>{item.name}</div>
            <div>
              <Image
                src={item.sprites.front_default}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
