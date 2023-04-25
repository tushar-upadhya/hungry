import { social } from "../data/data";

const Footer = () => {
    return (
        <footer className="text-center sm:text-xl lg:py-4">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-6 lg:flex-row items-center justify-between">
                    {/* copyright */}
                    <div>
                        &copy;{new Date().getFullYear()} All Rights Reserved ||
                        Designed and Coded by{" "}
                        <a
                            className="text-gray-800 font-bold hover:text-orange-600 transition-all hover:text- duration-300 "
                            href="https://tusharupadhyay.vercel.app/"
                        >
                            Tushar Upadhyay
                        </a>{" "}
                    </div>

                    {/* socials */}
                    <div className="flex gap-x-2">
                        {social.map((item, index) => {
                            return (
                                <a href={item.href} target="_blank" key={index}>
                                    <div className="bg-orange-400/50 text-black/80 hover:bg-orange-400 hover:text-white w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 text-2xl ">
                                        {item.icon}
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
