import SsrComponent from "@/components/SsrComponent";
import CsrComponent from "@/components/CsrComponent";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <CsrComponent propsItem="CSRコンポーネントに対して、propsで渡している値" />

      <Suspense fallback={<p>Loading feed...</p>}>
        <SsrComponent propsItem="SSRコンポーネントに対して、propsで渡している値" />
      </Suspense>
    </>
  );
}
