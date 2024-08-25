import '../css/styles.css';
import Alpine from 'alpinejs';
import themeStore from './stores/theme';

Alpine.store('theme', themeStore);

Alpine.start();
