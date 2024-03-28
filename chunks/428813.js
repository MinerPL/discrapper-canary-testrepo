"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var l = s("735250");
s("470079");
var a = s("442837"),
  n = s("270394"),
  i = s("388610"),
  r = s("430824"),
  o = s("496675"),
  d = s("246946"),
  u = s("981631");

function c() {
  let e = (0, a.useStateFromStores)([d.default], () => d.default.hideInstantInvites),
    {
      channel: t,
      guild: s
    } = (0, a.useStateFromStoresObject)([i.default, r.default], () => {
      let {
        channel: e
      } = i.default.getProps(), t = null != e ? r.default.getGuild(e.getGuildId()) : null;
      return {
        channel: e,
        guild: t
      }
    }, []),
    c = (0, a.useStateFromStores)([o.default], () => null != t && o.default.can(u.Permissions.CREATE_INSTANT_INVITE, t), [t]),
    {
      invites: h,
      loading: m
    } = (0, a.useStateFromStoresObject)([i.default], () => i.default.getInvites(), []);
  return (0, l.jsx)(n.default, {
    invites: h,
    loading: m,
    guild: s,
    channel: t,
    canCreateInvites: c,
    hide: e
  })
}