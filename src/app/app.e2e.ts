import { browser, by, element } from 'protractor';

describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular2 Sonny Webpack';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <home>', () => {
    let subject = element(by.css('sg-app sg-home')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
});
