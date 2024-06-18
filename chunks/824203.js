"use strict";
n.d(t, {
  __: function() {
    return _
  },
  in: function() {
    return d
  }
}), n(373793);
var i = n(39621),
  r = n(911969),
  s = n(213459),
  o = n(581364),
  a = n(807169),
  l = n(104793),
  u = n(689938);

function _(e, t, n) {
  var i, u, _, d;
  let c = (0, a.Hs)(t, r.yU.CHAT),
    E = (0, s.PL)(!0, !1),
    I = (0, s.LD)(null == t ? void 0 : t.guild_id, !1),
    T = (0, o.vC)(null == t ? void 0 : t.guild_id, n);
  if (null == e || T) return !1;
  let {
    context: h,
    userId: S,
    roleIds: f,
    isImpersonating: N
  } = c, A = null === (u = I.result) || void 0 === u ? void 0 : null === (i = u.sections[e.applicationId]) || void 0 === i ? void 0 : i.descriptor;
  if (void 0 !== A) {
    let n = (0, l.ZJ)(A.permissions, t, null == t ? void 0 : t.guild_id),
      i = (0, l.ML)(A.permissions, h.guild_id, S, f, N);
    if ((0, l.Ft)(e, c, {
        applicationAllowedForUser: i,
        applicationAllowedForChannel: n,
        commandBotId: A.botId
      }) === l.mF.ALLOWED) return !1
  }
  let m = null === (d = E.result) || void 0 === d ? void 0 : null === (_ = d.sections[e.applicationId]) || void 0 === _ ? void 0 : _.commands;
  return null != m && e.id in m
}

function d(e) {
  switch (e) {
    case i.O.FEATURE_LIMITED:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_FEATURE_LIMITED;
    case i.O.GUILD_FEATURE_LIMITED:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_GUILD_FEATURE_LIMITED;
    case i.O.USER_FEATURE_LIMITED:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_USER_FEATURE_LIMITED;
    case i.O.SLOWMODE:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_SLOWMODE;
    case i.O.RATE_LIMIT:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_RATE_LIMIT;
    case i.O.CANNOT_MESSAGE_USER:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_MESSAGE_USER;
    case i.O.USER_VERIFICATION_LEVEL:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_USER_VERIFICATION_LEVEL;
    case i.O.CANNOT_UNARCHIVE_THREAD:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_UNARCHIVE_THREAD;
    case i.O.CANNOT_JOIN_THREAD:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_JOIN_THREAD;
    case i.O.MISSING_PERMISSIONS:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_MISSING_PERMISSIONS;
    case i.O.CANNOT_SEND_ATTACHMENTS:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_ATTACHMENTS;
    case i.O.CANNOT_SEND_EMBEDS:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_EMBEDS;
    case i.O.CANNOT_SEND_STICKERS:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_STICKERS;
    case i.O.AUTOMOD_BLOCKED:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_AUTOMOD_BLOCKED;
    case i.O.HARMFUL_LINK:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_HARMFUL_LINK;
    case i.O.CANNOT_USE_COMMAND:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_USE_COMMAND;
    case i.O.BETA_GUILD_SIZE:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_BETA;
    default:
      return u.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_UNKNOWN
  }
}