const FeaturedMealCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-6 animate-pulse">
      <div className="h-52 w-full rounded-2xl bg-gray-200 md:h-[200px]" />
      <div className="flex items-start justify-between gap-x-4">
        <div className="flex gap-x-3">
          <div className="h-16 w-16 shrink-0 rounded-lg bg-gray-200" />
          <div className="flex flex-1 flex-col gap-y-2">
            <div className="h-5 w-32 rounded bg-gray-200" />
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded bg-gray-200" />
              <div className="h-4 w-8 rounded bg-gray-200" />
            </div>
          </div>
        </div>
        <div className="h-6 w-6 rounded bg-gray-200" />
      </div>
      <div>
        <div className="h-10 w-20 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
};

export default FeaturedMealCardSkeleton;
