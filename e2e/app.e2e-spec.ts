import { PfmUiPage } from './app.po';

describe('pfm-ui App', function() {
  let page: PfmUiPage;

  beforeEach(() => {
    page = new PfmUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
