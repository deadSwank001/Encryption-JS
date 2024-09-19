// Languages dictionaries 
const translations = {
    'pt-br': {
        'title': 'Ecriptador SHA-256',
        'placeholder': 'Digite até 1000 caracteres...',
        'button': 'Encriptar',
        'outputTitle': 'Saída Encriptada:'
    },
    

    'en': {
        'title': 'SHA-256 Encryptor',
        'placeholder': 'Enter up to 1000 characters...',
        'button': 'Encrypt',
        'outputTitle': 'Encrypted Output:'
    }
};

// Function to switch the languages
function switchLanguage(lang){
    document.querySelector('h1').innerText = translations[lang]['title'];
    document.getElementById('inputText').placeholder = translations[lang]['placeholder'];
    document.getElementById('encryptButton').innerText = translations[lang]['button'];
    document.querySelector('footer h2').innerText = translations[lang]['outputTitle']
};

// Event to call the function in language buttons
document.getElementById('ptbr').addEventListener('click', () => switchLanguage('pt-br'));
document.getElementById('en').addEventListener('click', () => switchLanguage('en'));
