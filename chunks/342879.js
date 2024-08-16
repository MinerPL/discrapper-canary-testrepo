n(47120);
var r = n(392711),
    i = n(570140),
    a = n(147913),
    s = n(539746),
    o = n(38618),
    l = n(553795),
    u = n(517100),
    c = n(451478),
    d = n(162461),
    _ = n(564990),
    E = n(71585),
    f = n(146282),
    h = n(206583),
    p = n(981631);
let m = h.YN.GLOBAL_FEED,
    I = new Map(),
    T = new Set(),
    g = new Map(),
    S = null,
    A = (0, r.debounce)(_.yK, 3000, { trailing: !0 });
function N(e, t) {
    i.Z.dispatch({
        type: 'CONTENT_INVENTORY_SET_FEED_STATE',
        feedId: e,
        state: t
    });
}
function v() {
    R(m);
}
function O(e) {
    if (T.has(e) || (e === h.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== f.Z.getFeed(e)))) return !1;
    if (e === m) {
        if (!(0, d.sA)('ContentInventoryManager') || (E.Z.hidden && null != f.Z.getFeed(e)) || !c.Z.isFocused() || !o.Z.isConnected()) return !1;
        let t = u.Z.getIdleSince();
        if (null != t && Date.now() - t > 900000) return !1;
    }
    return !0;
}
function R(e) {
    N(e, { loading: !1 });
    let t = I.get(e);
    void 0 !== t && (clearTimeout(t), I.delete(e));
}
function C() {
    if ((R(m), !O(m))) return;
    let e = f.Z.getFeed(m);
    if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == S) return;
    let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
        n = Math.max(0, null == S ? 0 : new Date(S).getTime() - Date.now(), t);
    N(m, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + n)
    }),
        I.set(
            m,
            setTimeout(() => y(m), n)
        );
}
async function y(e) {
    let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!!(O(e) || t))
        try {
            let t = f.Z.getFeed(e);
            T.add(e), N(e, { loading: !0 });
            let n = await (0, _.mt)({
                token: null == t ? void 0 : t.refresh_token,
                feedId: e
            });
            i.Z.dispatch({
                type: 'CONTENT_INVENTORY_SET_FEED',
                feedId: e,
                feed: n
            }),
                g.set(e, 0),
                T.delete(e),
                N(e, { loading: !1 }),
                e === m && ((S = null), C());
        } catch (a) {
            var n;
            let r = null !== (n = g.get(e)) && void 0 !== n ? n : 0;
            if (r < 3) {
                let n = 1000 * Math.pow(5, r);
                I.set(
                    e,
                    setTimeout(() => y(e, { force: t }), n)
                ),
                    g.set(e, r + 1);
            } else
                i.Z.dispatch({
                    type: 'CONTENT_INVENTORY_CLEAR_FEED',
                    feedId: e
                });
            T.delete(e);
        }
}
function D() {
    C();
}
function L(e) {
    let { feedId: t } = e;
    R(t), y(t, { force: !0 });
}
function b(e) {
    let { refreshAfterMs: t } = e,
        n = f.Z.getFeed(m);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) (S = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), C();
}
function M(e) {
    var t;
    let { connectionId: n, track: r } = e;
    if (null != n && !!(0, d.Dy)('ContentInventoryManager.handleSpotifyNewTrack')) (null === (t = l.Z.getAccount(n, p.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && A(n, r);
}
function P() {
    y(h.YN.GAME_PROFILE_FEED);
}
class U extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: D,
                CONNECTION_CLOSED: v,
                WINDOW_FOCUS: D,
                IDLE: D,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: D,
                CONTENT_INVENTORY_MANUAL_REFRESH: L,
                CONTENT_INVENTORY_INBOX_STALE: b,
                SPOTIFY_NEW_TRACK: M,
                GAME_PROFILE_OPEN: P
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new U();
