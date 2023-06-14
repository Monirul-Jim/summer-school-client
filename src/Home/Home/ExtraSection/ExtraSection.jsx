import childPicture from '../../../assets/child.jpg'
const ExtraSection = () => {
    return (
        <div>
            <div className="hero min-h-screen dark light ">
                <div className="hero-content flex-col  lg:flex-row">
                    <img className='w-3/6' src={childPicture} />
                    <div className='w-3/6'>
                        <h1 className="text-5xl font-bold">About Our Care</h1>
                        <p className="py-6">Welcome to our child gym! We believe in the importance of physical activity and its positive impact on children's development. Our gym provides a safe and fun environment for kids to engage in various physical activities, including dance. Dancing not only brings joy and relaxation but also enhances coordination, rhythm, and self-expression. Our experienced instructors encourage children to explore their love for dance and participate in dance competitions. We are proud to have nurtured talented young dancers who have achieved success in their performances. If you want to learn more about our programs and how your child can benefit from them, click the button below.</p>
                        <button className="btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ExtraSection;