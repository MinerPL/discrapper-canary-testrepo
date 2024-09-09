s.d(n, {
    Z: function () {
        return Z;
    }
});
var t = s(735250),
    i = s(470079),
    o = s(704215),
    l = s(481060),
    r = s(605236),
    a = s(63063),
    c = s(369566),
    d = s(678738),
    u = s(151545),
    I = s(527790),
    _ = s(304042),
    E = s(981631),
    f = s(921944),
    x = s(689938),
    m = s(949968);
function Z(e) {
    let { user: n, currentUser: s, onClose: Z } = e,
        { live: p, recent: h, stream: S } = (0, c.Z)(n.id),
        v = n.id === s.id,
        T = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
    return (
        i.useEffect(() => {
            if (!!v && !T)
                (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                    dismissAction: f.L.AUTO_DISMISS,
                    forceTrack: !0
                });
        }, [v, T]),
        (0, t.jsxs)(l.ScrollerThin, {
            className: m.scroller,
            fade: !0,
            children: [
                (0, t.jsxs)(d.Z, {
                    children: [
                        null != S &&
                            (0, t.jsx)(_.Z, {
                                user: n,
                                currentUser: s,
                                stream: S,
                                onClose: Z
                            }),
                        p.map((e, i) =>
                            (0, t.jsx)(
                                u.Z,
                                {
                                    user: n,
                                    currentUser: s,
                                    activity: e,
                                    onClose: Z
                                },
                                'live-'.concat(i)
                            )
                        )
                    ]
                }),
                (0, t.jsx)(d.Z, {
                    heading: x.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                    subheading: v
                        ? x.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                              learnMoreHook: (e, n) =>
                                  (0, t.jsx)(
                                      l.Anchor,
                                      {
                                          href: a.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS),
                                          children: e
                                      },
                                      n
                                  )
                          })
                        : null,
                    children: h.map((e) =>
                        (0, t.jsx)(
                            I.Z,
                            {
                                user: n,
                                entry: e,
                                onClose: Z
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    );
}
