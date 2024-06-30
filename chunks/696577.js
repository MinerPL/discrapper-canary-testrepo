n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250), s = n(470079), a = n(692547), r = n(481060), l = n(194359), o = n(906732), c = n(171368), d = n(594174), u = n(626135), _ = n(321488), E = n(417183), h = n(170245), I = n(981631), m = n(689938), p = n(203892);
function g(e) {
    let {
            user: t,
            type: n,
            status: g,
            isFocused: T
        } = e, S = s.useContext(u.AnalyticsContext), {analyticsLocations: C} = (0, o.ZP)(), N = e => {
            e.stopPropagation(), l.Z.cancelFriendRequest(t.id, { location: 'Friends' });
        }, f = e => {
            e.stopPropagation(), l.Z.addRelationship({
                userId: t.id,
                context: { location: 'Friends' }
            });
        }, A = g === I.Skl.OFFLINE ? I.Skl.UNKNOWN : g, Z = n === I.OGo.PENDING_INCOMING ? m.Z.Messages.INCOMING_FRIEND_REQUEST : m.Z.Messages.OUTGOING_FRIEND_REQUEST;
    return (0, i.jsx)(E.Z, {
        isFocused: T,
        user: t,
        onClick: () => (0, c.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: C,
            analyticsLocation: S.location
        }),
        children: e => {
            var s;
            let l = n === I.OGo.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (null === (s = d.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, i.jsx)('div', {
                        className: p.staffIndicator,
                        children: (0, i.jsx)(r.TextBadge, {
                            color: a.Z.unsafe_rawColors.BRAND_500.css,
                            text: m.Z.Messages.STAFF_BADGE_TOOLTIP
                        })
                    }),
                    (0, i.jsx)(_.Z, {
                        icon: r.CheckmarkLargeIcon,
                        actionType: _.Z.ActionTypes.ACCEPT,
                        tooltip: m.Z.Messages.FRIEND_REQUEST_ACCEPT,
                        onClick: f,
                        shouldHighlight: e
                    }),
                    (0, i.jsx)(_.Z, {
                        icon: r.CloseSmallIcon,
                        actionType: _.Z.ActionTypes.DENY,
                        tooltip: m.Z.Messages.FRIEND_REQUEST_IGNORE,
                        onClick: N,
                        shouldHighlight: e
                    })
                ]
            }) : (0, i.jsx)(_.Z, {
                icon: r.CloseSmallIcon,
                actionType: _.Z.ActionTypes.DENY,
                tooltip: m.Z.Messages.FRIEND_REQUEST_CANCEL,
                onClick: N,
                shouldHighlight: e
            });
            return (0, i.jsxs)('div', {
                className: p.listItemContents,
                children: [
                    (0, i.jsx)(h.Z, {
                        user: t,
                        hovered: e,
                        showAccountIdentifier: !0,
                        status: A,
                        subText: Z,
                        className: p.userInfo
                    }),
                    (0, i.jsx)('div', {
                        className: p.actions,
                        children: l
                    })
                ]
            });
        }
    });
}
