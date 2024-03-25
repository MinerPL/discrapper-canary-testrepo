"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007"), n("702976");
var s = n("446674"),
  a = n("95410"),
  l = n("913144"),
  i = n("271938"),
  r = n("42203"),
  o = n("957255"),
  u = n("697218"),
  d = n("568734"),
  c = n("49111");
let E = "ChannelFollowingBumpChannels",
  f = new Set,
  _ = new Set;
class T extends s.default.Store {
  initialize() {
    this.waitFor(i.default), f = new Set(a.Storage.get(E))
  }
  shouldShowBump(e) {
    return _.has(e)
  }
}
T.displayName = "ChannelFollowingPublishBumpStore";
var I = new T(l.default, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: a
    } = e;
    if (a || f.has(n)) return !1;
    let l = r.default.getChannel(n),
      i = u.default.getCurrentUser(),
      E = null != l && l.type === c.ChannelTypes.GUILD_ANNOUNCEMENT && s.type === c.MessageTypes.DEFAULT && (null != i && (null === (t = s.author) || void 0 === t ? void 0 : t.id) === i.id ? o.default.can(c.Permissions.SEND_MESSAGES, l) : o.default.can(c.Permissions.MANAGE_MESSAGES, l)) && !d.hasFlag(Number(s.flags), c.MessageFlags.CROSSPOSTED);
    if (!E) return !1;
    _.add(s.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e, n = _.has(t.id);
    n && d.hasFlag(Number(t.flags), c.MessageFlags.CROSSPOSTED) && _.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    _.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    _.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    f.add(t), a.Storage.set(E, f), _.clear()
  }
})