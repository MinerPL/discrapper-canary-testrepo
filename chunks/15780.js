t.d(s, {
    Z: function () {
        return I;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(630388),
    c = t(88658),
    d = t(695346),
    _ = t(981631),
    E = t(689938),
    u = t(224499);
function I() {
    let e = d.xq.useSetting(),
        s = a.useMemo(() => (0, c.bL)(e), [e]);
    return (0, n.jsx)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: E.Z.Messages.FRIEND_REQUESTS,
        children: (0, n.jsxs)(o.FormSection, {
            title: E.Z.Messages.FRIEND_PERMITTED_SOURCE,
            className: u.marginBottom40,
            children: [
                (0, n.jsx)(o.FormSwitch, {
                    className: r()(u.marginTop8, u.marginBottom20),
                    value: s.all,
                    onChange: (e) => d.xq.updateSetting(e ? _.HGf : _.HGf & ~_.SOq.NO_RELATION),
                    children: E.Z.Messages.FRIEND_PERMITTED_SOURCE_ALL
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: s.all || s.mutualFriends,
                    onChange: (s) => d.xq.updateSetting(s ? l.pj(e, _.SOq.MUTUAL_FRIENDS) : l.M1(e, _.SOq.MUTUAL_FRIENDS, _.SOq.NO_RELATION)),
                    children: E.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: s.all || s.mutualGuilds,
                    onChange: (s) => d.xq.updateSetting(s ? l.pj(e, _.SOq.MUTUAL_GUILDS) : l.M1(e, _.SOq.MUTUAL_GUILDS, _.SOq.NO_RELATION)),
                    children: E.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
                })
            ]
        })
    });
}
