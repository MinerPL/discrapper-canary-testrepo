n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(664674);
let c = new Map();
class d extends (r = o.ZP.Store) {
    getLeaderboards(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null === (t = c.get(n)) || void 0 === t ? void 0 : t.get(e);
    }
    get(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (n = this.getLeaderboardResponse(e, t, r)) || void 0 === n ? void 0 : n.leaderboard;
    }
    getLeaderboardResponse(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return null === (r = c.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(s = 'GuildLeaderboardStore'),
    (a = 'displayName') in (i = d)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new d(l.Z, {
        CONNECTION_OPEN: function () {
            c = new Map();
        },
        SET_GUILD_LEADERBOARD: function (e) {
            let { leaderboardResponse: t, intervalOffset: n } = e,
                { leaderboard: r } = t,
                { guild_id: i, leaderboard_id: a } = r,
                s = c.get(n);
            null == s && ((s = new Map()), c.set(n, s));
            let o = s.get(i);
            null == o && ((o = new Map()), s.set(i, o)), o.set(a, t);
        }
    }));
