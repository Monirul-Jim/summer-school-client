import loader from '../../assets/loader3.gif'
const Loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen text-4xl'>
                <img src={loader} alt="" />
            </div>
        </div>
    );
};

export default Loader;