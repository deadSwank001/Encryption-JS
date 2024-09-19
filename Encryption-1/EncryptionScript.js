document.getElementById('encryptButton').addEventListener('click', async function() {

    // Get the input text
    const inputText = document.getElementById('inputText').value;

    // Enconde the input text as a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(inputText);

    // Compute the SHA-256 hash
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);

    // Convert the hash buffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Output the hash to the footer
    document.getElementById('output').innerText = hashHex;

});