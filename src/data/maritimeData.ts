import { ApproachStep, QualitativePillar, ValueItem } from '../types';

/**
 * BRAND INFORMATION
 */
export const BRAND_INFO = {
  name: 'SEAWISE MARINE',
  tagline: 'Professional & Solutions-Focused Options.',
  subtitle: 'Professional People • Maritime Expertise • Reliable Solutions',
  jurisdiction: 'UAE',
  businessDescription: 
    'Seawise Marine is a professional maritime company specializing in Ship Management, Maritime Trading, and Marine Services. Led and supported by experienced Marine Engineers, Captains, and maritime professionals, we provide practical, reliable, and cost-effective solutions to ship owners, operators, and maritime businesses.',
  commitment: 
    'Our commitment is simple: to protect our clients’ assets, support safe and efficient vessel operations, and build long-term partnerships based on professionalism, integrity, and trust.',
};

/**
 * CORE DIVISIONS SUMMARY
 */
export const CORE_SERVICES = [
  {
    id: 'ship-management',
    title: 'Ship Management',
    shortDesc: 'Comprehensive technical, marine, crew, and safety management designed to protect asset value and maximize operational uptime.',
    tagline: 'Technical Integrity & Operational Safety',
    scope: [
      'Technical Ship Management & Monitoring',
      'Safety, Quality & Environmental Compliance (ISM/ISPS)',
      'Planned Maintenance & Running Hours Control',
      'Dry-Docking & Major Repair Supervision',
    ],
  },
  {
    id: 'maritime-trading',
    title: 'Maritime Trading',
    shortDesc: 'Responsive sourcing and rapid delivery of OEM machinery spares, marine equipment, deck supplies, and technical stores.',
    tagline: 'Reliable Sourcing & Technical Procurement',
    scope: [
      'Main Propulsion & Auxiliary Diesel Spares',
      'Pumps, Compressors, Valves & Deck Machinery',
      'Safety Equipment & Navigation Auxiliaries',
      'Class-Certified Components & Ship Stores',
    ],
  },
  {
    id: 'marine-services',
    title: 'Marine Services',
    shortDesc: 'Hands-on technical advisory, vessel condition inspections, pre-purchase audits, and superintendent attendance.',
    tagline: 'Practical Engineering & Superintendent Support',
    scope: [
      'Independent Vessel Condition Assessments',
      'Pre-Purchase & Pre-Charter Audits',
      'Emergency Machinery Troubleshooting',
      'Port Call Supervision & Technical Representation',
    ],
  },
];

export const MARITIME_IMAGES = {
  // Commercial container vessel / bulk carrier at sea
  heroShip: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2000&q=85',
  // Commercial tanker vessel navigating open ocean waters
  tankerSea: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
  // Commercial cargo vessel underway
  cargoVessel: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1600&q=80',
  // Modern ship bridge / navigation console / radar / helm
  bridgeConsole: 'https://images.unsplash.com/photo-1508873696983-2df57036476b?auto=format&fit=crop&w=1600&q=80',
  // Marine diesel engine room / heavy machinery & piping inspection
  engineMachinery: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80',
  // Marine engineer / technical inspection in machinery space
  marineEngineer: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
  // Commercial vessel dry dock / hull maintenance overhaul
  dryDocking: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80',
  // Container terminal port operations / gantry cranes (UAE / Middle East style)
  portTerminal: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
  // Ship propeller & hull maintenance
  hullMaintenance: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80',
  // Vessel inspection & deck operations
  deckOperations: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
};

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'SAFETY',
    description: 'Safety is at the heart of everything we do. We protect our people, vessels, cargo, clients, and the marine environment.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'TECHNICAL EXCELLENCE',
    description: 'Our decisions are supported by practical knowledge and technical expertise from experienced Marine Engineers and maritime professionals.',
    iconName: 'Wrench',
  },
  {
    title: 'PROFESSIONALISM',
    description: 'We operate with discipline, competence, accountability, and respect for international maritime standards.',
    iconName: 'Compass',
  },
  {
    title: 'INTEGRITY',
    description: 'We believe in honest communication, transparency, responsibility, and building relationships based on trust.',
    iconName: 'Scale',
  },
  {
    title: 'RELIABILITY',
    description: 'Our clients depend on us to deliver. We focus on dependable operations, timely response, and consistent service.',
    iconName: 'Anchor',
  },
  {
    title: 'EFFICIENCY',
    description: 'We continuously seek better ways to improve vessel performance, reduce unnecessary costs, and maximize operational value.',
    iconName: 'Gauge',
  },
  {
    title: 'MARITIME EXPERIENCE',
    description: 'Our strength comes from understanding life at sea as well as the challenges of managing vessels from shore.',
    iconName: 'Waves',
  },
];

