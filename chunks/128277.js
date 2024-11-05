n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(503438),
    u = n(100527),
    c = n(906732),
    d = n(379357),
    f = n(358696),
    _ = n(180335),
    h = n(952164),
    p = n(960870),
    m = n(139793),
    g = n(994746),
    E = n(502762),
    v = n(652853),
    I = n(448980),
    S = n(194811),
    T = n(373826),
    b = n(315324),
    y = n(582123),
    A = n(262210),
    N = n(666984),
    C = n(290274),
    R = n(228168),
    O = n(676411);
function D(e) {
    let { user: t, currentUser: n, activity: a, guild: D, channel: L, className: x, onClose: w } = e,
        { profileType: M } = (0, v.z)(),
        P = { [O.fullSize]: M === R.y0.FULL_SIZE },
        k = (0, _.Bq)({
            activity: a,
            user: t
        }),
        U = (0, g.Z)(a),
        { largeImage: G } = (0, d.FO)(a),
        { analyticsLocations: B } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, p.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: k,
            analyticsLocations: B
        }),
        F = (0, m.Z)({
            userId: t.id,
            onAction: Z
        });
    if (!(0, l.Z)(a)) return null;
    let V = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(T.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(T.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(O.clickable, O.inline),
                                            onClick: () => {
                                                Z({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(a, t.id, n);
                                            },
                                            children: e
                                        }),
                                        n < l.length - 1 ? ', ' : ''
                                    ]
                                },
                                n
                            )
                        )
                    });
        },
        j = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(A.Z, {
                      start: t,
                      end: n
                  });
        },
        H = () =>
            null == D || null == L
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: O.voiceChannelDivider }),
                          (0, r.jsx)(b.Z, {
                              user: t,
                              guild: D,
                              channel: L,
                              onAction: Z,
                              onClose: w
                          })
                      ]
                  }),
        Y = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(O.actions, P),
                      children: (0, r.jsx)(N.Z, {
                          user: t,
                          activity: a,
                          onAction: Z
                      })
                  });
    return (0, r.jsx)(c.Gt, {
        value: B,
        children: (0, r.jsx)(y.Z, {
            user: t,
            onClose: w,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(E.Z.Overlay, {
                    className: s()(O.card, x),
                    ref: F,
                    children: [
                        (0, r.jsx)(S.Z, {
                            ...U,
                            contextMenu: (0, r.jsx)(C.Z, {
                                display: 'live',
                                user: t,
                                activity: a,
                                entry: k,
                                onClose: w,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: O.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(O.content, P),
                                    children: [
                                        (0, r.jsx)(f.E, {
                                            image: G,
                                            onClick: () => {
                                                Z({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(a, t.id);
                                            },
                                            size: f.J.SIZE_60
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: O.details,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(T.Z, {
                                                            variant: 'heading-sm/semibold',
                                                            text: a.details,
                                                            onClick: () => {
                                                                Z({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(a);
                                                            }
                                                        }),
                                                        V()
                                                    ]
                                                }),
                                                (0, r.jsx)(I.Z, {
                                                    user: t,
                                                    activity: a,
                                                    className: O.badges
                                                }),
                                                j()
                                            ]
                                        }),
                                        M === R.y0.FULL_SIZE && Y()
                                    ]
                                }),
                                H()
                            ]
                        }),
                        M !== R.y0.FULL_SIZE && Y()
                    ]
                });
            }
        })
    });
}
