"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("725803"),
  i = s("546221"),
  r = s("489028"),
  o = s("674563");
t.default = e => {
  let {
    guild: t
  } = e, {
    application: s,
    loading: d
  } = (0, n.default)(t.id, o.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
  return d ? (0, a.jsx)(l.Spinner, {}) : null != s ? (0, a.jsx)(i.default, {
    guildId: t.id,
    application: s
  }) : (0, a.jsx)(r.default, {
    guild: t
  })
}