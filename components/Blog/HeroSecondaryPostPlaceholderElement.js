const HeroSecondaryPostPlaceholderElement = ({ text }) => {
  return (
    <div className="grid h-[100%] grid-cols-[1fr] bg-white shadow-primary-shadow md:grid-cols-[auto_1fr]">
      <div className="hidden bg-gray-200 md:block md:aspect-square" />
      <div className="self-center p-4">
        <div className="border-l-[2px] border-l-[#004bfa8e] pl-2">
          <h2 className="mb-1 text-[18px] font-bold opacity-40">{text}</h2>
          <div className="h-[14px] w-[100%] max-w-[200px] bg-gray-200 md:h-[18px]" />
        </div>
        <div className="mb-1 mt-3 h-[14px] w-[100%] bg-gray-200 md:h-[18px]" />
        <div className="h-[18px] w-[100%] bg-gray-200" />
      </div>
    </div>
  );
};

export default HeroSecondaryPostPlaceholderElement;
