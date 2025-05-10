export default class BookmarkPage {
  async render() {
    return '';
  }

  async afterRender() {
    alert('Halaman story tersimpan akan segera hadir!');

    location.hash = '/';
  }
}
