"use client";

import { useState } from "react";

//メタデータ
export const metadata = {
  title: "ヘッダーで埋めているtitle",
  description: "説明文",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <html>
      <body>
        <div>layoutで埋めている部分</div>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <div>{children}</div>
      </body>
    </html>
  );
}
