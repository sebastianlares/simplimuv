import React from "react";

const Divider = ({
  mt = "mt-2",
  mb = "mb-3",
  w = "w-full",
}: {
  mt?: string;
  mb?: string;
  w?: string;
}) => {
  return <hr className={`"bg-gray-secondary ${mt} ${mb} ${w}`} />;
};

export default Divider;
