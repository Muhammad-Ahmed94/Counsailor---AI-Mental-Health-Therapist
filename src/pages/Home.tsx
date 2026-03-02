import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <main className="container-custom pt-8 md:pt-16 pb-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-text-primary">
                            Healthy Minds, Happy Lives <br />
                            <span className="text-orange-primary">Mental Health</span> Consultancy
                        </h1>
                        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-lg">
                            Your mind deserves the same care as your body. Get instant, confidential AI-powered therapy — anytime, anywhere, on your terms.
                        </p>
                        
                        <div className="pt-2">
                            <button className="btn text-lg px-8 py-3">Get started</button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center md:justify-end">
                         {/* Decorative background circle/blob can be added here if needed, but keeping it clean for now */}
                        <img 
                            src="/hero.png" 
                            alt="Mental Health Consultancy Illustration" 
                            className="w-full max-w-lg md:max-w-full object-contain drop-shadow-sm transform hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home