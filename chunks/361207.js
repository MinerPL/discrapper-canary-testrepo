n.d(t, {
    DW: function () {
        return u;
    },
    Gn: function () {
        return p;
    },
    t3: function () {
        return f;
    },
    w4: function () {
        return c;
    }
});
var s = n(525654),
    a = n.n(s),
    o = n(271579),
    r = n(314897),
    l = n(981631);
let i = 'linux';
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(l.fzT.DESKTOP)
        .concat(t ? '/ptb' : '', '?platform=')
        .concat(e)
        .concat(null != n ? '&format='.concat(n) : '');
}
function d() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a().os) || void 0 === e ? void 0 : e.family;
    return null == t ? 'win' : -1 !== t.indexOf('Ubuntu') || -1 !== t.indexOf('Debian') || -1 !== t.indexOf('Fedora') || -1 !== t.indexOf('Red Hat') || -1 !== t.indexOf('SuSE') || -1 !== t.indexOf('Linux') ? i : -1 !== t.indexOf('OS X') ? 'osx' : 'win';
}
function u(e) {
    return {
        win: 'Windows',
        osx: 'Mac',
        [i]: 'Linux'
    }[d(e)];
}
function f() {
    let e = d();
    return c(e, !1, e === i ? 'tar.gz' : null);
}
function p(e, t, n) {
    let s = null != n ? n.toString() : null;
    switch (t) {
        case 'iOS':
            return (0, o.ZP)(null != s ? s : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, o.WS)()
            });
        case 'Android':
            return (0, o.ZP)(null != s ? s : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: r.default.getFingerprint(),
                attemptId: (0, o.WS)()
            });
        default:
            return null != s ? s : 'https://www.discord.com';
    }
}
