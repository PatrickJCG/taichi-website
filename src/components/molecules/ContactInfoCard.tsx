import React from 'react';

export interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  detail
}) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-brand-teal-200 transition-colors">
      <div className="mt-1 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900 font-heading">{title}</h4>
        <p className="text-xs text-slate-600 mt-0.5">{detail}</p>
      </div>
    </div>
  );
};
