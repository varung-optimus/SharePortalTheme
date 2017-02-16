import { SharePortalPage } from './app.po';

describe('share-portal App', function() {
  let page: SharePortalPage;

  beforeEach(() => {
    page = new SharePortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
