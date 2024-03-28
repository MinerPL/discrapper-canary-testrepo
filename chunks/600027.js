"use strict";
n.r(t), n.d(t, {
  validateOpenInviteDialog: function() {
    return u
  }
});
var a = n("159300"),
  s = n("430824"),
  l = n("496675"),
  i = n("996106"),
  r = n("561205"),
  o = n("981631");

function u() {
  let e = (0, r.default)();
  if (null == e) throw new i.default({
    errorCode: o.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel");
  let t = s.default.getGuild(e.getGuildId());
  if (null == t) throw new i.default({
    errorCode: o.RPCErrors.INVALID_CHANNEL
  }, "Invalid guild ".concat(e.getGuildId()));
  if (!(0, a.canViewInviteModal)(l.default, t, e)) throw new i.default({
    errorCode: o.RPCErrors.INVALID_PERMISSIONS
  }, "No invite permissions for ".concat(e.id));
  return {
    channel: e,
    guild: t
  }
}