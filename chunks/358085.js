var r, i;
n.r(t),
    n.d(t, {
        PlatformTypes: function () {
            return r;
        },
        getNativePlatform: function () {
            return I;
        },
        getOS: function () {
            return S;
        },
        getPlatform: function () {
            return E;
        },
        getPlatformName: function () {
            return v;
        },
        isAndroid: function () {
            return m;
        },
        isAndroidChrome: function () {
            return _;
        },
        isAndroidWeb: function () {
            return h;
        },
        isDesktop: function () {
            return d;
        },
        isIOS: function () {
            return g;
        },
        isLinux: function () {
            return c;
        },
        isMac: function () {
            return u;
        },
        isMacWeb: function () {
            return p;
        },
        isPlatformEmbedded: function () {
            return s;
        },
        isWeb: function () {
            return f;
        },
        isWindows: function () {
            return l;
        }
    }),
    ((i = r || (r = {})).WINDOWS = 'WINDOWS'),
    (i.OSX = 'OSX'),
    (i.LINUX = 'LINUX'),
    (i.WEB = 'WEB');
let a = window.DiscordNative,
    s = null != a,
    o = null != a ? a.process.platform : '';
function l() {
    return /^win/.test(o);
}
function u() {
    return 'darwin' === o;
}
function c() {
    return 'linux' === o;
}
function d() {
    return l() || u() || c();
}
function f() {
    return 'WEB' === E();
}
function _() {
    return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match('(android ).+chrome/[.0-9]* mobile');
}
function h() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null;
}
function p() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/Macintosh/i)) != null;
}
function m() {
    return 'android' === o;
}
function g() {
    return 'ios' === o;
}
function E() {
    return l() ? 'WINDOWS' : u() ? 'OSX' : c() ? 'LINUX' : 'WEB';
}
function v() {
    return o;
}
function I() {
    switch (o) {
        case 'ios':
        case 'android':
            return o;
        default:
            return 'web';
    }
}
function S() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'windows mobile' : 'windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'ios';
    if (/Android/.test(e)) return 'android';
    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'blackberry';
    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'ios' : 'macos';
    else if (/Linux/i.test(e)) return 'linux';
}
