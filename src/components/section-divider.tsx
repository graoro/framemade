export function SectionDivider() {
  return (
    <div className="relative w-full py-16 px-6 flex justify-center z-10">
      <div className="w-full max-w-6xl">
        {/* 3D Line Effect */}
        <div className="relative h-px">
          {/* Main line with gradient */}
          <div 
            className="absolute inset-0 w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)',
            }}
          />
          
          {/* Top highlight for 3D effect */}
          <div 
            className="absolute -top-px w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 20%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 80%, transparent 100%)',
            }}
          />
          
          {/* Bottom shadow for depth */}
          <div 
            className="absolute top-px w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)',
            }}
          />
          
          {/* Subtle glow effect */}
          <div 
            className="absolute -top-0.5 w-full h-1 blur-sm opacity-60"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.02) 20%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.02) 80%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}