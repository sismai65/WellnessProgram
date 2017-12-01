import { WellnessProjectPage } from './app.po';

describe('wellness-project App', () => {
  let page: WellnessProjectPage;

  beforeEach(() => {
    page = new WellnessProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
