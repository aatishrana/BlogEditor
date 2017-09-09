import { BlogEditorPage } from './app.po';

describe('blog-editor App', () => {
  let page: BlogEditorPage;

  beforeEach(() => {
    page = new BlogEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
