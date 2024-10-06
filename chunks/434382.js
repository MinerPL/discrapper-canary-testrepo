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
    _ = n(276344);
let E = r.v.LEAGUE_OF_LEGENDS_WEEKLY,
    f = new Map(),
    h = new Set(),
    p = new Map();
function I(e, t) {
    return ''.concat(e, ':').concat(t);
}
function m(e, t) {
    var n;
    let r = I(e, t);
    if (h.has(r) || (null !== (n = p.get(r)) && void 0 !== n ? n : 0) > 3) return !1;
    if (l.Z.getGuildId() !== e) return;
    if (!(0, _.NM)(e, 'GuildLeaderboardManager') || !u.Z.isFocused() || !s.Z.isConnected()) return !1;
    let i = o.Z.getIdleSince();
    return !(null != i && Date.now() - i > 900000) && !0;
}
function T() {
    for (let e in f) clearTimeout(f.get(e)), f.delete(e);
}
function S() {
    var e;
    T();
    let t = l.Z.getGuildId();
    if (null == t || !m(t, E)) return;
    let n = d.Z.getLeaderboardResponse(t, E),
        r = setTimeout(
            () =>
                g({
                    guildId: t,
                    leaderboardId: E
                }),
            Math.max(0, (null !== (e = null == n ? void 0 : n.expires_at) && void 0 !== e ? e : Date.now()) - Date.now())
        ),
        i = I(t, E);
    f.set(i, r);
}
async function g(e) {
    let { guildId: t, leaderboardId: n, force: r = !1 } = e;
    if (!(m(t, n) || r)) return;
    let a = I(t, n);
    if (!h.has(a))
        try {
            h.add(a);
            let e = await (0, c.p)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: 0
                }),
                r = d.Z.get(t, n);
            if ((null == r ? void 0 : r.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, c.p)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: -1
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
                p.delete(a),
                h.delete(a),
                S();
        } catch (i) {
            var s;
            let e = (null !== (s = p.get(a)) && void 0 !== s ? s : 0) + 1;
            if ((p.set(a, e), !m(t, n))) return;
            let r = 1000 * Math.pow(5, e);
            f.set(
                a,
                setTimeout(
                    () =>
                        g({
                            guildId: t,
                            leaderboardId: n,
                            force: !0
                        }),
                    r
                )
            );
        }
}
function A() {
    S();
}
function N() {
    T(), (f = new Map()), (h = new Set()), (p = new Map()), A();
}
class O extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: N,
                CONNECTION_CLOSED: A,
                WINDOW_FOCUS: A,
                IDLE: A,
                CHANNEL_SELECT: A
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
t.Z = new O();
