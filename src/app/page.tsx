import LinkButton from "@/common/components/LinkButton";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Home() {
  return (
    <div className="w-full h-[600px] flex justify-center items-center gap-5">
      <SuspenseWrapper>
        <LinkButton content="MOTOS" href="/motos" w="w-[200px]" />
        <LinkButton content="ACCESORIOS" href="/accesorios" w="w-[200px]" />
      </SuspenseWrapper>
    </div>
  );
}
