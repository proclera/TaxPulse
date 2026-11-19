export interface SocialLink {
  id: 'facebook' | 'linkedin' | 'x' | 'whatsapp' | 'instagram';
  label: string;
  href: string;
}

export const FIRM_INFO = {
  brandName: 'Tax Pulse',
  fullTitle: 'Tax Pulse – Tax Litigation Experts',
  established: '2003',
  barRegistration: 'Registered with Sindh Bar Council vide registration number 351',
  primaryEmail: 'info@taxpulse.com',
  primaryPhoneDisplay: '+92 21 3582 1757',
  primaryPhoneHref: 'tel:02135821757',
  copyright: '© 2003 - 2023 Tax Pulse',
  logo: {
    src: '/taxpulse-assets/2017/08/logo.png',
    originalUrl: 'https://www.taxpulse.com/wp-content/uploads/2017/08/logo.png',
    alt: 'Tax Pulse',
  },
  socialLinks: [
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/TaxPulsePakistan/',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tax-pulse/',
    },
    {
      id: 'x',
      label: 'X (Twitter)',
      href: 'https://x.com/TaxPulse_?t=dFe_CF-l8ofYgAlxSSxVLQ&s=08',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/+923332132059?text=',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/TaxPulsePakistan/',
    },
  ] as SocialLink[],
};

export const HOME_CONTENT = {
  seoTitle: 'Leading Tax Consultants in Pakistan | Book Case Assessment | Tax Pulse',
  seoDescription:
    'Formal legal case assessments, litigation defense, and corporate tax retainer-ship in Pakistan across Income Tax, Sales Tax, Customs, and Federal Excise.',
  hero: {
    headline: 'Pakistan’s Leading Tax Consultancy',
    quote:
      '‘ Tax Pulse always offers effective solutions to complex legal issues. Their forte is their speed and swift response. We believe that they are the finest lawyers a litigant can find in our legal system. ’',
    quoteAuthor: '– Zaheer Allana, Bin Qasim (Pvt) Ltd.',
    backgroundImage: '/taxpulse-assets/2017/08/income-tax-slide.jpg',
    primaryCtaLabel: 'Request Case Assessment',
    secondaryTeamLabel: 'Our Team',
    secondaryContactLabel: 'Get in Touch',
  },
  freeAdviceCta: {
    heading: 'Book a Case Assessment',
    body: 'For corporate briefs, Show Cause Notices, appellate filings, and retainer-ship mandates, submit your matter details for structured screening with our Principal Advocate and litigation team. Consultation terms apply upon case review.',
    buttonLabel: 'Proceed to Case Assessment',
  },
  whyChooseUsHeading: 'Why Choose Us',
  whyChooseUs: [
    {
      title: 'Competence',
      description:
        'Apart from assisting our clients in handling routine matter of tax compliance and litigation; our tax consultancy / law firm has the set of competencies to even constitutionally challenge any ultra vires exercise of powers and to get restraining orders from courts accordingly.',
    },
    {
      title: 'One-Window Operation',
      description:
        'We are one-window tax consultancy i.e. income tax (with specialization in international taxation), sales tax, federal excise duty, customs, provincial and local government taxes, not to mention our expertise in FIA/NAB, money-laundering and corporate cases.',
    },
    {
      title: 'Experience',
      description:
        'We have the skills, experience, capacity and work-force to contest the cases of our client with the same vigor and force both at the original as well as appellate litigation forums i.e. up to High Court and the Supreme Court.',
    },
  ],
  galleryHeading: 'Our Gallery',
  galleryCtaLabel: 'View All',
  galleryPreviewImages: [
    {
      src: '/taxpulse-assets/2023/09/Opening-Ceremony-of-Taxpulse-Multan-office-5-300x250.jpg',
      alt: 'Opening Ceremony of Taxpulse Multan office (5)',
      albumRoute: '/opening-ceremony-of-tax-pulse-in-multan/',
    },
    {
      src: '/taxpulse-assets/2023/09/Opening-Ceremony-of-Taxpulse-Multan-office-4-300x250.jpg',
      alt: 'Opening Ceremony of Taxpulse Multan office (4)',
      albumRoute: '/opening-ceremony-of-tax-pulse-in-multan/',
    },
    {
      src: '/taxpulse-assets/2023/09/Opening-Ceremony-of-Taxpulse-Multan-office-3-300x250.jpg',
      alt: 'Opening Ceremony of Taxpulse Multan office (3)',
      albumRoute: '/opening-ceremony-of-tax-pulse-in-multan/',
    },
    {
      src: '/taxpulse-assets/2023/09/Opening-Ceremony-of-Taxpulse-Multan-office-2-300x250.jpg',
      alt: 'Opening Ceremony of Taxpulse Multan office (2)',
      albumRoute: '/opening-ceremony-of-tax-pulse-in-multan/',
    },
    {
      src: '/taxpulse-assets/2023/09/Opening-Ceremony-of-Taxpulse-Multan-office-1-300x250.jpg',
      alt: 'Opening Ceremony of Taxpulse Multan office (1)',
      albumRoute: '/opening-ceremony-of-tax-pulse-in-multan/',
    },
    {
      src: '/taxpulse-assets/2023/09/ICMA-Event-14-300x250.jpeg',
      alt: 'ICMA Event-14',
      albumRoute: '/icma-event-2/',
    },
    {
      src: '/taxpulse-assets/2023/09/ICMA-Event-17-300x250.jpeg',
      alt: 'ICMA Event-17',
      albumRoute: '/icma-event-2/',
    },
    {
      src: '/taxpulse-assets/2023/09/ICMA-Event-300x250.jpeg',
      alt: 'ICMA Event',
      albumRoute: '/icma-event-2/',
    },
  ],
};

