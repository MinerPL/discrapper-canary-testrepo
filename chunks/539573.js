n.d(t, {
  $q: function() {
return c;
  },
  U8: function() {
return u;
  },
  V6: function() {
return s;
  },
  uF: function() {
return d;
  },
  uS: function() {
return l;
  }
}), n(411104), n(47120);
var r = n(673750),
  i = n(592125),
  a = n(981631),
  o = n(689938);
class s extends Error {}
class l extends Error {}
let u = new Set([
  a.evJ.AUTOMOD_MESSAGE_BLOCKED,
  a.evJ.AUTOMOD_TITLE_BLOCKED,
  a.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE
]);

function c(e, t) {
  if (null == e)
return null;
  let {
code: n,
message: r
  } = e;
  if (!u.has(n))
return null;
  if (null != r)
return r;
  if (null == t)
return null;
  let s = i.Z.getChannel(t);
  return (null == s ? void 0 : s.isThread()) ? o.Z.Messages.THREAD_AUTOMOD_ERROR : ((null == s ? void 0 : s.isForumPost()) || (null == s ? void 0 : s.isForumLikeChannel())) && (n === a.evJ.AUTOMOD_TITLE_BLOCKED || n === a.evJ.AUTOMOD_MESSAGE_BLOCKED) ? o.Z.Messages.FORUM_POST_AUTOMOD_ERROR : null;
}

function d(e, t) {
  let n = c(t);
  return null != n ? n : null == e ? o.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
let t = i.Z.getChannel(e.message.channelId);
return (0, r.Bz)(e) ? o.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? o.Z.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? o.Z.Messages.FORUM_POST_AUTOMOD_ERROR : o.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE;
  }(e);
}