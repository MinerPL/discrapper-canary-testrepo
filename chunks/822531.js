"use strict";
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(725803),
  a = t(546221),
  r = t(489028),
  o = t(674563);
s.Z = e => {
  let {
    guild: s
  } = e, {
    application: t,
    loading: c
  } = (0, l.Z)(s.id, o.wW.GUILD_ROLE_SUBSCRIPTIONS);
  return c ? (0, n.jsx)(i.Spinner, {}) : null != t ? (0, n.jsx)(a.Z, {
    guildId: s.id,
    application: t
  }) : (0, n.jsx)(r.Z, {
    guild: s
  })
}