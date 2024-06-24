const ColorBadge = ({ content, color }: { content: string; color?: string }) => {
  return (
    <div className="flex gap-2 border rounded-l-full rounded-r-full border-gray-300 pr-2 font-sf h-[fit-content] items-center">
      <div className={`rounded-full w-5 h-5`} style={{ backgroundColor: color }} />
      <p className="text-title text-gray-primary">{content}</p>
    </div>
  );
};

export default ColorBadge;