export const ABOUT_US_CONTENT = {
  seoTitle: 'About Tax Pulse - Advocates and Tax Litigation Experts',
  seoDescription:
    'Second to none, we are a well-known law firm across Pakistan, lobbying the concerns of aggrieved tax payers before FBR’s policy makers.',
  pageTitle: 'About Us',
  leadHeading: 'What Can You Expect From Us?',
  leadParagraph:
    'We are a well-known law firm across Pakistan, headed by Mr. Amjad Javaid Hashmi. Our cumulative experience runs over seventy years. We are second to none in lobbying the concerns of any aggrieved taxpayer before FBR’s policy makers, as well as balancing before tax authorities the demands of tax compliance with the taxpayer’s correct legal rights/obligations.',
  markAlt: 'Income Tax, Sales Tax, Excise & Customs Litigation Experts',
  overviewParagraphs: [
    'A fast-emerging law firm established in 2003, Tax Pulse is also registered with Sindh Bar Council vide registration number 351. It has made landmark achievements in the development of tax and business law in terms of growing number of reported judgments of the High Courts and the Tribunals in the areas intersecting at constitutional, tax and business laws.',
    'The Principal of our law firm has brought to the service of the law firm almost forty (40) years of knowledge, skills and expertise in the fields of administrative, business, corporate and fiscal laws. In the circles of tax lawyers in Pakistan, he is well respected for pioneering stock option taxation.',
    'Our clientele is diverse which ranges from private companies to multinationals, association of persons, banks and government departments like FBR. The law firm also provides retainer-ship services to its clients based in Lahore and Karachi.',
    'Mr. Amjad Javed Hashmi, the principal lawyer, is a visiting professor to Hamdard School of Law and also teaches law to postgraduate and master-level students in S.M. Law College. His articles are regularly published in the local newspapers and he also has many reported judgments to his credit.',
  ],
  missionHeading: 'Our Mission & Values',
  missionParagraph:
    'We tell our clients what they owe to law in terms of their obligations. We tell our clients what law owes to them in terms of their rights. We tell our clients as to what are the limitations of powers of a public authority proverbial (executive, legislative & judicial) and, therefore, the consequent success pulls them sooner out of the agony embedded in unformulated litigation strategy.',
  clientCareHeading: 'Client Care is Our Strength',
  clientCareParagraphs: [
    'Our satisfied clients and their continuous referral and patronage have built our practice. We thank them all. We initiated as tax litigation experts but have by now, by continues pouring in of new work from our existing clients over the past fourteen years, graduated into the top-ranking law firm in the fields of constitutional, taxation, business, corporate and criminal law (NAB and FIA). We are humbled in acknowledging our status of a lawyers’ lawyer in the field of tax litigation and constitutional issues.',
    'While serving our clients, we are governed by the core values of confidentiality, trust, timeliness and accuracy. Our professionalism is underwritten by competence in professional analysis, excellence in desired output and commitment in service delivery.',
  ],
};

