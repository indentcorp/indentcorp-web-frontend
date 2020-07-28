export const MenuList = {
  IndentCorp: '¶   indent corp.',
  Vreview: '✓   vreview',
  Culture: '◊   indenter’s culture',
  Recruit: '+   recruit',
  WeAre: '↳   we are indenters',
  ContactUs: '@   contact us',
};

export type Titles =
  | typeof MenuList.IndentCorp
  | typeof MenuList.Vreview
  | typeof MenuList.Culture
  | typeof MenuList.Recruit
  | typeof MenuList.WeAre
  | typeof MenuList.ContactUs;
