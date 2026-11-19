export interface ReportedCase {
  id: string;
  title: string;
  citation: string;
  outcome?: 'Decided for the FBR' | 'Decided Against the FBR';
  date?: string;
  summary: string;
}

export const REPORTED_CASES_META = {
  seoTitle: 'Income Tax, Sales Tax, Customs & Excise Cases Reported in Journals',
  seoDescription:
    'Amjad Hashmi has made many contributions towards development of case-law. This page lists some of his cases reported in leading law journals of a Pakistan.',
  pageTitle: 'Reported Cases',
  intro:
    'Mr. Amjad Javaid Hashmi has made many contributions towards development of case-law in the country with regard to tax matters as is evident from many reported judgments wherein he appeared as counsel for Federal Board of Revenue. These judgments have been published in leading law journals of Pakistan and can be accessed online.',
  sectionHeading: 'Some of Our Reported Cases',
};

export const REPORTED_CASES: ReportedCase[] = [
  {
    id: 'sitara-energy',
    title: 'M/s. Sitara Energy Ltd. vs. Federal Board of Revenue',
    citation: 'CP No.D-2700 / 2011 (WWF Case)',
    outcome: 'Decided for the FBR',
    date: 'March 01, 2013',
    summary:
      'Worker Welfare Fund (WWF) is, within the scope of Articles 73, a constitutionally valid public charge in the nature of tax and not a fee.',
  },
  {
    id: 'sarah-construction',
    title: 'M/s Sarah Construction Co. vs. The Taxation Officer-5, Audit-2 RTO, Karachi & Others',
    citation: 'ITR No.421/2010',
    outcome: 'Decided for the FBR',
    date: 'December 20, 2012',
    summary:
      'The income tax authorities can validly proceed exparte (best judgment assessment) U/s 121(1)(d) of the ITO, 2001 by making addition from the material & document “available on record”.',
  },
  {
    id: 'quality-textile',
    title: 'Commissioner IR, Zone-II, LTU, Karachi vs. M/s Quality Textile Mills Limited Karachi',
    citation: 'ITRA No.133/2011',
    outcome: 'Decided for the FBR',
    date: 'May 31, 2013',
    summary:
      'While exercising power under audit, in a normal law tax regime, the income tax authorities can validly apportion the expenses attributable to final tax regime within the dictates of Section 67 read with Rule 13 and Rule 231 of income tax Rules 2002 would not be applicable in such cases.',
  },
  {
    id: 'kassim-textile',
    title: 'Commissioner IR, Zone-II, LTU, Karachi vs. M/s Kassim Textile Mills (Pvt) Limited Karachi',
    citation: 'ITRA No. 132/2011',
    outcome: 'Decided for the FBR',
    date: 'May 07, 2013',
    summary:
      'The benefit of adjustment / carry forward is contemplated u/s 113(2)(c) of the ITO, 2001 only when the minimum tax paid u/s 113(1) exceeds the tax due under normal law tax regime.',
  },
  {
    id: 'karachi-port-trust',
    title: 'Karachi Port Trust Case',
    citation: 'ITA No.389/KB/2006',
    outcome: 'Decided Against the FBR',
    date: 'February 08, 2007',
    summary:
      'While processing a refund claim u/s 170, the income tax authorities have no jurisdiction to question the legality and validity of a return filed under the conferred right of finality of self assessment u/s 114 of the Income Tax Ordinance, 2001.',
  },
  {
    id: 'kohistan-industries',
    title:
      'M/s Kohistan Industries (Oil Mills) vs. The Collector (Appeals), Collectorate of Customs, Sales Tax and Federal Excise (Adjudication)',
    citation: 'STA No.747/LB/2006',
    outcome: 'Decided Against the FBR',
    date: 'September 02, 2009',
    summary:
      'On expiry of the prescribed mandatory time frame for finalizing the assessment proceedings u/s 36 of the Sales Tax Act, 1990; the FBR has no power to extend such expired time frame and any assessment framed during the period of such extension by FBR is a nullity in law.',
  },
  {
    id: 'waseem-ahmed',
    title: 'Waseem Ahmed and another vs. Federation of Pakistan and others',
    citation: 'C.P. No.D-22730 of 2011',
    summary: 'S.R.O. 56(I)/2010 and S.R.O. 776/2011 were invalid, while S.R.O. 775(I)/2011 still held the field.',
  },
  {
    id: 'mohammad-hussain',
    title: 'Mohammad Hussain and Others vs. Federation of Pakistan and Others',
    citation: 'Suit No. 1764/2014',
    outcome: 'Decided for the FBR',
    summary:
      'Levy of tax on issuance of bonus shares under Section 2(29) read with 236M & 236N of the Income Tax Ordinance, 2001 held constitutionally valid by the honorable Sindh High Court.',
  },
];
