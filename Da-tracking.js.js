/*  Daddy Analytics -----Tracking Script 
    Rakesh Reddy Nayini --20 Mar 2018 */
// Declaring  JSON Object for Data
var trackData = {};
// Method For Browser Name
var browName = function() {
    // if  Opera 
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    //if UC
    var isUC = ((navigator.userAgent.indexOf(' UBrowser/') != -1) || (navigator.userAgent.indexOf('UCBrowser')) != -1);
    // if Firefox 
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // if Safari  
    var isSafari = /constructor/i.test(window.HTMLElement) || (((navigator.userAgent.indexOf('Safari')) != -1) && ((navigator.userAgent.indexOf('Mobile/')) != -1)) || (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || safari.pushNotification);

    // if Internet Explorer upto ver 11
    var isIntEXP = /*@cc_on!@*/ false || !!document.documentMode;
    // if SamsungBrowser
    var isSamsungBrow = ((navigator.userAgent.indexOf('SamsungBrowser/')) != -1);
    // if Yandex
    var isYandex = ((navigator.userAgent.indexOf('YaBrowser/')) != -1);
    // If Edge 
    var isEdge = ((!isIntEXP && !!window.StyleMedia) || (navigator.userAgent.indexOf('EdgA/') != -1));

    // If Chrome 
    var isChrome = ((!!window.chrome && !!window.chrome.webstore) || ((navigator.userAgent.indexOf('Chrome/')) != -1 && !isEdge && !isSamsungBrow && !isYandex));

    // If Blink 
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browName.Res =
        isOpera ? 'Opera' :
        isUC ? 'UC Browser' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isSamsungBrow ? 'Samsung Browser' :
        isYandex ? 'Yandex' :
        isChrome ? 'Chrome' :
        isIntEXP ? 'Internet Explorer' :
        isEdge ? 'Edge' :
        isBlink ? 'Blink' :
        "unknown";
};
//document.write('browser is:' + browName() + '<br>' + 'User Agent :' + navigator.userAgent + '<br>');
// method to return Browser name and Version
function BrowserInfo() {
    var BrowRes;
    if (browName() == 'Opera') {
        function getOperaVersion() {
            var verOffset = navigator.userAgent.indexOf("OPR/");
            var fullVersion = navigator.userAgent.substring(verOffset + 4);
            var majorVersion = parseInt('' + fullVersion, 10);
            majorVersion = majorVersion.toFixed(1);
            return majorVersion;
        }
        BrowRes = 'Opera ';
        if (getOperaVersion() != 'NaN' && getOperaVersion() != '' && getOperaVersion() != null) {
            BrowRes += getOperaVersion();
        }
    } else if (browName() == 'UC Browser') {
        function getUCVersion() {
            var verOffset = navigator.userAgent.indexOf(" UBrowser/");
            var fullVersion = navigator.userAgent.substring(verOffset + 10);
            var majorVersion = parseInt('' + fullVersion, 10);
            majorVersion = majorVersion.toFixed(1);
            return majorVersion;
        }
        BrowRes = 'UC Browser ';
        if (getUCVersion() != 'NaN' && getUCVersion() != '' && getUCVersion() != null) {
            BrowRes += getUCVersion();
        }
    } else if (browName() == 'Firefox') {
        function getFirefoxVersion() {
            var verOffset = navigator.userAgent.indexOf("Firefox");
            var fullVersion = navigator.userAgent.substring(verOffset + 8);
            var majorVersion = parseInt('' + fullVersion, 10);
            majorVersion = majorVersion.toFixed(1);
            return majorVersion;
        }
        BrowRes = 'Firefox ';
        if (getFirefoxVersion() != 'NaN' && getFirefoxVersion() != '' && getFirefoxVersion() != null) {
            BrowRes += getFirefoxVersion();
        }
    } else if (browName() == 'Safari') {
        function getSafariVersion() {
            var verOffset = navigator.userAgent.indexOf("Safari");
            var fullVersion = navigator.userAgent.substring(verOffset + 7);
            if ((verOffset = navigator.userAgent.indexOf("Version")) != -1) {
                fullVersion = navigator.userAgent.substring(verOffset + 8);
            }
            var majorVersion = parseInt('' + fullVersion, 10);
            majorVersion = majorVersion.toFixed(1);
            return majorVersion;
        }
        BrowRes = 'Safari ';
        if (getSafariVersion() != 'NaN' && getSafariVersion() != '' && getSafariVersion() != null) {
            BrowRes += getSafariVersion();
        }
    } else if (browName() == 'Chrome') {
        function getChromeVersion() {
            var verOffset = navigator.userAgent.indexOf("Chrome");
            var fullVersion = navigator.userAgent.substring(verOffset + 7);
            fullVersion = fullVersion.substring(0, fullVersion.indexOf(" "));
            var majorVersion = parseInt('' + fullVersion, 10);
            majorVersion = majorVersion.toFixed(1);
            return majorVersion;
        }
        BrowRes = 'Chrome ';
        if (getChromeVersion() != 'NaN' && getChromeVersion() != '' && getChromeVersion() != null) {
            BrowRes += getChromeVersion();
        }
    } else if (browName() == 'Internet Explorer') {
        function getIEVersion() {
            var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
            return match ? parseInt(match[1]) : undefined;
        }
        BrowRes = 'Internet Explorer ';
        if (getIEVersion() != 'NaN' && getIEVersion() != '' && getIEVersion() != null) {
            BrowRes += getIEVersion();
        }
    } else if (browName() == 'Yandex') {
        function getYandexVersion() {
            var verOffset = navigator.userAgent.indexOf("YaBrowser/");
            var fullVersion = navigator.userAgent.substring(verOffset + 10);
            var majorVersion = parseInt('' + fullVersion, 10);
            majorVersion = majorVersion.toFixed(1);
            return majorVersion;
        }
        BrowRes = 'Yandex ';
        if (getYandexVersion() != 'NaN' && getYandexVersion() != '' && getYandexVersion() != null) {
            BrowRes += getYandexVersion();
        }
    } else if (browName() == 'Edge') {
        BrowRes = 'Edge ';
    } else if (browName() == 'Samsung Browser') {
        BrowRes = 'Samsung Browser ';
    } else if (browName() == 'Blink') {
        BrowRes = 'Blink ';
    } else {
        BrowRes = 'unknown';
    }
    return BrowRes;
}
// Browser lanGuage
var BrowserLang = navigator.language;
// for Screen Resolution
var ScreenResolution = screen.width + "x" + screen.height;

