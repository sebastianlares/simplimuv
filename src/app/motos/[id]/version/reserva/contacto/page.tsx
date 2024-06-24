import { fetchAllAccessories, fetchMotorcycleById } from "@/services";
import { parseData, parseMotorcycle } from "@/services/dto";
import Carousel from "@/common/components/Carousel";
import PriceInfo from "@/common/components/Motorcycle/PriceInfo";
import MotorInfo from "@/common/components/Motorcycle/MotorInfo";
import ContactForm from "@/modules/ContactForm";
import Breadcrumbs from "@/common/components/NavigationBreadcrumbs";
import Divider from "@/common/components/Divider";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: URLSearchParams;
}) {
  const motorcycle = parseMotorcycle(await fetchMotorcycleById(params.id));
  const accesories = parseData(await fetchAllAccessories());

  const accesoriesId = () => {
    const params = new URLSearchParams(searchParams);

    const accesoriesId = accesories.map((acc) => acc.id).filter((id) => params.has(id));

    return accesoriesId;
  };

  const { name, details, price, installmentPrice, images } = motorcycle;

  return (
    <div className="min-h-[800px] mt-10 mb-10">
      <SuspenseWrapper>
        <Breadcrumbs currentPath="Contacto" removePath={params.id} />
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
          <p className="text-h5 font-bold text-primary mb-4">Ingresá tus datos</p>
          <SuspenseWrapper>
            <ContactForm accesoriesId={accesoriesId()} motoId={details.id} />
          </SuspenseWrapper>
        </section>
      </div>
    </div>
  );
}
