import React, { useState } from 'react';
import { Shield, Eye, Lock } from 'lucide-react';

const PhotoReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const handleDecrypt = () => {
    setIsDecrypting(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsDecrypting(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-8 shadow-glow">
          <h2 className="text-2xl font-bold mb-8 text-matrix-green font-hacker">
            IDENTITY VERIFICATION
          </h2>

          <div className="relative w-64 h-64 mx-auto mb-8">
            {!isRevealed ? (
              <div className="w-full h-full bg-matrix-gray border-2 border-matrix-green/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                {isDecrypting ? (
                  <div className="absolute inset-0 bg-matrix-green/20 animate-decrypt">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-matrix-green animate-pulse">
                        DECRYPTING...
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Shield size={48} className="mx-auto mb-4 text-matrix-green/50" />
                    <div className="text-xs text-matrix-green/70 space-y-1">
                      <div>ENCRYPTED</div>
                      <div>DATA PROTECTED</div>
                      <div>256-BIT SECURITY</div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full rounded-lg overflow-hidden animate-decrypt">
                <img
                  src="/rahul.webp"
                  alt="Nk Alam - Full Stack Developer"
                  className="w-full h-full object-cover border-2 border-matrix-green shadow-matrix"
                />
              </div>
            )}
          </div>

          {!isRevealed ? (
            <button
              onClick={handleDecrypt}
              disabled={isDecrypting}
              className="bg-matrix-green text-matrix-black px-8 py-3 rounded font-bold hover:bg-matrix-darkGreen transition-all duration-300 disabled:opacity-50 flex items-center space-x-2 mx-auto"
            >
              {isDecrypting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-matrix-black"></div>
                  <span>DECRYPTING...</span>
                </>
              ) : (
                <>
                  <Eye size={20} />
                  <span>DECRYPT IDENTITY</span>
                </>
              )}
            </button>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-matrix-green">NK ALAM</h3>
              <p className="text-matrix-green/80">Elite Full Stack Developer</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-matrix-green/60">
                <span>🇮🇳 Based in India</span>
                <span>•</span>
                <span>5+ Years Experience</span>
                <span>•</span>
                <span>Available for Hire</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoReveal;