import { ProgectPage } from './app.po';

describe('progect App', function() {
  let page: ProgectPage;

  beforeEach(() => {
    page = new ProgectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
