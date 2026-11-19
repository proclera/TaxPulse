export interface TeamMember {
  id: string;
  name: string;
  displayName: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  email?: string;
  profileRoute?: string;
}

export const TEAM_META = {
  seoTitle: 'Meet the Dynamic Team at Tax Pulse - Sales Tax Consultants',
  seoDescription:
    'With over 70 years of experience and led by Mr. Amjad Javed Hashmi, the very dynamic team, are what make Tax Pulse the very best income tax consultancy.',
  pageTitle: 'Our Team',
  lahorePageTitle: 'Lahore office of Taxpulse',
  leadHeading: 'Meet Our Talented Team.',
  intro:
    'With over seventy (70) years of cumulative experience, our very talented team is headed by Mr. Amjad Javed Hashmi. Under his capable leadership, we strive hard to help our clients make informed decisions in view of their rights and obligations.',
};

export const CORE_TEAM: TeamMember[] = [
  {
    id: 'amjad-javed-hashmi',
    name: 'Amjad Javed Hashmi',
    displayName: 'Amjad-Javed-Hashmi',
    role: 'Managing Partner',
    bio: 'Click Here for Profile',
    image: '/taxpulse-assets/2023/07/Amjad-Javed-Hashmi.png',
    imageAlt: 'Amjad Javed Hashmi',
    email: 'ajhashmi@taxpulse.com',
    profileRoute: '/amjad-javed-hashmi-tax-consultant/',
  },
  {
    id: 'ghulam-rabbani',
    name: 'Ghulam Rabbani',
    displayName: 'Ghulam-Rabbani',
    role: 'Senior Partner',
    bio: 'Ghulam Rabbani holds the degrees of B.Com, ICMA (Inter), MBA, LLB from the University of Karachi. He has about 15 years’ experience in Taxation, Corporate, Audit and Accounts. He is also a respected member of the Karachi Tax Bar Association.',
    image: '/taxpulse-assets/2023/07/Ghulam-Rabbani.png',
    imageAlt: 'Ghulam Rabbani',
  },
  {
    id: 'naeem-noor',
    name: 'Naeem Noor',
    displayName: 'Naeem Noor',
    role: 'Advocate High Court',
    bio: 'Naeem holds a Bachelor’s in Commerce. He did his LLB and LLM from University of Karachi. He is experienced in handling both tax and civil matters at original as well as appellate sides. He has also served as member Managing Committee of Karachi Tax Bar Association.',
    image: '/taxpulse-assets/2017/08/Naeem-Noor.png',
    imageAlt: 'Naeem Noor',
  },
  {
    id: 'yousof-ali',
    name: 'Yousof Ali',
    displayName: 'Yousof Ali',
    role: 'Partner/Head of Litigation',
    bio: 'Yousuf Ali completed his graduation in Commerce from Karachi University in 2012. He did his LLB from S.M. Law College Karachi in 2014 and thereafter joined our law firm as an apprentice. He assists senior partners in the firm in legal research and drafting. Yousof Ali is well-conversant with both direct and indirect tax laws of Pakistan.',
    image: '/taxpulse-assets/2017/08/Yousof-Ali.jpg',
    imageAlt: 'Yousof Ali',
  },
];

