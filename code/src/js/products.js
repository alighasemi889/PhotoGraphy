import '../css/styles.css';
import Alpine from 'alpinejs';
// Note: Remove faker imports on production
import { faker } from '@faker-js/faker/locale/fa';
import themeStore from './stores/theme';
import sidebarStore from './stores/sidebar';
import './utils/window-loading';

const products = faker.helpers.multiple(
  () => ({
    name: faker.commerce.productName(),
    price: Number(
      faker.commerce.price({ min: 100_000, max: 9_999_999, dec: false })
    ).toLocaleString(),
    category: faker.commerce.department(),
    date: faker.date.anytime().toLocaleDateString('fa-IR'),
  }),
  {
    count: 10,
  }
);

document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({ products }));
});

Alpine.store('theme', themeStore);

Alpine.store('sidebar', sidebarStore);

Alpine.start();
