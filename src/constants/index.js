
import { facebook, instagram, shieldTick, support, truckFast, twitter, whatsapp } from "../assets/icons";
import { cargoShip1, cargoShip2, cargoShip3, customer1, customer2, kpomo1, kpomo2, kpomo3, kpomo4, thumbnailcargo1, thumbnailcargo2, thumbnailcargo3, } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const ships = [
    {
        thumbnail: thumbnailcargo1,
        bigShip: cargoShip1,
    },
    {
        thumbnail: thumbnailcargo2,
        bigShip: cargoShip2,
    },
    {
        thumbnail: thumbnailcargo3,
        bigShip: cargoShip3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Products' },
    { value: '500+', label: 'deliveries' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: kpomo1,
        name: "kpomo raw 1kg",
        price: "#3,500.20",
    },
    {
        imgURL: kpomo2,
        name: "kpomo raw 2kg",

        price: "#6,000.20",
    },
    {
        imgURL: kpomo3,
        name: "kpomo raw 3kg",
        price: "#10,500.20",
    },
    {
        imgURL: kpomo4,
        name: "kpomo raw 4kg",
        price: "#12,500.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Fast shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Sikiru Lanre',
        rating: 4.5,
        feedback: "Best logistics provider I've used! Quick shipments and competitive pricing—my go-to for all my needs!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Super fast delivery and affordable rates! Highly recommend this logistics company for great service!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Kpomo", link: "/" },
            { name: "Fish", link: "/" },
            { name: "Electronics", link: "/" },
            { name: "Creals", link: "/" },
            { name: "Rice", link: "/" },
            { name: "Beans", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@Nimtim.com", link: "mailto:adeleyeolayinka73@@gmail.com" },
            { name: "+2348026021597", link: "tel:+2348026021597" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", medialink: "https://www.facebook.com" },
    { src: twitter, alt: "twitter logo", medialink: "https://x.com/HashiraAdel" },
    { src: instagram, alt: "instagram logo", medialink: "https://www.instagram.com" },
    { src: whatsapp, alt: "whatsapp logo", medialink: "https://wa.me/message/IAMVDND2BYVGN1" },
];

