
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <h2 className="text-4xl font-bold text-red-500">
          Food Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={food.foodImg}
            alt={food.title}
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">

          <div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              {food.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-800">
            {food.title}
          </h1>

          <div className="space-y-3 text-lg">

            <p>
              <span className="font-semibold">Food ID:</span>{" "}
              {food.id}
            </p>

            <p>
              <span className="font-semibold">Category:</span>{" "}
              {food.category}
            </p>

            <p>
              <span className="font-semibold">Origin:</span>{" "}
              {food.area}
            </p>

            <p className="text-3xl font-bold text-orange-600">
              ${food.price}
            </p>

          </div>

          <div className="flex gap-4">

            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Watch Recipe
            </a>

            <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Add to Cart
            </button>

          </div>

          <Link
            href="/foods"
            className="mt-4 w-fit text-orange-600 hover:underline"
          >
            ← Back to Foods
          </Link>

        </div>
      </div>
    </section>
  );
};

export default FoodDetails;