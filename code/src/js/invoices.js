import '../css/styles.css';
import Alpine from 'alpinejs';
// Note: Remove faker imports on production
import { faker } from '@faker-js/faker/locale/fa';
import themeStore from './stores/theme';
import sidebarStore from './stores/sidebar';
import './utils/window-loading';

const invoices = faker.helpers.multiple(
  () => ({
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    date: faker.date.anytime().toLocaleDateString('fa-IR'),
    amount: Number(
      faker.commerce.price({ min: 100_000, max: 9_999_999, dec: false })
    ).toLocaleString(),
    status: Math.random() < 0.5 ? 'PAID' : 'PENDING',
  }),
  {
    count: 10,
  }
);

document.addEventListener('alpine:init', () => {
  Alpine.data('invoices', () => ({ invoices }));
});

Alpine.store('theme', themeStore);

Alpine.store('sidebar', sidebarStore);

Alpine.start();
