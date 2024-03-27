"use strict";
n.r(t), n.d(t, {
  useCanReplyToMessage: function() {
    return M
  },
  canReplyToMessage: function() {
    return g
  }
}), n("222007");
var a = n("637612"),
  i = n("446674"),
  l = n("406043"),
  s = n("485684"),
  u = n("913491"),
  r = n("300322"),
  d = n("957255"),
  o = n("697218"),
  c = n("49111"),
  f = n("843455");

function E(e, t, n) {
  let i;
  i = e.isPrivate() ? !e.isSystemDM() : n.can(f.Permissions.SEND_MESSAGES, e) && n.can(f.Permissions.READ_MESSAGE_HISTORY, e);
  let l = !(0, u.default)(t),
    r = a.MessageTypesSets.REPLYABLE.has(t.type),
    {
      enabled: d
    } = s.default.getCurrentConfig({
      guildId: e.guild_id,
      location: "51c7ba_1"
    }, {
      autoTrackExposure: t.type === a.MessageTypes.USER_JOIN
    });
  return i && (d ? r : l)
}

function m(e, t, n, a, i) {
  let l = t.hasFlag(c.MessageFlags.EPHEMERAL),
    s = t.state === c.MessageStates.SENT,
    u = !e.isArchivedThread() || i;
  return n && s && !l && !a && u
}

function M(e, t) {
  var n;
  let a = (0, r.useCanUnarchiveThread)(e),
    [, s] = (0, l.useCurrentUserCommunicationDisabled)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0),
    u = (0, i.useStateFromStores)([d.default], () => null != e && null != t && E(e, t, d.default));
  return null != e && null != t && m(e, t, u, s, a)
}

function g(e, t) {
  var n;
  let a = (0, r.canUnarchiveThread)(e),
    i = E(e, t, d.default),
    s = o.default.getCurrentUser(),
    [, u] = (0, l.userCommunicationDisabled)(null == s ? void 0 : s.id, null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0);
  return m(e, t, i, u, a)
}