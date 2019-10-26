https://developers.google.com/web/updates/2017/04/headless-chrome

chrome --headless --disable-gpu  --remote-debugging-port=9222 https://www.chromestatus.com

chrome --headless --disable-gpu --repl --crash-dumps-dir=./tmp http://192.168.4.66:3000/

chrome --headless --disable-gpu --screenshot --window-size=1280,1696 http://192.168.4.66:3000/

node screenshot.js http://192.168.4.66:3000/

node printTheUserAgent.js http://192.168.4.66:3000/

node screenshotOfThePage.js http://192.168.4.66:3000/

node checkIfTheSiteHasaWebAppManifest.js http://192.168.4.66:3000/

node extractTheTitle.js http://192.168.4.66:3000/

node UsingChromeDriver.js http://192.168.4.66:3000/

node UsingWebDriverIO.js http://192.168.4.66:3000/


