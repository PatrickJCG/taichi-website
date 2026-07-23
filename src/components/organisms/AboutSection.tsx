import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_QUALITY_ITEMS } from '../../data/mockProducts';
import { 
  Compass, 
  Search, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Eye, 
  BookOpen, 
  Users, 
  Wrench, 
  Shield,
  Heart
} from 'lucide-react';
import { SectionHeader } from '../atoms';
import { QualityCard } from '../molecules';

export const AboutSection: React.FC = () => {
  const qualityIcons = [
    <Award        className="w-5 h-5 text-brand-amber-600"  key="1" />,
    <CheckCircle2 className="w-5 h-5 text-brand-teal-600"   key="2" />,
    <ShieldCheck  className="w-5 h-5 text-brand-forest-600" key="3" />,
    <Users        className="w-5 h-5 text-brand-teal-600"   key="4" />,
    <Shield       className="w-5 h-5 text-brand-amber-600"  key="5" />,
    <Heart        className="w-5 h-5 text-brand-teal-600"   key="6" />,
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-white border-b border-slate-200/60 overflow-hidden bg-grid-pattern">
      {/* Ambient orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-forest-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-sky-500/8 rounded-full blur-3xl -z-10 pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 relative z-10">

        {/* ── PART 2: OUR MANDATE TO SUCCESS ── */}
        <div id="about" className="space-y-8 scroll-mt-28">
          <SectionHeader
            tag="Our Mandate to Success"
            title="Explore · Research · Sustain"
            description="Our core agenda guiding our commitment to livestock health and agribusiness development."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* EXPLORE */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:border-brand-teal-500/50 hover:bg-teal-50/10 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-teal-600/10 text-brand-teal-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">We Explore</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Concepts of animal nutrition and health, feed milling efficiency, and farm productivity to offer products as sustainable solutions in our clients' daily business operations.
              </p>
            </motion.div>

            {/* RESEARCH */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:border-brand-teal-500/50 hover:bg-teal-50/10 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-teal-600/10 text-brand-teal-700 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">We Research</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Together with top-tier universities and professional organizations to provide scientific information, validate field efficacy, and help customers make business-wise decisions.
              </p>
            </motion.div>

            {/* SUSTAIN */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:border-brand-teal-500/50 hover:bg-teal-50/10 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-teal-600/10 text-brand-teal-700 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">We Sustain</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                By marketing new and interesting products to ensure business continuity, utilizing project grants, and investing in research funding to obtain results and practical solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── PART 4: MISSION, VISION, & SOCIAL RESPONSIBILITY ── */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-teal-600/10 text-brand-teal-700 flex items-center justify-center">
                <Eye className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Mission</h3>
            </div>
            <ul className="space-y-3">
              {[
                "To provide value-adding services and value-based products that shall enhance our client's profitability and production efficiency.",
                "To uphold and raise the bar of high-quality, safe, and pro-environmental products.",
                "To endlessly pursue research innovations on feeds, feed technology, and farm efficiency concepts.",
                "To forge bonds of trust and confidence with our customers while being mindful of their needs and satisfaction."
              ].map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-600 mt-0.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-teal-600/10 text-brand-teal-700 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Vision</h3>
            </div>
            <div className="relative border-l-3 border-brand-teal-600 pl-3.5 py-1.5 bg-white rounded-r-xl">
              <p className="text-slate-700 text-sm font-semibold italic leading-relaxed">
                "To be a leading and dependable organization contributing to food safety and healthy existence through innovation complemented by constant exploration and research for sustainable solutions."
              </p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              We focus on future feed requirements, anticipating market shifts, regulatory guidelines, and global biosecurity needs.
            </p>
          </div>

          {/* Social Responsibility */}
          <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-teal-600/10 text-brand-teal-700 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Social Responsibility</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Continuous selling and marketing of our existing products while introducing new and interesting products to support the business of company and customers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We work to build a stronger and healthier community through education support that shall sustain the agricultural and agribusiness industries.
            </p>
          </div>
        </div>

        {/* ── PART 5: CORE VALUES ── */}
        <div className="space-y-8">
          <SectionHeader
            tag="Core Values"
            title="Values that Guide Our Integrity"
            description="The pillars of our daily interactions, research standards, and commercial ethics."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Integrity */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-2.5 text-brand-teal-700">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="text-lg font-bold font-heading text-slate-900">Integrity</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Absolute honesty, consistent and transparent professional work ethics will be our guiding force in our conduct towards our colleagues, clients, consumers and the public.
              </p>
            </div>

            {/* Strive for Excellence */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-2.5 text-brand-teal-700">
                <Award className="w-5 h-5" />
                <h4 className="text-lg font-bold font-heading text-slate-900">Strive for Excellence</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our continuous process of self-development is a personal responsibility we endeavor to achieve exemplary outcome and success across all product trials and distribution models.
              </p>
            </div>

            {/* Power for Innovation */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-2.5 text-brand-teal-700">
                <Zap className="w-5 h-5" />
                <h4 className="text-lg font-bold font-heading text-slate-900">Power for Innovation</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our creativity, ingenuity, and exceptional desire to question common wisdom and to challenge the status quo fuel our commitment to provide practical, recognizable, and research-driven solutions.
              </p>
            </div>
          </div>
        </div>

        {/* ── PART 6: SERVICE PILLARS ── */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 border border-slate-200/50 rounded-2xl text-center space-y-2.5">
            <div className="w-10 h-10 rounded-full bg-brand-teal-500/10 text-brand-teal-700 flex items-center justify-center mx-auto">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm font-heading">Collaboration</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Researches and studies with professional partners and key persons, locally and abroad, to align with the latest trends in the animal industry.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200/50 rounded-2xl text-center space-y-2.5">
            <div className="w-10 h-10 rounded-full bg-brand-teal-500/10 text-brand-teal-700 flex items-center justify-center mx-auto">
              <Wrench className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm font-heading">Service Extension</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Providing hands-on technical assistance, animal feed mill audits, and reliable, customized after-sales service and support.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200/50 rounded-2xl text-center space-y-2.5">
            <div className="w-10 h-10 rounded-full bg-brand-teal-500/10 text-brand-teal-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm font-heading">Solution Provider</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Delivering an extensive, customizable range of safe and innovative organic acids, minerals, and bioactive peptides tailored to farm needs.
            </p>
          </div>
        </div>

        {/* ── PART 7: GLOBAL TIMELINE & GEOGRAPHIC TRACK ── */}
        <div className="space-y-8">
          <SectionHeader
            tag="Global Expansion Track"
            title="From Pioneer to Multinational Distribution"
            description="Our geographical growth since 2016 pioneering feed additive distribution in the Philippines."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm hover:border-brand-teal-300 transition-all duration-300">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-1.5 border-b md:border-b-0 md:border-r border-slate-200/80 pb-3 md:pb-0 md:pr-4">
                <span className="text-xs font-extrabold text-brand-teal-700 font-mono-data bg-brand-teal-50 px-3 py-1 rounded-lg border border-brand-teal-200/60">
                  2016
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Pioneer Market
                </span>
              </div>
              <div className="md:col-span-9 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-sm font-heading">
                  Pioneering Distribution — Philippines 🇵🇭
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Began operations establishing high-quality feed additive importing and distribution networks for major feed mills and integrators.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-5 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm hover:border-brand-teal-300 transition-all duration-300">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-1.5 border-b md:border-b-0 md:border-r border-slate-200/80 pb-3 md:pb-0 md:pr-4">
                <span className="text-xs font-extrabold text-brand-teal-700 font-mono-data bg-brand-teal-50 px-3 py-1 rounded-lg border border-brand-teal-200/60">
                  2019 – 2022
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Southeast Asia
                </span>
              </div>
              <div className="md:col-span-9 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-sm font-heading">
                  Active Agribusiness Expansion — Thailand 🇹🇭, Vietnam 🇻🇳, Bangladesh 🇧🇩
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Gradually expanded sales operations to neighboring high-volume livestock producing countries, proving FCR improvements in tropical climates.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-5 bg-amber-50/30 border border-amber-200/70 rounded-2xl shadow-sm hover:border-amber-300 transition-all duration-300">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-1.5 border-b md:border-b-0 md:border-r border-amber-200/80 pb-3 md:pb-0 md:pr-4">
                <span className="text-xs font-extrabold text-amber-700 font-mono-data bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-300/60 animate-pulse">
                  Present
                </span>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                  Global Reach
                </span>
              </div>
              <div className="md:col-span-9 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-sm font-heading">
                    Upcoming & Expanding Operations
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-700 text-[10px] font-bold tracking-wide uppercase">
                    Active Expansion
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Currently setting up local offices and registrations in <strong>Indonesia 🇮🇩, Malaysia 🇲🇾, Turkey 🇹🇷, Brazil 🇧🇷, and South Africa 🇿🇦</strong> to support global partners.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── PART 8: QUALITY & STANDARDS ── */}
        <div>
          <SectionHeader
            tag="Quality & Standards"
            title="Global Safety and Compliance Certifications"
            description="Operating under strict testing protocols and regulatory approvals to deliver batch-to-batch consistency."
            className="mb-8"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_QUALITY_ITEMS.map((item, idx) => (
              <QualityCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={qualityIcons[idx % qualityIcons.length]}
                certCode={item.certCode}
                delay={idx * 0.08}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
