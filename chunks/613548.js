n.d(t, {
    Z: function () {
        return K;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(848246),
    d = n(442837),
    u = n(481060),
    h = n(194082),
    p = n(320007),
    m = n(236091),
    f = n(540059),
    g = n(569545),
    C = n(517525),
    x = n(665149),
    v = n(6242),
    _ = n(757692),
    I = n(933843),
    E = n(141321),
    b = n(2818),
    N = n(954551),
    Z = n(44136),
    T = n(651183),
    S = n(618158),
    j = n(390322),
    A = n(616286),
    y = n(961048),
    P = n(179424),
    M = n(786915),
    R = n(975146),
    L = n(991617),
    k = n(597998),
    O = n(606304),
    D = n(594174),
    w = n(358221),
    B = n(887012),
    U = n(444253),
    H = n(355827),
    G = n(354459),
    F = n(981631),
    V = n(388032),
    z = n(438337);
function W(e) {
    let { channelId: t, guildId: n } = e,
        l = (0, d.Wu)([O.Z, w.Z], () => {
            let e = Date.now();
            return o()(O.Z.getSpeakers())
                .map((e) => w.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === G.fO.USER && e.speaking && !(0, Z.ZP)(e))
                .sortBy((t) => -O.Z.getSpeakingDuration(t.user.id, e))
                .slice(0, 3)
                .value();
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: l.map((e, t) =>
                  (0, i.jsx)(
                      u.Tooltip,
                      {
                          position: 'bottom',
                          color: u.Tooltip.Colors.GREY,
                          text: V.intl.formatToPlainString(V.t.JjdizM, { username: e.user.username }),
                          children: (a) =>
                              (0, i.jsx)(k.ZP, {
                                  ...a,
                                  className: r()(z.speaker, { [z.last]: t === l.length - 1 }),
                                  user: e.user,
                                  speaking: !0,
                                  collapsed: !0,
                                  guildId: n
                              })
                      },
                      e.id
                  )
              )
          });
}
function K(e) {
    let { inPopout: t, channel: n, appContext: a, inCall: r, isChatOpen: s, exitFullScreen: o } = e,
        Z = n.id,
        {
            voiceParticipantsHidden: k,
            selectedParticipant: O,
            userParticipantCount: V
        } = (0, d.cj)(
            [w.Z],
            () => ({
                selectedParticipant: w.Z.getSelectedParticipant(Z),
                voiceParticipantsHidden: w.Z.getVoiceParticipantsHidden(Z),
                userParticipantCount: w.Z.getUserParticipantCount(Z)
            }),
            [Z]
        ),
        K = (0, d.e7)([D.default], () => D.default.getCurrentUser()),
        Y = (0, B.Z)(n),
        q = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
        X = (0, _.o)(O, K),
        J = (0, v.lL)('CallHeader', !0, K, X),
        { enabled: Q, inInbox: $ } = b.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }),
        ee = (0, f.Q)('ChannelCallHeaderToolbar'),
        { preventIdle: et, allowIdle: en } = (0, S.Y)('popup'),
        ei = [];
    if (Y) {
        let e = (null == O ? void 0 : O.type) === G.fO.STREAM ? (0, g.my)(O.id) : void 0,
            t = (null == O ? void 0 : O.type) === G.fO.ACTIVITY ? O.id : void 0;
        ei.push(
            (0, i.jsx)(
                M.Z,
                {
                    className: z.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: o,
                    analyticsLocation: n.type === F.d4z.GUILD_VOICE ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        k &&
            ei.push(
                (0, i.jsx)(
                    W,
                    {
                        channelId: Z,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ei.push(
            (0, i.jsx)(
                m.Z,
                {
                    className: z.button,
                    channelId: Z
                },
                'clips-enabled-indicator'
            )
        ),
        (null == O ? void 0 : O.type) === G.fO.STREAM &&
            (ei.push(
                (0, i.jsx)(
                    T.Z,
                    {
                        className: z.button,
                        participant: O
                    },
                    'warning'
                )
            ),
            ei.push(
                (0, i.jsx)(
                    C.Z,
                    {
                        size: h.ZP.Sizes.LARGE,
                        className: z.button,
                        participant: O,
                        showQuality: !0,
                        premiumIndicator: q || J.enabled
                    },
                    'live-indicator'
                )
            )),
        k &&
            ei.push(
                (0, i.jsx)(
                    u.Popout,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(j.Z, { children: (0, i.jsx)(H.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.createElement)(R.Z, {
                                ...e,
                                isActive: n,
                                count: V,
                                key: 'call-members',
                                className: z.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        r &&
            ei.push(
                null != O
                    ? (0, i.jsx)(
                          P.Z,
                          {
                              className: z.button,
                              channelId: Z
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          L.Z,
                          {
                              className: z.button,
                              channelId: Z,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !t && ei.push((0, i.jsx)(p.Z, { className: z.button }, 'clips')),
        !ee &&
            ei.push(
                (0, i.jsx)(
                    E.Z,
                    {
                        onOpen: et,
                        onClose: en,
                        className: z.button
                    },
                    'recents'
                )
            ),
        Q && !$ && ei.push((0, i.jsx)(N.Z, { className: z.button }, 'for-later')),
        ei.push(
            (0, i.jsx)(
                u.Popout,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(j.Z, {
                            children: (0, i.jsx)(U.Z, {
                                channelId: Z,
                                onClose: t,
                                appContext: a,
                                exitFullScreen: o
                            })
                        });
                    },
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.createElement)(y.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: z.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        !s &&
            (ei.push((0, i.jsx)(x.ZP.Divider, { className: z.divider }, 'divider')),
            ei.push(
                (0, i.jsx)(
                    A.T,
                    {
                        channelId: n.id,
                        className: z.chatButtonSpacer,
                        disabled: !0
                    },
                    'chat-spacer'
                )
            )),
        (0, i.jsx)(i.Fragment, { children: ei })
    );
}
