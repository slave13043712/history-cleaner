/**
 * @author aakimov
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browsingData.remove(
        {
            "since": 0
        },
        {
            "appcache": true,
            "cache": true,
            "cookies": true,
            "downloads": true,
            "fileSystems": true,
            "formData": true,
            "history": true,
            "indexedDB": true,
            "localStorage": true,
            "serverBoundCertificates": true,
            "pluginData": true,
            "passwords": true,
            "webSQL": true
        }
    );
});
