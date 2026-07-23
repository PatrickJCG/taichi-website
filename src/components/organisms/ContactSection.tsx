import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Lock, Clock, Shield, X, Building2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../../data/mockProducts';
import { Badge, Button, Input, Select, Textarea } from '../atoms';

export interface ContactSectionProps {
  inquiryItems: Product[];
  onRemoveInquiryItem: (productId: string) => void;
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
      className="relative py-24 overflow-hidden border-t border-b border-teal-500/20"
      style={{
        background:
          'linear-gradient(165deg, #041319 0%, #062620 25%, #0A4337 55%, #072B23 80%, #041319 100%)',
      }}
    >
      {/* ── Top & Bottom glowing divider lines ──────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.5)]" />

      {/* ── Ambient Background decorations ─────────────────────────── */}
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(94,234,212,0.05) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(94,234,212,0.05) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      {/* Radial Glow Orbs */}
      <div
        className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(13,148,136,0.30) 0%, rgba(15,118,110,0.12) 45%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(5,150,105,0.10) 45%, transparent 70%)',
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
            className="mb-4 bg-teal-400/15 text-teal-200 border-teal-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.2)]"
          >
            Contact Our Technical Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight drop-shadow-md">
            Talk to an Animal Nutrition Specialist
          </h2>
          <p className="mt-4 text-emerald-100/75 text-base leading-relaxed font-medium">
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
            <div className="relative rounded-2xl p-6 overflow-hidden bg-slate-900/60 border border-teal-500/30 backdrop-blur-xl shadow-2xl">
              {/* Teal accent bar on the left edge */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-teal-400 via-emerald-400 to-teal-600 shadow-[0_0_10px_rgba(45,212,191,0.6)]" />

              <div className="pl-4 space-y-4">
                {/* Live status badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-400/40 text-xs font-bold tracking-wider uppercase text-teal-300 backdrop-blur-sm shadow-[0_0_12px_rgba(20,184,166,0.25)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Technical Support Available
                </div>

                <h3 className="text-xl font-extrabold text-white leading-snug font-heading">
                  Connect with Our<br />Expert Technical Team
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Get personalised recommendations for feed efficiency, gut health solutions, and species-specific formulations tailored to your operation.
                </p>

                {/* Species expertise tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Swine', 'Poultry', 'Aquaculture', 'Ruminants', 'Pets'].map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 shadow-inner"
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
                  className="flex items-start gap-4 p-4 bg-slate-900/60 rounded-xl border border-teal-500/20 backdrop-blur-xl shadow-lg hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0 group-hover:bg-teal-500/25 group-hover:border-teal-400/60 transition-colors duration-200 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-teal-400/90 uppercase tracking-wider mb-0.5">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-slate-200 font-medium hover:text-teal-300 transition-colors duration-200 break-words">
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200 font-medium leading-snug">{item.detail}</p>
                    )}
                  </div>
                  {item.href && (
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300 shrink-0 mt-1 transition-colors duration-200" />
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
            <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-teal-500/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(20,184,166,0.15)] overflow-hidden">

              {/* Form Header Strip */}
              <div className="px-8 py-5 bg-gradient-to-r from-teal-950/90 via-slate-900/90 to-emerald-950/90 border-b border-teal-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Submit a Technical Inquiry</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Fields marked <span className="text-teal-400 font-bold">*</span> are required</p>
                </div>
                {/* Trust Bar */}
                <div className="flex items-center gap-4">
                  {TRUST_ITEMS.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                      <span className="text-teal-400">{item.icon}</span>
                      <span className="hidden sm:inline">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6" noValidate>

                {/* ── Inquiry Items Summary ─────────────────────────── */}
                {inquiryItems.length > 0 && (
                  <div className="p-4 bg-gradient-to-br from-teal-950/90 to-emerald-950/80 rounded-xl border border-teal-500/40 shadow-inner">
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                        Products in Inquiry ({inquiryItems.length})
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryItems.map(item => (
                        <span
                          key={item.id}
                          className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-lg bg-slate-900/90 border border-teal-500/40 text-white text-xs font-semibold shadow-sm"
                        >
                          <span>{item.title}</span>
                          <button
                            type="button"
                            onClick={() => onRemoveInquiryItem(item.id)}
                            className="w-5 h-5 flex items-center justify-center rounded-full text-slate-300 hover:bg-red-950 hover:text-red-400 transition-colors"
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
                    labelClassName="text-white"
                    placeholder="e.g. Dr. Jane Smith"
                    value={formData.name}
                    onChange={update('name')}
                    className="bg-slate-950/70 border-slate-700/80 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400/20"
                  />
                  <Input
                    label="Business Email"
                    type="email"
                    required
                    labelClassName="text-white"
                    placeholder="jane.smith@company.com"
                    value={formData.email}
                    onChange={update('email')}
                    className="bg-slate-950/70 border-slate-700/80 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400/20"
                  />
                </div>

                {/* ── Row 2: Company / Farm Name + Target Species ───── */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2 font-heading">
                      Company / Farm Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Green Valley Farms Inc."
                        value={formData.company}
                        onChange={update('company')}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-700/80 bg-slate-950/70 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <Select
                    label="Target Species / Category"
                    required
                    labelClassName="text-white"
                    options={SPECIES_OPTIONS}
                    value={formData.species}
                    onChange={update('species')}
                    className="bg-slate-950/70 border-slate-700/80 text-white focus:border-teal-400 focus:ring-teal-400/20 [&_option]:bg-slate-900 [&_option]:text-white"
                  />
                </div>

                {/* ── Inquiry Details ───────────────────────────────── */}
                <Textarea
                  label="Inquiry Details / Formulation Request"
                  required
                  labelClassName="text-white"
                  rows={4}
                  placeholder="Describe your feed requirements, species details, production volume, or requested sample specifications..."
                  value={formData.message}
                  onChange={update('message')}
                  className="bg-slate-950/70 border-slate-700/80 text-white placeholder-slate-400 focus:border-teal-400 focus:ring-teal-400/20"
                />

                {/* ── Submit ────────────────────────────────────────── */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    icon={<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />}
                    className="group !text-base !bg-gradient-to-r !from-teal-500 !to-emerald-500 hover:!from-teal-400 hover:!to-emerald-400 !border-none shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 text-white font-bold"
                  >
                    Send Technical Inquiry
                  </Button>
                  <p className="text-center text-[11px] text-slate-300 mt-3">
                    By submitting, you agree to our{' '}
                    <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
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
