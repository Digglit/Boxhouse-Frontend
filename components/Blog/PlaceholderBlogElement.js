const PlaceholderBlogElement = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] bg-white shadow-primary-shadow">
      <div className="aspect-square bg-[#eeeeee]" />
      <div className="p-4">
        <div className="mb-2 border-l-[2px] border-l-[#004BFA50] pl-2">
          <h2 className="text-[20px] font-medium opacity-50">
            Post Coming Soon
          </h2>
          <div className="h-[14px] w-[120px] bg-[#eeeeee]" />
        </div>
        <div className="mb-1 h-[14px] w-[100%] bg-[#eeeeee]" />
        <div className="h-[14px] w-[100%] bg-[#eeeeee]" />
      </div>
    </div>
  );
};

export default PlaceholderBlogElement;
