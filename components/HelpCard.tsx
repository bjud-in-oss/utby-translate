import React, { useState } from 'react';
import { MEETING_CONFIG, TEXTS } from '../constants';
import { Copy, Check, Info, Shield, Link, User, ChevronDown, ChevronUp } from 'lucide-react';

export const HelpCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedPasscode, setCopiedPasscode] = useState(false);

  const copyToClipboard = (text: string, setCopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-brand-100 w-full max-w-md mx-auto shadow-sm transition-all duration-300">
      <div 
        className="flex items-start gap-3 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Info className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
        <div className="flex-grow">
          <h3 className="font-semibold text-slate-800 text-sm">{TEXTS.helpTitle}</h3>
          {!isOpen && (
            <span className="text-xs text-brand-600 font-medium mt-1 block hover:underline">
              {TEXTS.toggleHelp}
            </span>
          )}
        </div>
        <div className="text-slate-400 mt-0.5">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            {TEXTS.helpInstruction}
          </p>

          <div className="space-y-3">
            {/* Zoom Link */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 group hover:border-brand-200 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <Link className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{TEXTS.zoomLinkLabel}</span>
                  <span className="text-sm font-semibold text-slate-700 truncate block">{MEETING_CONFIG.url}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(MEETING_CONFIG.url, setCopiedLink)}
                className="text-slate-400 hover:text-brand-600 transition-colors p-1 flex-shrink-0 ml-2"
                title={TEXTS.copy}
              >
                {copiedLink ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* User ID */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 group hover:border-brand-200 transition-colors">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{TEXTS.meetingIdLabel}</span>
                  <span className="text-sm font-mono font-bold text-slate-800 tracking-wider">{MEETING_CONFIG.meetingId}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(MEETING_CONFIG.meetingId, setCopiedId)}
                className="text-slate-400 hover:text-brand-600 transition-colors p-1"
                title={TEXTS.copy}
              >
                {copiedId ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Passcode */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 group hover:border-brand-200 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{TEXTS.passcodeLabel}</span>
                  <span className="text-sm font-mono font-bold text-slate-800 tracking-wider">{MEETING_CONFIG.passcode}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(MEETING_CONFIG.passcode, setCopiedPasscode)}
                className="text-slate-400 hover:text-brand-600 transition-colors p-1"
                title={TEXTS.copy}
              >
                {copiedPasscode ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};