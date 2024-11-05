n.d(t, {
    Z: function () {
        return V;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(481060),
    u = n(239091),
    c = n(765250),
    d = n(13245),
    h = n(872810),
    f = n(586902),
    p = n(835473),
    m = n(415635),
    v = n(933557),
    g = n(701362),
    E = n(552282),
    _ = n(565799),
    C = n(501655),
    S = n(597998),
    x = n(199902),
    Z = n(314897),
    I = n(592125),
    y = n(355863),
    b = n(131951),
    N = n(944486),
    O = n(938475),
    T = n(237997),
    L = n(136015),
    k = n(51144),
    A = n(145597),
    w = n(658785),
    R = n(388627),
    j = n(981631),
    M = n(65154),
    z = n(915990);
function D(e) {
    let { avatarSize: t, userId: n, channelId: o, guildId: r } = e,
        l = 2 * t,
        s = -(t / 2);
    return (0, i.jsx)('div', {
        className: z.effect,
        style: {
            top: s,
            left: s,
            width: l,
            height: l
        },
        children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: o,
            guildId: r,
            containerDimensions: {
                width: l,
                height: l
            }
        })
    });
}
function P(e) {
    let { channel: t, flipped: n = !1, locked: r = !1, user: u, nick: c, displayNameMode: d, displayUserMode: p, size: m = j.ipw.LARGE, onClick: v, onContextMenu: E, context: _, guildId: C, voiceState: I, showStreamPreview: y, onShowStreamPreview: N, onWatchStream: O } = e,
        T = (0, s.e7)([Z.default], () => Z.default.getId() === u.id, [u.id]),
        [L, k, A] = (0, s.Wu)([b.Z], () => (T ? [!b.Z.isSupported() || b.Z.isSelfMute() || b.Z.isSelfMutedTemporarily(), b.Z.isSelfDeaf(), !1] : [!b.Z.isSupported() || b.Z.isLocalMute(u.id), !1, b.Z.isLocalVideoDisabled(u.id)]), [T, u.id]),
        w = (0, s.e7)([x.Z], () => x.Z.getCurrentUserActiveStream()),
        R = (0, s.Wu)([x.Z], () => (null != w ? x.Z.getViewerIds(w) : [])),
        M = (0, f.Z)({
            userId: u.id,
            context: _
        }),
        P = (0, s.e7)([x.Z], () => x.Z.getStreamForUser(u.id, C)),
        U = null != P,
        V = o.useMemo(() => null != w && w.ownerId !== u.id && R.includes(u.id), [w, u.id, R]),
        W = o.useCallback(() => N(null), [N]),
        B = o.useCallback(
            () =>
                (0, i.jsx)(g.Z, {
                    user: u,
                    channel: t,
                    onWatch: () => {
                        (0, h.rn)(P, {
                            forceMultiple: !0,
                            noFocus: !0
                        }),
                            W(),
                            O();
                    },
                    onAction: O,
                    previewIsOpen: y,
                    location: j.Sbl.UNLOCKED_OVERLAY
                }),
            [u, t, P, y, W, O]
        );
    if (p === j.OYC.ONLY_WHILE_SPEAKING && r && !M) return null;
    let { mute: F, suppress: H, deaf: G } = I,
        Y = m === j.ipw.LARGE ? 32 : 24;
    return (0, i.jsxs)(a.Clickable, {
        className: l()(z.voiceUser, {
            [z.speaking]: M,
            [z.interactive]: !r,
            [z.flipped]: n
        }),
        onClick: r ? void 0 : (e) => (null == v ? void 0 : v(e, u)),
        onContextMenu: r ? void 0 : (e) => (null == E ? void 0 : E(e, u)),
        onMouseEnter: () => N(u.id),
        onMouseLeave: W,
        children: [
            (0, i.jsx)(a.Avatar, {
                className: z.avatar,
                size: m === j.ipw.LARGE ? a.AvatarSizes.SIZE_32 : a.AvatarSizes.SIZE_24,
                src: u.getAvatarURL(C, Y),
                'aria-hidden': !0
            }),
            (0, i.jsx)(D, {
                avatarSize: Y,
                userId: u.id,
                channelId: t.id,
                guildId: t.getGuildId()
            }),
            r && (d === j.wC$.NEVER || (!M && d === j.wC$.ONLY_WHILE_SPEAKING))
                ? null
                : (0, i.jsx)(a.Popout, {
                      position: 'right',
                      renderPopout: B,
                      shouldShow: y,
                      onRequestClose: W,
                      spacing: 0,
                      children: () =>
                          (0, i.jsxs)(a.Clickable, {
                              className: z.username,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-normal',
                                      children: c
                                  }),
                                  (0, i.jsx)(S.nm, {
                                      guildId: C,
                                      user: u,
                                      video: I.selfVideo,
                                      isStreaming: U,
                                      className: z.voiceIcons,
                                      iconClassName: z.voiceIcon,
                                      isWatching: V,
                                      localMute: L && !T,
                                      localVideoDisabled: A,
                                      mute: F || L,
                                      deaf: G || k,
                                      serverMute: F || H,
                                      serverDeaf: G,
                                      disabled: !1
                                  })
                              ]
                          })
                  })
        ]
    });
}
function U(e) {
    let { id: t, context: r = M.Yn.DEFAULT, channel: l, sortedVoiceStates: s, displayNameMode: a, displayUserMode: h, locked: f, pinned: p, isPreviewingInGame: m, anchorLeft: v, avatarSizeMode: g } = e,
        [E, _] = o.useState(null),
        C = (e, t) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        showMediaItems: !0,
                        mediaEngineContext: r
                    });
            });
        },
        S = s.length > 0 && null != r && null != l && (!f || p),
        x = o.useCallback(() => {
            var e, n;
            let i = null === (e = y.Z.getWidget(t)) || void 0 === e ? void 0 : e.layoutId,
                o = null != i ? (null === (n = y.Z.getWidgetsForLayout(i)) || void 0 === n ? void 0 : n.find((e) => e.type === j.Odu.GO_LIVE)) : null;
            null != o &&
                !o.pinned &&
                ((0, c.xh)(o.id),
                d.Z.track(j.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: null == l ? void 0 : l.guild_id,
                    channel_id: null == l ? void 0 : l.id,
                    channel_type: null == l ? void 0 : l.type,
                    widget_type: j.Odu.GO_LIVE
                }));
        }, [l, t]);
    return S
        ? (0, i.jsx)(i.Fragment, {
              children: s.map((e) => {
                  var t;
                  let { user: n, voiceState: o, member: s } = e;
                  return null == n
                      ? null
                      : (0, i.jsx)(
                            P,
                            {
                                guildId: null == l ? void 0 : l.guild_id,
                                user: n,
                                nick: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : k.ZP.getName(n),
                                flipped: !v,
                                voiceState: o,
                                displayNameMode: a,
                                displayUserMode: h,
                                size: g,
                                locked: f || m,
                                onContextMenu: C,
                                onClick: C,
                                context: r,
                                channel: l,
                                showStreamPreview: n.id === E,
                                onShowStreamPreview: _,
                                onWatchStream: x
                            },
                            n.id
                        );
              })
          })
        : null;
}
function V(e) {
    var t;
    let n = (0, s.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getVoiceChannelId())),
        r = (0, v.ZP)(n),
        l = (function () {
            let [e] = (0, s.e7)(
                    [O.ZP, _.Z, N.Z, I.Z],
                    () => {
                        let e = I.Z.getChannel(N.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [_.Z.getMutableParticipants(e.id, C.pV.SPEAKER), _.Z.getParticipantsVersion(e.id)] : [O.ZP.getVoiceStatesForChannel(e), O.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    L.Q
                ),
                t = (0, s.e7)([Z.default], () => Z.default.getId()),
                { showKeybindIndicators: n } = w.Z.useExperiment({ location: 'voice_widget' });
            return o.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        a = (0, s.e7)([x.Z], () => x.Z.getStreamerActiveStreamMetadata()),
        u = (0, R.II)(),
        c = (0, p.q)(null == u ? void 0 : u.id),
        d = (0, s.cj)([x.Z, T.Z], () => {
            let e = x.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: T.Z.getDisplayUserMode(),
                displayNameMode: T.Z.getDisplayNameMode(),
                avatarSizeMode: T.Z.getAvatarSizeMode(),
                streamApplication: (null == a ? void 0 : a.pid) === (0, A.QF)() ? (0, E.Z)(u) : null,
                stream: e
            };
        });
    return (0, i.jsx)(U, {
        ...d,
        application: c,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != r ? r : '',
        streamMetadata: a,
        streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == a ? void 0 : a.sourceName
                  }
    });
}
