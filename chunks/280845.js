"use strict";
n.r(t), n.d(t, {
  canReplyToMessage: function() {
    return M
  },
  useCanReplyToMessage: function() {
    return E
  }
}), n("47120");
var a = n("275726"),
  i = n("442837"),
  l = n("71619"),
  s = n("665906"),
  u = n("496675"),
  r = n("594174"),
  o = n("981631"),
  d = n("231338");

function c(e, t, n) {
  let i;
  return (i = e.isPrivate() ? !e.isSystemDM() : n.can(d.Permissions.SEND_MESSAGES, e) && n.can(d.Permissions.READ_MESSAGE_HISTORY, e)) && a.MessageTypesSets.REPLYABLE.has(t.type)
}

function f(e, t, n, a, i) {
  let l = t.hasFlag(o.MessageFlags.EPHEMERAL),
    s = t.state === o.MessageStates.SENT,
    u = !e.isArchivedThread() || i;
  return n && s && !l && !a && u
}

function E(e, t) {
  var n;
  let a = (0, s.useCanUnarchiveThread)(e),
    [, r] = (0, l.useCurrentUserCommunicationDisabled)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0),
    o = (0, i.useStateFromStores)([u.default], () => null != e && null != t && c(e, t, u.default));
  return null != e && null != t && f(e, t, o, r, a)
}

function M(e, t) {
  var n;
  let a = (0, s.canUnarchiveThread)(e),
    i = c(e, t, u.default),
    o = r.default.getCurrentUser(),
    [, d] = (0, l.userCommunicationDisabled)(null == o ? void 0 : o.id, null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0);
  return f(e, t, i, d, a)
}