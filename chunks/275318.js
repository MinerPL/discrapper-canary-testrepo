"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("75247"),
  a = n("913144"),
  l = n("203288"),
  i = n("271938"),
  r = n("42203"),
  o = n("299039"),
  u = n("911162");
let d = new Set;
class c extends s.Store {
  shouldDisplayPrompt(e) {
    return d.has(e)
  }
}
c.displayName = "MediaPostSharePromptStore";
var f = new c(a.default, {
  CONNECTION_OPEN: function() {
    d = new Set
  },
  MESSAGE_CREATE: function(e) {
    var t;
    if (e.isPushNotification) return;
    let n = e.message;
    if (i.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, u.isFirstMessageIdInMediaPost)(n.id, n.channel_id)) return;
    let s = r.default.getChannel(n.channel_id);
    if (null == s || null == s.parent_id) return;
    let a = l.default.isChannelGated(s.guild_id, s.parent_id);
    a && d.add(o.default.castMessageIdAsChannelId(e.message.id))
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
    let {
      threadId: t
    } = e;
    d.delete(t)
  },
  LOGOUT: function(e) {
    d.clear()
  }
})