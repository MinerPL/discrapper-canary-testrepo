t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    l = t(192379),
    o = t(704215),
    s = t(481060),
    r = t(605236),
    c = t(63063),
    a = t(369566),
    d = t(678738),
    u = t(151545),
    f = t(527790),
    m = t(769140),
    p = t(981631),
    x = t(921944),
    I = t(388032),
    h = t(505865);
function v(e) {
    let { user: n, currentUser: t, onClose: v, profileGuildId: g } = e,
        { live: Z, recent: _, stream: b } = (0, a.Z)(n.id),
        j = n.id === t.id,
        E = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        l.useEffect(() => {
            if (!!j && !E)
                (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: x.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [j, E]),
        (0, i.jsxs)(s.ScrollerThin, {
            className: h.scroller,
            fade: !0,
            children: [
                (0, i.jsxs)(d.Z, {
                    children: [
                        null != b &&
                            (0, i.jsx)(m.Z, {
                                user: n,
                                currentUser: t,
                                stream: b,
                                onClose: v
                            }),
                        Z.map((e, l) =>
                            (0, i.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: t,
                                    activity: e,
                                    onClose: v,
                                    profileGuildId: g
                                },
                                'live-'.concat(l)
                            )
                        )
                    ]
                }),
                j &&
                    _.length > 0 &&
                    (0, i.jsx)(d.Z, {
                        heading: I.intl.string(I.t.M0zgnZ),
                        subheading: I.intl.format(I.t['4bk9Ag'], {
                            learnMoreHook: (e, n) =>
                                (0, i.jsx)(
                                    s.Anchor,
                                    {
                                        href: c.Z.getArticleURL(p.BhN.ACTIVITY_STATUS_SETTINGS),
                                        children: e
                                    },
                                    n
                                )
                        }),
                        children: _.map((e) =>
                            (0, i.jsx)(
                                f.Z,
                                {
                                    user: n,
                                    entry: e,
                                    onClose: v,
                                    hideHeader: !0
                                },
                                e.id
                            )
                        )
                    })
            ]
        })
    );
}
