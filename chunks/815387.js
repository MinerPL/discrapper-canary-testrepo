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
  m = n("825829"),
  T = n("623624"),
  I = n("533694"),
  p = n("182180"),
  h = n("924301"),
  N = n("225890"),
  S = n("434404"),
  C = n("507435"),
  A = n("504733"),
  g = n("563959"),
  M = n("703656"),
  R = n("471253"),
  v = n("565799"),
  O = n("590415"),
  x = n("911560"),
  L = n("488131"),
  D = n("814820"),
  P = n("314897"),
  y = n("523746"),
  U = n("592125"),
  j = n("430824"),
  b = n("496675"),
  B = n("158776"),
  G = n("944486"),
  F = n("594174"),
  k = n("979651"),
  w = n("372662"),
  H = n("113039"),
  V = n("755090"),
  Y = n("136036"),
  K = n("676751"),
  W = n("662147"),
  z = n("900316"),
  Q = n("493829"),
  q = n("65667"),
  X = n("36664"),
  Z = n("645092"),
  J = n("464139"),
  $ = n("497481"),
  ee = n("705116"),
  et = n("808641"),
  en = n("318175"),
  es = n("75601"),
  ea = n("595162"),
  el = n("407818"),
  ei = n("24971"),
  er = n("314061"),
  eo = n("501217"),
  eu = n("908648"),
  ed = n("774200"),
  ec = n("690249"),
  ef = n("658975"),
  eE = n("147507"),
  e_ = n("585483"),
  em = n("5192"),
  eT = n("960048"),
  eI = n("709054"),
  ep = n("937889"),
  eh = n("942951"),
  eN = n("981631"),
  eS = n("70722"),
  eC = n("689938"),
  eA = n("846423");

