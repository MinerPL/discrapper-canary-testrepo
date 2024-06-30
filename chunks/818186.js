n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(758059), r = n(377171), o = n(497089), c = n(703656), d = n(699516), u = n(626135), _ = n(981631), E = n(689938), m = n(566832);
function I(e) {
    let {closePopout: t} = e, n = (0, a.e7)([d.Z], () => d.Z.getPendingCount());
    return (0, i.jsx)(s.TooltipContainer, {
        text: E.Z.Messages.VIEW_FRIEND_REQUESTS,
        children: (0, i.jsxs)(s.Clickable, {
            className: m.friendRequestsButton,
            onClick: () => {
                u.default.track(_.rMx.NOTIFICATION_CENTER_ACTION, { action_type: o.ud.FRIEND_REQUESTS_BUTTON_CLICK }), (0, c.uL)(_.Z5c.FRIENDS), l.Z.setSection(_.pJs.PENDING), t();
            },
            children: [
                (0, i.jsx)(s.FriendsIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsx)(s.NumberBadge, {
                    count: n,
                    color: r.Z.BACKGROUND_ACCENT
                })
            ]
        })
    });
}
