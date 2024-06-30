r.d(t, {
    DW: function () {
        return u;
    },
    Gn: function () {
        return m;
    },
    t3: function () {
        return h;
    },
    w4: function () {
        return s;
    }
});
var a = r(525654), n = r.n(a), i = r(271579), o = r(314897), l = r(981631);
let c = 'linux';
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = arguments.length > 2 ? arguments[2] : void 0;
    return ''.concat(l.fzT.DESKTOP).concat(t ? '/ptb' : '', '?platform=').concat(e).concat(null != r ? '&format='.concat(r) : '');
}
function d() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = n().os) || void 0 === e ? void 0 : e.family;
    return null == t ? 'win' : -1 !== t.indexOf('Ubuntu') || -1 !== t.indexOf('Debian') || -1 !== t.indexOf('Fedora') || -1 !== t.indexOf('Red Hat') || -1 !== t.indexOf('SuSE') || -1 !== t.indexOf('Linux') ? c : -1 !== t.indexOf('OS X') ? 'osx' : 'win';
}
function u(e) {
    return {
        win: 'Windows',
        osx: 'Mac',
        [c]: 'Linux'
    }[d(e)];
}
function h() {
    let e = d();
    return s(e, !1, e === c ? 'tar.gz' : null);
}
function m(e, t, r) {
    let a = null != r ? r.toString() : null;
    switch (t) {
    case 'iOS':
        return (0, i.ZP)(null != a ? a : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
            utmSource: e,
            fingerprint: o.default.getFingerprint(),
            attemptId: (0, i.WS)()
        });
    case 'Android':
        return (0, i.ZP)(null != a ? a : 'https://play.google.com/store/apps/details', {
            utmSource: e,
            id: 'com.discord',
            fingerprint: o.default.getFingerprint(),
            attemptId: (0, i.WS)()
        });
    default:
        return null != a ? a : 'https://www.discord.com';
    }
}
