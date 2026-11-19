export interface ClientLogo {
  name: string;
  logo: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  paragraphs: string[];
  homeParagraphs?: string[];
  attribution: string;
}

export const CLIENTS_META = {
  seoTitle: 'Some of Our Valued Clients - Tax Pulse - Tax Litigation Experts',
  seoDescription:
    'Some of our valued clients. Our client list is a diverse mix of small firms to multi-nationals and public sector organizations.',
  pageTitle: 'Our Clients',
  heading: 'Some of Our Valued Clients.',
  intro:
    'Our client list is a diverse mix of small firms to multi-nationals and public sector organizations.',
  testimonialsHeading: 'What Our Clients Say About Us',
};

export const VALUED_CLIENTS: ClientLogo[] = [
  {
    name: 'Airwaves Media (Pvt) Ltd.',
    logo: '/taxpulse-assets/2017/08/Airwaves-Media-Pvt-Ltd.-Logo.jpg',
    alt: 'Airwaves Media (Pvt) Ltd.',
  },
  {
    name: 'Procter & Gamble Pakistan',
    logo: '/taxpulse-assets/2017/08/Procter-Gamble-Pakistan-Logo.jpg',
    alt: 'Procter & Gamble Pakistan',
  },
  {
    name: 'National Institute of Banking and Finance (Guarantee) Limited',
    logo: '/taxpulse-assets/2017/08/National-Institute-of-Banking-and-Finance-Guarantee-Limited-Logo.jpg',
    alt: 'National Institute of Banking and Finance (Guarantee) Limited',
  },
  {
    name: 'CNBC Pakistan',
    logo: '/taxpulse-assets/2017/08/CNBC-Pakistan-Logo.jpg',
    alt: 'CNBC Pakistan',
  },
  {
    name: 'Grant Thornton Anjum Rahman',
    logo: '/taxpulse-assets/2017/08/Grant-Thornton-Anjum-Rahman-Logo.jpg',
    alt: 'Grant Thornton Anjum Rahman',
  },
  {
    name: 'Storsack (Pvt) Limited',
    logo: '/taxpulse-assets/2017/08/Storsack-Pvt-Limited-Logo.jpg',
    alt: 'Storsack (Pvt) Limited',
  },
  {
    name: 'Globex Safety (Pvt) Limited',
    logo: '/taxpulse-assets/2017/08/Globex-Safety-Pvt-Limited-logo.jpg',
    alt: 'Globex Safety (Pvt) Limited',
  },
  {
    name: 'Muhafiz Security (Pvt) Limited',
    logo: '/taxpulse-assets/2017/08/Muhafiz-Security-Pvt-Limited-Logo.jpg',
    alt: 'Muhafiz Security (Pvt) Limited',
  },
  {
    name: 'Karachi Dock Labour Board',
    logo: '/taxpulse-assets/2017/08/Karachi-Dock-Labour-Board-Logo.jpg',
    alt: 'Karachi Dock Labour Board',
  },
  {
    name: 'Jinnah University for Women',
    logo: '/taxpulse-assets/2017/08/Jinnah-University-for-Women-Logo.jpg',
    alt: 'Jinnah University for Women',
  },
  {
    name: 'Khan Brothers',
    logo: '/taxpulse-assets/2017/08/Khan-Brothers-Logo.jpg',
    alt: 'Khan Brothers',
  },
  {
    name: 'Interflow Communications (Pvt) Limited',
    logo: '/taxpulse-assets/2017/08/Interflow-Communications-Pvt-Limited-Logo.jpg',
    alt: 'Interflow Communications (Pvt) Limited',
  },
  {
    name: 'College of Physicians & Surgeons Pakistan',
    logo: '/taxpulse-assets/2017/08/College-of-Physicians-Surgeons-Pakistan-Logo.jpg',
    alt: 'College of Physicians & Surgeons Pakistan',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'awan-trading',
    paragraphs: [
      'Mr. Amjad Javaid Hashmi and his associates represented us recently in a constitutional petition filed against Federal Board of Revenue against issuance of arbitrary, mala fide and time barred Show Cause Notice for amendment of our tax returns which were filed for the year 2010. Mr. Hashmi vociferously argued against issuance of aforesaid SCN whereby our status of Large Import House was also questioned and honorable High Court of Sindh was pleased to restrain the respondent tax authorities from proceeding further till disposal of the petition. We are a leading firm engaged in the business of importing and supplying of coal to its industrial customers and have engaged many prestigious lawyers before for legal representation in different cases. Our experience with Mr. Hashmi and his team has been pleasantly remarkable. He puts his heart and soul in work and brings to his job years of cumulative experience both as a tax functionary and a tax lawyer. We recommend that the litigants or taxpayers who want effective legal representation should engage these terrific lawyers.',
    ],
    attribution: '~ Awan Trading (Pvt) Ltd.',
  },
  {
    id: 'airwaves-media',
    paragraphs: [
      'Airwaves Media (Private) Limited is Interflow Group’s multi-media wing, focusing on managing and operating satellite television and FM radio channels and their marketing. Its activities are extended to comprise program development, including software content for television, radio and allied media. M/s Tax Pulse are representing us in constitutional petitions number 3815/2016, 3320/2016 and 3321/2016 which have been filed against Sindh Revenue Board and Federal Board of Revenue for imposition of arbitrary taxes and exercise of illegal jurisdiction. As a leading media group, we often find ourselves faced with litigation and legal battles. Leading names of the legal fraternity have represented us before judicial forums. Mr. Hashmi and his team stand out among them as they work hard on their brief and have a very professional approach to their work.',
    ],
    homeParagraphs: [
      'Airwaves Media (Private) Limited is Interflow Group’s multi-media wing, focusing on managing and operating satellite television and FM radio channels and their marketing. Its activities are extended to comprise program development, including software content for television, radio and allied media. M/s Tax Pulse are representing us in constitutional petitions number 3815/2016, 3320/2016 and 3321/2016 which have been filed against Sindh Revenue Board and Federal Board of revenue for imposition of arbitrary taxes and exercise of illegal jurisdiction. As a leading media group, we often find ourselves faced with litigation and legal battles. Leading names of the legal fraternity have represented us before judicial forums. Mr. Hashmi and his team stand out among them as they work hard on their brief and have a very professional approach to their work.',
    ],
    attribution: '~ Airwaves Media (Pvt) Ltd.',
  },
  {
    id: 'zaheer-allana',
    paragraphs: [
      'Tax Pulse, advocates and associates, have been representing us in legal matters at Commissioner IR (Appeals), Appellate Tribunal Inland Revenue, Customs Appellate Tribunal and High Court of Sindh. Our relationship with this lawyer spans over a decade. The professionalism and can-do approach of Mr. Amjad Javed Hashmi and his team with emphasis on protecting clients’ legal interest in complicated and challenging cases marks them out as excellent attorneys and lawyers. Tax Pulse always offers effective solutions to complex legal issues and problems whenever arising. Their forte is their speed and swift response with which they approach their brief. We believe that they the finest lawyers a litigant can find in our legal system.',
    ],
    homeParagraphs: [
      'Tax Pulse, advocates and associates, have been representing us in legal matters at Commissioner IR (Appeals), Appellate Tribunal Inland Revenue, Customs Appellate Tribunal and High Court of Sindh. Our relationship with this law spans over a decade. The professionalism and can-do approach of Mr. Amjad Javed Hashmi and his team with emphasis on protecting clients’ legal interest in complicated and challenging cases marks them out as excellent attorneys and lawyers. Tax Pulse always offers effective solutions to complex legal issues and problems whenever arising. Their forte is their speed and swift response with which they approach their brief. We believe that they the finest lawyers a litigant can find in our legal system.',
    ],
    attribution: '~ Mr. Zaheer Allana | Bin Qasim (Pvt) Ltd. & ATM Industries (Pvt) Ltd.',
  },
  {
    id: 'basharat-ullah-khan',
    paragraphs: [
      'Prevention is better than cure. In Tax matters, “advice” needs to be had before performing a taxable act. Without first, involving himself fully, into facts, no tax consultant can give a reliable legal advice. In our two years experience with Tax Pulse, we have found the team, to be very through in approach, deep in appreciation of facts and candid in legal opinion. For advice and action in a court of law, in corporate matters including Income Tax, Sales Tax & issues with Regulators we rate Tax Pulse Team to be one among, top ten such law offices, in the city.',
    ],
    attribution: '~ Basharat Ullah Khan | General Secretary – PSX Stockbrokers Association',
  },
  {
    id: 'muneer-ahmed-memon',
    paragraphs: [
      'I am a busy chief executive responsible for looking after four different firms and had a complex tax situation which made me not an easy client for any practitioner in this field. Thanks to Mr. Hashmi and his team, I haven’t had any issues in dealing tax authorities and my tax papers are always up to date. Since I my association with Tax Pulse, I am much more confident to focus all my attention on the expansion of my business as I believe in the professionalism of Mr. Hashmi and his team at Tax Pulse to deal with my tax affairs effectively and efficiently. I am and will always be grateful for your support from past ten years and hope to continue our arrangement for foreseeable future.',
    ],
    attribution: '~ Muneer Ahmed Memon | CEO – Voices (Pvt) Ltd.',
  },
  {
    id: 'jawad-ahmed-memon',
    paragraphs: [
      'I am a senior executive in a group of firms situated in Karachi, Pakistan. I know from my experience that tax matters can be very real pain and consume a lot of time and energy for most executives in my position. But since our association with Tax Pulse, I am completely relaxed due to experience and expertise of team member at Tax Pulse. Hashmi sb is not only highly qualified and knowledgeable person on tax matters but also very polite and courteous person who understand how to put his clients at ease. I have never left his office without a satisfactory smile on my face. It is a blessing to have a firm like Tax Pulse in our city.',
    ],
    attribution: '~ Jawad Ahmed Memon | COO – Voices (Pvt) Ltd.',
  },
  {
    id: 'ahmad-raza-khan',
    paragraphs: [
      'It gives me great pleasure to write my experience of consulting TAX PULSE for my TAX matters. Their level of expertise and professionalism surpassed even my greatest expectations and at all times their focus was on my best welfare.',
      'I feel honored to write about Mr. Amjad Javed Hashmi Founder and Chief Advisor of TAX Pulse. I could never find enough words to truly express his genius. His great knowledge, command and clarity over TAX Laws, his logical analysis and artful crafting of arguments are inconceivable and great learning for me always. Most of all, he is one of the most genuine people you will ever hope to meet. Precise, Fair, Committed & Prompt legal consultancy is what we expect from legal counsel and that is exactly what TAX PULSE delivers!',
      'I will proudly refer TAX PULSE to corporate clients, friends or family.',
    ],
    homeParagraphs: [
      'It brings me immense satisfaction to share my wonderful experience with Taxpulse.com while consulting them for my tax matters. I was truly impressed by their unparalleled level of expertise and professionalism, which exceeded all my expectations.',
      'I feel honored to write about Mr. Amjad Javed Hashmi Founder and Chief Advisor of TAX Pulse. I could never find enough words to truly express his genius. His great knowledge, command and clarity over TAX Laws, his logical analysis and artful crafting of arguments are inconceivable and great learning for me always. Most of all, he is one of the most genuine people you will ever hope to meet. Precise, Fair, Committed & Prompt legal consultancy is what we expect from legal counsel and that is exactly what TAX PULSE delivers!',
      'I will proudly refer TAX PULSE to corporate clients, friends or family.',
    ],
    attribution: '~ Ahmad Raza Khan | CEO – ECOMS.',
  },
];
