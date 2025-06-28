import { useState } from "react";
import { X } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";
import balajiImage from "@assets/balaji_1750707641456.png";
import anjaniImage from "@assets/anjani_1750707641455.jpg";
import lakshmiImage from "@assets/lakshmi_1750707641456.jpg";
import gokulamImage from "@assets/gokulam_1750707641456.jpg";
import sripadaImage from "@assets/sripada_1750707641458.jpg";
import sankarImage from "@assets/sankar_1750707641457.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../gallery-center.css"; // Custom CSS for grayscale effect

const galleryImages = [
    {
        src: balajiImage,
        alt: "Balaji Residency - 2 BHK apartments with modern design",
        title: "Balaji Residency",
    },
    {
        src: anjaniImage,
        alt: "Anjani Nivas - 3 BHK apartments with contemporary styling",
        title: "Anjani Nivas",
    },
    {
        src: lakshmiImage,
        alt: "Lakshmi Nilayam - Luxury plots for gated community",
        title: "Lakshmi Nilayam",
    },
    {
        src: gokulamImage,
        alt: "Gokulam - 3 BHK apartments with modern amenities",
        title: "Gokulam",
    },
    {
        src: sripadaImage,
        alt: "Sripada Enclave - Premium 3 BHK flats with luxury finishes",
        title: "Sripada Enclave",
    },
    {
        src: sankarImage,
        alt: "Sankar Nilayam - Spacious 3 BHK flats for families",
        title: "Sankar Nilayam",
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { theme } = useTheme();
    const { t } = useLanguage();

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
        ],
    };

    return (
        <section
            id="gallery"
            className={`py-20 ${
                theme === "dark"
                    ? "dark-theme-bg"
                    : "bg-gray-50 dark:bg-gray-900"
            }`}
        >
            <div className="container mx-auto px-4">
                <h2
                    className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
                        theme === "dark"
                            ? "text-white"
                            : "text-gray-800 dark:text-white"
                    }`}
                    data-aos="fade-up"
                >
                    {t("gallery.title")}{" "}
                    <span className="text-blue-500">
                        {t("gallery.highlight")}
                    </span>
                </h2>
                <p
                    className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Explore our stunning collection of architectural renders and project
                    imagery showcasing the beauty and elegance of Sankar Hill County.
                </p>

                {/* Carousel for all screens */}
                <Slider {...settings}>
                    {galleryImages.map((image, index) => (
                        <div key={index} className="px-2">
                            <div
                                className="relative overflow-hidden rounded-2xl premium-shadow card-hover group cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-contain bg-white image-hover-effect gallery-slide-img"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-6">
                                    <p className="text-white font-semibold text-lg">
                                        {image.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Image Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="relative max-w-md max-h-[90vh] overflow-auto">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Gallery Image"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}