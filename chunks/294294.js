"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("512722"),
  n = s.n(l),
  i = s("442837"),
  r = s("395586"),
  o = s("825055"),
  d = s("909656"),
  u = s("430824"),
  c = s("682864"),
  E = s("689938");

function _(e) {
  let {
    guildId: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t));
  return n()(null != s, "Guild not found"), (0, a.jsxs)(r.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [(0, a.jsx)(o.default, {
      children: E.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SYNC_DISCLAIMER
    }), (0, a.jsx)(c.default, {
      size: 32
    }), (0, a.jsx)(d.default, {
      guild: s,
      isGuildProducts: !0
    })]
  })
}