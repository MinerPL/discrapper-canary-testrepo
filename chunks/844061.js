"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eO
  }
}), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("272030"),
  o = n("819689"),
  u = n("987317"),
  d = n("990766"),
  c = n("798609"),
  E = n("881536"),
  f = n("441979"),
  _ = n("605250"),
  T = n("201131"),
  I = n("95039"),
  m = n("289967"),
  N = n("866027"),
  p = n("398604"),
  S = n("477558"),
  A = n("592407"),
  C = n("569382"),
  h = n("86456"),
  g = n("393414"),
  M = n("244480"),
  O = n("488464"),
  R = n("808422"),
  v = n("120252"),
  L = n("967241"),
  P = n("936436"),
  D = n("271938"),
  x = n("950104"),
  y = n("42203"),
  U = n("305961"),
  j = n("957255"),
  b = n("824563"),
  G = n("18494"),
  B = n("697218"),
  F = n("800762"),
  k = n("277174"),
  w = n("497880"),
  H = n("944662"),
  V = n("748880"),
  Y = n("888393"),
  W = n("548703"),
  K = n("859316"),
  z = n("427655"),
  Q = n("161225"),
  Z = n("41163"),
  J = n("830220"),
  X = n("924399"),
  q = n("954060"),
  $ = n("178889"),
  ee = n("52538"),
  et = n("879033"),
  en = n("523257"),
  es = n("14733"),
  ea = n("513448"),
  el = n("606099"),
  ei = n("151218"),
  er = n("423509"),
  eo = n("80301"),
  eu = n("210977"),
  ed = n("512622"),
  ec = n("874612"),
  eE = n("703712"),
  ef = n("659500"),
  e_ = n("387111"),
  eT = n("286235"),
  eI = n("299039"),
  em = n("95045"),
  eN = n("232259"),
  ep = n("49111"),
  eS = n("706530"),
  eA = n("782340"),
  eC = n("714478");

