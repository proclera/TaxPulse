export interface PracticeAreaSection {
  id: 'litigation' | 'compliance' | 'advisory' | 'retainer';
  title: string;
  homeSummary: string;
  paragraphs: string[];
  listLead?: string;
  items?: string[];
}

export const PRACTICE_AREAS_META = {
  seoTitle: 'Best Help with Income Tax, Sales Tax you can find!',
  seoDescription:
    'With over 70 years of cumulative experience, Tax Pulse can truly help with all your income tax, sales tax, customs or excise woes.',
  pageTitle: 'Practice Areas',
  leadHeadingLine1: 'What Can We Do',
  leadHeadingLine2: 'For You?',
  intro:
    'We are the only law firm which offers free legal advice as part of its pro bono initiative. Clients can schedule an appointment with our principal lawyer, Mr. Amjad Javaid Hashmi, to discuss any legal problem. The aim is to help our clients make an informed decision in view of their rights and obligations laid down by the law.',
  servicesHeading: 'Our Services Get You Results',
};

export const PRACTICE_AREAS: PracticeAreaSection[] = [
  {
    id: 'litigation',
    title: 'Litigation Services',
    homeSummary:
      'Through litigation, we endeavor to preserve, protect and defend your constitutional and legal rights which the Constitution, federal and provincial laws of Pakistan guarantee everyone in the country. We strive not only to expedite this arduous process but also make it effective and result-oriented.',
    paragraphs: [
      'Through litigation, we endeavor to preserve, protect and defend your constitutional and legal rights which the Constitution, federal and provincial laws of Pakistan guarantee everyone in the country. We strive not only to expedite this arduous process but also make it effective and result-oriented.',
    ],
    listLead: 'We offer following services in terms of litigation:',
    items: [
      'Filing and Contesting Statutory Appeals before different Courts and Tribunals',
      'Filing and Contesting Constitutional Petitions before the High Courts of Pakistan',
      'Redressal of Grievance through Complaints before Ombudsman and Administrative Authorities',
      'Assisting in Alternative Dispute Resolution',
    ],
  },
  {
    id: 'compliance',
    title: 'Tax Compliance Services',
    homeSummary:
      'We provide a whole range of tax compliance services aimed at ensuring that our clients remain on the right side of law by fulfilling their obligations timely and accurately under all applicable tax laws of the country.',
    paragraphs: [
      'We provide a whole range of tax compliance services aimed at ensuring that our clients remain on the right side of law by fulfilling their obligations timely and accurately under all applicable tax laws of the country.',
    ],
    listLead: 'The services we provide include but are not limited to:',
    items: [
      'Registration with FBR for income tax and sales tax',
      'WeBOC Registration',
      'Filing Annual Income Tax Returns/Wealth Statements',
      'Filing Monthly Sales Tax Returns',
      'Filing Withholding Tax Statements',
      'Handling Audit',
      'Handling Monitoring of Withholding Tax Obligations',
      'Handling Statutory Notices from Tax Authorities',
      'Availing Tax Exemptions and Concessions provided in different tax laws',
      'Filing and Pursuing Refund Claims',
      'Bookkeeping',
    ],
  },
  {
    id: 'advisory',
    title: 'Advisory Services',
    homeSummary:
      'Taxation affects us all. Notwithstanding the popular appeal of tax simplification, there is nothing simple about tax regime in Pakistan and around the world. Tax Pulse provides clear and creative tax advice to clients for their transactions and tax controversies, and with respect to tax legislation and administration.',
    paragraphs: [
      'Taxation affects us all. Notwithstanding the popular appeal of tax simplification, there is nothing simple about tax regime in Pakistan and around the world. Tax Pulse provides clear and creative tax advice to clients for their transactions and tax controversies, and with respect to tax legislation and administration.',
      'In transactional matters, our strength is assisting the client in weighing complex and often competing legal, tax and financial accounting considerations so the client can make an informed decision about whether to engage in a particular transaction.',
      'To meet the challenge of double taxation, we are constantly developing new ways to structure transactions in order to minimize entity-level tax, generate tax benefits or defer taxable gains.',
    ],
  },
  {
    id: 'retainer',
    title: 'Retainer-ship Services',
    homeSummary:
      'For the services in the nature of advisory and day-to-day priority consultancy including the time, skill and experience of the principle or, his associates / partners spent in emergent or routine meetings with the Directors or officers of the client company, the law firm shall charge retainer-ship fee on monthly basis or as per arrangement with clients.',
    paragraphs: [
      'For the services in the nature of advisory and day-to-day priority consultancy including the time, skill and experience of the principle or, his associates/partners spent in emergent or routine meetings with the Directors or officers of the client company, the law firm shall charge retainer-ship fee on monthly basis or as per arrangement with clients.',
      'Other specialized matters involving research, analysis, pondering and writing pertaining to litigation, legal opinion, tax planning and critical compliance issues would be covered by professional charges as negotiated and mutually agreed on case-to-case basis.',
      'We offer you an affordable monthly retainer plan especially if you are a small business. It will minimize your budget for consultancy costs.',
    ],
  },
];
