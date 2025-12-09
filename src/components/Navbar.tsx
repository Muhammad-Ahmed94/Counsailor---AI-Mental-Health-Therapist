const Navbar = () => {
    const navItems = ["Home", "About", "Services", "Page"];

  return (
    <header className="py-6">
        <nav className="container-custom flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center gap-2">
                <div className="text-green-primary">
                     {/* Using a simple SVG icon for the logo as implied by the design or just the text if image fails */}
                     <img src="/logo.svg" alt="Mindfulcare Logo" className="w-8 h-8" /> 
                </div>
                <h1 className="text-2xl font-bold text-text-primary tracking-tight">Counsailor</h1>
            </div>

            {/* NAV-ITEMS */}
            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-text-primary hover:text-orange-primary font-medium transition-colors"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Getting started button */}
            <div>
                <button className="btn">Get started</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar