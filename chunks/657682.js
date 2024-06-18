"use strict";
n.d(t, {
  NF: function() {
    return d
  },
  Zy: function() {
    return _
  }
}), n(47120);
var i = n(626135),
  r = n(777754),
  s = n(981631),
  o = n(689938);
let a = /^\d+$/,
  l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
  u = /^[a-zA-Z0-9_\\.]+$/;

function _(e) {
  return u.test(e) || e.includes("#") && l.test(e) ? null : (function(e) {
    let [t, n] = e.split("#");
    i.default.track(s.rMx.FRIEND_REQUEST_FAILED, {
      reason: "Invalid Username",
      query: e,
      discrim_len: (null != n ? n : "").length,
      username_len: t.length,
      is_email_like: r.Z.isEmail(e),
      is_invite_like: r.Z.isInvite(e),
      is_num_only: a.test(e)
    })
  }(e), o.Z.Messages.POMELO_ADD_FRIEND_ERROR)
}

function d(e, t) {
  switch (e) {
    case s.evJ.RELATIONSHIP_INCOMING_DISABLED:
      return o.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
        discordTag: t
      });
    case s.evJ.TOO_MANY_FRIENDS:
      return o.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
    case s.evJ.RELATIONSHIP_ALREADY_FRIENDS:
      return o.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
    case s.evJ.USER_QUARANTINED:
    case s.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
      return o.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
    case s.evJ.TOO_MANY_BLOCKED_USERS:
      return o.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
    case s.evJ.RELATIONSHIP_INCOMING_BLOCKED:
    case s.evJ.RELATIONSHIP_INVALID_SELF:
    case s.evJ.RELATIONSHIP_INVALUD_USER_BOT:
    case s.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
    default:
      return o.Z.Messages.POMELO_ADD_FRIEND_ERROR
  }
}