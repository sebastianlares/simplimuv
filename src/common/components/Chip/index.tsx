const Chip = ({ content }: { content: string }) => (
  <div className="w-fit min-w-[45px] h-[26px] bg-terciary py-1 px-[6px] rounded-[3px] absolute top-[12px] left-[12px] flex justify-center items-center">
    <p className=" text-title text-center  text-secondary leading-none">{content}</p>
  </div>
);

export default Chip;
