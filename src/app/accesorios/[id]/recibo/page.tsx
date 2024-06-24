import { fetchAccesoryById } from "@/services";
import { parseAccesory } from "@/services/dto";
import Divider from "@/common/components/Divider";
import LinkButton from "@/common/components/LinkButton";
import ReciptCard from "@/common/components/ReciptCard";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { amount: string };
}) {
  const accesory = parseAccesory(await fetchAccesoryById(params.id));
  const { amount } = searchParams;
  const { name, price, currency } = accesory;
  const totalAmount = Number(amount) * Number(price);

  return (
    <main className="mt-10 mb-24 flex flex-col items-center justify-center">
      <ReciptCard>
        <p className="text-h5 font-bold color-primary">Resumen de tu compra</p>
        <Divider mb="mb-3" mt="mt-3" />
        <div>
          <p className="text-h6 font-bold text-primary mb-3">Productos</p>
          <div className="flex justify-between">
            <p className="text-p text-gray-primary leading-none max-w-[80%]">
              {name} x ({amount})
            </p>
            <p className="text-p text-gray-primary leading-none">
              {currency}${totalAmount}
            </p>
          </div>
          <Divider mb="mb-3" mt="mt-3" />
          <p className="text-h6 font-bold text-primary mb-3">Detalle del pago</p>
          <p className="text-p text-gray-primary leading-none max-w-[80%]">
            Método de pago: Tarjeta de crédito/débito
          </p>
          <Divider mb="mb-3" mt="mt-3" />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-p text-gray-primary leading-none max-w-[80%]">
                Subtotal
              </p>
              <p className="text-p text-gray-primary leading-none">
                {currency}${totalAmount}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-p text-gray-primary leading-none max-w-[80%]">Envío</p>
              <p className="text-p text-gray-primary leading-none">Gratis</p>
            </div>
            <div className="flex justify-between">
              <p className="text-p text-primary font-bold leading-none max-w-[80%]">
                Total
              </p>
              <p className="text-p text-primary leading-none font-bold ">
                {currency}${totalAmount}
              </p>
            </div>
          </div>
        </div>
        <Divider mb="mb-8" mt="mt-4" />
        <div className="flex w-full justify-center">
          <SuspenseWrapper>
            <LinkButton
              clearParams={true}
              content="Back to store"
              href="/home"
              w="w-[160px]"
            />
          </SuspenseWrapper>
        </div>
      </ReciptCard>
    </main>
  );
}
