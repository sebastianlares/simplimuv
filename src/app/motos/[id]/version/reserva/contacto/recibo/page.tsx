import { getAccesories } from "@/common/lib";
import { fetchAllAccessories, fetchMotorcycleById } from "@/services";
import { parseData, parseMotorcycle } from "@/services/dto";
import Divider from "@/common/components/Divider";
import LinkButton from "@/common/components/LinkButton";
import ReciptCard from "@/common/components/ReciptCard";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string; email: string; phone: string };
}) {
  const motorcycle = parseMotorcycle(await fetchMotorcycleById(params.id));
  const accesories = parseData(await fetchAllAccessories());

  const { email, phone } = searchParams;

  const { name, details } = motorcycle;

  return (
    <main className="mt-10 mb-24 flex flex-col items-center justify-center">
      <ReciptCard>
        <p className="text-h5 font-bold color-primary">Reservation Details</p>
        <Divider mb="mb-3" mt="mt-3" />
        <div>
          <p className="text-h6 font-bold text-primary mb-3">{name}</p>
          <p className="text-p text-gray-primary leading-none max-w-[80%]">
            {details.motor}
          </p>
          <p className="text-p text-gray-primary leading-none">{details.power}</p>
          <Divider mb="mb-3" mt="mt-3" />
          <p className="text-h6 font-bold text-primary">Accesories</p>
          {getAccesories(accesories, searchParams).map((accesory) => (
            <p key={accesory.id} className="text-p text-gray-primary leading-none">
              {accesory.name}
            </p>
          ))}
          <Divider mb="mb-3" mt="mt-3" />
          <p className="text-h6 font-bold text-primary">Customer Contact Information</p>
          <p className="text-p text-gray-primary leading-none">{searchParams.name}</p>
          <p className="text-p text-gray-primary leading-none">{email}</p>
          <p className="text-p text-gray-primary leading-none">{phone}</p>
          <Divider mb="mb-20" mt="mt-3" />
          <Divider />
        </div>
        <div className="flex w-full justify-center">
          <SuspenseWrapper>
            <LinkButton
              clearParams={true}
              content="Back to store"
              href="/motos"
              w="w-[160px]"
            />
          </SuspenseWrapper>
        </div>
      </ReciptCard>
    </main>
  );
}
