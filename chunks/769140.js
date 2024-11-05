n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(287734),
    c = n(872810),
    d = n(110924),
    f = n(833664),
    _ = n(579630),
    h = n(100527),
    p = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    v = n(102172),
    I = n(359110),
    S = n(769654),
    T = n(922482),
    b = n(543882),
    y = n(592125),
    A = n(430824),
    N = n(496675),
    C = n(158776),
    R = n(699516),
    O = n(938475),
    D = n(626135),
    L = n(960870),
    x = n(139793),
    w = n(502762),
    M = n(652853),
    P = n(194811),
    k = n(373826),
    U = n(315324),
    G = n(582123),
    B = n(599864),
    Z = n(290274),
    F = n(228168),
    V = n(981631),
    j = n(388032),
    H = n(676411),
    Y = n(380934),
    W = n(924482),
    K = n(774797);
function z(e) {
    let { user: t, currentUser: n, stream: a, className: z, onClose: q } = e,
        { profileType: Q, theme: X } = (0, M.z)(),
        J = {
            [Y.fullSize]: Q === F.y0.FULL_SIZE,
            [H.fullSize]: Q === F.y0.FULL_SIZE
        },
        { enabled: $, analyticsEligible: ee } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: et } = (0, p.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        en = (0, L.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: et
        }),
        er = (0, x.Z)({
            userId: t.id,
            onAction: en
        }),
        ei = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        ea = (0, o.e7)([y.Z], () => y.Z.getChannel(null == a ? void 0 : a.channelId)),
        es = (0, o.Wu)([O.ZP], () =>
            null != ea
                ? O.ZP.getVoiceStatesForChannel(ea).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        eo = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [el, eu] = (0, v.wq)(ea),
        {
            url: ec,
            isLoading: ed,
            canSeePreview: ef
        } = (0, o.cj)([N.Z, b.Z], () => {
            let e = null != ea && N.Z.canBasicChannel(V.S7T.CONNECT, ea);
            return e
                ? {
                      url: b.Z.getPreviewURL(a.guildId, a.channelId, a.ownerId),
                      isLoading: b.Z.getIsPreviewLoading(a.guildId, a.channelId, a.ownerId),
                      canSeePreview: e
                  }
                : {
                      url: null,
                      isLoading: !1,
                      canSeePreview: e
                  };
        }),
        e_ = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (ee) {
            var e;
            D.default.track(V.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: e_,
                treatment: $ && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, e_, $, ee, a]);
    let eh = (0, d.Z)(ed ? null : ec),
        ep = ed || null == ec ? eh : ec;
    if (null == ei || null == ea || ($ && !1 === a.discoverable)) return null;
    let em = () => {
            let e = s()(Y.preview, J),
                t = () => {
                    en({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == q || q();
                };
            return null == ep && ed
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.Spinner, {})
                  })
                : null == ep
                  ? (0, r.jsxs)(l.Clickable, {
                        className: s()(e, Y.overlay, { [Y.clickable]: el }),
                        onClick: el ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: X === V.BRd.LIGHT ? K : W
                            }),
                            Q !== F.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Y.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(eu)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ef ? j.intl.string(j.t.uQZTBQ) : j.intl.string(j.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.Clickable, {
                        className: s()(e, Y.overlay, { [Y.clickable]: el }),
                        onClick: el ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ep,
                                className: Y.image
                            }),
                            Q !== F.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Y.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, v.P9)(eu)
                                        }),
                                        (0, r.jsx)(l.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Y.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eg = () => {
            if (Q !== F.y0.FULL_SIZE) return null;
            let e = ea.isGuildStageVoice(),
                n = e ? l.StageIcon : l.VoiceNormalIcon;
            return (0, r.jsxs)('div', {
                className: H.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: H.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(n, {
                                        size: 'xxs',
                                        color: l.tokens.colors.TEXT_NORMAL,
                                        className: H.voiceIcon
                                    }),
                                    (0, r.jsx)(l.Clickable, {
                                        className: s()(H.clickable, H.inline),
                                        onClick: () => {
                                            null == en || en({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, T.Cq)(ea) : (u.default.selectVoiceChannel(ea.id), (0, I.Kh)(ea.id)), null == q || q();
                                        },
                                        children: ea.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(k.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: ei.name }),
                                onClick: () => {
                                    en({ action: 'OPEN_VOICE_GUILD' }), (0, S.X)(ei.id), null == q || q();
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: es,
                        guildId: ei.id,
                        channelId: ea.id,
                        maxUsers: U.W,
                        size: l.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eE = () =>
            Q === F.y0.FULL_SIZE
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: H.voiceChannelDivider }),
                          (0, r.jsx)(U.Z, {
                              user: t,
                              guild: ei,
                              channel: ea,
                              onAction: en,
                              onClose: q
                          })
                      ]
                  }),
        ev = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: s()(H.actions, J),
                      children: (0, r.jsx)(B.Z, {
                          channel: ea,
                          onAction: en,
                          onClose: q
                      })
                  });
    return (0, r.jsx)(p.Gt, {
        value: et,
        children: (0, r.jsx)(G.Z, {
            user: t,
            onClose: q,
            children: (e) => {
                let { onAutoDismiss: n } = e;
                return (0, r.jsxs)(w.Z.Overlay, {
                    className: s()(H.card, z),
                    ref: er,
                    children: [
                        (0, r.jsx)(P.Z, {
                            text: null != eo ? j.intl.formatToPlainString(j.t['4CQq9f'], { name: eo.name }) : j.intl.string(j.t['Jpkr/v']),
                            tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL }),
                            contextMenu: (0, r.jsx)(Z.Z, {
                                display: 'live',
                                user: t,
                                onClose: q,
                                onRequestOpen: n
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: H.body,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(H.content, J),
                                    children: [em(), eg(), Q === F.y0.FULL_SIZE && ev()]
                                }),
                                eE()
                            ]
                        }),
                        Q !== F.y0.FULL_SIZE && ev()
                    ]
                });
            }
        })
    });
}