function eg(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: r
  } = t, {
    guild_id: o
  } = n, u = t.getChannelId(), d = (0, l.useStateFromStores)([j.default], () => j.default.getGuild(o), [o]), c = a.useCallback(() => {
    null != d && (0, T.openGuildBoostingMarketingModal)({
      guildId: d.id,
      location: {
        section: eN.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: eN.AnalyticsObjects.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [d]), f = (0, eh.useUsernameHook)({
    user: r,
    channelId: u,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: !0
  });
  return (0, s.jsx)(eE.default, {
    message: t,
    compact: i,
    guild: d,
    usernameHook: f,
    onClickMessage: c
  })
}

function eM(e) {
  let {
    message: t,
    compact: n,
    channel: a
  } = e, l = (0, eh.useUsernameHook)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(q.default, {
    message: t,
    compact: n,
    usernameHook: l
  })
}
let eR = Object.freeze({
  [eN.MessageTypes.DEFAULT]: void 0,
  [eN.MessageTypes.REPLY]: void 0,
  [eN.MessageTypes.CHAT_INPUT_COMMAND]: void 0,
  [eN.MessageTypes.CONTEXT_MENU_COMMAND]: void 0,
  [eN.MessageTypes.RECIPIENT_ADD]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([F.default], () => F.default.getUser(t.mentions[0]), [t]), u = em.default.getName(null, r, o), d = (0, eh.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), c = (0, eh.useUsernameHook)({
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
      actorUsernameHook: d,
      targetUsernameHook: c
    }) : (0, s.jsx)(et.default, {
      message: t,
      compact: a,
      otherUsername: u,
      usernameHook: d,
      otherUsernameHook: c
    })
  },
  [eN.MessageTypes.RECIPIENT_REMOVE]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([F.default], () => F.default.getUser(t.mentions[0]), [t]), u = (0, eh.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), d = (0, eh.useUsernameHook)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(ed.default, {
      message: t,
      channel: n,
      compact: a,
      targetUser: o,
      actorUsernameHook: u,
      targetUsernameHook: d
    }) : null != o && o.id !== i.id ? (0, s.jsx)(en.default, {
      message: t,
      channel: n,
      compact: a,
      usernameHook: u,
      otherUser: o,
      otherUsernameHook: d
    }) : (0, s.jsx)(en.default, {
      message: t,
      channel: n,
      usernameHook: u
    })
  },
  [eN.MessageTypes.CALL]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      id: r,
      author: o
    } = t, d = P.default.getId(), c = t.getChannelId(), f = (0, l.useStateFromStores)([y.default], () => y.default.isCallActive(c, r), [c, r]), E = (0, l.useStateFromStores)([k.default], () => k.default.getVoiceState(eN.ME, d)), _ = !f && null != t.call && !t.call.participants.includes(d), m = f && (null == E || E.channelId !== c), T = a.useCallback(() => u.default.selectVoiceChannel(c), [c]), I = (0, eh.useUsernameHook)({
      user: o,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Y.default, {
      compact: n,
      message: t,
      missed: _,
      joinable: m,
      usernameHook: I,
      onClickJoinCall: T
    })
  },
  [eN.MessageTypes.CHANNEL_NAME_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eh.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(z.default, {
      compact: n,
      message: t,
      usernameHook: r,
      isForumPost: a.isForumPost()
    })
  },
  [eN.MessageTypes.CHANNEL_ICON_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eh.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(W.default, {
      compact: n,
      message: t,
      usernameHook: r
    })
  },
  [eN.MessageTypes.CHANNEL_PINNED_MESSAGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = a.useCallback(() => {
      if (G.default.getChannelId() !== r) {
        let e = U.default.getChannel(r);
        null != e && (0, M.transitionToGuild)(e.guild_id, e.id)
      }
      setTimeout(() => e_.ComponentDispatch.dispatch(eN.ComponentActions.TOGGLE_CHANNEL_PINS), 0)
    }, [r]), u = (0, eh.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Q.default, {
      message: t,
      compact: n,
      usernameHook: u,
      onClickPins: __OVERLAY__ ? null : o
    })
  },
  [eN.MessageTypes.USER_JOIN]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eh.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ef.default, {
        message: t,
        compact: n,
        usernameHook: r
      }), (0, s.jsx)(D.WelcomeCTAContainer, {
        channel: a,
        message: t
      })]
    })
  },
  [eN.MessageTypes.GUILD_BOOST]: eg,
  [eN.MessageTypes.GUILD_BOOST_TIER_1]: eg,
  [eN.MessageTypes.GUILD_BOOST_TIER_2]: eg,
  [eN.MessageTypes.GUILD_BOOST_TIER_3]: eg,
  [eN.MessageTypes.CHANNEL_FOLLOW_ADD]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eh.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(K.default, {
      message: t,
      compact: n,
      usernameHook: r
    })
  },
  [eN.MessageTypes.GUILD_STREAM]: function(e) {
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
    } = t, c = t.getChannelId(), f = (0, l.useStateFromStores)([B.default], () => B.default.findActivity(o, e => e.type === eN.ActivityTypes.PLAYING), [o]), E = (0, l.useStateFromStores)([U.default], () => null != u ? U.default.getChannel(u.channel_id) : null, [u]), _ = null == u ? void 0 : u.guild_id, m = (0, eh.useUsernameHook)({
      user: r,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    }), T = a.useCallback(() => {
      null != E && null != _ && (0, d.watchStreamAndTransitionToStream)({
        streamType: eS.StreamTypes.GUILD,
        ownerId: o,
        channelId: E.id,
        guildId: _
      })
    }, [o, E, _]);
    return null != u && null != E && null != u.guild_id ? (0, s.jsx)($.default, {
      message: t,
      compact: n,
      channel: E,
      playingActivity: f,
      onJoinStream: T,
      usernameHook: m
    }) : null
  },
  [eN.MessageTypes.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
    let {
      message: t,
      compact: n
    } = e, a = t.getChannelId(), i = (0, l.useStateFromStores)([U.default], () => U.default.getChannel(a), [a]), r = null != i ? i.getGuildId() : null;
    return (0, s.jsx)(X.UIKitGuildDiscoveryDisqualified, {
      message: t,
      compact: n,
      onClick: () => {
        null != r && S.default.open(r, eN.GuildSettingsSections.DISCOVERY)
      }
    })
  },
  [eN.MessageTypes.GUILD_DISCOVERY_REQUALIFIED]: X.UIKitGuildDiscoveryRequalified,
  [eN.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: X.UIKitGuildDiscoveryGracePeriodInitialWarning,
  [eN.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: X.UIKitGuildDiscoveryGracePeriodFinalWarning,
  [eN.MessageTypes.THREAD_CREATED]: function(e) {
    let {
      message: t,
      channel: l,
      compact: o
    } = e, u = (0, eh.useUsernameHook)({
      user: t.author,
      channelId: t.channel_id,
      guildId: l.guild_id,
      messageId: t.id
    }), d = a.useCallback(async e => {
      var n;
      let s = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
      if (null != s) {
        await x.default.loadThread(s);
        let t = U.default.getChannel(s);
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
      let l = U.default.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
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
    return (0, s.jsx)(eo.default, {
      message: t,
      compact: o,
      usernameHook: u,
      onClickThread: d,
      onClickViewThreads: c,
      onContextMenuThread: f
    })
  },
  [eN.MessageTypes.THREAD_STARTER_MESSAGE]: ec.default,
  [eN.MessageTypes.GUILD_INVITE_REMINDER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, i = (0, l.useStateFromStores)([F.default], () => F.default.getCurrentUser()), r = (0, l.useStateFromStores)([j.default], () => {
      var e, t;
      return null !== (t = null === (e = j.default.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(i)) && void 0 !== t && t
    });
    return (0, s.jsx)(ee.default, {
      message: t,
      compact: a,
      isOwner: r,
      channel: n
    })
  },
  [eN.MessageTypes.AUTO_MODERATION_ACTION]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e;
    return (0, m.isAutomodMessageRecord)(t) ? (0, s.jsx)(V.default, {
      message: t,
      compact: n,
      channel: a
    }) : null
  },
  [eN.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eM,
  [eN.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eM,
  [eN.MessageTypes.GUILD_INCIDENT_REPORT_RAID]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, l = (0, eh.useUsernameHook)({
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
  [eN.MessageTypes.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, l = (0, eh.useUsernameHook)({
      user: t.author,
      channelId: a.id,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Z.default, {
      message: t,
      compact: n,
      channel: a,
      usernameHook: l
    })
  },
  [eN.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE]: p.default,
  [eN.MessageTypes.PURCHASE_NOTIFICATION]: function(e) {
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
  [eN.MessageTypes.INTERACTION_PREMIUM_UPSELL]: void 0,
  [eN.MessageTypes.STAGE_START]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, i = (0, eh.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    }), r = (0, l.useStateFromStores)([h.default], () => h.default.getActiveEventByChannel(n.id), [n.id]);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ei.default, {
        message: t,
        compact: a,
        usernameHook: i
      }), null != r && r.name === t.content ? (0, s.jsx)(N.default, {
        code: "".concat(n.guild_id, "-").concat(r.id)
      }) : null]
    })
  },
  [eN.MessageTypes.STAGE_END]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, eh.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(es.default, {
      message: t,
      compact: a,
      usernameHook: l
    })
  },
  [eN.MessageTypes.STAGE_SPEAKER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, eh.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(el.default, {
      message: t,
      compact: a,
      usernameHook: l
    })
  },
  [eN.MessageTypes.STAGE_RAISE_HAND]: function(e) {
    var t, n;
    let {
      message: a,
      channel: r,
      compact: u
    } = e, d = (0, eh.useUsernameHook)({
      user: a.author,
      channelId: r.id,
      guildId: r.guild_id,
      messageId: a.id
    }), c = (0, l.useStateFromStores)([b.default], () => b.default.can(eN.Permissions.MUTE_MEMBERS, r)), f = (0, l.useStateFromStores)([v.default], () => v.default.getParticipant(r.id, a.author.id)), E = new Date(eI.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == f ? void 0 : null === (t = f.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), _ = c && (null == f ? void 0 : f.rtsState) === O.RequestToSpeakStates.REQUESTED_TO_SPEAK && E;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ea.default, {
        message: a,
        compact: u,
        usernameHook: d
      }), _ ? (0, s.jsxs)(i.Button, {
        wrapperClassName: eA.inviteToSpeakButtonWrapper,
        innerClassName: eA.inviteToSpeakButtonInner,
        look: i.Button.Looks.FILLED,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          (0, R.setUserSuppress)(r, a.author.id, !1), o.default.deleteMessage(r.id, a.id, !0)
        },
        children: [(0, s.jsx)(w.default, {
          height: 20,
          width: 20
        }), eC.default.Messages.REQUEST_TO_SPEAK_ACCEPT]
      }) : null]
    })
  },
  [eN.MessageTypes.STAGE_TOPIC]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, eh.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(er.default, {
      message: t,
      compact: a,
      usernameHook: l
    })
  },
  [eN.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: A.default,
  [eN.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED]: g.PrivateChannelIntegrationAddedSystemMessage,
  [eN.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: g.PrivateChannelIntegrationRemovedSystemMessage,
  [eN.MessageTypes.PREMIUM_REFERRAL]: void 0,
  [eN.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
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
  [eN.MessageTypes.CUSTOM_GIFT]: void 0,
  [eN.MessageTypes.GUILD_GAMING_STATS_PROMPT]: function(e) {
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
  [eN.MessageTypes.VOICE_HANGOUT_INVITE]: void 0,
  [eN.MessageTypes.POLL_RESULT]: C.default,
  [eN.MessageTypes.CHANGELOG]: void 0
});
t.default = a.memo(function(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    type: l
  } = t, i = eR[l];
  if (null == i) {
    var r;
    return r = Error("unknown message type ".concat(t.type)), eT.default.captureException(r), new _.default("SystemMessage").error("", r), null
  }
  return (0, s.jsx)(H.default, {
    message: t,
    content: (0, ep.default)(t).content,
    children: (0, s.jsx)(i, {
      message: t,
      channel: n,
      compact: a
    })
  })
})