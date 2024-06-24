import { fetchAccesoryById } from "@/services";
import { parseAccesory } from "@/services/dto";
import Carousel from "@/common/components/Carousel";
import LinkButton from "@/common/components/LinkButton";
import Breadcrumbs from "@/common/components/NavigationBreadcrumbs";
import Divider from "@/common/components/Divider";
import Counter from "@/common/components/Accesory/Counter";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page({ params }: { params: { id: string } }) {
  const accesory = parseAccesory(await fetchAccesoryById(params.id));

  const { name, price, images, currency, seller } = accesory;

  return (
    <div className="min-h-[600px] mt-10 mb-10">
      <SuspenseWrapper>
        <Breadcrumbs currentPath={name} />
      </SuspenseWrapper>
      <div className="flex gap-5">
        <section className="flex flex-col items-center w-[644px]">
          <Carousel
            alt="Imagen de moto en carousel"
            height={300}
            images={images}
            width={560}
          />
        </section>
        <section className="w-[445px]">
          <h1 className="text-h4 font-bold text-primary leading-none">{name}</h1>
          <p className="text-h5 text-primary font-bold mb-6">
            {currency} &nbsp; {price}
          </p>
          <p className="text-p text-gray-primary mb-6">{seller}</p>
          <p className="text-p font-bold text-primary">Quantity:</p>
          <SuspenseWrapper>
            <Counter />
          </SuspenseWrapper>
          <Divider />
          <SuspenseWrapper>
            <LinkButton content="Siguiente" href={`/accesorios/${params.id}/recibo`} />
          </SuspenseWrapper>
        </section>
      </div>
    </div>
  );
}
