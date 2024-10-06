n.d(t, {
    FO: function () {
        return j;
    },
    Sq: function () {
        return V;
    },
    ZP: function () {
        return Z;
    },
    el: function () {
        return Y;
    },
    oO: function () {
        return y;
    },
    zO: function () {
        return W;
    }
}),
    n(757143),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(729594),
    c = n(421474);
n(865427);
var d = n(264229);
n(413605);
var _ = n(701190),
    E = n(226951),
    f = n(591759),
    h = n(960904),
    p = n(981631);
let I = /^\/([a-zA-Z0-9-]+)$/,
    m = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    S = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    g = /^\/application-directory\/([0-9-]+)\/?$/,
    A = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    N = /^\/activities\/([0-9-]+)\/?$/,
    O = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    R = /^\/channels\/([0-9]+)\/shop$/,
    v = /^\/quests\/([0-9-]+)\/?$/,
    C = /^\/discovery\/game\/([0-9-]+)\/?$/,
    L = /^\/oauth2\/authorize/,
    y = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    D = B(window.GLOBAL_ENV.INVITE_HOST),
    b = B(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    M = B(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(p.$R1)),
    P = B('//canary.'.concat(p.$R1)),
    U = B('//ptb.'.concat(p.$R1)),
    w = B('discordapp.com'),
    x = B('discord.com'),
    G = [E.Z.escape(null !== (i = D.host) && void 0 !== i ? i : ''), E.Z.escape(null !== (a = b.host) && void 0 !== a ? a : ''), E.Z.escape(null !== (s = M.host) && void 0 !== s ? s : ''), E.Z.escape(null !== (o = w.host) && void 0 !== o ? o : ''), E.Z.escape(null !== (l = x.host) && void 0 !== l ? l : '')].filter(Boolean),
    k = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(G.join('|'), ')'), 'g');
function B(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, u.parse)(e, void 0, !0);
        return {
            host: t.host,
            pathPrefix: t.pathname
        };
    }
    return {
        host: e,
        pathPrefix: null
    };
}
function F(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        s = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(s)) return null;
    let o = a.substring(s.length);
    return '' === o ? null : o;
}
function V(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = F(M, e)) && void 0 !== t ? t : F(P, e)) && void 0 !== n ? n : F(U, e)) && void 0 !== r ? r : F(w, e)) && void 0 !== i ? i : F(x, e);
}
function H(e) {
    var t, n, r, i;
    let a = j(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = F(D, a),
        o = F(b, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = F(M, a)) && void 0 !== t ? t : F(P, a)) && void 0 !== n ? n : F(U, a)) && void 0 !== r ? r : F(w, a)) && void 0 !== i ? i : F(x, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l
    };
}
function Z(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(k, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(f.Z.URL_REGEX),
        i = e.match(y);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= 10) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: s } = H(e);
        if (null == r || null == r.pathname) continue;
        let o = (e, r) => {
            !t.has(r) &&
                (t.add(r),
                n.push({
                    type: e,
                    code: r
                }));
        };
        if ((null == i ? void 0 : i.match(I)) != null) {
            let e = (0, d.mb)(i.substring(1), r.search);
            _.Z.getInvite(e);
            o(h.g.INVITE, e);
        }
        (null == a ? void 0 : a.match(I)) != null && o(h.g.TEMPLATE, a.substring(1));
        let l = null == s ? void 0 : s.match(T);
        if (null != l) {
            let e = l[1].toUpperCase();
            if (e === h.g.INVITE) {
                let e = (0, d.mb)(l[2], r.search);
                o(h.g.INVITE, e);
            } else o(e, l[2]);
        }
        (null == s ? void 0 : s.match(m)) != null && o(h.g.CHANNEL_LINK, s.replace('/channels/', ''));
        let u = (function (e) {
            if (null == e) return null;
            let t = e.match(S);
            return null != t && t.length >= 4
                ? {
                      guildId: t[1],
                      guildEventId: t[2],
                      recurrenceId: t[4]
                  }
                : null;
        })(r.pathname);
        if ((null != u && o(h.g.EVENT, ''.concat(u.guildId, '-').concat(u.guildEventId) + (null != u.recurrenceId ? '-'.concat(u.recurrenceId) : '')), null != (null == s ? void 0 : s.match(L)))) {
            let e = r.query.client_id;
            'string' == typeof e && o(h.g.APP_OAUTH2_LINK, e);
        }
        let E = null == s ? void 0 : s.match(g);
        if (null != E) {
            let e = E[1];
            o(h.g.APP_DIRECTORY_PROFILE, e);
        }
        let f = null == s ? void 0 : s.match(A);
        if (null != f) {
            let e = f[1],
                t = f[2];
            if (null != t) {
                let n = (0, c.l)(e, t);
                o(h.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else o(h.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let p = null == s ? void 0 : s.match(N);
        if (null != p) {
            let e = p[1];
            o(h.g.ACTIVITY_BOOKMARK, e);
        }
        let v = null == s ? void 0 : s.match(O);
        null != v && o(h.g.GUILD_PRODUCT, ''.concat(v[1], '-').concat(v[2]));
        let y = null == s ? void 0 : s.match(R);
        null != y && o(h.g.SERVER_SHOP, y[1]);
        let D = Y(e);
        null != D && o(h.g.QUESTS_EMBED, D);
        let b = (function (e) {
            var t, n;
            let r = H(e),
                i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(C);
            return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
        })(e);
        null != b && o(h.g.DISCOVERY_GAME, b);
    }
    return n;
}
function Y(e) {
    var t, n;
    let r = H(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(v);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function j(e) {
    try {
        return (0, u.parse)(e, !0);
    } catch (e) {
        return null;
    }
}
function W(e) {
    return Z(e)[0];
}
