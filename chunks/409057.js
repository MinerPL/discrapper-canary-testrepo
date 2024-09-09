n.d(t, {
    Z: function () {
        return G;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(841784),
    l = n(833664),
    u = n(420660),
    c = n(100527),
    d = n(906732),
    _ = n(379357),
    E = n(358696),
    f = n(180335),
    h = n(810568),
    p = n(168524),
    I = n(833858),
    m = n(769654),
    T = n(960870),
    S = n(139793),
    g = n(994746),
    A = n(502762),
    N = n(652853),
    O = n(979038),
    R = n(448980),
    v = n(194811),
    C = n(373826),
    y = n(315324),
    L = n(582123),
    D = n(290274),
    b = n(553375),
    M = n(228168),
    P = n(981631),
    U = n(701488),
    w = n(689938),
    x = n(139665);
function G(e) {
    let { user: t, currentUser: n, activity: i, application: G, guild: k, channel: B, className: F, onClose: V } = e,
        { analyticsLocations: H } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: Z } = (0, N.z)(),
        Y = { [x.fullSize]: Z === M.y0.FULL_SIZE },
        j = (0, f.Bq)({
            activity: i,
            user: t
        }),
        W = (0, p.Z)({
            location: 'UserProfileActivityCard',
            source: h.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, b.n)({
                user: t,
                activity: i,
                entry: j
            })
        }),
        K = (0, T.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: j,
            analyticsLocations: H
        }),
        z = (0, S.Z)({
            userId: t.id,
            onAction: K
        }),
        q = (0, g.Z)(i),
        { largeImage: Q, smallImage: X } = (0, _.FO)(i, G),
        $ =
            null == W
                ? void 0
                : () => {
                      K({ action: 'PRESS_GAME_IMAGE' }), W();
                  },
        J = () => {
            var e;
            return i.type === P.IIU.HANG_STATUS
                ? (0, r.jsx)(C.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, I.O8)(i)
                  })
                : (0, u.Z)(i) && null != B
                  ? (0, r.jsxs)('div', {
                        className: x.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.VoiceNormalIcon, {
                                size: 'xxs',
                                color: s.tokens.colors.TEXT_NORMAL,
                                className: x.voiceIcon
                            }),
                            (0, r.jsx)(C.Z, {
                                variant: 'heading-sm/semibold',
                                text: B.name
                            })
                        ]
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(C.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(C.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        ee = () =>
            i.type === P.IIU.HANG_STATUS
                ? null
                : (0, u.Z)(i) && null != k
                  ? (0, r.jsx)(C.Z, {
                        variant: 'text-xs/normal',
                        text: w.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: k.name }),
                        onClick: () => {
                            (0, m.X)(k.id), K({ action: 'OPEN_VOICE_GUILD' }), null == V || V();
                        }
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(C.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(C.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        et = () => {
            var e;
            return i.type === P.IIU.WATCHING
                ? null
                : (0, l.Z)(i)
                  ? en()
                  : (0, r.jsx)(C.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        en = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === U.Zc
                ? (0, r.jsxs)('div', {
                      className: x.gameState,
                      children: [
                          (0, r.jsx)(C.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(C.Z, {
                              variant: 'text-xs/normal',
                              text: w.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == G ? void 0 : G.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, o.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: x.gameState,
                        children: [
                            (0, r.jsx)(C.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(C.Z, {
                                variant: 'text-xs/normal',
                                text: w.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(C.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        er = () =>
            null == W
                ? (0, r.jsxs)('div', {
                      className: x.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [J(), ee(), et()]
                          }),
                          (0, r.jsx)(R.Z, {
                              user: t,
                              activity: i,
                              className: x.badges
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: x.details,
                      children: [
                          (0, r.jsxs)(s.Clickable, {
                              className: x.clickable,
                              onClick: () => {
                                  K({ action: 'OPEN_GAME_PROFILE' }), W(), null == V || V();
                              },
                              children: [J(), ee(), et()]
                          }),
                          (0, r.jsx)(R.Z, {
                              user: t,
                              activity: i,
                              className: x.badges
                          })
                      ]
                  }),
        ei = () =>
            null == k || null == B
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: x.voiceChannelDivider }),
                          (0, r.jsx)(y.Z, {
                              user: t,
                              guild: k,
                              channel: B,
                              onAction: K,
                              onClose: V
                          })
                      ]
                  }),
        ea = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(x.actions, Y),
                      children: (0, r.jsx)(O.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: K,
                          onClose: V
                      })
                  });
    return (0, r.jsx)(d.Gt, {
        value: H,
        children: (0, r.jsx)(L.Z, {
            user: t,
            onClose: V,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(A.Z.Overlay, {
                    className: a()(x.card, F),
                    ref: z,
                    children: [
                        (0, r.jsx)(v.Z, {
                            text: q.text,
                            icon: q.icon,
                            tags: (0, r.jsx)(D.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: j,
                                onClose: V,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: x.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(x.content, Y),
                                    children: [
                                        (0, r.jsx)(E.E, {
                                            image: Q,
                                            smallImage: X,
                                            onClick: $,
                                            size: E.J.SIZE_60
                                        }),
                                        er(),
                                        Z === M.y0.FULL_SIZE && ea()
                                    ]
                                }),
                                ei()
                            ]
                        }),
                        Z !== M.y0.FULL_SIZE && ea()
                    ]
                });
            }
        })
    });
}
