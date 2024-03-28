"use strict";
n.r(t), n("411104");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("239091"),
  o = n("904245"),
  u = n("287734"),
  d = n("872810"),
  c = n("911969"),
  f = n("376484"),
  E = n("362604"),
  _ = n("710845"),
  T = n("825829"),
  m = n("623624"),
  I = n("533694"),
  p = n("182180"),
  h = n("924301"),
  N = n("225890"),
  S = n("434404"),
  C = n("504733"),
  A = n("563959"),
  g = n("703656"),
  M = n("471253"),
  R = n("565799"),
  O = n("590415"),
  v = n("911560"),
  L = n("488131"),
  x = n("814820"),
  D = n("314897"),
  P = n("523746"),
  y = n("592125"),
  U = n("430824"),
  b = n("496675"),
  j = n("158776"),
  G = n("944486"),
  B = n("594174"),
  F = n("979651"),
  k = n("372662"),
  w = n("113039"),
  H = n("755090"),
  V = n("136036"),
  Y = n("676751"),
  K = n("662147"),
  W = n("900316"),
  z = n("493829"),
  Q = n("65667"),
  q = n("36664"),
  J = n("645092"),
  X = n("464139"),
  Z = n("497481"),
  $ = n("705116"),
  ee = n("808641"),
  et = n("318175"),
  en = n("75601"),
  es = n("595162"),
  ea = n("407818"),
  el = n("24971"),
  ei = n("314061"),
  er = n("501217"),
  eo = n("908648"),
  eu = n("774200"),
  ed = n("690249"),
  ec = n("658975"),
  ef = n("147507"),
  eE = n("585483"),
  e_ = n("5192"),
  eT = n("960048"),
  em = n("709054"),
  eI = n("937889"),
  ep = n("942951"),
  eh = n("981631"),
  eN = n("70722"),
  eS = n("689938"),
  eC = n("611818");