export const LAHORE_TEAM: TeamMember[] = [
  {
    id: 'syed-tahir-abbas-zaidi',
    name: 'Syed Tahir Abbas Zaidi',
    displayName: 'Syed Tahir Abbas Zaidi',
    role: 'Advocate of High Court',
    bio: 'Syed Tahir Abbas Zaidi is an Advocate of High Court and alumnus of Punjab Law College. His career spanning on more than 25 years encompasses representation of corporate and non-corporate clients.\n\nHe has numerous cases on his credit which he presented before the higher appellate forums and won the same based on his knowledge of Pakistan tax laws. His hands on experience with In-Direct tax laws of Pakistan in particular and with Direct tax laws in general gave the firm exclusive edge over the tax practicing fraternity of Lahore. He is also the life member of Lahore High Court Bar Association, Lahore Bar Association and Lahore Tax Bar Association and also plays an active role in Lahore Tax Bar Association.',
    image: '/taxpulse-assets/2023/09/WhatsApp-Image-2023-09-22-at-8.44.01-PM.jpeg',
    imageAlt: 'Syed Tahir Abbas Zaidi',
  },
  {
    id: 'syed-zeeshan-haider-zaidi',
    name: 'Syed Zeeshan Haider Zaidi',
    displayName: 'Syed Zeeshan Haider Zaidi',
    role: 'Advocate of High Court',
    bio: 'Syed Zeeshan Haider Zaidi is an Advocate of High Court and a Law graduate from Quaid-e-Azam Law College, Mr. Zaidi started his professional career with Ansari Law Associates a leading law firm extremely well known in the banking industry there he worked with a leading lawyer Mr. Muhammad Khalid Mehmood Khan who subsequently elevated as a Judge of Lahore High Court Lahore and after his retirement from the High Court Mr. Zaidi assisted him in Supreme Court of Pakistan. Mr. Zaidi is also a known lawyer in the local banking circles and has successfully prosecuted recovery cases on behalf of various financial institutions, in Banking and High Courts. He has a 14 years of experience in the field of banking Law, Corporate and Civil matters.\n\nHe being a mediator provided services for mediation and settled many cases of bank loans with various Financial Institutions. He is also the life member of Lahore High Court Bar Association, Lahore Bar Association and Lahore Tax Bar Association and also plays an active role in Lahore Tax Bar Association.',
    image: '/taxpulse-assets/2023/09/pk-229x300.jpg',
    imageAlt: 'Syed Zeeshan Haider Zaidi',
  },
  {
    id: 'syed-qaim-ali',
    name: 'Syed Qaim Ali, ACA',
    displayName: 'Syed Qaim Ali, ACA',
    role: 'Chartered Accountant',
    bio: 'A Qualified Chartered Accountant from Institute of Chartered Accountants of Pakistan, Mr. Qaim’s more than 10-year long career encompasses his long term association with the renowned global Chartered Accountants firms in Pakistan. He worked as Manager Taxation in Grant Thornton Pakistan for more than 6 years before joining the firm.\n\nHe has hands on experience in providing accounting and taxation services to national and international clients in terms of both Pakistan and International tax laws. His accounting knowledge coupled with sharp knowledge of domestic tax laws makes him valuable resource for the firm.',
    image: '/taxpulse-assets/2023/09/aaa-224x300.jpg',
    imageAlt: 'Syed Qaim Ali, ACA',
  },
];

