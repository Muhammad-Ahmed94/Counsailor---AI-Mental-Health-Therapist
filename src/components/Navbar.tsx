const Navbar = () => {
    const navItems = ["Home", "About", "Services", "Pricing"];

  return (
    <header>
        <nav className="flex flex-col justify-center gap-2">
            <div className="flex justify-between items-center mt-4 mx-8">
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <button id="#">
                        <img src="/logo.svg" alt="logo-image" height={32} width={32}/>
                    </button>
                    <h1 className="text-3xl font-semibold tracking-wide">Counsailor</h1>
                </div>
                {/* NAV-ITEMS */}
                <div className="flex-center gap-4">
                    {navItems.map((item) => (
                        <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        className=""
                        >
                            {item}
                        </a>
                    ))}
                </div>
                    {/* ONBOARDING-BUTTON */}
                <div>
                    <button className="btn">Get started</button>
                </div>
            </div>
            <div></div>

        </nav>
    </header>
  )
}

export default Navbar