import React from 'react';
import { RedirectCard } from './components/RedirectCard';
import { HelpCard } from './components/HelpCard';
import { HEADER_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 relative font-sans flex flex-col items-center justify-center p-4">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-50 via-white to-slate-50 pointer-events-none" />

      <main className="relative z-10 w-full max-w-md flex flex-col gap-6">
        
        {/* The Auto-Redirect Card */}
        <RedirectCard />

        {/* Optional: Help Card in case redirect fails or user needs ID manually */}
        <div>
           <HelpCard />
        </div>

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="text-slate-400 text-xs font-medium">
            {HEADER_INFO.footer}
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;