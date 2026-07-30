import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Lock, Clock, Shield, X, Building2, ChevronRight, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../../data/mockProducts';
import { Badge, Button, Input, Select, Textarea } from '../atoms';

export interface ContactSectionProps {
  inquiryItems: Product[];
  onRemoveInquiryItem: (productId: string) => void;
  onClearInquiry?: () => void;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const SPECIES_OPTIONS = [
  { label: 'Select Target Species / Category', value: '' },
  { label: 'Swine / Livestock',           value: 'Swine'     },
  { label: 'Poultry / Avian',             value: 'Poultry'   },
  { label: 'Pets / Companion Animals',    value: 'Pets'      },
  { label: 'Aquaculture / Fish & Shrimp', value: 'Aqua'      },
  { label: 'Ruminants / Cattle',          value: 'Ruminants' },
  { label: 'Other / Custom Formulation',  value: 'Custom'    },
];

const CONTACT_INFO = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Global Headquarters',
    detail: 'Office Center 05K Berthaphil Clark Center, Clark Freeport Zone, Pampanga, Philippines',
    href: undefined,
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Technical Inquiry Email',
    detail: 'feedback@taichinewtech.com',
    href: 'mailto:feedback@taichinewtech.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Direct Support Line',
    detail: '(045) 499-8508 / (045) 499-8494',
    href: 'tel:+6345499850',
  },
];

