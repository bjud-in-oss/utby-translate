import React, { useState, useEffect } from 'react';
import { APP_CONFIG, MEETING_CONFIG, TEXTS } from '../constants';
import { Pause, Play, ExternalLink } from 'lucide-react';

export const RedirectCard: React.FC = () => {
  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;
  const [timeLeft, setTimeLeft] = useState(APP_CONFIG.redirectDelaySeconds);
  const [isPaused, setIsPaused] = useState(isInIframe);

  useEffect(() => {
    if (isPaused) return;

    if (timeLeft === 0) {
      if (isInIframe) {
        window.open(MEETING_CONFIG.url, '_blank');
      } else {
        window.location.href = MEETING_CONFIG.url;
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPaused, isInIframe]);

  const togglePause = () => setIsPaused(!isPaused);

  const handleManualRedirect = () => {
    if (isInIframe) {
      window.open(MEETING_CONFIG.url, '_blank');
    } else {
      window.location.href = MEETING_CONFIG.url;
    }
  };

  const progressPercentage = (timeLeft / APP_CONFIG.redirectDelaySeconds) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl shadow-brand-900/5 p-8 w-full text-center border border-white/50 backdrop-blur-xl relative overflow-hidden">
        
        <h1 className="text-xl font-bold text-slate-800 mb-1">{MEETING_CONFIG.title}</h1>
        <p className="text-sm text-slate-500 mb-8">arrangeras av {MEETING_CONFIG.organizer}</p>

        {/* Minimal Progress Bar Area */}
        <div className="mb-8 w-full px-4">
          <div className="flex justify-between items-end mb-2">
             <span className="text-brand-600 font-medium text-sm animate-pulse">
              {isPaused ? TEXTS.paused : TEXTS.connecting}
            </span>
            <span className="text-xs text-slate-400 font-mono tabular-nums">
              {timeLeft} {TEXTS.seconds}
            </span>
          </div>
          
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-brand-500 rounded-full transition-all duration-1000 ease-linear ${isPaused ? 'opacity-50' : ''}`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3 justify-center">
            <button
              onClick={togglePause}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-50 text-brand-700 font-semibold hover:bg-brand-100 transition-colors border border-brand-100 text-sm"
            >
              {isPaused ? (
                <>
                  <Play className="w-4 h-4 fill-current" /> {TEXTS.resume}
                </>
              ) : (
                <>
                  <Pause className="w-4 h-4 fill-current" /> {TEXTS.cancel}
                </>
              )}
            </button>

            <button
              onClick={handleManualRedirect}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20 active:scale-[0.98] text-sm"
            >
              {TEXTS.manualLink} <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};