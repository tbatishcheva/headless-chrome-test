const CDP = require('chrome-remote-interface');
const chromeLauncher = require('chrome-launcher');

// ...

function launchChrome(headless=true) {
    return chromeLauncher.launch({
        // port: 9222, // Uncomment to force a specific port of your choice.
        chromeFlags: [
            '--window-size=412,732',
            '--disable-gpu',
            headless ? '--headless' : ''
        ]
    });
}

launchChrome().then(async chrome => {
    const version = await CDP.Version({port: chrome.port});
    console.log(version['User-Agent']);
});
