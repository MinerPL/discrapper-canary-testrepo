n.d(t, {
    Z: function () {
        return B;
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
    A = n(232174),
    N = n(502762),
    O = n(652853),
    R = n(979038),
    v = n(448980),
    C = n(194811),
    L = n(373826),
    y = n(315324),
    D = n(582123),
    b = n(262210),
    M = n(290274),
    P = n(553375),
    U = n(228168),
    w = n(981631),
    x = n(701488),
    G = n(689938),
    k = n(676411);
function B(e) {
    let { user: t, currentUser: n, activity: i, application: B, guild: F, channel: V, className: H, onClose: Z } = e,
        { analyticsLocations: Y } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: j } = (0, O.z)(),
        W = { [k.fullSize]: j === U.y0.FULL_SIZE },
        K = (0, f.Bq)({
            activity: i,
            user: t
        }),
        z = (0, p.Z)({
            location: 'UserProfileActivityCard',
            source: h.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, P.n)({
                user: t,
                activity: i,
                entry: K
            })
        }),
        q = (0, T.Z)({
            display: 'live',
            user: t,
            activity: i,
            entry: K,
            analyticsLocations: Y
        }),
        Q = (0, S.Z)({
            userId: t.id,
            onAction: q
        }),
        X = (0, g.Z)(i),
        { largeImage: $, smallImage: J } = (0, _.FO)(i, B),
        ee =
            null == z
                ? void 0
                : () => {
                      q({ action: 'PRESS_GAME_IMAGE' }), z();
                  },
        et = () => {
            var e;
            return i.type === w.IIU.HANG_STATUS
                ? (0, r.jsx)(L.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, I.O8)(i)
                  })
                : (0, u.Z)(i) && null != V
                  ? (0, r.jsxs)('div', {
                        className: k.voiceChannelText,
                        children: [
                            (0, r.jsx)(s.VoiceNormalIcon, {
                                size: 'xxs',
                                color: s.tokens.colors.TEXT_NORMAL,
                                className: k.voiceIcon
                            }),
                            (0, r.jsx)(L.Z, {
                                variant: 'heading-sm/semibold',
                                text: V.name
                            })
                        ]
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(L.Z, {
                          variant: 'heading-sm/semibold',
                          text: i.name
                      })
                    : (0, r.jsx)(L.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = i.details) && void 0 !== e ? e : i.name
                      });
        },
        en = () =>
            i.type === w.IIU.HANG_STATUS
                ? null
                : (0, u.Z)(i) && null != F
                  ? (0, r.jsx)(L.Z, {
                        variant: 'text-xs/normal',
                        text: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: F.name }),
                        onClick: () => {
                            (0, m.X)(F.id), q({ action: 'OPEN_VOICE_GUILD' }), null == Z || Z();
                        }
                    })
                  : (0, l.Z)(i)
                    ? (0, r.jsx)(L.Z, {
                          variant: 'text-xs/normal',
                          text: i.details
                      })
                    : (0, r.jsx)(L.Z, {
                          text: i.state,
                          variant: 'text-xs/normal'
                      }),
        er = () => {
            var e;
            return i.type === w.IIU.WATCHING
                ? null
                : (0, l.Z)(i)
                  ? ei()
                  : (0, r.jsx)(L.Z, {
                        text: null === (e = i.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ei = () => {
            var e, t, n, a;
            return (null === (e = i.party) || void 0 === e ? void 0 : e.size) == null && i.application_id === x.Zc
                ? (0, r.jsxs)('div', {
                      className: k.gameState,
                      children: [
                          (0, r.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: i.state
                          }),
                          (0, r.jsx)(L.Z, {
                              variant: 'text-xs/normal',
                              text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                  count: '0',
                                  max: null !== (a = null == B ? void 0 : B.getMaxParticipants()) && void 0 !== a ? a : 0
                              })
                          })
                      ]
                  })
                : (0, o.Z)(i) && (null === (t = i.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = i.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: k.gameState,
                        children: [
                            (0, r.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text: i.state
                            }),
                            (0, r.jsx)(L.Z, {
                                variant: 'text-xs/normal',
                                text: G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                                    count: i.party.size[0],
                                    max: i.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == i.party
                    ? (0, r.jsx)(L.Z, {
                          variant: 'text-xs/normal',
                          text: i.state
                      })
                    : null;
        },
        ea = () => {
            if (!(0, A.Z)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(b.Z, {
                start: e,
                end: t
            });
        },
        es = () =>
            null == z
                ? (0, r.jsxs)('div', {
                      className: k.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [et(), en(), er()]
                          }),
                          !t.bot &&
                              (0, r.jsx)(v.Z, {
                                  user: t,
                                  activity: i,
                                  className: k.badges
                              }),
                          ea()
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: k.details,
                      children: [
                          (0, r.jsxs)(s.Clickable, {
                              className: k.clickable,
                              onClick: () => {
                                  q({ action: 'OPEN_GAME_PROFILE' }), z(), null == Z || Z();
                              },
                              children: [et(), en(), er()]
                          }),
                          (0, r.jsx)(v.Z, {
                              user: t,
                              activity: i,
                              className: k.badges
                          })
                      ]
                  }),
        eo = () =>
            null == F || null == V
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: k.voiceChannelDivider }),
                          (0, r.jsx)(y.Z, {
                              user: t,
                              guild: F,
                              channel: V,
                              onAction: q,
                              onClose: Z
                          })
                      ]
                  }),
        el = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(k.actions, W),
                      children: (0, r.jsx)(R.Z, {
                          activity: i,
                          user: t,
                          currentUser: n,
                          onAction: q,
                          onClose: Z
                      })
                  });
    return (0, r.jsx)(d.Gt, {
        value: Y,
        children: (0, r.jsx)(D.Z, {
            user: t,
            onClose: Z,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(N.Z.Overlay, {
                    className: a()(k.card, H),
                    ref: Q,
                    children: [
                        (0, r.jsx)(C.Z, {
                            text: X.text,
                            icon: X.icon,
                            contextMenu: (0, r.jsx)(M.Z, {
                                display: 'live',
                                user: t,
                                activity: i,
                                entry: K,
                                onClose: Z,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: k.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(k.content, W),
                                    children: [
                                        !t.bot &&
                                            (0, r.jsx)(E.E, {
                                                image: $,
                                                smallImage: J,
                                                onClick: ee,
                                                size: E.J.SIZE_60
                                            }),
                                        es(),
                                        j === U.y0.FULL_SIZE && el()
                                    ]
                                }),
                                eo()
                            ]
                        }),
                        j !== U.y0.FULL_SIZE && el()
                    ]
                });
            }
        })
    });
}
