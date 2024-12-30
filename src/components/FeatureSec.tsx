import Image from "next/image"

const FeatureSec = () => {
    return (
        <div className='flex items-center justify-around flex-wrap bg-neutral-950 rounded-lg py-16  my-20 px-8'>
            <div className="flex gap-4 items-center  justify-center md:justify-center w-full md:w-[31%]">
                <div>
                    <Image src={"featured_card_image.svg"} height={70} width={70} alt={"icon"} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-2xl text-zinc-600 font-bold text-wrap">
                        Match Metrics Calculation
                    </div>
                    <div className="text-zinc-500">
                        Possession Time,
                    </div>
                </div>
            </div>
            <div className="h-full w-[2px] py-6 bg-zinc-700 hidden md:block"></div>
            <div className="w-[80%] h-[2px] px-6 bg-zinc-700 block md:hidden my-4"></div>
            <div className="flex gap-4 items-center  justify-center md:justify-center w-full md:w-[31%]">
                <div>
                    <Image src={"featured_card_image.svg"} height={70} width={70} alt={"icon"} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-2xl text-zinc-600 font-bold text-wrap">
                        Player Tracking
                    </div>
                    <div className="text-zinc-500">
                        Travel agencies and airlines
                    </div>
                </div>
            </div>
            <div className="h-full w-[2px] py-6 bg-zinc-700 hidden md:block"></div>
            <div className="w-[80%] h-[2px] px-6 bg-zinc-700 block md:hidden my-4"></div>
            <div className="flex gap-4 items-center  justify-center md:justify-center w-full md:w-[31%]">
                <div>
                    <Image src={"featured_card_image.svg"} height={70} width={70} alt={"icon"} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-2xl text-zinc-600 font-bold text-wrap">
                        Formation Recognition
                    </div>
                    <div className="text-zinc-500">
                        Tech savvy generation
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSec