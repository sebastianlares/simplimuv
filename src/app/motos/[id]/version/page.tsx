import { fetchAllAccessories, fetchMotorcycleById } from "@/services";
import { parseData, parseMotorcycle } from "@/services/dto";
import Carousel from "@/common/components/Carousel";
import VersionCard from "@/common/components/Motorcycle/VersionCard";
import LinkButton from "@/common/components/LinkButton";
import Accesory from "@/common/components/Motorcycle/Accesory";
import MotorInfo from "@/common/components/Motorcycle/MotorInfo";
import PriceInfo from "@/common/components/Motorcycle/PriceInfo";
import { getAccesories } from "@/common/lib";
import Breadcrumbs from "@/common/components/NavigationBreadcrumbs";
import Divider from "@/common/components/Divider";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { color: string };
}) {
  const motorcycle = parseMotorcycle(await fetchMotorcycleById(params.id));
  const accesories = parseData(await fetchAllAccessories());

  const { name, details, price, installmentPrice, images, color } = motorcycle;

  return (
    <div className="mt-10 mb-10">
      <SuspenseWrapper>
        <Breadcrumbs currentPath={name} removePath={params.id} />
      </SuspenseWrapper>
      <div className="flex gap-5">
        <section className="flex flex-col items-center w-[644px]">
          <Carousel
            alt="Imagen de moto en carousel"
            height={300}
            images={images}
            width={560}
          />
          <MotorInfo details={details} name={name} />
        </section>
        <section>
          <PriceInfo installmentPrice={installmentPrice} name={name} price={price} />
          <Divider />
          <p className="text-h5 font-bold text-primary">Elegí tu versión</p>
          <div className="mt-3 flex flex-col gap-3">
            <SuspenseWrapper>
              <VersionCard
                color={color}
                details={details}
                isActive={searchParams.color === color.name}
                name={name}
                price={price}
              />
              {/* 
                mock other variants
            */}
              <VersionCard
                color={{ name: "Negro", hex: "#000000" }}
                details={details}
                isActive={searchParams.color === "Negro"}
                name={name}
                price={price}
              />
              <VersionCard
                color={{ name: "Azul", hex: "#3263ed" }}
                details={details}
                isActive={searchParams.color === "Azul"}
                name={name}
                price={price}
              />
            </SuspenseWrapper>
          </div>
          <Divider mb="mb-5" mt="mt-5" />
          <details className="text-h5 font-bold text-primary">
            <summary className="cursor-pointer">Agregá accesorios</summary>
            <ul>
              {accesories.map((i) => (
                <SuspenseWrapper key={i.id}>
                  <Accesory id={i.id} name={i.name} price={i.price} />
                </SuspenseWrapper>
              ))}
            </ul>
          </details>
          <Divider mb="mb-5" mt="mt-5" />
          <div className="flex flex-col gap-2 mb-10">
            {getAccesories(accesories, searchParams).map((i) => (
              <div key={i.name} className="flex justify-between">
                <p>{i.name}</p>
                <div className="flex">
                  <p>
                    ${i.currency} {i.price}
                  </p>
                  &nbsp; x &nbsp;<p> {i.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <SuspenseWrapper>
            <LinkButton
              content="Siguiente"
              href={`/motos/${params.id}/version/reserva`}
            />
          </SuspenseWrapper>
        </section>
      </div>
    </div>
  );
}
