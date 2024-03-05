import item1 from '../../../assets/home/item1.png'
import item2 from '../../../assets/home/item2.png'
import item3 from '../../../assets/home/item3.png'
import item4 from '../../../assets/home/item4.png'
import item5 from '../../../assets/home/item5.png'
import item6 from '../../../assets/home/item6.png'
import item7 from '../../../assets/home/item7.png'
import item8 from '../../../assets/home/item8.png'
import item9 from '../../../assets/home/item9.png'
import item10 from '../../../assets/home/item10.png'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const images = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10]
const Items = () => {
    return (
        <div className='mt-32'>
            <SectionTitle heading="Our Gallery" subHeading="What Foods We Provide!" ></SectionTitle>
            <div data-aos="zoom-in" data-aos-duration="1000" className="grid lg:grid-cols-5 mt-12 mb-16 md:grid-cols-3 sm:grid-cols-2 gap-5 max-w-screen-xl mx-auto">
            {images.map((img, index) => <div key={index}>
                <img className='rounded-xl transition-transform hover:scale-105' src={img} alt="" />
            </div> )}
        </div>
        </div>
    );
};

export default Items;