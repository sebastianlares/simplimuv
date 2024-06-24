import { fetchAllAccessories } from "@/services";
import { parseData } from "@/services/dto";
import Filters from "@/common/components/ProductFilters";
import Card from "@/common/components/Accesory/Card";
import SuspenseWrapper from "@/common/components/SuspenseWrapper";

export default async function Page() {
  const data = parseData(await fetchAllAccessories());

  return (
    <div className="mt-6">
      <Filters />
      <div className="grid sm:grid-cols-2 gap-6 mb-16 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {data.map((item) => (
          <SuspenseWrapper key={item.name}>
            <Card {...item} />
          </SuspenseWrapper>
        ))}
      </div>
      <div className="mb-16">
        <p className="text-center">PAGINATION</p>
      </div>
    </div>
  );
}
