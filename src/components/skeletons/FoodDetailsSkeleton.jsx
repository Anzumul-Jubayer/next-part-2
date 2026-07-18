const FoodDetailsSkeleton = () => {
  return (
    <section className="mx-auto max-w-6xl animate-pulse px-5 py-12">
      <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2">

        {/* Image */}
        <div className="h-[500px] rounded-2xl bg-gray-200"></div>

        {/* Content */}
        <div className="space-y-6">

          <div className="h-8 w-28 rounded-full bg-gray-200"></div>

          <div className="h-10 w-3/4 rounded bg-gray-200"></div>

          <div className="space-y-4">
            <div className="h-6 w-1/2 rounded bg-gray-200"></div>
            <div className="h-6 w-2/3 rounded bg-gray-200"></div>
            <div className="h-6 w-1/3 rounded bg-gray-200"></div>
            <div className="h-8 w-24 rounded bg-gray-200"></div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-40 rounded-xl bg-gray-200"></div>
            <div className="h-12 w-40 rounded-xl bg-gray-200"></div>
          </div>

          <div className="h-5 w-36 rounded bg-gray-200"></div>

        </div>

      </div>
    </section>
  );
};

export default FoodDetailsSkeleton;