interface OrnamentalDividerProps {
  className?: string;
}

const OrnamentalDivider = ({ className = '' }: OrnamentalDividerProps) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-wedding-gold" />
      <svg 
        viewBox="0 0 40 20" 
        className="w-10 h-5 text-wedding-gold animate-shimmer"
        fill="currentColor"
      >
        <path d="M20 0C20 0 25 8 30 10C25 12 20 20 20 20C20 20 15 12 10 10C15 8 20 0 20 0Z" />
        <circle cx="5" cy="10" r="3" />
        <circle cx="35" cy="10" r="3" />
      </svg>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-wedding-gold" />
    </div>
  );
};

export default OrnamentalDivider;
