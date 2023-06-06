import coverChildren from '../../assets/girl1.png'
import coverChildren1 from '../../assets/robert-collins-tvc5imO5pXk-unsplash.jpg'
import coverChildren2 from '../../assets/istockphoto-1128887864-1024x1024.jpg'
import coverChildren3 from '../../assets/istockphoto-1423340535-1024x1024.jpg'
import coverChildren4 from '../../assets/istockphoto-926490058-1024x1024.jpg'

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='relative'>

                    <img src={coverChildren1} alt="" className='w-full h-full'/>
                </div>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                    <img src={coverChildren} className="h-64 w-96" />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={coverChildren2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={coverChildren3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={coverChildren4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;