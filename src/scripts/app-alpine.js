import Alpine from '@alpinejs/csp';

window.Alpine = Alpine;

Alpine.data('dropdown', () => ({
  open: false,
  toggle() {
    this.open = !this.open;
  },
}));

Alpine.start();

console.log('Alpine loaded');
