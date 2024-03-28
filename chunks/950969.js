"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("718528"),
  r = n("220444"),
  o = n("569471"),
  u = n("592125"),
  d = n("306680"),
  c = n("9156"),
  f = n("451478"),
  h = n("816779");

function C(e) {
  let t = u.default.getChannel(e);
  return null != t && null != t.getGuildId() && !(t.isThread() ? o.default.isMuted(t.id) : c.default.isChannelMuted(t.getGuildId(), t.id)) && (0, r.getHasImportantUnread)(t)
}

function p(e) {
  let t = u.default.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let l = c.default.isGuildCollapsed(n),
    a = c.default.isChannelMuted(n, t.id);
  return (!l || !a) && d.default.getMentionCount(e) > 0
}
t.default = a.forwardRef(function(e, t) {
  let {
    guildId: n,
    guildChannels: a,
    guildChannelsVersion: r,
    ...o
  } = e, u = (0, i.useFlattenedChannelIdListWithThreads)(n, a, r, !1, {
    ignoreRecents: !0
  }), d = (0, s.useStateFromStores)([f.default], () => f.default.isFocused());
  return (0, l.jsx)(h.default, {
    ref: t,
    ...o,
    isUnread: C,
    isMentioned: p,
    items: u,
    animate: d
  })
})