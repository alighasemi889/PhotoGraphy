import '../css/styles.css';
import Alpine from 'alpinejs';
// Note: Remove faker imports on production
import { faker } from '@faker-js/faker/locale/fa';
import themeStore from './stores/theme';
import sidebarStore from './stores/sidebar';
import './utils/window-loading';

const users = faker.helpers.multiple(
  () => ({
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    lastLogin: faker.date.anytime().toLocaleDateString('fa-IR'),
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

Alpine.start();