function eA(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: r
  } = t, {
    guild_id: o
  } = n, u = t.getChannelId(), d = (0, l.useStateFromStores)([U.default], () => U.default.getGuild(o), [o]), c = a.useCallback(() => {
    null != d && (0, m.openGuildBoostingMarketingModal)({
      guildId: d.id,
      location: {
        section: eh.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: eh.AnalyticsObjects.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [d]), f = (0, ep.useUsernameHook)({
    user: r,
    channelId: u,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: !0
  });
  return (0, s.jsx)(ef.default, {
    message: t,
    compact: i,
    guild: d,
    usernameHook: f,
    onClickMessage: c
  })
}

function eg(e) {
  let {
    message: t,
    compact: n,
    channel: a
  } = e, l = (0, ep.useUsernameHook)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(Q.default, {
    message: t,
    compact: n,
    usernameHook: l
  })
}
let eM = Object.freeze({
  [eh.MessageTypes.DEFAULT]: void 0,
  [eh.MessageTypes.REPLY]: void 0,
  [eh.MessageTypes.CHAT_INPUT_COMMAND]: void 0,
  [eh.MessageTypes.CONTEXT_MENU_COMMAND]: void 0,
  [eh.MessageTypes.RECIPIENT_ADD]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = e_.default.getName(null, r, o), d = (0, ep.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), c = (0, ep.useUsernameHook)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(eo.default, {
      message: t,
      channel: n,
      compact: a,
      targetUser: o,
      actorUsernameHook: d,
      targetUsernameHook: c
    }) : (0, s.jsx)(ee.default, {
      message: t,
      compact: a,
      otherUsername: u,
      usernameHook: d,
      otherUsernameHook: c
    })
  },
  [eh.MessageTypes.RECIPIENT_REMOVE]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = (0, ep.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), d = (0, ep.useUsernameHook)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(eu.default, {
      message: t,
      channel: n,
      compact: a,
      targetUser: o,
      actorUsernameHook: u,
      targetUsernameHook: d
    }) : null != o && o.id !== i.id ? (0, s.jsx)(et.default, {
      message: t,
      channel: n,
      compact: a,
      usernameHook: u,
      otherUser: o,
      otherUsernameHook: d
    }) : (0, s.jsx)(et.default, {
      message: t,
      channel: n,
      usernameHook: u
    })
  },
  [eh.MessageTypes.CALL]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      id: r,
      author: o
    } = t, d = D.default.getId(), c = t.getChannelId(), f = (0, l.useStateFromStores)([P.default], () => P.default.isCallActive(c, r), [c, r]), E = (0, l.useStateFromStores)([F.default], () => F.default.getVoiceState(eh.ME, d)), _ = !f && null != t.call && !t.call.participants.includes(d), T = f && (null == E || E.channelId !== c), m = a.useCallback(() => u.default.selectVoiceChannel(c), [c]), I = (0, ep.useUsernameHook)({
      user: o,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(V.default, {
      compact: n,
      message: t,
      missed: _,
      joinable: T,
      usernameHook: I,
      onClickJoinCall: m
    })
  },
  [eh.MessageTypes.CHANNEL_NAME_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, ep.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(W.default, {
      compact: n,
      message: t,
      usernameHook: r,
      isForumPost: a.isForumPost()
    })
  },
  [eh.MessageTypes.CHANNEL_ICON_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, ep.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(K.default, {
      compact: n,
      message: t,
      usernameHook: r
    })
  },
  [eh.MessageTypes.CHANNEL_PINNED_MESSAGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = a.useCallback(() => {
      if (G.default.getChannelId() !== r) {
        let e = y.default.getChannel(r);
        null != e && (0, g.transitionToGuild)(e.guild_id, e.id)
      }
      setTimeout(() => eE.ComponentDispatch.dispatch(eh.ComponentActions.TOGGLE_CHANNEL_PINS), 0)
    }, [r]), u = (0, ep.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(z.default, {
      message: t,
      compact: n,
      usernameHook: u,
      onClickPins: __OVERLAY__ ? null : o
    })
  },
  [eh.MessageTypes.USER_JOIN]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, ep.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ec.default, {
        message: t,
        compact: n,
        usernameHook: r
      }), (0, s.jsx)(x.WelcomeCTAContainer, {
        channel: a,
        message: t
      })]
    })
  },
  [eh.MessageTypes.GUILD_BOOST]: eA,
  [eh.MessageTypes.GUILD_BOOST_TIER_1]: eA,
  [eh.MessageTypes.GUILD_BOOST_TIER_2]: eA,
  [eh.MessageTypes.GUILD_BOOST_TIER_3]: eA,
  [eh.MessageTypes.CHANNEL_FOLLOW_ADD]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, ep.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Y.default, {
      message: t,
      compact: n,
      usernameHook: r
    })
  },
  [eh.MessageTypes.GUILD_STREAM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      author: r,
      author: {
        id: o
      },
      messageReference: u
    } = t, c = t.getChannelId(), f = (0, l.useStateFromStores)([j.default], () => j.default.findActivity(o, e => e.type === eh.ActivityTypes.PLAYING), [o]), E = (0, l.useStateFromStores)([y.default], () => null != u ? y.default.getChannel(u.channel_id) : null, [u]), _ = null == u ? void 0 : u.guild_id, T = (0, ep.useUsernameHook)({
      user: r,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    }), m = a.useCallback(() => {
      null != E && null != _ && (0, d.watchStreamAndTransitionToStream)({
        streamType: eN.StreamTypes.GUILD,
        ownerId: o,
        channelId: E.id,
        guildId: _
      })
    }, [o, E, _]);
    return null != u && null != E && null != u.guild_id ? (0, s.jsx)(Z.default, {
      message: t,
      compact: n,
      channel: E,
      playingActivity: f,
      onJoinStream: m,
      usernameHook: T
    }) : null
  },
  [eh.MessageTypes.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
    let {
      message: t,
      compact: n
    } = e, a = t.getChannelId(), i = (0, l.useStateFromStores)([y.default], () => y.default.getChannel(a), [a]), r = null != i ? i.getGuildId() : null;
    return (0, s.jsx)(q.UIKitGuildDiscoveryDisqualified, {
      message: t,
      compact: n,
      onClick: () => {
        null != r && S.default.open(r, eh.GuildSettingsSections.DISCOVERY)
      }
    })
  },
  [eh.MessageTypes.GUILD_DISCOVERY_REQUALIFIED]: q.UIKitGuildDiscoveryRequalified,
  [eh.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: q.UIKitGuildDiscoveryGracePeriodInitialWarning,
  [eh.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: q.UIKitGuildDiscoveryGracePeriodFinalWarning,
  [eh.MessageTypes.THREAD_CREATED]: function(e) {
    let {
      message: t,
      channel: l,
      compact: o
    } = e, u = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: t.channel_id,
      guildId: l.guild_id,
      messageId: t.id
    }), d = a.useCallback(async e => {
      var n;
      let s = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
      if (null != s) {
        await v.default.loadThread(s);
        let t = y.default.getChannel(s);
        null != t && (0, L.openThreadSidebarForViewing)(t, e.shiftKey)
      }
    }, [t]), c = a.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("91315"), n.e("36970")]).then(n.bind(n, "223901"));
        return t => (0, s.jsx)(e, {
          channel: l,
          ...t
        })
      })
    }, [l]), f = a.useCallback(e => {
      var a;
      let l = y.default.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
      null != l && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("39285"), n.e("53466"), n.e("40157")]).then(n.bind(n, "422200"));
        return t => (0, s.jsx)(e, {
          ...t,
          channel: l
        })
      })
    }, [t]);
    return (0, s.jsx)(er.default, {
      message: t,
      compact: o,
      usernameHook: u,
      onClickThread: d,
      onClickViewThreads: c,
      onContextMenuThread: f
    })
  },
  [eh.MessageTypes.THREAD_STARTER_MESSAGE]: ed.default,
  [eh.MessageTypes.GUILD_INVITE_REMINDER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, i = (0, l.useStateFromStores)([B.default], () => B.default.getCurrentUser()), r = (0, l.useStateFromStores)([U.default], () => {
      var e, t;
      return null !== (t = null === (e = U.default.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(i)) && void 0 !== t && t
    });
    return (0, s.jsx)($.default, {
      message: t,
      compact: a,
      isOwner: r,
      channel: n
    })
  },
  [eh.MessageTypes.AUTO_MODERATION_ACTION]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e;
    return (0, T.isAutomodMessageRecord)(t) ? (0, s.jsx)(H.default, {
      message: t,
      compact: n,
      channel: a
    }) : null
  },
  [eh.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eg,
  [eh.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eg,
  [eh.MessageTypes.GUILD_INCIDENT_REPORT_RAID]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, l = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: a.id,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(X.default, {
      message: t,
      compact: n,
      channel: a,
      usernameHook: l
    })
  },
  [eh.MessageTypes.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, l = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: a.id,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(J.default, {
      message: t,
      compact: n,
      channel: a,
      usernameHook: l
    })
  },
  [eh.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE]: p.default,
  [eh.MessageTypes.PURCHASE_NOTIFICATION]: function(e) {
    var t;
    let {
      message: n,
      channel: a,
      compact: l
    } = e;
    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === c.PurchaseNotificationType.GUILD_PRODUCT ? (0, s.jsx)(I.default, {
      message: n,
      channel: a,
      compact: l
    }) : null
  },
  [eh.MessageTypes.INTERACTION_PREMIUM_UPSELL]: void 0,
  [eh.MessageTypes.STAGE_START]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, i = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    }), r = (0, l.useStateFromStores)([h.default], () => h.default.getActiveEventByChannel(n.id), [n.id]);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(el.default, {
        message: t,
        compact: a,
        usernameHook: i
      }), null != r && r.name === t.content ? (0, s.jsx)(N.default, {
        code: "".concat(n.guild_id, "-").concat(r.id)
      }) : null]
    })
  },
  [eh.MessageTypes.STAGE_END]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(en.default, {
      message: t,
      compact: a,
      usernameHook: l
    })
  },
  [eh.MessageTypes.STAGE_SPEAKER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(ea.default, {
      message: t,
      compact: a,
      usernameHook: l
    })
  },
  [eh.MessageTypes.STAGE_RAISE_HAND]: function(e) {
    var t, n;
    let {
      message: a,
      channel: r,
      compact: u
    } = e, d = (0, ep.useUsernameHook)({
      user: a.author,
      channelId: r.id,
      guildId: r.guild_id,
      messageId: a.id
    }), c = (0, l.useStateFromStores)([b.default], () => b.default.can(eh.Permissions.MUTE_MEMBERS, r)), f = (0, l.useStateFromStores)([R.default], () => R.default.getParticipant(r.id, a.author.id)), E = new Date(em.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == f ? void 0 : null === (t = f.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), _ = c && (null == f ? void 0 : f.rtsState) === O.RequestToSpeakStates.REQUESTED_TO_SPEAK && E;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(es.default, {
        message: a,
        compact: u,
        usernameHook: d
      }), _ ? (0, s.jsxs)(i.Button, {
        wrapperClassName: eC.inviteToSpeakButtonWrapper,
        innerClassName: eC.inviteToSpeakButtonInner,
        look: i.Button.Looks.FILLED,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          (0, M.setUserSuppress)(r, a.author.id, !1), o.default.deleteMessage(r.id, a.id, !0)
        },
        children: [(0, s.jsx)(k.default, {
          height: 20,
          width: 20
        }), eS.default.Messages.REQUEST_TO_SPEAK_ACCEPT]
      }) : null]
    })
  },
  [eh.MessageTypes.STAGE_TOPIC]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, ep.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(ei.default, {
      message: t,
      compact: a,
      usernameHook: l
    })
  },
  [eh.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: C.default,
  [eh.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED]: A.PrivateChannelIntegrationAddedSystemMessage,
  [eh.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: A.PrivateChannelIntegrationRemovedSystemMessage,
  [eh.MessageTypes.PREMIUM_REFERRAL]: void 0,
  [eh.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e;
    return (0, s.jsx)(E.default, {
      message: t,
      channel: n,
      compact: a
    })
  },
  [eh.MessageTypes.CUSTOM_GIFT]: void 0,
  [eh.MessageTypes.GUILD_GAMING_STATS_PROMPT]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e;
    return (0, s.jsx)(f.default, {
      message: t,
      channel: n,
      compact: a
    })
  },
  [eh.MessageTypes.VOICE_HANGOUT_INVITE]: void 0
});
t.default = a.memo(function(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    type: l
  } = t, i = eM[l];
  if (null == i) {
    var r;
    return r = Error("unknown message type ".concat(t.type)), eT.default.captureException(r), new _.default("SystemMessage").error("", r), null
  }
  return (0, s.jsx)(w.default, {
    message: t,
    content: (0, eI.default)(t).content,
    children: (0, s.jsx)(i, {
      message: t,
      channel: n,
      compact: a
    })
  })
})