import { copyrightSign } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              width={150}
              height={70}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-black sm:max-w-sm">
            Book with Nimtim today for your import and export needs! We also offer convenient pickup services right from your doorstep for seamless shipment of your goods.
          </p>
          <div className="flex items-center gap-5 mt-8 cursor-pointer">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center  w-12 h-12 bg-white rounded-full">
                <a href={icon.medialink} target="_blank">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-black font-montserrat text-2xl leading-normal font-medium mt-6">  {section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-black font-montserrat text-base leading-normal hover:text-blue-500 cursor-pointer" key={link.name}>
                    <a>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright... All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer