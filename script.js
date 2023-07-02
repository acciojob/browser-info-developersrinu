//your JS code here. If required.
    const browserName = navigator.userAgent;
    const version = parseFloat(navigator.appVersion);
    const message = "You are using " + browserName + " version " + version;
    document.getElementById("browser-info").innerText = message;