"use strict";
t.r(n), t.d(n, {
  fetchGuildHomeSettings: function() {
    return T
  },
  fetchNewMemberActions: function() {
    return h
  },
  selectHomeResourceChannel: function() {
    return C
  },
  selectNewMemberActionChannel: function() {
    return A
  },
  completeNewMemberAction: function() {
    return S
  },
  getBlockForChannelDeletion: function() {
    return v
  }
}), t("222007"), t("808653");
var i = t("872717"),
  l = t("913144"),
  u = t("819689"),
  r = t("115718"),
  a = t("38654"),
  o = t("144491"),
  d = t("42203"),
  s = t("599110"),
  c = t("299039"),
  f = t("698882"),
  E = t("129092"),
  _ = t("675305"),
  m = t("290886"),
  M = t("49111");
let T = async e => {
  l.default.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let n = await i.HTTP.get({
        url: M.Endpoints.GUILD_HOME_SETTINGS(e),
        oldFormErrors: !0
      }),
      t = (0, E.settingsFromServer)(n.body);
    return l.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: t
    }), t
  } catch (n) {
    l.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, h = async e => {
  if (!a.default.isFullServerPreview(e)) {
    l.default.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let n = await i.HTTP.get({
          url: M.Endpoints.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: !0
        }),
        t = (0, E.actionsFromServer)(n.body);
      return l.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: t
      }), t
    } catch (n) {
      l.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, C = function(e, n) {
  let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (l.default.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: n
    }), null == n) return;
  let i = d.default.getChannel(n),
    E = f.default.getResourceForChannel(e, n);
  null != e && !a.default.isFullServerPreview(e) && null != i && null != E && s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: i.id,
    server_guide_channel_type: "resource",
    channel_action_type: -1
  }), t && (0, o.transitionToChannel)(n), u.default.jumpToMessage({
    channelId: n,
    messageId: c.default.castChannelIdAsMessageId(n),
    flash: !1,
    jumpType: r.JumpTypes.INSTANT
  })
}, A = (e, n) => {
  l.default.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: n
  });
  let t = d.default.getChannel(n),
    i = f.default.getActionForChannel(e, n);
  null != e && !a.default.isFullServerPreview(e) && null != t && null != i && s.default.track(M.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: t.id,
    server_guide_channel_type: "member action",
    channel_action_type: i.actionType
  }), (0, o.transitionToChannel)(n)
}, S = (e, n) => {
  if (l.default.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: n
    }), a.default.isFullServerPreview(e)) return;
  let t = d.default.getChannel(n),
    u = f.default.getActionForChannel(e, n);
  if (null != t && null != u) {
    var r, o;
    let n = c.default.keys(null !== (r = _.default.getCompletedActions(e)) && void 0 !== r ? r : {}),
      i = null !== (o = f.default.getNewMemberActions(e)) && void 0 !== o ? o : [];
    s.default.track(M.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: t.guild_id,
      channel_id: t.id,
      channel_action_type: u.actionType,
      has_completed_all: i.reduce((e, t) => e && n.includes(t.channelId), !0)
    })
  }
  i.HTTP.post({
    url: M.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, n)
  })
};
async function v(e, n) {
  if (null == e) return !1;
  let t = (0, m.canSeeOnboardingHome)(e);
  if (!t) return !1;
  let i = f.default.getSettings(e);
  return i === f.NO_SETTINGS && (await T(e), i = f.default.getSettings(e)), i !== f.NO_SETTINGS && null != i && (null != i.newMemberActions && null != i.newMemberActions.find(e => e.channelId === n) ? "todo" : null != i.resourceChannels && null != i.resourceChannels.find(e => e.channelId === n) && "resource")
}