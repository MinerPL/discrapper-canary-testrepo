n.d(t, {
    Z: function () {
        return Y;
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
    A = n(510659),
    N = n(287954),
    C = n(660579),
    R = n(502762),
    O = n(652853),
    D = n(979038),
    L = n(448980),
    x = n(194811),
    w = n(373826),
    M = n(315324),
    P = n(582123),
    k = n(262210),
    U = n(103479),
    G = n(290274),
    B = n(553375),
    Z = n(228168),
    F = n(981631),
    V = n(701488),
    j = n(388032),
    H = n(676411);
function Y(e) {
    var t;
    let { user: n, currentUser: i, activity: Y, application: W, guild: K, channel: z, className: q, onClose: Q, profileGuildId: X } = e,
        { analyticsLocations: J } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { profileType: $ } = (0, O.z)(),
        ee = { [H.fullSize]: $ === Z.y0.FULL_SIZE },
        { interactionSource: et, interactionSourceId: en } = (0, A.Xo)(),
        er = (0, m.Bq)({
            activity: Y,
            user: n
        }),
        ei = (0, E.Z)({
            location: 'UserProfileActivityCard',
            source: g.m1.UserProfile,
            trackEntryPointImpression: !0,
            ...(0, B.nK)({
                user: n,
                activity: Y,
                entry: er
            })
        }),
        ea = (0, S.Z)({
            display: 'live',
            user: n,
            activity: Y,
            entry: er,
            analyticsLocations: J
        }),
        es = (0, T.Z)({
            userId: n.id,
            onAction: ea
        }),
        eo = (0, b.Z)(Y),
        { largeImage: el, smallImage: eu } = (0, h.FO)(Y, W),
        ec = (0, s.EQ)(Y)
            .when(c.Z, () => ei)
            .when(l.Z, () => {
                if (n.id !== i.id)
                    return () =>
                        (0, U.s)({
                            activity: Y,
                            user: n,
                            index: 0
                        });
            })
            .otherwise(() => void 0),
        ed = () => {
            let e = (0, l.Z)(Y) ? 'crunchyroll' : 'default';
            return null == ec
                ? (0, r.jsx)(p.E, {
                      image: el,
                      smallImage: eu,
                      size: p.J.SIZE_60,
                      aspectRatio: e
                  })
                : (0, r.jsx)(p.E, {
                      image: el,
                      smallImage: eu,
                      size: p.J.SIZE_60,
                      aspectRatio: e,
                      onClick: (e) => {
                          ea({ action: 'PRESS_IMAGE' }), ec(e);
                      }
                  });
        },
        ef = () => {
            var e;
            return Y.type === F.IIU.HANG_STATUS
                ? (0, r.jsx)(w.Z, {
                      variant: 'heading-sm/semibold',
                      text: (0, v.O8)(Y)
                  })
                : (0, d.Z)(Y) && null != z
                  ? (0, r.jsxs)('div', {
                        className: H.voiceChannelText,
                        children: [
                            (0, r.jsx)(o.VoiceNormalIcon, {
                                size: 'xxs',
                                color: o.tokens.colors.TEXT_NORMAL,
                                className: H.voiceIcon
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'heading-sm/semibold',
                                text: z.name
                            })
                        ]
                    })
                  : (0, c.Z)(Y)
                    ? (0, r.jsx)(w.Z, {
                          variant: 'heading-sm/semibold',
                          text: Y.name
                      })
                    : (0, r.jsx)(w.Z, {
                          variant: 'heading-sm/semibold',
                          text: null !== (e = Y.details) && void 0 !== e ? e : Y.name
                      });
        },
        e_ = () =>
            Y.type === F.IIU.HANG_STATUS
                ? null
                : (0, d.Z)(Y) && null != K
                  ? (0, r.jsx)(w.Z, {
                        variant: 'text-xs/normal',
                        text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: K.name }),
                        onClick: () => {
                            (0, I.X)(K.id), ea({ action: 'OPEN_VOICE_GUILD' }), null == Q || Q();
                        }
                    })
                  : (0, c.Z)(Y)
                    ? (0, r.jsx)(w.Z, {
                          variant: 'text-xs/normal',
                          text: Y.details
                      })
                    : (0, r.jsx)(w.Z, {
                          text: Y.state,
                          variant: 'text-xs/normal'
                      }),
        eh = () => {
            var e;
            return Y.type === F.IIU.WATCHING
                ? null
                : (0, c.Z)(Y)
                  ? ep()
                  : (0, r.jsx)(w.Z, {
                        text: null === (e = Y.assets) || void 0 === e ? void 0 : e.large_text,
                        variant: 'text-xs/normal'
                    });
        },
        ep = () => {
            var e, t, n, i;
            return (null === (e = Y.party) || void 0 === e ? void 0 : e.size) == null && Y.application_id === V.Zc
                ? (0, r.jsxs)('div', {
                      className: H.gameState,
                      children: [
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: Y.state
                          }),
                          (0, r.jsx)(w.Z, {
                              variant: 'text-xs/normal',
                              text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                  count: '0',
                                  max: null !== (i = null == W ? void 0 : W.getMaxParticipants()) && void 0 !== i ? i : 0
                              })
                          })
                      ]
                  })
                : (0, u.Z)(Y) && (null === (t = Y.party) || void 0 === t ? void 0 : t.size) != null && (null === (n = Y.party) || void 0 === n ? void 0 : n.size.length) >= 2
                  ? (0, r.jsxs)('div', {
                        className: H.gameState,
                        children: [
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: Y.state
                            }),
                            (0, r.jsx)(w.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['u//9Bw'], {
                                    count: Y.party.size[0],
                                    max: Y.party.size[1]
                                })
                            })
                        ]
                    })
                  : null == Y.party
                    ? (0, r.jsx)(w.Z, {
                          variant: 'text-xs/normal',
                          text: Y.state
                      })
                    : null;
        },
        em = () => {
            if (!(0, y.Z)(Y)) return null;
            let { start: e, end: t } = Y.timestamps;
            return (0, r.jsx)(k.Z, {
                start: e,
                end: t
            });
        },
        eg = () =>
            null == ec
                ? (0, r.jsxs)('div', {
                      children: [ef(), e_(), eh()]
                  })
                : (0, r.jsxs)(o.Clickable, {
                      className: H.clickable,
                      onClick: (e) => {
                          ea({ action: 'PRESS_TEXT' }), ec(e);
                      },
                      children: [ef(), e_(), eh()]
                  }),
        eE = () =>
            null == K || null == z
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: H.voiceChannelDivider }),
                          (0, r.jsx)(M.Z, {
                              user: n,
                              guild: K,
                              channel: z,
                              onAction: ea,
                              onClose: Q
                          })
                      ]
                  }),
        ev = () =>
            n.id === i.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(H.actions, ee),
                      children: (0, r.jsx)(D.Z, {
                          activity: Y,
                          user: n,
                          currentUser: i,
                          onAction: ea,
                          onClose: Q
                      })
                  });
    if (null === $) return null;
    let eI = null !== (t = Y.application_id) && void 0 !== t ? t : Y.name,
        eS = et === Z.n_.ACTIVITY && en === eI;
    return (0, r.jsx)(_.Gt, {
        value: J,
        children: (0, r.jsx)(P.Z, {
            user: n,
            onClose: Q,
            children: (e) => {
                let { onAutoDismiss: t } = e;
                return (0, r.jsx)(N.Z, {
                    user: n,
                    guildId: X,
                    profileType: $,
                    sourceId: eI,
                    sourceType: Z.n_.ACTIVITY,
                    children: () =>
                        (0, r.jsx)(R.Z.Overlay, {
                            className: a()(H.card, q, { [H.hoisted]: eS }),
                            ref: es,
                            children: (0, r.jsxs)(C.Z, {
                                user: n,
                                className: H.body,
                                interactionSourceId: eI,
                                sourceType: Z.n_.ACTIVITY,
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        ...eo,
                                        contextMenu: (0, r.jsx)(G.Z, {
                                            display: 'live',
                                            user: n,
                                            activity: Y,
                                            entry: er,
                                            onClose: Q,
                                            onRequestOpen: t
                                        })
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: H.body,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: a()(H.content, ee),
                                                children: [
                                                    !n.bot && ed(),
                                                    (0, r.jsxs)('div', {
                                                        className: H.details,
                                                        children: [
                                                            eg(),
                                                            !n.bot &&
                                                                (0, r.jsx)(L.Z, {
                                                                    user: n,
                                                                    activity: Y,
                                                                    className: H.badges
                                                                }),
                                                            em()
                                                        ]
                                                    }),
                                                    $ === Z.y0.FULL_SIZE && ev()
                                                ]
                                            }),
                                            eE()
                                        ]
                                    }),
                                    $ !== Z.y0.FULL_SIZE && ev()
                                ]
                            })
                        })
                });
            }
        })
    });
}
