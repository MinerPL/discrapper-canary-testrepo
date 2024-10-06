n.d(t, {
    M: function () {
        return r;
    }
});
var i,
    a,
    s,
    l,
    r,
    o,
    c = n(442837),
    d = n(570140);
((i = r || (r = {}))[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), (i[(i.FAILED = 3)] = 'FAILED');
let u = {},
    _ = {};
class E extends (o = c.ZP.Store) {
    getMediaPostEmbed(e) {
        if (null != e) return u[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null !== (t = _[e]) && void 0 !== t ? t : 0;
    }
    getMediaPostEmbeds() {
        return u;
    }
}
(l = 'MediaPostEmbedStore'),
    (s = 'displayName') in (a = E)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new E(d.Z, {
        CONNECTION_OPEN: function () {
            (u = {}), (_ = {});
        },
        MEDIA_POST_EMBED_FETCH: function (e) {
            let { threadId: t } = e;
            _[t] = 1;
        },
        MEDIA_POST_EMBED_FETCH_SUCCESS: function (e) {
            let { threadId: t, mediaPostEmbed: n } = e;
            (u = {
                ...u,
                [t]: n
            }),
                (_[t] = 2);
        },
        MEDIA_POST_EMBED_FETCH_FAILURE: function (e) {
            let { threadId: t } = e;
            _[t] = 3;
        },
        LOGOUT: function (e) {
            !e.isSwitchingAccount && ((u = {}), (_ = {}));
        }
    }));
