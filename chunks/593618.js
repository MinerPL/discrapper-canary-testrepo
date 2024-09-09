n.d(t, {
    K: function () {
        return q;
    },
    Z: function () {
        return Q;
    }
}),
    n(390547),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(317381),
    _ = n(884338),
    E = n(470883),
    f = n(750881),
    h = n(666188),
    p = n(372769),
    I = n(523751),
    m = n(246364),
    T = n(746916),
    S = n(965638),
    g = n(160404),
    A = n(41776),
    N = n(777861),
    O = n(565799),
    R = n(501655),
    v = n(517334),
    C = n(344185),
    y = n(199902),
    L = n(77498),
    D = n(984933),
    b = n(607744),
    M = n(158776),
    P = n(699516),
    U = n(9156),
    w = n(594174),
    x = n(938475),
    G = n(510601),
    k = n(59688),
    B = n(456774),
    F = n(718582),
    V = n(981631),
    H = n(689938),
    Z = n(416590),
    Y = n(403614);
function j(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: Z.row,
              children: [
                  (0, r.jsx)(e, {
                      className: Z.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(_.Z, {
                      guildId: n,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function W(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: H.Z.Messages.FORM_LABEL_MUTED
          })
        : (0, r.jsx)(N.Z, {
              muteConfig: t,
              className: n
          });
}
function K(e) {
    var t, n, a;
    let { guild: o } = e,
        h = o.id,
        {
            voiceUsersToShow: p,
            stageSpeakers: I,
            numStageListeners: m,
            streamUsersToShow: T,
            embeddedActivitiesUsers: S,
            gameUsers: g,
            shouldShowGameBadge: A
        } = (function (e) {
            let t = e.id,
                n = (0, u.Wu)(
                    [D.ZP, C.Z],
                    () => {
                        let e = D.ZP.getChannels(t)
                            [D.Zb].filter((e) => {
                                let { channel: t } = e;
                                return t.type === V.d4z.GUILD_VOICE;
                            })
                            .map((e) => {
                                let { channel: t } = e;
                                return t.id;
                            });
                        return [...e, ...Object.values(C.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))];
                    },
                    [t]
                ),
                r = (0, v.ZP)(t),
                a = i.useMemo(() => r.map((e) => e.id), [r]),
                s = (0, u.e7)([x.ZP], () => x.ZP.getVoiceStates(t), [t]),
                o = (0, u.e7)([P.Z], () => P.Z.getBlockedIDs()),
                c = (0, f.aK)('guild-tooltip'),
                _ = l().flatMap(n, (t) => {
                    var n;
                    if (t === e.afkChannelId) return [];
                    let r = (null !== (n = s[t]) && void 0 !== n ? n : []).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return c ? (0, E.Qj)(r, o) : r;
                }),
                h = (0, u.Wu)([O.Z], () =>
                    l().flatMap(a, (t) => {
                        if (t === e.afkChannelId) return [];
                        let n = O.Z.getMutableParticipants(t, R.pV.SPEAKER)
                            .filter((e) => e.type === R.Ui.VOICE)
                            .map((e) => {
                                let { user: t } = e;
                                return t;
                            });
                        return c ? (0, E.Qj)(n, o) : n;
                    })
                ),
                p = (0, u.e7)([O.Z], () => {
                    let e = 0;
                    for (let t of a) e += O.Z.getParticipantCount(t, R.pV.AUDIENCE);
                    return e;
                }),
                I = (0, u.Wu)(
                    [y.Z],
                    () => {
                        let e = y.Z.getAllApplicationStreams()
                            .filter((e) => e.guildId === t)
                            .map((e) => e.ownerId);
                        return c ? (0, E.$m)(e, o) : e;
                    },
                    [c, o, t]
                ),
                m = (0, u.Wu)([M.Z, L.Z], () => {
                    let e = _.filter((e) => M.Z.getActivities(e.id, t).some((e) => (null == e ? void 0 : e.application_id) != null && null != L.Z.getDetectableGame(null == e ? void 0 : e.application_id)));
                    return c ? (0, E.Qj)(e, o) : e;
                }),
                T = (0, G.kM)('Guild Tooltip', !1),
                S = T ? m.map((e) => e.id) : [],
                g = (0, u.Wu)(
                    [d.ZP],
                    () => {
                        let e = d.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
                        return c ? (0, E.$m)(e, o) : e;
                    },
                    [t, c, o]
                ),
                A = (0, u.Wu)(
                    [w.default],
                    () => {
                        let e = g.map((e) => w.default.getUser(e));
                        return c ? (0, E.Qj)(e) : e;
                    },
                    [c, g]
                ),
                N = (0, u.Wu)([w.default], () => I.map((e) => w.default.getUser(e)), [I]),
                b = _.filter((e) => !I.includes(e.id) && !g.includes(e.id) && !S.includes(e.id)),
                U = c ? (0, E.Qj)(b) : b,
                k = N.filter((e) => null != e && !g.includes(e.id)),
                B = h.length > 0 || b.length > 0 || k.length > 0 || A.length > 0;
            return {
                voiceUsersToShow: U,
                stageSpeakers: h,
                numStageListeners: p,
                streamUsersToShow: k,
                embeddedActivitiesUsers: A,
                gameUsers: m,
                shouldShowGameBadge: T,
                hasActivity: B
            };
        })(o),
        N = j(c.GameControllerIcon, g, h),
        b = j(c.VoiceNormalIcon, p, h);
    let k =
            ((t = h),
            (n = I),
            (a = m),
            0 === n.length
                ? null
                : (0, r.jsxs)('div', {
                      className: Z.row,
                      children: [
                          (0, r.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: Z.activityIcon
                          }),
                          (0, r.jsx)(_.Z, {
                              guildId: t,
                              users: n,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: Z.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: Z.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/normal',
                                      children: a
                                  })
                              ]
                          })
                      ]
                  })),
        B = j(c.ScreenArrowIcon, T, h),
        F = j(c.ActivitiesIcon, S, h),
        { isMuted: H, muteConfig: Y } = (0, u.cj)(
            [U.ZP],
            () => ({
                isMuted: U.ZP.isMuted(h),
                muteConfig: U.ZP.getMuteConfig(h)
            }),
            [h]
        );
    return (
        null != N && G.ZP.trackExposure({ location: 'Guild Tooltip' }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                k,
                b,
                B,
                A && N,
                F,
                H
                    ? (0, r.jsx)(W, {
                          muteConfig: Y,
                          className: s()(Z.muteText, { [Z.muteTextWithActivity]: null != b || null != B })
                      })
                    : null
            ]
        })
    );
}
function z(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(c.Text, {
        className: Z.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: (function (e) {
            switch (e) {
                case m.wB.SUBMITTED:
                    return H.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                case m.wB.REJECTED:
                    return H.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                case m.wB.APPROVED:
                    return H.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
                default:
                    return H.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED;
            }
        })(t)
    });
}
function q(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, h.Z)(t),
        a = (0, T.E)(t),
        o = null != a ? (0, r.jsx)(z, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(K, { guild: t }) : null,
        d = (0, u.e7)([g.Z], () => g.Z.isViewingRoles(t.id)),
        _ = (0, S.I)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(Z.row, Z.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(I.Z, {
                              guild: t,
                              className: Z.rowIconV2
                          })
                        : (0, r.jsx)(p.Z, {
                              guild: t,
                              size: 20,
                              className: Z.rowIcon
                          }),
                    (0, r.jsx)('span', {
                        className: s()(Z.guildNameText, { [Z.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            _
                ? (0, r.jsx)(c.Text, {
                      className: Z.invitesDisabledTooltip,
                      color: 'header-secondary',
                      variant: 'text-sm/medium',
                      children: H.Z.Messages.INVITES_DISABLED_TOOLTIP
                  })
                : null,
            d
                ? (0, r.jsx)(c.Text, {
                      className: Z.viewAsRolesWarning,
                      color: 'text-normal',
                      variant: 'text-xs/normal',
                      children: H.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
                  })
                : null != o
                  ? o
                  : l
        ]
    });
}
function Q(e) {
    let { guild: t, disabled: n = !1, 'aria-label': a = !1, children: s, includeActivity: o = !0, isDragging: l } = e,
        d = (0, k.o)('guilds_bar', !1),
        [_, E] = i.useState(!1),
        f = (0, F.V1)(t),
        { isUserLurking: h, isUnverifiedAccount: p } = (0, u.cj)([A.Z, b.Z], () => {
            let e = A.Z.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !b.Z.getCheck(t.id).canChat
            };
        }),
        I = i.useMemo(() => !h && !p && o && f.length > 0, [h, p, o, f.length]),
        m = () => {
            I && k.Z.trackExposure({ location: 'guild_tooltip' });
        },
        T = () => {
            E(!0), m();
        };
    return I && d
        ? (0, r.jsx)('div', {
              onMouseEnter: T,
              onMouseLeave: () => E(!1),
              onFocus: T,
              onBlur: () => E(!1),
              children: (0, r.jsx)(c.Popout, {
                  position: 'right',
                  renderPopout: (e) => {
                      var n;
                      return (0, r.jsx)(B.Z, {
                          guild: t,
                          closePopout: () => E(!1),
                          nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
                      });
                  },
                  spacing: 0,
                  onRequestClose: () => E(!1),
                  shouldShow: !l && _,
                  children: (e) =>
                      (0, r.jsx)('div', {
                          ...e,
                          children: s
                      })
              })
          })
        : (0, r.jsx)(c.Tooltip, {
              hideOnClick: !0,
              spacing: 20,
              position: 'right',
              text: n
                  ? null
                  : (0, r.jsx)(q, {
                        guild: t,
                        includeActivity: o
                    }),
              'aria-label': a,
              onTooltipShow: m,
              tooltipClassName: Y.listItemTooltip,
              children: (e) => {
                  let { onFocus: t, onBlur: n, ...a } = e;
                  return (0, r.jsx)('div', {
                      onFocus: t,
                      onBlur: n,
                      children: i.cloneElement(i.Children.only(s), { ...a })
                  });
              }
          });
}
