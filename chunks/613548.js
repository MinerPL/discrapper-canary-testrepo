n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n.n(r),
    c = n(848246),
    u = n(442837),
    d = n(481060),
    h = n(194082),
    m = n(320007),
    p = n(236091),
    _ = n(569545),
    E = n(517525),
    f = n(665149),
    C = n(6242),
    g = n(757692),
    I = n(933843),
    x = n(141321),
    T = n(121254),
    N = n(954551),
    v = n(44136),
    S = n(651183),
    Z = n(618158),
    A = n(390322),
    M = n(616286),
    b = n(961048),
    R = n(179424),
    j = n(786915),
    L = n(975146),
    P = n(991617),
    O = n(597998),
    y = n(606304),
    D = n(594174),
    k = n(358221),
    U = n(887012),
    w = n(444253),
    B = n(355827),
    H = n(354459),
    G = n(981631),
    V = n(689938),
    F = n(492334);
function W(e) {
    let { channelId: t, guildId: n } = e,
        a = Date.now(),
        s = (0, u.e7)([y.Z, k.Z], () =>
            o()(y.Z.getSpeakers())
                .map((e) => k.Z.getParticipant(t, e))
                .filter((e) => null != e && e.type === H.fO.USER && e.speaking && !(0, v.ZP)(e))
                .sortBy((e) => -y.Z.getSpeakingDuration(e.user.id, a))
                .slice(0, 3)
                .value()
        );
    return 0 === s.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: s.map((e, t) =>
                  (0, i.jsx)(
                      d.Tooltip,
                      {
                          position: 'bottom',
                          color: d.Tooltip.Colors.GREY,
                          text: V.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({ username: e.user.username }),
                          children: (a) =>
                              (0, i.jsx)(O.Z, {
                                  ...a,
                                  className: l()(F.speaker, { [F.last]: t === s.length - 1 }),
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
function z(e) {
    let { inPopout: t, channel: n, appContext: s, inCall: l, isChatOpen: r, exitFullScreen: o } = e,
        v = n.id,
        {
            voiceParticipantsHidden: O,
            selectedParticipant: y,
            userParticipantCount: V
        } = (0, u.cj)(
            [k.Z],
            () => ({
                selectedParticipant: k.Z.getSelectedParticipant(v),
                voiceParticipantsHidden: k.Z.getVoiceParticipantsHidden(v),
                userParticipantCount: k.Z.getUserParticipantCount(v)
            }),
            [v]
        ),
        z = (0, u.e7)([D.default], () => D.default.getCurrentUser()),
        Y = (0, U.Z)(n),
        K = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
        q = (0, g.o)(y, z),
        X = (0, C.lL)('CallHeader', !0, z, q),
        { enabled: Q } = T.Z.useExperiment({ location: 'ChannelCallHeaderToolbar' }, { autoTrackExposure: !1 }),
        { preventIdle: J, allowIdle: $ } = (0, Z.Y)('popup'),
        ee = [];
    if (Y) {
        let e = (null == y ? void 0 : y.type) === H.fO.STREAM ? (0, _.my)(y.id) : void 0,
            t = (null == y ? void 0 : y.type) === H.fO.ACTIVITY ? y.id : void 0;
        ee.push(
            (0, i.jsx)(
                j.Z,
                {
                    className: F.button,
                    channel: n,
                    applicationId: t,
                    stream: e,
                    exitFullScreen: o,
                    analyticsLocation: n.type === G.d4z.GUILD_VOICE ? G.ZY5.GUILD_CHANNEL : G.ZY5.DM_CHANNEL
                },
                'invite-button'
            )
        );
    }
    return (
        O &&
            ee.push(
                (0, i.jsx)(
                    W,
                    {
                        channelId: v,
                        guildId: n.guild_id
                    },
                    'current-speaker'
                )
            ),
        ee.push(
            (0, i.jsx)(
                p.Z,
                {
                    className: F.button,
                    channelId: v
                },
                'clips-enabled-indicator'
            )
        ),
        (null == y ? void 0 : y.type) === H.fO.STREAM &&
            (ee.push(
                (0, i.jsx)(
                    S.Z,
                    {
                        className: F.button,
                        participant: y
                    },
                    'warning'
                )
            ),
            ee.push(
                (0, i.jsx)(
                    E.Z,
                    {
                        size: h.ZP.Sizes.LARGE,
                        className: F.button,
                        participant: y,
                        showQuality: !0,
                        premiumIndicator: K || X.enabled
                    },
                    'live-indicator'
                )
            )),
        O &&
            ee.push(
                (0, i.jsx)(
                    d.Popout,
                    {
                        position: 'bottom',
                        renderPopout: () => (0, i.jsx)(A.Z, { children: (0, i.jsx)(B.Z, { channel: n }) }),
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, a.createElement)(L.Z, {
                                ...e,
                                isActive: n,
                                count: V,
                                key: 'call-members',
                                className: F.button
                            });
                        }
                    },
                    'call-members-popout'
                )
            ),
        l &&
            ee.push(
                null != y
                    ? (0, i.jsx)(
                          R.Z,
                          {
                              className: F.button,
                              channelId: v
                          },
                          'deselect-participant'
                      )
                    : (0, i.jsx)(
                          P.Z,
                          {
                              className: F.button,
                              channelId: v,
                              isHorizontal: !0
                          },
                          'select-participant'
                      )
            ),
        !t && ee.push((0, i.jsx)(m.Z, { className: F.button }, 'clips')),
        ee.push(
            (0, i.jsx)(
                x.Z,
                {
                    onOpen: J,
                    onClose: $,
                    className: F.button
                },
                'recents'
            )
        ),
        Q && ee.push((0, i.jsx)(N.Z, { className: F.button }, 'for-later')),
        ee.push(
            (0, i.jsx)(
                d.Popout,
                {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(A.Z, {
                            children: (0, i.jsx)(w.Z, {
                                channelId: v,
                                onClose: t,
                                appContext: s,
                                exitFullScreen: o
                            })
                        });
                    },
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, a.createElement)(b.Z, {
                            ...e,
                            key: 'more-options',
                            isActive: n,
                            className: F.lastButton
                        });
                    }
                },
                'more-options-popout'
            )
        ),
        !r &&
            (ee.push((0, i.jsx)(f.ZP.Divider, { className: F.divider }, 'divider')),
            ee.push(
                (0, i.jsx)(
                    M.T,
                    {
                        channelId: n.id,
                        className: F.chatButtonSpacer,
                        disabled: !0
                    },
                    'chat-spacer'
                )
            )),
        (0, i.jsx)(i.Fragment, { children: ee })
    );
}
