const Hero = () => {
    return (
        <div className="bg-[#E3EDf6] mt-4">
            <div className="countainer grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Mulai dari <span className="font-bold">$65</span>
                        </p>

                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                            Brand kaos terbaik dan terlaris pada 2024
                        </h1>
                        <h3 className="text-2xl font-['Oregano, cursive']">
                            Penawaran khusus <span className="text-red-600">-1%</span>pada minggu ini
                        </h3>

                        <a 
                        className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white"
                        href="#">
                            Beli sekarang
                        </a>
                    </div>
                </div>

                <div>
                    <img className="ml-auto" src="/baju.png" alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;