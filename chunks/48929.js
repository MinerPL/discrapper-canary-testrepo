"use strict";
n.r(t), n("47120");
var a, l, s, i = n("445346"),
  r = n("570140"),
  o = n("430198"),
  u = n("314897"),
  d = n("592125"),
  c = n("709054"),
  f = n("522579");
let h = new Set;
class m extends i.Store {
  shouldDisplayPrompt(e) {
    return h.has(e)
  }
}
s = "MediaPostSharePromptStore", (l = "displayName") in(a = m) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new m(r.default, {
  CONNECTION_OPEN: function() {
    h = new Set
  },
  MESSAGE_CREATE: function(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (u.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, f.isFirstMessageIdInMediaPost)(n.id, n.channel_id)) return;
    let a = d.default.getChannel(n.channel_id);
    if (null != a && null != a.parent_id) o.default.isChannelGated(a.guild_id, a.parent_id) && h.add(c.default.castMessageIdAsChannelId(e.message.id))
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
    let {
      threadId: t
    } = e;
    h.delete(t)
  },
  LOGOUT: function(e) {
    h.clear()
  }
})