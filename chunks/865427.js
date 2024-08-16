n.d(t, {
    Ce: function () {
        return _;
    },
    Ji: function () {
        return c;
    },
    _G: function () {
        return m;
    },
    _I: function () {
        return E;
    },
    _S: function () {
        return h;
    },
    fD: function () {
        return f;
    },
    mG: function () {
        return T;
    },
    pU: function () {
        return d;
    },
    r4: function () {
        return A;
    }
}),
    n(642549),
    n(47120);
var r = n(973361),
    i = n(729594),
    a = n(544891),
    s = n(358085),
    o = n(591759),
    l = n(908442);
n(981631);
let u = void 0,
    c = (0, s.isAndroid)() ? u.Version.split(' - ')[0] : (0, s.isIOS)() ? u.Version : void 0;
function d(e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(e);
}
function _() {
    let e = o.Z.safeParseWithQuery(d('/__development/build_overrides'));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          c && (e.query.version = c),
          a.tn
              .get({
                  url: i.format(e),
                  oldFormErrors: !0
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function E(e) {
    if (T(e))
        return Promise.resolve(
            (function (e) {
                let t = e.match(I);
                if (null == t || 2 !== t.length) return null;
                let n = (0, s.getNativePlatform)(),
                    r = t[1];
                return {
                    targetBuildOverride: {
                        ['discord_'.concat(n)]: {
                            type: 'branch',
                            id: r
                        }
                    },
                    validForUserIds: [],
                    expiresAt: 'Mon, 1 Jan 2038 00:00:00 GMT'
                };
            })(e)
        );
    let t = o.Z.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = 'true'),
          c && (t.query.version = c),
          (t.host = window.location.host),
          a.tn
              .get({
                  url: i.format(t),
                  oldFormErrors: !0
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function f() {
    return -1 !== window.document.cookie.indexOf(''.concat(l.ZF, '='));
}
function h() {
    try {
        var e;
        let t = r.parse(window.document.cookie)[l.ZF];
        if (null == t) return {};
        let n = JSON.parse(atob(t.substring(t.indexOf('.') + 1)));
        return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {};
    } catch (e) {
        return {};
    }
}
let p = RegExp('^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$', 'i');
function m(e) {
    return null != e && p.test(e);
}
let I = RegExp('^dev://branch/([\\w-./]+)$', 'i');
function T(e) {
    return null != e && I.test(e);
}
let g = new Set(['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com']),
    S = new Set(['/__development/link', '/__development/link/']);
function A(e) {
    if (T(e))
        return {
            payload: null,
            url: e
        };
    let t = o.Z.safeParseWithQuery(e);
    if (null == t || !g.has(t.hostname) || !('s' in t.query) || !S.has(t.pathname)) return null;
    for (let e in t.query) 's' !== e && delete t.query[e];
    return {
        payload: t.query.s,
        url: i.format(t)
    };
}
