import Image from "next/image";
import QrCodeImage  from "../public/images/image-qr-code.png"

const Home = () => {
    return (
        <main className="bg-blue-100">
            <section className="flex justify-center mt-20">
                <div className="w-[300px] h-[480px] bg-white border-none rounded-2xl">
                <div className="">
                    <div className="w-[265px] h-[260px] border-none rounded-lg relative overflow-hidden mx-auto mt-5">
                        <Image alt="qr-code" layout="fill" objectFit='cover' src={QrCodeImage} />
                    </div>
                    <div className="flex justify-center mt-6 mx-6">
                        <h2 className="font-medium leading-6 break-normal text-dark-blue text-[17px] text-center font-sans header_text">
                            Improve your front-end skills by building projects
                        </h2>
                    </div>
                    <div className="flex justify-center mt-4 mx-2">
                        <small className="font-normal w-[235px] break-words text-center leading-5 text-opacity-10 font-sans">
                            Scan the QR code to visit Frontend mentor and take your coding skills to 
                            the next level
                        </small>
                    </div>
                </div>
             </div>
          </section>

        </main>

  )
}

export default Home;
