"use strict";
n.r(t), n.d(t, {
  useAllActionsCompleted: function() {
    return f
  },
  useMemberActionsForChannel: function() {
    return d
  },
  useNextMemberAction: function() {
    return c
  }
}), n("789020");
var a = n("399606"),
  l = n("271383"),
  s = n("630388"),
  i = n("563534"),
  r = n("846121"),
  o = n("460347"),
  u = n("372897");

function d(e, t) {
  var n;
  let l = (0, o.default)(e),
    s = (0, a.useStateFromStores)([i.default], () => i.default.getNewMemberActions(e), [e]),
    u = (0, a.useStateFromStores)([r.default], () => r.default.getCompletedActions(e));
  if (!l) return {};
  let d = null !== (n = null == s ? void 0 : s.findIndex(e => e.channelId === t.id)) && void 0 !== n ? n : 0,
    c = d >= 0 && null != s ? s[d] : null,
    f = null != c && (null == u ? void 0 : u[c.channelId]) === !0;
  return {
    channelAction: c,
    completed: f
  }
}

function c(e, t) {
  let n = (0, a.useStateFromStores)([i.default], () => i.default.getNewMemberActions(e)),
    l = (0, a.useStateFromStores)([r.default], () => r.default.getCompletedActions(e));
  return null == n ? void 0 : n.find(e => (null == l ? void 0 : l[e.channelId]) !== !0 && e.channelId !== t)
}

function f(e) {
  var t;
  let n = (0, a.useStateFromStores)([l.default], () => l.default.getSelfMember(e));
  return (0, s.hasFlag)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, u.GuildMemberFlags.COMPLETED_HOME_ACTIONS)
}