n.d(t, {
    T: function () {
        return E;
    },
    Z: function () {
        return g;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(239091),
    r = n(129861),
    o = n(906732),
    c = n(158776),
    u = n(785717),
    d = n(697927),
    h = n(171368),
    p = n(981631),
    m = n(689938),
    _ = n(519294);
let f = (0, a.getAvatarSize)(a.AvatarSizes.SIZE_40);
function E(e) {
    let { user: t, status: o, onSelect: u } = e,
        d = (0, s.e7)([c.Z], () => c.Z.isMobileOnline(t.id));
    return (0, i.jsxs)(a.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: _.listRow,
        onClick: u,
        onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t
                    });
            });
        },
        children: [
            (0, i.jsx)(a.Avatar, {
                src: t.getAvatarURL(void 0, f),
                'aria-label': t.username,
                size: a.AvatarSizes.SIZE_40,
                status: o,
                isMobile: d,
                className: _.listAvatar
            }),
            (0, i.jsx)(r.Z, {
                user: t,
                className: _.listName,
                discriminatorClass: _.listDiscriminator
            })
        ]
    });
}
function g(e) {
    let { user: t, onClose: n } = e,
        { mutualFriends: s } = (0, d.Z)(t.id),
        { analyticsLocations: l } = (0, o.ZP)(),
        { context: r, trackUserProfileAction: c } = (0, u.KZ)(),
        f = (e) => {
            n(),
                (0, h.openUserProfileModal)({
                    ...r,
                    userId: e,
                    sourceAnalyticsLocations: l,
                    analyticsLocation: { section: p.jXE.USER_PROFILE_MUTUAL_FRIENDS }
                });
        };
    return (0, i.jsx)(a.ScrollerThin, {
        className: _.listScroller,
        fade: !0,
        children:
            null == s
                ? (0, i.jsx)('div', {
                      className: _.empty,
                      children: (0, i.jsx)(a.Spinner, {})
                  })
                : 0 === s.length
                  ? (0, i.jsxs)('div', {
                        className: _.empty,
                        children: [
                            (0, i.jsx)('div', { className: _.emptyIconFriends }),
                            (0, i.jsx)('div', {
                                className: _.emptyText,
                                children: m.Z.Messages.NO_MUTUAL_FRIENDS
                            })
                        ]
                    })
                  : s.map((e) => {
                        let { key: t, user: n, status: s } = e;
                        return (0, i.jsx)(
                            E,
                            {
                                user: n,
                                status: s,
                                onSelect: () => {
                                    c({ action: 'PRESS_MUTUAL_FRIEND' }), f(n.id);
                                }
                            },
                            t
                        );
                    })
    });
}
