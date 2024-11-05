n(47120);
var r = n(152057),
    i = n(570140),
    a = n(147913),
    s = n(38618),
    o = n(517100),
    l = n(914010),
    u = n(451478),
    c = n(425128),
    d = n(994752),
    f = n(276344);
let _ = r.v.LEAGUE_OF_LEGENDS_WEEKLY,
    h = new Map(),
    p = new Set(),
    m = new Map();
function g(e, t) {
    return ''.concat(e, ':').concat(t);
}
function E(e, t) {
    var n;
    let r = g(e, t);
    if (p.has(r) || (null !== (n = m.get(r)) && void 0 !== n ? n : 0) > 3) return !1;
    if (l.Z.getGuildId() !== e) return;
    if (!(0, f.NM)(e, 'GuildLeaderboardManager') || !u.Z.isFocused() || !s.Z.isConnected()) return !1;
    let i = o.Z.getIdleSince();
    return !(null != i && Date.now() - i > 900000) && !0;
}
function v() {
    for (let e in h) clearTimeout(h.get(e)), h.delete(e);
}
function I() {
    var e;
    v();
    let t = l.Z.getGuildId();
    if (null == t || !E(t, _)) return;
    let n = d.Z.getLeaderboardResponse(t, _),
        r = setTimeout(
            () =>
                S({
                    guildId: t,
                    leaderboardId: _
                }),
            Math.max(0, (null !== (e = null == n ? void 0 : n.expires_at) && void 0 !== e ? e : Date.now()) - Date.now())
        ),
        i = g(t, _);
    h.set(i, r);
}
async function S(e) {
    let { guildId: t, leaderboardId: n, force: r = !1 } = e;
    if (!(E(t, n) || r)) return;
    let a = g(t, n);
    if (!p.has(a))
        try {
            p.add(a);
            let e = await (0, c.pV)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: 0,
                    force: r
                }),
                s = d.Z.get(t, n);
            if ((null == s ? void 0 : s.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, c.pV)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: -1,
                    force: r
                });
                i.Z.dispatch({
                    type: 'SET_GUILD_LEADERBOARD',
                    leaderboardResponse: e,
                    intervalOffset: -1
                });
            }
            i.Z.dispatch({
                type: 'SET_GUILD_LEADERBOARD',
                leaderboardResponse: e,
                intervalOffset: 0
            }),
                m.delete(a),
                p.delete(a),
                I();
        } catch (i) {
            var s;
            let e = (null !== (s = m.get(a)) && void 0 !== s ? s : 0) + 1;
            if ((m.set(a, e), !E(t, n))) return;
            let r = 1000 * Math.pow(5, e);
            h.set(
                a,
                setTimeout(
                    () =>
                        S({
                            guildId: t,
                            leaderboardId: n,
                            force: !0
                        }),
                    r
                )
            );
        }
}
function T() {
    I();
}
function b() {
    v(), (h = new Map()), (p = new Set()), (m = new Map()), T();
}
class y extends a.Z {
    fetchLeaderboard(e) {
        return S(e);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: b,
                CONNECTION_CLOSED: T,
                WINDOW_FOCUS: T,
                IDLE: T,
                CHANNEL_SELECT: T
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
t.Z = new y();
