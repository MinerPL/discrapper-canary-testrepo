n.d(t, {
    B: function () {
        return ea;
    }
}),
    n(789020),
    n(411104);
var r = n(525654),
    i = n.n(r),
    a = n(990547),
    s = n(533800),
    o = n(39612),
    l = n(271579),
    u = n(756647),
    c = n(544891),
    d = n(570140),
    _ = n(479531),
    E = n(34756),
    f = n(595519),
    h = n(839426),
    p = n(895924),
    I = n(625128),
    m = n(972830),
    T = n(305325),
    S = n(281956),
    g = n(931261),
    A = n(15274),
    N = n(924301),
    O = n(82085),
    R = n(264229),
    v = n(652898),
    C = n(895886),
    y = n(143816),
    L = n(703656),
    D = n(922482),
    b = n(131704),
    M = n(314897),
    P = n(592125),
    U = n(984933),
    w = n(271383),
    x = n(430824),
    G = n(607744),
    k = n(341165),
    B = n(496675),
    F = n(914010),
    V = n(594174),
    H = n(626135),
    Z = n(70956),
    Y = n(630388),
    j = n(573261),
    W = n(954824),
    K = n(749210),
    z = n(872810),
    q = n(981631),
    Q = n(176505),
    X = n(70722),
    $ = n(245335),
    J = n(157925);
let ee = 'invite',
    et = null;
