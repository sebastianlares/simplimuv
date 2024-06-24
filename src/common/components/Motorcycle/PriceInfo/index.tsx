const PriceInfo = ({
  name,
  price,
  installmentPrice,
}: {
  name: string;
  price: string;
  installmentPrice: string;
}) => {
  return (
    <>
      <h4 className="text-h4 font-bold text-primary">{name}</h4>
      <p className="text-h5 font-bold text-gray-primary">${price}</p>
      <p className="text-title text-gray-primary">O</p>
      <p className="text-h5 font-bold text-gray-primary">
        ${installmentPrice} Mensual por 12 meses.*
      </p>
    </>
  );
};

export default PriceInfo;
