export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      <p
        className="text-[#60a5fa] font-mono text-sm mb-4 animate-fade-in"
        style={{ animationDelay: '0.1s' }}
      >
        Full-Stack Developer
      </p>
      <h1
        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in"
        style={{ animationDelay: '0.25s' }}
      >
        Nawfal
        <br />
        Hassani
      </h1>
      <p
        className="text-[#a1a1aa] text-lg max-w-md mb-8 leading-relaxed animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        Building digital experiences that blend design and engineering.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-[#60a5fa] hover:bg-[#93c5fd] text-[#0a0a0a] font-medium px-6 py-3 rounded-full transition-colors w-fit animate-fade-in"
        style={{ animationDelay: '0.55s' }}
      >
        Get in Touch
      </a>
    </div>
  );
}
