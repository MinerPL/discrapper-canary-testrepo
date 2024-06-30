n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(194359), s = n(906732), l = n(822972), u = n(314897), c = n(699516), d = n(877485), _ = n(824572), E = n(785717), f = n(993409), h = n(228168), p = n(981631), m = n(689938);
function I(e) {
    let {
            user: t,
            friendToken: n,
            profileType: I
        } = e, {
            originalFriendingEnabled: T,
            improvedFriendingEnabled: g
        } = (0, d.V)({ location: 'UserProfileFriendRequestBannerButtons' }), {improvedPanelFriendingEnabled: S} = (0, _.O)({ location: 'UserProfileFriendRequestBannerButtons' }), {newestAnalyticsLocation: A} = (0, s.ZP)(), {trackUserProfileAction: N} = (0, E.KZ)(), v = (0, i.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), O = (0, i.e7)([c.Z], () => null != t ? c.Z.getRelationshipType(t.id) : p.OGo.NONE), R = (0, l.Z)({
            user: t,
            color: 'danger',
            location: A,
            onAction: () => N({ action: 'REMOVE_FRIEND' })
        });
    return null == t || t.bot || v || O === p.OGo.BLOCKED ? null : O === p.OGo.FRIEND ? (0, r.jsx)(a.Popout, {
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, r.jsx)(a.Menu, {
                navId: 'user-profile-friend-request-buttons',
                onSelect: void 0,
                onClose: t,
                'aria-label': m.Z.Messages.FRIEND_ACTIONS_MENU_LABEL,
                children: R
            });
        },
        children: e => (0, r.jsx)(f.Z, {
            variant: 'banner',
            icon: a.UserCheckIcon,
            text: m.Z.Messages.FRIENDS,
            ...e
        })
    }) : O === p.OGo.PENDING_INCOMING ? g && I === h.y0.FULL_SIZE ? null : (I === h.y0.PANEL ? S : g || T) ? (0, r.jsx)(f.Z, {
        variant: 'banner',
        icon: a.UserClockIcon,
        text: m.Z.Messages.FRIENDS_SECTION_PENDING,
        disabled: !0
    }) : (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.Z, {
                variant: 'banner',
                icon: e => (0, r.jsx)(a.CheckmarkLargeIcon, {
                    ...e,
                    color: T ? a.tokens.colors.BUTTON_OUTLINE_POSITIVE_BORDER : a.tokens.colors.TEXT_BRAND
                }),
                text: m.Z.Messages.ACCEPT_FRIEND_REQUEST,
                onClick: () => {
                    N({ action: 'ACCEPT_FRIEND_REQUEST' }), o.Z.addRelationship({
                        userId: t.id,
                        friendToken: n,
                        context: { location: A }
                    });
                }
            }),
            (0, r.jsx)(f.Z, {
                variant: 'banner',
                icon: a.CloseSmallIcon,
                text: m.Z.Messages.IGNORE_FRIEND_REQUEST,
                onClick: () => {
                    N({ action: 'IGNORE_FRIEND_REQUEST' }), o.Z.cancelFriendRequest(t.id, { location: A });
                }
            })
        ]
    }) : O === p.OGo.PENDING_OUTGOING ? T && I === h.y0.FULL_SIZE ? null : (0, r.jsx)(f.Z, {
        variant: 'banner',
        icon: a.UserClockIcon,
        text: m.Z.Messages.FRIENDS_SECTION_PENDING,
        disabled: !0
    }) : I === h.y0.FULL_SIZE ? null : (0, r.jsx)(f.Z, {
        variant: 'banner',
        icon: a.UserPlusIcon,
        text: m.Z.Messages.ADD_FRIEND,
        onClick: () => {
            N({ action: 'SEND_FRIEND_REQUEST' }), o.Z.addRelationship({
                userId: t.id,
                friendToken: n,
                context: { location: A }
            });
        }
    });
}
