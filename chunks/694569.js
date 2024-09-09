t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(630388),
    r = t(88658),
    o = t(695346),
    l = t(838436),
    c = t(51331),
    d = t(726985),
    _ = t(981631),
    u = t(689938);
function E() {
    let e = o.xq.useSetting(),
        s = a.useMemo(() => (0, r.bL)(e), [e]);
    return (0, n.jsxs)(l.U, {
        setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
        children: [
            (0, n.jsx)(c.Z, {
                title: u.Z.Messages.FRIEND_PERMITTED_SOURCE_ALL,
                value: s.all,
                onChange: (e) => o.xq.updateSetting(e ? _.HGf : _.HGf & ~_.SOq.NO_RELATION)
            }),
            (0, n.jsx)(c.Z, {
                title: u.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS,
                value: s.all || s.mutualFriends,
                onChange: (s) => o.xq.updateSetting(s ? i.pj(e, _.SOq.MUTUAL_FRIENDS) : i.M1(e, _.SOq.MUTUAL_FRIENDS, _.SOq.NO_RELATION))
            }),
            (0, n.jsx)(c.Z, {
                title: u.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS,
                value: s.all || s.mutualGuilds,
                onChange: (s) => o.xq.updateSetting(s ? i.pj(e, _.SOq.MUTUAL_GUILDS) : i.M1(e, _.SOq.MUTUAL_GUILDS, _.SOq.NO_RELATION))
            })
        ]
    });
}