export const SHIP_MANAGEMENT_SERVICES = [
  {
    id: 'technical-management',
    title: 'Technical Ship Management',
    description: 'Comprehensive engineering oversight, machinery maintenance, continuous condition monitoring, and strict adherence to international class and flag state regulations.',
    keyPoints: ['Machinery health monitoring', 'Class & flag statutory compliance', 'Technical budget control', 'Dry-dock preparation & execution'],
  },
  {
    id: 'marine-safety',
    title: 'Marine & Safety Management',
    description: 'Rigorous implementation of ISM, ISPS, MLC, and environmental management protocols to ensure safe seafaring and robust environmental stewardship.',
    keyPoints: ['Safety management systems (SMS)', 'Vetting & audit preparation', 'Environmental compliance', 'Risk assessments & procedures'],
  },
  {
    id: 'crew-management',
    title: 'Crew Management & Support',
    description: 'Competent, certified, and vetted sea-going personnel management ensuring optimal crew welfare, STCW compliance, and seamless operational coordination.',
    keyPoints: ['STCW certification compliance', 'Crew deployment & logistics', 'Competency assessments', 'Welfare & ongoing support'],
  },
  {
    id: 'planned-maintenance',
    title: 'Planned Maintenance Management',
    description: 'Structured planned maintenance systems (PMS) designed to minimize downtime, prevent costly catastrophic failures, and preserve asset longevity.',
    keyPoints: ['PMS system optimization', 'Running hours & service schedules', 'Critical equipment redundancy', 'Vessel condition tracking'],
  },
  {
    id: 'procurement-spares',
    title: 'Procurement & Spares',
    description: 'Cost-effective, reliable sourcing and timely logistics coordination for genuine vessel spare parts, consumables, technical stores, and lubricating oils.',
    keyPoints: ['Direct OEM & marine supplier sourcing', 'Port delivery logistics', 'Inventory & requisitions control', 'Volume cost optimization'],
  },
  {
    id: 'dry-docking-repairs',
    title: 'Dry-Docking & Repair Coordination',
    description: 'Turnkey dry-dock specification development, shipyard tender evaluation, on-site technical supervision, and rigorous quality and cost management.',
    keyPoints: ['Dry-dock work scope specification', 'Shipyard negotiations & contracts', 'On-site superintendent supervision', 'Final billing reconciliation'],
  },
  {
    id: 'vessel-inspections',
    title: 'Vessel Inspections',
    description: 'In-depth physical condition surveys, pre-vetting inspections, and operational audits conducted by experienced Chief Engineers and Master Mariners.',
    keyPoints: ['Pre-vetting & SIRE preparation', 'Hull & machinery surveys', 'Independent condition reports', 'Corrective action plan tracking'],
  },
  {
    id: 'port-operations',
    title: 'Port & Operational Support',
    description: 'Hands-on assistance for vessel port calls, cargo operations liaison, bunkering supervision, and clearance coordination in UAE and regional waters.',
    keyPoints: ['Port call operations liaison', 'Bunkering survey & oversight', 'Stevedoring & cargo coordination', 'Local authority compliance'],
  },
  {
    id: 'documentation-compliance',
    title: 'Documentation & Compliance',
    description: 'Maintaining seamless vessel trading documentation, certificates of registry, statutory certificates, and proactive renewal monitoring.',
    keyPoints: ['Flag state documentation', 'Class survey status tracking', 'Statutory cert renewals', 'Regulatory change advisory'],
  },
  {
    id: 'emergency-support',
    title: 'Emergency & Technical Support',
    description: 'Dedicated 24/7 technical incident response and crisis management by seasoned marine engineers ready to troubleshoot and mitigate critical vessel issues.',
    keyPoints: ['24/7 technical incident desk', 'Rapid remote troubleshooting', 'Navigational/engineering emergency response', 'Salvage & casualty coordination'],
  },
];

export const MARITIME_TRADING_ITEMS = [
  {
    title: 'Marine Equipment',
    description: 'Certified deck machinery, pumps, valves, compressors, heat exchangers, separators, and navigational auxiliary systems.',
    tag: 'Systems & Auxiliaries',
  },
  {
    title: 'Ship Spare Parts',
    description: 'Genuine and OEM-equivalent spare parts for 2-stroke and 4-stroke marine diesel propulsion and auxiliary power generation plants.',
    tag: 'Main & Auxiliary',
  },
  {
    title: 'Engine & Machinery Components',
    description: 'Pistons, cylinder liners, fuel injection systems, bearings, turbochargers, gaskets, and precision-engineered mechanical assemblies.',
    tag: 'Machinery Space',
  },
  {
    title: 'Deck & Safety Equipment',
    description: 'SOLAS-compliant life-saving appliances, firefighting equipment, mooring ropes, pilot ladders, anchor chains, and safety gears.',
    tag: 'SOLAS & Deck',
  },
  {
    title: 'Marine Consumables',
    description: 'Specialty marine chemicals, tank cleaning detergents, testing kits, greases, hydraulic fluids, and technical maintenance consumables.',
    tag: 'Chemicals & Fluids',
  },
  {
    title: 'Technical Supplies',
    description: 'Electrical consumables, automation sensors, instrumentation, pneumatic actuators, valves, and precision workshop tooling.',
    tag: 'Electrical & Tooling',
  },
  {
    title: 'Ship Stores',
    description: 'Complete IMPA / ISSA categorized deck, engine, electrical, and cabin store packages tailored for prompt vessel turnaround.',
    tag: 'IMPA / ISSA Catalog',
  },
  {
    title: 'Procurement & Supply Coordination',
    description: 'End-to-end supply chain coordination, consolidating requisitions, customs clearance, and prompt berth/anchorage delivery.',
    tag: 'End-to-End Logistics',
  },
];

