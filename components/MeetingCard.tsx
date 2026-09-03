import React from 'react';
import { MAIN_MEETING, UI_TEXTS, ScheduleItem } from '../constants';
import { Video, MapPin, Slash } from 'lucide-react';

interface MeetingCardProps {
  title: string;
  description: string;
  schedule: ScheduleItem[];
  isPrimary?: boolean;
  hideAction?: boolean;
}

export const MeetingCard: React.FC<MeetingCardProps> = ({ 
  title, 
  description, 
  schedule, 
  isPrimary = false,
  hideAction = false
}) => {
  const hasMeetings = schedule.length > 0;

  return (
    <div className={`flex flex-col h-full bg-white rounded-2xl border ${isPrimary ? 'border-brand-100 shadow-xl shadow-brand-900/5' : 'border-slate-200 shadow-sm'} overflow-hidden relative transition-all hover:shadow-md`}>
      {/* Header */}
      <div className={`p-6 pb-4 ${isPrimary ? 'bg-brand-50/30' : 'bg-white'}`}>
        <div className="flex items-start justify-between mb-3">
          {/* Badge now always uses brand colors */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 text-brand-700">
            <MapPin className="w-3 h-3" />
            {title}
          </div>
        </div>
        <p className="text-sm text-slate-500 leading-snug min-h-[40px]">
          {description}
        </p>
      </div>

      {/* Schedule Content */}
      <div className="flex-1 p-6 pt-2">
        <div className="mt-4 space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
            Kalender
          </h4>
          
          {hasMeetings ? (
            <div className="space-y-4">
              {schedule.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 pt-0.5 text-right shrink-0">
                    <span className="text-sm font-semibold text-slate-900 block tabular-nums">
                      {item.time}
                    </span>
                  </div>
                  <div className="relative pl-4 border-l-2 border-slate-100 group-hover:border-brand-200 transition-colors">
                    <h5 className="font-bold text-slate-800 text-sm leading-tight">
                      {item.title}
                    </h5>
                    {item.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-6 flex flex-col items-center justify-center text-slate-400 text-center">
              <Slash className="w-8 h-8 opacity-20 mb-2" />
              <p className="text-sm font-medium">{UI_TEXTS.closed}</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer - Only shown if hideAction is false */}
      {!hideAction && (
        <div className="p-4 bg-slate-50 border-t border-slate-100">
          <a 
            href={MAIN_MEETING.url}
            className={`flex items-center justify-center gap-2 w-full font-bold py-3 px-4 rounded-xl transition-all active:scale-[0.98] ${
              hasMeetings 
                ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
            onClick={(e) => !hasMeetings && e.preventDefault()}
          >
            <Video className="w-4 h-4" />
            <span>{hasMeetings ? `${UI_TEXTS.joinButton} ${title}` : 'Stängt'}</span>
          </a>
        </div>
      )}
    </div>
  );
};