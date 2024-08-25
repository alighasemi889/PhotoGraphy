import '../css/styles.css';
import Alpine from 'alpinejs';
// Note: Remove faker imports on production
import { faker } from '@faker-js/faker/locale/fa';
import themeStore from './stores/theme';
import sidebarStore from './stores/sidebar';
import './utils/window-loading';

const coupons = faker.helpers.multiple(
  () => ({
    code: faker.string.alphanumeric({ length: { min: 5, max: 10 } }),
    amount: [
      `${Number(
        faker.commerce.price({ min: 1_000, max: 1_999_999, dec: false })
      ).toLocaleString()} تومان`,
      `${faker.number.int({ min: 1, max: 75 })}%`,
    ][faker.number.int({ min: 0, max: 1 })],
    usage: faker.number.int({ min: 0, max: 1000 }).toLocaleString(),
    date: faker.date.anytime().toLocaleDateString('fa-IR'),
  }),
  {
    count: 10,
  }
);

document.addEventListener('alpine:init', () => {
  Alpine.data('coupons', () => ({ coupons }));
});

Alpine.store('theme', themeStore);

Alpine.store('sidebar', sidebarStore);

Alpine.start();
