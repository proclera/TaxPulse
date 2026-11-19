export interface OfficePhone {
  display: string;
  contactPageDisplay?: string;
  href: string;
}

export interface OfficeLocation {
  id: 'karachi' | 'lahore' | 'islamabad' | 'multan';
  city: string;
  footerHeading: string;
  address: string;
  branchHead?: string;
  phones: OfficePhone[];
  email: string;
  mapUrl?: string;
}

export const OFFICES: OfficeLocation[] = [
  {
    id: 'karachi',
    city: 'Karachi',
    footerHeading: 'Karachi Office',
    address: 'Suit No.14, 6th Floor, Rimpa Plaza, M.A Jinnah Road Karachi, Pakistan',
    phones: [
      {
        display: '021 3582 1757',
        contactPageDisplay: '+92 21 3582 1757',
        href: 'tel:02135821757',
      },
      {
        display: '03042970595',
        contactPageDisplay: '03042970595',
        href: 'tel:03042970595',
      },
    ],
    email: 'info@taxpulse.com',
    mapUrl: 'https://goo.gl/maps/UeSUExZHYbZvSJnU9',
  },
  {
    id: 'lahore',
    city: 'Lahore',
    footerHeading: 'Lahore Office',
    address: '2nd Floor, Badar Centre, 5 Mclagon Road, Lahore, Pakistan',
    branchHead: 'Syed Tahir Abbas Zaidi',
    phones: [
      {
        display: '+92-42-7122735',
        contactPageDisplay: '+92 42 712 2735',
        href: 'tel:+92427122735',
      },
    ],
    email: 'info@taxpulse.com',
  },
  {
    id: 'islamabad',
    city: 'Islamabad',
    footerHeading: 'Islamabad Office',
    address: 'No. 1, Street 2, Sector G-11/1, Islamabad, Pakistan',
    branchHead: 'Nazir Ahmed',
    phones: [
      {
        display: '03345143163',
        contactPageDisplay: '0334-5143163',
        href: 'tel:03345143163',
      },
    ],
    email: 'info@taxpulse.com',
  },
  {
    id: 'multan',
    city: 'Multan',
    footerHeading: 'Multan Office',
    address: '2nd Floor, Ghazi Tower of Khan Center Abdali Road, Multan Cantt',
    branchHead: 'Syed Mudassir Shah',
    phones: [
      {
        display: '03054143542',
        contactPageDisplay: '03054143542',
        href: 'tel:03054143542',
      },
    ],
    email: 'info@taxpulse.com',
    mapUrl: 'https://goo.gl/maps/jewqFRPEBUrrX6BF8',
  },
];
