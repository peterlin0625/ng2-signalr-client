import { Ng2SignalrPage } from './app.po';

describe('ng2-signalr App', function() {
  let page: Ng2SignalrPage;

  beforeEach(() => {
    page = new Ng2SignalrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
