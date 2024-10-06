n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(287734),
    u = n(872810),
    c = n(110924),
    d = n(100527),
    _ = n(906732),
    E = n(750881),
    f = n(194082),
    h = n(318374),
    p = n(382182),
    I = n(769654),
    m = n(543882),
    T = n(592125),
    S = n(430824),
    g = n(496675),
    A = n(938475),
    N = n(960870),
    O = n(139793),
    R = n(502762),
    v = n(652853),
    C = n(194811),
    L = n(373826),
    y = n(315324),
    D = n(582123),
    b = n(648926),
    M = n(290274),
    P = n(228168),
    U = n(981631),
    w = n(689938),
    x = n(676411),
    G = n(380934),
    k = n(924482),
    B = n(774797);
function F(e) {
    let { user: t, currentUser: n, stream: i, className: F, onClose: V } = e,
        { profileType: H, theme: Z } = (0, v.z)(),
        Y = {
            [G.fullSize]: H === P.y0.FULL_SIZE,
            [x.fullSize]: H === P.y0.FULL_SIZE
        },
        j = (0, E.aK)('user-profile-stream-activity-card-web'),
        { analyticsLocations: W } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        K = (0, N.Z)({
            display: 'live',
            user: t,
            stream: i,
            analyticsLocations: W
        }),
        z = (0, O.Z)({
            userId: t.id,
            onAction: K
        }),
        q = (0, s.e7)([S.Z], () => S.Z.getGuild(null == i ? void 0 : i.guildId)),
        Q = (0, s.e7)([T.Z], () => T.Z.getChannel(null == i ? void 0 : i.channelId)),
        X = (0, s.Wu)([A.ZP], () =>
            null != Q
                ? A.ZP.getVoiceStatesForChannel(Q).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        [$, J] = (0, p.wq)(Q),
        {
            url: ee,
            isLoading: et,
            canSeePreview: en
        } = (0, s.cj)([g.Z, m.Z], () => {
            let e = null != Q && g.Z.canBasicChannel(U.S7T.CONNECT, Q);
            return e
                ? {
                      url: m.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
                      isLoading: m.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        er = (0, c.Z)(et ? null : ee),
        ei = et || null == ee ? er : ee;
    if (null == q || null == Q || (j && !1 === i.discoverable)) return null;
    let ea = () => {
            let e = a()(G.preview, Y),
                t = () => {
                    K({ action: 'PRESS_STREAM_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == V || V();
                };
            return null == ei && et
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(o.Spinner, {})
                  })
                : null == ei
                  ? (0, r.jsxs)(o.Clickable, {
                        className: a()(e, G.overlay, { [G.clickable]: $ }),
                        onClick: $ ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: Z === U.BRd.LIGHT ? B : k
                            }),
                            H !== P.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            className: G.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, p.P9)(J)
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            children: en ? w.Z.Messages.STREAM_NO_PREVIEW : w.Z.Messages.STREAM_NO_PERMISSION_CTA
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(o.Clickable, {
                        className: a()(e, G.overlay, { [G.clickable]: $ }),
                        onClick: $ ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ei,
                                className: G.image
                            }),
                            H !== P.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            className: G.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, p.P9)(J)
                                        }),
                                        (0, r.jsx)(o.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: G.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        es = () =>
            H !== P.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)('div', {
                      className: x.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsxs)(o.Heading, {
                                      variant: 'heading-sm/semibold',
                                      color: 'text-normal',
                                      className: x.voiceChannelHeading,
                                      children: [
                                          (0, r.jsx)(o.VoiceNormalIcon, {
                                              size: 'xxs',
                                              color: o.tokens.colors.TEXT_NORMAL,
                                              className: x.voiceIcon
                                          }),
                                          (0, r.jsx)(o.Clickable, {
                                              className: a()(x.clickable, x.inline),
                                              onClick: () => {
                                                  l.default.selectVoiceChannel(Q.id), (0, I.X)(q.id), null == K || K({ action: 'OPEN_VOICE_CHANNEL' }), null == V || V();
                                              },
                                              children: Q.name
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(L.Z, {
                                      variant: 'text-xs/normal',
                                      text: w.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: q.name }),
                                      onClick: () => {
                                          (0, I.X)(q.id), K({ action: 'OPEN_VOICE_GUILD' }), null == V || V();
                                      }
                                  })
                              ]
                          }),
                          (0, r.jsx)(h.Z, {
                              users: X,
                              guildId: q.id,
                              channelId: Q.id,
                              maxUsers: y.W,
                              size: o.AvatarSizes.SIZE_16,
                              disableUserPopout: (e) => e === t.id,
                              overflowCountVariant: 'text-xxs/semibold',
                              overflowCountColor: 'text-muted'
                          })
                      ]
                  }),
        eo = () =>
            H === P.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: x.voiceChannelDivider }),
                          (0, r.jsx)(y.Z, {
                              user: t,
                              guild: q,
                              channel: Q,
                              onAction: K,
                              onClose: V
                          })
                      ]
                  }),
        el = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(x.actions, Y),
                      children: (0, r.jsx)(b.Z, {
                          stream: i,
                          canWatch: $,
                          unavailableReason: J,
                          onAction: K,
                          onClose: V
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: W,
        children: (0, r.jsx)(D.Z, {
            user: t,
            onClose: V,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(R.Z.Overlay, {
                    className: a()(x.card, F),
                    ref: z,
                    children: [
                        (0, r.jsx)(C.Z, {
                            text: (0, r.jsxs)(r.Fragment, {
                                children: [w.Z.Messages.USER_ACTIVITY_STREAMING, (0, r.jsx)(f.ZP, { size: f.OH.SMALL })]
                            }),
                            contextMenu: (0, r.jsx)(M.Z, {
                                display: 'live',
                                user: t,
                                onClose: V,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: x.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(x.content, Y),
                                    children: [ea(), es(), H === P.y0.FULL_SIZE && el()]
                                }),
                                eo()
                            ]
                        }),
                        H !== P.y0.FULL_SIZE && el()
                    ]
                });
            }
        })
    });
}
