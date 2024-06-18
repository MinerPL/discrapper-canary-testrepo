"use strict";
t.d(s, {
  Z: function() {
    return _
  }
});
var n = t(735250);
t(470079);
var i = t(512722),
  l = t.n(i),
  a = t(442837),
  r = t(481060),
  o = t(395586),
  c = t(825055),
  d = t(909656),
  u = t(430824),
  E = t(689938);

function _(e) {
  let {
    guildId: s
  } = e, t = (0, a.e7)([u.Z], () => u.Z.getGuild(s));
  return l()(null != t, "Guild not found"), (0, n.jsxs)(o.AL, {
    guildId: s,
    children: [(0, n.jsx)(c.Z, {
      children: E.Z.Messages.GUILD_PRODUCTS_BASIC_INFO_SYNC_DISCLAIMER
    }), (0, n.jsx)(r.Spacer, {
      size: 32
    }), (0, n.jsx)(d.Z, {
      guild: t,
      isGuildProducts: !0
    })]
  })
}