s.d(t, {
    Z: function () {
        return T;
    }
});
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(481060), l = s(630388), c = s(88658), d = s(695346), _ = s(981631), E = s(689938), u = s(331651);
function T() {
    let e = d.xq.useSetting(), t = a.useMemo(() => (0, c.bL)(e), [e]);
    return (0, n.jsx)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: E.Z.Messages.FRIEND_REQUESTS,
        children: (0, n.jsxs)(o.FormSection, {
            title: E.Z.Messages.FRIEND_PERMITTED_SOURCE,
            className: u.marginBottom40,
            children: [
                (0, n.jsx)(o.FormSwitch, {
                    className: r()(u.marginTop8, u.marginBottom20),
                    value: t.all,
                    onChange: e => d.xq.updateSetting(e ? _.HGf : _.HGf & ~_.SOq.NO_RELATION),
                    children: E.Z.Messages.FRIEND_PERMITTED_SOURCE_ALL
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: t.all || t.mutualFriends,
                    onChange: t => d.xq.updateSetting(t ? l.pj(e, _.SOq.MUTUAL_FRIENDS) : l.M1(e, _.SOq.MUTUAL_FRIENDS, _.SOq.NO_RELATION)),
                    children: E.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
                }),
                (0, n.jsx)(o.FormSwitch, {
                    value: t.all || t.mutualGuilds,
                    onChange: t => d.xq.updateSetting(t ? l.pj(e, _.SOq.MUTUAL_GUILDS) : l.M1(e, _.SOq.MUTUAL_GUILDS, _.SOq.NO_RELATION)),
                    children: E.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
                })
            ]
        })
    });
}
