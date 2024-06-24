import React from "react";

import Filters from "@/common/components/ProductFilters";

const loading = () => {
  return (
    <div className="mt-6">
      <Filters />
      <div className="grid sm:grid-cols-2 gap-6 mb-16 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex animate-pulse h-[320px] w-[250px] bg-gray-300 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default loading;
