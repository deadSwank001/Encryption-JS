// Languages dictionaries 
const translations = {
    'pt-br': {},
    'en': {}
};

// Function to load the translations in JSON file
function loadTranslations(language){
    return fetch(`/locales/${language}.json`)
        .then(response => response.json())
        .then(data => translations[language] = data);
};

// Function to change the language
function changeLanguage(language){
    const translation = translations[language];
    if (translation) {
        document.querySelector('h1').innerText = translation.title;
        document.getElementById('locationButton').innerText = translation.button;
        document.getElementById('cordinatesTitle').innerText = translation.cordinatesTitle;
        document.getElementById('qrcodeTitle').innerText = translation.qrcodeTitle;
    } 
}

// Load the translations to init of aplications
loadTranslations('en').then(() => {
    loadTranslations('ptbr').then(() =>{
        // Select english as main lang
        changeLanguage('en');
    });
});
