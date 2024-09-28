import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-blue">Popular</span> Shipments
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">Our import and export trade services offer unparalleled speed and efficiency, ensuring your goods are delivered swiftly and safely across borders</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />

        ))}
      </div>
    </section>
  )
}

export default PopularProducts