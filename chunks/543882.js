n(47120), n(724458);
var r, i, a, o, s = n(392711), l = n.n(s), u = n(442837), c = n(570140), d = n(872810), _ = n(569545), E = n(70722);
let f = {}, h = {}, p = new Set();
function m() {
    f = {}, h = {};
}
class I extends (r = u.ZP.Store) {
    getPreviewURL(e, t, n) {
        let r = (0, _.V9)({
                streamType: null != e ? E.lo.GUILD : E.lo.CALL,
                guildId: e,
                channelId: t,
                ownerId: n
            }), i = f[r];
        return null == i || Date.now() > i.expires ? (!p.has(r) && (p.add(r), Promise.resolve().then(() => {
            (0, d.n9)(e, t, n);
        })), null) : i.url;
    }
    getPreviewURLForStreamKey(e) {
        let {
            guildId: t,
            channelId: n,
            ownerId: r
        } = (0, _.my)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, _.V9)({
            streamType: null != e ? E.lo.GUILD : E.lo.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        return p.has(r);
    }
}
o = 'ApplicationStreamPreviewStore', (a = 'displayName') in (i = I) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new I(c.Z, {
    CONNECTION_OPEN: m,
    LOGOUT: m,
    STREAM_PREVIEW_FETCH_START: function (e) {
        var t;
        let {streamKey: n} = e;
        h[n] = (null !== (t = h[n]) && void 0 !== t ? t : 0) + 1, p.add(n);
    },
    STREAM_PREVIEW_FETCH_SUCCESS: function (e) {
        let {
            streamKey: t,
            previewURL: n
        } = e;
        f[t] = {
            url: n,
            expires: Date.now() + 120000
        }, h[t] = 0, p.delete(t);
    },
    STREAM_PREVIEW_FETCH_FAIL: function (e) {
        let {
            streamKey: t,
            retryAfter: n
        } = e;
        f[t] = {
            url: null,
            expires: Date.now() + (null != n ? n : 10000 * h[t])
        }, p.delete(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return !(l().isEmpty(f) && l().isEmpty(h)) && t.reduce((e, t) => {
            let {
                userId: n,
                guildId: r,
                channelId: i,
                selfStream: a
            } = t;
            if (a)
                return e;
            let o = (0, _.V9)({
                streamType: null != r ? E.lo.GUILD : E.lo.CALL,
                guildId: r,
                channelId: i,
                ownerId: n
            });
            return delete f[o], delete h[o], !0;
        }, !1);
    }
});
