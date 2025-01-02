const Banner = () => {
    return (
        <div className="container mt-32">
            <div className="grid lg:grid-cols-[66%, 34%] gap-4 pr-[15px]">
                <img className="" width={500} style={{float:'left'}} src="/anime.jpg" alt="result" />
                <div className="h-[200px] md:h-[260px] bg-cover bg-center rounded-xl p-8 md:p-16">
                    <p className="text-topHeadingSecondary text-xl font-medium">pembelian pertama dapat potongan $2</p>
                    <h2 className="text-topHeadingPrimary font-bold text-xl sm:text-3xl max-w-[240px]">Case HP Iphone custom desaign</h2>
                    <a className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium" href="#">Beli sekarang</a>
                </div>
                <img className="" width={500} style={{float:'right'}} src="/botol.jpg" alt="result" />
                <div className="h-[260px] bg-right rounded-xl hidden lg:block">
                    <p className="text-topHeadingSecondary text-xl font-medium">pembelian pertama dapat potongan $3</p>
                    <h2 className="text-topHeadingPrimary font-bold text-xl sm:text-3xl max-w-[240px]">Tumbler custom desaign</h2>
                    <a className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium" href="#">Beli sekarang</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;