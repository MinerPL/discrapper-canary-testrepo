t.d(s, {
    Z: function () {
        return T;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(630388),
    r = t(88658),
    o = t(695346),
    l = t(546957),
    c = t(838436),
    d = t(51331),
    _ = t(726985),
    u = t(981631),
    E = t(689938);
function T() {
    let e = o.xq.useSetting(),
        s = a.useMemo(() => (0, r.bL)(e), [e]);
    return (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsx)(c.U, {
                setting: _.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, n.jsx)(d.Z, {
                    title: E.Z.Messages.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_SOURCE_ALL,
                    value: s.all,
                    onChange: (e) => o.xq.updateSetting(e ? u.HGf : u.HGf & ~u.SOq.NO_RELATION)
                })
            }),
            (0, n.jsx)(c.U, {
                setting: _.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, n.jsx)(d.Z, {
                    title: E.Z.Messages.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_SOURCE_MUTUAL_FRIENDS,
                    value: s.all || s.mutualFriends,
                    onChange: (s) => o.xq.updateSetting(s ? i.pj(e, u.SOq.MUTUAL_FRIENDS) : i.M1(e, u.SOq.MUTUAL_FRIENDS, u.SOq.NO_RELATION))
                })
            }),
            (0, n.jsx)(c.U, {
                setting: _.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, n.jsx)(d.Z, {
                    title: E.Z.Messages.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_SOURCE_MUTUAL_GUILDS,
                    value: s.all || s.mutualGuilds,
                    onChange: (s) => o.xq.updateSetting(s ? i.pj(e, u.SOq.MUTUAL_GUILDS) : i.M1(e, u.SOq.MUTUAL_GUILDS, u.SOq.NO_RELATION))
                })
            })
        ]
    });
}
