"use client";

import { useState } from "react";

type PropsType = {
  propsItem: string;
};

export default function CsrComponent({ propsItem }: PropsType) {
  const [value] = useState("これはuseStateで宣言している変数");

  return (
    <>
      <div>CSRで呼び出しているコンポーネント</div>
      {value}
      <div>{propsItem}</div>
    </>
  );
}
