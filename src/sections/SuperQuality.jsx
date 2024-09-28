import { ship8, shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-blue"> Super</span>
          <span className="text-coral-blue"> Fast</span> delivery
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">At Nimtim, we pride ourselves on offering super fast delivery services that keep your business moving. Whether you're importing or exporting, our streamlined logistics ensure your shipments arrive on time, every time..</p>
        <p className="mt-6 lg:max-w-lg info-text">Your Goods are Delivered in a Flash!</p>
        <div className="mt-11 ">
          <Button label="View details" />
        </div>
      </div>


      <div className="flex-1 flex justify-center items-center">
        <img 
        src={ship8}
        alt="ship"
        className="object-contain rounded-lg"
        />
      </div>
    </section>
  )
}

export default SuperQuality