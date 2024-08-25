import { themeNames } from '../themes';

const themeIsValid = (themeName) => {
  return themeNames.findIndex((theme) => theme.enName === themeName) !== -1;
};

// Extract the theme name from the query string using RegExp
let queryTheme = null;

if (window.location.search) {
  const result = /theme=([A-z]+)/.exec(window.location.search);

  if (result && result.length > 1) {
    /*
      If the specified theme is a valid theme set the queryTheme variable value
      in order to apply the saved theme in the browser's local storage
    */
    if (themeIsValid(result[1])) {
      queryTheme = result[1];
    }
  }
}

export default {
  /*
    #1 priority: specified theme in the query string
    #2 priority: saved theme in the browser's local storage
    #3 priority: "light" theme as the default theme
  */
  themeName: queryTheme || localStorage.getItem('theme') || 'light',
  themesList: themeNames,

  setTheme(themeName) {
    if (!themeIsValid(themeName)) {
      return console.error('The given theme does not exist!');
    }

    this.themeName = themeName;

    // Save the chosen theme in the browser's local storage
    localStorage.setItem('theme', this.themeName);

    // Reload the current window in order to apply the new theme
    // Note: When the user changes the theme, query string parameters from the URL will be removed
    window.location = window.location.href.replace('#', '').split('?')[0];
  },
};
