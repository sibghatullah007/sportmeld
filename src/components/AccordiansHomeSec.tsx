import Image from 'next/image'
import Accordion from './AccordianComp'
const AccordiansHomeSec = () => {
    return (
        <div className=''>
            <div className="flex flex-wrap w-full items-end md:justify-between p-10">
                <div className="w-full md:px-2 py-2 md:w-1/2">
                    <h1 className="text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] f-medium">Safeguarding your finances digitally</h1>
                </div>
                <div className="w-full md:px-2 py-2 md:w-1/2 md:text-end">
                    <button className="bg-white text-black px-5 py-2 rounded-full">Learn More</button>
                </div>
            </div>
            <div className='flex flex-wrap px-10'>
                <div className='w-full lg:w-[40%]'>
                    <Accordion
                        question="Robust security with confidence"
                        answer="Advanced tokenization and encryption techniques to keep your digital assets impenetrably secure."
                    />
                    <Accordion
                        question="Streamlined transactions"
                        answer="Enjoy seamless and swift transactions with Block, simplifying your digital financial experience."
                    />
                    <Accordion
                        question="Universal compatibility"
                        answer="Block is compatible with a wide range of currencies and digital assets."
                    />
                    <Accordion
                        question="24/7 accessibility anywhere"
                        answer="Block ensures you have complete control over your financial destiny, whenever you need it."
                    />
                </div>
                <div className='w-full lg:w-[60%] lg:ps-6'>
                    <Image src="featured_image_with_accordion.svg" className='h-auto w-full' alt="image" height={100} width={100}/>
                </div>
            </div>
        </div>
    )
}

export default AccordiansHomeSec