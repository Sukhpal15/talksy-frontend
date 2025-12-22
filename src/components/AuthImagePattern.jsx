const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      {/* Very subtle decorative lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_currentColor_1px,_transparent_0)] bg-[size:24px_24px]" />

      <div className="max-w-md text-center relative z-10">
        {/* Soft grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[...Array(130)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-2 rotate-[-20deg] rounded-full bg-primary shadow-[0_0_8px_rgba(0,0,0,0.15)] animate-softPulse"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-3 tracking-tight">{title}</h2>
        <p className="text-sm text-base-content/60 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
