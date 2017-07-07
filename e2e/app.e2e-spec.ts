import { Ng2FamilyTreePage } from './app.po';

describe('ng2-family-tree App', () => {
  let page: Ng2FamilyTreePage;

  beforeEach(() => {
    page = new Ng2FamilyTreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
