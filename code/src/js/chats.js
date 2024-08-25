import '../css/styles.css';
import Alpine from 'alpinejs';
// Note: Remove faker imports on production
import { faker } from '@faker-js/faker/locale/fa';
import themeStore from './stores/theme';
import sidebarStore from './stores/sidebar';
import './utils/window-loading';

// Generating fake users
const users = faker.helpers.multiple(
  () => ({
    name: faker.person.fullName(),
    online: Math.random() < 0.5,
  }),
  {
    count: 10,
  }
);

document.addEventListener('alpine:init', () => {
  Alpine.data('users', () => ({ users }));
});

Alpine.store('theme', themeStore);

Alpine.store('sidebar', sidebarStore);

Alpine.store('chatDrawer', {
  expanded: false,

  toggle() {
    this.expanded = !this.expanded;
  },
});

Alpine.start();