export const AMJAD_PROFILE = {
  seoTitle: 'Tax Lawyer Par Excellence - Amjad Javed Hashmi',
  seoDescription:
    'A former govt. executive in the tax service of Pakistan, a tax lawyer with command in taxation, commercial laws, business practice, finance and Accounting.',
  name: 'Amjad Javed Hashmi',
  subtitle: 'Principal Lawyer',
  portrait:
    '/taxpulse-assets/2023/07/Amjad-Javed-Hashmi.png',
  portraitAlt: 'Amjed Javed Hashmi - Tax Lawyer Par Excellence',
  intro:
    'An entrepreneurial, multidisciplinary career of 35 years as a senior govt. executive in the tax service of Pakistan (28 years) reinforced by a new career of a tax lawyer (13th year of law practice) with solid command in the field of taxation, commercial laws, business practice, finance and Accounting. An adjunct professor of taxation laws at two local universities and a sought-after speaker, writer and lecturer on the issues relating to tax policy, legislation, management and culture by various professional bodies i.e. Institute of Corporate Secretaries of Pakistan, Management Association of Pakistan, Institute of Cost and Management Association of Pakistan, IBA Karachi.',
  profilePdfUrl: '/taxpulse-assets/2023/09/Profile-Mr.-Amjad-Hashmi.pdf',
  profilePdfOriginalUrl:
    'https://www.taxpulse.com/wp-content/uploads/2023/09/Profile-Mr.-Amjad-Hashmi.pdf',
  videoEmbedUrl: 'https://www.youtube.com/embed/_KhKjSvYwGs',
  videoTitle: 'Amjad Javed Hashmi – Principal Lawyer Profile Video',
  profilePoints: [
    'Strong academic and professional background of a retired tax executive as an head of audit, investigation, enforcement and legal divisions in the service of Federal Board of Revenue, Govt. of Pakistan for 28 years',
    'Reinvented the second career as a tax lawyer (income tax, VAT, customs duty and federal and federal excise and corporate affairs). Presently leading a tax law firm with a track record of positive litigation outcomes, huge tax savings, refund of excess taxes and reporting of important tax cases in the tax journals: 2007. PTD 1780, 2010 PTD (tribunal) 81.',
    'Steadily expanding client base from corner shop to the multinational companies and state owned enterprises.',
    'Well trained and hands on experience in legal research, fiscal management and public administration.',
    'Excellent written, interpersonal and presentation skills.',
    'Solid problem solving project management and decision making skills.',
    'Proven ability to prioritize and complete multiple tasks.',
    'Visionary and a critical thinker.',
    'Proactive and a consummate team builder.',
    'Inquisitive by nature.',
    'Passionate about improving the business process and motivation of the work force.',
    'Having no trouble in working under pressure and still being able to give results and meet deadlines.',
  ],
  education: [
    'M.A. (English) – University of The Punjab, Lahore',
    'L.L.B. (Bachelor of Law) – University of Karachi',
  ],
  awards: [
    'The then Minister for Finance and Economics Affairs awarded special meritorious reward of Rs.1 (M) in August, 1999, on unearthing a pattern of tax evasion of around 150 million in payroll taxation. The name of the game was that the employees of a few Multinationals failed to report for tax purposes the market value of the Stock Options.',
    'And to acknowledge the above contribution a new provision: Section 14 (Employees Share Scheme) was introduced in the Income Tax Ordinance, 2001',
  ],
  honors: [
    'Member “Task Force on domestic Resources Mobilization” as constituted in August, 1999 by the then Minister / Deputy Chairman, Planning Commission, Pakistan.',
    'Member – CBR’s Review Committee on recommendation of IMF on Withholding taxes.',
    'Member –CBR Review Committee on PRS Bill.',
    'Guest speaker IBA, MAP (Management Association of Pakistan), SZABIST, ICMA, ICSP, Directorate of Training (income tax and sales tax) at Lahore and Karachi.',
  ],
  experienceLead:
    'He started tax practice in March 2003 as tax lawyer of Sindh High Court, Karachi soon after voluntary retirement as Commissioner of Income Tax:',
  experiencePost2003: [
    'Six years practice in tax litigation and advisory services with respect to local and international tax issues in the fields of both direct and indirect taxes has resulted in client’s tax savings exceeding Rs.50 million and refunds of excess taxes exceeding Rs.100 million.',
    'Successfully resolved many tax controversies at the level of the High Court, and special mention deserves the controversy which I won with respect to refund rights of taxpayer within the scope of Section 170 of the new Income Tax Ordinance, 2001. The case was duly reputed in the tax journals of Pakistan: 2007 PTD 1780.',
    'Twice appointed as a Commission by the Customs, Excise and Sales tax Appellate Tribunal, Karachi, Pakistan to resolve some tough tax law issues.',
    'Directed compliance driven tax regulatory reporting; and internal/external financial reporting.',
    'Won a management consultancy tender floated by the Export promotion Bureau (now TDAP).',
    'Engaged as an adjunct faculty on taxation laws by some well reputed universities (S.M.LAW COLLEGE) and Hamdard School of Law and on corporate governance by National Institute of Banking and Finance (NIBAF), Karachi Pakistan.',
  ],
  careerStages: [
    {
      period: 'From 1997 to 2002: Commissioner Income tax (Divisional Head)',
      summary:
        'This leadership assignment involved chartering of overall strategic direction and feed back to policy formulation with focus on planning, managing, empowering, motivating, delegating cross functional teams along with alignment of individual goals with organizational objectives.',
      bullets: [
        'Captained three functional divisions: Corporate, Withholding Taxes Monitoring and Appellate.',
        'Supervised four key departments, four general managers and a staff of 500 people.',
        'Successfully reengineered business processes while heading Withholding Taxes Division and it registered a record growth of tax revenue from a baseline of Rs. 16 billion to Rs. 22 billion.',
        'Ensured quality service to the tax payers by enforcing strict standards of procedural justice across all the administrative layers under my oversight.',
        'Unearthed high profile cases of tax evasion and special mentioning is deserved for 100 plus cases of tax evasion in respect of taxable income received by way of stock options but not reported by the executives of almost all the Multinational companies (MNCs) operating in Karachi, Pakistan.',
        'Analyzed the revenue impact of significant pending and newly introduced tax legislation and court findings.',
        'Established and nurtured relationships with the key stake holders like Chamber of Commerce, Income Tax Bar, professional bodies, staff union, and the community of tax payers at large.',
        'Proposed innovative policy changes to the national tax office on the basis of the analysis of the annual operational reports.',
        'Tapped into dozens of new sources of tax revenues that have made a lifetime contribution to the tax revenue of Pakistan.',
        'Empowered and motivated the workforce and institutionalized the strengths of the outstanding managers and officials.',
      ],
    },
    {
      period: 'From 1988 to 1997: Inspecting Additional Commissioner (General Manager)',
      summary:
        'As a middle management assignment it involved the quality control of business operations in respect of tax levy, assessment and revenue collection with focus on meeting the budgetary targets.',
      bullets: [
        'Supervised 5 to 7 senior managers involved in the work of tax management of various jurisdictions.',
        'Conducted hands on training workshops for an effective withholding taxes auditing and enforcing.',
        'Prepared new training manual for effective implementation of the newly introduced Capital Value Tax in 1990s.',
        'Prepared operational analysis of monthly results, trends and risk profiling for reports to the senior management.',
        'Conducted internal inspection reports and recommendation for the operational efficiency of the subordinate offices.',
        'Introduced whistle blowing techniques in the monitoring process of Capital Value Tax and achieved highest level of tax compliance',
        'Identified the lost man hours and drastically curtailed the process flow from 12 days to 3 days in the tax accounting department while managing an information technology assignment.',
      ],
    },
    {
      period: 'From 1977 to 1986: Income Tax Executive (Entry and Senior Level Executive)',
      summary:
        'It was an entry level assignment of the civil service as a tax executive who initiates and enforces the entire tax compliance business cycle in accordance with the federal tax laws.',
      bullets: [
        'Supervised 10 officials and support staff assigned to look after various stages of business cycle from tax filing to tax recovery.',
        'Prepared and analyzed the monthly performance reports and recommended for improved efficiency.',
        'Maintained the standard operating procedures.',
        'Assisted the senior management in fine tuning the operational procedures.',
        'Reviewed the internal inspection reports and external auditing reports.',
        'Addressed inquires and complaints from the tax payers, tax practitioners and the business community.',
        'Contributed articles in the esteemed newspapers and tax journals on various hot tax issues with focus on enhancing the effectiveness of the tax machinery.',
        'Produced quality tax assessment reports by in-depth analysis and interpretation of annual returns, income statements, balance sheets and allied data.',
        'Identified various patterns of tax avoidance and evasion in specific sectors of the economy and formulated remedial measures.',
      ],
    },
  ],
  communityService: [
    'Guest speaker on current tax issues: institute of Business Administration, (IBA) Karachi, and Institute of Corporate Secretaries of Pakistan and University of Karachi.',
    'Member, American Management Association and Member, Management Association of Pakistan.',
    'Ex Member- Pakistan Society of Development of Economics.',
    'President, Rotary Karachi, City Hills 2002 – 2003.',
  ],
};
