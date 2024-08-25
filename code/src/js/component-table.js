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
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
    location: faker.location.country(),
    lastLogin: faker.date.anytime().toLocaleDateString('fa-IR'),
    favoriteColor: faker.color.human(),
  }),
  {
    count: 20,
  }
);

document.addEventListener('alpine:init', () => {
  Alpine.data('users', () => ({ users }));
});

Alpine.store('theme', themeStore);

Alpine.store('sidebar', sidebarStore);

Alpine.start();
