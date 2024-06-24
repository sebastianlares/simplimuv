import Image from "next/image";

const ICONS_MAP: { [key: string]: string } = {
  motor: "/assets/icons/motor.svg",
  category: "/assets/icons/category.svg",
  height: "/assets/icons/height.svg",
};
const Icon = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col items-center py-2 px-2 border-r-[1px] rounded-md gap-1">
      <Image
        alt="icon"
        className="color-secondary"
        height={21}
        src={ICONS_MAP[title]}
        width={21}
      />
      <p className="text-title text-gray-secondary leading-none">{title}</p>
      <p className="text-title text-gray-primary leading-none">{value}</p>
    </div>
  );
};

export default Icon;
