n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(503438),
    u = n(100527),
    c = n(906732),
    d = n(379357),
    _ = n(358696),
    E = n(180335),
    f = n(952164),
    h = n(960870),
    p = n(139793),
    I = n(994746),
    m = n(502762),
    T = n(652853),
    S = n(448980),
    g = n(194811),
    A = n(373826),
    N = n(315324),
    O = n(582123),
    R = n(262210),
    v = n(666984),
    C = n(290274),
    y = n(228168),
    L = n(139665);
function D(e) {
    let { user: t, currentUser: n, activity: a, guild: D, channel: b, className: M, onClose: P } = e,
        { profileType: U } = (0, T.z)(),
        w = { [L.fullSize]: U === y.y0.FULL_SIZE },
        x = (0, E.Bq)({
            activity: a,
            user: t
        }),
        G = (0, I.Z)(a),
        { largeImage: k } = (0, d.FO)(a),
        { analyticsLocations: B } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        F = (0, h.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: x,
            analyticsLocations: B
        }),
        V = (0, p.Z)({
            userId: t.id,
            onAction: F
        });
    if (!(0, l.Z)(a)) return null;
    let H = () => {
            var e, n;
            let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
            return 0 === l.length
                ? null
                : null == a.sync_id
                  ? (0, r.jsx)(A.Z, {
                        variant: 'text-xs/normal',
                        text: l.join(', ')
                    })
                  : (0, r.jsx)(A.Z, {
                        variant: 'text-xs/normal',
                        text: l.map((e, n) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(L.clickable, L.inline),
                                            onClick: () => {
                                                F({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, f.d$)(a, t.id, n);
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
        Z = () => {
            let { timestamps: e } = a;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(R.Z, {
                      start: t,
                      end: n
                  });
        },
        Y = () =>
            null == D || null == b
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: L.voiceChannelDivider }),
                          (0, r.jsx)(N.Z, {
                              user: t,
                              guild: D,
                              channel: b,
                              onAction: F,
                              onClose: P
                          })
                      ]
                  }),
        j = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(L.actions, w),
                      children: (0, r.jsx)(v.Z, {
                          user: t,
                          activity: a,
                          onAction: F
                      })
                  });
    return (0, r.jsx)(c.Gt, {
        value: B,
        children: (0, r.jsx)(O.Z, {
            user: t,
            onClose: P,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(m.Z.Overlay, {
                    className: s()(L.card, M),
                    ref: V,
                    children: [
                        (0, r.jsx)(g.Z, {
                            text: G.text,
                            icon: G.icon,
                            tags: (0, r.jsx)(C.Z, {
                                display: 'live',
                                user: t,
                                activity: a,
                                entry: x,
                                onClose: P,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: L.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(L.content, w),
                                    children: [
                                        (0, r.jsx)(_.E, {
                                            image: k,
                                            onClick: () => {
                                                F({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, f.Z5)(a, t.id);
                                            },
                                            size: _.J.SIZE_60
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: L.details,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(A.Z, {
                                                            variant: 'heading-sm/semibold',
                                                            text: a.details,
                                                            onClick: () => {
                                                                F({ action: 'OPEN_SPOTIFY_TRACK' }), (0, f.aG)(a);
                                                            }
                                                        }),
                                                        H()
                                                    ]
                                                }),
                                                (0, r.jsx)(S.Z, {
                                                    user: t,
                                                    activity: a,
                                                    className: L.badges
                                                }),
                                                Z()
                                            ]
                                        }),
                                        U === y.y0.FULL_SIZE && j()
                                    ]
                                }),
                                Y()
                            ]
                        }),
                        U !== y.y0.FULL_SIZE && j()
                    ]
                });
            }
        })
    });
}
