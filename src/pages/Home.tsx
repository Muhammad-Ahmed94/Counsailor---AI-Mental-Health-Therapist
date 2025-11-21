import Navbar from "../components/Navbar";

const Home = () => {
    const icons = ["vector", "vector-1", "vector-2", "vector-3"];

    return (
        <div className="min-h-screen w-full bg-[#FCF8F4]">
            <Navbar />
            <main className="border border-green-500">
                <div className="flex justify-between items-center mx-8">
                    <div className="flex flex-col gap-4 mb-4">
                        <h1 className="text-4xl capitalize font-semibold">healthy mind, happy life, <span className="text-orange-primary">mental health</span>consultancy</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab, qui praesentium repellendus quaerat facere.</p>
                        <button className="btn">Get Started</button>

                        <div className="flex justify-between gap-2 ">
                            {icons.map((icon) => (
                            <img key={icon} src={`/${icon}.png`} alt="icons" height={12} width={12} />
                        ))}
                        </div>
                    </div>
                    <div className="">
                        <img src="/hero-image.png" alt="hero-image" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home