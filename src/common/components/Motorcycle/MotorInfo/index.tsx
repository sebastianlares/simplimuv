const MotorInfo = ({
  name,
  details,
}: {
  name?: string;
  details: { motor: string; power: string };
}) => {
  return (
    <>
      {name ? <h5 className="text-primary text-h5 font-bold mb-3">{name}</h5> : null}
      <p className="text-gray-primary text-p">{details.motor}</p>
      <p className="text-gray-primary text-p">{details.power}</p>
    </>
  );
};

export default MotorInfo;
