n.d(t, {
    Z: function () {
        return V;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(481060),
    l = n(394821),
    u = n(841784),
    c = n(833664),
    d = n(420660),
    f = n(100527),
    _ = n(906732),
    h = n(379357),
    p = n(358696),
    m = n(180335),
    g = n(810568),
    E = n(168524),
    v = n(833858),
    I = n(769654),
    S = n(960870),
    T = n(139793),
    b = n(994746),
    y = n(232174),
    A = n(502762),
    N = n(652853),
    C = n(979038),
    R = n(448980),
    O = n(194811),
    D = n(373826),
    L = n(315324),
    x = n(582123),
    w = n(262210),
    M = n(103479),
    P = n(290274),
    k = n(553375),
    U = n(228168),
    G = n(981631),
    B = n(701488),
    Z = n(388032),
    F = n(676411);
function V(e) {
    let { user: t, currentUser: n, activity: i, application: V, guild: j, channel: H, className: Y, onClose: W } = e,
        { analyticsLocations: K } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: z } = (0, N.z)(),
        q = { [F.fullSize]: z === U.y0.FULL_SIZE },
        Q = (0, m.Bq)({
            activity: i,
            user: t
        }),
        X = (0, E.Z)({
            location: 'UserProfileActivityCard',
            source: g.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, k.nK)({
                user: t,
                activity: i,
                entry: Q
            })
        }),
        J = (0, S.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: Q,
            analyticsLocations: K
        }),
        $ = (0, T.Z)({
            userId: t.id,
            onAction: J
        }),
        ee = (0, b.Z)(i),
        { largeImage: et, smallImage: en } = (0, h.FO)(i, V),
        er = (0, s.EQ)(i)
            .when(c.Z, () => X)
            .when(l.Z, () => {
                if (t.id !== n.id)
                    return () =>
                        (0, M.s)({
                            activity: i,
                            user: t,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ei = () => {
            let e = (0, l.Z)(i) ? 'crunchyroll' : 'default';
            return null == er
                ? (0, r.jsx)(p.E, {
                      image: et,
                      smallImage: en,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: et,
                      smallImage: en,
                      size: p.J.SIZE_60,
                      aspectRatio: e,
                      onClick: (e) => {
                          J({ action: 'PRESS_IMAGE' }), er(e);
                      }
                  });
        },
        ea = () => {
            var e;
            return i.type === G.IIU.HANG_STATUS
                ? (0, r.jsx)(D.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, v.O8)(i)
                  })
                : (0, d.Z)(i) && null != H
                  ? (0, r.jsxs)('div', {
                        className: F.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: F.voiceIcon
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: 'heading-sm/semibold',
                                text: H.name
                            })
                        ]
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(D.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(D.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        es = () =>
            i.type === G.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(i) && null != j
                  ? (0, r.jsx)(D.Z, {
                        variant: 'text-xs/normal',
                        text: Z.intl.formatToPlainString(Z.t['hq/Qzc'], { guildName: j.name }),
                        onClick: () => {
                            (0, I.X)(j.id), J({ action: 'OPEN_VOICE_GUILD' }), null == W || W();
                        }
                    })
                  : (0, c.Z)(i)
                    ? (0, r.jsx)(D.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(D.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        eo = () => {
            var e;
            return i.type === G.IIU.WATCHING
                ? null
                : (0, c.Z)(i)
                  ? el()
                  : (0, r.jsx)(D.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        el = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === B.Zc
                ? (0, r.jsxs)('div', {
                      className: F.gameState,
                      children: [
                          (0, r.jsx)(D.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(D.Z, {
                              variant: 'text-xs/normal',
                              text: Z.intl.formatToPlainString(Z.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (a = null == V ? void 0 : V.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: F.gameState,
                        children: [
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text: Z.intl.formatToPlainString(Z.t['u//9Bw'], {
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(D.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        eu = () => {
            if (!(0, y.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(w.Z, {
                start: e,
                end: t
            });
        },
        ec = () =>
            null == er
                ? (0, r.jsxs)('div', {
                      children: [ea(), es(), eo()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: F.clickable,
                      onClick: (e) => {
                          J({ action: 'PRESS_TEXT' }), er(e);
                      },
                      children: [ea(), es(), eo()]
                  }),
        ed = () =>
            null == j || null == H
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: F.voiceChannelDivider }),
                          (0, r.jsx)(L.Z, {
                              user: t,
                              guild: j,
                              channel: H,
                              onAction: J,
                              onClose: W
                          })
                      ]
                  }),
        ef = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(F.actions, q),
                      children: (0, r.jsx)(C.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: J,
                          onClose: W
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: K,
        children: (0, r.jsx)(x.Z, {
            user: t,
            onClose: W,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(A.Z.Overlay, {
                    className: a()(F.card, Y),
                    ref: $,
                    children: [
                        (0, r.jsx)(O.Z, {
                            ...ee,
                            contextMenu: (0, r.jsx)(P.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: Q,
                                onClose: W,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: F.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(F.content, q),
                                    children: [
                                        !t.bot && ei(),
                                        (0, r.jsxs)('div', {
                                            className: F.details,
                                            children: [
                                                ec(),
                                                !t.bot &&
                                                    (0, r.jsx)(R.Z, {
                                                        user: t,
                                                        activity: i,
                                                        className: F.badges
                                                    }),
                                                eu()
                                            ]
                                        }),
                                        z === U.y0.FULL_SIZE && ef()
                                    ]
                                }),
                                ed()
                            ]
                        }),
                        z !== U.y0.FULL_SIZE && ef()
                    ]
                });
            }
        })
    });
}
