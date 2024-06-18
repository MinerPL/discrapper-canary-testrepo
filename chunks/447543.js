"use strict";
n.d(t, {
  B: function() {
    return et
  }
}), n(411104);
var i = n(525654),
  r = n.n(i),
  s = n(990547),
  o = n(39612),
  a = n(271579),
  l = n(756647),
  u = n(544891),
  _ = n(570140),
  d = n(479531),
  c = n(34756),
  E = n(867176),
  I = n(839426),
  T = n(625128),
  h = n(972830),
  S = n(305325),
  f = n(281956),
  N = n(931261),
  A = n(15274),
  m = n(924301),
  O = n(82085),
  R = n(264229),
  C = n(652898),
  p = n(895886),
  g = n(143816),
  L = n(703656),
  v = n(922482),
  D = n(131704),
  M = n(314897),
  P = n(592125),
  y = n(984933),
  U = n(271383),
  b = n(430824),
  G = n(607744),
  w = n(341165),
  k = n(496675),
  B = n(594174),
  x = n(626135),
  V = n(70956),
  Z = n(573261),
  H = n(954824),
  F = n(749210),
  Y = n(872810),
  j = n(981631),
  W = n(176505),
  K = n(70722),
  z = n(245335),
  q = n(157925);
let X = "invite",
  Q = null;

