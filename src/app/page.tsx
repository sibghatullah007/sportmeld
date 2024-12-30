import CompSec from "@/components/CompSec";
import FeatureSec from "@/components/FeatureSec";
import Header from "@/components/Header";
import HeroSec from "@/components/HeroSec";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="">
          <Header />
        </div>
        <div className="h-[80%]">
          <HeroSec />
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <Image
          src="/gradient_home_left.webp"
          className="absolute -bottom-[20] w-[30%] left-0 object-cover z-0"
          alt="left"
          layout="intrinsic"
          width={500}
          height={500}
          draggable={false}
        />
        <Image src={'sample_dashboard.svg'} height={600} width={800} alt="Sample Dashboard" className="w-[90%] z-20 relative" draggable={false} />
        <Image
          src="/gradient_home_right.webp"
          className="absolute -bottom-[20] w-[30%] right-0 object-cover z-0"
          alt="right"
          layout="intrinsic"
          width={500}
          height={500}
          draggable={false}
        />
      </div>
      <div>
        <FeatureSec />
      </div>
      <div>
        <CompSec />
      </div>
    </>
  );
}