// for Device type

var scrWidth = screen.width;
var deviceType;
if (scrWidth < 768) {
    deviceType = "Mobile";
} else if (scrWidth > 768 && scrWidth < 1024) {
    deviceType = "Tablet";
} else if (scrWidth > 1024) {
    deviceType = "Desktop";
} else {
    deviceType = "Unknown";
}

// for TimeStamp
var timeStamp = Math.floor(Date.now() / 1000);
// for URL of Page
var fullURL = window.location.href;

// to Know Current Page name

var curPageName = document.title;

//for OS Type

var OSName = "Unknown";
if (screen.width > 1024) {
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName = "Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
    if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
} else if (screen.width < 1024) {
    function getAndroidVersion(ua) {
        ua = (ua || navigator.userAgent).toLowerCase();
        //document.write(ua);
        var match = ua.match(/android\s([0-9\.]*)/);
        return match ? match[1] : false;
    };

    function getMacVersion(ua) { // need to Handle perfect
        ua = (ua || navigator.userAgent).toLowerCase();
        // document.write(ua);
        var match = ua.match(/iphone os\s([0-9\_]*)/);
        return match ? match[1] : false;
    };
    if (getAndroidVersion() != false) {
        OSName = "Android  " + getAndroidVersion();
    } else if (getMacVersion() != false) {
        var iosver = getMacVersion().split('_');
        OSName = "iOS  " + iosver[0] + '.' + iosver[1];
    }
}

// method to check Cookies Enabled ?

function hasCookies() {
    return (navigator.cookieEnabled);
}

// Creating a Cookie for generate UUID

function makeid(idGenratoeText) {
    try {
        b64pad
    } catch (e) {
        b64pad = '';
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    var output = "";
    var len = idGenratoeText.length;
    for (var i = 0; i < len; i += 3) {
        var triplet = (idGenratoeText.charCodeAt(i) << 16) |
            (i + 1 < len ? idGenratoeText.charCodeAt(i + 1) << 8 : 0) |
            (i + 2 < len ? idGenratoeText.charCodeAt(i + 2) : 0);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > idGenratoeText.length * 8) output += b64pad;
            else output += tab.charAt(Math.floor(Math.random() * tab.length));
        }

    }
    return output;
}

