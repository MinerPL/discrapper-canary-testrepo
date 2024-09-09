n.d(t, {
    Z: function () {
        return B;
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
    E = n(194082),
    f = n(318374),
    h = n(382182),
    p = n(769654),
    I = n(543882),
    m = n(592125),
    T = n(430824),
    S = n(496675),
    g = n(938475),
    A = n(960870),
    N = n(139793),
    O = n(502762),
    R = n(652853),
    v = n(194811),
    C = n(373826),
    y = n(315324),
    L = n(582123),
    D = n(648926),
    b = n(290274),
    M = n(228168),
    P = n(981631),
    U = n(689938),
    w = n(139665),
    x = n(321635),
    G = n(924482),
    k = n(774797);
function B(e) {
    let { user: t, currentUser: n, stream: i, className: B, onClose: F } = e,
        { profileType: V, theme: H } = (0, R.z)(),
        Z = {
            [x.fullSize]: V === M.y0.FULL_SIZE,
            [w.fullSize]: V === M.y0.FULL_SIZE
        },
        { analyticsLocations: Y } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        j = (0, A.Z)({
            display: 'live',
            user: t,
            stream: i,
            analyticsLocations: Y
        }),
        W = (0, N.Z)({
            userId: t.id,
            onAction: j
        }),
        K = (0, s.e7)([T.Z], () => T.Z.getGuild(null == i ? void 0 : i.guildId)),
        z = (0, s.e7)([m.Z], () => m.Z.getChannel(null == i ? void 0 : i.channelId)),
        q = (0, s.Wu)([g.ZP], () =>
            null != z
                ? g.ZP.getVoiceStatesForChannel(z).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        [Q, X] = (0, h.wq)(z),
        {
            url: $,
            isLoading: J,
            canSeePreview: ee
        } = (0, s.cj)([S.Z, I.Z], () => {
            let e = null != z && S.Z.canBasicChannel(P.S7T.CONNECT, z);
            return e
                ? {
                      url: I.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
                      isLoading: I.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        et = (0, c.Z)(J ? null : $),
        en = J || null == $ ? et : $;
    if (null == K || null == z) return null;
    let er = () => {
            let e = a()(x.preview, Z),
                t = () => {
                    j({ action: 'PRESS_STREAM_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == F || F();
                };
            return null == en && J
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(o.Spinner, {})
                  })
                : null == en
                  ? (0, r.jsxs)(o.Clickable, {
                        className: a()(e, { [x.clickable]: Q }),
                        onClick: Q ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: H === P.BRd.LIGHT ? k : G
                            }),
                            V !== M.y0.FULL_SIZE &&
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    children: ee ? U.Z.Messages.STREAM_NO_PREVIEW : U.Z.Messages.STREAM_NO_PERMISSION_CTA
                                })
                        ]
                    })
                  : (0, r.jsxs)(o.Clickable, {
                        className: a()(e, x.overlay, { [x.clickable]: Q }),
                        onClick: Q ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: en,
                                className: x.image
                            }),
                            V === M.y0.BITE_SIZE &&
                                (0, r.jsx)(o.ClydeIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: x.clyde
                                })
                        ]
                    });
        },
        ei = () =>
            V !== M.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)('div', {
                      className: w.details,
                      children: [
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsxs)(o.Heading, {
                                      variant: 'heading-sm/semibold',
                                      color: 'text-normal',
                                      className: w.voiceChannelHeading,
                                      children: [
                                          (0, r.jsx)(o.VoiceNormalIcon, {
                                              size: 'xxs',
                                              color: o.tokens.colors.TEXT_NORMAL,
                                              className: w.voiceIcon
                                          }),
                                          (0, r.jsx)(o.Clickable, {
                                              className: a()(w.clickable, w.inline),
                                              onClick: () => {
                                                  l.default.selectVoiceChannel(z.id), (0, p.X)(K.id), null == j || j({ action: 'OPEN_VOICE_CHANNEL' }), null == F || F();
                                              },
                                              children: z.name
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(C.Z, {
                                      variant: 'text-xs/normal',
                                      text: U.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: K.name }),
                                      onClick: () => {
                                          (0, p.X)(K.id), j({ action: 'OPEN_VOICE_GUILD' }), null == F || F();
                                      }
                                  })
                              ]
                          }),
                          (0, r.jsx)(f.Z, {
                              users: q,
                              guildId: K.id,
                              channelId: z.id,
                              maxUsers: y.W,
                              size: o.AvatarSizes.SIZE_16,
                              disableUserPopout: (e) => e === t.id,
                              overflowCountVariant: 'text-xxs/semibold',
                              overflowCountColor: 'text-muted'
                          })
                      ]
                  }),
        ea = () =>
            V === M.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: w.voiceChannelDivider }),
                          (0, r.jsx)(y.Z, {
                              user: t,
                              guild: K,
                              channel: z,
                              onAction: j,
                              onClose: F
                          })
                      ]
                  }),
        es = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(w.actions, Z),
                      children: (0, r.jsx)(D.Z, {
                          stream: i,
                          canWatch: Q,
                          unavailableReason: X,
                          onAction: j,
                          onClose: F
                      })
                  });
    return (0, r.jsx)(_.Gt, {
        value: Y,
        children: (0, r.jsx)(L.Z, {
            user: t,
            onClose: F,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(O.Z.Overlay, {
                    className: a()(w.card, B),
                    ref: W,
                    children: [
                        (0, r.jsx)(v.Z, {
                            text: U.Z.Messages.USER_ACTIVITY_STREAMING,
                            tags: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(E.ZP, { size: E.OH.SMALL }),
                                    (0, r.jsx)(b.Z, {
                                        display: 'live',
                                        user: t,
                                        onClose: F,
                                        onRequestOpen: n
                                    })
                                ]
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: w.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: a()(w.content, Z),
                                    children: [er(), ei(), V === M.y0.FULL_SIZE && es()]
                                }),
                                ea()
                            ]
                        }),
                        V !== M.y0.FULL_SIZE && es()
                    ]
                });
            }
        })
    });
}
