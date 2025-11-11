const FeaturedMealCardSkeleton = () => {
  return (
    <div className="max-w-[357px] flex flex-col gap-y-6 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-2xl" />
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
          <div className="flex flex-col gap-y-2 flex-1">
            <div className="h-5 bg-gray-200 rounded w-32" />
            <div className="flex gap-x-2 items-center">
              <div className="w-4 h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-8" />
            </div>
          </div>
        </div>
        <div className="w-6 h-6 bg-gray-200 rounded" />
      </div>
      <div>
        <div className="h-10 w-20 bg-gray-200 rounded-2xl" />
      </div>
    </div>
  );
};

export default FeaturedMealCardSkeleton;
