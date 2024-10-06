n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120),
    n(653041);
var r = n(470079),
    i = n(442837),
    a = n(235587);
function s(e) {
    let { guildId: t, leaderboardId: n, intervalStart: s } = e,
        o = (0, i.e7)(
            [a.Z],
            () => {
                var e, r;
                return null !== (r = null === (e = a.Z.getPrevLeaderboardRanks(t, n, s)) || void 0 === e ? void 0 : e.ranks) && void 0 !== r ? r : [];
            },
            [t, s, n]
        ),
        l = (0, i.e7)(
            [a.Z],
            () => {
                var e, r;
                return null !== (r = null === (e = a.Z.getCurrentLeaderboardRanks(t, n, s)) || void 0 === e ? void 0 : e.ranks) && void 0 !== r ? r : [];
            },
            [t, s, n]
        );
    return {
        rankChanges: r.useMemo(() => {
            let e = new Map();
            o.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                l.forEach((n, r) => {
                    let i = r + 1,
                        a = e.get(n);
                    a !== i &&
                        t.push({
                            userId: n,
                            currentRank: i,
                            previousRank: a
                        });
                }),
                t
            );
        }, [o, l])
    };
}
