"use strict";
n.d(t, {
  $q: function() {
    return _
  },
  U8: function() {
    return u
  },
  V6: function() {
    return a
  },
  uF: function() {
    return d
  },
  uS: function() {
    return l
  }
}), n(411104), n(47120);
var i = n(673750),
  r = n(592125),
  s = n(981631),
  o = n(689938);
class a extends Error {}
class l extends Error {}
let u = new Set([s.evJ.AUTOMOD_MESSAGE_BLOCKED, s.evJ.AUTOMOD_TITLE_BLOCKED, s.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

function _(e, t) {
  if (null == e) return null;
  let {
    code: n,
    message: i
  } = e;
  if (!u.has(n)) return null;
  if (null != i) return i;
  if (null == t) return null;
  let a = r.Z.getChannel(t);
  return (null == a ? void 0 : a.isThread()) ? o.Z.Messages.THREAD_AUTOMOD_ERROR : ((null == a ? void 0 : a.isForumPost()) || (null == a ? void 0 : a.isForumLikeChannel())) && (n === s.evJ.AUTOMOD_TITLE_BLOCKED || n === s.evJ.AUTOMOD_MESSAGE_BLOCKED) ? o.Z.Messages.FORUM_POST_AUTOMOD_ERROR : null
}

function d(e, t) {
  let n = _(t);
  return null != n ? n : null == e ? o.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
    let t = r.Z.getChannel(e.message.channelId);
    return (0, i.Bz)(e) ? o.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? o.Z.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? o.Z.Messages.FORUM_POST_AUTOMOD_ERROR : o.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
  }(e)
}