const TRUST_ITEMS = [
  { icon: <Lock   className="w-3.5 h-3.5" />, label: 'Secure & Encrypted' },
  { icon: <Clock  className="w-3.5 h-3.5" />, label: 'Response within 24h' },
  { icon: <Shield className="w-3.5 h-3.5" />, label: 'Strictly Confidential' },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export const ContactSection: React.FC<ContactSectionProps> = ({
  inquiryItems,
  onRemoveInquiryItem,
  onClearInquiry,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    species: '',
    message: '',
  });

  const update = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    const productList = inquiryItems.map(item => `• ${item.title}`).join('\n');
    const msg = inquiryItems.length > 0
      ? `Thank you for your inquiry, ${formData.name}!\n\nOur technical team will reach out to ${formData.email} within 24 hours regarding:\n\n${productList}`
      : `Thank you for your inquiry, ${formData.name}! Our technical team will reach out to ${formData.email} within 24 hours.`;
    alert(msg);
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden border-t border-b border-slate-200/80"
      style={{
        background:
          'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 50%, #ECFDF5 100%)',
      }}
    >
      {/* ── Top & Bottom subtle divider lines ──────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* ── Ambient Background decorations ─────────────────────────── */}
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(13,148,136,0.04) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(13,148,136,0.04) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      {/* Soft Glow Orbs */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge
            variant="sectionTag"
            className="mb-4 bg-teal-50 text-teal-800 border-teal-200/90 shadow-sm"
          >
            Contact Our Technical Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Talk to an Animal Nutrition Specialist
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-medium">
            Whether you need custom premix formulations, technical data sheets, dosage guidance, or regulatory support — our certified specialists are here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* ── Left Column: Info + Why Contact Us ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Contact Intro Card */}
            <div className="relative rounded-2xl p-6 overflow-hidden bg-white border border-slate-200 shadow-md">
              {/* Teal accent bar on the left edge */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-teal-600 shadow-sm" />

              <div className="pl-4 space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug font-heading tracking-tight">
                  Connect with Our<br />Expert Technical Team
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Get personalised recommendations for feed efficiency, gut health solutions, and species-specific formulations tailored to your operation.
                </p>

                {/* Species expertise tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Swine', 'Poultry', 'Aquaculture', 'Ruminants', 'Pets'].map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/90 text-teal-800 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {CONTACT_INFO.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 group-hover:bg-teal-100 group-hover:border-teal-300 transition-colors duration-200 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-teal-800 uppercase tracking-wider mb-0.5">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-slate-800 font-semibold hover:text-teal-700 transition-colors duration-200 break-words">
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-700 font-medium leading-snug">{item.detail}</p>
                    )}
                  </div>
                  {item.href && (
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 shrink-0 mt-1 transition-colors duration-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Form ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">

              {/* Form Header Strip */}
              <div className="px-8 py-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">Submit a Technical Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Fields marked <span className="text-teal-600 font-bold">*</span> are required</p>
                </div>
                {/* Trust Bar */}
                <div className="flex items-center gap-4">
                  {TRUST_ITEMS.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <span className="text-teal-600">{item.icon}</span>
                      <span className="hidden sm:inline">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>

                {/* ── Inquiry Items Summary ─────────────────────────── */}
                {inquiryItems.length > 0 && (
                  <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200 shadow-inner">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                          Products in Inquiry ({inquiryItems.length})
                        </span>
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          if (onClearInquiry) {
                            onClearInquiry();
                          } else {
                            inquiryItems.forEach(item => onRemoveInquiryItem(item.id));
                          }
                        }}
                        className="flex items-center gap-1.5 text-[11px] font-bold text-red-700 hover:text-red-800 hover:bg-red-100/80 bg-red-50/90 border border-red-200/90 px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                        title="Clear all products from inquiry list"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-red-600" />
                        <span>Clear All</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {inquiryItems.map(item => (
                        <span
                          key={item.id}
                          className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-lg bg-white border border-teal-200 text-teal-900 text-xs font-semibold shadow-sm"
                        >
                          <span>{item.title}</span>
                          <button
                            type="button"
                            onClick={() => onRemoveInquiryItem(item.id)}
                            className="w-5 h-5 flex items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                            aria-label={`Remove ${item.title}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Row 1: Full Name + Business Email ────────────── */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    required
                    labelClassName="text-slate-800"
                    placeholder="e.g. Dr. Jane Smith"
                    value={formData.name}
                    onChange={update('name')}
                    className="bg-slate-50 hover:bg-slate-100/70 focus:bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-teal-600 focus:ring-teal-600/20"
                  />
                  <Input
                    label="Business Email"
                    type="email"
                    required
                    labelClassName="text-slate-800"
                    placeholder="jane.smith@company.com"
                    value={formData.email}
                    onChange={update('email')}
                    className="bg-slate-50 hover:bg-slate-100/70 focus:bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-teal-600 focus:ring-teal-600/20"
                  />
                </div>

                {/* ── Row 2: Company / Farm Name + Target Species ───── */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-heading">
                      Company / Farm Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Green Valley Farms Inc."
                        value={formData.company}
                        onChange={update('company')}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-800 placeholder-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <Select
                    label="Target Species / Category"
                    required
                    labelClassName="text-slate-800"
                    options={SPECIES_OPTIONS}
                    value={formData.species}
                    onChange={update('species')}
                    className="bg-slate-50 hover:bg-slate-100/70 focus:bg-white border-slate-200 text-slate-800 focus:border-teal-600 focus:ring-teal-600/20 [&_option]:bg-white [&_option]:text-slate-800"
                  />
                </div>

                {/* ── Inquiry Details ───────────────────────────────── */}
                <Textarea
                  label="Inquiry Details / Formulation Request"
                  required
                  labelClassName="text-slate-800"
                  rows={4}
                  placeholder="Describe your feed requirements, species details, production volume, or requested sample specifications..."
                  value={formData.message}
                  onChange={update('message')}
                  className="bg-slate-50 hover:bg-slate-100/70 focus:bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-teal-600 focus:ring-teal-600/20"
                />

                {/* ── Submit ────────────────────────────────────────── */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    icon={<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />}
                    className="group !text-base !bg-teal-700 hover:!bg-teal-800 !border-teal-700 shadow-md shadow-teal-700/20 text-white font-bold"
                  >
                    Send Technical Inquiry
                  </Button>
                  <p className="text-center text-[11px] text-slate-500 mt-3">
                    By submitting, you agree to our{' '}
                    <a href="#" className="underline hover:text-slate-800 transition-colors">Privacy Policy</a>.
                    Your information is kept strictly confidential.
                  </p>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
