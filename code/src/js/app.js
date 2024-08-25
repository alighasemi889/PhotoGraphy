import '../css/styles.css';
import Alpine from 'alpinejs';
import themeStore from './stores/theme';
import sidebarStore from './stores/sidebar';
import './utils/window-loading';

Alpine.store('theme', themeStore);

Alpine.store('sidebar', sidebarStore);

Alpine.start();
