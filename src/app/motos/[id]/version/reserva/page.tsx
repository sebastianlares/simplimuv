import { fetchMotorcycleById } from "@/services";
import { parseMotorcycle } from "@/services/dto";
import Carousel from "@/common/components/Carousel";
import PriceInfo from "@/common/components/Motorcycle/PriceInfo";
import MotorInfo from "@/common/components/Motorcycle/MotorInfo";
import LinkButton from "@/common/components/LinkButton";
import Breadcrumbs from "@/common/components/NavigationBreadcrumbs";
import Divider from "@/common/components/Divider";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page({ params }: { params: { id: string } }) {
  const motorcycle = parseMotorcycle(await fetchMotorcycleById(params.id));
  const { name, details, price, installmentPrice, currency, images } = motorcycle;

  return (
    <div className="min-h-[800px] mt-10 mb-10">
      <SuspenseWrapper>
        <Breadcrumbs currentPath="Reserva" removePath={params.id} />
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
          <p className="text-h5 font-bold text-primary mb-4">Detalle de la cotización</p>
          <MotorInfo details={details} />
          <div className="flex justify-between mt-6 mb-2">
            <p className="text-h6 font-bold text-gray-primary">Precio</p>
            <p>
              {currency} {price}
            </p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-h6 font-bold text-gray-primary">Precio de reserva</p>
            <p>ARS 60.000</p>
          </div>
          <SuspenseWrapper>
            <LinkButton
              content="Reservar"
              href={`/motos/${params.id}/version/reserva/contacto`}
            />
          </SuspenseWrapper>
        </section>
      </div>
    </div>
  );
}
