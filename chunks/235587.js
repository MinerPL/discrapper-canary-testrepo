n(47120);
var r,
    i = n(442837),
    a = n(902704),
    s = n(570140),
    o = n(709054);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e, t, n) {
    return ''.concat(e, ',').concat(t, ',').concat(n);
}
let c = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    d = c();
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        return (
            (d = {
                ...d,
                ...(null != e ? e : {})
            }),
            !(function () {
                let e = Date.now();
                for (let [t, n] of Object.entries(d.prevLeaderboardRanks)) (null == n || e > n.ttl) && delete d.prevLeaderboardRanks[t];
                for (let [t, n] of Object.entries(d.currentLeaderboardRanks)) (null == n || e > n.ttl) && delete d.currentLeaderboardRanks[t];
            })(),
            !0
        );
    }
    getState() {
        return d;
    }
    getPrevLeaderboardRanks(e, t, n) {
        let r = u(e, t, n);
        return d.prevLeaderboardRanks[r];
    }
    getCurrentLeaderboardRanks(e, t, n) {
        let r = u(e, t, n);
        return d.currentLeaderboardRanks[r];
    }
    reset() {
        d = c();
    }
}
l(_, 'displayName', 'GuildLeaderboardRanksStore'),
    l(_, 'persistKey', 'GuildLeaderboardRanksStore'),
    (t.Z = new _(s.Z, {
        SET_GUILD_LEADERBOARD: function (e) {
            var t;
            let { leaderboardResponse: n, intervalOffset: r } = e;
            if (0 !== r) return !1;
            let { leaderboard: i } = n,
                s = u(i.guild_id, i.leaderboard_id, i.interval_start),
                l = {
                    ranks: i.users.map((e) => e.user_id),
                    ttl: o.default.extractTimestamp(i.interval_end)
                },
                c = d.currentLeaderboardRanks[s];
            if ((0, a.E)(l.ranks, null !== (t = null == c ? void 0 : c.ranks) && void 0 !== t ? t : [])) return !1;
            (d.prevLeaderboardRanks[s] = c), (d.currentLeaderboardRanks[s] = l);
        }
    }));
