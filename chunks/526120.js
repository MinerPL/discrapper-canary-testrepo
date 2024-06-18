"use strict";
n.d(t, {
  C3: function() {
    return f
  },
  Fg: function() {
    return S
  },
  Oh: function() {
    return A
  },
  cP: function() {
    return h
  },
  gp: function() {
    return N
  }
}), n(47120), n(724458);
var i = n(544891),
  r = n(570140),
  s = n(904245),
  o = n(593472),
  a = n(160404),
  l = n(359110),
  u = n(592125),
  _ = n(626135),
  d = n(709054),
  c = n(563534),
  E = n(734893),
  I = n(846121),
  T = n(981631);
let h = async e => {
  r.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await i.tn.get({
        url: T.ANM.GUILD_HOME_SETTINGS(e),
        oldFormErrors: !0
      }),
      n = (0, E.tB)(t.body);
    return r.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    r.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, S = async e => {
  if (!a.Z.isFullServerPreview(e)) {
    r.Z.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await i.tn.get({
          url: T.ANM.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: !0
        }),
        n = (0, E.rk)(t.body);
      return r.Z.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      r.Z.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, f = function(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (r.Z.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let i = u.Z.getChannel(t),
    E = c.Z.getResourceForChannel(e, t);
  null != e && !a.Z.isFullServerPreview(e) && null != i && null != E && _.default.track(T.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: i.id,
    server_guide_channel_type: "resource",
    channel_action_type: -1
  }), n && (0, l.Kh)(t);
  s.Z.jumpToMessage({
    channelId: t,
    messageId: d.default.castChannelIdAsMessageId(t),
    flash: !1,
    jumpType: o.SR.INSTANT
  })
}, N = (e, t) => {
  r.Z.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = u.Z.getChannel(t),
    i = c.Z.getActionForChannel(e, t);
  null != e && !a.Z.isFullServerPreview(e) && null != n && null != i && _.default.track(T.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: i.actionType
  }), (0, l.Kh)(t)
}, A = (e, t) => {
  if (r.Z.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), a.Z.isFullServerPreview(e)) return;
  let n = u.Z.getChannel(t),
    s = c.Z.getActionForChannel(e, t);
  if (null != n && null != s) {
    var o, l;
    let t = d.default.keys(null !== (o = I.Z.getCompletedActions(e)) && void 0 !== o ? o : {}),
      i = null !== (l = c.Z.getNewMemberActions(e)) && void 0 !== l ? l : [];
    _.default.track(T.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: s.actionType,
      has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0)
    })
  }
  i.tn.post({
    url: T.ANM.GUILD_MEMBER_ACTION_UPDATE(e, t)
  })
}