function en(e) {
    var t, n, r, i;
    let a = {};
    switch (e.target_type) {
        case $.Iq.STREAM:
            (a.targetType = e.target_type), (a.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id);
            break;
        case $.Iq.EMBEDDED_APPLICATION:
            (a.targetType = e.target_type), (a.targetApplicationId = null === (r = e.target_application) || void 0 === r ? void 0 : r.id);
            break;
        case $.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            a.targetType = e.target_type;
    }
    return (!(null != x.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, b.zi)(e.channel.type) && (a.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (a.guildScheduledEvent = e.guild_scheduled_event), (a.isGuestInvite = (0, Y.yE)(null !== (i = e.flags) && void 0 !== i ? i : 0, s.$.IS_GUEST_INVITE)), a;
}
function er(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        s = x.Z.getGuild(t),
        o = (null == s ? void 0 : s.hasFeature(q.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == s ? void 0 : s.hasFeature(q.oNc.PREVIEW_ENABLED)),
        { targetUserId: l, targetType: u, targetApplicationId: c, isGuestInvite: d } = null != i ? i : {};
    if (!d && o && F.Z.getGuildId() !== t) return;
    let { type: _ } = r,
        E = P.Z.getChannel(r.id),
        I = (function (e, t, n) {
            var r, i;
            if ((null == n ? void 0 : n.targetType) === $.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return Q.oC.ROLE_SUBSCRIPTIONS;
            if ((null == n ? void 0 : n.targetType) == null && !b.tx.has(t.type) && (0, g.s)(e)) return Q.oC.GUILD_HOME;
            let a = P.Z.getChannel(t.id);
            return B.Z.can(q.Plq.VIEW_CHANNEL, a) ? t.id : null !== (i = null === (r = U.ZP.getDefaultChannel(e, !0, q.Plq.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id;
        })(t, r, i),
        A = _ === q.d4z.GUILD_STAGE_VOICE,
        N = q.Z5c.CHANNEL(t, I);
    b.tx.has(_)
        ? (0, m.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          s = () => {
                              if (A) {
                                  (0, D.Cq)(r instanceof b.Sf ? r : (0, b.kt)(r)), (0, L.uL)(N);
                                  return;
                              }
                              n.selectVoiceChannel(I),
                                  u === $.Iq.STREAM &&
                                      null != l &&
                                      z.iV({
                                          streamType: X.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: I
                                      }),
                                  u === $.Iq.EMBEDDED_APPLICATION && null != c && ((0, L.uL)(q.Z5c.CHANNEL(null != t ? t : q.ME, I)), (0, h.Z)(I, c, a, null == i ? void 0 : i.intent, p.bB.CHAT));
                          };
                      !d && (0, S.n)(t, [x.Z, G.Z, V.default, w.ZP]) ? (0, T.hk)(t, s) : s();
                  });
          })
        : (0, f.l5)(E) && u === $.Iq.EMBEDDED_APPLICATION && null != c && ((0, L.uL)(q.Z5c.CHANNEL(null != t ? t : q.ME, I)), (0, h.Z)(I, c, a, null == i ? void 0 : i.intent, p.bB.CHAT)),
        (function (e, t) {
            let { type: n } = e,
                { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
                s = n === q.d4z.GUILD_STAGE_VOICE,
                o = {
                    source: y.Z.INVITE_ACCEPT,
                    navigationReplace: !0
                };
            return null != i && (o.welcomeModalChannelId = i), s && (o.state = J.Df), null != a && (o.guildScheduledEventId = a.id), (e) => (null != r ? r(e, o) : (0, L.uL)(e, o));
        })(
            r,
            i
        )(N);
}
let ei = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        P.Z.addConditionalChangeListener(() => {
            var r;
            let i = P.Z.getChannel(e),
                a = V.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                ((!i.nsfw || !!a.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? (!(function (e) {
                              let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                              if (null != t)
                                  (0, m.h)(() => {
                                      let e = { guildScheduledEventId: t.id };
                                      null != n && (e.welcomeModalChannelId = n), (0, A.P3)(t, e);
                                  });
                          })(t),
                          !1)
                        : (er({
                              guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : q.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n
                          }),
                          !1)))
            );
        });
    },
    ea = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, N.xt)(e) && null != n ? ei(n) : await K.Z.transitionToGuildSync(t);
    };
t.Z = {
    resolveInvite: function e(t, n, r) {
        return d.Z.isDispatching()
            ? Promise.resolve().then(() => e(t, n, r))
            : (d.Z.dispatch({
                  type: 'INVITE_RESOLVE',
                  code: t
              }),
              (0, v.Z)(t, n, r).then((e) => {
                  let { invite: t, code: n, banned: r } = e;
                  return (
                      null != t
                          ? d.Z.dispatch({
                                type: 'INVITE_RESOLVE_SUCCESS',
                                invite: t,
                                code: n
                            })
                          : d.Z.dispatch({
                                type: 'INVITE_RESOLVE_FAILURE',
                                code: n,
                                banned: r
                            }),
                      {
                          invite: t,
                          code: n
                      }
                  );
              }));
    },
    getInviteContext: (e, t) => ({
        location: e,
        location_guild_id: null != t.guild ? t.guild.id : void 0,
        location_channel_id: null != t.channel ? t.channel.id : void 0,
        location_channel_type: null != t.channel ? t.channel.type : void 0
    }),
    async createInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let { body: r } = await c.tn.post({
                url: q.ANM.INSTANT_INVITES(e),
                body: t,
                context: { location: n }
            });
            return (
                d.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_SUCCESS',
                    channelId: e,
                    invite: r
                }),
                r
            );
        } catch (t) {
            throw (
                (d.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_FAILURE',
                    channelId: e
                }),
                new _.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = k.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: Z.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() => d.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => d.Z.wait(() => e(null))), k.Z.getFriendInvitesFetching())) return null != et ? et.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (et = c.tn.get({
            url: q.ANM.FRIEND_INVITES,
            context: { location: e }
        })),
            d.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: t } = await et;
        return (
            (et = null),
            d.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_RESPONSE',
                receivedAt: new Date(),
                invites: t
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        d.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
        c.tn
            .post({
                url: q.ANM.FRIEND_INVITES,
                body: null != e ? e : {},
                context: { location: t }
            })
            .then(
                (e) => {
                    let { body: t } = e;
                    return (
                        d.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_SUCCESS',
                            invite: t
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (d.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_FAILURE',
                            error: e
                        }),
                        e)
                    );
                }
            )
    ),
    revokeFriendInvites: () => (
        d.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
        c.tn
            .del({
                url: q.ANM.FRIEND_INVITES,
                context: { location }
            })
            .then((e) => {
                let { body: t } = e;
                d.Z.dispatch({
                    type: 'FRIEND_INVITE_REVOKE_SUCCESS',
                    invites: t
                });
            })
    ),
    revokeFriendInvite: (e) => c.tn.del({ url: q.ANM.INVITE(e) }),
    clearInviteFromStore(e) {
        d.Z.dispatch({
            type: 'INSTANT_INVITE_CLEAR',
            channelId: e
        });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return j.Z.delete({
            url: q.ANM.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type
                }
            }
        }).then(() => {
            d.Z.dispatch({
                type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                code: t,
                channelId: n.id
            });
        });
    },
    acceptInvite(e) {
        var t, r, i;
        let { inviteKey: a, context: s, callback: o, skipOnboarding: l } = e,
            u = (0, R.fU)(a),
            _ = u.baseCode,
            f = M.default.getSessionId();
        let h =
                ((r = s),
                (i = u),
                {
                    ...r,
                    invite_guild_scheduled_event_id: i.guildScheduledEventId
                }),
            p = V.default.getCurrentUser();
        return null !== (t = null == p ? void 0 : p.hasFlag(q.xW$.QUARANTINED)) && void 0 !== t && t
            ? ((0, C.default)(), new Promise((e, t) => t(Error())))
            : (d.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: _
              }),
              c.tn
                  .post({
                      url: q.ANM.INVITE(_),
                      context: h,
                      oldFormErrors: !0,
                      body: { session_id: f }
                  })
                  .then(
                      async (e) => {
                          var t, r;
                          d.Z.dispatch({
                              type: 'INVITE_ACCEPT_SUCCESS',
                              invite: e.body,
                              code: _
                          });
                          let i = N.ZP.getGuildScheduledEvent(u.guildScheduledEventId),
                              a = {
                                  ...e.body,
                                  guild_scheduled_event: i
                              },
                              s = null !== (r = null == a ? void 0 : a.guild_id) && void 0 !== r ? r : null == a ? void 0 : null === (t = a.guild) || void 0 === t ? void 0 : t.id;
                          if (!l && null != s && a.new_member) {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                              await e({ guildId: s });
                          }
                          return null == o || o(a), e.body;
                      },
                      (e) => {
                          var t, n;
                          throw (
                              (d.Z.dispatch({
                                  type: 'INVITE_ACCEPT_FAILURE',
                                  code: _,
                                  error: {
                                      message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                      code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                                  }
                              }),
                              new E.Z(e))
                          );
                      }
                  ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: a } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: a,
            callback: (e) => {
                if (null != e.channel) {
                    let t = en(e);
                    ei(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            }
        });
    },
    transitionToInvite(e, t) {
        var n, r;
        let { channel: i, guild: a } = e;
        if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(q.oNc.HUB))) {
            O.Z.onOpenHubInvite(e);
            return;
        }
        if (null != a && (null === (r = a.features) || void 0 === r ? void 0 : r.includes(q.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(q.oNc.PREVIEW_ENABLED)) {
            (0, T.hk)(a.id);
            return;
        }
        if (null == i) return;
        let s = en(e);
        null != t && (s.transitionTo = t),
            er({
                guildId: null != a ? a.id : q.ME,
                channel: i,
                options: s
            });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = en(e);
            this.transitionToInviteChannelSync(e.channel.id, {
                ...r,
                intent: n,
                transitionTo: t
            });
        }
    },
    openNativeAppModal(e) {
        I.Z.openNativeAppModal(e, q.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, a) {
        var s, c;
        let _;
        let E = null != e ? (0, R.fU)(e) : null,
            f = null == E ? void 0 : E.baseCode;
        if (
            (d.Z.dispatch({
                type: 'INVITE_APP_OPENING',
                code: e
            }),
            null != i().ua && i().ua.toLowerCase().indexOf('googlebot') > -1)
        ) {
            d.Z.dispatch({
                type: 'INVITE_APP_NOT_OPENED',
                code: e
            });
            return;
        }
        if ((null === (s = i().os) || void 0 === s ? void 0 : s.family) === 'Android' || (null === (c = i().os) || void 0 === c ? void 0 : c.family) === 'iOS') {
            let e = null != f ? (0, o.z0)(f) : (0, o.Gk)(),
                t = (0, l.WS)();
            (_ = (0, l.ZP)(e, {
                utmSource: 2 === a ? 'friend_invite' : ee,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == E ? void 0 : E.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(f)
            })),
                H.default.track(q.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.K)(n),
                    attempt_id: t,
                    source: ee,
                    invite_code: f
                });
        } else '#' === (_ = null != t ? q.Z5c.INVITE_PROXY(t) : '')[0] && (_ = _.slice(1)), (_ = 'discord://'.concat(_));
        W.Z.launch(_, (t) => {
            d.Z.dispatch(
                t
                    ? {
                          type: 'INVITE_APP_OPENED',
                          code: e
                      }
                    : {
                          type: 'INVITE_APP_NOT_OPENED',
                          code: e
                      }
            );
        });
    },
    transitionToInviteChannelSync: ei
};