export const MARINE_SERVICES_ITEMS = [
  {
    title: 'Marine Consultancy',
    description: 'Strategic advisory for ship owners, operators, and maritime financiers on operational governance, risk management, and regulatory compliance.',
    iconName: 'Compass',
  },
  {
    title: 'Technical Consultancy',
    description: 'Engineering problem analysis, retrofitting feasibility studies, energy efficiency optimization, and machinery failure assessments.',
    iconName: 'Cpu',
  },
  {
    title: 'Vessel Condition Assessment',
    description: 'Unbiased physical evaluations of hull integrity, machinery health, coating status, and maintenance history for transparent asset valuation.',
    iconName: 'ClipboardCheck',
  },
  {
    title: 'Pre-Purchase Vessel Inspection',
    description: 'Comprehensive pre-acquisition technical audits identifying deferred maintenance, class notation defects, and realistic CAPEX requirements.',
    iconName: 'Search',
  },
  {
    title: 'Repair & Maintenance Coordination',
    description: 'Direct management and oversight of afloat repairs, riding squad deployments, workshop overhauls, and localized engineering interventions.',
    iconName: 'Tool',
  },
  {
    title: 'Troubleshooting & Technical Support',
    description: 'Hands-on root-cause diagnosis of complex propulsion, auxiliary, electrical, and control system malfunctions by veteran Chief Engineers.',
    iconName: 'Activity',
  },
  {
    title: 'Port Services Coordination',
    description: 'On-site technical representation during port visits, bunkering, hull cleaning, underwater inspection, and class surveyor attendances.',
    iconName: 'Anchor',
  },
  {
    title: 'Marine Project Support',
    description: 'Project management for vessel lay-up, re-activation, conversions, major equipment overhauls, and specialized offshore marine operations.',
    iconName: 'Layers',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Assess',
    description: 'Comprehensive physical and technical appraisal of vessel operational status, machinery history, compliance records, and commercial demands.',
    deliverable: 'Baseline Technical & Risk Audit',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Formulating structured operational plans, preventative maintenance schedules, OPEX/CAPEX projections, and procurement timelines.',
    deliverable: 'Tailored Operational & Maintenance Blueprint',
  },
  {
    step: '03',
    title: 'Execute',
    description: 'Rigorous execution of maintenance, supply coordination, inspections, and voyages managed by sea-experienced superintendents.',
    deliverable: 'Disciplined Field & Technical Execution',
  },
  {
    step: '04',
    title: 'Monitor',
    description: 'Continuous performance tracking, running hours verification, fuel efficiency analysis, and scheduled safety audits.',
    deliverable: 'Performance & Compliance Analytics',
  },
  {
    step: '05',
    title: 'Improve',
    description: 'Iterative optimization based on operational feedback, condition trends, regulatory evolutions, and cost-saving insights.',
    deliverable: 'Asset Value & Reliability Enhancement',
  },
];

export const QUALITATIVE_PILLARS: QualitativePillar[] = [
  {
    title: 'Technical Expertise',
    highlight: 'Marine Engineers & Captains',
    description: 'Decisions led by licensed maritime professionals with practical operational understanding of vessel machinery and navigation realities.',
  },
  {
    title: 'Operational Discipline',
    highlight: 'Structured Processes',
    description: 'Systematic frameworks focused strictly on vessel safety, international compliance, machinery reliability, and consistent execution.',
  },
  {
    title: 'Responsive Support',
    highlight: 'Action When It Matters',
    description: 'Rapid, pragmatic assistance and clear decision-making when technical, port, or operational challenges arise.',
  },
  {
    title: 'Cost-Conscious Management',
    highlight: 'Protecting Capital & OPEX',
    description: 'Prudent technical solutions engineered to protect vessel asset value while avoiding unnecessary expenditure or downtime.',
  },
  {
    title: 'Long-Term Partnership',
    highlight: 'Integrity & Trust',
    description: 'Dedicated to cultivating transparent, accountable, and enduring relationships with ship owners and maritime stakeholders.',
  },
];

export const CONTACT_INFO_PLACEHOLDERS = {
  jurisdiction: 'United Arab Emirates',
  hub: 'UAE (Placeholder)',
  inquiriesEmail: 'info@seawisemarineuae.com',
  techEmail: 'gil@seawisemarineuae.com',
  tradingEmail: 'tripon@seawisemarineuae.com',
  phone: '+971553309271',
  workingHours: 'Monday – Saturday: 09:00 – 17:00 GST',
  coordinates: "25° 15' 44\" N, 55° 17' 32\" E",
};
