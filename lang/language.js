function getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
  }
  
  function loadTranslations(language) {
    let jsonFile = '../lang/en.json';
  
    if (language.startsWith('fr')) {
      jsonFile = '../lang/fr.json';
    }
  
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        applyTranslations(data);
      })
      .catch(error => {
        console.error('Error loading language file:', error);
      });
  }
  
  function applyTranslations(translations) {
    const elements = document.querySelectorAll('[data-translate]');
  
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = translations[key];
  
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  const language = getBrowserLanguage();
  loadTranslations(language);
  