interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-dark via-green-primary to-green-light py-20 md:py-28 lg:py-32">
      {/* Decorative organic curve SVG */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2 opacity-10"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M300,50 C450,100 480,250 400,350 C320,450 500,480 500,500 L500,0 Z"
          fill="white"
        />
        <ellipse
          cx="380"
          cy="250"
          rx="180"
          ry="200"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="container-custom relative z-10">
        <div className="flex items-stretch gap-6">
          {/* Left accent bar */}
          <div className="w-1 shrink-0 rounded-full bg-white/60" />

          {/* Content */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
