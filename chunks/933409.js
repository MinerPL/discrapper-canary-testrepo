n.d(l, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(789020);
var t = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    u = n(91176),
    o = n(749210),
    d = n(616780),
    s = n(251794),
    c = n(386696),
    Z = n(71619),
    g = n(910693),
    m = n(592125),
    M = n(271383),
    E = n(430824),
    v = n(496675),
    f = n(594174),
    I = n(979651),
    C = n(630388),
    P = n(5192),
    h = n(813872),
    S = n(981631),
    b = n(590433),
    O = n(372897),
    R = n(388032);
function x(e, l, x, j) {
    let p = i.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
        T = null != j ? [j] : [];
    (0, d.$)(p), (0, a.e7)([v.Z], () => v.Z.getGuildVersion(l), [l]);
    let _ = (0, a.e7)([E.Z], () => E.Z.getGuild(l), [l]),
        A = (0, a.e7)(
            [f.default],
            () => {
                var l;
                return (null === (l = f.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === e.id;
            },
            [e.id]
        ),
        N = (0, a.e7)([M.ZP], () => M.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
        U = (0, a.e7)([m.Z], () => m.Z.getChannel(x), [x]),
        [, q] = (0, Z.ZP)(e.id, l),
        y = null == U ? void 0 : U.isGuildStageVoice(),
        {
            muted: B,
            deafened: k,
            suppressed: L,
            voiceChannelId: D
        } = (0, a.cj)([I.Z], () => {
            var n, t, i;
            let a = I.Z.getVoiceState(l, e.id);
            return {
                muted: null !== (n = null == a ? void 0 : a.mute) && void 0 !== n && n,
                deafened: null !== (t = null == a ? void 0 : a.deaf) && void 0 !== t && t,
                suppressed: null !== (i = null == a ? void 0 : a.suppress) && void 0 !== i && i,
                voiceChannelId: null == a ? void 0 : a.channelId
            };
        }),
        V = (0, a.e7)([M.ZP], () => M.ZP.getMember(l, e.id)),
        G = (0, h.Z)({
            userId: e.id,
            guildId: l,
            channelId: x,
            location: j
        }),
        F = (0, g.sE)(l, {
            location: j,
            targetUserId: e.id
        }),
        w = (0, c.Z)(l, e.id),
        K =
            null != D && null != x && v.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: D }) && !N
                ? [
                      (!y || (y && !L)) && v.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, { channelId: x })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-mute',
                                    label: R.intl.string(R.t.e9e9UV),
                                    checked: B,
                                    color: 'danger',
                                    action: () => {
                                        !1 === B && F(g.jQ.MUTE), o.Z.setServerMute(l, e.id, !B);
                                    }
                                },
                                'voice-mute'
                            )
                          : null,
                      (!y || (y && !L)) && v.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, { channelId: x })
                          ? (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: 'voice-deafen',
                                    label: R.intl.string(R.t.hMA2GB),
                                    checked: k,
                                    color: 'danger',
                                    action: () => o.Z.setServerDeaf(l, e.id, !k)
                                },
                                'voice-deafen'
                            )
                          : null,
                      !A && null != _ && v.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, { channelId: x })
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'voice-disconnect',
                                    label: A ? R.intl.string(R.t['6vrfgo']) : R.intl.string(R.t['/jERiI']),
                                    color: 'danger',
                                    action: () => o.Z.setChannel(l, e.id, null)
                                },
                                'voice-disconnect'
                            )
                          : null
                  ]
                : [],
        Y = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
                try {
                    var i;
                    await u.Z.setCommunicationDisabledDuration(n, t, b.UK.DURATION_60_SEC, null, j), F(g.jQ.TIMEOUT), (0, r.showToast)((0, r.createToast)(R.intl.formatToPlainString(R.t.O9C3Nj, { user: null !== (i = P.ZP.getName(n, null, e)) && void 0 !== i ? i : '' }), r.ToastType.SUCCESS));
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(R.intl.string(R.t.epyCur), r.ToastType.FAILURE));
                }
        },
        Q = null,
        W = null != _ && v.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, _) && v.Z.canManageUser(S.Plq.KICK_MEMBERS, e, _) && v.Z.canManageUser(S.Plq.BAN_MEMBERS, e, _),
        z = null != _ && (v.Z.canManageUser(S.Plq.MANAGE_GUILD, e, _) || v.Z.canManageUser(S.Plq.MANAGE_ROLES, e, _));
    if (!A && null != _ && null != V && null != V.joinedAt && (W || z) && _.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)) {
        var H;
        Q = (0, C.yE)(null !== (H = V.flags) && void 0 !== H ? H : 0, O.q.BYPASSES_VERIFICATION)
            ? (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: R.intl.string(R.t.NbhSIy),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(_.id, e.id, (0, C.mB)(null !== (l = V.flags) && void 0 !== l ? l : 0, O.q.BYPASSES_VERIFICATION, !1));
                      }
                  },
                  'verify'
              )
            : (0, t.jsx)(
                  r.MenuItem,
                  {
                      id: 'verify',
                      label: R.intl.string(R.t['6QlTeH']),
                      action: () => {
                          var l;
                          return o.Z.setMemberFlags(_.id, e.id, (0, C.mB)(null !== (l = V.flags) && void 0 !== l ? l : 0, O.q.BYPASSES_VERIFICATION, !0));
                      }
                  },
                  'verify'
              );
    }
    return [
        ...K,
        ...(A || null == _
            ? []
            : [
                  G,
                  Q,
                  w && !N
                      ? q
                          ? (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'removetimeout',
                                    label: R.intl.formatToPlainString(R.t.csKetb, { user: e.username }),
                                    color: 'danger',
                                    action: () => {
                                        (0, s.q)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: T
                                        });
                                    }
                                },
                                'removetimeout'
                            )
                          : (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: 'timeout',
                                    label: R.intl.formatToPlainString(R.t.OhsOy8, { user: e.username }),
                                    color: 'danger',
                                    action: (n) => {
                                        if (n.ctrlKey || n.metaKey) return Y(n, l, e.id);
                                        (0, s.z)({
                                            guildId: l,
                                            userId: e.id,
                                            anaylticsLocations: T
                                        });
                                    }
                                },
                                'timeout'
                            )
                      : null,
                  v.Z.canManageUser(S.Plq.KICK_MEMBERS, e, _) && !e.isClyde()
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'kick',
                                label: R.intl.formatToPlainString(R.t['9l/iTU'], { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: i } = await n.e('5454').then(n.bind(n, 854360));
                                        return (n) =>
                                            (0, t.jsx)(i, {
                                                ...n,
                                                location: j,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'kick'
                        )
                      : null,
                  v.Z.canManageUser(S.Plq.BAN_MEMBERS, e, _)
                      ? (0, t.jsx)(
                            r.MenuItem,
                            {
                                id: 'ban',
                                label: R.intl.formatToPlainString(R.t.WnpUBg, { user: e.username }),
                                color: 'danger',
                                action: () =>
                                    (0, r.openModalLazy)(async () => {
                                        let { default: i } = await n.e('43350').then(n.bind(n, 98746));
                                        return (n) =>
                                            (0, t.jsx)(i, {
                                                ...n,
                                                location: j,
                                                guildId: l,
                                                user: e
                                            });
                                    })
                            },
                            'ban'
                        )
                      : null
              ])
    ];
}
