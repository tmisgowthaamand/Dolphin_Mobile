'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface FeaturedCarouselProps {
    products: Product[];
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
    return (
        <div className="w-full py-10 px-4 md:px-0">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full xl:max-w-6xl mx-auto"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index} className="max-w-[320px] md:max-w-[350px]">
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
