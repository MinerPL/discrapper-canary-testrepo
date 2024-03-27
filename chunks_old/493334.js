"use strict";
n.r(t), n.d(t, {
  UNREAD_NEXT: function() {
    return A
  },
  UNREAD_PREV: function() {
    return C
  },
  MENTION_NEXT: function() {
    return I
  },
  MENTION_PREV: function() {
    return S
  }
});
var i = n("592864"),
  o = n("615387"),
  l = n("393027"),
  u = n("233069"),
  a = n("42203"),
  s = n("660478"),
  d = n("282109"),
  r = n("49111"),
  E = n("133335");
let c = (e, t) => {
    let n = a.default.getChannel(t);
    return null != n && ((0, u.isPrivate)(n.type) ? !!s.default.getMentionCount(t) : (!d.default.isChannelMuted(e, t) || s.default.getMentionCount(t) > 0) && (0, o.getHasImportantUnread)(n))
  },
  _ = (e, t) => {
    if (t === E.ReadStateTypes.GUILD_EVENT) return !d.default.isMuteScheduledEventsEnabled(e) && s.default.hasUnread(e, t);
    return s.default.hasUnread(e, t)
  },
  A = {
    binds: ["alt+shift+down"],
    comboKeysBindGlobal: !0,
    action() {
      var e;
      let t = null !== (e = l.default.getState().guildId) && void 0 !== e ? e : r.ME;
      return (0, i.default)(1, {
        channelPredicate: c,
        guildPredicate: e => e === t || !d.default.isMuted(e),
        guildFeaturePredicate: _
      }), !1
    }
  },
  C = {
    binds: ["alt+shift+up"],
    comboKeysBindGlobal: !0,
    action() {
      var e;
      let t = null !== (e = l.default.getState().guildId) && void 0 !== e ? e : r.ME;
      return (0, i.default)(-1, {
        channelPredicate: c,
        guildPredicate: e => e === t || !d.default.isMuted(e),
        guildFeaturePredicate: _
      }), !1
    }
  },
  T = (e, t) => s.default.getMentionCount(t) > 0,
  I = {
    binds: ["mod+shift+alt+down"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.default)(1, {
      channelPredicate: T,
      withVoiceChannels: !0
    }), !1)
  },
  S = {
    binds: ["mod+shift+alt+up"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.default)(-1, {
      channelPredicate: T,
      withVoiceChannels: !0
    }), !1)
  }