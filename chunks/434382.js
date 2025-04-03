var i = r(47120);
var a = r(152057),
    s = r(570140),
    o = r(147913),
    l = r(38618),
    u = r(517100),
    c = r(914010),
    d = r(451478),
    f = r(425128),
    _ = r(994752),
    h = r(276344);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = a.v.LEAGUE_OF_LEGENDS_WEEKLY,
    g = 3,
    E = 5,
    v = 900000,
    I = new Map(),
    T = new Set(),
    b = new Map();
function y(e, n) {
    return ''.concat(e, ':').concat(n);
}
function S(e, n) {
    var r;
    let i = y(e, n);
    if (T.has(i) || (null !== (r = b.get(i)) && void 0 !== r ? r : 0) > g) return !1;
    if (c.Z.getGuildId() !== e) return;
    if (
        !(0, h.NM)({
            guildId: e,
            location: 'GuildLeaderboardManager'
        }) ||
        !d.Z.isFocused() ||
        !l.Z.isConnected()
    )
        return !1;
    let a = u.Z.getIdleSince();
    return !(null != a && Date.now() - a > v) && !0;
}
function A() {
    for (let e in I) clearTimeout(I.get(e)), I.delete(e);
}
function N() {
    var e;
    A();
    let n = c.Z.getGuildId();
    if (null == n || !S(n, m)) return;
    let r = _.Z.getLeaderboardResponse(n, m),
        i = setTimeout(
            () =>
                C({
                    guildId: n,
                    leaderboardId: m
                }),
            Math.max(0, (null !== (e = null == r ? void 0 : r.expires_at) && void 0 !== e ? e : Date.now()) - Date.now())
        ),
        a = y(n, m);
    I.set(a, i);
}
async function C(e) {
    let { guildId: n, leaderboardId: r, force: i = !1 } = e;
    if (!(S(n, r) || i)) return;
    let a = y(n, r);
    if (!T.has(a))
        try {
            T.add(a);
            let e = await (0, f.pV)({
                    guildId: n,
                    leaderboardId: r,
                    intervalOffset: 0,
                    force: i
                }),
                o = _.Z.get(n, r);
            if ((null == o ? void 0 : o.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, f.pV)({
                    guildId: n,
                    leaderboardId: r,
                    intervalOffset: -1,
                    force: i
                });
                s.Z.dispatch({
                    type: 'SET_GUILD_LEADERBOARD',
                    leaderboardResponse: e,
                    intervalOffset: -1
                });
            }
            s.Z.dispatch({
                type: 'SET_GUILD_LEADERBOARD',
                leaderboardResponse: e,
                intervalOffset: 0
            }),
                b.delete(a),
                T.delete(a),
                N();
        } catch (s) {
            var o;
            let e = (null !== (o = b.get(a)) && void 0 !== o ? o : 0) + 1;
            if ((b.set(a, e), !S(n, r))) return;
            let i = 1000 * Math.pow(E, e);
            I.set(
                a,
                setTimeout(
                    () =>
                        C({
                            guildId: n,
                            leaderboardId: r,
                            force: !0
                        }),
                    i
                )
            );
        }
}
function R() {
    N();
}
function O() {
    A(), (I = new Map()), (T = new Set()), (b = new Map()), R();
}
class D extends o.Z {
    fetchLeaderboard(e) {
        return C(e);
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                POST_CONNECTION_OPEN: O,
                CONNECTION_CLOSED: R,
                WINDOW_FOCUS: R,
                IDLE: R,
                CHANNEL_SELECT: R
            });
    }
}
n.Z = new D();