export const INTERNATIONAL_TAXATION_PAGE_CONTENT = {
  seoTitle: 'Articles on International Taxation by Mr. Amjad Javed Hashmi',
  seoDescription:
    'Insightful articles on International Taxation keeping in view the tax laws in Pakistan, by Mr. Amjad Javed Hashmi - a leading tax consultant and visionary.',
  pageTitle: 'International Taxation',
  archiveIntro:
    'Articles on International Taxation by Mr. Amjad Javed Hashmi, a leading tax consultant in Pakistan.',
  heroImage: '/taxpulse-assets/2017/08/international-taxation-slide.jpg',
  leadSentence:
    'Many small and medium size firms now engage in cross-border transactions that cause them and their tax advisers to face international tax issues rather regularly.',
  primerAttribution:
    'Brian J Arnold and Michael J. McIntyre in the introduction to their book titled International Tax Primer, second edition, very aptly wrote;',
  primerQuote:
    '“As the countries of the world have become increasingly integrated economically, the importance of these issues has mushroomed. Many small and medium size firms now engage in cross-border transactions that cause them and their tax advisers to face international tax issues rather regularly.”',
  primerBookUrl:
    'https://www.amazon.com/International-Tax-Primer-Brian-Arnold/dp/9041159754',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/International_taxation',
  wpPageParagraphs: [
    'The world today has become a global village and the capital and human resources move freely in today’s world economy giving rise to issues of international taxation. Pakistan is a land of opportunity being a growing economy wherein international investors, multinational companies work hard to exploit such business opportunities and hence their need to know the international tax aspects while making the right decisions.',
    'The CPEC (China Pakistan Economic Corridor) opportunity is a case in point and our law firm is well-geared to extend necessary tax sensitive advice to defend their tax rights in the context of Pakistani tax laws. The potential investors and MNCs seeking to set up business in Pakistan can benefit in broader terms from the four articles on international tax aspects of Pakistani tax laws.',
    'Our firm is ready to offer tax advice to global entrepreneurs with reference to specific facts/problems and the circumstances as the case may be.',
  ],
};

export const CONTACT_PAGE_CONTENT = {
  seoTitle: 'Request Case Assessment & Legal Counsel | Tax Pulse Pakistan',
  seoDescription:
    'Submit your Income Tax, Sales Tax, Customs, Federal Excise, or International Taxation brief for formal case screening and representation across Karachi, Lahore, Islamabad, and Multan.',
  pageTitle: 'Contact Us',
  heading: 'Case Assessment & Counsel Intake.',
  introParagraphs: [
    'To ensure focused representation and avoid unscheduled general calls, all partner consultations begin with a structured case brief. Complete the triage details below so our Principal Expert – Mr. Amjad Javed Hashmi – or the relevant regional chamber can review your notice, forum, and timeline.',
    'Initial partner consultations are formal legal assessments (consultation fee applies and is communicated upon brief screening before scheduling). For urgent High Court, Tribunal, or corporate retainer-ship mandates, we endeavour to respond within twenty-four hours.',
  ],
  formFields: {
    namePlaceholder: 'Enter Your Full Name',
    companyPlaceholder: 'Enter Your Company or Firm Name',
    ntnPlaceholder: 'Optional: NTN or Show Cause Notice Ref.',
    emailPlaceholder: 'Enter Your Business Email Address',
    phonePlaceholder: 'Enter Your Direct Contact Number',
    messagePlaceholder:
      'Summarize the tax year, notice section (e.g. u/s 122, 161, SRB, Customs), disputed amount or compliance requirement, and hearing date.',
    submitLabel: 'Submit Case Brief for Review',
  },
  lahoreMapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870172.0914461947!2d73.10969267812499!3d31.57603859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b92c1df17bb%3A0x990672054064c50!2sBadar%20Centre!5e0!3m2!1sen!2s!4v1725034445345!5m2!1sen!2s',
};
