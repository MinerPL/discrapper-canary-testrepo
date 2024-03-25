"use strict";
n.r(t), n.d(t, {
  fetchGuildHomeSettings: function() {
    return h
  },
  fetchNewMemberActions: function() {
    return S
  },
  selectHomeResourceChannel: function() {
    return C
  },
  selectNewMemberActionChannel: function() {
    return m
  },
  completeNewMemberAction: function() {
    return v
  },
  getBlockForChannelDeletion: function() {
    return I
  }
}), n("222007"), n("808653");
var l = n("872717"),
  u = n("913144"),
  i = n("819689"),
  r = n("115718"),
  d = n("38654"),
  a = n("144491"),
  s = n("42203"),
  o = n("599110"),
  E = n("299039"),
  c = n("698882"),
  _ = n("129092"),
  f = n("675305"),
  N = n("290886"),
  T = n("49111");
let h = async e => {
  u.default.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await l.HTTP.get({
        url: T.Endpoints.GUILD_HOME_SETTINGS(e),
        oldFormErrors: !0
      }),
      n = (0, _.settingsFromServer)(t.body);
    return u.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    u.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, S = async e => {
  if (!d.default.isFullServerPreview(e)) {
    u.default.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await l.HTTP.get({
          url: T.Endpoints.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: !0
        }),
        n = (0, _.actionsFromServer)(t.body);
      return u.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      u.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, C = function(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (u.default.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let l = s.default.getChannel(t),
    _ = c.default.getResourceForChannel(e, t);
  null != e && !d.default.isFullServerPreview(e) && null != l && null != _ && o.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: l.id,
    server_guide_channel_type: "resource",
    channel_action_type: -1
  }), n && (0, a.transitionToChannel)(t), i.default.jumpToMessage({
    channelId: t,
    messageId: E.default.castChannelIdAsMessageId(t),
    flash: !1,
    jumpType: r.JumpTypes.INSTANT
  })
}, m = (e, t) => {
  u.default.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = s.default.getChannel(t),
    l = c.default.getActionForChannel(e, t);
  null != e && !d.default.isFullServerPreview(e) && null != n && null != l && o.default.track(T.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: l.actionType
  }), (0, a.transitionToChannel)(t)
}, v = (e, t) => {
  if (u.default.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), d.default.isFullServerPreview(e)) return;
  let n = s.default.getChannel(t),
    i = c.default.getActionForChannel(e, t);
  if (null != n && null != i) {
    var r, a;
    let t = E.default.keys(null !== (r = f.default.getCompletedActions(e)) && void 0 !== r ? r : {}),
      l = null !== (a = c.default.getNewMemberActions(e)) && void 0 !== a ? a : [];
    o.default.track(T.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: i.actionType,
      has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
    })
  }
  l.HTTP.post({
    url: T.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
  })
};
async function I(e, t) {
  if (null == e) return !1;
  let n = (0, N.canSeeOnboardingHome)(e);
  if (!n) return !1;
  let l = c.default.getSettings(e);
  return l === c.NO_SETTINGS && (await h(e), l = c.default.getSettings(e)), l !== c.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
}