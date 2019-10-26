const CDP = require('chrome-remote-interface');

// ...
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

(async function() {

    const chrome = await launchChrome();
    const protocol = await CDP({port: chrome.port});

// Extract the DevTools protocol domains we need and enable them.
// See API docs: https://chromedevtools.github.io/devtools-protocol/
    const {Page} = protocol;
    await Page.enable();

    Page.navigate({url: 'http://localhost:3000/'});

// Wait for window.onload before doing stuff.
    Page.loadEventFired(async () => {
        const manifest = await Page.getAppManifest();

        if (manifest.url) {
            console.log('Manifest: ' + manifest.url);
            console.log(manifest.data);
        } else {
            console.log('Site has no app manifest');
        }

        protocol.close();
        chrome.kill(); // Kill Chrome.
    });

})();
