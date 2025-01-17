n.d(t, {
    Z: function () {
        return G;
    },
    _: function () {
        return H;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(475179),
    u = n(872810),
    d = n(763520),
    h = n(194082),
    m = n(710845),
    p = n(590293),
    _ = n(863908),
    f = n(871118),
    E = n(517525),
    g = n(352978),
    C = n(590076),
    I = n(507675),
    x = n(199902),
    T = n(314897),
    N = n(592125),
    v = n(131951),
    S = n(451478),
    Z = n(685203),
    A = n(112560),
    M = n(442168),
    b = n(822296),
    R = n(916771),
    j = n(792517),
    L = n(979425),
    P = n(651183),
    O = n(623825),
    y = n(981631),
    D = n(354459),
    k = n(65154),
    U = n(689938),
    w = n(149050);
let B = new m.Z('StreamTile');
function H(e) {
    let { participant: t, selected: n, focused: a, idle: s, width: l, premiumIndicator: o } = e,
        c = (0, r.e7)([x.Z], () => x.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, O.K)(l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? null : (0, i.jsx)(P.Z, { participant: t }),
            a || null == c || c.state === y.jm8.ENDED || c.state === y.jm8.FAILED
                ? null
                : (0, i.jsx)(E.Z, {
                      size: h.ZP.Sizes.SMALL,
                      className: w.liveIndicator,
                      participant: t,
                      showQuality: !u && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o
                  })
        ]
    });
}
function G(e) {
    let { participant: t, selected: n, onVideoResize: s, paused: h, fit: m, inPopout: E, width: P, focused: O } = e,
        H = v.Z.getVideoComponent(),
        G = (0, r.e7)([T.default], () => T.default.getId()),
        V = (0, p.Z)(),
        { stream: F, user: W, streamId: z } = t,
        Y = (0, r.e7)([N.Z], () => N.Z.getChannel(F.channelId)),
        K = (0, r.e7)([x.Z], () => x.Z.getActiveStreamForUser(W.id, F.guildId), [W.id, F.guildId]),
        q = (0, r.e7)([x.Z], () => x.Z.getAllActiveStreams().length > 0),
        X = (0, r.e7)([S.Z], () => S.Z.isFocused()),
        Q = (null == K ? void 0 : K.ownerId) === G,
        J = Q && !X && !E,
        $ = null != K ? (0, _.Z)(K, W, W.id === G, J) : null,
        ee = P < 195;
    if (
        (a.useEffect(() => {
            !q && (null == Y ? void 0 : Y.isGuildStageVoice()) && !Q && ((0, u.rn)(F), c.Z.updateStageStreamSize(F.channelId, !1));
        }, []),
        a.useEffect(() => {
            B.info(
                'Stream Tile State - activeStream: '
                    .concat(null != K, ' | selected: ')
                    .concat(n, ' | Video: ')
                    .concat(null != H, ' | MediaEngine: ')
                    .concat(v.Z.supports(k.AN.VIDEO))
            );
        }, [H, K, n]),
        V)
    )
        return (0, i.jsx)(L.Z, {
            stream: t.stream,
            isSmall: ee,
            selected: n,
            isSelfStream: W.id === G
        });
    if ((null == K ? void 0 : K.state) === y.jm8.ENDED)
        return (0, i.jsx)(b.Z, {
            selected: n,
            stream: K,
            width: P
        });
    if ((null == K ? void 0 : K.state) === y.jm8.FAILED)
        return (0, i.jsx)(R.Z, {
            selected: n,
            stream: K,
            width: P
        });
    else if (t.type === D.fO.HIDDEN_STREAM)
        return (0, i.jsx)(j.Z, {
            selected: n,
            participant: t,
            width: P
        });
    else if (null != K && !n && null != H && v.Z.supports(k.AN.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != Y
                    ? (0, i.jsx)(C.Z, {
                          focused: O,
                          channelId: Y.id,
                          guildId: Y.guild_id,
                          streamerId: W.id,
                          hasScreenMessage: null != $,
                          stream: F
                      })
                    : null,
                (0, i.jsx)(
                    g.Z,
                    {
                        onResize: s,
                        wrapperClassName: w.videoWrapper,
                        className: w.content,
                        streamId: z,
                        videoComponent: H,
                        fit: m,
                        paused: h || J,
                        videoSpinnerContext: Q ? d.m.SELF_STREAM : d.m.REMOTE_STREAM,
                        userId: W.id
                    },
                    z
                ),
                null != $
                    ? (0, i.jsx)(I.Z, {
                          size: (0, A.L)(P),
                          ...$
                      })
                    : null,
                (0, i.jsx)(M.Z, {
                    stream: F,
                    inPopout: E
                })
            ]
        });
    else
        return (0, i.jsxs)('div', {
            className: l()(w.content, w.streamPreview, { [w.small]: ee }),
            children: [
                (0, i.jsx)(f.Z, {
                    noText: !0,
                    className: l()(w.absoluteFill, { [w.streamPreviewOpacity]: null == K }),
                    stream: t.stream
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(Z.a, {
                                  isSmall: ee,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: ee ? 'text-sm/semibold' : 'text-md/semibold',
                                      color: 'none',
                                      children: P < 175 ? U.Z.Messages.WATCH : U.Z.Messages.WATCH_STREAM
                                  })
                              }),
                              q
                                  ? (0, i.jsx)(Z.a, {
                                        className: w.addCTA,
                                        tooltip: U.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                        onClick: (e) => {
                                            e.stopPropagation(), (0, u.rn)(F, { forceMultiple: !0 });
                                        },
                                        isSmall: ee,
                                        children: (0, i.jsx)(o.EyePlusIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: w.addStreamIcon
                                        })
                                    })
                                  : null
                          ]
                      })
            ]
        });
}