function eh(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: r
  } = t, {
    guild_id: o
  } = n, u = t.getChannelId(), d = (0, l.useStateFromStores)([U.default], () => U.default.getGuild(o), [o]), c = a.useCallback(() => {
    null != d && (0, I.openGuildBoostingMarketingModal)({
      guildId: d.id,
      location: {
        section: ep.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: ep.AnalyticsObjects.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [d]), E = (0, eN.useUsernameHook)({
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
    usernameHook: E,
    onClickMessage: c
  })
}

function eg(e) {
  let {
    message: t,
    compact: n,
    channel: a
  } = e, l = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.DEFAULT]: void 0,
  [ep.MessageTypes.REPLY]: void 0,
  [ep.MessageTypes.CHAT_INPUT_COMMAND]: void 0,
  [ep.MessageTypes.CONTEXT_MENU_COMMAND]: void 0,
  [ep.MessageTypes.RECIPIENT_ADD]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = e_.default.getName(null, r, o), d = (0, eN.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), c = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.RECIPIENT_REMOVE]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, l.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = (0, eN.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), d = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.CALL]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      id: r,
      author: o
    } = t, d = D.default.getId(), c = t.getChannelId(), E = (0, l.useStateFromStores)([x.default], () => x.default.isCallActive(c, r), [c, r]), f = (0, l.useStateFromStores)([F.default], () => F.default.getVoiceState(ep.ME, d)), _ = !E && null != t.call && !t.call.participants.includes(d), T = E && (null == f || f.channelId !== c), I = a.useCallback(() => u.default.selectVoiceChannel(c), [c]), m = (0, eN.useUsernameHook)({
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
      usernameHook: m,
      onClickJoinCall: I
    })
  },
  [ep.MessageTypes.CHANNEL_NAME_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
      user: l,
      channelId: i,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(K.default, {
      compact: n,
      message: t,
      usernameHook: r,
      isForumPost: a.isForumPost()
    })
  },
  [ep.MessageTypes.CHANNEL_ICON_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.CHANNEL_PINNED_MESSAGE]: function(e) {
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
      setTimeout(() => ef.ComponentDispatch.dispatch(ep.ComponentActions.TOGGLE_CHANNEL_PINS), 0)
    }, [r]), u = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.USER_JOIN]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
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
      }), (0, s.jsx)(P.WelcomeCTAContainer, {
        channel: a,
        message: t
      })]
    })
  },
  [ep.MessageTypes.GUILD_BOOST]: eh,
  [ep.MessageTypes.GUILD_BOOST_TIER_1]: eh,
  [ep.MessageTypes.GUILD_BOOST_TIER_2]: eh,
  [ep.MessageTypes.GUILD_BOOST_TIER_3]: eh,
  [ep.MessageTypes.CHANNEL_FOLLOW_ADD]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: l
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.GUILD_STREAM]: function(e) {
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
    } = t, c = t.getChannelId(), E = (0, l.useStateFromStores)([b.default], () => b.default.findActivity(o, e => e.type === ep.ActivityTypes.PLAYING), [o]), f = (0, l.useStateFromStores)([y.default], () => null != u ? y.default.getChannel(u.channel_id) : null, [u]), _ = null == u ? void 0 : u.guild_id, T = (0, eN.useUsernameHook)({
      user: r,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    }), I = a.useCallback(() => {
      null != f && null != _ && (0, d.watchStreamAndTransitionToStream)({
        streamType: eS.StreamTypes.GUILD,
        ownerId: o,
        channelId: f.id,
        guildId: _
      })
    }, [o, f, _]);
    return null != u && null != f && null != u.guild_id ? (0, s.jsx)(q.default, {
      message: t,
      compact: n,
      channel: f,
      playingActivity: E,
      onJoinStream: I,
      usernameHook: T
    }) : null
  },
  [ep.MessageTypes.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
    let {
      message: t,
      compact: n
    } = e, a = t.getChannelId(), i = (0, l.useStateFromStores)([y.default], () => y.default.getChannel(a), [a]), r = null != i ? i.getGuildId() : null;
    return (0, s.jsx)(Z.UIKitGuildDiscoveryDisqualified, {
      message: t,
      compact: n,
      onClick: () => {
        null != r && A.default.open(r, ep.GuildSettingsSections.DISCOVERY)
      }
    })
  },
  [ep.MessageTypes.GUILD_DISCOVERY_REQUALIFIED]: Z.UIKitGuildDiscoveryRequalified,
  [ep.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Z.UIKitGuildDiscoveryGracePeriodInitialWarning,
  [ep.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Z.UIKitGuildDiscoveryGracePeriodFinalWarning,
  [ep.MessageTypes.THREAD_CREATED]: function(e) {
    let {
      message: t,
      channel: l,
      compact: o
    } = e, u = (0, eN.useUsernameHook)({
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
        } = await n.el("33250").then(n.bind(n, "33250"));
        return t => (0, s.jsx)(e, {
          channel: l,
          ...t
        })
      })
    }, [l]), E = a.useCallback(e => {
      var a;
      let l = y.default.getChannel(null === (a = t.messageReference) || void 0 === a ? void 0 : a.channel_id);
      null != l && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("994827").then(n.bind(n, "994827"));
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
      onContextMenuThread: E
    })
  },
  [ep.MessageTypes.THREAD_STARTER_MESSAGE]: ed.default,
  [ep.MessageTypes.GUILD_INVITE_REMINDER]: function(e) {
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
  [ep.MessageTypes.AUTO_MODERATION_ACTION]: function(e) {
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
  [ep.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eg,
  [ep.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eg,
  [ep.MessageTypes.GUILD_INCIDENT_REPORT_RAID]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, l = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, l = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE]: N.default,
  [ep.MessageTypes.PURCHASE_NOTIFICATION]: function(e) {
    var t;
    let {
      message: n,
      channel: a,
      compact: l
    } = e;
    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === c.PurchaseNotificationType.GUILD_PRODUCT ? (0, s.jsx)(m.default, {
      message: n,
      channel: a,
      compact: l
    }) : null
  },
  [ep.MessageTypes.INTERACTION_PREMIUM_UPSELL]: void 0,
  [ep.MessageTypes.STAGE_START]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, i = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    }), r = (0, l.useStateFromStores)([p.default], () => p.default.getActiveEventByChannel(n.id), [n.id]);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(el.default, {
        message: t,
        compact: a,
        usernameHook: i
      }), null != r && r.name === t.content ? (0, s.jsx)(S.default, {
        code: "".concat(n.guild_id, "-").concat(r.id)
      }) : null]
    })
  },
  [ep.MessageTypes.STAGE_END]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.STAGE_SPEAKER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.STAGE_RAISE_HAND]: function(e) {
    var t, n;
    let {
      message: a,
      channel: r,
      compact: u
    } = e, d = (0, eN.useUsernameHook)({
      user: a.author,
      channelId: r.id,
      guildId: r.guild_id,
      messageId: a.id
    }), c = (0, l.useStateFromStores)([j.default], () => j.default.can(ep.Permissions.MUTE_MEMBERS, r)), E = (0, l.useStateFromStores)([O.default], () => O.default.getParticipant(r.id, a.author.id)), f = new Date(eI.default.extractTimestamp(a.id)).toISOString() === new Date(null !== (n = null == E ? void 0 : null === (t = E.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), _ = c && (null == E ? void 0 : E.rtsState) === R.RequestToSpeakStates.REQUESTED_TO_SPEAK && f;
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
        }), eA.default.Messages.REQUEST_TO_SPEAK_ACCEPT]
      }) : null]
    })
  },
  [ep.MessageTypes.STAGE_TOPIC]: function(e) {
    let {
      message: t,
      channel: n,
      compact: a
    } = e, l = (0, eN.useUsernameHook)({
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
  [ep.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: C.default,
  [ep.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED]: h.PrivateChannelIntegrationAddedSystemMessage,
  [ep.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: h.PrivateChannelIntegrationRemovedSystemMessage,
  [ep.MessageTypes.PREMIUM_REFERRAL]: void 0,
  [ep.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
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
  [ep.MessageTypes.CUSTOM_GIFT]: void 0,
  [ep.MessageTypes.GUILD_GAMING_STATS_PROMPT]: function(e) {
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
  [ep.MessageTypes.VOICE_HANGOUT_INVITE]: void 0
});
var eO = a.memo(function(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    type: l
  } = t, i = eM[l];
  if (null == i) {
    var r;
    return r = Error("unknown message type ".concat(t.type)), eT.default.captureException(r), new(0, _.default)("SystemMessage").error("", r), null
  }
  return (0, s.jsx)(w.default, {
    message: t,
    content: (0, em.default)(t).content,
    children: (0, s.jsx)(i, {
      message: t,
      channel: n,
      compact: a
    })
  })
})