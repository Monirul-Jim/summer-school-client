import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import UseMenu from "../../hooks/UseMenu/UseMenu";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [menu] = UseMenu()
    const testimonials = menu.filter(item => item.category === 'testimonials')
    return (
        <section>
            <div className="text-center mt-8">
                <h1>What Our Client Say</h1>
                <h3 className="text-5xl font-semibold">Testimonials</h3>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    testimonials.map(testimonial => <SwiperSlide
                        key={testimonial._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={testimonial.rating}
                                readOnly
                            />
                            <p className="py-8">{testimonial.description}</p>
                            <h3 className="text-2xl text-orange-400">{testimonial.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    )
};

export default Testimonials;