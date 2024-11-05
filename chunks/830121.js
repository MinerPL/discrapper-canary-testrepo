n.d(t, {
    FO: function () {
        return K;
    },
    Sq: function () {
        return j;
    },
    ZP: function () {
        return Y;
    },
    el: function () {
        return W;
    },
    oO: function () {
        return L;
    },
    zO: function () {
        return z;
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
    c = n(243814),
    d = n(421474);
n(865427);
var f = n(264229);
n(413605);
var _ = n(807675),
    h = n(701190),
    p = n(226951),
    m = n(591759),
    g = n(960904),
    E = n(981631);
let v = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    S = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    T = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    b = /^\/application-directory\/([0-9-]+)\/?$/,
    y = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    A = /^\/activities\/([0-9-]+)\/?$/,
    N = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^\/channels\/([0-9]+)\/shop$/,
    R = /^\/quests\/([0-9-]+)\/?$/,
    O = /^\/discovery\/game\/([0-9-]+)\/?$/,
    D = /^\/oauth2\/authorize/,
    L = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    x = F(window.GLOBAL_ENV.INVITE_HOST),
    w = F(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    M = F(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(E.$R1)),
    P = F('//canary.'.concat(E.$R1)),
    k = F('//ptb.'.concat(E.$R1)),
    U = F('discordapp.com'),
    G = F('discord.com'),
    B = [p.Z.escape(null !== (i = x.host) && void 0 !== i ? i : ''), p.Z.escape(null !== (a = w.host) && void 0 !== a ? a : ''), p.Z.escape(null !== (s = M.host) && void 0 !== s ? s : ''), p.Z.escape(null !== (o = U.host) && void 0 !== o ? o : ''), p.Z.escape(null !== (l = G.host) && void 0 !== l ? l : '')].filter(Boolean),
    Z = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(B.join('|'), ')'), 'g');
function F(e) {
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
function V(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        s = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(s)) return null;
    let o = a.substring(s.length);
    return '' === o ? null : o;
}
function j(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = V(M, e)) && void 0 !== t ? t : V(P, e)) && void 0 !== n ? n : V(k, e)) && void 0 !== r ? r : V(U, e)) && void 0 !== i ? i : V(G, e);
}
function H(e) {
    var t, n, r, i;
    let a = K(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = V(x, a),
        o = V(w, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = V(M, a)) && void 0 !== t ? t : V(P, a)) && void 0 !== n ? n : V(k, a)) && void 0 !== r ? r : V(U, a)) && void 0 !== i ? i : V(G, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l
    };
}
function Y(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(Z, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(m.Z.URL_REGEX),
        i = e.match(L);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= 10) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: s, primaryHostRemainingPath: o } = H(e);
        if (null == r || null == r.pathname) continue;
        let l = (e, r) => {
            !t.has(r) &&
                (t.add(r),
                n.push({
                    type: e,
                    code: r
                }));
        };
        if ((null == i ? void 0 : i.match(v)) != null) {
            let e = (0, f.mb)(i.substring(1), r.search);
            h.Z.getInvite(e);
            l(g.g.INVITE, e);
        }
        (null == s ? void 0 : s.match(v)) != null && l(g.g.TEMPLATE, s.substring(1));
        let u = null == o ? void 0 : o.match(S);
        if (null != u) {
            let e = u[1].toUpperCase();
            if (e === g.g.INVITE) {
                let e = (0, f.mb)(u[2], r.search);
                l(g.g.INVITE, e);
            } else l(e, u[2]);
        }
        (null == o ? void 0 : o.match(I)) != null && l(g.g.CHANNEL_LINK, o.replace('/channels/', ''));
        let p = (function (e) {
            if (null == e) return null;
            let t = e.match(T);
            return null != t && t.length >= 4
                ? {
                      guildId: t[1],
                      guildEventId: t[2],
                      recurrenceId: t[4]
                  }
                : null;
        })(r.pathname);
        if ((null != p && l(g.g.EVENT, ''.concat(p.guildId, '-').concat(p.guildEventId) + (null != p.recurrenceId ? '-'.concat(p.recurrenceId) : '')), null != (null == o ? void 0 : o.match(D)) && null != r.query)) {
            var a;
            let e = (0, _.y)(r.query),
                t = e.clientId;
            null != t && '' !== t && !(null === (a = e.scopes) || void 0 === a ? void 0 : a.some((e) => e !== c.x.APPLICATIONS_COMMANDS)) && l(g.g.APP_OAUTH2_LINK, t);
        }
        let m = null == o ? void 0 : o.match(b);
        if (null != m) {
            let e = m[1];
            l(g.g.APP_DIRECTORY_PROFILE, e);
        }
        let E = null == o ? void 0 : o.match(y);
        if (null != E) {
            let e = E[1],
                t = E[2];
            if (null != t) {
                let n = (0, d.l)(e, t);
                l(g.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(g.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let R = null == o ? void 0 : o.match(A);
        if (null != R) {
            let e = R[1];
            l(g.g.ACTIVITY_BOOKMARK, e);
        }
        let L = null == o ? void 0 : o.match(N);
        null != L && l(g.g.GUILD_PRODUCT, ''.concat(L[1], '-').concat(L[2]));
        let x = null == o ? void 0 : o.match(C);
        null != x && l(g.g.SERVER_SHOP, x[1]);
        let w = W(e);
        null != w && l(g.g.QUESTS_EMBED, w);
        let M = (function (e) {
            var t, n;
            let r = H(e),
                i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(O);
            return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
        })(e);
        null != M && l(g.g.DISCOVERY_GAME, M);
    }
    return n;
}
function W(e) {
    var t, n;
    let r = H(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(R);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function K(e) {
    try {
        return (0, u.parse)(e);
    } catch (e) {
        return null;
    }
}
function z(e) {
    return Y(e)[0];
}
