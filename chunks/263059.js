n.d(t, {
    Z: function () {
        return w;
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
    E = n(510659),
    v = n(287954),
    I = n(660579),
    S = n(502762),
    T = n(652853),
    b = n(448980),
    y = n(194811),
    A = n(373826),
    N = n(315324),
    C = n(582123),
    R = n(262210),
    O = n(666984),
    D = n(290274),
    L = n(228168),
    x = n(676411);
function w(e) {
    var t;
    let { user: n, currentUser: a, activity: w, guild: M, channel: P, className: k, onClose: U, profileGuildId: G } = e,
        { profileType: B } = (0, T.z)(),
        Z = { [x.fullSize]: B === L.y0.FULL_SIZE },
        { interactionSource: F, interactionSourceId: V } = (0, E.Xo)(),
        j = (0, _.Bq)({
            activity: w,
            user: n
        }),
        H = (0, g.Z)(w),
        { largeImage: Y } = (0, d.FO)(w),
        { analyticsLocations: W } = (0, c.ZP)(u.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        K = (0, p.Z)({
            display: 'live',
            user: n,
            activity: w,
            entry: j,
            analyticsLocations: W
        }),
        z = (0, m.Z)({
            userId: n.id,
            onAction: K
        });
    if (!(0, l.Z)(w)) return null;
    let q = () => {
            var e, t;
            let a = null !== (t = null === (e = w.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== t ? t : [];
            return 0 === a.length
                ? null
                : null == w.sync_id
                  ? (0, r.jsx)(A.Z, {
                        variant: 'text-xs/normal',
                        text: a.join(', ')
                    })
                  : (0, r.jsx)(A.Z, {
                        variant: 'text-xs/normal',
                        text: a.map((e, t) =>
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.Clickable, {
                                            className: s()(x.clickable, x.inline),
                                            onClick: () => {
                                                K({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, h.d$)(w, n.id, t);
                                            },
                                            children: e
                                        }),
                                        t < a.length - 1 ? ', ' : ''
                                    ]
                                },
                                t
                            )
                        )
                    });
        },
        Q = () => {
            let { timestamps: e } = w;
            if (null == e) return null;
            let { start: t, end: n } = e;
            return null == t || null == n
                ? null
                : (0, r.jsx)(R.Z, {
                      start: t,
                      end: n
                  });
        },
        X = () =>
            null == M || null == P
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: x.voiceChannelDivider }),
                          (0, r.jsx)(N.Z, {
                              user: n,
                              guild: M,
                              channel: P,
                              onAction: K,
                              onClose: U
                          })
                      ]
                  }),
        J = () =>
            n.id === a.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(x.actions, Z),
                      children: (0, r.jsx)(O.Z, {
                          user: n,
                          activity: w,
                          onAction: K
                      })
                  });
    if (null === B) return null;
    let $ = null !== (t = w.application_id) && void 0 !== t ? t : w.name,
        ee = F === L.n_.ACTIVITY && V === $;
    return (0, r.jsx)(c.Gt, {
        value: W,
        children: (0, r.jsx)(C.Z, {
            user: n,
            onClose: U,
            children: (e) => {
                let { onAutoDismiss: t } = e;
                return (0, r.jsx)(v.Z, {
                    user: n,
                    guildId: G,
                    profileType: B,
                    sourceId: $,
                    sourceType: L.n_.ACTIVITY,
                    children: () =>
                        (0, r.jsx)(S.Z.Overlay, {
                            className: s()(x.card, k, { [x.hoisted]: ee }),
                            ref: z,
                            children: (0, r.jsxs)(I.Z, {
                                user: n,
                                className: x.body,
                                sourceType: L.n_.ACTIVITY,
                                interactionSourceId: $,
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        ...H,
                                        contextMenu: (0, r.jsx)(D.Z, {
                                            display: 'live',
                                            user: n,
                                            activity: w,
                                            entry: j,
                                            onClose: U,
                                            onRequestOpen: t
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: x.body,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: s()(x.content, Z),
                                                children: [
                                                    (0, r.jsx)(f.E, {
                                                        image: Y,
                                                        onClick: () => {
                                                            K({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, h.Z5)(w, n.id);
                                                        },
                                                        size: f.J.SIZE_60
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: x.details,
                                                        children: [
                                                            (0, r.jsxs)('div', {
                                                                children: [
                                                                    (0, r.jsx)(A.Z, {
                                                                        variant: 'heading-sm/semibold',
                                                                        text: w.details,
                                                                        onClick: () => {
                                                                            K({ action: 'OPEN_SPOTIFY_TRACK' }), (0, h.aG)(w);
                                                                        }
                                                                    }),
                                                                    q()
                                                                ]
                                                            }),
                                                            (0, r.jsx)(b.Z, {
                                                                user: n,
                                                                activity: w,
                                                                className: x.badges
                                                            }),
                                                            Q()
                                                        ]
                                                    }),
                                                    B === L.y0.FULL_SIZE && J()
                                                ]
                                            }),
                                            X()
                                        ]
                                    }),
                                    B !== L.y0.FULL_SIZE && J()
                                ]
                            })
                        })
                });
            }
        })
    });
}
