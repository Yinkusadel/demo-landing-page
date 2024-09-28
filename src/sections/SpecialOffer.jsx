import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse  gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full rounded-lg"
        />
      </div>

      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-blue"> Special</span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Unlock incredible savings with our exclusive 30% discount on all import and export services!</p>
        <p className="mt-6 lg:max-w-lg info-text">Whether you’re looking to streamline your logistics or expand your market reach, now is the perfect time to take advantage of our fast and reliable services.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Book Now" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer