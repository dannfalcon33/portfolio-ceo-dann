import React, { useEffect, useState } from "react";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before unmounting
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30); // Adjust speed here

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-700">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-widest uppercase">
          Dann Falcon
        </h1>

        {/* Loading Bar */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
