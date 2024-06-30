n(47120);
var r = n(392711), i = n(570140), a = n(147913), o = n(38618), s = n(553795), l = n(517100), u = n(451478), c = n(162461), d = n(564990), _ = n(146282), E = n(206583), f = n(981631);
let h = E.YN.GLOBAL_FEED, p = new Map(), m = new Set(), I = new Map(), T = null, g = (0, r.debounce)(d.y, 3000, { trailing: !0 });
function S(e, t) {
    i.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function A() {
    v(h);
}
function N(e) {
    if (!(0, c.sA)('ContentInventoryManager') || m.has(e) || e === E.YN.GAME_PROFILE_FEED && void 0 !== _.Z.getFeed(e))
        return !1;
    if (e === h) {
        if (_.Z.hidden || !u.Z.isFocused() || !o.Z.isConnected())
            return !1;
        let e = l.Z.getIdleSince();
        if (null != e && Date.now() - e > 900000)
            return !1;
    }
    return !0;
}
function v(e) {
    S(e, { loading: !1 });
    let t = p.get(e);
    void 0 !== t && (clearTimeout(t), p.delete(e));
}
function O() {
    if (v(h), !N(h))
        return;
    let e = _.Z.getFeed(h);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == T)
        return;
    let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(), n = Math.max(0, null == T ? 0 : new Date(T).getTime() - Date.now(), t);
    S(h, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + n)
    }), p.set(h, setTimeout(() => R(h), n));
}
async function R(e) {
    let {
        force: t = !1
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!!(N(e) || t))
        try {
            let t = _.Z.getFeed(e);
            m.add(e), S(e, { loading: !0 });
            let n = await (0, d.m)({
                token: null == t ? void 0 : t.refresh_token,
                feedId: e
            });
            i.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: e,
                feed: n
            }), I.set(e, 0), m.delete(e), S(e, { loading: !1 }), e === h && (T = null, O());
        } catch (a) {
            var n;
            let r = null !== (n = I.get(e)) && void 0 !== n ? n : 0;
            if (r < 3) {
                let n = 1000 * Math.pow(5, r);
                p.set(e, setTimeout(() => R(e, { force: t }), n)), I.set(e, r + 1);
            } else
                i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: e
                });
            m.delete(e);
        }
}
function C() {
    O();
}
function y(e) {
    let {feedId: t} = e;
    v(t), R(t, { force: !0 });
}
function D(e) {
    let {refreshAfterMs: t} = e, n = _.Z.getFeed(h);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null)
        T = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), O();
}
function L(e) {
    var t;
    let {
        connectionId: n,
        track: r
    } = e;
    if (null != n && !!(0, c.Dy)('ContentInventoryManager.handleSpotifyNewTrack'))
        (null === (t = s.Z.getAccount(n, f.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && g(n, r);
}
function b() {
    R(E.YN.GAME_PROFILE_FEED);
}
class M extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            POST_CONNECTION_OPEN: C,
            CONNECTION_CLOSED: A,
            WINDOW_FOCUS: C,
            IDLE: C,
            CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: C,
            CONTENT_INVENTORY_MANUAL_REFRESH: y,
            CONTENT_INVENTORY_INBOX_STALE: D,
            SPOTIFY_NEW_TRACK: L,
            GAME_PROFILE_OPEN: b
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new M();