function J(e) {
  var t, n, i;
  let r = {};
  switch (e.target_type) {
    case z.Iq.STREAM:
      r.targetType = e.target_type, r.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
      break;
    case z.Iq.EMBEDDED_APPLICATION:
      r.targetType = e.target_type, r.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
      break;
    case z.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
      r.targetType = e.target_type
  }
  return (!(null != b.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, D.zi)(e.channel.type) && (r.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (r.guildScheduledEvent = e.guild_scheduled_event), r
}

function $(e) {
  let {
    guildId: t,
    channel: i,
    options: r,
    analyticsLocations: s = []
  } = e, {
    type: o
  } = i, a = P.Z.getChannel(i.id), l = function(e, t, n) {
    var i, r;
    if ((null == n ? void 0 : n.targetType) === z.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return W.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !D.tx.has(t.type) && (0, N.s)(e)) return W.oC.GUILD_HOME;
    let s = P.Z.getChannel(t.id);
    return k.Z.can(j.Plq.VIEW_CHANNEL, s) ? t.id : null !== (r = null === (i = y.ZP.getDefaultChannel(e, !0, j.Plq.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.id
  }(t, i, r), {
    targetUserId: u,
    targetType: _,
    targetApplicationId: d
  } = null != r ? r : {}, c = o === j.d4z.GUILD_STAGE_VOICE, T = j.Z5c.CHANNEL(t, l);
  D.tx.has(o) ? (0, h.h)(() => {
    Promise.resolve().then(n.bind(n, 287734)).then(e => {
      let {
        default: n
      } = e, o = () => {
        if (c) {
          (0, v.Cq)(i instanceof D.Sf ? i : (0, D.kt)(i)), (0, L.uL)(T);
          return
        }
        n.selectVoiceChannel(l), _ === z.Iq.STREAM && null != u && Y.iV({
          streamType: K.lo.GUILD,
          ownerId: u,
          guildId: t,
          channelId: l
        }), _ === z.Iq.EMBEDDED_APPLICATION && null != d && ((0, L.uL)(j.Z5c.CHANNEL(null != t ? t : j.ME, l)), (0, I.Z)(l, d, s, null == r ? void 0 : r.intent))
      };
      (0, f.n)(t, [b.Z, G.Z, B.default, U.ZP]) ? (0, S.hk)(t, o) : o()
    })
  }) : (0, E.l5)(a) && _ === z.Iq.EMBEDDED_APPLICATION && null != d && ((0, L.uL)(j.Z5c.CHANNEL(null != t ? t : j.ME, l)), (0, I.Z)(l, d, s, null == r ? void 0 : r.intent)), (function(e, t) {
    let {
      type: n
    } = e, {
      transitionTo: i,
      welcomeModalChannelId: r,
      guildScheduledEvent: s
    } = null != t ? t : {}, o = n === j.d4z.GUILD_STAGE_VOICE, a = {
      navigationReplace: !0
    };
    return null != r && (a.welcomeModalChannelId = r), o && (a.state = q.Df), null != s && (a.guildScheduledEventId = s.id), e => null != i ? i(e, a, g.ZP.INVITE_ACCEPT) : (0, L.uL)(e, a, g.ZP.INVITE_ACCEPT)
  })(i, r)(T)
}
let ee = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    P.Z.addConditionalChangeListener(() => {
      var i;
      let r = P.Z.getChannel(e),
        s = B.default.getCurrentUser();
      return null == r || null == s || (!r.nsfw || !!s.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
        let {
          guildScheduledEvent: t,
          welcomeModalChannelId: n
        } = e;
        if (null != t)(0, h.h)(() => {
          let e = {
            guildScheduledEventId: t.id
          };
          null != n && (e.welcomeModalChannelId = n), (0, A.P3)(t, e)
        })
      }(t), !1) : ($({
        guildId: null !== (i = r.getGuildId()) && void 0 !== i ? i : j.ME,
        channel: r,
        options: t,
        analyticsLocations: n
      }), !1))
    })
  },
  et = async e => {
    let {
      guild_id: t,
      channel_id: n
    } = e;
    (0, m.xt)(e) && null != n ? ee(n) : await F.Z.transitionToGuildSync(t)
  };
t.Z = {
  resolveInvite: function e(t, n, i) {
    return _.Z.isDispatching() ? Promise.resolve().then(() => e(t, n, i)) : (_.Z.dispatch({
      type: "INVITE_RESOLVE",
      code: t
    }), (0, C.Z)(t, n, i).then(e => {
      let {
        invite: t,
        code: n,
        banned: i
      } = e;
      return null != t ? _.Z.dispatch({
        type: "INVITE_RESOLVE_SUCCESS",
        invite: t,
        code: n
      }) : _.Z.dispatch({
        type: "INVITE_RESOLVE_FAILURE",
        code: n,
        banned: i
      }), {
        invite: t,
        code: n
      }
    }))
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
      let {
        body: i
      } = await u.tn.post({
        url: j.ANM.INSTANT_INVITES(e),
        body: t,
        context: {
          location: n
        }
      });
      return _.Z.dispatch({
        type: "INSTANT_INVITE_CREATE_SUCCESS",
        channelId: e,
        invite: i
      }), i
    } catch (t) {
      throw _.Z.dispatch({
        type: "INSTANT_INVITE_CREATE_FAILURE",
        channelId: e
      }), new d.Z(t)
    }
  },
  async mobileCreateInvite(e, t) {
    let n = w.Z.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let i = {
        max_age: V.Z.Seconds.DAY
      },
      r = await this.createInvite(e.id, i, t).catch(() => _.Z.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == r ? void 0 : r.code
  },
  async getAllFriendInvites(e) {
    if (await new Promise(e => _.Z.wait(() => e(null))), w.Z.getFriendInvitesFetching()) return null != Q ? Q.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    Q = u.tn.get({
      url: j.ANM.FRIEND_INVITES,
      context: {
        location: e
      }
    }), _.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_REQUEST",
      requestedAt: new Date
    });
    let {
      body: t
    } = await Q;
    return Q = null, _.Z.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: t
    }), t
  },
  createFriendInvite: (e, t) => (_.Z.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), u.tn.post({
    url: j.ANM.FRIEND_INVITES,
    body: null != e ? e : {},
    context: {
      location: t
    }
  }).then(e => {
    let {
      body: t
    } = e;
    return _.Z.dispatch({
      type: "FRIEND_INVITE_CREATE_SUCCESS",
      invite: t
    }), t
  }, e => {
    throw _.Z.dispatch({
      type: "FRIEND_INVITE_CREATE_FAILURE",
      error: e
    }), e
  })),
  revokeFriendInvites: () => (_.Z.dispatch({
    type: "FRIEND_INVITE_REVOKE_REQUEST"
  }), u.tn.del({
    url: j.ANM.FRIEND_INVITES,
    context: {
      location
    }
  }).then(e => {
    let {
      body: t
    } = e;
    _.Z.dispatch({
      type: "FRIEND_INVITE_REVOKE_SUCCESS",
      invites: t
    })
  })),
  revokeFriendInvite: e => u.tn.del({
    url: j.ANM.INVITE(e)
  }),
  clearInviteFromStore(e) {
    _.Z.dispatch({
      type: "INSTANT_INVITE_CLEAR",
      channelId: e
    })
  },
  revokeInvite(e) {
    let {
      code: t,
      channel: n
    } = e;
    return Z.Z.delete({
      url: j.ANM.INVITE(t),
      oldFormErrors: !0,
      trackedActionData: {
        event: s.NetworkActionNames.INVITE_REVOKE,
        properties: {
          uses: e.uses,
          max_uses: e.maxUses,
          max_age: e.maxAge,
          invite_type: e.type
        }
      }
    }).then(() => {
      _.Z.dispatch({
        type: "INSTANT_INVITE_REVOKE_SUCCESS",
        code: t,
        channelId: n.id
      })
    })
  },
  acceptInvite(e) {
    var t, i, r;
    let {
      inviteKey: s,
      context: o,
      callback: a,
      skipOnboarding: l
    } = e, d = (0, R.fU)(s), E = d.baseCode, I = M.default.getSessionId();
    let T = (i = o, r = d, {
        ...i,
        invite_guild_scheduled_event_id: r.guildScheduledEventId
      }),
      h = B.default.getCurrentUser();
    return null !== (t = null == h ? void 0 : h.hasFlag(j.xW$.QUARANTINED)) && void 0 !== t && t ? ((0, p.default)(), new Promise((e, t) => t(Error()))) : (_.Z.dispatch({
      type: "INVITE_ACCEPT",
      code: E
    }), u.tn.post({
      url: j.ANM.INVITE(E),
      context: T,
      oldFormErrors: !0,
      body: {
        session_id: I
      }
    }).then(async e => {
      var t, i;
      _.Z.dispatch({
        type: "INVITE_ACCEPT_SUCCESS",
        invite: e.body,
        code: E
      });
      let r = m.ZP.getGuildScheduledEvent(d.guildScheduledEventId),
        s = {
          ...e.body,
          guild_scheduled_event: r
        },
        o = null !== (i = null == s ? void 0 : s.guild_id) && void 0 !== i ? i : null == s ? void 0 : null === (t = s.guild) || void 0 === t ? void 0 : t.id;
      if (!l && null != o && s.new_member) {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 17181));
        await e({
          guildId: o
        })
      }
      return null == a || a(s), e.body
    }, e => {
      var t, n;
      throw _.Z.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: E,
        error: {
          message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
          code: null === (n = e.body) || void 0 === n ? void 0 : n.code
        }
      }), new c.Z(e)
    }))
  },
  acceptInviteAndTransitionToInviteChannel(e) {
    let {
      inviteKey: t,
      context: n,
      analyticsLocations: i,
      callback: r,
      skipOnboarding: s
    } = e;
    return this.acceptInvite({
      inviteKey: t,
      context: n,
      skipOnboarding: s,
      callback: e => {
        if (null != e.channel) {
          let t = J(e);
          ee(e.channel.id, t, null != i ? i : [])
        }
        null != r && r(e)
      }
    })
  },
  transitionToInvite(e, t) {
    var n, i, r;
    let {
      channel: s,
      guild: o
    } = e;
    if (null != o && (null === (n = o.features) || void 0 === n ? void 0 : n.includes(j.oNc.HUB))) {
      O.Z.onOpenHubInvite(e);
      return
    }
    if (null != o && (null === (i = o.features) || void 0 === i ? void 0 : i.includes(j.oNc.COMMUNITY)) && (null === (r = o.features) || void 0 === r ? void 0 : r.includes(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !o.features.includes(j.oNc.PREVIEW_ENABLED)) {
      (0, L.uL)(j.Z5c.GUILD_MEMBER_VERIFICATION(o.id, e.code));
      return
    }
    if (null == s) return;
    let a = J(e);
    null != t && (a.transitionTo = t), $({
      guildId: null != o ? o.id : j.ME,
      channel: s,
      options: a
    })
  },
  transitionToInviteSync(e, t, n) {
    if (null != e.channel) {
      let i = J(e);
      this.transitionToInviteChannelSync(e.channel.id, {
        ...i,
        intent: n,
        transitionTo: t
      })
    }
  },
  openNativeAppModal(e) {
    T.Z.openNativeAppModal(e, j.Etm.INVITE_BROWSER)
  },
  openApp(e, t, n, i, s) {
    var u, d;
    let c;
    let E = null != e ? (0, R.fU)(e) : null,
      I = null == E ? void 0 : E.baseCode;
    if (_.Z.dispatch({
        type: "INVITE_APP_OPENING",
        code: e
      }), null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1) {
      _.Z.dispatch({
        type: "INVITE_APP_NOT_OPENED",
        code: e
      });
      return
    }
    if ((null === (u = r().os) || void 0 === u ? void 0 : u.family) === "Android" || (null === (d = r().os) || void 0 === d ? void 0 : d.family) === "iOS") {
      let e = null != I ? (0, o.z0)(I) : (0, o.Gk)(),
        t = (0, a.WS)();
      c = (0, a.ZP)(e, {
        utmSource: 2 === s ? "friend_invite" : X,
        fingerprint: n,
        username: i,
        attemptId: t,
        event: null == E ? void 0 : E.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(I)
      }), x.default.track(j.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, l.K)(n),
        attempt_id: t,
        source: X,
        invite_code: I
      })
    } else "#" === (c = null != t ? j.Z5c.INVITE_PROXY(t) : "")[0] && (c = c.slice(1)), c = "discord://".concat(c);
    H.Z.launch(c, t => {
      _.Z.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: ee
}