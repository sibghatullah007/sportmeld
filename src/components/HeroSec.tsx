const HeroSec = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8 h-full'>
            <div>
                <div className="inline-block text-xs rounded-full p-[1px] bg-gradient-to-r from-pink-500 to-orange-400">
                    <div className="bg-zinc-900 rounded-full p-1 px-2">
                        Sportmeld analytics
                    </div>
                </div>

            </div>
            <div>
                <h1 className="text-center text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[80px] font-medium tracking-[-0.48px]">
                    Master the Game,
                    <br />
                    Master the court
                </h1>
            </div>
            <div className="max-w-[576px] mx-auto px-4">
                <p className="text-[16px] text-center text-neutral-400 leading-[24px] sm:text-[18px] sm:leading-[28px] sm:font-normal sm:tracking-[-0.08px]">
                    Block stands as your fortress, safeguarding your digital wealth with the latest advancements in technology.
                </p>
            </div>
            <div>
                <button className="rounded-full text-center bg-white text-black p-2 px-4">
                    Get Stated Now &nbsp; &gt;
                </button>
            </div>
        </div>
    )
}

export default HeroSec