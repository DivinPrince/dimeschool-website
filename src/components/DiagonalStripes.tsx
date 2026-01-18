export default function DiagonalStripes() {
  return (
    <div className="h-12 w-full overflow-hidden border-y border-border bg-background">
      <svg 
        className="w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="diagonalStripes" 
            patternUnits="userSpaceOnUse" 
            width="10" 
            height="10"
            patternTransform="rotate(45)"
          >
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="10" 
              className="stroke-border" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalStripes)" />
      </svg>
    </div>
  );
}
