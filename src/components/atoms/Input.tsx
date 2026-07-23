import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  labelClassName?: string;
}

export const Input: React.FC<InputProps> = ({ label, required, labelClassName, className = '', ...props }) => {
  return (
    <div>
      <label className={`block text-xs font-bold uppercase tracking-wider mb-2 font-heading ${labelClassName || 'text-slate-700'}`}>
        {label} {required && '*'}
      </label>
      <input
        {...props}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-teal-600 focus:ring-2 focus:ring-brand-teal-500/20 outline-none transition-all text-slate-800 placeholder-slate-400 ${className}`}
      />
    </div>
  );
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  required?: boolean;
  labelClassName?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, required, labelClassName, className = '', ...props }) => {
  return (
    <div>
      <label className={`block text-xs font-bold uppercase tracking-wider mb-2 font-heading ${labelClassName || 'text-slate-700'}`}>
        {label} {required && '*'}
      </label>
      <select
        {...props}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-teal-600 focus:ring-2 focus:ring-brand-teal-500/20 outline-none transition-all text-slate-800 bg-white ${className}`}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  labelClassName?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, required, labelClassName, className = '', ...props }) => {
  return (
    <div>
      <label className={`block text-xs font-bold uppercase tracking-wider mb-2 font-heading ${labelClassName || 'text-slate-700'}`}>
        {label} {required && '*'}
      </label>
      <textarea
        {...props}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-teal-600 focus:ring-2 focus:ring-brand-teal-500/20 outline-none transition-all text-slate-800 placeholder-slate-400 ${className}`}
      />
    </div>
  );
};
