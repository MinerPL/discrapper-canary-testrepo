n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(726542),
    u = n(503438),
    c = n(100527),
    d = n(906732),
    _ = n(180335),
    E = n(952164),
    f = n(502762),
    h = n(652853),
    p = n(448980),
    m = n(194811),
    I = n(60241),
    T = n(373826),
    g = n(315324),
    S = n(582123),
    A = n(262210),
    N = n(666984),
    v = n(290274),
    O = n(318134),
    R = n(228168),
    C = n(981631),
    y = n(689938),
    D = n(139665);
let { getAssetImage: L } = n(81063);
function b(e) {
    let { user: t, currentUser: n, activity: a, guild: b, channel: M, className: P, onClose: U } = e,
        { profileType: w } = (0, h.z)(),
        x = { [D.fullSize]: w === R.y0.FULL_SIZE },
        G = (0, _.Bq)({
            activity: a,
            user: t
        }),
        { analyticsLocations: k } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { onAction: B, trackViewRef: F } = (0, O.Z)({
            display: 'live',
            user: t,
            activity: a,
            entry: G,
            analyticsLocations: k
        });
    if (!(0, u.Z)(a)) return null;
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
                                            className: s()(D.clickable, D.inline),
                                            onClick: () => {
                                                B({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, E.d$)(a, t.id, n);
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
        H = () => {
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
        Z = () =>
            null == b || null == M
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: D.voiceChannelDivider }),
                          (0, r.jsx)(g.Z, {
                              user: t,
                              guild: b,
                              channel: M,
                              onAction: B,
                              onClose: U
                          })
                      ]
                  }),
        Y = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(D.actions, x),
                      children: (0, r.jsx)(N.Z, {
                          user: t,
                          activity: a,
                          onAction: B
                      })
                  });
    return (0, r.jsx)(d.Gt, {
        value: k,
        children: (0, r.jsx)(S.Z, {
            user: t,
            onClose: U,
            children: (e) => {
                var n, i;
                let { onAutoDismiss: o } = e;
                return (0, r.jsxs)(f.Z.Overlay, {
                    className: s()(D.card, P),
                    ref: F,
                    children: [
                        (0, r.jsx)(m.Z, {
                            text: y.Z.Messages.USER_ACTIVITY_LISTENING_TO,
                            platform: l.Z.get(C.ABu.SPOTIFY),
                            tags: (0, r.jsx)(v.Z, {
                                display: 'live',
                                user: t,
                                activity: a,
                                entry: G,
                                onClose: U,
                                onRequestOpen: o
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: D.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(D.content, x),
                                    children: [
                                        (0, r.jsx)(I.ZP, {
                                            image: {
                                                src: L(a.application_id, null === (n = a.assets) || void 0 === n ? void 0 : n.large_image, I.WQ),
                                                text: null === (i = a.assets) || void 0 === i ? void 0 : i.large_text
                                            },
                                            onClick: () => {
                                                B({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, E.Z5)(a, t.id);
                                            }
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: D.details,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    children: [
                                                        (0, r.jsx)(T.Z, {
                                                            variant: 'heading-sm/semibold',
                                                            text: a.details,
                                                            onClick: () => {
                                                                B({ action: 'OPEN_SPOTIFY_TRACK' }), (0, E.aG)(a);
                                                            }
                                                        }),
                                                        V()
                                                    ]
                                                }),
                                                (0, r.jsx)(p.Z, {
                                                    user: t,
                                                    activity: a,
                                                    className: D.badges
                                                }),
                                                H()
                                            ]
                                        }),
                                        w === R.y0.FULL_SIZE && Y()
                                    ]
                                }),
                                Z()
                            ]
                        }),
                        w !== R.y0.FULL_SIZE && Y()
                    ]
                });
            }
        })
    });
}
