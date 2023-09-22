interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Visitor'],
  tenantName: 'Business',
  applicationName: 'MyBlog v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View business information', 'View user information'],
  ownerAbilities: ['Manage user information', 'Manage business information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/67b97a64-2254-470e-b785-a9e92e2fc647',
};
