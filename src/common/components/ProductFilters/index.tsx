const ProductFilters = () => {
  return (
    <div className="flex justify-between mb-6">
      <div className="flex gap-4">
        <div className="border border-gray-300 rounded-lg p-4">Categorias</div>
        <div className="border border-gray-300 p-4 rounded-lg">Precio</div>
      </div>
      <div className="border border-gray-300 p-4 rounded-lg">Orden</div>
    </div>
  );
};

export default ProductFilters;