var idGenratoeText = window.location.href + timeStamp;
//console.log(makeid(idGenratoeText));

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var cokieData = getCookie('_da_UUID');
var cokieArray = cokieData.split('.');
var UUID = cokieArray[0];
var fisrtVisit = cokieArray[1];
var latestVisit = cokieArray[2];
var countInt = parseInt(cokieArray[3]);
var visitCounter = countInt + 1;

if (cokieData != '' || cokieData != null) {
    var CookieDate = new Date;
    CookieDate.setFullYear(CookieDate.getFullYear() + 1);
    var tStampnow = Math.floor(Date.now() / 1000);
    var cookieval = UUID + '.' + fisrtVisit + '.' + tStampnow + '.' + visitCounter;
    document.cookie = '_da_UUID=' + cookieval + '; expires=' + CookieDate.toGMTString() + ';';
    trackData.UUID = UUID;
    trackData.fisrtVisit = fisrtVisit;
    trackData.latestVisit = tStampnow;
    trackData.visitCounter = visitCounter;
}

if (cokieData == '' && hasCookies() == true) {
    var CookieDate = new Date;
    var slicedId = makeid(idGenratoeText).slice(0, 16);
    CookieDate.setFullYear(CookieDate.getFullYear() + 1);
    var tStampFirstVisit = Math.floor(Date.now() / 1000);
    var visitCount = 1;
    var cookieval = slicedId + '.' + tStampFirstVisit + '.' + tStampFirstVisit + '.' + visitCount;
    document.cookie = '_da_UUID=' + cookieval + '; expires=' + CookieDate.toGMTString() + ';';
    var cokieData = getCookie('_da_UUID');
    var cokieArray = cokieData.split('.');
    trackData.UUID = cokieArray[0];
    trackData.fisrtVisit = cokieArray[1];
    trackData.latestVisit = cokieArray[2];
    trackData.visitCounter = parseInt(cokieArray[3]);
} else if (cokieData == '' && hasCookies() == false) {
    var tStampnow = Math.floor(Date.now() / 1000);
    trackData.UUID = makeid(idGenratoeText).slice(0, 16);
    trackData.fisrtVisit = tStampnow;
    trackData.latestVisit = tStampnow;
    trackData.visitCounter = 1;
} else {


}
// To get Referrer

var refFrom = document.referrer;
var refVal = getCookie('_da_ref');
trackData.refFrom = 'Direct Entry';
if (refFrom != '' && refFrom != null) {
    if (refVal != refFrom) {
        var CookieDate = new Date;
        CookieDate.setFullYear(CookieDate.getFullYear() + 1);
        document.cookie = '_da_ref=' + refFrom + '; expires=' + CookieDate.toGMTString() + ';';
        trackData.refFrom = getCookie('_da_ref');
    } else if (refVal == refFrom) {
        trackData.refFrom = getCookie('_da_ref');
    } else {

    }
}

//to get GCLID
/*var gclid = 'Not-Defined';
try {
    var url_str = window.location.href;
    var urlPar = new URL(url_str);
    gclid = urlPar.searchParams.get("gclid");
    if (gclid == null) {
        gclid = "Not-Defined";
    }
} catch (e) {
    console.log(e);
}*/
//var urltext='http://127.0.0.1:5050/dad?gclid=gdasfghf&&utm_source=CPC';
function getParamByName(Pname) {
    Pname = Pname.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + Pname + "=([^&#]*)"),
        results = regex.exec(window.location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var gclid=getParamByName('gclid');
if(gclid==''||gclid==null){
    gclid='Not-Defined';
}

// inserting Data to Object
trackData.BrowserInfo = BrowserInfo();
trackData.ScreenResolution = ScreenResolution;
trackData.deviceType = deviceType;
trackData.BrowserLang = BrowserLang;
trackData.fullURL = fullURL;
trackData.Time = timeStamp;
trackData.PageName = document.title;
trackData.OSName = OSName;
trackData.GCLID = gclid;
console.log(trackData);
var jsonTrackData = JSON.stringify(trackData);
//document.write(jsonTrackData);
var url = "https://venky-bollimuntha.herokuapp.com/DaddyAnalytics";
var s = jsonTrackData;
var htp;
htp = new XMLHttpRequest();
htp.open("POST", url, true);
htp.send(s);