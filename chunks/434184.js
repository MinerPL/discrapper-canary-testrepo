n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(194359), l = n(906732), o = n(171368), c = n(626135), d = n(321488), u = n(417183), _ = n(170245), E = n(981631), h = n(689938), I = n(252151);
function m(e) {
    let {
            user: t,
            key: n,
            isFocused: m
        } = e, p = s.useContext(c.AnalyticsContext), {analyticsLocations: g} = (0, l.ZP)(), T = e => {
            e.stopPropagation(), r.Z.unblockUser(t.id, { location: 'Friends' });
        };
    return (0, i.jsx)(u.Z, {
        isFocused: m,
        onClick: () => (0, o.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: g,
            analyticsLocation: p.location
        }),
        user: t,
        children: e => (0, i.jsxs)('div', {
            className: I.listItemContents,
            children: [
                (0, i.jsx)(_.Z, {
                    user: t,
                    hovered: e,
                    status: E.Skl.UNKNOWN,
                    subText: h.Z.Messages.BLOCKED
                }),
                (0, i.jsx)(d.Z, {
                    icon: a.UserMinusIcon,
                    actionType: d.Z.ActionTypes.DENY,
                    tooltip: h.Z.Messages.UNBLOCK,
                    onClick: T,
                    shouldHighlight: e
                })
            ]
        })
    }, n);
}
